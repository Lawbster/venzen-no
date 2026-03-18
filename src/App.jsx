import { useEffect, useMemo, useState } from "react";
import { SiReact, SiVite, SiTypescript, SiDotnet, SiFirebase, SiGoogle, SiTailwindcss } from "react-icons/si";

// ─── Copy ────────────────────────────────────────────────────────────────────

const COPY = {
  en: {
    nav: ["About", "Projects", "Stack", "Contact"],
    heroTag: "Independent consultant",
    headline: "Built on understanding. Delivered with precision.",
    subhead:
      "I combine strong technical skills with a genuine instinct for how businesses and teams operate. Most developers build what's asked. I dig into the real problem first → then build what's actually needed.",
    metrics: [
      { label: "Focus", value: "Power Apps · Canvas Apps · Everything AI · Automation" },
      { label: "Also",  value: "React · Azure Logic Apps"                               },
      { label: "Base",  value: "Oslo, Norway" },
    ],
    aboutTitle:      "About",
    aboutBody:
      "Hi, I'm Emil. I work as an independent consultant at Venzen AS. I build business apps via Power Platform, or progressive web apps via React/Vite. This site is built in React and Tailwind CSS.",
    backgroundTitle: "Background",
    backgroundItems: [
      "SMITE World Champion 2014, Team Solomid and SK-Gaming. 7 years at the top of competitive esports.",
      "Norwegian Army: IT apprentice, Cyber Defence, 2012–2014.",
      "IT Consultant and Incident Manager, Visolit (Advania Norge), 2019–2021.",
      "Power Apps developer and solution architect, CGI and Sopra Steria, 2021–present.",
    ],
    certsTitle:           "Certifications",
    anthropicCoursesTitle: "Anthropic (Claude AI) certifications",
    stackTitle:           "Stack",
    stackSubhead:    "The tools I use to turn complex business requirements into working solutions.",
    contactTitle:    "Contact",
    contactBody:     "Have a project or an idea? Let's talk.",
    emailLabel:      "Email",
    footer:          "Venzen | independent consultancy.",
    hobbyLabel:      "Side projects",
    hobbySubhead:    "Things I build for fun.",
    projectsLabel:   "Projects",
    projectsTitle:   "Featured work",
    ongoingLabel:    "Ongoing",
    deliveredLabel:  "Delivered",
  },
  no: {
    nav: ["Om", "Prosjekter", "Stack", "Kontakt"],
    heroTag: "Selvstendig konsulent",
    headline: "Bygget på forståelse. Levert med presisjon.",
    subhead:
      "Jeg kombinerer solid teknisk kompetanse med en genuin nysgjerrighet for hvordan virksomheter og team fungerer. Mange utviklere bygger det du spør om. Jeg graver i det egentlige problemet → og bygger det som faktisk trengs.",
    metrics: [
      { label: "Fokus", value: "Power Apps · Canvas Apps · Alt AI/KI · Automasjon" },
      { label: "Også",  value: "React · Azure Logic Apps"                           },
      { label: "Base",  value: "Oslo, Norge"                                        },
    ],
    aboutTitle:      "Om",
    aboutBody:
      "Hei, jeg er Emil og jobber som selvstendig konsulent i Venzen AS. Jeg bygger forretningsapper via Power Platform eller progressive web-apper via React/Vite. Denne nettsiden er skrevet i React og Tailwind CSS.",
    backgroundTitle: "Bakgrunn",
    backgroundItems: [
      "SMITE-verdensmester 2014, Team Solomid og SK-Gaming. 7 år på toppen av konkurransespill.",
      "Hæren: IT-fagbrev, Cyberforsvaret, 2012–2014.",
      "IT-konsulent og Incident Manager, Visolit (Advania Norge), 2019–2021.",
      "Power Apps-utvikler og løsningsarkitekt, CGI og Sopra Steria, 2021–d.d.",
    ],
    certsTitle:           "Sertifiseringer",
    anthropicCoursesTitle: "Anthropic (Claude AI)-sertifiseringer",
    stackTitle:           "Stack",
    stackSubhead:    "Verktøyene jeg bruker for å gjøre komplekse forretningsbehov til fungerende løsninger.",
    contactTitle:    "Kontakt",
    contactBody:     "Har du et prosjekt eller en idé? La oss snakke.",
    emailLabel:      "E-post",
    footer:          "Venzen | selvstendig konsulent.",
    hobbyLabel:      "Hobbyprosjekter",
    hobbySubhead:    "Ting jeg bygger på fritiden.",
    projectsLabel:   "Prosjekter",
    projectsTitle:   "Utvalgte prosjekter",
    ongoingLabel:    "Pågående",
    deliveredLabel:  "Levert",
  },
};

// ─── Resume data ──────────────────────────────────────────────────────────────

const RESUME = {
  projects: [
    {
      client:  "Sporveien",
      titleEn: "Digital accident report: Trikken",
      titleNo: "Digital uhellsrapport: Trikken",
      descEn:  "Replaced paper-based accident reporting for Oslo's tram network with a full Power Apps solution: drawing support, image uploads, auto-save, Dataverse storage, and automated PDF generation via Public 360.",
      descNo:  "Erstattet papirbasert uhellsrapportering for Trikken med en fullverdig Power Apps-løsning: tegning, bildeopplasting, automatisk lagring, Dataverse og automatisk PDF-generering via Public 360.",
      status:  "ongoing",
      tech:    ["Power Apps", "Dataverse", "Power Automate", "Azure Key Vault", "API Management"],
    },
    {
      client:  "Skatteetaten",
      titleEn: "Skills registration system",
      titleNo: "Kompetanseregistreringssystem",
      descEn:  "Canvas app replacing fragmented Excel/SharePoint data with a centralised Dataverse model, Entra-based access control, automated daily HR flows, and Power BI reporting across IT departments.",
      descNo:  "Canvas-app som erstattet fragmenterte Excel/SharePoint-data med sentralisert Dataverse-modell, Entra-basert tilgangsstyring, automatiserte HR-flyter og Power BI-rapportering på tvers av IT-avdelinger.",
      status:  "delivered",
      tech:    ["Power Apps", "Dataverse", "Azure Entra ID", "Power Automate", "Power BI"],
    },
    {
      client:  "Hafslund",
      titleEn: "Field worker mobile app",
      titleNo: "Mobilapp for fagarbeidere",
      descEn:  "Single canvas app replacing three systems for hydropower plant workers: live camera feeds, real-time sensor data, HMS info, and weather data, all usable in the field without a PC.",
      descNo:  "Én canvas-app som erstattet tre systemer for kraftverksarbeidere: live kamerafeed, sanntidssensordata, HMS-info og vær, tilgjengelig ute i felt uten PC.",
      status:  "delivered",
      tech:    ["Power Apps", "C#", "API Management", "Logic Apps", "SharePoint"],
    },
    {
      client:  "Norsk Elbilforening",
      titleEn: "Ladeklubben: charging tracker",
      titleNo: "Ladeklubben: ladeøkt-sporing",
      descEn:  "Built Ladeklubben from scratch: tracks and logs all EV charging sessions, verifying payment status in real time via the NetAxcept payment API.",
      descNo:  "Bygde Ladeklubben fra bunnen: sporer ladeøkter og verifiserer betalingsstatus i sanntid via NetAxcepts betalings-API.",
      status:  "delivered",
      tech:    ["Power Apps", "Dynamics 365", "Power Automate", "C#", "API Management"],
    },
  ],
};

const CERTS = [
  { title: "PL-200 Microsoft Power Platform Functional Consultant", year: 2021 },
  { title: "PL-400 Microsoft Power Platform Developer",             year: 2025 },
  { title: "PL-600 Microsoft Power Platform Solution Architect",    year: 2025 },
];

const HOBBY_PROJECTS = [
  {
    name:   "Gymlog",
    url:    "https://gymlog.venzen.no",
    descEn: "Workout log for tracking sets and reps, with export functionality.",
    descNo: "Treningsdagbok for sett og repetisjoner, med eksportfunksjonalitet.",
    tech:   ["React PWA", "Firebase", "Google Auth"],
  },
  {
    name:   "Sportskartet",
    url:    "https://sport.venzen.no",
    descEn: "Aggregates sports on Norwegian TV so you can easily find the time and discipline you're looking for.",
    descNo: "Nettside som aggregerer sport på TV for å enkelt finne tidspunkt og disiplin du er ute etter.",
    tech:   ["React", "Tailwind CSS"],
  },
];

const ANTHROPIC_COURSES = [
  "Claude Code in Action",
  "Claude 101",
  "AI Fluency: Framework & Foundations",
  "Building with the Claude API",
  "Introduction to Model Context Protocol",
  "Model Context Protocol: Advanced Topics",
  "Introduction to agent skills",
  "Claude with Amazon Bedrock",
  "Claude with Google Cloud's Vertex AI",
  "AI Fluency for educators",
  "AI Fluency for students",
  "Teaching AI Fluency",
  "AI Fluency for nonprofits",
];

// ─── Static data ──────────────────────────────────────────────────────────────

const THEMES = [
  { id: "bert",    label: "Bert",    dot: "#66FCF1" },
  { id: "culture", label: "Culture", dot: "#9A1750" },
];

const TECH_ICON_MAP = {
  "React":        SiReact,
  "React PWA":    SiReact,
  "Vite":         SiVite,
  "TypeScript":   SiTypescript,
  "C#":           SiDotnet,
  "Firebase":     SiFirebase,
  "Google Auth":  SiGoogle,
  "Tailwind CSS": SiTailwindcss,
};

const STACK_ITEMS = [
  { label: "Power Apps",     icon: null },
  { label: "Power Automate", icon: null },
  { label: "Dataverse",      icon: null },
  { label: "Power BI",       icon: null },
  { label: "Azure",          icon: null },
  { label: "React",          icon: SiReact },
  { label: "Vite",           icon: SiVite },
  { label: "TypeScript",     icon: SiTypescript },
  { label: "C#",             icon: SiDotnet },
];

// ─── Helper components ────────────────────────────────────────────────────────

function TechChip({ label }) {
  const Icon = TECH_ICON_MAP[label];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-theme-secondary">
      {Icon && <Icon style={{ color: "var(--accent)" }} size={11} />}
      {label}
    </span>
  );
}

function StatusBadge({ status, copy }) {
  const live = status === "ongoing";
  return (
    <div
      className="flex items-center gap-1.5 text-xs font-semibold flex-shrink-0"
      style={live ? { color: "var(--accent)" } : {}}
    >
      <span
        className={`h-2 w-2 rounded-full ${live ? "animate-pulse" : ""}`}
        style={{ background: live ? "var(--accent)" : "var(--text-muted)" }}
      />
      <span className={live ? "" : "text-theme-muted"}>
        {live ? copy.ongoingLabel : copy.deliveredLabel}
      </span>
    </div>
  );
}

const Flag = ({ variant }) => {
  if (variant === "no") {
    return (
      <svg width={18} height={18} fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <g clipPath="url(#NO_svg__a)">
          <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0" />
          <path d="M.413 15.131a12.01 12.01 0 0 0 4.282 6.39v-6.39H.413Zm10.543 8.824c.344.03.692.046 1.043.046 5.545 0 10.21-3.76 11.587-8.87h-12.63v8.824ZM23.586 8.87C22.21 3.76 17.544 0 12 0c-.352 0-.7.017-1.044.046V8.87h12.63ZM4.695 2.48A12.01 12.01 0 0 0 .413 8.87h4.282V2.48Z" fill="#D80027" />
          <path d="M23.898 10.434H9.391V.284a11.97 11.97 0 0 0-3.13 1.176v8.975H.1a12.104 12.104 0 0 0 0 3.13h6.16v8.976c.97.53 2.021.928 3.13 1.174v-10.15h14.507a12.118 12.118 0 0 0 0-3.13Z" fill="#0052B4" />
        </g>
        <defs>
          <clipPath id="NO_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg width={18} height={18} fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <g clipPath="url(#GB_svg__a)">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#F0F0F0" />
        <path d="M2.48 4.693A11.956 11.956 0 0 0 .413 8.868h6.243L2.48 4.693Zm21.106 4.176a11.957 11.957 0 0 0-2.067-4.176L17.344 8.87h6.242ZM.413 15.13a11.957 11.957 0 0 0 2.067 4.176l4.176-4.176H.413ZM19.305 2.48A11.957 11.957 0 0 0 15.13.412v6.243l4.175-4.175ZM4.693 21.518a11.957 11.957 0 0 0 4.176 2.067v-6.243l-4.176 4.176ZM8.869.412A11.957 11.957 0 0 0 4.693 2.48L8.87 6.655V.412Zm6.261 23.173a11.96 11.96 0 0 0 4.175-2.067l-4.175-4.176v6.243Zm2.214-8.455 4.175 4.176a11.957 11.957 0 0 0 2.067-4.176h-6.242Z" fill="#0052B4" />
        <path d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.12 12.12 0 0 0 0 3.13h10.333v10.333a12.12 12.12 0 0 0 3.13 0V13.565h10.333a12.12 12.12 0 0 0 0-3.13Z" fill="#D80027" />
        <path d="m15.13 15.131 5.356 5.355c.246-.246.48-.503.705-.77l-4.584-4.585H15.13Zm-6.26 0-5.355 5.355c.246.246.503.481.77.705l4.585-4.584V15.13Zm0-6.261v-.001L3.515 3.514a12.03 12.03 0 0 0-.705.77L7.394 8.87H8.87Zm6.26 0 5.356-5.355a12.023 12.023 0 0 0-.77-.705L15.13 7.394V8.87Z" fill="#D80027" />
      </g>
      <defs>
        <clipPath id="GB_svg__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath>
      </defs>
    </svg>
  );
};

function Accordion({ label, count, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl shadow-soft overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3 text-sm text-theme-secondary hover:text-theme-text transition-colors duration-200"
      >
        <span>
          {label}
          {count != null && (
            <span className="ml-2 text-xs text-theme-muted">({count})</span>
          )}
        </span>
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="none"
          className={`transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
          style={{ color: "var(--text-muted)" }}
        >
          <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-theme-border px-5 pb-4 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [lang, setLang] = useState("en");
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState("bert");
  const copy = useMemo(() => COPY[lang], [lang]);
  const email = "emil@venzen.no";

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (THEMES.some((t) => t.id === saved)) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    THEMES.forEach((t) => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${theme}`);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300">
      <div className="relative overflow-hidden">

        {/* Blobs */}
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl pointer-events-none" style={{ background: "var(--blob1)" }} />
        <div className="absolute left-0 top-32 h-64 w-64 rounded-full blur-3xl pointer-events-none" style={{ background: "var(--blob2)" }} />

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-10 pt-8">

          {/* Logo */}
          <img
            src={theme === "culture" ? "/logo-light-bg.png" : "/logo-dark-bg.png"}
            alt="Venzen"
            className="h-10"
          />

          {/* Nav */}
          <nav className="hidden items-center gap-5 text-sm text-theme-secondary lg:flex">
            {copy.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-theme-text transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Controls pill */}
          <div className="flex items-center gap-2 rounded-full glass px-3 py-1.5">
            <div className="flex items-center gap-1.5">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  aria-label={`${t.label} theme`}
                  aria-pressed={theme === t.id}
                  className={`h-4 w-4 rounded-full transition-all duration-200 ${
                    theme === t.id ? "scale-125" : "opacity-40 hover:opacity-75"
                  }`}
                  style={{ background: t.dot }}
                />
              ))}
            </div>
            <div className="mx-1 h-4 w-px bg-theme-border" />
            {["en", "no"].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold transition-colors duration-200 ${
                  lang === l
                    ? "bg-theme-accent text-theme-accent-text"
                    : "text-theme-secondary hover:text-theme-text"
                }`}
              >
                <Flag variant={l} />
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">

          {/* ── Hero ───────────────────────────────────────────────────────────── */}
          <section className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-theme-secondary">
              {copy.heroTag}
            </div>
          </section>

          {/* ── About ──────────────────────────────────────────────────────────── */}
          <section id={copy.nav[0].toLowerCase()} className="mt-10 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.aboutTitle}</div>
            <p className="mt-4 text-lg text-theme-secondary">{copy.aboutBody}</p>
          </section>

          {/* ── Metrics ────────────────────────────────────────────────────────── */}
          <div className="mt-8 grid gap-4 max-w-3xl md:grid-cols-3">
            {copy.metrics.map((item) => (
              <div key={item.label} className="glass rounded-2xl px-4 py-3 text-sm shadow-soft">
                <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{item.label}</div>
                <div className="mt-2 font-semibold text-theme-text">{item.value}</div>
              </div>
            ))}
          </div>

          {/* ── Projects (parked) ──────────────────────────────────────────────── */}
          {false && <section id={copy.nav[1].toLowerCase()} className="mt-24">
            <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.projectsLabel}</div>
            <h2 className="mt-4 text-3xl font-semibold text-theme-text">{copy.projectsTitle}</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {RESUME.projects.map((project) => (
                <div
                  key={project.client}
                  className="glass rounded-3xl p-6 shadow-soft flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{project.client}</div>
                      <div className="mt-1.5 text-base font-semibold text-theme-text leading-snug">
                        {lang === "no" ? project.titleNo : project.titleEn}
                      </div>
                    </div>
                    <StatusBadge status={project.status} copy={copy} />
                  </div>
                  <p className="text-sm text-theme-secondary flex-1">
                    {lang === "no" ? project.descNo : project.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => <TechChip key={t} label={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </section>}

          {/* ── Stack & Certifications ──────────────────────────────────────────── */}
          <section id={copy.nav[2].toLowerCase()} className="mt-24">
            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.stackTitle}</div>
                <h2 className="mt-4 text-3xl font-semibold text-theme-text">{copy.stackTitle}</h2>
                <p className="mt-4 text-theme-secondary">{copy.stackSubhead}</p>
              </div>
              <div className="flex flex-wrap gap-3 content-start items-start">
                {STACK_ITEMS.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-theme-secondary shadow-soft"
                  >
                    {Icon && <Icon style={{ color: "var(--accent)" }} size={14} />}
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.certsTitle}</div>
              <div className="mt-4 flex flex-col gap-3">
                {CERTS.map((cert) => (
                  <div
                    key={cert.title}
                    className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-soft"
                  >
                    <span className="text-sm text-theme-secondary">{cert.title}</span>
                    <span className="text-xs text-theme-muted font-mono tabular-nums ml-4 flex-shrink-0">{cert.year}</span>
                  </div>
                ))}
                <Accordion label={copy.anthropicCoursesTitle} count={ANTHROPIC_COURSES.length}>
                  <div className="flex flex-col gap-2">
                    {ANTHROPIC_COURSES.map((course) => (
                      <div key={course} className="text-sm text-theme-secondary py-1 border-b border-theme-border last:border-0">
                        {course}
                      </div>
                    ))}
                  </div>
                </Accordion>
              </div>
            </div>
          </section>

          {/* ── Contact ────────────────────────────────────────────────────────── */}
          <section
            id={copy.nav[3].toLowerCase()}
            className="mt-24 grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.contactTitle}</div>
              <h2 className="mt-4 text-3xl font-semibold text-theme-text">{copy.contactTitle}</h2>
              <p className="mt-4 text-theme-secondary">{copy.contactBody}</p>
            </div>
            <div className="glass rounded-3xl p-6 shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.emailLabel}</div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-2 block text-left text-xl font-semibold text-theme-text hover:text-theme-accent transition-colors duration-200"
              >
                {email}
              </button>
              {copied && (
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-theme-muted">Copied to clipboard</div>
              )}
              <div className="mt-6 text-xs text-theme-muted">{copy.footer}</div>
            </div>
          </section>

          {/* ── Side projects ──────────────────────────────────────────────────── */}
          <section className="mt-24">
            <div className="text-xs uppercase tracking-[0.2em] text-theme-muted">{copy.hobbyLabel}</div>
            <p className="mt-2 text-sm text-theme-secondary">{copy.hobbySubhead}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {HOBBY_PROJECTS.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 shadow-soft flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-theme-text">{project.name}</span>
                    <span className="text-xs truncate" style={{ color: "var(--accent)" }}>{project.url.replace("https://", "")}</span>
                  </div>
                  <p className="text-sm text-theme-secondary">
                    {lang === "no" ? project.descNo : project.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => <TechChip key={t} label={t} />)}
                  </div>
                </a>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
