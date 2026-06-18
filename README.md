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
- 🔄 Sektion 1 — Navbar/Header: `previews/01-navbar-optionen.html` (5 Optionen, in Review)
