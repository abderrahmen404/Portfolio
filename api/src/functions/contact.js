/* ═══════════════════════════════════════════════
   POST /api/contact — portfolio contact form
   Validates the message, filters bots, then notifies the owner by
   email (Azure Communication Services) and/or Telegram.
   Each channel is enabled only when its app settings are present.
═══════════════════════════════════════════════ */
const { app } = require('@azure/functions');
const { EmailClient } = require('@azure/communication-email');

const LIMITS = { name: 100, email: 200, company: 150, messageMin: 10, messageMax: 4000 };
const MIN_FILL_MS = 3000;                 // humans need more than 3 s to fill the form
const RATE = { max: 5, windowMs: 10 * 60 * 1000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Best-effort, per-instance rate limit (resets when the instance recycles). */
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE.max;
}

const clean = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
const oneLine = v => v.replace(/[\r\n]+/g, ' ');
const escapeHtml = v => v.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function validate(body) {
  const msg = {
    name: oneLine(clean(body.name, LIMITS.name)),
    email: oneLine(clean(body.email, LIMITS.email)),
    company: oneLine(clean(body.company, LIMITS.company)),
    message: clean(body.message, LIMITS.messageMax),
    lang: body.lang === 'en' ? 'en' : 'fr'
  };
  const ok = msg.name.length > 0
    && EMAIL_RE.test(msg.email)
    && msg.message.length >= LIMITS.messageMin;
  return ok ? msg : null;
}

async function sendEmail(msg, env) {
  const client = new EmailClient(env.ACS_CONNECTION_STRING);
  const who = msg.company ? `${msg.name} (${msg.company})` : msg.name;
  const poller = await client.beginSend({
    senderAddress: env.ACS_SENDER_ADDRESS,
    recipients: { to: [{ address: env.NOTIFY_EMAIL }] },
    replyTo: [{ address: msg.email, displayName: msg.name }],
    content: {
      subject: `[Portfolio] Nouveau message de ${who}`,
      plainText: `Nom : ${msg.name}\nEmail : ${msg.email}\nEntreprise : ${msg.company || '-'}\nLangue : ${msg.lang}\n\n${msg.message}`,
      html: `<p><strong>Nom :</strong> ${escapeHtml(msg.name)}<br>`
        + `<strong>Email :</strong> ${escapeHtml(msg.email)}<br>`
        + `<strong>Entreprise :</strong> ${escapeHtml(msg.company || '-')}<br>`
        + `<strong>Langue :</strong> ${msg.lang}</p>`
        + `<p style="white-space:pre-wrap">${escapeHtml(msg.message)}</p>`
    }
  });
  const result = await poller.pollUntilDone();
  if (result.status !== 'Succeeded') throw new Error(`ACS email status: ${result.status}`);
}

async function sendTelegram(msg, env) {
  // Plain text (no parse_mode) so visitor input can never inject formatting or links.
  const text = `Portfolio — nouveau message\n\n${msg.name}${msg.company ? ` · ${msg.company}` : ''}\n${msg.email}\n\n${msg.message}`;
  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: text.slice(0, 4000), disable_web_page_preview: true })
  });
  if (!res.ok) throw new Error(`Telegram HTTP ${res.status}`);
}

async function handler(request, context, env = process.env) {
  const reply = (status, body) => ({ status, jsonBody: body });

  let body;
  try { body = await request.json(); } catch { return reply(400, { error: 'invalid' }); }
  if (!body || typeof body !== 'object') return reply(400, { error: 'invalid' });

  // Bots: honeypot filled or form submitted too fast → pretend success, send nothing.
  if (clean(body.website, 200) || Number(body.elapsed) < MIN_FILL_MS) {
    context.log('contact: dropped suspected bot submission');
    return reply(200, { ok: true });
  }

  const ip = (request.headers.get('x-azure-clientip')
    || (request.headers.get('x-forwarded-for') || '').split(',')[0]
    || 'unknown').trim();
  if (rateLimited(ip)) return reply(429, { error: 'rate_limited' });

  const msg = validate(body);
  if (!msg) return reply(400, { error: 'invalid' });

  const channels = [];
  if (env.ACS_CONNECTION_STRING && env.ACS_SENDER_ADDRESS && env.NOTIFY_EMAIL) channels.push(['email', sendEmail]);
  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) channels.push(['telegram', sendTelegram]);
  if (channels.length === 0) {
    context.error('contact: no notification channel configured');
    return reply(500, { error: 'not_configured' });
  }

  const results = await Promise.allSettled(channels.map(([, send]) => send(msg, env)));
  results.forEach((r, i) => {
    if (r.status === 'rejected') context.error(`contact: ${channels[i][0]} failed: ${r.reason?.message}`);
  });
  return results.some(r => r.status === 'fulfilled')
    ? reply(200, { ok: true })
    : reply(502, { error: 'send_failed' });
}

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'contact',
  handler: (request, context) => handler(request, context)
});

module.exports = { handler, validate };
