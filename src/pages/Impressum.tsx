import { Link } from "react-router-dom";

const PINK = "#E9B8C8";
const GOLD = "#D6B76D";
const TEXT = "#2A2528";
const MUTED = "#7A6E72";
const BG = "#FFF7F2";

const ROWS: [string, string][] = [
  ["Unternehmensname", "Divine Beauty & Nails Studio"],
  ["Inhaberin", "Danijela Bošković"],
  ["Adresse", "Klosterneuburger Straße 98, 1200 Wien, Österreich"],
  ["Telefon", "+43 676 3633721"],
  ["E-Mail", "kontakt@divinenails.at"],
  ["Gewerbe", "Modellieren von Fingernägeln (Nagelstudio)"],
  ["GISA-Zahl", "30468269"],
  ["Mitglied bei", "Wirtschaftskammer Wien"],
  ["Gewerbebehörde", "Magistratisches Bezirksamt der Stadt Wien"],
  ["Berufsrecht", "Gewerbeordnung 1994 (GewO) – www.ris.bka.gv.at"],
];

export default function Impressum() {
  return (
    <div style={{ background: BG, minHeight: "100vh", padding: "60px 0 120px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <Link to="/" style={{ color: PINK, fontSize: 13, textDecoration: "none", letterSpacing: 1.5, textTransform: "uppercase" }}>
          ← Zurück zur Startseite
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: TEXT, fontSize: 36, margin: "24px 0 10px" }}>Impressum</h1>
        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 32 }}>
          Angaben gemäß § 5 ECG
        </p>
        {ROWS.map(([k, v]) => (
          <div key={k} style={{ display: "flex", flexWrap: "wrap", gap: 14, padding: "10px 0", borderBottom: "1px solid rgba(42,37,40,0.07)" }}>
            <span style={{ color: MUTED, fontSize: 13, minWidth: 200 }}>{k}</span>
            <span style={{ color: TEXT, fontSize: 13 }}>{v}</span>
          </div>
        ))}
        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.8, marginTop: 28 }}>
          <strong style={{ color: TEXT }}>Haftung für Inhalte</strong><br />
          Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </div>
  );
}
