/* ═══════════════════════════════════════════════
   ABDERRAHMEN BEN OMRANE — Portfolio JS
═══════════════════════════════════════════════ */

/* ── i18n ──
   French is the source language and lives in index.html only.
   On load, each [data-i18n] element's French content is snapshotted,
   so this file only has to carry the English translations. */
const EN = {
  meta_title:"Abderrahmen Ben Omrane · Cybersecurity · End-of-studies internship 2027",
  nav_home:"Home", nav_about:"About", nav_skills:"Skills", nav_exp:"Experience", nav_edu:"Education",
  nav_projects:"Projects", nav_certs:"Certifications", nav_contact:"Contact",

  hero_badge:"Looking for a 6-month end-of-studies internship · from February 2027",
  hero_subtitle:"Master's student in Information Systems Security at the <a href='https://www.utt.fr/' target='_blank' rel='noopener'>University of Technology of Troyes</a>",
  hero_desc:"Cybersecurity analyst for nearly two years in a SOC (L1 then L2 lead analyst, incident response and forensics, SIEM, Threat Intelligence), then technical consultant (configuration reviews, CVE tracking and patch management). I'm looking for an end-of-studies internship to put this experience to work for your security team.",
  hero_card_role:"SOC Analyst · Incident Response",
  hero_btn_contact:"Get in touch", hero_btn_cv:"View my CV", hero_btn_projects:"View projects",
  hero_stat_exp:"Years of experience", hero_stat_certs:"Certifications", hero_stat_proj:"Projects", hero_stat_lang:"Languages",

  about_eyebrow:"Who I am", about_title:"About <span>Me</span>",
  about_p1:"Final-year Master's student in Information Systems Security at the <a href='https://www.utt.fr/' target='_blank' rel='noopener'>University of Technology of Troyes</a>, after a professional Master's in Information Systems & Infrastructure Security and a Bachelor's in Embedded Systems at the <a href='https://www.isi.tn/' target='_blank' rel='noopener'>Higher Institute of Computer Science of El Manar</a> (Tunisia).",
  about_p2:"My path took me from detection to response: SOC analyst at <a href='https://www.keystone-corporation.com/' target='_blank' rel='noopener'>Keystone Group</a>, first L1 then L2 lead for the L1 analysts, with incident response and forensic engagements, then technical consultant at <a href='https://www.naxium.net/' target='_blank' rel='noopener'>Naxium Africa</a>. What sets me apart: both an operational and an advisory view, and a drive to automate security (Python, Ansible, SOAR) so teams can focus on what matters.",
  about_p3:"I'm currently practising cloud security on Microsoft Azure, and looking for a 6-month end-of-studies internship starting February 2027 to build on this experience and deepen my technical skills.",
  lang_fr:"French", lang_en:"English", lang_de:"German", lang_ar:"Arabic", lang_fluent:"Fluent", lang_native:"Native",
  info_search:"Looking for", info_search_val:"End-of-studies internship in cybersecurity",
  info_start:"Start", info_start_val:"February 2027 · 6 months",
  info_domains:"Areas", info_domains_val:"SOC / incident response, vulnerability management, pentesting, DevSecOps, cloud security",
  info_loc:"Location", info_loc_val:"Paris / Troyes, France · Open to relocation in France and abroad",

  skills_eyebrow:"What I work with", skills_title:"Technical <span>Skills</span>",
  tab_all:"All", tab_all_m:"All", tab_all_f:"All", tab_sec:"Security", tab_devops:"DevSecOps & Cloud", tab_dev:"Development & AI",
  tab_cyber:"Cybersecurity", tab_iot:"Embedded & IoT", tab_net:"Network & IoT", tab_ai:"AI",
  sg_ops:"SOC & incident response", sg_siem:"SIEM & detection", sg_devsecops:"DevSecOps & automation", sg_cloud:"Cloud & infrastructure",
  sg_infra:"Infrastructure & network", sg_iso:"GRC · standards (Master's coursework)", sg_dev:"Development & AI", sg_ai:"AI & Data",
  sg_iot:"Embedded systems & IoT",
  sk_soc:"SOC L1 / L2", sk_forensic:"Forensic investigation", sk_splunk:"Splunk (labs)", sk_qradar:"IBM QRadar (labs)", sk_sentinel:"Microsoft Sentinel (labs)", sk_pyauto:"Python (automation)", sk_azure:"Microsoft Azure (labs)", sk_ir:"Incident response", sk_vuln:"Vulnerability management", sk_cve:"CVE & patch tracking",
  sk_pentest:"Penetration testing", sk_rules:"Detection rules", sk_cicd:"CI/CD pipeline security",
  sk_az_res:"Resource deployment", sk_az_vnet:"Virtual networks", sk_az_vm:"Virtual machines",
  sk_az_iam:"Identity & access (IAM)", sk_az_mon:"Monitoring & security", sk_netsec:"Network security",
  sk_sup:"Supervised learning (regression, classification)", sk_unsup:"Unsupervised (clustering)", sk_iotsec:"IoT security",

  exp_eyebrow:"Career path", exp_title:"Professional <span>Experience</span>",
  exp1_role:"Technical Consultant", exp1_loc:"Ariana, Tunisia", exp1_date:"November 2025 – August 2026",
  exp1_b1:"Performed configuration reviews during pre-integration and post-deployment phases of client projects, identifying and qualifying configuration flaws.",
  exp1_b2:"Coordinated CVE tracking and patch management with 2 software vendors.",
  exp1_b3:"Diagnosed and resolved post-production technical and security incidents.",
  exp1_b4:"Advised clients on which security measures to prioritise and wrote the related recommendations.",
  tag_config:"Configuration review", tag_advisory:"Security advisory",
  exp2_role:"Cybersecurity Analyst", exp2_loc:"Tunis, Tunisia", exp2_date:"February 2024 – October 2025",
  exp2_b1:"Handled security alerts and incidents with SIEM tools, first as L1 then as L2 lead for the L1 analysts, from triage to remediation.",
  exp2_b6:"Took part in incident response and forensic investigations: evidence collection and analysis, timeline reconstruction, report writing.",
  exp2_b2:"Deployed and configured SIEM solutions (Security Onion, Wazuh) for enterprise environments, including Active Directory architectures.",
  exp2_b3:"Strengthened SIEM detection rules by taking part in Red Team penetration testing missions, reducing the false-positive rate.",
  exp2_b4:"Integrated Threat Intelligence feeds into client platforms, improving proactive threat detection.",
  exp2_b5:"Communicated critical alerts and remediation recommendations to clients.",

  edu_eyebrow:"Academic background", edu_title:"<span>Education</span>", edu_now:"Current",
  edu0_deg:"Master's Degree (2nd year)", edu0_field:"Information Systems Security",
  edu0_school:"University of Technology of Troyes", edu0_date:"September 2026 – present · Troyes, France",
  edu0_desc:"Final year of the Master's. Looking for a 6-month end-of-studies internship starting February 2027.",
  edu1_deg:"Professional Master's Degree", edu1_field:"Information Systems and Infrastructure Security",
  edu1_school:"Higher Institute of Computer Science of El Manar", edu1_date:"2023 – 2025 · Ariana, Tunisia",
  edu1_desc:"Network security, secure architectures, penetration testing and forensics. Final project: Cyber-Range lab creation module.",
  edu2_deg:"Bachelor's Degree", edu2_field:"Electronics, Electrotechnics & Automation – Embedded Systems",
  edu2_school:"Higher Institute of Computer Science of El Manar", edu2_date:"2020 – 2023 · Ariana, Tunisia",
  edu2_desc:"Microcontrollers, communication protocols, IoT development and real-time systems. Final project: ATmega328P-based IoT irrigation node.",

  proj_eyebrow:"What I've built", proj_title:"<span>Projects</span>",
  status_done:"Completed", status_wip:"In progress",
  p1_status:"Final-year project · February – May 2025",
  p1_title:"Cyber-Range Lab Creation Module",
  p1_b1:"Integrated static (SAST) and dynamic (DAST) analysis into the development lifecycle (Secure-by-Design).",
  p1_b2:"Automated the infrastructure with Ansible (Infrastructure as Code) to deploy and configure cyberattack simulation scenarios.",
  p1_b3:"Built an automated provisioning module for pre-configured virtual machines (Node.js, Django, VMware).",
  p1_b4:"Integrated a realistic Active Directory environment for hands-on cybersecurity training exercises.",
  p2_title:"Home SOC Lab — Full-Stack Security Infrastructure",
  p2_desc:"Built a complete home SOC: VMware for virtualization, pfSense for perimeter defense, Elastic SIEM for log management and detection, Wazuh for endpoint monitoring and Shuffle SOAR for automated incident response orchestration.",
  p3_title:"Medical IoT Gateway — Security Hardening",
  p3_desc:"Raspberry Pi acting as a hospital IoT gateway over MQTT. Full OWASP IoT Top 10 assessment: attack surface mapping, port enumeration, MQTT interception. Remediation: TLS-enforced MQTT, certificate auth, firewall policies and key-only SSH.",
  p5_title:"AI-Enhanced SIEM Detection",
  p5_desc:"Research project on using machine learning models for anomaly detection and SIEM rule generation, aiming to reduce false positives in SOC environments.",

  certs_eyebrow:"Credentials", cert_open:"View certificate", cert_earned:"Earned",

  roadmap_eyebrow:"Where I'm heading", roadmap_title:"Learning <span>Roadmap</span>",
  rm1_phase:"2026 · Now", rm1_title:"Current objectives",
  rm1_i1:"Master's in Information Systems Security — University of Technology of Troyes", rm1_i2:"Cloud security on Microsoft Azure (labs)", rm1_i3:"CTFs & Hack The Box machines", rm1_i4:"Security automation (Python, SOAR)",
  rm2_phase:"February 2027", rm2_title:"End-of-studies internship",
  rm2_i1:"6-month internship in cybersecurity", rm2_i2:"Put my SOC and consulting experience to work",
  rm2_i3:"Grow my technical skills on real-world engagements",
  rm3_phase:"Next", rm3_title:"Long-term goals", rm3_i1:"Cloud security certification", rm3_i2:"Security & AI research",

  assoc_eyebrow:"Community", assoc_title:"Associative <span>Activities</span>",
  assoc1_role:"Member · October 2023 – January 2024",
  assoc1_desc:"Prepared for and competed in CTF (Capture The Flag) competitions with Securinets, the cybersecurity club of the <a href='https://www.isi.tn/' target='_blank' rel='noopener'>Higher Institute of Computer Science of El Manar</a>.",
  assoc2_role:"Member · October 2020 – January 2024 · Vice-President of Finance (2021–2022)",
  assoc2_desc:"Over three years of involvement in social entrepreneurship projects. Serving as VP Finance developed my leadership, budgeting and teamwork skills.",


  contact_eyebrow:"Let's connect", contact_title:"Get in <span>Touch</span>",
  contact_desc:"Offering a cybersecurity end-of-studies internship starting February 2027? I'd be glad to talk — by email, phone or on LinkedIn.",
  contact_phone:"Phone",
  copy:"Copy"
};

/* Strings used only from JS (no element in the page to snapshot). */
const UI = {
  fr: { copied:"Copié !" },
  en: { copied:"Copied!" }
};

const STORAGE = { lang: 'abo-lang', theme: 'abo-theme' };
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* private mode / blocked storage */ }
}
function load(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

/* ── Language ── */
let lang = 'fr';
const textNodes = $$('[data-i18n]').map(el => ({ el, key: el.dataset.i18n, fr: el.innerHTML }));
const placeholderNodes = $$('[data-i18n-placeholder]').map(el => ({ el, key: el.dataset.i18nPlaceholder, fr: el.placeholder }));

function applyLang(l) {
  lang = l === 'en' ? 'en' : 'fr';
  const pick = (n) => (lang === 'en' && EN[n.key] !== undefined ? EN[n.key] : n.fr);
  textNodes.forEach(n => { n.el.innerHTML = pick(n); });
  placeholderNodes.forEach(n => { n.el.placeholder = pick(n); });
  document.documentElement.lang = lang;
  $$('.lang-btn').forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on);
  });
  store(STORAGE.lang, lang);
}

/* ── Theme (initial value is set by the inline script in <head>) ── */
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  store(STORAGE.theme, t);
}

/* ── Filter tabs: show items whose data-cat contains the selected tab ── */
function initFilters() {
  $$('.filter-tabs').forEach(bar => {
    const tabs = $$('.filter-tab', bar);
    const items = [...document.getElementById(bar.dataset.filterFor).children];
    tabs.forEach(tab => {
      tab.setAttribute('aria-pressed', tab.classList.contains('active'));
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.toggle('active', t === tab);
          t.setAttribute('aria-pressed', t === tab);
        });
        const cat = tab.dataset.tab;
        items.forEach(item => {
          item.hidden = cat !== 'all' && !item.dataset.cat.split(' ').includes(cat);
        });
      });
    });
  });
}

/* ── Scroll reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  $$('.reveal').forEach(el => obs.observe(el));
}

/* ── Highlight the nav link of the section in view ── */
function initActiveNav() {
  const links = $$('.nav-links a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { threshold: 0.35 });
  $$('section[id]').forEach(s => obs.observe(s));
}

/* ── Back to top ── */
function initBackTop() {
  const btn = $('#backTop');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Copy email / phone ── */
function initCopy() {
  $$('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.copy).then(() => {
        const label = btn.textContent;
        btn.textContent = UI[lang].copied;
        setTimeout(() => { btn.textContent = label; }, 2000);
      });
    });
  });
}

/* ── Mobile menu ── */
function initMobile() {
  const hb = $('#hamburger');
  const menu = $('#mobileMenu');
  const setOpen = open => {
    menu.classList.toggle('open', open);
    hb.setAttribute('aria-expanded', open);
  };
  hb.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setOpen(false)));
}

/* ── Init (script is loaded with defer, so the DOM is ready) ── */
applyTheme(document.documentElement.dataset.theme || 'light');
applyLang(load(STORAGE.lang) || 'fr');

$('#themeToggle').addEventListener('click', () =>
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
$$('.lang-btn').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

initFilters();
initReveal();
initActiveNav();
initBackTop();
initCopy();
initMobile();
