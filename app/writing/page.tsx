import type { Metadata } from "next";

export const metadata: Metadata = { title: "Writing" };

// To add a post, add an entry to this array and create app/writing/[slug]/page.tsx
const posts: { title: string; date: string; slug: string; description: string }[] = [];

export default function Writing() {
  return (
    <div className="page">
      <p className="section-label">Notes & Writeups</p>
      <h1 className="page-title">Writing</h1>

      {posts.length === 0 ? (
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "500px",
            }}
          >
            Nothing published yet. This section will hold technical writeups,
            internship notes, and research summaries.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {posts.map((post, i) => (
            <a
              key={i}
              href={`/writing/${post.slug}`}
              className="entry"
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
                <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--fg)" }}>
                  {post.title}
                </span>
                <span
                  className="mono"
                  style={{ fontSize: "0.72rem", color: "var(--muted)" }}
                >
                  {post.date}
                </span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6 }}>
                {post.description}
              </p>
            </a>
          ))}
          <hr className="divider" />
        </div>
      )}
    </div>
  );
}
