"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "divine_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    // Signal to GA component that consent was just given
    window.dispatchEvent(new Event("cookie-consent-accepted"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "min(calc(100vw - 32px), 560px)",
        background: "rgba(42,37,40,0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 16,
        padding: "20px 24px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.28), 0 0 0 1px rgba(214,183,109,0.18)",
        border: "1px solid rgba(214,183,109,0.15)",
      }}
    >
      <p
        className="dm"
        style={{ color: "rgba(255,247,242,0.75)", fontSize: 13, lineHeight: 1.65, margin: "0 0 16px" }}
      >
        Diese Website verwendet technisch notwendige Cookies und Google Analytics zur
        anonymen Auswertung des Nutzungsverhaltens. Deine Daten werden nicht an Dritte
        weitergegeben.{" "}
        <Link href="/datenschutz" style={{ color: "#D6B76D", textDecoration: "underline" }}>
          Datenschutzerklärung
        </Link>
      </p>

      <label
        style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", marginBottom: 18 }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          style={{
            marginTop: 2,
            width: 15,
            height: 15,
            accentColor: "#D6B76D",
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <span className="dm" style={{ color: "rgba(255,247,242,0.65)", fontSize: 12.5, lineHeight: 1.55 }}>
          Ich habe die{" "}
          <Link href="/datenschutz" style={{ color: "#D6B76D", textDecoration: "underline" }}>
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Daten (inkl. Google Analytics) zu.
        </span>
      </label>

      <button
        onClick={accept}
        disabled={!checked}
        className="btn-pk"
        style={{
          width: "100%",
          padding: "11px 0",
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          cursor: checked ? "pointer" : "not-allowed",
          opacity: checked ? 1 : 0.45,
          transition: "opacity .2s",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "#D6B76D", marginRight: 8 }}>✦</span>
        Verstanden &amp; akzeptieren
      </button>
    </div>
  );
}
