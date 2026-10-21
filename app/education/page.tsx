import type { Metadata } from "next";

export const metadata: Metadata = { title: "Education" };

const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Symbiosis Institute of Technology, Nagpur",
    period: "July 2024 – June 2028",
    result: "CGPA 8.53",
    detail: "Relevant coursework: Data Structures & Algorithms, DBMS, Operating Systems, OOP, Machine Learning.",
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

export default function Education() {
  return (
    <div className="page">
      <p className="section-label">Academic</p>
      <h1 className="page-title">Education</h1>

      {/* ── Timeline ── */}
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
              <h2
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {e.degree}
              </h2>
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

      {/* ── Academic Marks ── */}
      <p className="section-label fade-up" style={{ marginBottom: "0.75rem" }}>
        Academic Marks
      </p>
      <div
        className="cert-grid fade-up"
        style={{ marginBottom: "3.5rem" }}
      >
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
                color: "var(--muted)",
                marginTop: "0.25rem",
              }}
            >
              View PDF ↗
            </span>
          </a>
        ))}
      </div>

      {/* ── Certifications ── */}
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
                color: "var(--muted)",
                marginTop: "0.25rem",
              }}
            >
              View Certificate ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
