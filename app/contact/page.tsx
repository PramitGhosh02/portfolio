import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

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

export default function Contact() {
  return (
    <div className="page">
      <p className="section-label">Reach</p>
      <h1 className="page-title">Contact</h1>

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
            <span
              className="section-label"
              style={{ margin: 0 }}
            >
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
    </div>
  );
}
