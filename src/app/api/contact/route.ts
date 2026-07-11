import { NextRequest, NextResponse } from "next/server";
import { getClientIp, isRateLimited, isValidEmail } from "@/lib/rate-limit";

const TO_EMAIL = "kontakt@divinenails.at";

export async function POST(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }, { status: 429 });
  }

  let body: { name?: string; email?: string; subject?: string; message?: string; hp_company?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültiges JSON" }, { status: 400 });
  }

  const { name, email, subject, message, hp_company } = body;

  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Stiller Erfolg, keine Fehlermeldung.
  if (hp_company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  if (name.length > 120 || (subject?.length ?? 0) > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Eingaben sind zu lang" }, { status: 400 });
  }

  const key = (process.env.RESEND_API_KEY ?? "").trim();
  if (!key) {
    return NextResponse.json({ error: "Serverkonfiguration fehlt" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Divine Beauty & Nails Studio <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: subject ? `Kontaktanfrage: ${subject}` : "Neue Kontaktanfrage",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Betreff:</strong> ${subject ?? "–"}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    const data = await res.json() as { id?: string; error?: { message: string } };

    if (!res.ok) {
      console.error("[contact] Resend Fehler:", data);
      return NextResponse.json({ error: data.error?.message ?? "Fehler beim Senden" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[contact] Netzwerkfehler:", detail);
    return NextResponse.json({ error: "Netzwerkfehler" }, { status: 500 });
  }
}
