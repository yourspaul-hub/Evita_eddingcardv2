export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#4A1E2B", color: "#FAF7F2", fontFamily: "sans-serif", flexDirection: "column", gap: 16 }}>
      <h1 style={{ fontSize: "4rem", margin: 0, color: "#C8A951" }}>404</h1>
      <p style={{ margin: 0, opacity: 0.7 }}>Page not found</p>
      <a href="/" style={{ color: "#C8A951", textDecoration: "underline", marginTop: 8 }}>← Back to invitation</a>
    </div>
  );
}
