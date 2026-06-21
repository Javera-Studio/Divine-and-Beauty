import type { Metadata } from "next";
import Link from "next/link";
import { NavbarSimple } from "@/components/Navbar";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";

export const metadata: Metadata = {
  title: "Leistungen – Divine Beauty & Nails Studio Wien",
  description: "Alle Beauty-Leistungen im Überblick: Gelmodellage, Shellac, Pediküre, Wimpernlifting, Waxing, Gesichtsbehandlung & Make-up in Wien 1200.",
  alternates: { canonical: "https://divinenails.at/leistungen" },
};

const WA_URL = "https://wa.me/436763633721?text=" + encodeURIComponent("Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen.");

const C = { bg1: "#FFF7F2", bg2: "#F7EDE7", white: "#FFFFFF", dark1: "#2A2528", pink: "#D98FA8", soft: "#E9B8C8", gold: "#D6B76D", text: "#3A3034", muted: "#7D6B70" };

const SERVICES = [
  { title: "Gelmodellage", desc: "Individuelle Nagelmodellage mit hochwertigem Gel – von klassisch-elegant bis kreativ-extravagant. Langanhaltend, präzise und auf Wunsch mit feinstem Nail-Art veredelt.", highlights: ["Camouflage", "French", "Babyboomer", "Farbe"], img: "/Gelmodellage.jpg", gallery: ["/assets/gel3.jpeg", "/assets/gel2.jpeg", "/assets/gel1.jpeg"] },
  { title: "Nachfüllung", desc: "Professionelle Auffrischung deiner bestehenden Gelmodellage. In kurzer Zeit wieder perfekt gepflegt, wunderschön und langanhaltend.", highlights: ["Camouflage / Gelüberzug", "Inkl. Farbe", "French / Babyboomer"], img: "/Nachfuellung.jpg", gallery: ["/assets/nagel11.jpeg", "/assets/nagel6.jpg", "/assets/nagel8.jpg"] },
  { title: "Shellac", desc: "Der Klassiker mit Hochglanz-Finish und bis zu drei Wochen Haltbarkeit – ohne Abstumpfung, ohne Chips. Für Hände und Füße.", highlights: ["Maniküre French / Farbe", "Pediküre", "Abmontage inkl. Polieren", "Reparatur"], img: "/nagel5.png", gallery: ["/assets/shellack01.jpeg", "/assets/shellack02.jpeg", "/assets/shellack03.jpeg"] },
  { title: "Pediküre", desc: "Verwöhnende Fußpflege mit Peeling, intensiver Pflege und eleganter Lackierung – für gepflegte, schöne Füße das ganze Jahr.", highlights: ["Classic", "Inkl. Shellac"], img: "/Pedikuere.jpg", gallery: ["/assets/pedi1.jpeg", "/assets/pedi2.jpeg", "/assets/pedi3.jpg"] },
  { title: "Maniküre", desc: "Klassische oder moderne Handpflege: Nagelformung, Nagelhautpflege und Lackierung nach deinem Wunsch – für gepflegte Hände.", highlights: ["Maniküre Classic", "Lackieren", "Verwöhnpflege"], img: "/Manikuere.jpg", gallery: [] },
  { title: "Wimpernlifting", desc: "Natürlich geschwungene Wimpern durch professionelles Lifting – keine Extensions, nur dein natürlicher Look, perfektioniert und strahlend.", highlights: ["Inkl. Farben & Keratin"], img: "/Wimpernlifting.jpg", gallery: ["/assets/lashlift1.jpeg", "/assets/lashlift2.jpeg", "/assets/lashlift3.jpg"] },
  { title: "Waxing", desc: "Sanfte, präzise Haarentfernung mit Warmwachs für dauerhaft glatte Haut – schonend für Gesicht und Körper.", highlights: ["Gesicht komplett", "Augenbrauen", "Oberlippe", "Arme komplett", "Beine komplett", "Waxing komplett"], img: "/Waxing.jpg", gallery: ["/assets/wax1.png", "/assets/wax2.png", "/assets/wax3.png"] },
  { title: "Gesichtsbehandlung", desc: "Individuelle Pflegebehandlungen für strahlende, gepflegte Haut – genau auf deinen Hauttyp abgestimmt mit modernsten Produkten.", highlights: ["Skinboom Hydra Glow Pen", "Peeling inkl. Hydra Global Mask"], img: "/Gesichtsbehandlung.jpg", gallery: ["/assets/gesicht1.jpeg", "/assets/gesicht2.jpeg", "/assets/gesicht3.jpeg"] },
  { title: "Make-up", desc: "Professionelles Make-up für jeden Anlass – natürlich, elegant oder glamourös. Dein perfekter Look für unvergessliche Momente.", highlights: ["Natürliches Make-up", "Elegantes Make-up", "Glamour Make-up", "Event Make-up"], img: "/Make-up.jpg", gallery: ["/assets/braut2.jpg", "/assets/makeup2.jpg", "/assets/makeup5.jpeg"] },
];

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "10px 0 20px" }}>
    <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
    <div style={{ display: "flex", gap: 5 }}>{[0,1,2].map(k => <span key={k} style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.85 }} />)}</div>
    <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
  </div>
);

export default function Leistungen() {
  return (
    <div className="dm" style={{ background: C.bg1, color: C.text, minHeight: "100vh" }}>
      <NavbarSimple />
      <ScrollRevealInit />

      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: "center", background: `linear-gradient(160deg, ${C.bg1} 0%, ${C.bg2} 100%)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div data-r>
            <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>Beauty &amp; Treatments</div>
            <Divider />
            <h1 className="pf" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", color: C.text, marginBottom: 20, lineHeight: 1.18 }}>
              Unsere <em style={{ color: C.pink }}>Leistungen</em>
            </h1>
            <p className="dm" style={{ color: C.muted, fontSize: 17, lineHeight: 1.85, maxWidth: 560, margin: "0 auto" }}>
              Individuelle Beauty-Behandlungen für gepflegte Nägel, strahlende Haut und einen perfekten Auftritt.
            </p>
          </div>
        </div>
      </section>

      {SERVICES.map((s, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven ? C.white : C.bg1;
        return (
          <section key={s.title} style={{ background: bg, padding: "88px 0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
              <div className="lsv-row">
                {isEven ? (
                  <>
                    <div data-r>
                      <img src={s.img} alt={s.title} style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24, display: "block", boxShadow: "0 16px 56px rgba(42,37,40,0.10)" }} loading="lazy" />
                    </div>
                    <div data-r data-d="1">
                      <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>0{i + 1}</div>
                      <h2 className="pf" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.text, marginBottom: 18, lineHeight: 1.2 }}>{s.title}</h2>
                      <p className="dm" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.85, marginBottom: 28 }}>{s.desc}</p>
                      <div style={{ marginBottom: 36 }}>
                        {s.highlights.map(h => <div key={h} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, flexShrink: 0 }} /><span className="dm" style={{ color: C.text, fontSize: 14 }}>{h}</span></div>)}
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Termin buchen</a>
                        <Link href="/preise" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, background: C.white, color: C.dark1, boxShadow: "0 4px 18px rgba(42,37,40,0.10)", borderBottom: "1.5px solid rgba(214,183,109,0.4)", fontFamily: "'DM Sans', sans-serif" }}>Preise ansehen</Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div data-r>
                      <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>0{i + 1}</div>
                      <h2 className="pf" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.text, marginBottom: 18, lineHeight: 1.2 }}>{s.title}</h2>
                      <p className="dm" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.85, marginBottom: 28 }}>{s.desc}</p>
                      <div style={{ marginBottom: 36 }}>
                        {s.highlights.map(h => <div key={h} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, flexShrink: 0 }} /><span className="dm" style={{ color: C.text, fontSize: 14 }}>{h}</span></div>)}
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Termin buchen</a>
                        <Link href="/preise" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, background: C.white, color: C.dark1, boxShadow: "0 4px 18px rgba(42,37,40,0.10)", borderBottom: "1.5px solid rgba(214,183,109,0.4)", fontFamily: "'DM Sans', sans-serif" }}>Preise ansehen</Link>
                      </div>
                    </div>
                    <div data-r data-d="1">
                      <img src={s.img} alt={s.title} style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24, display: "block", boxShadow: "0 16px 56px rgba(42,37,40,0.10)" }} loading="lazy" />
                    </div>
                  </>
                )}
              </div>
              {s.gallery.length > 0 && (
                <div data-r className="lsv-img-grid">
                  {s.gallery.map((src, gi) => (
                    <div key={gi} className="lsv-img-wrap">
                      <img
                        src={src}
                        alt={s.title}
                        loading="lazy"
                        style={s.title === "Wimpernlifting" && gi === 0 ? { objectPosition: "center 70%" } : undefined}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section style={{ padding: "80px 24px", background: `linear-gradient(135deg, ${C.dark1} 0%, #3a3033 100%)`, textAlign: "center" }}>
        <div className="dm" style={{ color: "rgba(255,247,242,0.45)", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 18 }}>Bereit für deinen Termin?</div>
        <h2 className="pf" style={{ color: C.soft, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: 14 }}>Wir freuen uns auf dich</h2>
        <p className="dm" style={{ color: "rgba(255,247,242,0.55)", fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
          Buche deinen Wunschtermin einfach via WhatsApp – wir melden uns schnell zurück.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "14px 34px", borderRadius: 999, fontSize: 14, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
        </a>
      </section>

      <div style={{ background: C.dark1, borderTop: "1px solid rgba(214,183,109,0.1)", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <span className="dm" style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>© 2025 Divine Beauty &amp; Nails Studio · Wien</span>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Startseite</Link>
          <Link href="/preise" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Preise</Link>
          <Link href="/impressum" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Impressum</Link>
          <Link href="/datenschutz" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Datenschutz</Link>
        </div>
      </div>
    </div>
  );
}
