import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pramit Kumar Ghosh — Portfolio",
};

// ── Experience Data ──────────────────────────────────────
const experiences = [
  {
    title: "Summer Intern — Logistics Analytics",
    company: "UltraTech Cement Ltd. (Aditya Birla Group)",
    period: "May 2026 – June 2026",
    bullets: [
      "Designed and delivered a fully automated logistics analytics dashboard in Excel VBA (~2,400 lines) that replaced a multi-hour manual reporting process, generating 7+ charts and data tables in under 5 seconds with zero errors.",
      "Engineered an in-memory data processing pipeline using Scripting.Dictionary objects and Variant arrays for O(1) lookups and bulk data operations across 10+ aggregated metrics.",
      "Prototyped the solution in Python (pandas) before rebuilding in VBA to match the end-users' existing Excel workflow. Adopted into standard daily operations.",
    ],
    stack: ["Excel VBA", "Python", "pandas"],
    cert: "/assets/certificates/cert-ultratech-internship.pdf",
  },
  {
    title: "Data Science & Analytics Intern",
    company: "Maincrafts Technology",
    period: "May 2026 – June 2026",
    bullets: [
      "Performed EDA on the UCI Student Performance dataset (395 students, 33 attributes) — analysed correlations between study time, parental education, and final grades.",
      "Conducted end-to-end EDA on the Titanic dataset (891 passengers) — engineered features (Age Groups, Family Size) and handled missing values.",
      "Built publication-quality visualisations using matplotlib and seaborn: histograms with KDE, correlation heatmaps, grouped bar charts, and scatter plots.",
    ],
    stack: ["Python", "pandas", "NumPy", "matplotlib", "seaborn"],
    cert: "/assets/certificates/cert-maincrafts-internship.pdf",
  },
  {
    title: "Data Science Intern",
    company: "RD Infro Technology, Chennai",
    period: "March 2026 – May 2026",
    bullets: [
      "Performed end-to-end ML pipeline on 1M+ records: data cleaning, EDA, feature engineering, and model training.",
      "Trained a Random Forest Regressor to predict daily store sales across 1,115 stores, achieving ~15–20% RMSPE.",
      "Deployed the model as a Streamlit web application with real-time prediction capability.",
    ],
    stack: ["Python", "Scikit-learn", "pandas", "Streamlit", "Joblib", "Jupyter"],
    cert: "/assets/certificates/cert-rdinfro-internship.jpeg",
  },
];

// ── Research Projects Data ───────────────────────────────
const research = [
  {
    title: "AI-Driven Stock Market Prediction",
    period: "January 2026 – June 2026",
    description:
      "Built a multi-model stock prediction system using Linear Regression, ARIMA, SVM, and LSTM in Python, forecasting next-day closing prices for 29 global assets with R² up to 0.97. Engineered features from 5 years of OHLCV data. Developed an AI scoring engine combining prediction accuracy with Sharpe Ratio and Maximum Drawdown to auto-generate Buy/Hold/Sell recommendations, with an interactive Chart.js dashboard.",
    stack: ["Python", "LSTM", "ARIMA", "SVM", "Linear Regression", "Chart.js", "scikit-learn"],
    badge: null,
  },
  {
    title: "Fake News Detection using ML & DL",
    period: "July 2025 – December 2025",
    description:
      "Developed a fake news detection system using SVM, LSTM, and BERT on a dataset of 44K+ news articles. Implemented NLP preprocessing and feature extraction. Evaluated using Accuracy, Precision, Recall, and F1-score.",
    stack: ["Python", "BERT", "LSTM", "SVM", "NLP", "scikit-learn"],
    badge: "Published · Indian Patent Office Journal, 2026 · App. No. 202521126334",
  },
  {
    title: "Contextual Embedding for Next Word Prediction",
    period: "January 2025 – June 2025",
    description:
      "Built next-word prediction models using LSTM, GRU, BERT, and GPT-2. Applied contextual embeddings and transformer-based NLP techniques. Benchmarked on the Penn Treebank dataset.",
    stack: ["Python", "LSTM", "GRU", "BERT", "GPT-2", "Hugging Face"],
    badge: null,
  },
];

// ── Open Source Repositories Data ────────────────────────
const repos = [
  {
    name: "intelligent-shortlisting-agent",
    description:
      "Multi-agent recruitment pipeline that semantically matches candidate resumes against job descriptions, identifies skill gaps, and drafts personalized HR emails.",
    lang: "Python",
    href: "https://github.com/PramitGhosh02/intelligent-shortlisting-agent",
  },
  {
    name: "ai-learning-path-recommender",
    description:
      "Personalized learning path recommender using FastAPI, React, and Google Gemini. Takes a user's current skill set and goals and generates a structured study plan.",
    lang: "JavaScript / Python",
    href: "https://github.com/PramitGhosh02/ai-learning-path-recommender",
  },
  {
    name: "Summer-Internship-2026",
    description:
      "Logistics analytics automation — the VBA dashboard built during the UltraTech Cement internship, replacing a multi-hour manual reporting process.",
    lang: "VBA",
    href: "https://github.com/PramitGhosh02/Summer-Internship-2026",
  },
];

// ── Skills Data ──────────────────────────────────────────
const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    category: "AI & ML",
    items: [
      "Machine Learning",
      "NLP",
      "Contextual Embeddings",
      "BERT",
      "GPT-2",
      "LSTM",
      "GRU",
      "Random Forest",
      "ARIMA",
      "SVM",
      "Linear Regression",
    ],
  },
  {
    category: "Libraries",
    items: [
      "Hugging Face Transformers",
      "scikit-learn",
      "pandas",
      "NumPy",
      "matplotlib",
      "seaborn",
      "Streamlit",
      "FastAPI",
      "React.js",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle Database", "PL/SQL"],
  },
  {
    category: "Systems & Tools",
    items: ["Git", "Linux", "Jupyter Notebook", "Excel VBA", "Red Hat"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    category: "Core Subjects",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
    ],
  },
];

// ── Education & Marksheets Data ──────────────────────────
const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Symbiosis Institute of Technology, Nagpur",
    period: "July 2024 – June 2028",
    result: "CGPA 8.53",
    detail: "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Machine Learning.",
  },
  {
    degree: "Class XII — Science (PCM + CS)",
    institution: "St. Claret School, Kolkata",
    period: "April 2022 – March 2024",
    result: "89.00%",
    detail: null,
  },
  {
    degree: "Class X",
    institution: "St. Claret School, Kolkata",
    period: "March 2022",
    result: "91.20%",
    detail: null,
  },
];

const marksheets = [
  {
    label: "Semester 3 Marksheet",
    file: "/assets/certificates/marksheet-sem3.pdf",
    note: "B.Tech · SIT Nagpur",
  },
  {
    label: "Semester 2 Marksheet",
    file: "/assets/certificates/marksheet-sem2.pdf",
    note: "B.Tech · SIT Nagpur",
  },
  {
    label: "Semester 1 Marksheet",
    file: "/assets/certificates/marksheet-sem1.pdf",
    note: "B.Tech · SIT Nagpur",
  },
  {
    label: "Class XII Marksheet (CISCE 2024)",
    file: "/assets/certificates/marksheet-class-xii.pdf",
    note: "St. Claret School · 89.00%",
  },
  {
    label: "Class X Marksheet (ICSE)",
    file: "/assets/certificates/marksheet-class-x.jpeg",
    note: "St. Claret School · 91.20%",
  },
];

const certifications = [
  {
    title: "Mastering Agentic AI",
    issuer: "Udemy",
    date: "August 2026",
    file: "/assets/certificates/cert-udemy-agentic-ai.pdf",
  },
  {
    title: "Red Hat System Administration",
    issuer: "Red Hat",
    date: "April 2026",
    file: "/assets/certificates/cert-redhat-sem4.pdf",
  },
  {
    title: "Introduction to Python Programming",
    issuer: "Red Hat Academy",
    date: "February 2025",
    file: "/assets/certificates/cert-redhat.pdf",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Infosys Springboard",
    date: "October 2025",
    file: "/assets/certificates/cert-infosys-dsa.pdf",
  },
  {
    title: "IBM SkillsBuild",
    issuer: "IBM",
    date: "February 2025",
    file: "/assets/certificates/cert-ibm-skillsbuild.pdf",
  },
];

// ── Achievements Data ────────────────────────────────────
const awards = [
  {
    title: "Runner-up — CodeSprint 2025",
    org: "Symbiosis Institute of Technology, Nagpur",
    date: "2025",
    description:
      "Placed second in CodeSprint 2025, a competitive programming contest held at SIT Nagpur.",
    certImage: "/assets/achievement-codesprint-2025.jpg",
    certLabel: "View Certificate",
  },
];

const publications = [
  {
    title: "Fake News Detection using Machine Learning and Deep Learning",
    venue: "Indian Patent Office Journal",
    date: "2026",
    appNo: "202521126334",
    description:
      "Developed a fake news detection system using SVM, LSTM, and BERT on a 44K+ news article dataset. Evaluated using Accuracy, Precision, Recall, and F1-score. Published and granted application number in the Indian Patent Office Journal.",
    pdfHref: "/assets/certificates/patent-fake-news-detection.pdf",
  },
];

// ── Contributions Data ───────────────────────────────────
const contributions = [
  {
    name: "Mimamsa 2025",
    org: "IISER Pune",
    date: "2025",
    role: "Campus Coordinator (SIT Nagpur)",
    certHref: "/assets/certificates/cert-mimamsa-campus-coordinator.pdf",
    description:
      "Served as Campus Coordinator representing Symbiosis Institute of Technology, Nagpur for Mimamsa 2025, India's premier national-level undergraduate science competition conducted by IISER Pune.",
  },
  {
    name: "CodeSprint 2025",
    org: "Symbiosis Institute of Technology, Nagpur",
    date: "2025",
    role: "Participant",
    outcome: "Runner-up",
    certHref: "/assets/achievement-codesprint-2025.jpg",
    description:
      "Competed in an algorithmic problem solving and coding sprint contest, securing runner-up position.",
  },
  {
    name: "SIT INNOVATE — 24-Hour Hackathon",
    org: "Symbiosis Institute of Technology, Nagpur",
    date: "2025",
    role: "Participant",
    outcome: undefined,
    description:
      "Participated in a 24-hour hackathon building practical software solutions under tight time constraints.",
  },
];

// ── Contact Data ─────────────────────────────────────────
const contactItems = [
  {
    label: "Email",
    value: "pramit.kr.ghosh02@gmail.com",
    href: "mailto:pramit.kr.ghosh02@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/PramitGhosh02",
    href: "https://github.com/PramitGhosh02",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pramit-ghosh-345715228",
    href: "https://linkedin.com/in/pramit-ghosh-345715228",
    external: true,
  },
  {
    label: "Location",
    value: "Nagpur, India",
    href: null,
    external: false,
  },
];

export default function Home() {
  return (
    <div className="page">
      {/* ════════════════════ 1. ABOUT SECTION ════════════════════ */}
      <section id="about" className="portfolio-section">
        <div className="about-grid fade-up" style={{ marginBottom: "2.5rem" }}>
          {/* Profile photo */}
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: "100%",
                maxWidth: "220px",
                aspectRatio: "1",
                border: "1px solid var(--border)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/assets/profile.jpg"
                alt="Pramit Kumar Ghosh"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p
              className="section-label fade-up fade-up-1"
              style={{ marginBottom: "0.5rem" }}
            >
              Computer Science Engineering · SIT Nagpur · 2024–2028
            </p>
            <h1
              className="fade-up fade-up-1"
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Pramit Kumar Ghosh
            </h1>
            <p
              className="fade-up fade-up-2"
              style={{
                fontSize: "0.9375rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "1.75rem",
              }}
            >
              CS student focused on backend development and applied machine
              learning. I build tools that solve real operational problems —
              from automating logistics reporting to training NLP classifiers.
              My work on fake news detection is published in the Indian Patent
              Office Journal (2026, App. No. 202521126334).
            </p>

            {/* Action links */}
            <div
              className="fade-up fade-up-3"
              style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}
            >
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/PramitGhosh02",
                  external: true,
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/pramit-ghosh-345715228",
                  external: true,
                },
                {
                  label: "Email",
                  href: "mailto:pramit.kr.ghosh02@gmail.com",
                  external: false,
                },
                {
                  label: "Download CV",
                  href: "/assets/Pramit-Kumar-Ghosh-Resume.pdf",
                  external: false,
                  download: true,
                },
              ].map(({ label, href, external, download }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  download={download ? true : undefined}
                  className="action-link"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Current status */}
        <div
          className="fade-up fade-up-4"
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.75rem",
            marginBottom: "2rem",
          }}
        >
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Currently
          </p>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              listStyle: "none",
            }}
          >
            <li style={{ fontSize: "0.9375rem", color: "var(--fg)" }}>
              B.Tech in Computer Science and Engineering (2024–2028) · CGPA 8.53
            </li>
            <li style={{ fontSize: "0.9375rem", color: "var(--muted)" }}>
              Open to full-time roles in backend development and AI/ML engineering
            </li>
            <li style={{ fontSize: "0.9375rem", color: "var(--muted)" }}>
              Based in Nagpur, India
            </li>
          </ul>
        </div>

        {/* Quick metrics grid */}
        <div
          className="fade-up fade-up-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[
            { value: "8.53", label: "CGPA" },
            { value: "3", label: "Internships" },
            { value: "3", label: "Research Projects" },
            { value: "1", label: "Published Patent" },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{
                padding: "1rem 1.25rem",
                background: "var(--tag-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="mono"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.2rem",
                  color: "var(--fg)",
                }}
              >
                {value}
              </p>
              <p
                className="mono"
                style={{
                  fontSize: "0.68rem",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ 2. EXPERIENCE SECTION ════════════════════ */}
      <section id="experience" className="portfolio-section">
        <p className="section-label">Work</p>
        <h2 className="page-title">Experience</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {experiences.map((exp, i) => (
            <div key={i} className={`entry fade-up fade-up-${i + 1}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.3rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {exp.title}
                </h3>
                <span
                  className="mono"
                  style={{ fontSize: "0.72rem", color: "var(--muted)", whiteSpace: "nowrap" }}
                >
                  {exp.period}
                </span>
              </div>

              <p
                className="mono"
                style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: "1.25rem" }}
              >
                {exp.company}
              </p>

              <ul
                style={{
                  paddingLeft: "1.1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  marginBottom: "1.25rem",
                  listStyle: "disc",
                }}
              >
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--fg)" }}
                  >
                    {b}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={exp.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link"
                  style={{
                    fontSize: "0.69rem",
                    padding: "0.25rem 0.65rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Internship Certificate ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ 3. PROJECTS SECTION ════════════════════ */}
      <section id="projects" className="portfolio-section">
        <p className="section-label">Research &amp; Build</p>
        <h2 className="page-title">Projects</h2>

        {/* Research Projects */}
        <p className="section-label fade-up" style={{ marginBottom: "0.75rem" }}>
          Research
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "0.75rem",
            marginBottom: "3.5rem",
          }}
        >
          {research.map((p, i) => (
            <div key={i} className={`card fade-up fade-up-${i + 1}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                  }}
                >
                  {p.title}
                </h3>
                <span className="mono" style={{ fontSize: "0.69rem", color: "var(--muted)" }}>
                  {p.period.split(" – ")[1] || p.period}
                </span>
              </div>

              {p.badge && (
                <div style={{ marginBottom: "0.65rem" }}>
                  <span className="badge-accent" style={{ fontSize: "0.65rem" }}>
                    {p.badge}
                  </span>
                </div>
              )}

              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                  marginBottom: "1.1rem",
                }}
              >
                {p.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Open source repos */}
        <p className="section-label fade-up" style={{ marginBottom: 0 }}>
          Open Source Repositories
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {repos.map((r, i) => (
            <a
              key={i}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`entry fade-up fade-up-${i + 1}`}
              style={{ display: "block", textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.35rem",
                }}
              >
                <span
                  className="mono"
                  style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--fg)" }}
                >
                  {r.name}
                </span>
                <span className="mono" style={{ fontSize: "0.69rem", color: "var(--muted)" }}>
                  {r.lang}
                </span>
              </div>
              <p
                style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65 }}
              >
                {r.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ════════════════════ 4. SKILLS SECTION ════════════════════ */}
      <section id="skills" className="portfolio-section">
        <p className="section-label">Technical</p>
        <h2 className="page-title">Skills</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {skillGroups.map((group, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid var(--border)",
                padding: "1.5rem 0",
                display: "grid",
                gridTemplateColumns: "clamp(120px, 22%, 180px) 1fr",
                gap: "1.5rem",
                alignItems: "start",
              }}
            >
              <span
                className="section-label"
                style={{ margin: 0, paddingTop: "0.2rem" }}
              >
                {group.category}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <hr className="divider" />
        </div>
      </section>

      {/* ════════════════════ 5. EDUCATION SECTION ════════════════════ */}
      <section id="education" className="portfolio-section">
        <p className="section-label">Academic</p>
        <h2 className="page-title">Education</h2>

        {/* Timeline */}
        <div className="timeline fade-up" style={{ marginBottom: "4rem" }}>
          {education.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {e.degree}
                </h3>
                <span
                  className="mono"
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    color: "var(--fg)",
                  }}
                >
                  {e.result}
                </span>
              </div>
              <p
                className="mono"
                style={{
                  fontSize: "0.76rem",
                  color: "var(--muted)",
                  marginBottom: e.detail ? "0.5rem" : 0,
                }}
              >
                {e.institution} · {e.period}
              </p>
              {e.detail && (
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {e.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Marksheets */}
        <p className="section-label fade-up" style={{ marginBottom: "0.75rem" }}>
          Academic Marksheets
        </p>
        <div className="cert-grid fade-up" style={{ marginBottom: "3.5rem" }}>
          {marksheets.map((m, i) => (
            <a
              key={i}
              href={m.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--fg)",
                }}
              >
                {m.label}
              </span>
              <span
                className="mono"
                style={{ fontSize: "0.7rem", color: "var(--muted)" }}
              >
                {m.note}
              </span>
              <span
                className="mono"
                style={{
                  fontSize: "0.65rem",
                  color: "var(--accent)",
                  marginTop: "0.25rem",
                }}
              >
                View Document ↗
              </span>
            </a>
          ))}
        </div>

        {/* Certifications */}
        <p className="section-label fade-up" style={{ marginBottom: "0.75rem" }}>
          Certifications
        </p>
        <div className="cert-grid fade-up">
          {certifications.map((c, i) => (
            <a
              key={i}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--fg)",
                }}
              >
                {c.title}
              </span>
              <span
                className="mono"
                style={{ fontSize: "0.7rem", color: "var(--muted)" }}
              >
                {c.issuer} · {c.date}
              </span>
              <span
                className="mono"
                style={{
                  fontSize: "0.65rem",
                  color: "var(--accent)",
                  marginTop: "0.25rem",
                }}
              >
                View Certificate ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ════════════════════ 6. ACHIEVEMENTS SECTION ════════════════════ */}
      <section id="achievements" className="portfolio-section">
        <p className="section-label">Recognition</p>
        <h2 className="page-title">Achievements</h2>

        {/* Awards */}
        <p className="section-label fade-up" style={{ marginBottom: 0 }}>
          Awards
        </p>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "3.5rem" }}>
          {awards.map((award, i) => (
            <div key={i} className="entry fade-up">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.3rem",
                }}
              >
                <h3
                  style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {award.title}
                </h3>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
                  {award.date}
                </span>
              </div>
              <p
                className="mono"
                style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: "1rem" }}
              >
                {award.org}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                {award.description}
              </p>

              {/* Certificate preview */}
              <div
                style={{
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  maxWidth: "560px",
                }}
              >
                <a href={award.certImage} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={award.certImage}
                    alt={award.title}
                    width={560}
                    height={397}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </a>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "0.6rem 1rem",
                  }}
                >
                  <a
                    href={award.certImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{ fontSize: "0.72rem", color: "var(--accent)" }}
                  >
                    {award.certLabel} ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Patents */}
        <p className="section-label fade-up" style={{ marginBottom: 0 }}>
          Publications &amp; Patents
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {publications.map((pub, i) => (
            <div key={i} className="entry fade-up">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "0.3rem",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {pub.title}
                </h3>
                <span className="mono" style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
                  {pub.date}
                </span>
              </div>
              <p
                className="mono"
                style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: "0.25rem" }}
              >
                {pub.venue}
              </p>
              <div style={{ marginBottom: "1rem" }}>
                <span className="badge-accent">
                  App. No. {pub.appNo}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                {pub.description}
              </p>
              <a
                href={pub.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
              >
                View Patent PDF ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ 7. CONTRIBUTIONS SECTION ════════════════════ */}
      <section id="contributions" className="portfolio-section">
        <p className="section-label">Leadership &amp; Participation</p>
        <h2 className="page-title">Contributions</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {contributions.map((c, i) => (
            <div
              key={i}
              className={`entry fade-up fade-up-${i + 1}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1.25rem",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    marginBottom: "0.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: "var(--fg)",
                    }}
                  >
                    {c.name}
                  </h3>
                  {c.outcome && (
                    <span className="badge-accent">{c.outcome}</span>
                  )}
                </div>
                <p
                  className="mono"
                  style={{
                    fontSize: "0.76rem",
                    color: "var(--muted)",
                    marginBottom: c.description ? "0.6rem" : 0,
                  }}
                >
                  {c.org} · {c.role}
                </p>
                {c.description && (
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      marginBottom: c.certHref ? "0.75rem" : 0,
                    }}
                  >
                    {c.description}
                  </p>
                )}
                {c.certHref && (
                  <a
                    href={c.certHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--accent)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p
                  className="mono"
                  style={{ fontSize: "0.72rem", color: "var(--muted)" }}
                >
                  {c.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════ 8. CONTACT SECTION ════════════════════ */}
      <section id="contact" className="portfolio-section">
        <p className="section-label">Reach</p>
        <h2 className="page-title">Contact</h2>

        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--muted)",
            lineHeight: 1.75,
            maxWidth: "520px",
            marginBottom: "3rem",
          }}
        >
          Available for full-time roles in backend development and AI/ML
          engineering, and open to research collaborations. Reach out directly.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {contactItems.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid var(--border)",
                padding: "1.25rem 0",
                display: "grid",
                gridTemplateColumns: "100px 1fr",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <span className="section-label" style={{ margin: 0 }}>
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="mono"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--accent)",
                    textDecoration: "none",
                    wordBreak: "break-all",
                  }}
                >
                  {item.value} ↗
                </a>
              ) : (
                <span
                  className="mono"
                  style={{ fontSize: "0.85rem", color: "var(--fg)" }}
                >
                  {item.value}
                </span>
              )}
            </div>
          ))}
          <hr className="divider" />
        </div>
      </section>
    </div>
  );
}
