@AGENTS.md

# AEO (Answer Engine Optimization) Standards für JAVERA Next.js Projekte

Canonical/Single Source of Truth: [Javera-Studio/javera-dev-standards](https://github.com/Javera-Studio/javera-dev-standards) (AEO-STANDARDS.md). Diese Kopie hier ist die für dieses Repo verbindliche, git-getrackte Fassung — bei Änderungen am Standard beide Stellen synchron halten.

Gilt zusätzlich zu den bestehenden SEO- und Security-Standards. AEO baut auf sauberem SEO auf, ersetzt es nicht — technische SEO-Basis (Sitemap, robots.txt, Ladezeit, Crawlbarkeit) bleibt Voraussetzung.

Ziel: Inhalte so strukturieren, dass ChatGPT, Google AI Overviews, Perplexity, Gemini & Co. sie direkt als Antwort extrahieren und zitieren können — nicht nur klassisches Ranking.

## 1. FAQ-Content + FAQPage-Schema (höchster Hebel, immer umsetzen)

- Jede Kunden-Landingpage (Studio-Startseite, Leistungsseiten wie "Permanent Make-up", "Nagelstudio", "Kosmetik") bekommt einen FAQ-Abschnitt mit echten Kundenfragen — nicht generisch, sondern konkret zur Branche/zum Angebot (z. B. "Wie lange hält Permanent Make-up?", "Was kostet eine Maniküre in Wien?", "Tut PMU weh?")
- FAQ-Fragen vor Umsetzung kurz mit der Kundin abstimmen — sie kennt die tatsächlich häufig gestellten Fragen aus der Praxis
- JSON-LD `FAQPage`-Schema für jeden FAQ-Block einbauen (ergänzt die bereits bestehenden Schema-Typen LocalBusiness/BeautySalon/Service/Review)
- Nach Umsetzung: Schema mit Google Rich Results Test validieren, bevor es live geht — fehlerhaftes Schema schadet mehr als gar keins

## 2. „Answer-First"-Struktur in Content-Blöcken

- Jeder inhaltliche Abschnitt beginnt mit der direkten Antwort in 1–2 Sätzen (ca. 40–60 Wörter), erst danach Kontext, Ausschmückung, Storytelling
- Kein "Storytelling zuerst, Antwort versteckt am Ende" — das erschwert die Extraktion für KI-Engines UND ist für ungeduldige menschliche Leser genauso besser
- Gilt besonders für: Leistungsbeschreibungen, Preisangaben, Behandlungsabläufe, Vorher/Nachher-Erklärungen

## 3. Überschriften-Struktur an echten Fragen ausrichten

- H2/H3-Überschriften so formulieren, wie eine Kundin tatsächlich fragen würde — nicht "Preise", sondern "Was kostet Permanent Make-up in Wien?"
- Überschriften-Hierarchie sauber halten (H1 → H2 → H3, keine Sprünge) — hilft sowohl klassischem SEO als auch AEO-Extraktion

## 4. Strukturierte Formate statt Fließtext, wo möglich

- Preisübersichten → Tabelle, nicht Fließtext-Aufzählung
- Behandlungsschritte/Abläufe → nummerierte Liste
- Leistungsvergleiche (z. B. "Klassisches Microblading vs. Ombré Brows") → Vergleichstabelle
- Prosa-Absätze nur dort belassen, wo echte Erklärung/Storytelling nötig ist (Über-uns-Texte, Markengeschichte)

## 5. Entity-Konsistenz (NAP + Branding)

- Name, Adresse, Öffnungszeiten (NAP) müssen exakt identisch sein auf: Website, Google Business Profile, Instagram-Bio, Treatwell-Profil, Facebook
- Firmenname immer in derselben Schreibweise verwenden — keine Varianten zwischen Kanälen
- Bei jedem neuen Projekt: NAP-Konsistenz als festen Punkt in der Launch-Checkliste mit aufnehmen

## 6. Speakable-Schema (optional, für lokale Sprachsuche)

- Bei Projekten mit starkem lokalem Suchfokus: `Speakable`-Schema für kurze, klar formulierte Kernaussagen ergänzen (Adresse, Öffnungszeiten, Kernleistung)
- Kein Standard-Muss bei jedem Projekt, aber sinnvoll bei Kunden mit Fokus auf lokale/Voice-Suche

## 7. Freshness-Signal

- Sichtbares "Zuletzt aktualisiert"-Datum bei Leistungsseiten/Preislisten dort einbauen, wo technisch sinnvoll (z. B. Preisseite) — Freshness ist ein messbarer Faktor dafür, ob KI-Engines eine Seite als Zitat-Quelle wählen
- Bei Preisänderungen: Datum aktiv mit aktualisieren, nicht nur den Preis ändern

## 8. Off-Page (an Kunden weitergeben, nicht Code-Aufgabe)

- Google-Rezensionen, Treatwell-Bewertungen und Instagram-Erwähnungen aktiv fördern — zählen als externe Vertrauenssignale für KI-Engines, nicht nur für Menschen
- Bei Partnerschaften (Beauty-Akademien, Coworking Spaces): gegenseitige Erwähnungen/Verlinkungen anstoßen, wo passend

## Kurz-Checkliste bei jedem neuen Projekt

- [ ] FAQ-Sektion mit echten Kundenfragen + FAQPage-Schema
- [ ] Answer-First-Struktur in allen Haupttextblöcken
- [ ] Überschriften als natürliche Fragen formuliert
- [ ] Preise/Abläufe/Vergleiche als Liste oder Tabelle statt Fließtext
- [ ] NAP-Konsistenz über alle Kanäle geprüft
- [ ] Schema mit Google Rich Results Test validiert
- [ ] Freshness-Datum bei Preis-/Leistungsseiten, wo sinnvoll

---

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
