import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Diamond } from "lucide-react";

const WA_URL =
  "https://wa.me/436763633721?text=" +
  encodeURIComponent(
    "Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen."
  );

const C = {
  bg1: "#FFF7F2",
  bg2: "#F7EDE7",
  white: "#FFFFFF",
  dark1: "#2A2528",
  pink: "#D98FA8",
  soft: "#E9B8C8",
  gold: "#D6B76D",
  text: "#3A3034",
  muted: "#7D6B70",
};

const PRICES = [
  {
    category: "Gelmodellage",
    items: [
      { name: "Neues Set / Camouflage", price: "50 €" },
      { name: "Neues Set inkl. Farbe", price: "56 €" },
      { name: "Neues Set French", price: "58 €" },
      { name: "Neues Set Babyboomer", price: "60 €" },
    ],
  },
  {
    category: "Nachfüllung",
    items: [
      { name: "Camouflage / Gelberzug", price: "40 €" },
      { name: "Inkl. Farbe", price: "46 €" },
      { name: "Inkl. French / Babyboomer", price: "48 €" },
    ],
  },
  {
    category: "Shellac",
    items: [
      { name: "Maniküre French / Farbe", price: "37 €" },
      { name: "Pediküre", price: "37 €" },
      { name: "Abmontage inkl. Polieren", price: "10 €" },
      { name: "Reparatur", price: "4 €" },
    ],
  },
  {
    category: "Pediküre",
    items: [
      { name: "Classic", price: "44 €" },
      { name: "Inkl. Shellac", price: "64 €" },
    ],
  },
  {
    category: "Maniküre",
    items: [
      { name: "Maniküre Classic", price: "25 €" },
      { name: "Lackieren", price: "8 €" },
      { name: "Verwöhnpflege", price: "13 €" },
      { name: "Maniküre inkl. Shellac", price: "30 €" },
    ],
  },
  {
    category: "Wimpernlifting",
    items: [{ name: "Inkl. Farben & Keratin", price: "55 €" }],
  },
  {
    category: "Gesichtsbehandlung",
    items: [
      { name: "Skinboom Hydra Glow Pen", price: "80 €" },
      { name: "Peeling inkl. Hydra Global Mask", price: "45 €" },
    ],
  },
  { category: "Make-up", items: [{ name: "Make-up", price: "ab 50 €" }] },
  {
    category: "Waxing",
    items: [
      { name: "Gesicht komplett", price: "25 €" },
      { name: "Oberlippe", price: "10 €" },
      { name: "Augenbrauen", price: "10 €" },
      { name: "Arme komplett (Schultern bis Hände)", price: "35 €" },
      { name: "Beine komplett (Oberschenkel–Unterschenkel)", price: "49 €" },
      { name: "Unterschenkel (Knie bis Knöchel)", price: "29 €" },
      { name: "Waxing komplett (Beine, Arme, Achsel, Bikini)", price: "89 €" },
      { name: "Rücken", price: "35 €" },
      { name: "Rücken komplett (Schultern bis Taille)", price: "45 €" },
    ],
  },
];

const ALL_CATS = ["Alle", ...PRICES.map((p) => p.category)];

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap");
html { scroll-behavior: smooth; }
body { overflow-x: hidden; background: #FFF7F2; }
*, *::before, *::after { box-sizing: border-box; }
.pf { font-family: 'Playfair Display', Georgia, serif; }
.dm { font-family: 'DM Sans', system-ui, sans-serif; }
.dv-prow {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 0; border-bottom: 1px solid rgba(223,167,198,0.09);
  transition: all .2s;
}
.dv-prow:hover {
  background: rgba(214,183,109,0.05); border-radius: 8px; padding-left: 8px;
}
.dv-prow:hover .dv-pv { color: #D6B76D !important; }
.pr-tab {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  padding: 9px 20px;
  border-radius: 999px;
  border: 1px solid rgba(223,167,198,0.22);
  background: rgba(255,255,255,0.6);
  color: #7D6B70;
  cursor: pointer;
  transition: all .25s;
  white-space: nowrap;
}
.pr-tab:hover { border-color: #D6B76D; color: #3A3034; background: rgba(255,255,255,0.95); }
.pr-tab.active {
  background: #2A2528; color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(42,37,40,0.18);
}
.btn-pk {
  background: #2A2528;
  box-shadow: 0 4px 18px rgba(42,37,40,0.22);
  border-bottom: 1.5px solid rgba(214,183,109,0.55);
  color: #fff; border-top: none; border-left: none; border-right: none;
  cursor: pointer;
  transition: box-shadow .3s, transform .3s, background .3s;
  font-family: 'DM Sans', sans-serif;
}
.btn-pk:hover {
  background: #1F1B1D;
  box-shadow: 0 12px 34px rgba(42,37,40,0.32), 0 0 0 1px rgba(214,183,109,0.5);
  transform: translateY(-2px);
}
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #FFF7F2; }
::-webkit-scrollbar-thumb { background: linear-gradient(#DFA7C6,#D6B76D); border-radius: 2px; }
[data-r] { opacity: 0; transform: translateY(32px); transition: opacity .65s cubic-bezier(.4,0,.2,1), transform .65s cubic-bezier(.4,0,.2,1); }
[data-r].rv { opacity: 1; transform: none; }
[data-r][data-d="1"] { transition-delay: 90ms; }
[data-r][data-d="2"] { transition-delay: 180ms; }
@media (prefers-reduced-motion: reduce) { [data-r] { opacity: 1; transform: none; transition: none; } }
`;

export default function Preise() {
  const [active, setActive] = useState("Alle");

  useEffect(() => {
    let el = document.getElementById("pr-css");
    if (!el) {
      el = document.createElement("style");
      el.id = "pr-css";
      document.head.appendChild(el);
    }
    el.textContent = CSS;
    return () => { document.getElementById("pr-css")?.remove(); };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("rv"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll("[data-r]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  const visible = active === "Alle" ? PRICES : PRICES.filter((p) => p.category === active);

  return (
    <div className="dm" style={{ background: C.bg1, color: C.text, minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ background: "rgba(255,247,242,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(42,37,40,0.08)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "17px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img src={logo} alt="Divine Beauty Logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
            <div>
              <div className="pf" style={{ color: C.text, fontSize: 15, fontWeight: 600, lineHeight: 1.1 }}>Divine Beauty</div>
              <div className="dm" style={{ color: C.muted, fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase" }}>&amp; Nails Studio</div>
            </div>
          </Link>
          <Link to="/" className="dm" style={{ color: C.muted, fontSize: 13, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, letterSpacing: "0.3px" }}>
            ← Zurück zur Startseite
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 64, background: "linear-gradient(135deg,#FFF7F2 0%,#F7EDE7 50%,#FBEAF3 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 14 }}>
            Divine Beauty &amp; Nails Studio
          </div>
          <h1 className="pf" style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", color: C.text, margin: "0 0 16px", fontWeight: 400 }}>
            Unsere <em style={{ color: C.pink }}>Preise</em>
          </h1>
          <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 28px" }}>
            Transparente Preise für Nageldesign, Beauty-Behandlungen, Waxing und mehr.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
            <Diamond size={14} strokeWidth={1.5} color={C.gold} />
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
          </div>
          <p className="dm" style={{ color: C.muted, fontSize: 12.5, maxWidth: 440, margin: "16px auto 0", lineHeight: 1.7, opacity: 0.85 }}>
            * Preisänderungen vorbehalten. Bei individuellen Wünschen oder Sonderwünschen beraten wir dich gerne persönlich.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div style={{ background: C.white, borderBottom: "1px solid rgba(223,167,198,0.1)", position: "sticky", top: 74, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px", display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none" }}>
          {ALL_CATS.map((cat) => (
            <button key={cat} className={`pr-tab${active === cat ? " active" : ""}`} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Cards */}
      <section style={{ padding: "64px 0 96px", background: C.bg1 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          {(() => {
            const SMALL = ["Make-up", "Wimpernlifting", "Pediküre"];
            const big = visible.filter((p) => !SMALL.includes(p.category));
            const small = visible.filter((p) => SMALL.includes(p.category));
            return (
              <>
                {big.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20, marginBottom: small.length > 0 ? 20 : 0 }}>
                    {big.map((cat, i) => (
                      <div key={cat.category} data-r data-d={i % 3} style={{ background: C.white, borderRadius: 22, padding: "28px 26px", boxShadow: "0 4px 24px rgba(185,130,165,0.07)", border: "1px solid rgba(214,183,109,0.12)" }}>
                        <h3 className="pf" style={{ color: C.text, fontSize: 17, marginBottom: 18, paddingBottom: 14, borderBottom: "1px solid rgba(214,183,109,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ color: C.gold, fontSize: 9 }}>✦</span>{cat.category}
                        </h3>
                        {cat.items.map((item) => (
                          <div key={item.name} className="dv-prow">
                            <span className="dm" style={{ color: C.muted, fontSize: 14 }}>{item.name}</span>
                            <span className="dm dv-pv" style={{ color: C.gold, fontSize: 14, fontWeight: 600, transition: "color .2s" }}>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {small.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: `repeat(${small.length},1fr)`, gap: 20 }}>
                    {small.map((cat, i) => (
                      <div key={cat.category} data-r data-d={i} style={{ background: C.white, borderRadius: 18, padding: "16px 18px", boxShadow: "0 4px 24px rgba(185,130,165,0.07)", border: "1px solid rgba(214,183,109,0.12)" }}>
                        <h3 className="pf" style={{ color: C.text, fontSize: 14, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid rgba(214,183,109,0.2)", display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ color: C.gold, fontSize: 8 }}>✦</span>{cat.category}
                        </h3>
                        {cat.items.map((item) => (
                          <div key={item.name} className="dv-prow">
                            <span className="dm" style={{ color: C.muted, fontSize: 12 }}>{item.name}</span>
                            <span className="dm dv-pv" style={{ color: C.gold, fontSize: 12, fontWeight: 600, transition: "color .2s" }}>{item.price}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg,#2A2528 0%,#3a3033 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div className="dm" style={{ color: "rgba(255,247,242,0.45)", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 18 }}>
            Unsicher bei der Wahl?
          </div>
          <h2 className="pf" style={{ color: "#FFF7F2", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 400, marginBottom: 14 }}>
            Du bist unsicher, welche<br />Behandlung zu dir passt?
          </h2>
          <p className="dm" style={{ color: "rgba(255,247,242,0.55)", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>
            Wir beraten dich gerne persönlich und finden gemeinsam den perfekten Termin für dich.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-pk"
            style={{ padding: "15px 36px", borderRadius: 999, fontSize: 13, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ color: C.gold }}>✦</span>
            Über WhatsApp anfragen
          </a>
        </div>
      </section>

      {/* Footer minimal */}
      <footer style={{ background: C.dark1, padding: "32px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginBottom: 20 }}>
          <Link to="/" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Startseite</Link>
          <Link to="/impressum" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Impressum</Link>
          <Link to="/datenschutz" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Datenschutz</Link>
        </div>
        <span className="dm" style={{ color: "rgba(255,255,255,0.22)", fontSize: 12 }}>
          © {new Date().getFullYear()} Divine Beauty &amp; Nails Studio · Wien
        </span>
      </footer>
    </div>
  );
}
