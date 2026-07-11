@AGENTS.md

# Security Standards für JAVERA Next.js Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (SECURITY-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung — bei Änderungen am Standard beide Stellen synchron halten.

Diese Standards gelten für **jedes** Next.js-Projekt, das für JAVERA Studio Kunden gebaut wird. Bei Projektstart und vor jedem Production-Deploy prüfen und umsetzen.

## 1. HTTP Security Header (Code-Ebene — immer umsetzen)

In `next.config.js` bzw. `next.config.ts` per `headers()` setzen:

- **Content-Security-Policy (CSP)** — vor dem Setzen IMMER zuerst den Code nach allen extern eingebundenen Ressourcen scannen (Fonts, Analytics-Snippets, Notion-/Elementor-Embeds, Maps-Embeds, Payment-Widgets, Booking-Tools wie Treatwell/Calendly) und die CSP passend dazu bauen. Nie eine generische CSP blind übernehmen — danach lokal testen und Browser-Konsole (F12) auf CSP-Verstöße prüfen.
- **Strict-Transport-Security** — `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options** — `SAMEORIGIN`/`DENY` (Clickjacking-Schutz)
- **X-Content-Type-Options** — `nosniff`
- **Referrer-Policy** — `strict-origin-when-cross-origin`
- **Permissions-Policy** — nicht genutzte Browser-Features explizit sperren (`camera=()`, `microphone=()`, `geolocation=()` außer bei Standort-Feature wie Anfahrtsbeschreibung)

Nach jedem Deploy: Ergebnis mit securityheaders.com gegenchecken (Ziel: mind. Note A).

Umsetzung in diesem Repo: `next.config.ts`.

## 2. CORS

- `Access-Control-Allow-Origin: *` nur setzen, wenn wirklich öffentliche Assets betroffen sind — niemals bei API-Routen mit sensiblen Daten
- Next.js API-Routes: CORS explizit und restriktiv pro Route konfigurieren, nicht global öffnen

## 3. Formulare & API-Routes

- Serverseitige Validierung IMMER zusätzlich zur Client-Validierung
- Rate-Limiting auf API-Routes gegen Spam/Missbrauch
- Honeypot-Feld oder einfaches CAPTCHA gegen Bot-Spam
- Keine API-Keys, SMTP-Zugangsdaten o. ä. im Client-Bundle — nur `NEXT_PUBLIC_`-Prefix für wirklich öffentliche Werte. Alles andere ausschließlich als Server-Env-Variable in Vercel, nie ins Git-Repo committen

Umsetzung in diesem Repo: `src/lib/rate-limit.ts` + Honeypot-Feld `hp_company` in `ContactForm.tsx` und `src/app/api/contact/route.ts`.

## 4. Dependencies

- Vor Projektabschluss: `npm audit` laufen lassen, kritische/hohe Findings fixen
- Dependabot bzw. Vercel-eigene Update-Hinweise aktivieren, wo möglich

## 5. robots.txt, sitemap.xml, security.txt

- `robots.txt` und `sitemap.xml` Standard bei jedem Projekt
- `/.well-known/security.txt` ergänzen (RFC 9116)

Umsetzung in diesem Repo: `src/app/robots.ts`, `src/app/sitemap.ts`, `public/.well-known/security.txt`.

## 6. Mixed Content

- Sicherstellen, dass ALLE eingebundenen Ressourcen über `https://` geladen werden, keine `http://`-Referenzen

## 7. Dinge, die NICHT im Code passieren (manuell prüfen/einstellen)

| Punkt | Wo einstellen | Warum wichtig |
|---|---|---|
| **DNSSEC** | Beim Domain-Registrar | Schützt vor DNS-Spoofing/Cache-Poisoning |
| **DNS CAA-Record** | Beim DNS-Provider | Legt fest, welche CAs Zertifikate ausstellen dürfen |
| **SSL/TLS-Zertifikat** | Bei Vercel automatisch | Auto-Renewal + TLS 1.3 |
| **SPF / DKIM / DMARC** | Beim E-Mail-/DNS-Provider | Schützt die Domain vor E-Mail-Spoofing/Phishing |
| **Malware-/Blacklist-Scan** | Google Safe Browsing, VirusTotal, Sucuri SiteCheck | Bei jedem Webseitencheck durchführen |
| **Registrar-Zugang/2FA** | Beim Registrar | Häufiger Grund für gehackte Kundenseiten |
