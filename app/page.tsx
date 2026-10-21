import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Pramit Kumar Ghosh" };

export default function About() {
  return (
    <div className="page">
      {/* ── Two-column intro ── */}
      <div className="about-grid fade-up" style={{ marginBottom: "3rem" }}>
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
            style={{ marginBottom: "0.6rem" }}
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

      {/* ── Status ── */}
      <div
        className="fade-up fade-up-4"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
      >
        <p className="section-label" style={{ marginBottom: "1rem" }}>
          Currently
        </p>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
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

      {/* ── Quick facts ── */}
      <div
        className="fade-up fade-up-4"
        style={{
          marginTop: "2.5rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
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
    </div>
  );
}
