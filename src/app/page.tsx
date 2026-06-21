import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Diamond, Sparkles, Flower2, Star, Award, Heart, MapPin, Clock, Mail, Phone } from "lucide-react";

const InstaIcon = ({ size = 17, strokeWidth = 1.5, color, style }: { size?: number; strokeWidth?: number; color?: string; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";

export const metadata: Metadata = {
  title: "Divine Beauty & Nails Studio Wien – Nägel, Beauty & Waxing",
  description: "Dein Beauty-Studio in Wien – Gelmodellage, Shellac, Pediküre, Waxing & Gesichtsbehandlung. Individuelle Beratung & gepflegte Ergebnisse.",
  alternates: { canonical: "https://divinenails.at" },
};

const STUDIO = {
  phone: "+43 676 3633721",
  instagram: "@divine.beauty.nails.studio",
  instagramUrl: "https://www.instagram.com/divine.beauty.nails.studio",
  address: "Klosterneuburger Straße 98, 1200 Wien",
  email: "kontakt@divinenails.at",
  hours: { "Mo – Fr": "08:00 – 19:00 Uhr", Samstag: "09:00 – 17:00 Uhr", Sonntag: "Auf Anfrage" },
};

const WA_URL = "https://wa.me/436763633721?text=" + encodeURIComponent("Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen.");

const C = { bg1: "#FFF7F2", bg2: "#F7EDE7", white: "#FFFFFF", dark1: "#2A2528", pink: "#D98FA8", soft: "#E9B8C8", gold: "#D6B76D", text: "#3A3034", muted: "#7D6B70" };

const SERVICES = [
  { img: "/Gelmodellage.jpg", title: "Gelmodellage" },
  { img: "/Nachfuellung.jpg", title: "Nachfüllung" },
  { img: "/nagel5.png", title: "Shellac" },
  { img: "/Pedikuere.jpg", title: "Pediküre" },
  { img: "/Manikuere.jpg", title: "Maniküre" },
  { img: "/Wimpernlifting.jpg", title: "Wimpernlifting" },
  { img: "/Waxing.jpg", title: "Waxing" },
  { img: "/Gesichtsbehandlung.jpg", title: "Gesichtsbehandlung" },
  { img: "/Make-up.jpg", title: "Make-up" },
];

const GALLERY = [
  { id: 1,  label: "Nägel",             src: "/assets/gal1opt.jpg",       g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 2,  label: "Studio",            src: "/assets/studio11.png",       g: "linear-gradient(145deg,#FFF7F2,#e8d4b0 55%,#D6B76D)" },
  { id: 3,  label: "Nägel",             src: "/assets/new3.jpg",           g: "linear-gradient(145deg,#FFF7FA,#F3C6DC)" },
  { id: 4,  label: "Gelmodellage",      src: "/assets/gel3.jpeg",          g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 5,  label: "Nägel",             src: "/assets/gal2.jpg",           g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 6,  label: "Pediküre",          src: "/assets/pedi2.jpeg",         g: "linear-gradient(145deg,#FBEAF3,#e8d4b0 60%,#D6B76D)" },
  { id: 7,  label: "Studio",            src: "/assets/studio4.png",        g: "linear-gradient(145deg,#FFF7F2,#e8d4b0 55%,#D6B76D)" },
  { id: 8,  label: "Nägel",             src: "/nagel4.png",                g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 9,  label: "Nägel",             src: "/assets/gal3.jpg",           g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 10, label: "Augen",             src: "/augen2.png",                g: "linear-gradient(145deg,#FFF7FA,#D6B76D 40%,#DFA7C6)" },
  { id: 11, label: "Nägel",             src: "/assets/new1opt.jpg",        g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 12, label: "Studio",            src: "/assets/studio2.png",        g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 13, label: "Nägel",             src: "/assets/gal4opt.jpg",        g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 14, label: "Maniküre",          src: "/Manikuere.png",             g: "linear-gradient(145deg,#FBEAF3,#DFA7C6)" },
  { id: 15, label: "Nägel",             src: "/assets/nagel6.jpg",         g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 16, label: "Studio",            src: "/assets/studio7.png",        g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 17, label: "Make-up",           src: "/makeup2.png",               g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 18, label: "Nägel",             src: "/assets/new4.png",           g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 19, label: "Augen",             src: "/augen1.png",                g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 20, label: "Gelmodellage",      src: "/Gelmodellage.png",          g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 21, label: "Nägel",             src: "/assets/new5.png",           g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 22, label: "Studio",            src: "/assets/studio9.png",        g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 23, label: "Make-up",           src: "/makeup3.png",               g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 24, label: "Nägel",             src: "/nagel2.png",                g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 25, label: "Pediküre",          src: "/assets/pedi1.jpeg",         g: "linear-gradient(145deg,#FBEAF3,#e8d4b0 60%,#D6B76D)" },
  { id: 26, label: "Studio",            src: "/assets/studio12.png",       g: "linear-gradient(145deg,#FFF7F2,#e8d4b0 60%,#D6B76D)" },
  { id: 27, label: "Nägel",             src: "/assets/new2.png",           g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 28, label: "Nägel",             src: "/nagel1.jpg",                g: "linear-gradient(145deg,#FFF7FA,#F3C6DC)" },
  { id: 29, label: "Pediküre",          src: "/assets/pedi3.jpg",          g: "linear-gradient(145deg,#FBEAF3,#e8d4b0 60%,#D6B76D)" },
  { id: 30, label: "Gesichtsbehandlung",src: "/assets/gesicht1.jpeg",      g: "linear-gradient(145deg,#FFF7FA,#D6B76D 40%,#DFA7C6)" },
  { id: 31, label: "Gesichtsbehandlung",src: "/assets/gesicht2.jpeg",      g: "linear-gradient(145deg,#FFF7FA,#D6B76D 40%,#DFA7C6)" },
  { id: 32, label: "Gesichtsbehandlung",src: "/assets/gesicht3.jpeg",      g: "linear-gradient(145deg,#FFF7FA,#D6B76D 40%,#DFA7C6)" },
  { id: 33, label: "Nägel",             src: "/assets/gal5opt.jpg",        g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
];

const REVIEWS = [
  { id: 1, name: "Vanessa K.", stars: 5, initial: "V", featured: true, category: "Gelmodellage", text: "Ich gehe seit 4 Jahren hier Nägel machen und bin immer begeistert. Die Mädels leisten tolle Arbeit und sind sehr schnell und genau. Ich bekomme immer genau das, was ich mir wünsche. Die Farbauswahl ist riesig und es gibt ständig neue Farben." },
  { id: 2, name: "Natasa E.", stars: 5, initial: "N", featured: false, category: "Nägel", text: "Ich bin seit über fünf Jahren zufriedene Kundin und kann Danijela und ihr Team nur weiterempfehlen. Immer nett, professionell und zuverlässig. Die Feilarbeiten sind wunderschön und die Farbauswahl lässt keine Wünsche offen." },
  { id: 3, name: "Sandra M.", stars: 5, initial: "S", featured: false, category: "Atmosphäre", text: "Entspannte Atmosphäre, sauberes Studio und ein wirklich herzliches Team. Man fühlt sich vom ersten Moment an wohl. Gerne immer wieder!" },
  { id: 4, name: "Julia B.", stars: 5, initial: "J", featured: false, category: "Beratung", text: "Tolle Beratung, saubere Arbeit und die Nägel halten wirklich lange. Ich würde hier nie mehr weggehen – absolut empfehlenswert." },
  { id: 5, name: "Leonie H.", stars: 5, initial: "L", featured: false, category: "Shellac", text: "Der Shellac hält perfekt und sieht noch nach Wochen makellos aus. Sehr professionelles Team, das genau auf die eigenen Wünsche eingeht." },
];

const Stars = ({ n = 5 }: { n?: number }) => (
  <span style={{ color: C.gold, letterSpacing: 2, fontSize: 14 }}>
    {"★".repeat(n)}<span style={{ opacity: 0.22 }}>{"★".repeat(5 - n)}</span>
  </span>
);

const Avatar = ({ initial, size = 42 }: { initial: string; size?: number }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,#F3C6DC,#DFA7C6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(223,167,198,0.28)" }}>
    <span className="pf" style={{ color: "#fff", fontSize: size * 0.38 }}>{initial}</span>
  </div>
);

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "10px 0 20px" }}>
    <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
    <div style={{ display: "flex", gap: 5 }}>
      {[0, 1, 2].map(k => <span key={k} style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.85 }} />)}
    </div>
    <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
  </div>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>{children}</div>
);

const W = ({ children, pad = "0 24px", style = {} }: { children: React.ReactNode; pad?: string; style?: React.CSSProperties }) => (
  <div style={{ maxWidth: 1280, margin: "0 auto", padding: pad, ...style }}>{children}</div>
);

const GoldLine = ({ dir = "lr" }: { dir?: "lr" | "rl" }) => (
  <span style={{ width: 64, height: 1, background: `linear-gradient(90deg,${dir === "lr" ? "transparent,rgba(214,183,109,0.7)" : "rgba(214,183,109,0.7),transparent"})`, display: "block" }} />
);

const GoldDots = () => (
  <div style={{ display: "flex", gap: 5 }}>
    {[0, 1, 2].map(k => <span key={k} style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />)}
  </div>
);

export default function Home() {
  const featured = REVIEWS.find(r => r.featured)!;
  const otherReviews = REVIEWS.filter(r => !r.featured);

  return (
    <div className="dm" style={{ background: C.bg1, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <ScrollRevealInit />

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: C.bg1 }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
            <video autoPlay muted loop playsInline poster="/assets/studio5opt.jpg" style={{ height: "100%", width: "auto", display: "block" }}>
              <source src="/herovid.mp4" type="video/mp4" />
            </video>
            <div style={{ position: "absolute", inset: 0, background: "rgba(22,14,14,0.45)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `linear-gradient(to right, ${C.bg1} 0%, transparent 3.5%, transparent 96.5%, ${C.bg1} 100%)` }} />
          </div>
        </div>
        <W pad="0 24px" style={{ width: "100%", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="dv-fadeup" style={{ userSelect: "none", cursor: "default", transform: "translateY(-40px)" }}>
            <h1 className="pf" style={{ margin: "0 0 10px", lineHeight: 0.95 }}>
              <span className="gv dv-hero-title-main" style={{ display: "block", color: C.soft, fontSize: "clamp(4.5rem,9vw,8rem)", lineHeight: 1, fontWeight: 400, textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>Divine</span>
              <span className="dv-hero-title-sub" style={{ display: "block", color: "#ffffff", fontSize: "clamp(1.4rem,2.5vw,2.2rem)", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase", marginTop: 10, textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>Beauty &amp; Nails Studio</span>
            </h1>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "22px 0" }}>
              <span style={{ width: 48, height: 1, background: "linear-gradient(90deg,transparent,rgba(214,183,109,0.8))", display: "block" }} />
              <Diamond size={11} strokeWidth={1.5} color={C.gold} />
              <span style={{ width: 48, height: 1, background: "linear-gradient(90deg,rgba(214,183,109,0.8),transparent)", display: "block" }} />
            </div>
            <p className="dm" style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, letterSpacing: "4px", textTransform: "uppercase", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>Seit 2018 in Wien</p>
          </div>
        </W>
      </section>

      {/* ── ZITAT-BAND ── */}
      <section style={{ position: "relative", padding: "36px 24px", background: "linear-gradient(135deg,#2A2528 0%,#3a3033 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 50%,rgba(214,183,109,0.12) 0%,transparent 55%),radial-gradient(ellipse at 80% 50%,rgba(217,143,168,0.14) 0%,transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 24 }}>
            <GoldLine dir="lr" /><GoldDots /><GoldLine dir="rl" />
          </div>
          <p className="pf" style={{ color: "rgba(255,247,242,0.88)", fontSize: "clamp(1.4rem,3vw,2rem)", fontStyle: "italic", letterSpacing: "0.5px", lineHeight: 1.6, margin: "0 0 24px" }}>
            Deine Auszeit. Deine Schönheit. Dein Moment.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <GoldLine dir="lr" /><GoldDots /><GoldLine dir="rl" />
          </div>
        </div>
      </section>

      {/* ── ÜBER UNS ── */}
      <section id="ueber" style={{ padding: "96px 0", background: C.bg2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/daca3.png')", backgroundSize: "cover", backgroundPosition: "top center", opacity: 0.07, filter: "blur(22px) saturate(140%)", transform: "scale(1.08)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "-8%", right: "-6%", width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(243,198,220,0.3) 0%,transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <W style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Label>Über uns</Label>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text, lineHeight: 1.2 }}>
              Beauty mit <em style={{ color: C.pink }}>Leidenschaft</em> &amp; Präzision
            </h2>
          </div>
          <div className="dv-about-g" style={{ alignItems: "center", marginBottom: 56 }}>
            <div data-r>
              <div style={{ borderRadius: 28, overflow: "hidden", border: "1px solid rgba(214,183,109,0.16)", boxShadow: "0 20px 60px rgba(185,130,165,0.12)" }}>
                <img src="/assets/dacanew1opt.jpg" alt="Danijela — Divine Beauty & Nails Studio" style={{ width: "56%", display: "block", margin: "0 auto" }} />
              </div>
              <p className="pf" style={{ textAlign: "center", color: C.muted, fontSize: 15, fontStyle: "italic", marginTop: 18 }}>Ein Ort zum Entspannen, Wohlfühlen und Schönwerden.</p>
            </div>
            <div data-r data-d="1">
              <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.88, marginBottom: 20 }}>
                Bei <strong style={{ color: C.text }}>Divine Beauty &amp; Nails Studio</strong> steht dein Wohlgefühl im Mittelpunkt. In stilvoller, entspannter Atmosphäre entstehen individuelle Looks – von gepflegten Nägeln über Beauty-Behandlungen bis hin zu Waxing und Make-up.
              </p>
              <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.88, marginBottom: 36 }}>
                Wir arbeiten mit Sorgfalt, Präzision und echter Begeisterung für das Handwerk – damit du dich rundum schön und verwöhnt fühlst.
              </p>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "14px 30px", borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                Termin vereinbaren →
              </a>
            </div>
          </div>
        </W>
      </section>

      {/* ── WARUM DIVINE ── */}
      <section style={{ padding: "96px 0", background: C.white }}>
        <W>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Label>Warum wir?</Label>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text }}>
              Warum <em style={{ color: C.pink }}>Divine?</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
            {[
              { Icon: MessageCircle, title: "Individuelle Beratung", desc: "Dein Wunsch, dein Look. Wir hören zu und beraten dich persönlich und ehrlich." },
              { Icon: Diamond, title: "Saubere & präzise Arbeit", desc: "Hygiene und Präzision sind für uns keine Option – sie sind Selbstverständlichkeit." },
              { Icon: Sparkles, title: "Moderne Behandlungen", desc: "Aktuelle Techniken, hochwertige Produkte und echte Leidenschaft fürs Handwerk." },
              { Icon: Flower2, title: "Stilvolle Atmosphäre", desc: "Ein Ort zum Entspannen, Verwöhnen und Wohlfühlen – dein kleines Luxus-Refugium." },
            ].map((a, i) => (
              <div key={a.title} data-r data-d={i} className="lux-card" style={{ padding: "36px 28px", borderRadius: 22, textAlign: "center", background: C.white }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                  <a.Icon size={22} strokeWidth={1.5} color={C.gold} />
                </div>
                <h3 className="pf" style={{ color: C.text, fontSize: 18, marginBottom: 12 }}>{a.title}</h3>
                <p className="dm" style={{ color: C.muted, fontSize: 14, lineHeight: 1.78 }}>{a.desc}</p>
              </div>
            ))}
          </div>
          <div data-r style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 48 }}>
            {["/assets/studio14.png", "/assets/studio4.png", "/assets/studio15.png", "/assets/studio2.png"].map((src, i) => (
              <img key={i} src={src} alt="Divine Beauty Studio" style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 18, display: "block", boxShadow: "0 8px 28px rgba(42,37,40,0.08)" }} />
            ))}
          </div>
        </W>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding: "96px 0", background: C.bg1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/daca3.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.06, filter: "blur(24px) saturate(130%)", transform: "scale(1.08)", zIndex: 0, pointerEvents: "none" }} />
        <W style={{ position: "relative", zIndex: 1 }}>
          <div className="dv-team-split" style={{ marginBottom: 80 }}>
            <div data-r style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 24px 80px rgba(185,130,165,0.14)", border: "1px solid rgba(214,183,109,0.13)" }}>
              <img src="/assets/teamnew.jpeg" alt="Das Team von Divine Beauty & Nails Studio" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", minHeight: 294 }} />
            </div>
            <div data-r data-d="1">
              <div style={{ textAlign: "center" }}><Label>Unser Team</Label></div>
              <Divider />
              <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 20 }}>
                Lerne unser <em style={{ color: C.pink }}>Team</em> kennen
              </h2>
              <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
                Hinter Divine Beauty steht ein herzliches Team aus erfahrenen Beauty-Expertinnen mit Leidenschaft für Schönheit, Präzision und Wohlbefinden.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { Icon: Award, text: "Über 8 Jahre Erfahrung" },
                  { Icon: Heart, text: "Hunderte zufriedene Kundinnen" },
                  { Icon: MessageCircle, text: "Persönliche Beratung" },
                  { Icon: Sparkles, text: "Liebe zum Detail" },
                ].map(h => (
                  <div key={h.text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(251,234,243,0.8)", border: "1px solid rgba(223,167,198,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <h.Icon size={16} strokeWidth={1.5} color={C.gold} />
                    </div>
                    <span className="dm" style={{ color: C.text, fontSize: 15, fontWeight: 500 }}>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="dv-team-g">
            {[
              { img: "/assets/dacanew.jpeg", name: "Danijela", role: "Inhaberin & Beauty-Expertin", text: "Seit 2018 führt Danijela Divine Beauty & Nails mit viel Leidenschaft, Präzision und Liebe zum Detail. Ihr ist besonders wichtig, dass sich jede Kundin rundum wohlfühlt und individuell betreut wird." },
              { img: "/nina1.jpg", name: "Nina", role: "Beauty-Expertin", text: "Nina arbeitet mit viel Feingefühl und Präzision – und bringt mit ihrer ruhigen, aufmerksamen Art das Beste in jeder Behandlung heraus." },
              { img: "/gloria1.jpg", name: "Gloria", role: "Beauty-Expertin", text: "Gloria begeistert mit ihrer freundlichen Art und ihrem Gespür für schöne, natürliche Ergebnisse – stets mit einem Lächeln." },
            ].map((p, i) => (
              <div key={p.name} data-r data-d={i} className="team-card" style={{ background: C.white, borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(185,130,165,0.08)", border: "1px solid rgba(214,183,109,0.1)" }}>
                <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
                  <img src={p.img} alt={p.name} className="team-img" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div className="dm" style={{ color: C.pink, fontSize: 10.5, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 6 }}>{p.role}</div>
                  <h3 className="pf" style={{ color: C.text, fontSize: 21, marginBottom: 10 }}>{p.name}</h3>
                  <p className="dm" style={{ color: C.muted, fontSize: 14, lineHeight: 1.78 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section id="leistungen" style={{ padding: "96px 0", background: C.bg1 }}>
        <W>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Label>Was wir für dich tun</Label>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 14 }}>
              Unsere <em style={{ color: C.pink }}>Leistungen</em>
            </h2>
            <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}>
              Von Nageldesign bis Gesichtsbehandlung – professionelle Beauty-Behandlungen für jeden Anlass.
            </p>
          </div>
          <div className="dv-svc-g" style={{ marginBottom: 52 }}>
            {SERVICES.map((s, i) => (
              <Link key={s.title} href="/leistungen" data-r data-d={i % 3} className="dv-svc-card">
                <img src={s.img} alt={s.title} className="dv-svc-img" style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "14px 16px", textAlign: "center" }}>
                  <span className="pf" style={{ color: C.text, fontSize: 15 }}>{s.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/leistungen" className="btn-pk" style={{ padding: "13px 34px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: C.gold }}>✦</span> Alle Leistungen entdecken
            </Link>
          </div>
        </W>
      </section>

      {/* ── GALERIE ── */}
      <section id="galerie" style={{ padding: "96px 0", background: C.white, overflow: "hidden" }}>
        <W style={{ marginBottom: 52, textAlign: "center" }}>
          <Label>Portfolio</Label>
          <Divider />
          <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 14 }}>
            Unsere <em style={{ color: C.pink }}>Galerie</em>
          </h2>
          <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.8 }}>
            Einblicke in unsere Arbeit – jedes Ergebnis ein kleines Kunstwerk.
          </p>
        </W>
        <div className="dv-marquee-wrap" style={{ overflow: "hidden", padding: "10px 0" }}>
          <div className="dv-marquee-track">
            {[...GALLERY, ...GALLERY].map((img, i) => (
              <div key={`${img.id}-${i}`} className="dv-gcard" style={{ width: 260, height: 340, background: img.g, flexShrink: 0 }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "15px 48px", borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
            <InstaIcon size={17} strokeWidth={1.5} />
            <span>Entdecke unsere neuesten Ergebnisse auf InstaIcon</span>
          </a>
        </div>
      </section>

      {/* ── PREISE CTA ── */}
      <section style={{ padding: "80px 0", background: C.bg2 }}>
        <W>
          <div style={{ textAlign: "center" }}>
            <Label>Transparente Preise</Label>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: C.text, marginBottom: 14 }}>
              Alle Preise auf einen <em style={{ color: C.pink }}>Blick</em>
            </h2>
            <p className="dm" style={{ color: C.muted, fontSize: 15, maxWidth: 420, margin: "0 auto 32px", lineHeight: 1.75 }}>
              Von Gelmodellage bis Waxing – unsere vollständige Preisliste auf einer eigenen Seite.
            </p>
            <Link href="/preise" className="btn-pk" style={{ padding: "14px 34px", borderRadius: 999, fontSize: 13, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: C.gold }}>✦</span> Preise ansehen
            </Link>
          </div>
        </W>
      </section>

      {/* ── BEWERTUNGEN ── */}
      <section id="bewertungen" style={{ padding: "96px 0", background: C.white, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-5%", right: "-4%", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(243,198,220,0.2) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-5%", left: "-4%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(214,183,109,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <W style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ marginBottom: 48 }}>
            <Label>Kundenmeinungen</Label>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 28 }}>
              Was unsere <em style={{ color: C.pink }}>Kundinnen</em> sagen
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {[
                { Icon: Star, label: "4,7 / 5 Google · 114 Rezensionen" },
                { Icon: Award, label: "4,7 / 5 Treatwell · 327 Rezensionen" },
                { Icon: Heart, label: "Seit 2018 die erste Wahl" },
              ].map(b => (
                <div key={b.label} className="dm" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", borderRadius: 999, background: "rgba(251,234,243,0.55)", border: "1px solid rgba(223,167,198,0.22)", fontSize: 12.5, color: C.text, letterSpacing: "0.2px" }}>
                  <b.Icon size={14} strokeWidth={1.5} color={C.gold} />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dv-rev-g" style={{ textAlign: "left" }}>
            <div className="rev-feat" data-r style={{ borderRadius: 24, padding: "32px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 300 }}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: 88, lineHeight: 0.72, color: C.gold, opacity: 0.22, marginBottom: 14, userSelect: "none" }}>&ldquo;</div>
              <p className="cg" style={{ color: C.text, fontSize: "clamp(1.1rem,1.8vw,1.28rem)", lineHeight: 1.78, fontStyle: "italic", marginBottom: 28, flex: 1 }}>{featured.text}</p>
              <div>
                <div style={{ marginBottom: 14 }}><Stars n={featured.stars} /></div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Avatar initial={featured.initial} size={42} />
                  <div style={{ flex: 1 }}>
                    <div className="pf" style={{ color: C.text, fontSize: 15 }}>{featured.name}</div>
                    <div className="dm" style={{ color: C.pink, fontSize: 11, marginTop: 2 }}>{featured.category}</div>
                  </div>
                  <span className="dm" style={{ background: "rgba(214,183,109,0.1)", border: "1px solid rgba(214,183,109,0.3)", borderRadius: 999, padding: "4px 14px", color: C.gold, fontSize: 10 }}>✦ Top Bewertung</span>
                </div>
              </div>
            </div>
            <div className="dv-reg-rev">
              {otherReviews.map((r, i) => (
                <div key={r.id} data-r data-d={i % 2} className="rev-sm" style={{ borderRadius: 20, padding: "22px 20px", marginTop: i % 2 === 1 ? 22 : 0 }}>
                  <div style={{ marginBottom: 10 }}><Stars n={r.stars} /></div>
                  <p className="dm" style={{ color: C.muted, fontSize: 13.5, lineHeight: 1.78, marginBottom: 18 }}>{r.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar initial={r.initial} size={32} />
                    <div style={{ flex: 1 }}>
                      <div className="dm" style={{ color: C.text, fontSize: 13, fontWeight: 500 }}>{r.name}</div>
                    </div>
                    <span className="dm" style={{ background: "rgba(223,167,198,0.09)", border: "1px solid rgba(223,167,198,0.18)", borderRadius: 999, padding: "3px 10px", color: C.pink, fontSize: 10 }}>{r.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </W>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" style={{ padding: "96px 0", background: C.bg1, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/daca3.png')", backgroundSize: "cover", backgroundPosition: "bottom center", opacity: 0.05, filter: "blur(28px) saturate(120%)", transform: "scale(1.08) scaleX(-1)", pointerEvents: "none", zIndex: 0 }} />
        <W style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Label>Kontakt</Label>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, lineHeight: 1.2 }}>
              Bereit für dein <em style={{ color: C.pink }}>Beauty-Erlebnis?</em>
            </h2>
          </div>
          <div className="dv-contact-g">
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <ContactForm />
            </div>
            <div data-r data-d="1" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 72px rgba(185,130,165,0.16)", border: "1px solid rgba(214,183,109,0.14)" }}>
                <img src="/daca2.png" alt="Divine Beauty & Nails Studio" style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "top center", display: "block" }} />
              </div>
              <div className="dv-cbtns" style={{ display: "flex", flexWrap: "nowrap", gap: 8 }}>
                <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="btn-pk" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 12px", borderRadius: 12, fontSize: 12, fontWeight: 500, flex: 1 }}>
                  <InstaIcon size={13} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span>Termin via InstaIcon</span>
                </a>
                <a href="https://wa.me/436763633721" target="_blank" rel="noreferrer" className="btn-ol-light" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 12px", borderRadius: 12, fontSize: 12, flex: 1 }}>
                  <MessageCircle size={13} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span>Termin via WhatsApp</span>
                </a>
                <a href={`mailto:${STUDIO.email}`} className="btn-ol-light" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 12px", borderRadius: 12, fontSize: 12, flex: 1 }}>
                  <Mail size={13} strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span>{STUDIO.email}</span>
                </a>
              </div>
              <div className="dv-cinfo" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <MapPin size={15} strokeWidth={1.5} color={C.gold} />
                    <span className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Adresse</span>
                  </div>
                  <div className="dm" style={{ color: C.text, fontSize: 15, lineHeight: 1.75 }}>Klosterneuburgerstraße 98<br />1200 Wien</div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <Clock size={15} strokeWidth={1.5} color={C.gold} />
                    <span className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Öffnungszeiten</span>
                  </div>
                  {Object.entries(STUDIO.hours).map(([d, t]) => (
                    <div key={d} style={{ display: "flex", gap: 12, marginBottom: 6 }}>
                      <span className="dm" style={{ color: C.muted, fontSize: 13, minWidth: 72 }}>{d}</span>
                      <span className="dm" style={{ color: C.text, fontSize: 13 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.dark1, borderTop: "1px solid rgba(214,183,109,0.14)" }}>
        <W pad="40px 24px 0">
          <div className="dv-footer-cards">
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(214,183,109,0.18)", borderRadius: 12, padding: "28px 28px 24px" }}>
              <div className="pf" style={{ color: C.soft, fontSize: 20, marginBottom: 2 }}>Divine Beauty &amp; Nails Studio</div>
              <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="dm" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(243,198,220,0.65)", textDecoration: "none", fontSize: 12, marginBottom: 20, marginTop: 6 }}>
                <InstaIcon size={12} strokeWidth={1.5} />
                {STUDIO.instagram}
              </a>
              <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                <MapPin size={13} strokeWidth={1.5} color={C.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                <div className="dm" style={{ color: "rgba(255,255,255,0.45)", fontSize: 12.5, lineHeight: 1.7 }}>Klosterneuburger Straße 98<br />1200 Wien</div>
              </div>
              <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
                <Clock size={13} strokeWidth={1.5} color={C.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                <div className="dm" style={{ fontSize: 12.5, lineHeight: 1.8 }}>
                  {Object.entries(STUDIO.hours).map(([d, t]) => (
                    <div key={d}>
                      <span style={{ color: "rgba(255,255,255,0.3)", display: "inline-block", minWidth: 80 }}>{d}</span>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO.address)}`} target="_blank" rel="noreferrer" className="dv-mapslink dm">
                <MapPin size={12} strokeWidth={1.5} />
                Google Maps öffnen →
              </a>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(243,198,220,0.12)", borderRadius: 12, padding: "28px 28px 24px" }}>
              <div className="dm" style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 18 }}>Kontakt &amp; Rechtliches</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                <Phone size={13} strokeWidth={1.5} color={C.gold} />
                <a href={`tel:${STUDIO.phone}`} className="dm" style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{STUDIO.phone}</a>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                <Mail size={13} strokeWidth={1.5} color={C.gold} />
                <a href={`mailto:${STUDIO.email}`} className="dm" style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{STUDIO.email}</a>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
                <InstaIcon size={13} strokeWidth={1.5} color={C.gold} />
                <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="dm" style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{STUDIO.instagram}</a>
              </div>
              <div style={{ height: 1, background: "rgba(214,183,109,0.12)", marginBottom: 20 }} />
              {[{ n: "Impressum", to: "/impressum" }, { n: "Datenschutz", to: "/datenschutz" }].map(({ n, to }) => (
                <Link key={n} href={to} className="dm dv-legal-link">{n}</Link>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(214,183,109,0.1)", padding: "16px 0 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span className="dm" style={{ color: "rgba(255,255,255,0.22)", fontSize: 11.5 }}>© 2025 Divine Beauty &amp; Nails Studio · Wien</span>
            <a href="https://javera-studio.at" target="_blank" rel="noreferrer" className="dm" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.2)", textDecoration: "none", fontSize: 11, letterSpacing: "1.5px" }}>
              <img src="/assets/Javera.logo.rund.png" alt="JAVERA STUDIO" style={{ width: 14, height: 14, opacity: 0.5, borderRadius: "50%" }} />
              Webdesign by <span style={{ letterSpacing: "2px" }}>JAVERA STUDIO</span>
            </a>
          </div>
        </W>
      </footer>

      {/* ── Sticky WhatsApp CTA (mobil) ── */}
      <a href={WA_URL} target="_blank" rel="noreferrer" aria-label="Termin via WhatsApp anfragen" className="dv-sticky-wa dm" style={{ position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 60, display: "none", alignItems: "center", gap: 8, padding: "11px 20px", borderRadius: 999, background: "rgba(42,37,40,0.92)", color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: 0.2, backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(214,183,109,0.45)", boxShadow: "0 6px 24px rgba(0,0,0,0.18)" }}>
        <span style={{ color: C.gold }}>✦</span>
        <span>Termin anfragen</span>
      </a>
    </div>
  );
}
