// Presse-Erwähnungen (reale Quellen von der alten Website).
export type PressItem = {
  outlet: string;
  title: string;
  desc: string;
};

export const pressArticles: PressItem[] = [
  {
    outlet: "DMAX",
    title: "Helden der Baustelle",
    desc: "TV-Reportage über die Montage eines ETFE-Kissendachs am SMS Campus in Mönchengladbach.",
  },
  {
    outlet: "Südkurier",
    title: "Industriekletterer putzen die Fassade des Hegau-Towers",
    desc: "Fünf Industriekletterer reinigen die Außenscheiben des Hegau-Towers in fast 70 Metern Höhe.",
  },
  {
    outlet: "Südkurier",
    title: "Ein Wahrzeichen mit Fernsicht – 10 Jahre Hegau-Tower",
    desc: "Bericht zum zehnjährigen Bestehen des Hegau-Towers, inklusive Abseilaktion vom Turm.",
  },
  {
    outlet: "Mittelbayerische Zeitung",
    title: "Zeltdach der Anlegestelle strahlt wieder",
    desc: "Reinigung des Membrandachs der Schiffsanlegestelle in Kelheim.",
  },
];
