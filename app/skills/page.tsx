import type { Metadata } from "next";

export const metadata: Metadata = { title: "Skills" };

const skillGroups: { category: string; items: string[] }[] = [
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

export default function Skills() {
  return (
    <div className="page">
      <p className="section-label">Technical</p>
      <h1 className="page-title">Skills</h1>

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
    </div>
  );
}
