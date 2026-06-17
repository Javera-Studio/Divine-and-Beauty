import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import braut2Img from "@/assets/braut2.jpg";
import makeup2Img from "@/assets/makeup2.jpg";
import makeup3Img from "@/assets/makeup3.jpg";
import makeup5Img from "@/assets/makeup5.jpeg";
import gel1Img from "@/assets/gel1.jpeg";
import gel2Img from "@/assets/gel2.jpeg";
import gel3Img from "@/assets/gel3.jpeg";
import lashlift1Img from "@/assets/lashlift1.jpeg";
import lashlift2Img from "@/assets/lashlift2.jpeg";
import lashlift3Img from "@/assets/lashlift3.jpg";
import shellack01Img from "@/assets/shellack01.jpeg";
import shellack02Img from "@/assets/shellack02.jpeg";
import shellack03Img from "@/assets/shellack03.jpeg";
import wax1Img from "@/assets/wax1.png";
import wax2Img from "@/assets/wax2.png";
import wax3Img from "@/assets/wax3.png";
import nagel6Img from "@/assets/nagel6.jpg";
import nagel8Img from "@/assets/nagel8.jpg";
import nagel11Img from "@/assets/nagel11.jpeg";
import pedi1Img from "@/assets/pedi1.jpeg";
import pedi2Img from "@/assets/pedi2.jpeg";
import pedi3Img from "@/assets/pedi3.jpg";
import gesicht1Img from "@/assets/gesicht1.jpeg";
import gesicht2Img from "@/assets/gesicht2.jpeg";
import gesicht3Img from "@/assets/gesicht3.jpeg";

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

const SERVICES = [
  {
    title: "Gelmodellage",
    desc: "Individuelle Nagelmodellage mit hochwertigem Gel – von klassisch-elegant bis kreativ-extravagant. Langanhaltend, präzise und auf Wunsch mit feinstem Nail-Art veredelt.",
    highlights: ["Camouflage", "French", "Babyboomer", "Farbe"],
    img: "/Gelmodellage.jpg",
  },
  {
    title: "Nachfüllung",
    desc: "Professionelle Auffrischung deiner bestehenden Gelmodellage. In kurzer Zeit wieder perfekt gepflegt, wunderschön und langanhaltend.",
    highlights: ["Camouflage / Gelbezug", "Inkl. Farbe", "French / Babyboomer"],
    img: "/Nachfuellung.jpg",
  },
  {
    title: "Shellac",
    desc: "Der Klassiker mit Hochglanz-Finish und bis zu drei Wochen Haltbarkeit – ohne Abstumpfung, ohne Chips. Für Hände und Füße.",
    highlights: ["Maniküre French / Farbe", "Pediküre", "Abmontage inkl. Polieren", "Reparatur"],
    img: "/nagel5.png",
  },
  {
    title: "Pediküre",
    desc: "Verwöhnende Fußpflege mit Peeling, intensiver Pflege und eleganter Lackierung – für gepflegte, schöne Füße das ganze Jahr.",
    highlights: ["Classic", "Inkl. Shellac"],
    img: "/Pedikuere.jpg",
  },
  {
    title: "Maniküre",
    desc: "Klassische oder moderne Handpflege: Nagelformung, Nagelhautpflege und Lackierung nach deinem Wunsch – für gepflegte Hände.",
    highlights: ["Maniküre Classic", "Lackieren", "Verwöhnpflege"],
    img: "/Manikuere.jpg",
  },
  {
    title: "Wimpernlifting",
    desc: "Natürlich geschwungene Wimpern durch professionelles Lifting – keine Extensions, nur dein natürlicher Look, perfektioniert und strahlend.",
    highlights: ["Inkl. Farben & Keratin"],
    img: "/Wimpernlifting.jpg",
  },
  {
    title: "Waxing",
    desc: "Sanfte, präzise Haarentfernung mit Warmwachs für dauerhaft glatte Haut – schonend für Gesicht und Körper.",
    highlights: ["Gesicht komplett", "Augenbrauen", "Oberlippe", "Arme komplett", "Beine komplett", "Waxing komplett"],
    img: "/Waxing.jpg",
  },
  {
    title: "Gesichtsbehandlung",
    desc: "Individuelle Pflegebehandlungen für strahlende, gepflegte Haut – genau auf deinen Hauttyp abgestimmt mit modernsten Produkten.",
    highlights: ["Skinboom Hydra Glow Pen", "Peeling inkl. Hydra Global Mask"],
    img: "/Gesichtsbehandlung.jpg",
  },
  {
    title: "Make-up",
    desc: "Professionelles Make-up für jeden Anlass – natürlich, elegant oder glamourös. Dein perfekter Look für unvergessliche Momente.",
    highlights: ["Natürliches Make-up", "Elegantes Make-up", "Glamour Make-up", "Event Make-up"],
    img: "/Make-up.jpg",
  },
];

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap");
html { scroll-behavior: smooth; }
body { overflow-x: hidden; background: #FFF7F2; }
*, *::before, *::after { box-sizing: border-box; }
.pf { font-family: 'Playfair Display', Georgia, serif; }
.dm { font-family: 'DM Sans', system-ui, sans-serif; }
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
[data-r] { opacity: 0; transform: translateY(28px); transition: opacity .6s cubic-bezier(.4,0,.2,1), transform .6s cubic-bezier(.4,0,.2,1); }
[data-r].rv { opacity: 1; transform: none; }
[data-r][data-d="1"] { transition-delay: 100ms; }
[data-r][data-d="2"] { transition-delay: 200ms; }
@media (prefers-reduced-motion: reduce) { [data-r] { opacity: 1; transform: none; transition: none; } }
.lsv-row { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
@media (max-width: 860px) { .lsv-row { grid-template-columns: 1fr; gap: 36px; } }
.lsv-img-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 48px; }
@media (max-width: 640px) { .lsv-img-grid { grid-template-columns: 1fr; } }
@media (max-width: 768px) {
  .pf { word-break: break-word; overflow-wrap: break-word; }
  h1.pf { font-size: clamp(1.7rem, 6vw, 3.8rem) !important; }
  h2.pf { font-size: clamp(1.4rem, 5vw, 2.6rem) !important; }
}
.lsv-img-wrap { overflow: hidden; border-radius: 20px; box-shadow: 0 8px 28px rgba(42,37,40,0.08); }
.lsv-img-wrap img { width: 100%; height: 300px; object-fit: cover; display: block; transition: transform 0.45s ease; }
.lsv-img-wrap img:hover { transform: scale(1.3); }
.lsv-img-wrap.contain img { object-fit: contain; background: #FFF7F2; }
`;

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "10px 0 20px" }}>
    <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
    <div style={{ display: "flex", gap: 5 }}>
      {[0, 1, 2].map((k) => (
        <span key={k} style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.85 }} />
      ))}
    </div>
    <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>
    {children}
  </div>
);

const W = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", ...style }}>{children}</div>
);

export default function Leistungen() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    let el = document.getElementById("lsv-css");
    if (!el) {
      el = document.createElement("style");
      el.id = "lsv-css";
      document.head.appendChild(el);
    }
    (el as HTMLStyleElement).textContent = CSS;
    return () => { document.getElementById("lsv-css")?.remove(); };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("rv"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll("[data-r]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="dm" style={{ background: C.bg1, color: C.text, minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ background: "rgba(255,247,242,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(42,37,40,0.08)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "17px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img src={logo} alt="Divine Beauty Logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
            <div>
              <div className="pf" style={{ color: C.text, fontSize: 15, fontWeight: 600, lineHeight: 1.1 }}>Divine Beauty</div>
              <div className="dm" style={{ color: C.muted, fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase" }}>&amp; Nails Studio</div>
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link to="/preise" className="dm" style={{ color: C.muted, fontSize: 13, textDecoration: "none", letterSpacing: "0.3px" }}>Preise</Link>
            <Link to="/#kontakt" className="dm" style={{ color: C.muted, fontSize: 13, textDecoration: "none", letterSpacing: "0.3px" }}>Kontakt</Link>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "10px 20px", borderRadius: 999, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Termin buchen
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: "center", background: `linear-gradient(160deg, ${C.bg1} 0%, ${C.bg2} 100%)` }}>
        <W>
          <div data-r>
            <Label>Beauty &amp; Treatments</Label>
            <Divider />
            <h1 className="pf" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", color: C.text, marginBottom: 20, lineHeight: 1.18 }}>
              Unsere <em style={{ color: C.pink }}>Leistungen</em>
            </h1>
            <p className="dm" style={{ color: C.muted, fontSize: 17, lineHeight: 1.85, maxWidth: 560, margin: "0 auto" }}>
              Individuelle Beauty-Behandlungen für gepflegte Nägel, strahlende Haut und einen perfekten Auftritt.
            </p>
          </div>
        </W>
      </section>

      {/* Service sections */}
      {SERVICES.map((s, i) => {
        const isEven = i % 2 === 0;
        const bg = isEven ? C.white : C.bg1;
        return (
          <section key={s.title} style={{ background: bg, padding: "88px 0" }}>
            <W>
              <div className="lsv-row">
                {isEven ? (
                  <>
                    {/* Image left */}
                    <div data-r>
                      <img
                        src={s.img}
                        alt={s.title}
                        style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24, display: "block", boxShadow: "0 16px 56px rgba(42,37,40,0.10)" }}
                      />
                    </div>
                    {/* Text right */}
                    <div data-r data-d="1">
                      <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>
                        0{i + 1}
                      </div>
                      <h2 className="pf" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.text, marginBottom: 18, lineHeight: 1.2 }}>
                        {s.title}
                      </h2>
                      <p className="dm" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.85, marginBottom: 28 }}>
                        {s.desc}
                      </p>
                      <div style={{ marginBottom: 36 }}>
                        {s.highlights.map((h) => (
                          <div key={h} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                            <span className="dm" style={{ color: C.text, fontSize: 14 }}>{h}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                          Termin buchen
                        </a>
                        <Link to="/preise" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, background: C.white, color: C.dark1, boxShadow: "0 4px 18px rgba(42,37,40,0.10)", borderBottom: "1.5px solid rgba(214,183,109,0.4)", fontFamily: "'DM Sans', sans-serif", transition: "background .2s" }}
                          onMouseEnter={e => { e.currentTarget.style.background = "#f5f0ee"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = C.white; }}
                        >
                          Preise ansehen
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text left */}
                    <div data-r>
                      <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>
                        0{i + 1}
                      </div>
                      <h2 className="pf" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", color: C.text, marginBottom: 18, lineHeight: 1.2 }}>
                        {s.title}
                      </h2>
                      <p className="dm" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.85, marginBottom: 28 }}>
                        {s.desc}
                      </p>
                      <div style={{ marginBottom: 36 }}>
                        {s.highlights.map((h) => (
                          <div key={h} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                            <span className="dm" style={{ color: C.text, fontSize: 14 }}>{h}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                          Termin buchen
                        </a>
                        <Link to="/preise" style={{ padding: "12px 28px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, background: C.white, color: C.dark1, boxShadow: "0 4px 18px rgba(42,37,40,0.10)", borderBottom: "1.5px solid rgba(214,183,109,0.4)", fontFamily: "'DM Sans', sans-serif", transition: "background .2s" }}
                          onMouseEnter={e => { e.currentTarget.style.background = "#f5f0ee"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = C.white; }}
                        >
                          Preise ansehen
                        </Link>
                      </div>
                    </div>
                    {/* Image right */}
                    <div data-r data-d="1">
                      <img
                        src={s.img}
                        alt={s.title}
                        style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 24, display: "block", boxShadow: "0 16px 56px rgba(42,37,40,0.10)" }}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* 3er-Bildgrid unter Gelmodellage */}
              {s.title === "Gelmodellage" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap"><img src={gel3Img} alt="Gelmodellage" /></div>
                  <div className="lsv-img-wrap"><img src={gel2Img} alt="Gelmodellage" style={{ objectPosition: "center 70%" }} /></div>
                  <div className="lsv-img-wrap"><img src={gel1Img} alt="Gelmodellage" style={{ objectPosition: "center 70%" }} /></div>
                </div>
              )}

              {/* 3er-Bildgrid unter Nachfüllung */}
              {s.title === "Nachfüllung" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap"><img src={nagel11Img} alt="Nachfüllung" /></div>
                  <div className="lsv-img-wrap"><img src={nagel6Img}  alt="Nachfüllung" /></div>
                  <div className="lsv-img-wrap"><img src={nagel8Img}  alt="Nachfüllung" /></div>
                </div>
              )}

              {/* 3er-Bildgrid unter Shellac */}
              {s.title === "Shellac" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap"><img src={shellack01Img} alt="Shellac" /></div>
                  <div className="lsv-img-wrap"><img src={shellack02Img} alt="Shellac" /></div>
                  <div className="lsv-img-wrap"><img src={shellack03Img} alt="Shellac" /></div>
                </div>
              )}

              {/* 3er-Bildgrid unter Pediküre */}
              {s.title === "Pediküre" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap"><img src={pedi1Img} alt="Pediküre" /></div>
                  <div className="lsv-img-wrap"><img src={pedi2Img} alt="Pediküre" /></div>
                  <div className="lsv-img-wrap"><img src={pedi3Img} alt="Pediküre" /></div>
                </div>
              )}

              {/* 3er-Bildgrid unter Waxing */}
              {s.title === "Waxing" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap"><img src={wax1Img} alt="Waxing" /></div>
                  <div className="lsv-img-wrap"><img src={wax2Img} alt="Waxing" /></div>
                  <div className="lsv-img-wrap"><img src={wax3Img} alt="Waxing" /></div>
                </div>
              )}

              {/* 3er-Bildgrid unter Wimpernlifting */}
              {s.title === "Wimpernlifting" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap"><img src={lashlift1Img} alt="Wimpernlifting" style={{ objectPosition: "center 80%" }} /></div>
                  <div className="lsv-img-wrap"><img src={lashlift2Img} alt="Wimpernlifting" /></div>
                  <div className="lsv-img-wrap"><img src={lashlift3Img} alt="Wimpernlifting" /></div>
                </div>
              )}

              {/* 3er-Bildgrid unter Make-up */}
              {s.title === "Make-up" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap contain"><img src={braut2Img} alt="Make-up" /></div>
                  {[makeup2Img, makeup5Img].map((src) => (
                    <div key={src} className="lsv-img-wrap"><img src={src} alt="Make-up" /></div>
                  ))}
                </div>
              )}

              {/* 3er-Bildgrid unter Gesichtsbehandlung */}
              {s.title === "Gesichtsbehandlung" && (
                <div data-r className="lsv-img-grid">
                  <div className="lsv-img-wrap contain"><img src={gesicht1Img} alt="Gesichtsbehandlung" /></div>
                  <div className="lsv-img-wrap"><img src={gesicht2Img} alt="Gesichtsbehandlung" /></div>
                  <div className="lsv-img-wrap"><img src={gesicht3Img} alt="Gesichtsbehandlung" /></div>
                </div>
              )}
            </W>
          </section>
        );
      })}

      {/* CTA Banner */}
      <section style={{ padding: "80px 24px", background: `linear-gradient(135deg, ${C.dark1} 0%, #3a3033 100%)`, textAlign: "center" }}>
        <div className="dm" style={{ color: "rgba(255,247,242,0.45)", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 18 }}>
          Bereit für deinen Termin?
        </div>
        <h2 className="pf" style={{ color: C.soft, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: 14 }}>
          Wir freuen uns auf dich
        </h2>
        <p className="dm" style={{ color: "rgba(255,247,242,0.55)", fontSize: 15, lineHeight: 1.75, marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
          Buche deinen Wunschtermin einfach via WhatsApp – wir melden uns schnell zurück.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "14px 34px", borderRadius: 999, fontSize: 14, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
        </a>
      </section>

      {/* Footer bar */}
      <div style={{ background: C.dark1, borderTop: "1px solid rgba(214,183,109,0.1)", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <span className="dm" style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>
          © {new Date().getFullYear()} Divine Beauty &amp; Nails Studio · Wien
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          <Link to="/" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Startseite</Link>
          <Link to="/preise" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Preise</Link>
          <Link to="/impressum" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Impressum</Link>
          <Link to="/datenschutz" className="dm" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>Datenschutz</Link>
        </div>
      </div>
    </div>
  );
}
