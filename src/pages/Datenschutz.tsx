import { Link } from "react-router-dom";

const PINK = "#E9B8C8";
const GOLD = "#D6B76D";
const TEXT = "#2A2528";
const MUTED = "#7A6E72";
const BG = "#FFF7F2";

const SECTIONS = [
  { t: "1. Verantwortliche Person", c: "Divine Beauty & Nails Studio, Klosterneuburgerstraße 98, 1200 Wien – Inhaberin: [VORNAME NACHNAME eintragen] – divine.beauty.nails@gmail.com – ist verantwortliche Person im Sinne der DSGVO." },
  { t: "2. Erhobene Daten & Zweck", c: "Beim Besuch werden technisch notwendige Daten erhoben. Bei freiwilliger Kontaktaufnahme (E-Mail, Instagram) werden die Daten ausschließlich zur Terminvergabe verwendet." },
  { t: "3. Rechtsgrundlage", c: "Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer Website-Bereitstellung)." },
  { t: "4. Datenweitergabe", c: "Keine Weitergabe an Dritte, soweit nicht gesetzlich verpflichtet." },
  { t: "5. Deine Rechte (DSGVO)", c: "Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Übertragbarkeit (Art. 20), Widerspruch (Art. 21). Kontakt: divine.beauty.nails@gmail.com" },
  { t: "6. Instagram / Social Media", c: "Verlinkungen zu Instagram (Meta Platforms Ireland Ltd.) – beim Klick gelten die Datenschutzbestimmungen von Meta." },
  { t: "7. Beschwerderecht", c: "Österreichische Datenschutzbehörde: Barichgasse 40–42, 1030 Wien – dsb.gv.at" },
];

export default function Datenschutz() {
  return (
    <div style={{ background: BG, minHeight: "100vh", padding: "60px 0 120px", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <Link to="/" style={{ color: PINK, fontSize: 13, textDecoration: "none", letterSpacing: 1.5, textTransform: "uppercase" }}>
          ← Zurück zur Startseite
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: TEXT, fontSize: 36, margin: "24px 0 10px" }}>Datenschutzerklärung</h1>
        <div style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${GOLD}44`, borderRadius: 10, padding: "12px 16px", color: MUTED, fontSize: 12, lineHeight: 1.6, marginBottom: 36 }}>
          ⚠️ Platzhalter – bitte vor Veröffentlichung rechtlich prüfen lassen (DSGVO / österreichisches DSG). Stand: [DATUM einfügen].
        </div>
        {SECTIONS.map((s) => (
          <div key={s.t} style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: PINK, fontSize: 16, marginBottom: 10 }}>{s.t}</h3>
            <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.88 }}>{s.c}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
