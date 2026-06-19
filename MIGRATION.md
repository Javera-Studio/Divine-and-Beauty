# Next.js App Router Migration – Arbeitsplan

Branch: `nextjs-migration` (main bleibt unberührt bis Freigabe)

---

## Vorab-Erkenntnisse aus Code-Analyse

| Thema | Befund |
|---|---|
| Analytics/Tracking | Keines — `index.html` hat nur SEO-Meta + Schema.org JSON-LD, kein GA4/Pixel/Cookie-Banner |
| Toast-System | Nur `sonner` wird genutzt (`toast.success/error` in Index.tsx). Der Radix-`<Toaster />` ist gemountet aber nie aufgerufen → wird entfernt |
| Kontaktformular | Bleibt als `api/contact.ts` (Vercel API Route, nicht Server Action). Key liegt server-seitig — Ziel ist erreicht, kein weiterer Umbau nötig |
| React Query | Installiert, `QueryClientProvider` gemountet, aber kein einziger `useQuery`/`useMutation`-Aufruf → wird entfernt |
| Externe Bild-Domains | Keine — alle Bilder sind lokale Assets in `src/assets/` |
| Schema.org JSON-LD | Derzeit in `index.html` als `<script>` — muss nach `app/page.tsx` |

---

## Checkliste: Schritt für Schritt

### 1. Branch & Setup
- [ ] Branch `nextjs-migration` von `main` erstellen
- [ ] Next.js 14+ Projekt initialisieren: `--typescript --tailwind --app --src-dir --import-alias "@/*"`
- [ ] shadcn/ui initialisieren, `components.json` anpassen
- [ ] `@vercel/node` als devDependency hinzufügen
- [ ] `api/contact.ts` aus bestehendem Projekt kopieren
- [ ] `.env.local` übernehmen (`WEB3FORMS_KEY`)
- [ ] **React Query entfernen:** `npm uninstall @tanstack/react-query`
- [ ] **`next.config.ts` anlegen** (Security Headers, kein `images.remotePatterns` nötig da nur lokale Assets):
  ```ts
  const nextConfig = {
    async headers() {
      return [{
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      }]
    },
  }
  ```
- [ ] **`app/sitemap.ts` anlegen:**
  ```ts
  export default function sitemap() {
    return [
      { url: 'https://divinenails.at', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
      { url: 'https://divinenails.at/leistungen', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: 'https://divinenails.at/preise', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: 'https://divinenails.at/impressum', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
      { url: 'https://divinenails.at/datenschutz', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ]
  }
  ```
- [ ] **`app/robots.ts` anlegen:**
  ```ts
  export default function robots() {
    return {
      rules: { userAgent: '*', allow: '/' },
      sitemap: 'https://divinenails.at/sitemap.xml',
    }
  }
  ```
- [ ] **Prüfen:** `npm run build` fehlerfrei

---

### 2. Assets & Styles
- [ ] Alle Bilder aus `src/assets/` nach `public/assets/` kopieren
- [ ] ~650 Zeilen inline-CSS aus `Index.tsx` (useEffect Style-Injection) nach `app/globals.css`
- [ ] Inline-CSS aus `Leistungen.tsx` und `Preise.tsx` ebenfalls nach `globals.css`
- [ ] Fonts (DM Sans, Cormorant Garamond) in `app/layout.tsx` via `next/font/google` laden
- [ ] **Prüfen:** `npm run build` fehlerfrei
- [ ] **Prüfen:** Keine doppelten Klassen-Definitionen (`.dv-*`, `.btn-pk`, `.dm`, `.dv-logo` etc.)

---

### 3. Layout & Providers
- [ ] `app/layout.tsx` (Server Component):
  - `<html lang="de">`
  - Fonts einbinden
  - `<Providers>` Wrapper
  - Schema.org JSON-LD aus alter `index.html` als `<script type="application/ld+json">`
- [ ] `app/providers.tsx` als `'use client'`:
  - **Nur `<Sonner />`** — kein `<Toaster />` (Radix-Toaster wird nicht genutzt)
  - `<TooltipProvider>` (Radix)
  - **Kein `QueryClientProvider`** (React Query wird entfernt)
- [ ] **Prüfen:** `npm run build` fehlerfrei

---

### 4. Einfache Seiten

#### Impressum (`app/impressum/page.tsx`)
- [ ] Inhalt aus `src/pages/Impressum.tsx` übernehmen
- [ ] `export const metadata` statt React Helmet
- [ ] React Router `<Link>` → Next.js `<Link from 'next/link'>`
- [ ] **Prüfen:** Build fehlerfrei

#### Datenschutz (`app/datenschutz/page.tsx`)
- [ ] Inhalt aus `src/pages/Datenschutz.tsx` übernehmen
- [ ] `export const metadata` statt React Helmet
- [ ] Externer `<a href="https://web3forms.com/privacy">` bleibt als normales `<a>`
- [ ] **Prüfen:** Build fehlerfrei

---

### 5. Mittlere Seiten

#### Preise (`app/preise/page.tsx`)
- [ ] Hardcodierte `PRICES`-Daten → `lib/data/prices.ts`
- [ ] Tab-Filter (useState) → eigene `'use client'` Komponente `components/preise/PriceFilter.tsx`
- [ ] **Hydration-Check:** Kein direkter `window`/`document`-Zugriff außerhalb von `useEffect`
- [ ] `export const metadata` für SEO
- [ ] **Prüfen:** Build fehlerfrei, alle Preiskategorien vorhanden

#### Leistungen (`app/leistungen/page.tsx`)
- [ ] Hardcodierte `SERVICES`-Daten → `lib/data/services.ts`
- [ ] `<img>` → `<Image>` von `next/image` mit `width`/`height` oder `fill`
- [ ] Scroll-Animationen: `useEffect` + `IntersectionObserver` bleibt, aber in `'use client'` Komponente kapseln
- [ ] **Hydration-Check:** Kein direkter `window`/`document`-Zugriff außerhalb von `useEffect`
- [ ] `export const metadata` für SEO
- [ ] **Prüfen:** Build fehlerfrei, alle 9 Services vorhanden

---

### 6. Hauptseite Index (komplexeste Datei, 1944 Zeilen)

#### Daten auslagern
- [ ] `STUDIO`, `WA_URL`, `SERVICES`, `PRICES`, `GALLERY`, `REVIEWS` → `lib/data/index-data.ts`

#### Komponenten aufteilen (`components/home/`)
- [ ] `Navbar.tsx` → `'use client'` (menuOpen State, go()-Funktion, Hamburger-Menü)
  - **Hydration-Check:** `go()` nutzt `document.getElementById` → muss in `useEffect` oder Event-Handler, nie im Render
- [ ] `HeroSection.tsx` → `'use client'` (Video-Autoplay-Attribute reichen, kein State nötig → kann Server Component sein)
- [ ] `GalleryMarquee.tsx` → `'use client'` (CSS-Animation, kein JS-State nötig → prüfen ob Server Component reicht)
- [ ] `ReviewsSection.tsx` → Server Component
- [ ] `TeamSection.tsx` → Server Component
- [ ] `ServicesShowcase.tsx` → Server Component
- [ ] `ContactForm.tsx` → `'use client'` (useState für Formularfelder, fetch zu `/api/contact`)
- [ ] `Footer.tsx` → Server Component

#### Page zusammenbauen (`app/page.tsx`)
- [ ] Alle Komponenten importieren
- [ ] `export const metadata` mit allen OG/Twitter-Tags aus alter `index.html`
- [ ] Schema.org JSON-LD bereits in `layout.tsx` — **nicht doppelt** in `page.tsx`
- [ ] Hero-Bild hat `priority` prop bei `next/image` (LCP)
- [ ] **Prüfen:** Build fehlerfrei

---

### 7. 404 Seite
- [ ] `app/not-found.tsx` erstellen
- [ ] `useLocation()` (react-router) → `usePathname()` (next/navigation)
- [ ] **Prüfen:** Build fehlerfrei

---

### 8. Kritische Prüfungen vor finalem Push

#### Hydration-Mismatch (häufigster Bug bei Vite → Next.js)
- [ ] Kein direkter `window`/`document`/`navigator`-Zugriff außerhalb von `useEffect` in allen `'use client'`-Komponenten
- [ ] Kein `typeof window !== 'undefined'`-Check im Render-Pfad (deutet auf verstecktes SSR-Problem hin)
- [ ] Keine zufälligen Werte (`Math.random()`, `Date.now()`) im initialen Render
- [ ] Alle `'use client'`-Komponenten haben identischen Server- und Client-Output beim ersten Render

#### CSS
- [ ] Kein `useEffect` mehr der CSS in `document.head` injiziert
- [ ] Alle Custom-Klassen in `globals.css` vorhanden (`.dv-*`, `.btn-pk`, `.dm`, `.dv-logo`)
- [ ] `.dv-logo { width: 75px !important; height: 75px !important; }` in mobiler Media Query vorhanden
- [ ] Keine doppelten Klassen-Definitionen

#### Bilder
- [ ] Alle lokalen `import xy from "@/assets/..."` auf `next/image` umgestellt
- [ ] `priority` prop für Hero-Bild (above the fold)
- [ ] `alt`-Texte überall vorhanden

#### Routing & Navigation
- [ ] Alle `react-router` `<Link>` → `next/link` `<Link>`
- [ ] `useNavigate` → `useRouter` aus `next/navigation`
- [ ] `useLocation` → `usePathname` aus `next/navigation`
- [ ] `go()` Scroll-Funktion (`document.getElementById(...).scrollIntoView()`) funktioniert in Next.js

#### SEO
- [ ] Jede Seite hat `export const metadata` oder `generateMetadata()`
- [ ] `lang="de"` im `<html>` Tag in `layout.tsx`
- [ ] Canonical URL in `metadata` gesetzt (`alternates: { canonical: '...' }`)
- [ ] OG-Image vorhanden und erreichbar unter `/studio5opt.jpg` (in `public/`)
- [ ] Schema.org JSON-LD in `layout.tsx` vorhanden
- [ ] `app/sitemap.ts` erzeugt `/sitemap.xml`
- [ ] `app/robots.ts` erzeugt `/robots.txt`

#### Aufräumen
- [ ] `react-router-dom` aus dependencies entfernt
- [ ] `react-helmet-async` aus dependencies entfernt
- [ ] `@tanstack/react-query` aus dependencies entfernt
- [ ] `vite`, `@vitejs/plugin-react-swc` aus devDependencies entfernt
- [ ] `vite.config.ts` gelöscht
- [ ] `index.html` (Root) gelöscht
- [ ] Kein `import.meta.env.*` mehr im Code
- [ ] Kein `react-router` Import mehr
- [ ] Kein `react-helmet` Import mehr

---

### 9. Finaler Build-Check

- [ ] `npm run build` ohne Fehler und ohne Warnings
- [ ] `npx tsc --noEmit` — keine TypeScript-Fehler
- [ ] Build-Output prüfen: Sind alle 5 Seiten als statische HTML vorhanden? (`next build` zeigt Route-Tabelle)
- [ ] `/sitemap.xml` und `/robots.txt` in der Route-Tabelle sichtbar

---

### 10. Was du morgen früh testen sollst

Da ich den Browser nicht öffnen kann, bitte diese Punkte manuell prüfen:

**Browser-Konsole (F12 → Console) — das Wichtigste zuerst:**
- [ ] **Keine Hydration-Mismatch-Warnings** (`Warning: Expected server HTML to contain...`)
- [ ] Keine roten Fehler beim Laden

**Visuell:**
- [ ] Logo in Navbar: Desktop 107px, Mobile 75px
- [ ] Hero-Video lädt und spielt ab
- [ ] Galerie-Marquee scrollt automatisch
- [ ] Scroll-Animationen (Elemente blenden ein beim Scrollen)
- [ ] Schriftarten korrekt (DM Sans, Cormorant Garamond)
- [ ] Mobile Hamburger-Menü öffnet/schließt

**Funktional:**
- [ ] Navigation zwischen allen 5 Seiten funktioniert
- [ ] Kontaktformular sendet erfolgreich (Toast erscheint)
- [ ] Preise-Filter wechselt Kategorien korrekt
- [ ] WhatsApp-Button führt zur richtigen Nummer
- [ ] Alle externen Links öffnen im neuen Tab

**SEO (DevTools → Elements → `<head>`):**
- [ ] `<title>` korrekt pro Seite
- [ ] `<meta name="description">` vorhanden
- [ ] OG-Tags vorhanden
- [ ] Schema.org JSON-LD vorhanden
- [ ] `/sitemap.xml` im Browser aufrufbar
- [ ] `/robots.txt` im Browser aufrufbar

---

## Rollback-Plan

Da wir auf Branch `nextjs-migration` arbeiten und `main` unangetastet bleibt:

- Die Live-Site läuft auf `main` unverändert weiter, solange nicht gemergt wird
- Vercel deployt `main` automatisch bei jedem Push — die Domain bleibt verbunden
- **Merge erst nach deiner Freigabe** (du prüfst morgen früh den Branch)
- Falls nach dem Merge doch etwas nicht stimmt: `git revert` des Merge-Commits auf `main` → Vercel deployt automatisch den alten Stand zurück
- Kein DNS-Eingriff nötig — Domain bleibt die ganze Zeit am selben Vercel-Projekt hängen

---

## Bekannte Risiken

| Risiko | Wahrscheinlichkeit | Maßnahme |
|---|---|---|
| Hydration-Mismatch durch `window`/`document` im Render | Mittel | Systematisch alle `'use client'`-Komponenten prüfen, in Schritt 8 |
| CSS-Klassen fehlen nach Umzug von inline zu globals.css | Mittel | Alle `.dv-*` Klassen gegen Original abgleichen |
| `next/image` bricht Galerie-Layout | Mittel | `fill` + `object-fit: cover` statt fixer Pixel-Dimensionen |
| `go()` Scroll-Funktion verhält sich anders | Niedrig | `document.getElementById` funktioniert in Next.js, aber nur client-seitig |
| Fonts laden nicht / falsches Gewicht | Niedrig | `next/font/google` mit exakt denselben `weights` wie im CSS |

---

## Was sich nicht ändert

- Gesamtes Design, alle Farben, alle Abstände
- shadcn/ui Komponenten (bleiben identisch, werden per `npx shadcn@latest add` neu installiert)
- `api/contact.ts` (Vercel API Route, Key bleibt server-seitig)
- Alle Bilder und Assets
- Alle Inhalte (Texte, Preise, Services, Team)
- Domain & Vercel-Projekt-Verbindung
