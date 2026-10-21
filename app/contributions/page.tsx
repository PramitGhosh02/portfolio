import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contributions" };

const contributions: {
  name: string;
  org: string;
  date: string;
  role: string;
  outcome?: string;
  certHref?: string;
  description?: string;
}[] = [
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

export default function Contributions() {
  return (
    <div className="page">
      <p className="section-label">Leadership &amp; Participation</p>
      <h1 className="page-title">Contributions</h1>

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
                <h2
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                  }}
                >
                  {c.name}
                </h2>
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
    </div>
  );
}
