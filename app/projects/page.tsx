import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

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

export default function Projects() {
  return (
    <div className="page">
      <p className="section-label">Research &amp; Build</p>
      <h1 className="page-title">Projects</h1>

      {/* ── Research cards ── */}
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
          <div
            key={i}
            className={`card fade-up fade-up-${i + 1}`}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "0.5rem",
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
                {p.title}
              </h2>
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

      {/* ── Open source repos ── */}
      <p className="section-label fade-up" style={{ marginBottom: "0" }}>
        Open Source
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
    </div>
  );
}
