import logo from "@/assets/logo.png";
import studioHero from "@/assets/studio-hero.jpg";
import { useState, useEffect } from "react";

// ══════════════════════════════════════════════════════════════════════════════
// KONFIGURATION — Inhalte hier anpassen
// ══════════════════════════════════════════════════════════════════════════════

const STUDIO = {
  name: "Divine Beauty & Nails Studio",
  phone: "+43 676 3633721",
  instagram: "@divine.beauty.nails.studio",
  instagramUrl: "https://www.instagram.com/divine.beauty.nails.studio",
  address: "Klosterneuburgerstraße 98, 1200 Wien",
  email: "divine.beauty.nails@gmail.com",
  hours: {
    "Mo – Fr": "09:00 – 19:00 Uhr",
    Samstag: "09:00 – 17:00 Uhr",
    Sonntag: "Auf Anfrage",
  },
};

const WA_URL = "https://wa.me/4367636333721?text=" + encodeURIComponent("Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen.");

const SERVICES = [
  {
    icon: "💅",
    img: "/Gelmodellage.jpg",
    title: "Gelmodellage",
    desc: "Individuelle Nagelmodellage mit hochwertigem Gel – von klassisch-elegant bis kreativ-extravagant. Langanhaltend und auf Wunsch mit feinstem Nail-Art.",
  },
  {
    icon: "✨",
    img: "/Nachfuellung.jpg",
    title: "Nachfüllung",
    desc: "Professionelle Auffrischung deiner bestehenden Gelmodellage. In kurzer Zeit wieder perfekt gepflegt und wunderschön.",
  },
  {
    icon: "🌸",
    img: "/Shellac.jpg",
    title: "Shellac",
    desc: "Der Klassiker mit Hochglanz-Finish und bis zu drei Wochen Haltbarkeit – ohne Abstumpfung, ohne Chips.",
  },
  {
    icon: "🦶",
    img: "/Pedikuere.jpg",
    title: "Pediküre",
    desc: "Verwöhnende Fußpflege mit Peeling, intensiver Pflege und eleganter Lackierung – für gepflegte, schöne Füße.",
  },
  {
    icon: "🤍",
    img: "/Manikuere.jpg",
    title: "Maniküre",
    desc: "Klassische oder moderne Handpflege: Nagelformung, Nagelhautpflege und Lackierung nach deinem Wunsch.",
  },
  {
    icon: "👁️",
    img: "/Wimpernlifting.jpg",
    title: "Wimpernlifting",
    desc: "Natürlich geschwungene Wimpern durch professionelles Lifting – kein Extensions, nur dein natürlicher Look, perfektioniert.",
  },
  {
    icon: "🌿",
    img: "/Waxing.jpg",
    title: "Waxing",
    desc: "Sanfte, präzise Haarentfernung mit Warmwachs für dauerhaft glatte Haut – schonend für Gesicht und Körper.",
  },
  {
    icon: "🧖",
    img: "/Gesichtsbehandlung.jpg",
    title: "Gesichtsbehandlung",
    desc: "Individuelle Pflegebehandlungen für strahlende, gepflegte Haut – genau auf deinen Hauttyp abgestimmt.",
  },
  {
    icon: "💄",
    img: "/Make-up.jpg",
    title: "Make-up",
    desc: "Professionelles Make-up für jeden Anlass – natürlich, elegant oder glamourös. Dein perfekter Look für unvergessliche Momente.",
  },
];

const PRICES = [
  {
    category: "Gelmodellage",
    items: [
      { name: "Neues Set / Camouflage", price: "50 €" },
      { name: "Neues Set inkl. Farbe", price: "50 €" },
      { name: "Neues Set (mit Gel)", price: "58 €" },
      { name: "French / Babyboomer", price: "auf Anfrage" },
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
      { name: "Maniküre", price: "25 €" },
      { name: "Lackieren", price: "8 €" },
      { name: "Verwöhnpflege", price: "13 €" },
      { name: "Maniküre inkl. Shellac", price: "30 €" },
    ],
  },
  { category: "Wimpernlifting", items: [{ name: "Inkl. Farben & Keratin", price: "55 €" }] },
  {
    category: "Gesichtsbehandlung",
    items: [
      { name: "Skinboom Hydra Glow Pen", price: "80 €" },
      { name: "Peeling inkl. Hydra Global Mask", price: "45 €" },
    ],
  },
  { category: "Make-up", items: [{ name: "Make-up", price: "ab 51 €" }] },
  {
    category: "Waxing",
    items: [
      { name: "Gesicht komplett", price: "25 €" },
      { name: "Oberlippe", price: "10 €" },
      { name: "Arme komplett (Schultern bis Hände)", price: "35 €" },
      { name: "Beine komplett (Oberschenkel–Unterschenkel)", price: "49 €" },
      { name: "Unterschenkel (Knie bis Knöchel)", price: "29 €" },
      { name: "Waxing komplett (Beine, Arme, Achsel, Bikini)", price: "89 €" },
      { name: "Rücken", price: "35 €" },
      { name: "Rücken komplett (Schultern bis Taille)", price: "45 €" },
    ],
  },
];

// ── Galerie: Soft Rosé + Champagne Gold Verläufe ──────────────────────────────
const GALLERY = [
  { id: 1, label: "Gelmodellage", src: null, g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 2, label: "Shellac", src: null, g: "linear-gradient(145deg,#FFF7FA,#F3C6DC)" },
  { id: 3, label: "Pediküre", src: null, g: "linear-gradient(145deg,#FBEAF3,#e8d4b0 60%,#D6B76D)" },
  { id: 4, label: "Wimpernlifting", src: null, g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 5, label: "Waxing", src: null, g: "linear-gradient(145deg,#FBEAF3,#d4b0c8)" },
  { id: 6, label: "Make-up", src: null, g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 7, label: "Maniküre", src: null, g: "linear-gradient(145deg,#FBEAF3,#DFA7C6)" },
  { id: 8, label: "Gesichtsbehandlung", src: null, g: "linear-gradient(145deg,#FFF7FA,#D6B76D 40%,#DFA7C6)" },
];

const REVIEWS = [
  {
    id: 1,
    name: "Sophie M.",
    stars: 5,
    initial: "S",
    featured: true,
    category: "Gelmodellage",
    text: "Ich bin absolut begeistert! Meine Nägel sehen traumhaft aus und halten schon seit Wochen perfekt. Das Team ist so herzlich und die Atmosphäre des Studios einfach wunderschön – ich fühle mich hier wie in einer anderen Welt.",
  },
  {
    id: 2,
    name: "Laura K.",
    stars: 5,
    initial: "L",
    featured: false,
    category: "Shellac",
    text: "Der Shellac hält jetzt schon über drei Wochen und sieht noch immer frisch und makellos aus. Komme definitiv wieder!",
  },
  {
    id: 3,
    name: "Anna R.",
    stars: 5,
    initial: "A",
    featured: false,
    category: "Pediküre",
    text: "Die Pediküre war ein echter Verwöhnmoment – so entspannend und das Ergebnis einfach makellos. Absolute Empfehlung!",
  },
  {
    id: 4,
    name: "Julia S.",
    stars: 5,
    initial: "J",
    featured: false,
    category: "Waxing",
    text: "Das Waxing war viel angenehmer als erwartet. Sehr professionell und einfühlsam. Das Ergebnis spricht für sich – gerne wieder!",
  },
  {
    id: 5,
    name: "Mia B.",
    stars: 5,
    initial: "M",
    featured: false,
    category: "Wimpernlifting",
    text: "Das Wimpernlifting hat mein Gesicht komplett verändert – auf die beste Art! Supersaubere Arbeit, sehr zu empfehlen.",
  },
  {
    id: 6,
    name: "Elena V.",
    stars: 5,
    initial: "E",
    featured: false,
    category: "Maniküre",
    text: "Stilvolles Studio, herzliches Team und top Qualität. Ich fühle mich hier jedes Mal wie eine echte Königin. Danke!",
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// CSS — Soft Rosé + Champagne Gold
// ══════════════════════════════════════════════════════════════════════════════
const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Great+Vibes&display=swap");

html { scroll-behavior: smooth; }
body { overflow-x: hidden; background: #FFF7F2; }
*, *::before, *::after { box-sizing: border-box; }

.pf { font-family: 'Playfair Display', Georgia, serif; }
.cg { font-family: 'Cormorant Garamond', Georgia, serif; }
.dm { font-family: 'DM Sans', system-ui, sans-serif; }
.gv { font-family: 'Great Vibes', 'Playfair Display', cursive; }

@keyframes dv-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes dv-float {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-12px); }
}
@keyframes dv-shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
@keyframes dv-fadeup {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes dv-softglow {
  0%,100% { opacity: 0.45; }
  50%      { opacity: 0.75; }
}

.dv-marquee-track {
  display: flex; width: max-content; gap: 18px;
  animation: dv-marquee 42s linear infinite;
}
.dv-marquee-wrap:hover .dv-marquee-track { animation-play-state: paused; }
.dv-float   { animation: dv-float 6s ease-in-out infinite; }
.dv-fadeup  { animation: dv-fadeup .9s ease both; }
.dv-softglow{ animation: dv-softglow 5s ease-in-out infinite; border-radius: 50%; }

/* ── Champagne Gold Shimmer Text ──────────────────────────────────────────── */
.dv-gold {
  background: linear-gradient(90deg,#D6B76D,#f0d494,#D6B76D,#e8ca7a,#D6B76D);
  background-size: 250% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: dv-shimmer 3.5s linear infinite;
}

/* ── Luxury Cards — hell, weiß, goldene Hover-Border ─────────────────────── */
.lux-card {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(223,167,198,0.12);
  box-shadow: 0 4px 24px rgba(185,130,165,0.07);
  transition: transform .4s cubic-bezier(.4,0,.2,1),
              box-shadow .4s cubic-bezier(.4,0,.2,1),
              border-color .3s;
}
.lux-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 22px 52px rgba(185,130,165,0.12);
  border-color: rgba(214,183,109,0.22);
}

/* ── Featured Review ─────────────────────────────────────────────────────── */
.rev-feat {
  background: linear-gradient(135deg,#FFFFFF 0%,#FFF7FA 60%,#FBEAF3 100%);
  border: 1px solid rgba(214,183,109,0.16);
  box-shadow: 0 12px 48px rgba(185,130,165,0.09);
  transition: transform .4s, box-shadow .4s;
}
.rev-feat:hover { transform: translateY(-5px); box-shadow: 0 28px 68px rgba(185,130,165,0.15); }

/* ── Small Reviews ───────────────────────────────────────────────────────── */
.rev-sm {
  background: #FFFFFF;
  border: 1px solid rgba(223,167,198,0.11);
  box-shadow: 0 4px 18px rgba(185,130,165,0.06);
  transition: all .35s;
}
.rev-sm:hover {
  border-color: rgba(214,183,109,0.2);
  box-shadow: 0 16px 44px rgba(185,130,165,0.11);
  transform: translateY(-5px);
}

/* ── Primary Button — Anthrazit mit Gold-Akzent ──────────────────────────── */
.btn-pk {
  background: #2A2528;
  box-shadow: 0 4px 18px rgba(42,37,40,0.22);
  border-bottom: 1.5px solid rgba(214,183,109,0.55);
  color: #fff; border-top: none; border-left: none; border-right: none;
  cursor: pointer;
  transition: box-shadow .3s, transform .3s, background .3s, border-color .3s;
  font-family: 'DM Sans', sans-serif;
}
.btn-pk:hover {
  background: #1F1B1D;
  box-shadow: 0 12px 34px rgba(42,37,40,0.32), 0 0 0 1px rgba(214,183,109,0.5);
  border-bottom-color: #D6B76D;
  transform: translateY(-2px);
}

/* ── Outline Button (auf dunklem Footer) ─────────────────────────────────── */
.btn-ol-dark {
  border: 1.5px solid rgba(255,255,255,0.35);
  color: rgba(255,255,255,0.85); background: transparent;
  cursor: pointer; transition: all .3s;
  font-family: 'DM Sans', sans-serif;
}
.btn-ol-dark:hover {
  border-color: #D6B76D;
  color: #D6B76D;
  background: rgba(214,183,109,0.08);
  transform: translateY(-2px);
}

/* ── Outline Button (hell, mit Dusty-Rose-Border) ────────────────────────── */
.btn-ol-light {
  border: 1.5px solid rgba(217,143,168,0.55);
  color: #2A2528; background: rgba(255,255,255,0.6);
  cursor: pointer; transition: all .3s;
  font-family: 'DM Sans', sans-serif;
}
.btn-ol-light:hover {
  border-color: #D6B76D;
  color: #2A2528;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 8px 24px rgba(42,37,40,0.08);
  transform: translateY(-2px);
}

/* ── Nav Links — Anthrazit auf hell, Dusty Rose Hover ────────────────────── */
.dv-nav-link {
  position: relative; color: #3A3034;
  font-family: 'DM Sans', sans-serif; font-size: 14px;
  letter-spacing: .3px; background: none; border: none; cursor: pointer;
  transition: color .3s;
}
.dv-nav-link::after {
  content: ''; position: absolute; bottom: -5px; left: 0;
  width: 0; height: 1.5px;
  background: linear-gradient(90deg,#D98FA8,#D6B76D);
  transition: width .3s;
}
.dv-nav-link:hover { color: #D98FA8; }
.dv-nav-link:hover::after { width: 100%; }

/* ── Price Rows ──────────────────────────────────────────────────────────── */
.dv-prow {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 0; border-bottom: 1px solid rgba(223,167,198,0.09);
  transition: all .2s;
}
.dv-prow:hover {
  background: rgba(214,183,109,0.05);
  border-radius: 8px;
  padding-left: 8px;
}
.dv-prow:hover .dv-pv { color: #D6B76D !important; }

/* ── Gallery Cards ───────────────────────────────────────────────────────── */
.dv-gcard {
  flex-shrink: 0; border-radius: 20px; overflow: hidden;
  cursor: pointer; position: relative;
  border: 1px solid rgba(214,183,109,0.14);
  transition: transform .35s, box-shadow .35s;
}
.dv-gcard:hover { transform: scale(1.04); box-shadow: 0 18px 48px rgba(185,130,165,0.18); }

/* ── Footer Links ────────────────────────────────────────────────────────── */
.dv-flink {
  background: none; border: none; cursor: pointer; display: block;
  font-family: 'DM Sans', sans-serif; text-align: left;
  color: rgba(255,255,255,0.45); font-size: 14px; padding: 4px 0;
  transition: color .2s;
}
.dv-flink:hover { color: #F3C6DC; }

.dv-lrow {
  display: flex; flex-wrap: wrap; gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

/* ── Scrollbar ───────────────────────────────────────────────────────────── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #FFF7F2; }
::-webkit-scrollbar-thumb {
  background: linear-gradient(#DFA7C6,#D6B76D);
  border-radius: 2px;
}

/* ── Layout Grids ────────────────────────────────────────────────────────── */
.dv-hero-g    { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.dv-about-g   { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.dv-contact-g { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; }
.dv-footer-g  { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 60px; margin-bottom: 56px; }
.dv-rev-g     { display: grid; grid-template-columns: 5fr 7fr; gap: 24px; }
.dv-reg-rev   { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.dv-svc-g     { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
@media (max-width: 768px) { .dv-svc-g { grid-template-columns: 1fr !important; gap: 20px !important; max-width: 360px; margin: 0 auto; text-align: center; } .dv-svc-g .lux-card { text-align: center; } }
@media (max-width: 1024px) { .dv-feat-g { grid-template-columns: repeat(2,1fr) !important; } }
@media (max-width: 560px)  { .dv-feat-g { grid-template-columns: 1fr !important; max-width: 360px; margin: 0 auto; } }

@media (max-width: 900px) {
  .dv-rev-g   { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .dv-hero-g, .dv-about-g, .dv-contact-g, .dv-footer-g { grid-template-columns: 1fr !important; gap: 40px !important; }
  .dv-reg-rev { grid-template-columns: 1fr; }
  .dv-hero-img { display: none !important; }
  .dv-nd { display: none !important; }
  .dv-nc { display: none !important; }
  .dv-nb { display: flex !important; }
  .dv-sticky-wa { display: inline-flex !important; }

  /* Kontakt-Section mobil edler */
  #kontakt { padding: 64px 0 120px !important; }
  #kontakt .btn-pk, #kontakt .btn-ol-light {
    width: 100% !important;
    justify-content: center !important;
    flex-wrap: wrap;
    text-align: center;
    padding: 14px 18px !important;
  }
  #kontakt .btn-pk > span:last-child { width: 100%; opacity: 0.7 !important; font-size: 12px; margin-top: 2px; }
  #kontakt .dv-kcards { grid-template-columns: 1fr !important; gap: 14px !important; }
  #kontakt .dv-kcards .dm { font-size: 14px !important; }
  #kontakt .dv-kcards .dv-hours-row { display: grid !important; grid-template-columns: 90px 1fr !important; gap: 8px; font-size: 13px !important; }
  #kontakt .dv-map { min-height: 240px !important; }
  body { padding-bottom: 80px; }
}
@media (min-width: 769px) {
  .dv-nd { display: flex !important; }
  .dv-nc { display: block !important; }
  .dv-nb { display: none !important; }
}

/* ===== Luxury floating service tags ===== */
.lux-tags {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 6px 0;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
}
.lux-tags-track {
  display: flex;
  gap: 14px;
  width: max-content;
  will-change: transform;
  animation: luxScroll linear infinite;
}
.lux-tags-row-a .lux-tags-track { animation-duration: 52s; animation-direction: normal; }
.lux-tags-row-b .lux-tags-track { animation-duration: 68s; animation-direction: reverse; }
.lux-tags-row-c .lux-tags-track { animation-duration: 58s; animation-direction: normal; }

@keyframes luxScroll {
  from { transform: translate3d(0,0,0); }
  to   { transform: translate3d(-50%,0,0); }
}

.lux-tag {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 22px;
  border-radius: 999px;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 13.5px;
  letter-spacing: 0.07em;
  color: #4a3f44;
  background: rgba(255, 248, 242, 0.55);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid rgba(214, 183, 109, 0.18);
  box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 6px 22px -14px rgba(58,48,52,0.18);
  transition: transform .5s cubic-bezier(.2,.7,.2,1), background .4s ease, box-shadow .4s ease;
  white-space: nowrap;
}
.lux-tag .lux-dot {
  width: 4px; height: 4px; border-radius: 999px;
  background: #D6B76D;
  box-shadow: 0 0 8px rgba(214,183,109,0.55);
}
.lux-tag.is-lg { font-size: 15px; padding: 12px 26px; letter-spacing: 0.09em; }
.lux-tag.is-sm { font-size: 12px; padding: 8px 18px; opacity: 0.88; }
.lux-tag.is-nude  { background: rgba(247, 237, 231, 0.55); }
.lux-tag.is-cham  { background: rgba(243, 230, 210, 0.5); }
.lux-tag.is-blush { background: rgba(243, 198, 220, 0.32); }
.lux-tag.is-ivory { background: rgba(255, 255, 255, 0.45); }

.lux-tag:hover {
  transform: translateY(-1px) scale(1.04);
  background: rgba(255, 251, 246, 0.85);
  box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset,
              0 10px 30px -10px rgba(214,183,109,0.35),
              0 0 0 1px rgba(214,183,109,0.28);
}

.lux-tags:hover .lux-tags-track { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .lux-tags-track { animation: none; }
}
`;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let el = document.getElementById("dv-css");
    if (!el) {
      el = document.createElement("style");
      el.id = "dv-css";
      document.head.appendChild(el);
    }
    el.textContent = CSS;
    return () => {
      const s = document.getElementById("dv-css");
      if (s) s.remove();
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ── Farbpalette: Ivory + Soft Cream + Dusty Rose + Anthrazit + Gold ──────
  const C = {
    bg1: "#FFF7F2", // Ivory
    bg2: "#F7EDE7", // Soft Cream
    white: "#FFFFFF",
    dark1: "#2A2528", // Anthrazit (Footer, CTAs)
    dark2: "#1F1B1D", // Anthrazit dunkler (Datenschutz)
    pink: "#D98FA8", // Dusty Rose
    soft: "#E9B8C8", // Blush Rosé
    softer: "#F3C6DC", // Soft Pink
    gold: "#D6B76D", // Champagne Gold
    text: "#3A3034", // Soft Text
    muted: "#7D6B70", // Muted Text
  };

  // ── Kleine Hilfkomponenten ────────────────────────────────────────────────

  const Stars = ({ n = 5 }) => (
    <span style={{ color: C.gold, letterSpacing: 2, fontSize: 14 }}>
      {"★".repeat(n)}
      <span style={{ opacity: 0.22 }}>{"★".repeat(5 - n)}</span>
    </span>
  );

  const Avatar = ({ initial, size = 42 }) => (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        background: "linear-gradient(135deg,#F3C6DC,#DFA7C6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(223,167,198,0.28)",
      }}
    >
      <span className="pf" style={{ color: "#fff", fontSize: size * 0.38 }}>
        {initial}
      </span>
    </div>
  );

  // Divider mit mehr Gold
  const Divider = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 68 }}>
      <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
      <span style={{ color: C.gold, fontSize: 11, opacity: 0.9, letterSpacing: 6 }}>✦ ✦ ✦</span>
      <div style={{ width: 60, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
    </div>
  );

  const Label = ({ children }) => (
    <div
      className="dm"
      style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}
    >
      {children}
    </div>
  );

  const W = ({ children, pad = "0 24px", style = {} }: any) => (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: pad, ...style }}>{children}</div>
  );

  // Kategorie-Heading in Preiskarten mit Gold-Underline
  const PriceHeading = ({ children }) => (
    <h3
      className="pf"
      style={{
        color: C.text,
        fontSize: 17,
        marginBottom: 16,
        paddingBottom: 12,
        borderBottom: "1px solid rgba(214,183,109,0.22)",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ color: C.gold, fontSize: 10 }}>✦</span>
      {children}
    </h3>
  );

  const NAV: { l: string; id: string }[] = [
    { l: "Home", id: "home" },
    { l: "Über uns", id: "ueber" },
    { l: "Leistungen", id: "leistungen" },
    { l: "Galerie", id: "galerie" },
    { l: "Kontakt", id: "kontakt" },
  ];

  return (
    <div className="dm" style={{ background: C.bg1, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>
      {/* ── NAVIGATION ────────────────────────────────────────────────────── */}
      <nav
        style={{
          background: "rgba(255,247,242,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(42,37,40,0.08)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "17px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div onClick={() => go("home")} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <img
  src={logo}
  alt="Divine Beauty Logo"
  style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover" }}
/>
            <div>
              <div className="pf" style={{ color: C.text, fontSize: 16, fontWeight: 600, lineHeight: 1.1 }}>
                Divine Beauty
              </div>
              <div
                className="dm"
                style={{
                  color: C.muted,
                  fontSize: 9,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                }}
              >
                &amp; Nails Studio
              </div>
            </div>
          </div>
          <div className="dv-nd" style={{ gap: 32 }}>
            {NAV.map((n) => (
              <button key={n.id} className="dv-nav-link" onClick={() => go(n.id)}>
                {n.l}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-pk dv-nc"
              style={{ padding: "10px 22px", borderRadius: 999, fontSize: 13, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <span style={{ color: C.gold, marginRight: 6 }}>✦</span> Termin anfragen
            </a>
            <button
              className="dv-nb"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: `1px solid ${C.dark1}`,
                borderRadius: 8,
                padding: "8px 12px",
                cursor: "pointer",
                color: C.dark1,
                fontSize: 18,
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            style={{
              background: "rgba(255,247,242,0.98)",
              borderTop: "1px solid rgba(42,37,40,0.06)",
              padding: "18px 24px 26px",
            }}
          >
            {NAV.map((n) => (
              <button
                key={n.id}
                className="dm"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: C.text,
                  fontSize: 16,
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(42,37,40,0.06)",
                }}
                onClick={() => go(n.id)}
              >
                {n.l}
              </button>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-pk dm"
              style={{ width: "100%", padding: 14, borderRadius: 12, marginTop: 20, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{ color: C.gold, marginRight: 6 }}>✦</span> Termin anfragen
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO — hell, Ivory + Soft Cream + Rosé ───────────────────────── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          paddingTop: 80,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg,#FFF7F2 0%,#F7EDE7 45%,#FBEAF3 100%)",
        }}
      >
        {/* Soft Glow Blobs */}
        <div
          className="dv-softglow"
          style={{
            position: "absolute",
            top: "-12%",
            right: "-6%",
            width: 520,
            height: 520,
            pointerEvents: "none",
            background: "radial-gradient(circle,rgba(233,184,200,0.45) 0%,transparent 65%)",
          }}
        />
        <div
          className="dv-softglow"
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-4%",
            width: 420,
            height: 420,
            pointerEvents: "none",
            background: "radial-gradient(circle,rgba(214,183,109,0.22) 0%,transparent 65%)",
            animationDelay: "2.5s",
          }}
        />
        {/* Dekorative Gold-Sterne */}
        <div
          style={{
            position: "absolute",
            top: "18%",
            right: "10%",
            color: C.gold,
            fontSize: 9,
            opacity: 0.55,
            letterSpacing: 18,
          }}
        >
          ✦ ✦ ✦
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "22%",
            left: "7%",
            color: C.pink,
            fontSize: 7,
            opacity: 0.35,
            letterSpacing: 14,
          }}
        >
          · · · · ·
        </div>
        <W pad="80px 24px" style={{ width: "100%" }}>
          <div className="dv-hero-g">
            <div className="dv-fadeup">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(217,143,168,0.28)",
                  borderRadius: 999,
                  padding: "8px 18px",
                  marginBottom: 30,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.pink }} />
                <span
                  className="dm"
                  style={{ color: C.dark1, fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase" }}
                >
                  Nagelstudio &amp; Beauty · Wien
                </span>
              </div>
              <h1
                className="pf"
                style={{ fontSize: "clamp(2.6rem,5vw,4rem)", lineHeight: 1.15, color: C.dark1, margin: "0 0 18px" }}
              >
                Die Kunst der <em style={{ color: C.pink, fontWeight: 400 }}>Schönheit</em>
                <br />
                in deinen <span className="dv-gold">Händen.</span>
              </h1>
              <p
                className="pf"
                style={{
                  fontStyle: "italic",
                  color: C.pink,
                  fontSize: "clamp(1.05rem,1.6vw,1.4rem)",
                  margin: "0 0 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ flex: "0 0 28px", height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
                Schöne Nägel sind kein Zufall.
                <span style={{ color: C.gold, fontSize: 12 }}>✦</span>
              </p>
              <p
                className="dm"
                style={{
                  color: C.muted,
                  fontSize: 17,
                  lineHeight: 1.88,
                  maxWidth: 480,
                  marginBottom: 38,
                }}
              >
                Nageldesign, Waxing, Wimpernlifting, Pediküre &amp; Beauty-Behandlungen – in einem stilvollen Studio für
                Frauen, die das Beste verdienen.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 38 }}>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pk"
                  style={{ padding: "14px 32px", borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
                >
                  <span style={{ color: C.gold, marginRight: 6 }}>✦</span> Termin anfragen
                </a>
                <button
                  className="btn-ol-light"
                  style={{ padding: "14px 28px", borderRadius: 999, fontSize: 15 }}
                  onClick={() => go("leistungen")}
                >
                  Leistungen ansehen →
                </button>
              </div>
              <div style={{ marginLeft: -8, marginRight: -8 }}>
                {(() => {
                  const SVC = [
                    { l: "Nageldesign", s: "lg" },
                    { l: "Waxing" },
                    { l: "Pediküre", s: "sm", v: "nude" },
                    { l: "Make-up", v: "cham" },
                    { l: "Wimpernlifting", s: "lg", v: "ivory" },
                    { l: "PMU", s: "sm" },
                    { l: "Laser", v: "blush" },
                    { l: "Facials", v: "nude" },
                    { l: "Brows", s: "sm" },
                    { l: "Lashes", v: "cham" },
                    { l: "Skin Treatments", s: "lg", v: "ivory" },
                    { l: "Academy", v: "blush" },
                  ];
                  const rows = [
                    { cls: "lux-tags-row-a", items: [0, 3, 6, 9, 1, 4, 7, 10] },
                    { cls: "lux-tags-row-b", items: [2, 5, 8, 11, 0, 4, 9, 6] },
                  ];
                  return rows.map((row, ri) => (
                    <div key={ri} className={`lux-tags ${row.cls}`} style={{ marginTop: ri === 0 ? 0 : 10 }}>
                      <div className="lux-tags-track">
                        {[0, 1].map((dup) =>
                          row.items.map((i, idx) => {
                            const t = SVC[i];
                            const cls = ["lux-tag", t.s ? `is-${t.s}` : "", t.v ? `is-${t.v}` : ""].join(" ");
                            return (
                              <span key={`${dup}-${idx}`} className={cls} aria-hidden={dup === 1 ? true : undefined}>
                                <span className="lux-dot" />
                                {t.l}
                              </span>
                            );
                          })
                        )}
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
            <div className="dv-hero-img" style={{ position: "relative" }}>
              <div
                style={{
                  height: 580,
                  borderRadius: 28,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(214,183,109,0.28)",
                  boxShadow: "0 30px 70px rgba(185,130,165,0.22)",
                }}
              >
                <img
                  src={studioHero}
                  alt="Divine Beauty & Nails Studio Interieur"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,rgba(255,247,242,0) 55%,rgba(255,247,242,0.25) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
              {/* Floating Info-Card */}
              <div
                className="dv-float"
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -28,
                  background: "rgba(255,255,255,0.98)",
                  borderRadius: 20,
                  padding: "18px 24px",
                  boxShadow: "0 20px 50px rgba(185,130,165,0.18)",
                  border: "1px solid rgba(214,183,109,0.22)",
                }}
              >
                <div
                  className="dm"
                  style={{
                    color: C.gold,
                    fontSize: 10,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Premium Studio
                </div>
                <div className="pf" style={{ color: C.text, fontSize: 17 }}>
                  Divine Beauty
                </div>
                <div className="dm" style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>
                  1200 Wien
                </div>
              </div>
              {/* Gold Dot */}
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  right: -12,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#D6B76D,#f0d090)",
                  boxShadow: "0 0 16px rgba(214,183,109,0.65)",
                }}
              />
            </div>
          </div>
        </W>
      </section>

      {/* ── FEATURED SERVICE CARDS — direkt unter Hero (wie Referenz) ───── */}
      <section style={{ background: C.bg1, padding: "72px 0 32px" }}>
        <W>
          <div
            className="dv-feat-g"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 22,
            }}
          >
            {[
              { title: "Pediküre", img: "/Pedikuere.jpg", desc: "Gepflegte Füße, glatte Haut und perfekte Nägel." },
              { title: "Wimpernlifting", img: "/Wimpernlifting.jpg", desc: "Schöner Schwung, mehr Länge und ein wacher Blick." },
              { title: "Waxing", img: "/Waxing.jpg", desc: "Sanfte Haarentfernung für seidig glatte Haut." },
              { title: "Nägel", img: "/Gelmodellage.jpg", desc: "Maniküre, Gel-Nägel, Acrylnägel, Nail-Art & mehr." },
            ].map((s) => (
              <div
                key={s.title}
                className="lux-card"
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: C.white,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg,rgba(255,247,242,0) 55%,rgba(255,247,242,0.35) 100%)",
                    }}
                  />
                </div>
                <div style={{ padding: "20px 22px 24px", textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ width: 18, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
                    <span style={{ color: C.gold, fontSize: 9 }}>✦</span>
                    <span style={{ width: 18, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
                  </div>
                  <h3
                    className="pf"
                    style={{ color: C.text, fontSize: 18, margin: "0 0 6px", letterSpacing: "1.5px", textTransform: "uppercase" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="dm"
                    style={{ color: C.muted, fontSize: 13, lineHeight: 1.6, margin: "0 0 16px", minHeight: 42 }}
                  >
                    {s.desc}
                  </p>
                  <button
                    className="btn-pk"
                    onClick={() => go("leistungen")}
                    style={{
                      padding: "10px 22px",
                      borderRadius: 999,
                      fontSize: 12,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            ))}
          </div>
        </W>
      </section>


      {/* ── ZITAT-BAND — Deine Auszeit ──────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          padding: "80px 24px",
          background: "linear-gradient(135deg,#2A2528 0%,#3a3033 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 20% 50%,rgba(214,183,109,0.12) 0%,transparent 55%),radial-gradient(ellipse at 80% 50%,rgba(217,143,168,0.14) 0%,transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 22,
              color: C.gold,
              opacity: 0.85,
            }}
          >
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
            <span style={{ fontSize: 12, letterSpacing: "3px" }}>✦ ✦ ✦</span>
            <span style={{ width: 40, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
          </div>
          <p
            className="pf"
            style={{
              fontStyle: "italic",
              fontSize: "clamp(1.6rem,3.6vw,2.8rem)",
              lineHeight: 1.4,
              color: "#FFF7F2",
              margin: 0,
              fontWeight: 300,
            }}
          >
            Deine <span style={{ color: "#E9B8C8" }}>Auszeit</span>.
            Deine <span className="dv-gold">Schönheit</span>.
            Dein <span style={{ color: "#E9B8C8" }}>Moment</span>.
          </p>
          <p
            className="dm"
            style={{
              marginTop: 18,
              color: "rgba(255,247,242,0.55)",
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Divine Beauty &amp; Nails Studio
          </p>
        </div>
      </section>

      {/* ── LEISTUNGEN — hell ─────────────────────────────────────────────── */}
      <section id="leistungen" style={{ padding: "108px 0", background: C.bg1 }}>
        <W>
          <Divider />
          <Label>Was wir für dich tun</Label>
          <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 14 }}>
            Unsere <em style={{ color: C.pink }}>Leistungen</em>
          </h2>
          <p className="dm" style={{ color: C.muted, fontSize: 16, maxWidth: 480, lineHeight: 1.8, marginBottom: 60 }}>
            Von Nageldesign bis Gesichtsbehandlung – professionell, präzise, mit Liebe fürs Detail.
          </p>
          <div className="dv-svc-g">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="lux-card"
                style={{ padding: "28px 26px", borderRadius: 22, background: C.white }}
              >
              {s.img && (
                <img src={s.img} alt={s.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 14, marginBottom: 14 }} />
              )}
                <h3 className="pf" style={{ color: C.text, fontSize: 19, marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p className="dm" style={{ color: C.muted, fontSize: 14, lineHeight: 1.78 }}>
                  {s.desc}
                </p>
                <div className="dm" style={{ marginTop: 20, color: C.gold, fontSize: 13 }}>
                  Mehr erfahren →
                </div>
              </div>
            ))}
          </div>
        </W>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── GALERIE — hell, Ivory ─────────────────────────────────────────── */}
      <section id="galerie" style={{ padding: "108px 0 80px", background: C.white, overflow: "hidden" }}>
        <W style={{ marginBottom: 52 }}>
          <Divider />
          <Label>Portfolio</Label>
          <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 14 }}>
            Unsere <em style={{ color: C.pink }}>Galerie</em>
          </h2>
          <p className="dm" style={{ color: C.muted, fontSize: 16, maxWidth: 440, lineHeight: 1.8 }}>
            Einblicke in unsere Arbeit – jedes Ergebnis ein kleines Kunstwerk.
          </p>
        </W>
        <div className="dv-marquee-wrap" style={{ overflow: "hidden", padding: "10px 0" }}>
          <div className="dv-marquee-track">
            {[...GALLERY, ...GALLERY].map((img, i) => (
              <div
                key={`${img.id}-${i}`}
                className="dv-gcard"
                style={{ width: 260, height: 340, background: img.g, flexShrink: 0 }}
              >
                {img.src ? (
                  <img src={img.src} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: 38 }}>📸</span>
                    <span className="dm" style={{ color: "rgba(43,32,39,0.4)", fontSize: 11, letterSpacing: "1px" }}>
                      {img.label}
                    </span>
                  </div>
                )}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 16px 14px",
                    background: "linear-gradient(transparent,rgba(43,32,39,0.38))",
                  }}
                >
                  <span className="dm" style={{ color: "#fff", fontSize: 13 }}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── ÜBER UNS — Rosé hell ──────────────────────────────────────────── */}
      <section
        id="über-uns"
        style={{ padding: "108px 0", background: C.bg2, position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-8%",
            right: "-6%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(243,198,220,0.3) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <W>
          <div className="dv-about-g">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  height: 500,
                  borderRadius: 28,
                  background: "linear-gradient(148deg,#FBEAF3,#F3C6DC 55%,rgba(223,167,198,0.5) 100%)",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(214,183,109,0.16)",
                  boxShadow: "0 20px 60px rgba(185,130,165,0.12)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 72 }}>🌸</span>
                  <span
                    className="dm"
                    style={{
                      color: "rgba(43,32,39,0.35)",
                      fontSize: 11,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    Studiofoto einfügen
                  </span>
                </div>
              </div>
              <div
                className="dv-float"
                style={{
                  position: "absolute",
                  top: -20,
                  right: -22,
                  background: C.white,
                  borderRadius: 18,
                  padding: "16px 20px",
                  boxShadow: "0 14px 36px rgba(185,130,165,0.12)",
                  border: "1px solid rgba(214,183,109,0.18)",
                }}
              >
                <div style={{ color: C.gold, fontSize: 20, marginBottom: 6 }}>✦</div>
                <div className="pf" style={{ color: C.text, fontSize: 15 }}>
                  Wohlfühlen ist Pflicht
                </div>
                <div className="dm" style={{ color: C.muted, fontSize: 11, marginTop: 2 }}>
                  Divine Beauty Studio
                </div>
              </div>
            </div>
            <div>
              <Divider />
              <Label>Über uns</Label>
              <h2
                className="pf"
                style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text, lineHeight: 1.2, marginBottom: 22 }}
              >
                Beauty mit <em style={{ color: C.pink }}>Leidenschaft</em> &amp; Präzision
              </h2>
              <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.88, marginBottom: 20 }}>
                Bei <strong style={{ color: C.text }}>Divine Beauty &amp; Nails Studio</strong> steht dein Wohlgefühl im
                Mittelpunkt. In stilvoller, entspannter Atmosphäre entstehen individuelle Looks – von gepflegten Nägeln
                über Beauty-Behandlungen bis hin zu Waxing und Make-up.
              </p>
              <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.88, marginBottom: 36 }}>
                Wir arbeiten mit Sorgfalt, Präzision und echter Begeisterung für das Handwerk – damit du dich rundum
                schön und verwöhnt fühlst.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-pk"
                style={{ padding: "14px 30px", borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
              >
                Termin vereinbaren →
              </a>
            </div>
          </div>
        </W>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── WARUM DIVINE — hell, weiß ─────────────────────────────────────── */}
      <section style={{ padding: "108px 0", background: C.white }}>
        <W>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Divider />
            <Label>Warum wir?</Label>
            <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text }}>
              Warum <em style={{ color: C.pink }}>Divine?</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 20 }}>
            {[
              {
                icon: "💬",
                title: "Individuelle Beratung",
                desc: "Dein Wunsch, dein Look. Wir hören zu und beraten dich persönlich und ehrlich.",
              },
              {
                icon: "✨",
                title: "Saubere & präzise Arbeit",
                desc: "Hygiene und Präzision sind für uns keine Option – sie sind Selbstverständlichkeit.",
              },
              {
                icon: "🌟",
                title: "Moderne Behandlungen",
                desc: "Aktuelle Techniken, hochwertige Produkte und echte Leidenschaft fürs Handwerk.",
              },
              {
                icon: "🏛️",
                title: "Stilvolle Atmosphäre",
                desc: "Ein Ort zum Entspannen, Verwöhnen und Wohlfühlen – dein kleines Luxus-Refugium.",
              },
            ].map((a) => (
              <div
                key={a.title}
                className="lux-card"
                style={{ padding: "36px 28px", borderRadius: 22, textAlign: "center", background: C.white }}
              >
                <div style={{ fontSize: 36, marginBottom: 18 }}>{a.icon}</div>
                <h3 className="pf" style={{ color: C.text, fontSize: 18, marginBottom: 12 }}>
                  {a.title}
                </h3>
                <p className="dm" style={{ color: C.muted, fontSize: 14, lineHeight: 1.78 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </W>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── ABLAUF — Ivory Rosé ───────────────────────────────────────────── */}
      <section style={{ padding: "108px 0", background: C.bg1 }}>
        <W>
          <Divider />
          <Label>Wie es funktioniert</Label>
          <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 60 }}>
            Dein Weg zu <em style={{ color: C.pink }}>Divine Beauty</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 22 }}>
            {[
              {
                num: "01",
                title: "Termin anfragen",
                desc: "Schreib uns auf Instagram oder ruf an – wir finden gemeinsam den perfekten Termin für dich.",
              },
              {
                num: "02",
                title: "Behandlung wählen",
                desc: "Lass dich beraten und wähle die Behandlung, die am besten zu dir und deinen Wünschen passt.",
              },
              {
                num: "03",
                title: "Entspannen & strahlen",
                desc: "Lehn dich zurück, genieße die Atmosphäre und verlass das Studio mit einem strahlenden Lächeln.",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="lux-card"
                style={{ padding: "36px 30px", borderRadius: 22, background: C.white }}
              >
                {/* Große Zahl in Gold */}
                <div
                  className="cg"
                  style={{
                    fontSize: 80,
                    lineHeight: 0.9,
                    fontWeight: 300,
                    marginBottom: 16,
                    background: "linear-gradient(135deg,rgba(214,183,109,0.18),rgba(214,183,109,0.06))",
                    WebkitBackgroundClip: "text",
                    color: "rgba(214,183,109,0.35)",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="pf" style={{ color: C.text, fontSize: 20, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p className="dm" style={{ color: C.muted, fontSize: 14, lineHeight: 1.78 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </W>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── PREISE — hell, weiße Cards, goldene Details ───────────────────── */}
      <section id="preise" style={{ padding: "108px 0", background: C.bg2 }}>
        <W>
          <Divider />
          <Label>Transparente Preise</Label>
          <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 14 }}>
            Unsere <em style={{ color: C.pink }}>Preise</em>
          </h2>
          <p className="dm" style={{ color: C.muted, fontSize: 13, maxWidth: 500, lineHeight: 1.75, marginBottom: 52 }}>
            * Preisänderungen vorbehalten. Bei individuellen Wünschen oder Sonderwünschen gerne direkt anfragen.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 18 }}>
            {PRICES.map((cat) => (
              <div
                key={cat.category}
                style={{
                  background: C.white,
                  borderRadius: 20,
                  padding: "24px 22px",
                  boxShadow: "0 4px 22px rgba(185,130,165,0.07)",
                  border: "1px solid rgba(214,183,109,0.12)",
                }}
              >
                <PriceHeading>{cat.category}</PriceHeading>
                {cat.items.map((item) => (
                  <div key={item.name} className="dv-prow">
                    <span className="dm" style={{ color: C.muted, fontSize: 14 }}>
                      {item.name}
                    </span>
                    <span
                      className="dm dv-pv"
                      style={{ color: C.gold, fontSize: 14, fontWeight: 600, transition: "color .2s" }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </W>
        <div style={{ marginTop: 48, display: "flex", justifyContent: "center", padding: "0 24px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "13px 30px", borderRadius: 999, fontSize: 14, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: C.gold }}>✦</span> Termin anfragen via WhatsApp
          </a>
        </div>
      </section>

      {/* ── BEWERTUNGEN — hell, weiß ──────────────────────────────────────── */}
      <section
        id="bewertungen"
        style={{ padding: "108px 0", background: C.white, position: "relative", overflow: "hidden" }}
      >
        {/* Dekorative Soft-Blobs */}
        <div
          style={{
            position: "absolute",
            top: "-5%",
            right: "-4%",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(243,198,220,0.2) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            left: "-4%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(214,183,109,0.1) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <W>
          <Divider />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: 52,
            }}
          >
            <div>
              <Label>Kundenmeinungen</Label>
              <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text }}>
                Was unsere <em style={{ color: C.pink }}>Kundinnen</em> sagen
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { icon: "💅", label: "300+ zufriedene Kundinnen" },
                { icon: "⭐", label: "4,7 ★ Google Bewertungen" },
                { icon: "📍", label: "Beauty & Nails Studio Wien" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="dm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: C.bg1,
                    border: "1px solid rgba(214,183,109,0.16)",
                    fontSize: 12,
                    color: C.muted,
                  }}
                >
                  <span style={{ fontSize: 14 }}>{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dv-rev-g">
            {(() => {
              const f = REVIEWS.find((r) => r.featured);
              if (!f) return null;
              return (
                <div
                  className="rev-feat"
                  style={{
                    borderRadius: 28,
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 390,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Georgia,serif",
                      fontSize: 88,
                      lineHeight: 0.72,
                      color: C.gold,
                      opacity: 0.22,
                      marginBottom: 14,
                      userSelect: "none",
                    }}
                  >
                    "
                  </div>
                  <p
                    className="cg"
                    style={{
                      color: C.text,
                      fontSize: "clamp(1.1rem,1.8vw,1.28rem)",
                      lineHeight: 1.78,
                      fontStyle: "italic",
                      marginBottom: 28,
                      flex: 1,
                    }}
                  >
                    {f.text}
                  </p>
                  <div>
                    <div style={{ marginBottom: 14 }}>
                      <Stars n={f.stars} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar initial={f.initial} size={42} />
                      <div style={{ flex: 1 }}>
                        <div className="pf" style={{ color: C.text, fontSize: 15 }}>
                          {f.name}
                        </div>
                        <div className="dm" style={{ color: C.pink, fontSize: 11, marginTop: 2 }}>
                          {f.category}
                        </div>
                      </div>
                      <span
                        className="dm"
                        style={{
                          background: "rgba(214,183,109,0.1)",
                          border: "1px solid rgba(214,183,109,0.3)",
                          borderRadius: 999,
                          padding: "4px 14px",
                          color: C.gold,
                          fontSize: 10,
                        }}
                      >
                        ✦ Top Bewertung
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
            <div className="dv-reg-rev">
              {REVIEWS.filter((r) => !r.featured).map((r, i) => (
                <div
                  key={r.id}
                  className="rev-sm"
                  style={{ borderRadius: 20, padding: "22px 20px", marginTop: i % 2 === 1 ? 22 : 0 }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <Stars n={r.stars} />
                  </div>
                  <p className="dm" style={{ color: C.muted, fontSize: 13.5, lineHeight: 1.78, marginBottom: 18 }}>
                    {r.text}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Avatar initial={r.initial} size={32} />
                    <div style={{ flex: 1 }}>
                      <div className="dm" style={{ color: C.text, fontSize: 13, fontWeight: 500 }}>
                        {r.name}
                      </div>
                    </div>
                    <span
                      className="dm"
                      style={{
                        background: "rgba(223,167,198,0.09)",
                        border: "1px solid rgba(223,167,198,0.18)",
                        borderRadius: 999,
                        padding: "3px 10px",
                        color: C.pink,
                        fontSize: 10,
                      }}
                    >
                      {r.category}
                    </span>
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

      {/* ── KONTAKT — Ivory Rosé ──────────────────────────────────────────── */}
      <section id="kontakt" style={{ padding: "108px 0", background: C.bg1 }}>
        <W>
          <Divider />
          <div className="dv-contact-g">
            <div>
              <Label>Kontakt</Label>
              <h2
                className="pf"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, lineHeight: 1.2, marginBottom: 36 }}
              >
                Bereit für dein <em style={{ color: C.pink }}>Beauty-Erlebnis?</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                <a
                  href={STUDIO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pk"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "16px 26px",
                    borderRadius: 16,
                    fontSize: 15,
                    fontWeight: 500,
                    width: "fit-content",
                  }}
                >
                  <span style={{ fontSize: 20 }}>📸</span>
                  <span>Termin via Instagram</span>
                  <span style={{ opacity: 0.75 }}>{STUDIO.instagram}</span>
                </a>
                <a
                  href={`tel:${STUDIO.phone}`}
                  className="btn-ol-light"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 24px",
                    borderRadius: 16,
                    fontSize: 14,
                    width: "fit-content",
                  }}
                >
                  <span style={{ fontSize: 18 }}>📞</span>
                  <span>{STUDIO.phone}</span>
                </a>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="btn-ol-light"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "13px 24px",
                    borderRadius: 16,
                    fontSize: 14,
                    width: "fit-content",
                  }}
                >
                  <span style={{ fontSize: 18 }}>✉️</span>
                  <span>{STUDIO.email}</span>
                </a>
              </div>
              <div className="dv-kcards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {/* Adresse */}
                <div
                  style={{
                    background: C.white,
                    borderRadius: 18,
                    padding: 20,
                    boxShadow: "0 4px 20px rgba(185,130,165,0.07)",
                    border: "1px solid rgba(214,183,109,0.14)",
                  }}
                >
                  <div style={{ color: C.gold, fontSize: 20, marginBottom: 10 }}>📍</div>
                  <div className="dm" style={{ color: C.muted, fontSize: 13, lineHeight: 1.65 }}>
                    {STUDIO.address}
                  </div>
                </div>
                {/* Öffnungszeiten */}
                <div
                  style={{
                    background: C.white,
                    borderRadius: 18,
                    padding: 20,
                    boxShadow: "0 4px 20px rgba(185,130,165,0.07)",
                    border: "1px solid rgba(214,183,109,0.14)",
                  }}
                >
                  <div style={{ color: C.gold, fontSize: 20, marginBottom: 10 }}>🕐</div>
                  {Object.entries(STUDIO.hours).map(([d, t]) => (
                    <div
                      key={d}
                      className="dm dv-hours-row"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 12,
                        color: C.muted,
                        marginBottom: 4,
                      }}
                    >
                      <span>{d}</span>
                      <span style={{ color: C.text }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div
              className="dv-map"
              style={{
                height: "100%",
                minHeight: 420,
                borderRadius: 26,
                background: "linear-gradient(148deg,#FBEAF3,#F3C6DC 55%,rgba(214,183,109,0.2) 100%)",
                border: "1px solid rgba(214,183,109,0.18)",
                boxShadow: "0 14px 48px rgba(185,130,165,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{ fontSize: 46 }}>🗺️</span>
              <span className="dm" style={{ color: C.muted, fontSize: 14 }}>
                Google Maps einbetten
              </span>
              <span className="dm" style={{ color: C.pink, fontSize: 12 }}>
                {STUDIO.address}
              </span>
            </div>
          </div>
        </W>
      </section>

      {/* ── FOOTER — dunkel (bleibt dunkel) ──────────────────────────────── */}
      <footer style={{ background: C.dark1, borderTop: "1px solid rgba(214,183,109,0.14)" }}>
        <W pad="64px 24px 40px">
          <div className="dv-footer-g">
            <div>
              <div className="pf" style={{ color: C.soft, fontSize: 26, marginBottom: 4 }}>
                Divine Beauty
              </div>
              <div
                className="dm"
                style={{
                  color: C.gold,
                  fontSize: 10,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                &amp; Nails Studio · Wien
              </div>
              <p
                className="dm"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 14,
                  lineHeight: 1.75,
                  maxWidth: 300,
                  marginBottom: 24,
                }}
              >
                Luxuriöses Nagelstudio &amp; Beauty in Wien. Für Nägel, Haut und Wohlgefühl.
              </p>
              <a
                href={STUDIO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="dm"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: C.soft,
                  textDecoration: "none",
                  border: "1px solid rgba(243,198,220,0.22)",
                  borderRadius: 999,
                  padding: "8px 16px",
                  fontSize: 13,
                }}
              >
                📸 {STUDIO.instagram}
              </a>
            </div>
            <div>
              <div
                className="dm"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Navigation
              </div>
              {NAV.map((n) => (
                <button key={n.id} className="dv-flink" onClick={() => go(n.id)}>
                  {n.l}
                </button>
              ))}
            </div>
            <div>
              <div
                className="dm"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 11,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Rechtliches
              </div>
              {["Impressum", "Datenschutz"].map((n) => (
                <button key={n} className="dv-flink" onClick={() => go(n.toLowerCase())}>
                  {n}
                </button>
              ))}
            </div>
          </div>
          {/* Gold-Rosé Divider Line */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg,transparent,rgba(214,183,109,0.28),rgba(243,198,220,0.18),transparent)",
              marginBottom: 24,
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 10 }}>
            <span className="dm" style={{ color: "rgba(255,255,255,0.28)", fontSize: 12 }}>
              © {new Date().getFullYear()} Divine Beauty &amp; Nails Studio · Wien · Alle Rechte vorbehalten
            </span>
            <span className="dm" style={{ color: "rgba(255,255,255,0.28)", fontSize: 12 }}>
              Made with <span style={{ color: C.soft }}>♥</span> in Wien
            </span>
          </div>
        </W>
      </footer>

      {/* ── IMPRESSUM — hell ─────────────────────────────────────────────── */}
      <section
        id="impressum"
        style={{ padding: "80px 0", background: C.bg2, borderTop: "1px solid rgba(214,183,109,0.18)" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <h2 className="pf" style={{ color: C.text, fontSize: 28, marginBottom: 10 }}>
            Impressum
          </h2>
          <div
            className="dm"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(214,183,109,0.22)",
              borderRadius: 10,
              padding: "12px 16px",
              color: C.muted,
              fontSize: 12,
              lineHeight: 1.6,
              marginBottom: 32,
            }}
          >
            ⚠️ Platzhalter – bitte vor Veröffentlichung rechtlich prüfen lassen (österreichisches Recht / Wien).
          </div>
          {[
            ["Unternehmensname", "Divine Beauty & Nails Studio"],
            ["Inhaberin", "[VORNAME NACHNAME eintragen]"],
            ["Adresse", "Klosterneuburgerstraße 98, 1200 Wien, Österreich"],
            ["Telefon", "+43 676 3633721"],
            ["E-Mail", "divine.beauty.nails@gmail.com"],
            ["UID-Nummer", "[ATU XXXXXXXX – falls vorhanden, sonst weglassen]"],
            ["Gewerbebehörde", "Magistrat der Stadt Wien / Wirtschaftskammer Wien (WKW)"],
            ["Berufsrecht", "Gewerbeordnung 1994 (GewO) – www.ris.bka.gv.at"],
            ["Gewerbe", "Kosmetikgewerbe / Nagelstudio / Beauty-Dienstleistungen"],
          ].map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                padding: "10px 0",
                borderBottom: "1px solid rgba(42,37,40,0.07)",
              }}
            >
              <span className="dm" style={{ color: C.muted, fontSize: 13, minWidth: 200 }}>
                {k}
              </span>
              <span className="dm" style={{ color: C.text, fontSize: 13 }}>
                {v}
              </span>
            </div>
          ))}
          <p className="dm" style={{ color: C.muted, fontSize: 13, lineHeight: 1.8, marginTop: 28 }}>
            Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt
            verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
      </section>

      {/* ── DATENSCHUTZ — hell ───────────────────────────────────────────── */}
      <section
        id="datenschutz"
        style={{ padding: "80px 0 120px", background: C.bg1, borderTop: "1px solid rgba(214,183,109,0.14)" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <h2 className="pf" style={{ color: C.text, fontSize: 28, marginBottom: 10 }}>
            Datenschutzerklärung
          </h2>
          <div
            className="dm"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(214,183,109,0.22)",
              borderRadius: 10,
              padding: "12px 16px",
              color: C.muted,
              fontSize: 12,
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            ⚠️ Platzhalter – bitte vor Veröffentlichung rechtlich prüfen lassen (DSGVO / österreichisches DSG). Stand:
            [DATUM einfügen].
          </div>
          {[
            {
              t: "1. Verantwortliche Person",
              c: "Divine Beauty & Nails Studio, Klosterneuburgerstraße 98, 1200 Wien – Inhaberin: [VORNAME NACHNAME eintragen] – divine.beauty.nails@gmail.com – ist verantwortliche Person im Sinne der DSGVO.",
            },
            {
              t: "2. Erhobene Daten & Zweck",
              c: "Beim Besuch werden technisch notwendige Daten erhoben. Bei freiwilliger Kontaktaufnahme (E-Mail, Instagram) werden die Daten ausschließlich zur Terminvergabe verwendet.",
            },
            {
              t: "3. Rechtsgrundlage",
              c: "Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer Website-Bereitstellung).",
            },
            { t: "4. Datenweitergabe", c: "Keine Weitergabe an Dritte, soweit nicht gesetzlich verpflichtet." },
            {
              t: "5. Deine Rechte (DSGVO)",
              c: "Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Übertragbarkeit (Art. 20), Widerspruch (Art. 21). Kontakt: divine.beauty.nails@gmail.com",
            },
            {
              t: "6. Instagram / Social Media",
              c: "Verlinkungen zu Instagram (Meta Platforms Ireland Ltd.) – beim Klick gelten die Datenschutzbestimmungen von Meta.",
            },
            {
              t: "7. Beschwerderecht",
              c: "Österreichische Datenschutzbehörde: Barichgasse 40–42, 1030 Wien – dsb.gv.at",
            },
          ].map((s) => (
            <div key={s.t} style={{ marginBottom: 28 }}>
              <h3 className="pf" style={{ color: C.pink, fontSize: 16, marginBottom: 10 }}>
                {s.t}
              </h3>
              <p className="dm" style={{ color: C.muted, fontSize: 13, lineHeight: 1.88 }}>
                {s.c}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sticky WhatsApp CTA — nur mobil ─────────────────────────────── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Termin via WhatsApp anfragen"
        className="dv-sticky-wa"
        style={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 60,
          display: "none",
          alignItems: "center",
          gap: 8,
          padding: "11px 20px",
          borderRadius: 999,
          background: "rgba(42,37,40,0.92)",
          color: "#fff",
          textDecoration: "none",
          fontSize: 13,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          letterSpacing: 0.2,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(214,183,109,0.45)",
          boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
        }}
      >
        <span style={{ color: C.gold }}>✦</span>
        <span>Termin anfragen</span>
      </a>
    </div>
  );
}
