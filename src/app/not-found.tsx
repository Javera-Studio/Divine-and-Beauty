import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ background: "#FFF7F2", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 96, color: "#E9B8C8", lineHeight: 1, marginBottom: 8 }}>404</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#2A2528", fontSize: 28, marginBottom: 16, fontWeight: 400 }}>Seite nicht gefunden</h1>
        <p style={{ color: "#7D6B70", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
          Diese Seite existiert leider nicht. Vielleicht findest du auf unserer Startseite, was du suchst.
        </p>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px", borderRadius: 999, background: "#2A2528", color: "#fff", textDecoration: "none", fontSize: 13, fontFamily: "'DM Sans', sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", borderBottom: "1.5px solid rgba(214,183,109,0.55)" }}>
          <span style={{ color: "#D6B76D" }}>✦</span> Zur Startseite
        </Link>
      </div>
    </div>
  );
}
