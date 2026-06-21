"use client";

import { useState, useEffect } from "react";

const WA_URL = "https://wa.me/436763633721?text=" + encodeURIComponent("Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen.");

const C = { bg1: "#FFF7F2", bg2: "#F7EDE7", white: "#FFFFFF", dark1: "#2A2528", pink: "#D98FA8", gold: "#D6B76D", text: "#3A3034", muted: "#7D6B70" };

const PRICES = [
  { category: "Neues Set", items: [{ name: "Camouflage", price: "50 €" }, { name: "Inkl. Farbe", price: "56 €" }, { name: "French/Babyboomer", price: "58 €" }] },
  { category: "Nachfüllung", items: [{ name: "Camouflage / Gelüberzug", price: "40 €" }, { name: "Inkl. Farbe", price: "46 €" }, { name: "Inkl. French / Babyboomer", price: "48 €" }] },
  { category: "Shellac", items: [{ name: "Maniküre French / Farbe", price: "37 €" }, { name: "Pediküre", price: "37 €" }, { name: "Abmontage inkl. Polieren", price: "10 €" }, { name: "Reparatur", price: "4 €" }] },
  { category: "Pediküre", items: [{ name: "Classic", price: "44 €" }, { name: "Inkl. Shellac", price: "64 €" }] },
  { category: "Maniküre", items: [{ name: "Maniküre Classic", price: "25 €" }, { name: "Lackieren", price: "8 €" }, { name: "Verwöhnpflege", price: "13 €" }, { name: "Maniküre inkl. Paraffinbad", price: "30 €" }] },
  { category: "Wimpernlifting", items: [{ name: "Inkl. Farben & Keratin", price: "55 €" }] },
  { category: "Gesichtsbehandlung", items: [{ name: "Skinboom Hydra Glow Pen", price: "80 €" }, { name: "Peeling inkl. Hydra Global Mask", price: "45 €" }] },
  { category: "Make-up", items: [{ name: "Make-up", price: "ab 50 €" }] },
  { category: "Waxing", items: [{ name: "Gesicht komplett", price: "25 €" }, { name: "Oberlippe", price: "10 €" }, { name: "Augenbrauen", price: "10 €" }, { name: "Arme komplett (Schultern bis Hände)", price: "35 €" }, { name: "Beine komplett (Oberschenkel–Unterschenkel)", price: "49 €" }, { name: "Unterschenkel (Knie bis Knöchel)", price: "29 €" }, { name: "Waxing komplett (Beine, Arme, Achsel, Bikini)", price: "89 €" }, { name: "Rücken", price: "35 €" }, { name: "Rücken komplett (Schultern bis Taille)", price: "45 €" }] },
];

const ALL_CATS = ["Alle", ...PRICES.map((p) => p.category)];
const SMALL = ["Make-up", "Wimpernlifting", "Pediküre"];

export function PriceFilter() {
  const [active, setActive] = useState("Alle");
  const visible = active === "Alle" ? PRICES : PRICES.filter((p) => p.category === active);
  const big = visible.filter((p) => !SMALL.includes(p.category));
  const small = visible.filter((p) => SMALL.includes(p.category));

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll("[data-r]:not(.rv)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <>
      {/* Filter Tabs */}
      <div style={{ background: C.white, borderBottom: "1px solid rgba(223,167,198,0.1)", position: "sticky", top: 74, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px", display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none" }}>
          {ALL_CATS.map((cat) => (
            <button key={cat} className={`pr-tab${active === cat ? " active" : ""}`} onClick={() => setActive(cat)}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Price Cards */}
      <section style={{ padding: "64px 0 96px", background: C.bg1 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
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
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg,#2A2528 0%,#3a3033 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div className="dm" style={{ color: "rgba(255,247,242,0.45)", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 18 }}>Unsicher bei der Wahl?</div>
          <h2 className="pf" style={{ color: "#FFF7F2", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 400, marginBottom: 14 }}>Du bist unsicher, welche<br />Behandlung zu dir passt?</h2>
          <p className="dm" style={{ color: "rgba(255,247,242,0.55)", fontSize: 15, lineHeight: 1.75, marginBottom: 32 }}>Wir beraten dich gerne persönlich und finden gemeinsam den perfekten Termin für dich.</p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "15px 36px", borderRadius: 999, fontSize: 13, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: C.gold }}>✦</span> Über WhatsApp anfragen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: C.dark1, padding: "32px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginBottom: 20 }}>
          <a href="/" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Startseite</a>
          <a href="/impressum" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Impressum</a>
          <a href="/datenschutz" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Datenschutz</a>
        </div>
        <span className="dm" style={{ color: "rgba(255,255,255,0.22)", fontSize: 12 }}>© 2025 Divine Beauty & Nails Studio · Wien</span>
      </footer>
    </>
  );
}
