import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Diamond } from "lucide-react";
import { NavbarSimple } from "@/components/Navbar";
import { PriceFilter } from "@/components/PriceFilter";

export const metadata: Metadata = {
  title: "Preise – Divine Beauty & Nails Studio Wien",
  description: "Transparente Preisliste: Gelmodellage ab 50 €, Shellac ab 37 €, Pediküre ab 44 €, Waxing ab 10 €. Divine Beauty & Nails Studio Wien 1200.",
  alternates: { canonical: "https://divinenails.at/preise" },
};

const C = { bg1: "#FFF7F2", pink: "#D98FA8", gold: "#D6B76D", text: "#3A3034", muted: "#7D6B70" };

export default function Preise() {
  return (
    <div className="dm" style={{ background: C.bg1, color: C.text, minHeight: "100vh" }}>
      <NavbarSimple />

      <section style={{ paddingTop: 120, paddingBottom: 64, background: "linear-gradient(135deg,#FFF7F2 0%,#F7EDE7 50%,#FBEAF3 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <div className="dm" style={{ color: C.pink, fontSize: 11, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 14 }}>Divine Beauty &amp; Nails Studio</div>
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
            * Preisänderungen vorbehalten. Bei individuellen Wünschen beraten wir dich gerne persönlich.
          </p>
          <p className="dm" style={{ color: C.muted, fontSize: 11, margin: "10px auto 0", opacity: 0.6 }}>
            Preise zuletzt aktualisiert am 12.07.2026
          </p>
        </div>
      </section>

      <PriceFilter />
    </div>
  );
}
