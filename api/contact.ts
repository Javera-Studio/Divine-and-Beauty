import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Pflichtfelder fehlen" });
  }

  try {
    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        subject,
        message,
        "Datenschutz akzeptiert": "Ja",
      }),
    });

    if (!upstream.ok) {
      return res.status(502).json({ error: "Fehler beim Senden" });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Serverfehler" });
  }
}
