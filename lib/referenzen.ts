// Alle Referenz-Projekte (reale Daten von der alten Website).
export type Material = "ETFE" | "PVC" | "PTFE" | "Netz";

export type Reference = {
  name: string;
  location: string;
  country: string; // ISO-ähnlich für Filter
  material: Material;
  detail: string;
  image: string;
  full: string;
  featured?: boolean;
};

const POOL = [
  "photo-1473341304170-971dccb5ac1e",
  "photo-1518005020951-eccb494ad742",
  "photo-1487958449943-2429e8be8625",
  "photo-1449157291145-7efd050a4d0e",
  "photo-1486406146926-c627a92ad1ab",
  "photo-1431576901776-e539bd916ba2",
  "photo-1581094794329-c8112a89af12",
  "photo-1504307651254-35680f356dfd",
];
const img = (i: number, w: number) =>
  `https://images.unsplash.com/${POOL[i % POOL.length]}?auto=format&fit=crop&w=${w}&q=75`;

const raw: Omit<Reference, "image" | "full">[] = [
  { name: "ThyssenKrupp Testturm", location: "Rottweil", country: "DE", material: "PTFE", detail: "PTFE-Membranfassade", featured: true },
  { name: "HSV-Campus", location: "Hamburg", country: "DE", material: "PTFE", detail: "PTFE-Konstruktion", featured: true },
  { name: "Elefantenhaus", location: "Dresden", country: "DE", material: "ETFE", detail: "ETFE-Neueindeckung", featured: true },
  { name: "FRBC-Center", location: "Kopenhagen", country: "DK", material: "ETFE", detail: "ETFE-Kissendach (Mall)", featured: true },
  { name: "Private School", location: "Al'Ain", country: "UAE", material: "PTFE", detail: "PTFE-Schulhofüberdachung", featured: true },
  { name: "NCL Breakaway", location: "New York", country: "US", material: "PVC", detail: "PVC-Sonnensegel", featured: true },
  { name: "Aquaworld Ramada", location: "Budapest", country: "HU", material: "ETFE", detail: "ETFE-Kissen · Inspektion/Reparatur" },
  { name: "Alliander", location: "Duiven", country: "NL", material: "ETFE", detail: "ETFE-Kissendach" },
  { name: "Alliander — Fassade", location: "Duiven", country: "NL", material: "PVC", detail: "PVC-Membranfassade" },
  { name: "Noas", location: "Stuttgart", country: "DE", material: "PTFE", detail: "PTFE-Innenhofüberdachung" },
  { name: "Industriehalle", location: "Offenburg", country: "DE", material: "PVC", detail: "PVC-Industriehalle" },
  { name: "Freilichtbühne", location: "Bad Bentheim", country: "DE", material: "PVC", detail: "PVC-Dachkonstruktion" },
  { name: "Sternwarte", location: "Bochum", country: "DE", material: "PVC", detail: "Inspektion & Reinigung" },
  { name: "Kunstmuseum", location: "Bonn", country: "DE", material: "PVC", detail: "PVC-Demontage" },
  { name: "Arbeitsplattformnetz", location: "Ottawa", country: "CA", material: "Netz", detail: "Arbeitsplattform-/Sicherungsnetz" },
];

export const references: Reference[] = raw.map((r, i) => ({
  ...r,
  image: img(i, 900),
  full: img(i, 2000),
}));

export const featuredReferences = references.filter((r) => r.featured);

export const materials: Material[] = ["ETFE", "PVC", "PTFE", "Netz"];
export const countries = Array.from(new Set(references.map((r) => r.country)));
