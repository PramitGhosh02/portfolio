import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Achievements" };

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

export default function Achievements() {
  return (
    <div className="page">
      <p className="section-label">Recognition</p>
      <h1 className="page-title">Achievements</h1>

      {/* ── Awards ── */}
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
              <h2
                style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                {award.title}
              </h2>
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

            {/* Certificate image */}
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
                  style={{ fontSize: "0.72rem", color: "var(--muted)" }}
                >
                  {award.certLabel} ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Publications & Patents ── */}
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
              <h2 style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                {pub.title}
              </h2>
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
    </div>
  );
}
