// Zentrale Seiten-/Firmendaten — eine Quelle der Wahrheit (DRY).
// Reale Daten aus Impressum/Über-uns von montageservice-duttle.de.

export const company = {
  name: "Montageservice Duttle",
  shortName: "Duttle",
  owner: "Björn Duttle",
  claim: "Spezialist für Arbeiten in der Höhe",
  street: "Gigasstr. 44a",
  zip: "48153",
  city: "Münster",
  country: "DE",
  phone: "+49 174 1708926",
  phoneHref: "tel:+491741708926",
  email: "info@montageservice-duttle.de",
  founded: 2011,
} as const;

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

// Sitemap nach Briefing (Money-Page je Leistung) – Slugs SEO-freundlich.
export const navItems: NavItem[] = [
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Membranbau", href: "/leistungen/membranbau", desc: "Textile Architektur · ETFE · PVC · PTFE" },
      { label: "Industrieklettern", href: "/leistungen/industrieklettern", desc: "Seilzugangstechnik nach FISAT & IRATA" },
      { label: "Spezialmontagen", href: "/leistungen/spezialmontagen", desc: "Sonderkonstruktionen, gewerkeübergreifend" },
      { label: "Industrie- & Höhenreinigung", href: "/leistungen/reinigung", desc: "Membran- & Glasreinigung ohne Gerüst" },
      { label: "Inspektion & Wartung", href: "/leistungen/inspektion-wartung", desc: "Prüfung, Doku & Reparatur" },
    ],
  },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Presse", href: "/presse" },
  { label: "Kontakt", href: "/kontakt" },
];

export const cta = { label: "Projekt anfragen", href: "/kontakt" };

// "Bekannt aus" – reale Presse-/Referenz-Nennungen (Quelle: alte Website).
export const pressMentions = [
  "DMAX",
  "Südkurier",
  "Mittelbayerische",
  "ThyssenKrupp",
  "HSV",
  "Alliander",
] as const;

// Hero-Kennzahlen ("Zahlen > Adjektive", B2B).
export const heroKpis = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "~70 m", label: "Einsatzhöhe · Hegau-Tower" },
  { value: "7", label: "Länder Referenzen" },
  { value: "2 Seile", label: "redundante Sicherung" },
] as const;
