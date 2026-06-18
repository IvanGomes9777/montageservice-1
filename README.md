# Montageservice Duttle — Website-Redesign

Neubau & Optimierung der Website von **Montageservice Duttle** (Münster) —
Spezialist für Arbeiten in der Höhe: **Membranbau · Industrieklettern ·
Spezialmontagen · Industrie-/Höhenreinigung**.

Ablösung der bestehenden CM4all-Baukastenseite durch einen modernen,
performanten, DSGVO-konformen Stack.

## Tech-Stack (geplant)
- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** (Animationen)
- Fonts self-hosted via `next/font` (DSGVO)
- Deploy: GitHub → **Vercel**

## Arbeitsweise
Strikt **Sektion für Sektion**. Vor jeder Sektion werden 5 Design-Optionen
als interaktive Live-Previews zur Auswahl gestellt.

## Verzeichnisse
- `previews/` — interaktive HTML-Design-Vergleiche pro Sektion (zur Auswahl,
  noch keine Produktions-Komponenten).

### Aktueller Stand
- ✅ Ist-Analyse der Altseite (Inhalt, Technik, SEO/GEO, Compliance)
- ✅ Sektion 1 — Navbar/Header: **Option 02 „Industrie & Höhe / Bold"**
  (`components/Navbar.tsx`)
- ✅ Sektion 2 — Hero: **Option 01 „Fullscreen Impact"** mit Ken-Burns-Bild,
  Stagger-Reveal, KPIs & „Bekannt aus"-Trust-Streifen
  (`components/Hero.tsx`, `components/TrustStrip.tsx`)
- ✅ Sektion 3 — Leistungen: **Option 01 „Bold Cards Grid"** (lückenlos
  gefülltes Raster, Service-Schema/JSON-LD) (`components/Leistungen.tsx`)
- ✅ Sektion 4 — Referenzen: **Option 01 „Project Grid"** mit Klick-Lightbox
  (Vollbild, Pfeil-Navigation, ESC) (`components/Referenzen.tsx`)
- ✅ Sektion 5 — Sicherheit & Qualität: **Option 02 „Split + Checkliste"**
  + wiederverwendbarer CTA-Banner (`components/Sicherheit.tsx`, `CtaBanner.tsx`)
- ✅ Sektion 6 — Footer: **Option 02 „Mega Wordmark"** mit DSGVO-Pflichtlinks
  (`components/Footer.tsx`)
- ✅ **Startseite komplett (6/6 Sektionen)**
- ✅ DSGVO/SEO-Basis: robots.txt, sitemap.xml, Organization/LocalBusiness-Schema
- ✅ Rechtsseiten: Impressum (§ 5 DDG), Datenschutz (Art. 13 DSGVO)
- ✅ Leistungs-Money-Pages (5) + Übersicht — answer-first, FAQ-/Service-Schema
- ✅ Kontaktseite + DSGVO-Formular (Honeypot, Klick-to-load-Karte)
- ✅ Referenzen-Vollseite (15 Projekte, filterbar, Lightbox)
- ✅ Über uns · Presse · Karriere

### Routen
`/` · `/leistungen` (+5 Money-Pages) · `/referenzen` · `/ueber-uns` ·
`/presse` · `/karriere` · `/kontakt` · `/impressum` · `/datenschutz` ·
`/robots.txt` · `/sitemap.xml`

### Offen / vor Livegang
- Echte Projektfotos statt Unsplash-Platzhalter
- Rechtstexte final prüfen (Generator/Anwalt)
- Mailversand im Kontaktformular anbinden (z. B. Resend)
- Echte Social-URLs, ggf. Versicherungssumme/BG-Bau ergänzen

## Lokal starten
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production-Build
```
