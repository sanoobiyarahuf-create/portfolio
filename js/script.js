/* =====================================================================
   1. CONFIG — edit everything about you here.
   Empty strings / empty arrays are hidden automatically (no broken links).
   ===================================================================== */
const CONFIG = {
  site: {
    name: "Sanoobiya Mol VT",
    logo: "SM",
    title: "Aspiring Data Scientist",
    greeting: "Hi, I'm Sanoobiya Mol VT.",
    headline: "Turning numbers into meaningful insights.",
    roles: ["Mathematics Graduate", "Data Science Learner", "Python & SQL Enthusiast"],
    description:
      "A B.Sc Mathematics graduate currently training in data science, using Python and SQL to explore data and solve problems. I'm looking for my first opportunity to learn, contribute and grow.",
    availability: "Open to fresher opportunities", // "" to hide the badge
    avatarImage: "",                               // e.g. "assets/images/profile.jpg"; empty shows initials
    resume: ""                                     // e.g. "assets/resume.pdf"; empty hides the button
  },

  about: {
    paragraphs: [
      "I'm completing my B.Sc in Mathematics at Majlis Arts and Science College (Autonomous), Puramannur, in 2026. Mathematics taught me to break problems into clear steps and to be careful with logic and detail.",
      "Alongside my degree I'm pursuing data science at Techolas Technologies, Kozhikode, where I work with Python and SQL. I enjoy turning raw data into something people can understand and act on.",
      "I'm a fresher, and I bring a positive attitude, a strong sense of responsibility and a willingness to keep learning."
    ],
    focus: [
      { icon: "calculator", text: "Mathematics and analytical thinking" },
      { icon: "code-2", text: "Python programming" },
      { icon: "database", text: "SQL and data handling" },
      { icon: "bar-chart-3", text: "Data science fundamentals" }
    ]
  },

  skills: [
    { category: "Programming & Data", icon: "code-2", items: ["Python", "SQL"] },
    { category: "Learning", icon: "brain-circuit", items: ["Data Science"] },
    {
      category: "Professional Strengths",
      icon: "users",
      items: ["Team Collaboration", "Responsibility & Accountability", "Time Management", "Adaptability", "Positive Attitude"]
    }
  ],

  // Categories shown as filters are built from this list automatically.
  // These are SAMPLE entries — replace with your real projects. Remove "sample": true when you do.
  projects: [
    {
      sample: true,
      title: "Sample Project: Sales Data Analysis",
      category: "Data Analytics",
      description: "Placeholder. Describe what the project does and the problem it solves.",
      tech: ["Python", "SQL"],
      features: ["Replace with a key feature", "Replace with another outcome"],
      image: "",   // e.g. "assets/images/project1.png"
      demo: "",    // empty = link hidden
      code: "",
      caseStudy: ""
    },
    {
      sample: true,
      title: "Sample Project: Prediction Model",
      category: "Data Science",
      description: "Placeholder. Explain the dataset, approach and result once you have a real project.",
      tech: ["Python"],
      features: ["Replace with a key feature"],
      image: "",
      demo: "",
      code: "",
      caseStudy: ""
    },
    {
      sample: true,
      title: "Sample Project: Personal Website",
      category: "Web Development",
      description: "Placeholder. This portfolio itself could be listed here.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["Replace with a key feature"],
      image: "",
      demo: "",
      code: "",
      caseStudy: ""
    }
  ],

  experience: [
    {
      type: "training",
      title: "Data Science Training",
      org: "Techolas Technologies, Kozhikode",
      dates: "Ongoing",
      points: ["Learning data science with Python and SQL"],
      tech: ["Python", "SQL"]
    },
    {
      type: "education",
      title: "B.Sc Mathematics",
      org: "Majlis Arts and Science College (Autonomous), Puramannur",
      dates: "Graduating 2026",
      points: ["Undergraduate degree in Mathematics"],
      tech: []
    }
  ],

  // Leave empty to hide the whole section. Item: { icon, title, issuer, year }
  achievements: [],

  contact: {
    email: "sanoobiyamol669@gmail.com",            // "name@example.com"
    phone: "+91 6238254513",            // "+91XXXXXXXXXX"  (with country code)
    whatsapp: "91 6238254513",         // digits only with country code, e.g. "91XXXXXXXXXX"
    whatsappMessage: "Hi Sanoobiya, I came across your portfolio and would like to connect.",
    linkedin: "",         // full profile URL
    github: "",           // full profile URL
    instagram: "",        // full profile URL
    location: "Malappuram, Kerala"          // e.g. "Kozhikode, Kerala"
  }
};

/* =====================================================================
   2. Helpers
   ===================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const icons = () => window.lucide && window.lucide.createIcons();
const clean = (v) => (typeof v === "string" ? v.trim() : "");

/* =====================================================================
   3. Render content from CONFIG
   ===================================================================== */
function renderSite() {
  const { site } = CONFIG;
  document.title = `${site.name} | ${site.title}`;
  $$("[data-site='name']").forEach((el) => (el.textContent = site.name));
  $$("[data-site='title']").forEach((el) => (el.textContent = site.title));
  $$("[data-site='logo']").forEach((el) => (el.textContent = site.logo));

  $("#hero-greeting").textContent = site.greeting;
  $("#hero-headline").textContent = site.headline;
  $("#hero-description").textContent = site.description;

  if (clean(site.availability)) {
    $("#hero-availability").hidden = false;
    $("[data-site='availability']").textContent = site.availability;
  }

  const avatar = $("#avatar");
  if (clean(site.avatarImage)) {
    avatar.innerHTML = `<img src="${esc(site.avatarImage)}" alt="Portrait of ${esc(site.name)}" width="280" height="280">`;
  } else {
    avatar.textContent = site.logo;
  }

  if (clean(site.resume)) {
    const btn = $("#resume-btn");
    btn.href = site.resume;
    btn.hidden = false;
  }
}

function socialLinks() {
  const c = CONFIG.contact;
  return [
    { key: "linkedin", icon: "linkedin", label: "LinkedIn", href: clean(c.linkedin) },
    { key: "github", icon: "github", label: "GitHub", href: clean(c.github) },
    { key: "instagram", icon: "instagram", label: "Instagram", href: clean(c.instagram) },
    { key: "email", icon: "mail", label: "Email", href: clean(c.email) ? `mailto:${clean(c.email)}` : "" }
  ].filter((s) => s.href);
}

function renderSocials() {
  const links = socialLinks();
  const html = links
    .map((s) => {
      const external = !s.href.startsWith("mailto:");
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<li><a class="social-link" href="${esc(s.href)}"${attrs} aria-label="${esc(s.label)}"><i data-lucide="${s.icon}"></i></a></li>`;
    })
    .join("");
  $("#hero-socials").innerHTML = html;
  $("#footer-socials").innerHTML = html;
  if (!links.length) {
    $("#hero-socials").hidden = true;
    $("#footer-socials").hidden = true;
  }
}

function renderAbout() {
  $("#about-text").innerHTML = CONFIG.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#about-focus").innerHTML = CONFIG.about.focus
    .map(
      (f) => `<li class="flex items-center gap-3">
        <span class="skill-icon"><i data-lucide="${esc(f.icon)}"></i></span>
        <span class="text-sm font-medium">${esc(f.text)}</span></li>`
    )
    .join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = CONFIG.skills
    .filter((g) => g.items && g.items.length)
    .map(
      (g, i) => `<article class="card card-hover reveal" style="--delay:${i * 80}ms">
        <div class="flex items-center gap-3">
          <span class="skill-icon"><i data-lucide="${esc(g.icon)}"></i></span>
          <h3 class="text-lg font-semibold">${esc(g.category)}</h3>
        </div>
        <ul class="mt-5 flex flex-wrap gap-2">
          ${g.items.map((s) => `<li class="badge">${esc(s)}</li>`).join("")}
        </ul></article>`
    )
    .join("");
}

const categoryIcon = {
  "Web Development": "globe",
  "Data Analytics": "bar-chart-3",
  "Data Science": "brain-circuit",
  Other: "folder"
};

function renderProjects() {
  const projects = CONFIG.projects;
  const grid = $("#projects-grid");
  const filters = $("#project-filters");

  if (!projects.length) {
    $("#projects").hidden = true;
    return;
  }

  grid.innerHTML = projects
    .map((p, i) => {
      const thumb = clean(p.image)
        ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="640" height="360">`
        : `<i data-lucide="${categoryIcon[p.category] || "folder"}" aria-hidden="true"></i>`;
      const links = [
        clean(p.demo) && { href: p.demo, icon: "external-link", label: "Live Demo" },
        clean(p.code) && { href: p.code, icon: "github", label: "Source Code" },
        clean(p.caseStudy) && { href: p.caseStudy, icon: "file-text", label: "Case Study" }
      ].filter(Boolean);
      return `<article class="card card-hover project-card reveal" data-category="${esc(p.category)}" style="--delay:${(i % 3) * 80}ms">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <div>
            ${p.sample ? '<span class="sample-tag">Sample content</span>' : ""}
            <h3 class="text-xl font-semibold leading-snug">${esc(p.title)}</h3>
            <p class="mt-1 text-xs font-medium text-accent">${esc(p.category)}</p>
          </div>
          <p class="text-sm leading-relaxed muted">${esc(p.description)}</p>
          ${p.features && p.features.length ? `<ul class="space-y-1 text-sm muted">${p.features.map((f) => `<li class="flex gap-2"><i data-lucide="check" class="mt-0.5 h-4 w-4 shrink-0 text-accent"></i><span>${esc(f)}</span></li>`).join("")}</ul>` : ""}
          <ul class="flex flex-wrap gap-2">${(p.tech || []).map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul>
          ${links.length ? `<div class="project-links">${links.map((l) => `<a class="link-pill" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer"><i data-lucide="${l.icon}"></i>${l.label}</a>`).join("")}</div>` : ""}
        </div></article>`;
    })
    .join("");

  if (projects.some((p) => p.sample)) {
    const note = $("#projects-note");
    note.hidden = false;
    note.textContent = "These are placeholder projects. Replace them in js/script.js with your real work.";
  }

  // Filters (only when there is something to filter)
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  if (cats.length <= 2) {
    filters.hidden = true;
    return;
  }
  filters.innerHTML = cats
    .map((c, i) => `<button type="button" class="filter-btn" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`)
    .join("");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const f = btn.dataset.filter;
    $$(".filter-btn", filters).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    $$(".project-card", grid).forEach((card) => {
      const show = f === "All" || card.dataset.category === f;
      card.classList.toggle("is-hidden", !show);
      if (show) card.classList.add("visible");
    });
  });
}

function renderTimeline() {
  const typeIcon = { education: "graduation-cap", training: "book-open", job: "briefcase", internship: "briefcase", freelance: "laptop" };
  $("#timeline").innerHTML = CONFIG.experience
    .map(
      (e, i) => `<li class="timeline-item reveal" style="--delay:${i * 80}ms">
        <div class="card">
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-lg font-semibold">${esc(e.title)}</h3>
              <p class="mt-1 text-sm text-accent">${esc(e.org)}</p>
            </div>
            <span class="skill-icon shrink-0"><i data-lucide="${typeIcon[e.type] || "briefcase"}"></i></span>
          </div>
          <p class="mt-2 text-xs font-medium uppercase tracking-wide muted">${esc(e.dates)}</p>
          ${e.points && e.points.length ? `<ul class="mt-3 list-disc space-y-1 pl-5 text-sm muted">${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
          ${e.tech && e.tech.length ? `<ul class="mt-4 flex flex-wrap gap-2">${e.tech.map((t) => `<li class="badge">${esc(t)}</li>`).join("")}</ul>` : ""}
        </div></li>`
    )
    .join("");
}

function renderAchievements() {
  const items = CONFIG.achievements;
  if (!items.length) return; // section stays hidden
  $("#achievements").hidden = false;
  $("#achievements-grid").innerHTML = items
    .map(
      (a, i) => `<article class="card card-hover reveal" style="--delay:${i * 80}ms">
        <span class="skill-icon"><i data-lucide="${esc(a.icon || "award")}"></i></span>
        <h3 class="mt-4 text-lg font-semibold">${esc(a.title)}</h3>
        <p class="mt-1 text-sm muted">${esc([a.issuer, a.year].filter(Boolean).join(" · "))}</p></article>`
    )
    .join("");
}

function renderContact() {
  const c = CONFIG.contact;
  const phone = clean(c.phone);
  const wa = clean(c.whatsapp).replace(/\D/g, "");
  const msg = clean(c.whatsappMessage);

  const cards = [
    clean(c.email) && { icon: "mail", label: "Email", desc: clean(c.email), href: `mailto:${clean(c.email)}` },
    phone && { icon: "phone", label: "Phone", desc: phone, href: `tel:${phone.replace(/[^\d+]/g, "")}` },
    wa && { icon: "message-circle", label: "WhatsApp", desc: "Chat with me directly", href: `https://wa.me/${wa}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`, external: true },
    clean(c.linkedin) && { icon: "linkedin", label: "LinkedIn", desc: "Connect professionally", href: clean(c.linkedin), external: true },
    clean(c.github) && { icon: "github", label: "GitHub", desc: "Browse my code", href: clean(c.github), external: true },
    clean(c.instagram) && { icon: "instagram", label: "Instagram", desc: "Follow along", href: clean(c.instagram), external: true },
    clean(c.location) && { icon: "map-pin", label: "Location", desc: clean(c.location), href: "" }
  ].filter(Boolean);

  if (!cards.length) {
    $("#contact-empty").hidden = false;
    return;
  }

  $("#contact-grid").innerHTML = cards
    .map((k, i) => {
      const inner = `<span class="skill-icon"><i data-lucide="${k.icon}"></i></span>
        <span class="min-w-0"><span class="block font-semibold">${esc(k.label)}</span>
        <span class="block truncate text-sm muted">${esc(k.desc)}</span></span>
        ${k.href ? '<i data-lucide="arrow-up-right" class="arrow h-4 w-4"></i>' : ""}`;
      return k.href
        ? `<a class="card card-hover contact-card reveal" style="--delay:${i * 60}ms" href="${esc(k.href)}"${k.external ? ' target="_blank" rel="noopener noreferrer"' : ""} aria-label="${esc(k.label)}: ${esc(k.desc)}">${inner}</a>`
        : `<div class="card contact-card static reveal" style="--delay:${i * 60}ms">${inner}</div>`;
    })
    .join("");
}

/* =====================================================================
   4. Interactions
   ===================================================================== */
function initTheme() {
  const root = document.documentElement;
  const btn = $("#theme-toggle");
  const meta = $("meta[name='theme-color']");
  const apply = (light) => {
    root.classList.toggle("light", light);
    if (meta) meta.setAttribute("content", light ? "#fbfbfd" : "#0b0d12");
  };
  apply(root.classList.contains("light"));
  btn.addEventListener("click", () => {
    const light = !root.classList.contains("light");
    apply(light);
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
  });
}

function initMobileMenu() {
  const toggle = $("#menu-toggle");
  const menu = $("#mobile-menu");
  const header = $("#site-header");
  if (!toggle || !menu) return;

  const set = (open) => {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
    icons();
  };
  toggle.addEventListener("click", () => set(menu.hidden));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => set(false)));
  document.addEventListener("click", (e) => {
    if (!menu.hidden && !header.contains(e.target)) set(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      set(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", (m) => m.matches && set(false));
}

function initActiveNav() {
  const links = $$("header .nav-link");
  const ids = ["home", "about", "skills", "projects", "experience", "contact"];
  const sections = ids.map((id) => document.getElementById(id)).filter((s) => s && !s.hidden);
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => {
          const on = l.getAttribute("href") === `#${en.target.id}`;
          l.classList.toggle("active", on);
          if (on) l.setAttribute("aria-current", "page");
          else l.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

function initReveal() {
  const els = $$(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          obs.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

function initTyping() {
  const el = $("#role-text");
  const roles = CONFIG.site.roles;
  if (!el || !roles.length) return;
  if (reducedMotion || roles.length === 1) {
    el.textContent = roles[0];
    return;
  }
  let r = 0, i = 0, deleting = false;
  const tick = () => {
    const word = roles[r];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 40 : 80;
    if (!deleting && i === word.length) { deleting = true; delay = 1600; }
    else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
    setTimeout(tick, delay);
  };
  tick();
}

function initBackToTop() {
  const btn = $("#back-to-top");
  const onScroll = () => btn.classList.toggle("show", window.scrollY > 600);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
}

/* =====================================================================
   5. Init
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderSite();
  renderSocials();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderAchievements();
  renderContact();

  $("#year").textContent = new Date().getFullYear();

  initTheme();
  initMobileMenu();
  initReveal();
  initActiveNav();
  initTyping();
  initBackToTop();

  icons(); // must run after all dynamic content exists
});