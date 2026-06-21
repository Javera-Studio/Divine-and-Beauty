"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

const C = { bg1: "#FFF7F2", bg2: "#F7EDE7", pink: "#D98FA8", gold: "#D6B76D", text: "#3A3034", muted: "#7D6B70" };

export function ContactForm() {
  const [cform, setCform] = useState({ name: "", email: "", betreff: "", nachricht: "", datenschutz: false });
  const [cSending, setCsending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCsending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cform.name, email: cform.email, subject: cform.betreff, message: cform.nachricht }),
      });
      if (res.ok) {
        toast.success("Nachricht gesendet! Wir melden uns bald bei dir.");
        setCform({ name: "", email: "", betreff: "", nachricht: "", datenschutz: false });
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Fehler beim Senden. Bitte versuche es erneut.");
    } finally {
      setCsending(false);
    }
  };

  const inputStyle: React.CSSProperties = { width: "100%", background: C.bg1, border: "1px solid rgba(214,183,109,0.22)", borderRadius: 10, padding: "10px 14px", fontSize: 14, color: C.text, fontFamily: "DM Sans, sans-serif", outline: "none", boxSizing: "border-box" };

  return (
    <form onSubmit={handleSubmit} style={{ background: C.bg2, borderRadius: 20, border: "1px solid rgba(214,183,109,0.18)", padding: "28px 24px" }}>
      <div className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 20 }}>Schreib uns</div>
      <div className="dv-cform-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
        <div>
          <div className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>Name</div>
          <input type="text" required value={cform.name} onChange={e => setCform(p => ({ ...p, name: e.target.value }))} placeholder="Dein Name" style={inputStyle} />
        </div>
        <div>
          <div className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>E-Mail</div>
          <input type="email" required value={cform.email} onChange={e => setCform(p => ({ ...p, email: e.target.value }))} placeholder="deine@email.at" style={inputStyle} />
        </div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>Betreff</div>
        <input type="text" required value={cform.betreff} onChange={e => setCform(p => ({ ...p, betreff: e.target.value }))} placeholder="Worum geht's?" style={inputStyle} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <div className="dm" style={{ color: C.muted, fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>Nachricht</div>
        <textarea required rows={4} value={cform.nachricht} onChange={e => setCform(p => ({ ...p, nachricht: e.target.value }))} placeholder="Deine Nachricht…" style={{ ...inputStyle, resize: "vertical" }} />
      </div>
      <div style={{ marginBottom: 20, display: "flex", alignItems: "flex-start", gap: 10 }}>
        <input type="checkbox" id="dsgvo" required checked={cform.datenschutz} onChange={e => setCform(p => ({ ...p, datenschutz: e.target.checked }))} style={{ marginTop: 3, accentColor: C.pink, flexShrink: 0, width: 15, height: 15, cursor: "pointer" }} />
        <label htmlFor="dsgvo" className="dm" style={{ color: C.muted, fontSize: 12, lineHeight: 1.6, cursor: "pointer" }}>
          Ich habe die{" "}
          <a href="/datenschutz" style={{ color: C.pink, textDecoration: "underline" }}>Datenschutzerklärung</a>
          {" "}gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>
      <button
        type="submit"
        disabled={cSending}
        className="btn-pk"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, fontSize: 14, fontWeight: 500, cursor: cSending ? "not-allowed" : "pointer", opacity: cSending ? 0.7 : 1 }}
      >
        <Send size={15} strokeWidth={1.5} />
        <span>{cSending ? "Wird gesendet…" : "Nachricht senden"}</span>
      </button>
    </form>
  );
}
