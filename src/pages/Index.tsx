import logo from "@/assets/logo.png";
import javeraLogo from "@/assets/Javera.logo.rund.png";
import { Link } from "react-router-dom";
import studioHero from "@/assets/studio5.png";
import teamHero from "@/assets/teamnew.jpeg";
import dacaNew from "@/assets/dacanew.jpeg";
import new1Img from "@/assets/new1.jpg";
import new2Img from "@/assets/new2.png";
import new3Img from "@/assets/new3.jpg";
import new4Img from "@/assets/new4.png";
import new5Img from "@/assets/new5.png";
import gel3Img from "@/assets/gel3.jpeg";
import nagel6Img from "@/assets/nagel6.jpg";
import studio11Img from "@/assets/studio11.png";
import studio2Img from "@/assets/studio2.png";
import studio4Img from "@/assets/studio4.png";
import studio7Img from "@/assets/studio7.png";
import studio9Img from "@/assets/studio9.png";
import studio12Img from "@/assets/studio12.png";
import studio14Img from "@/assets/studio14.png";
import studio15Img from "@/assets/studio15.png";
import pedi1Img from "@/assets/pedi1.png";
import { useState, useEffect } from "react";
import { MessageCircle, Diamond, Sparkles, Flower2, Star, Award, Heart, MapPin, Clock, Mail, Phone, Instagram } from "lucide-react";

// ══════════════════════════════════════════════════════════════════════════════
// KONFIGURATION — Inhalte hier anpassen
// ══════════════════════════════════════════════════════════════════════════════

const STUDIO = {
  name: "Divine Beauty & Nails Studio",
  phone: "+43 676 3633721",
  instagram: "@divine.beauty.nails.studio",
  instagramUrl: "https://www.instagram.com/divine.beauty.nails.studio",
  address: "Klosterneuburger Straße 98/5, 1200 Wien",
  email: "divine.beauty.nails@gmail.com",
  hours: {
    "Mo – Fr": "09:00 – 19:00 Uhr",
    Samstag: "09:00 – 17:00 Uhr",
    Sonntag: "Auf Anfrage",
  },
};

const WA_URL = "https://wa.me/436763633721?text=" + encodeURIComponent("Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen.");

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
    img: "/nagel5.png",
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
      { name: "Neues Set inkl. Farbe", price: "56 €" },
      { name: "Neues Set French/Babyboomer", price: "58 €" },
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
      { name: "Maniküre inkl. Paraffinbad", price: "30 €" },
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
  { id: 1,  label: "Gelmodellage", src: "/Gelmodellage.png",  g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 2,  label: "Studio",       src: studio11Img,          g: "linear-gradient(145deg,#FFF7F2,#e8d4b0 55%,#D6B76D)" },
  { id: 3,  label: "Nägel",        src: "/nagel1.jpg",        g: "linear-gradient(145deg,#FFF7FA,#F3C6DC)" },
  { id: 4,  label: "Make-up",      src: "/makeup2.png",       g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 5,  label: "Nägel",        src: new3Img,              g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 6,  label: "Pediküre",     src: "/Pedikuere.png",     g: "linear-gradient(145deg,#FBEAF3,#e8d4b0 60%,#D6B76D)" },
  { id: 7,  label: "Gelmodellage", src: gel3Img,              g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 8,  label: "Augen",        src: "/augen2.png",        g: "linear-gradient(145deg,#FFF7FA,#D6B76D 40%,#DFA7C6)" },
  { id: 9,  label: "Studio",       src: studio4Img,           g: "linear-gradient(145deg,#FFF7F2,#e8d4b0 55%,#D6B76D)" },
  { id: 10, label: "Nägel",        src: "/nagel4.png",        g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 11, label: "Maniküre",     src: "/Manikuere.png",     g: "linear-gradient(145deg,#FBEAF3,#DFA7C6)" },
  { id: 12, label: "Nägel",        src: new1Img,              g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 13, label: "Studio",       src: studio2Img,           g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 14, label: "Augen",        src: "/augen1.png",        g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 15, label: "Nägel",        src: nagel6Img,            g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 16, label: "Make-up",      src: "/makeup3.png",       g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 17, label: "Studio",       src: studio7Img,           g: "linear-gradient(145deg,#FBEAF3,#F3C6DC 55%,#DFA7C6)" },
  { id: 18, label: "Nägel",        src: "/nagel2.png",        g: "linear-gradient(145deg,#FFF7FA,#F3C6DC 45%,#ead5a8)" },
  { id: 19, label: "Pediküre",     src: pedi1Img,             g: "linear-gradient(145deg,#FBEAF3,#e8d4b0 60%,#D6B76D)" },
  { id: 20, label: "Nägel",        src: new4Img,              g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 21, label: "Studio",       src: studio9Img,           g: "linear-gradient(145deg,#FFF7FA,#DFA7C6 55%,#D6B76D)" },
  { id: 23, label: "Nägel",        src: new5Img,              g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
  { id: 24, label: "Studio",       src: studio12Img,          g: "linear-gradient(145deg,#FFF7F2,#e8d4b0 60%,#D6B76D)" },
  { id: 25, label: "Nägel",        src: new2Img,              g: "linear-gradient(145deg,#FFF7FA,#e8d4b0 55%,#D6B76D)" },
];

const REVIEWS = [
  {
    id: 1,
    name: "Vanessa K.",
    stars: 5,
    initial: "V",
    featured: true,
    category: "Gelmodellage",
    text: "Ich gehe seit 4 Jahren hier Nägel machen und bin immer begeistert. Die Mädels leisten tolle Arbeit und sind sehr schnell und genau. Ich bekomme immer genau das, was ich mir wünsche. Die Farbauswahl ist riesig und es gibt ständig neue Farben.",
  },
  {
    id: 2,
    name: "Natasa E.",
    stars: 5,
    initial: "N",
    featured: false,
    category: "Nägel",
    text: "Ich bin seit über fünf Jahren zufriedene Kundin und kann Danijela und ihr Team nur weiterempfehlen. Immer nett, professionell und zuverlässig. Die Feilarbeiten sind wunderschön und die Farbauswahl lässt keine Wünsche offen.",
  },
  {
    id: 3,
    name: "Sandra M.",
    stars: 5,
    initial: "S",
    featured: false,
    category: "Atmosphäre",
    text: "Entspannte Atmosphäre, sauberes Studio und ein wirklich herzliches Team. Man fühlt sich vom ersten Moment an wohl. Gerne immer wieder!",
  },
  {
    id: 4,
    name: "Julia B.",
    stars: 5,
    initial: "J",
    featured: false,
    category: "Beratung",
    text: "Tolle Beratung, saubere Arbeit und die Nägel halten wirklich lange. Ich würde hier nie mehr weggehen – absolut empfehlenswert.",
  },
  {
    id: 5,
    name: "Leonie H.",
    stars: 5,
    initial: "L",
    featured: false,
    category: "Shellac",
    text: "Der Shellac hält perfekt und sieht noch nach Wochen makellos aus. Sehr professionelles Team, das genau auf die eigenen Wünsche eingeht.",
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
.dv-hero-g > * { min-width: 0; }
.dv-about-g   { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.dv-contact-g { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; }
.dv-footer-g  { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 60px; margin-bottom: 56px; }
.dv-footer-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }
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
  .dv-hero-g, .dv-about-g, .dv-contact-g, .dv-footer-g, .dv-footer-cards { grid-template-columns: 1fr !important; gap: 16px !important; }
  .dv-reg-rev { grid-template-columns: 1fr; }
  .dv-hero-img { display: block !important; }
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

/* ── Team Section ────────────────────────────────────────────────────────── */
.team-card { transition: box-shadow .35s, transform .35s; }
.team-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(185,130,165,0.14) !important; }
.team-card .team-img { transition: transform .5s cubic-bezier(.4,0,.2,1); }
.team-card:hover .team-img { transform: scale(1.05); }
.dv-team-g { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
@media (max-width: 900px) { .dv-team-g { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 560px) { .dv-team-g { grid-template-columns: 1fr; max-width: 380px; margin: 0 auto; } }
.dv-team-split { display: grid; grid-template-columns: 0.7fr 1fr; gap: 64px; align-items: center; }
@media (max-width: 860px) { .dv-team-split { grid-template-columns: 1fr; gap: 40px; } }

/* ── Scroll Reveal ───────────────────────────────────────────────────────── */
[data-r] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity .65s cubic-bezier(.4,0,.2,1),
              transform .65s cubic-bezier(.4,0,.2,1);
}
[data-r].rv { opacity: 1; transform: none; }
[data-r][data-d="1"] { transition-delay: 90ms; }
[data-r][data-d="2"] { transition-delay: 180ms; }
[data-r][data-d="3"] { transition-delay: 270ms; }
[data-r][data-d="4"] { transition-delay: 360ms; }
@media (prefers-reduced-motion: reduce) {
  [data-r] { opacity: 1; transform: none; transition: none; }
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

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("rv"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll("[data-r]").forEach((el) => io.observe(el));
    return () => io.disconnect();
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

  const Divider = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "10px 0 20px" }}>
      <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,transparent,#D6B76D)" }} />
      <div style={{ display: "flex", gap: 5 }}>
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.85 }} />
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.85 }} />
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.85 }} />
      </div>
      <div style={{ width: 64, height: 1, background: "linear-gradient(90deg,#D6B76D,transparent)" }} />
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


  const NAV: { l: string; id?: string; href?: string }[] = [
    { l: "Home", id: "home" },
    { l: "Über uns", id: "ueber" },
    { l: "Leistungen", href: "/leistungen" },
    { l: "Galerie", id: "galerie" },
    { l: "Preise", href: "/preise" },
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
  style={{ width: 107, height: 107, borderRadius: "50%", objectFit: "cover" }}
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
            {NAV.map((n) =>
              n.href ? (
                <Link key={n.href} to={n.href} className="dv-nav-link" style={{ textDecoration: "none" }}>
                  {n.l}
                </Link>
              ) : (
                <button key={n.id} className="dv-nav-link" onClick={() => go(n.id!)}>
                  {n.l}
                </button>
              )
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-pk dv-nc"
              style={{ padding: "11px 22px", borderRadius: 999, fontSize: 12, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <span aria-hidden style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>💬</span>
              Termin buchen
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
            {NAV.map((n) =>
              n.href ? (
                <Link
                  key={n.href}
                  to={n.href}
                  className="dm"
                  style={{
                    display: "block",
                    color: C.text,
                    fontSize: 16,
                    padding: "13px 0",
                    borderBottom: "1px solid rgba(42,37,40,0.06)",
                    textDecoration: "none",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {n.l}
                </Link>
              ) : (
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
                  onClick={() => go(n.id!)}
                >
                  {n.l}
                </button>
              )
            )}
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

      {/* ── HERO — Full-Bleed Video ───────────────────────────────────────── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          background: "#1a1618",
        }}
      >
        {/* Vollflächiges Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
          }}
        >
          <source src="/herovid.mp4" type="video/mp4" />
          <img src={studioHero} alt="Divine Beauty & Nails Studio" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </video>
        {/* Dunkles Gradient-Overlay für Lesbarkeit */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(42,37,40,0.88) 0%, rgba(42,37,40,0.45) 45%, rgba(42,37,40,0.1) 100%)",
            pointerEvents: "none",
          }}
        />
        {/* Text-Inhalt */}
        <W pad="48px 24px" style={{ width: "100%", position: "relative", zIndex: 1 }}>
          <div className="dv-fadeup" style={{ maxWidth: 700, userSelect: "none", cursor: "default" }}>
            <div
              className="dm"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 8, textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
            >
              Willkommen bei
            </div>
            <h1 className="pf" style={{ margin: "0 0 4px", lineHeight: 0.95 }}>
              <span
                className="gv"
                style={{ display: "block", color: C.soft, fontSize: "clamp(4rem,9vw,7.5rem)", lineHeight: 1, fontWeight: 400, textShadow: "0 4px 20px rgba(0,0,0,0.55)" }}
              >
                Divine
              </span>
              <span
                style={{ display: "block", color: "rgba(255,255,255,0.88)", fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 400, letterSpacing: "0.5px", marginTop: 4, textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
              >
                Beauty &amp; Nails Studio
              </span>
            </h1>
            <p
              className="pf"
              style={{ fontStyle: "italic", color: C.soft, fontSize: "clamp(1rem,1.4vw,1.2rem)", margin: "22px 0 18px", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
            >
              Schöne Nägel sind kein Zufall.
            </p>
            <p
              className="dm"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: 15.5, lineHeight: 1.75, maxWidth: 460, textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Erstklassige Behandlungen in stilvollem Ambiente — weil du es verdienst.
            </p>
          </div>
        </W>
      </section>



      {/* ── ZITAT-BAND — Deine Auszeit ──────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          padding: "52px 24px",
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 24 }}>
            <span style={{ width: 64, height: 1, background: "linear-gradient(90deg,transparent,rgba(214,183,109,0.7))", display: "block" }} />
            <div style={{ display: "flex", gap: 5 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />
            </div>
            <span style={{ width: 64, height: 1, background: "linear-gradient(90deg,rgba(214,183,109,0.7),transparent)", display: "block" }} />
          </div>
          <p
            className="pf"
            style={{
              color: "rgba(255,247,242,0.88)",
              fontSize: "clamp(1.4rem,3vw,2rem)",
              fontStyle: "italic",
              letterSpacing: "0.5px",
              lineHeight: 1.6,
              margin: "0 0 24px",
            }}
          >
            Deine Auszeit. Deine Schönheit. Dein Moment.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 64, height: 1, background: "linear-gradient(90deg,transparent,rgba(214,183,109,0.7))", display: "block" }} />
            <div style={{ display: "flex", gap: 5 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, display: "block", opacity: 0.75 }} />
            </div>
            <span style={{ width: 64, height: 1, background: "linear-gradient(90deg,rgba(214,183,109,0.7),transparent)", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ── ÜBER UNS — Rosé hell ──────────────────────────────────────────── */}
      <section
        id="ueber"
        style={{ padding: "96px 0", background: C.bg2, position: "relative", overflow: "hidden" }}
      >
        {/* Aquarell-Wandtextur — sehr dezent, 7 % Deckkraft */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/daca3.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            opacity: 0.07,
            filter: "blur(22px) saturate(140%)",
            transform: "scale(1.08)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
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
            zIndex: 0,
          }}
        />
        <W style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48, width: "100%" }}>
            <div style={{ textAlign: "center" }}><Label>Über uns</Label></div>
            <Divider />
            <h2
              className="pf"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: C.text, lineHeight: 1.2, textAlign: "center" }}
            >
              Beauty mit <em style={{ color: C.pink }}>Leidenschaft</em> &amp; Präzision
            </h2>
          </div>
          <div className="dv-about-g" style={{ alignItems: "center", marginBottom: 56 }}>
            <div data-r>
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  border: "1px solid rgba(214,183,109,0.16)",
                  boxShadow: "0 20px 60px rgba(185,130,165,0.12)",
                }}
              >
                <img
                  src="/daca1.jpg"
                  alt="Danijela — Divine Beauty & Nails Studio"
                  style={{ width: "100%", height: 360, objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </div>
              <p className="pf" style={{ textAlign: "center", color: C.muted, fontSize: 15, fontStyle: "italic", marginTop: 18 }}>
                Ein Ort zum Entspannen, Wohlfühlen und Schönwerden.
              </p>
            </div>
            <div data-r data-d="1">
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

          {/* Studio-Grid */}
          <div data-r style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {[studio14Img, studio4Img, studio15Img, studio2Img].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Divine Beauty Studio"
                style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 18, display: "block", boxShadow: "0 8px 28px rgba(42,37,40,0.08)" }}
              />
            ))}
          </div>
        </W>
      </section>

      {/* ── WARUM DIVINE — hell, weiß ─────────────────────────────────────── */}
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
              {
                Icon: MessageCircle,
                title: "Individuelle Beratung",
                desc: "Dein Wunsch, dein Look. Wir hören zu und beraten dich persönlich und ehrlich.",
              },
              {
                Icon: Diamond,
                title: "Saubere & präzise Arbeit",
                desc: "Hygiene und Präzision sind für uns keine Option – sie sind Selbstverständlichkeit.",
              },
              {
                Icon: Sparkles,
                title: "Moderne Behandlungen",
                desc: "Aktuelle Techniken, hochwertige Produkte und echte Leidenschaft fürs Handwerk.",
              },
              {
                Icon: Flower2,
                title: "Stilvolle Atmosphäre",
                desc: "Ein Ort zum Entspannen, Verwöhnen und Wohlfühlen – dein kleines Luxus-Refugium.",
              },
            ].map((a, i) => (
              <div
                key={a.title}
                data-r
                data-d={i}
                className="lux-card"
                style={{ padding: "36px 28px", borderRadius: 22, textAlign: "center", background: C.white }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                  <a.Icon size={22} strokeWidth={1.5} color={C.gold} />
                </div>
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
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section
        id="team"
        style={{ padding: "96px 0", background: C.bg1, position: "relative", overflow: "hidden" }}
      >
        {/* Aquarell texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/daca3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
            filter: "blur(24px) saturate(130%)",
            transform: "scale(1.08)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <W style={{ zIndex: 1 }}>
          {/* Split: Foto links — Inhalt rechts */}
          <div className="dv-team-split" style={{ marginBottom: 80 }}>
            {/* Linke Spalte: Gruppenfoto */}
            <div
              data-r
              style={{
                borderRadius: 28,
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(185,130,165,0.14)",
                border: "1px solid rgba(214,183,109,0.13)",
              }}
            >
              <img
                src={teamHero}
                alt="Das Team von Divine Beauty & Nails Studio"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", minHeight: 294 }}
              />
            </div>

            {/* Rechte Spalte: Text + Badges */}
            <div data-r data-d="1">
              <div style={{ textAlign: "center" }}><Label>Unser Team</Label></div>
              <Divider />
              <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 20 }}>
                Lerne unser <em style={{ color: C.pink }}>Team</em> kennen
              </h2>
              <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
                Hinter Divine Beauty steht ein herzliches Team aus erfahrenen Beauty-Expertinnen mit Leidenschaft für Schönheit, Präzision und Wohlbefinden.
              </p>

              {/* Badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { Icon: Award, text: "Über 8 Jahre Erfahrung" },
                  { Icon: Heart, text: "Hunderte zufriedene Kundinnen" },
                  { Icon: MessageCircle, text: "Persönliche Beratung" },
                  { Icon: Sparkles, text: "Liebe zum Detail" },
                ].map((h) => (
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

          {/* Person cards */}
          <div className="dv-team-g">
            {[
              {
                img: dacaNew,
                name: "Danijela",
                role: "Inhaberin & Beauty-Expertin",
                text: "Seit 2018 führt Danijela Divine Beauty & Nails mit viel Leidenschaft, Präzision und Liebe zum Detail. Ihr ist besonders wichtig, dass sich jede Kundin rundum wohlfühlt und individuell betreut wird.",
              },
              {
                img: "/nina1.jpg",
                name: "Nina",
                role: "Beauty-Expertin",
                text: "Nina arbeitet mit viel Feingefühl und Präzision – und bringt mit ihrer ruhigen, aufmerksamen Art das Beste in jeder Behandlung heraus.",
              },
              {
                img: "/gloria1.jpg",
                name: "Gloria",
                role: "Beauty-Expertin",
                text: "Gloria begeistert mit ihrer freundlichen Art und ihrem Gespür für schöne, natürliche Ergebnisse – stets mit einem Lächeln.",
              },
            ].map((p, i) => (
              <div
                key={p.name}
                data-r
                data-d={i}
                className="team-card"
                style={{
                  background: C.white,
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(185,130,165,0.08)",
                  border: "1px solid rgba(214,183,109,0.1)",
                }}
              >
                <div style={{ width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="team-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div className="dm" style={{ color: C.pink, fontSize: 10.5, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 6 }}>
                    {p.role}
                  </div>
                  <h3 className="pf" style={{ color: C.text, fontSize: 21, marginBottom: 10 }}>
                    {p.name}
                  </h3>
                  <p className="dm" style={{ color: C.muted, fontSize: 14, lineHeight: 1.78 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </W>
      </section>

      {/* ── LEISTUNGEN — kompakte Übersicht ──────────────────────────────── */}
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

          {/* 3×3 Foto-Grid */}
          <div className="dv-svc-g" style={{ marginBottom: 52 }}>
            {SERVICES.map((s, i) => (
              <Link
                key={s.title}
                to="/leistungen"
                data-r
                data-d={i % 3}
                style={{
                  background: C.white,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(214,183,109,0.12)",
                  boxShadow: "0 4px 20px rgba(185,130,165,0.07)",
                  textDecoration: "none",
                  display: "block",
                  transition: "box-shadow .25s, transform .25s",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 10px 32px rgba(185,130,165,0.15)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(185,130,165,0.07)"; e.currentTarget.style.transform = "none"; }}
              >
                {s.img && (
                  <img src={s.img} alt={s.title} style={{ width: "100%", height: 288, objectFit: "cover", display: "block" }} />
                )}
                <div style={{ padding: "14px 16px", textAlign: "center" }}>
                  <span className="pf" style={{ color: C.text, fontSize: 15 }}>{s.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              to="/leistungen"
              className="btn-pk"
              style={{ padding: "13px 34px", borderRadius: 999, fontSize: 13, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ color: C.gold }}>✦</span> Alle Leistungen entdecken
            </Link>
          </div>
        </W>
      </section>

      {/* ── GALERIE — hell, Ivory ─────────────────────────────────────────── */}
      <section id="galerie" style={{ padding: "96px 0", background: C.white, overflow: "hidden" }}>
        <W style={{ marginBottom: 52, textAlign: "center" }}>
          <Label>Portfolio</Label>
          <Divider />
          <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 14 }}>
            Unsere <em style={{ color: C.pink }}>Galerie</em>
          </h2>
          <p className="dm" style={{ color: C.muted, fontSize: 16, lineHeight: 1.8, whiteSpace: "nowrap" }}>
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
                  <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <span style={{ fontSize: 38 }}>📸</span>
                    <span className="dm" style={{ color: "rgba(43,32,39,0.4)", fontSize: 11, letterSpacing: "1px" }}>{img.label}</span>
                  </div>
                )}
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

      {/* ── PREISE CTA ────────────────────────────────────────────────────── */}
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
            <Link
              to="/preise"
              className="btn-pk"
              style={{ padding: "14px 34px", borderRadius: 999, fontSize: 13, fontWeight: 500, letterSpacing: "1.8px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ color: C.gold }}>✦</span>
              Preise ansehen
            </Link>
          </div>
        </W>
      </section>

      {/* ── BEWERTUNGEN — hell, weiß ──────────────────────────────────────── */}
      <section
        id="bewertungen"
        style={{ padding: "96px 0", background: C.white, position: "relative", overflow: "hidden" }}
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
        <W style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ textAlign: "center" }}><Label>Kundenmeinungen</Label></div>
            <Divider />
            <h2 className="pf" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, marginBottom: 28, textAlign: "center" }}>
              Was unsere <em style={{ color: C.pink }}>Kundinnen</em> sagen
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {[
                { Icon: Star, label: "4,7 / 5 Google · 114 Rezensionen" },
                { Icon: Award, label: "4,7 / 5 Treatwell · 327 Rezensionen" },
                { Icon: Heart, label: "Seit 2018 die erste Wahl" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="dm"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "9px 18px",
                    borderRadius: 999,
                    background: "rgba(251,234,243,0.55)",
                    border: "1px solid rgba(223,167,198,0.22)",
                    fontSize: 12.5,
                    color: C.text,
                    letterSpacing: "0.2px",
                  }}
                >
                  <b.Icon size={14} strokeWidth={1.5} color={C.gold} />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dv-rev-g" style={{ textAlign: "left" }}>
            {(() => {
              const f = REVIEWS.find((r) => r.featured);
              if (!f) return null;
              return (
                <div
                  className="rev-feat"
                  data-r
                  style={{
                    borderRadius: 24,
                    padding: "32px 30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 300,
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
                  data-r
                  data-d={i % 2}
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
      <section id="kontakt" style={{ padding: "96px 0", background: C.bg1, position: "relative", overflow: "hidden" }}>
        {/* Aquarell-Wandtextur — noch dezenter, 5 % */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/daca3.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            opacity: 0.05,
            filter: "blur(28px) saturate(120%)",
            transform: "scale(1.08) scaleX(-1)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <W style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Label>Kontakt</Label>
            <Divider />
            <h2
              className="pf"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.text, lineHeight: 1.2, textAlign: "center" }}
            >
              Bereit für dein <em style={{ color: C.pink }}>Beauty-Erlebnis?</em>
            </h2>
          </div>
          <div className="dv-contact-g">
            <div>

              {/* Kontakt-Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 44 }}>
                <a
                  href={STUDIO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pk"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12, padding: "15px 26px", borderRadius: 16, fontSize: 15, fontWeight: 500, width: "fit-content" }}
                >
                  <Instagram size={18} strokeWidth={1.5} />
                  <span>Termin via Instagram</span>
                </a>
                <a href="https://wa.me/436763633721" target="_blank" rel="noreferrer" className="btn-ol-light" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12, padding: "13px 24px", borderRadius: 16, fontSize: 14, width: "fit-content" }}>
                  <MessageCircle size={16} strokeWidth={1.5} />
                  <span>Termin via WhatsApp</span>
                </a>
                <a href={`mailto:${STUDIO.email}`} className="btn-ol-light" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12, padding: "13px 24px", borderRadius: 16, fontSize: 14, width: "fit-content" }}>
                  <Mail size={16} strokeWidth={1.5} />
                  <span>{STUDIO.email}</span>
                </a>
              </div>

              {/* Adresse */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <MapPin size={15} strokeWidth={1.5} color={C.gold} />
                  <span className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Adresse</span>
                </div>
                <div className="dm" style={{ color: C.text, fontSize: 15, lineHeight: 1.75 }}>
                  Klosterneuburgerstraße 98<br />1200 Wien
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <Clock size={15} strokeWidth={1.5} color={C.gold} />
                  <span className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase" }}>Öffnungszeiten</span>
                </div>
                {Object.entries(STUDIO.hours).map(([d, t]) => (
                  <div key={d} style={{ display: "flex", gap: 16, marginBottom: 6 }}>
                    <span className="dm" style={{ color: C.muted, fontSize: 14, minWidth: 80 }}>{d}</span>
                    <span className="dm" style={{ color: C.text, fontSize: 14 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Photo */}
            <div data-r data-d="1" style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 24px 72px rgba(185,130,165,0.16)",
                  border: "1px solid rgba(214,183,109,0.14)",
                  width: "100%",
                  maxHeight: 504,
                }}
              >
                <img
                  src="/daca1.jpg"
                  alt="Divine Beauty & Nails Studio"
                  style={{ width: "100%", height: "504px", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
              </div>
            </div>
          </div>
        </W>
      </section>

      {/* ── FOOTER — dunkel ───────────────────────────────────────────────── */}
      <footer style={{ background: C.dark1, borderTop: "1px solid rgba(214,183,109,0.14)" }}>
        <W pad="40px 24px 0">

          {/* Two Cards */}
          <div className="dv-footer-cards">

            {/* LEFT: Studio Info */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(214,183,109,0.18)", borderRadius: 12, padding: "28px 28px 24px" }}>
              <div className="pf" style={{ color: C.soft, fontSize: 20, marginBottom: 2 }}>Divine Beauty &amp; Nails Studio</div>
              <a
                href={STUDIO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="dm"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(243,198,220,0.65)", textDecoration: "none", fontSize: 12, marginBottom: 20, marginTop: 6 }}
              >
                <Instagram size={12} strokeWidth={1.5} />
                {STUDIO.instagram}
              </a>

              <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
                <MapPin size={13} strokeWidth={1.5} color={C.gold} style={{ flexShrink: 0, marginTop: 2 }} />
                <div className="dm" style={{ color: "rgba(255,255,255,0.45)", fontSize: 12.5, lineHeight: 1.7 }}>
                  Klosterneuburger Straße 98/5<br />1200 Wien
                </div>
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

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="dm"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, color: C.gold, fontSize: 12, textDecoration: "none", opacity: 0.7, transition: "opacity .2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
              >
                <MapPin size={12} strokeWidth={1.5} />
                Google Maps öffnen →
              </a>
            </div>

            {/* RIGHT: Kontakt & Rechtliches */}
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
                <Instagram size={13} strokeWidth={1.5} color={C.gold} />
                <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="dm" style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, textDecoration: "none" }}>{STUDIO.instagram}</a>
              </div>

              <div style={{ height: 1, background: "rgba(214,183,109,0.12)", marginBottom: 20 }} />

              {[{ n: "Impressum", to: "/impressum" }, { n: "Datenschutz", to: "/datenschutz" }].map(({ n, to }) => (
                <Link
                  key={n}
                  to={to}
                  className="dm"
                  style={{ display: "block", color: "rgba(255,255,255,0.35)", fontSize: 12.5, textDecoration: "none", marginBottom: 10, transition: "color .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {n}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: "1px solid rgba(214,183,109,0.1)", padding: "16px 0 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span className="dm" style={{ color: "rgba(255,255,255,0.22)", fontSize: 11.5 }}>
              © {new Date().getFullYear()} Divine Beauty &amp; Nails Studio · Wien
            </span>
            <a
              href="https://javera-studio.at"
              target="_blank"
              rel="noreferrer"
              className="dm"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.2)", textDecoration: "none", fontSize: 11, letterSpacing: "1.5px", transition: "color 0.3s ease" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
            >
              <img src={javeraLogo} alt="JAVERA STUDIO" style={{ width: 14, height: 14, opacity: 0.5, borderRadius: "50%" }} />
              Webdesign by <span style={{ letterSpacing: "2px" }}>JAVERA STUDIO</span>
            </a>
          </div>
        </W>
      </footer>



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
