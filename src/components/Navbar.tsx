"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WA_URL =
  "https://wa.me/436763633721?text=" +
  encodeURIComponent("Hallo Divine Beauty & Nails Studio, ich möchte gerne einen Termin anfragen.");

const C = { dark1: "#2A2528", text: "#3A3034", muted: "#7D6B70", gold: "#D6B76D" };

const NAV: { l: string; id?: string; href?: string }[] = [
  { l: "Home", id: "home" },
  { l: "Über uns", id: "ueber" },
  { l: "Leistungen", href: "/leistungen" },
  { l: "Galerie", id: "galerie" },
  { l: "Preise", href: "/preise" },
  { l: "Kontakt", id: "kontakt" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
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
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "17px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div onClick={() => go("home")} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Image
            src="/assets/logonewopt.jpg"
            alt="Divine Beauty Logo"
            width={91}
            height={91}
            className="dv-logo"
            style={{ borderRadius: "50%", objectFit: "cover" }}
            priority
          />
        </div>
        <div className="dv-nd" style={{ gap: 32 }}>
          {NAV.map((n) =>
            n.href ? (
              <Link key={n.href} href={n.href} className="dv-nav-link" style={{ textDecoration: "none" }}>
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
            style={{ background: "rgba(255,255,255,0.7)", border: `1px solid ${C.dark1}`, borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: C.dark1, fontSize: 18, alignItems: "center", justifyContent: "center" }}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(255,247,242,0.98)", borderTop: "1px solid rgba(42,37,40,0.06)", padding: "18px 24px 26px" }}>
          {NAV.map((n) =>
            n.href ? (
              <Link
                key={n.href}
                href={n.href}
                className="dm"
                style={{ display: "block", color: C.text, fontSize: 16, padding: "13px 0", borderBottom: "1px solid rgba(42,37,40,0.06)", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {n.l}
              </Link>
            ) : (
              <button
                key={n.id}
                className="dm"
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", color: C.text, fontSize: 16, padding: "13px 0", borderBottom: "1px solid rgba(42,37,40,0.06)" }}
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
  );
}

export function NavbarSimple() {
  return (
    <nav style={{ background: "rgba(255,247,242,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(42,37,40,0.08)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "17px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src="/assets/logonewopt.jpg" alt="Divine Beauty Logo" width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Link href="/preise" className="dm" style={{ color: "#7D6B70", fontSize: 13, textDecoration: "none", letterSpacing: "0.3px" }}>Preise</Link>
          <a href="/#kontakt" className="dm" style={{ color: "#7D6B70", fontSize: 13, textDecoration: "none", letterSpacing: "0.3px" }}>Kontakt</a>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-pk" style={{ padding: "10px 20px", borderRadius: 999, fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Termin buchen
          </a>
        </div>
      </div>
    </nav>
  );
}
