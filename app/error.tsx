"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#4A1E2B", color: "#FAF7F2", fontFamily: "sans-serif", flexDirection: "column", gap: 16 }}>
      <h1 style={{ fontSize: "2rem", margin: 0, color: "#C8A951" }}>Something went wrong</h1>
      <button onClick={reset} style={{ padding: "8px 24px", border: "1px solid #C8A951", background: "transparent", color: "#C8A951", borderRadius: 999, cursor: "pointer" }}>
        Try again
      </button>
      <a href="/" style={{ color: "#C8A951", textDecoration: "underline" }}>← Back to invitation</a>
    </div>
  );
}
