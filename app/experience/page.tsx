import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience" };

const experiences = [
  {
    title: "Summer Intern — Logistics Analytics",
    company: "UltraTech Cement Ltd. (Aditya Birla Group)",
    period: "May 2026 – June 2026",
    bullets: [
      "Designed and delivered a fully automated logistics analytics dashboard in Excel VBA (~2,400 lines) that replaced a multi-hour manual reporting process, generating 7+ charts and data tables in under 5 seconds with zero errors.",
      "Engineered an in-memory data processing pipeline using Scripting.Dictionary objects and Variant arrays for O(1) lookups and bulk data operations across 10+ aggregated metrics.",
      "Prototyped the solution in Python (pandas) before rebuilding in VBA to match the end-users' existing Excel workflow. Adopted into the department's standard daily operations.",
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

export default function Experience() {
  return (
    <div className="page">
      <p className="section-label">Work</p>
      <h1 className="page-title">Experience</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {experiences.map((exp, i) => (
          <div key={i} className={`entry fade-up fade-up-${i + 1}`}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "0.3rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {exp.title}
              </h2>
              <span
                className="mono"
                style={{ fontSize: "0.72rem", color: "var(--muted)", whiteSpace: "nowrap" }}
              >
                {exp.period}
              </span>
            </div>

            {/* Company */}
            <p
              className="mono"
              style={{ fontSize: "0.76rem", color: "var(--muted)", marginBottom: "1.25rem" }}
            >
              {exp.company}
            </p>

            {/* Bullets */}
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

            {/* Stack + cert */}
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
    </div>
  );
}
