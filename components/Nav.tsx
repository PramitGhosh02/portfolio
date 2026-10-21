"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contributions", label: "Contributions" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          height: "50px",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textDecoration: "none",
            color: "var(--fg)",
            flexShrink: 0,
          }}
        >
          PKG
        </Link>

        {/* Nav links — scrollable on mobile */}
        <nav
          className="nav-links"
          aria-label="Primary navigation"
          style={{
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
          }}
        >
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: active ? "var(--accent)" : "var(--muted)",
                  fontWeight: active ? 600 : 400,
                  textDecoration: "none",
                  borderBottom: active
                    ? "2px solid var(--accent)"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
