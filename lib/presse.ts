// Presse-Erwähnungen (reale Quellen + Links von/zur Berichterstattung).
export type PressLink = { label: string; href: string };
export type PressItem = {
  outlet: string;
  title: string;
  desc: string;
  links?: PressLink[];
};

export const pressArticles: PressItem[] = [
  {
    outlet: "DMAX",
    title: "Helden der Baustelle",
    desc: "TV-Reportage über die Montage eines ETFE-Kissendachs am SMS Campus in Mönchengladbach.",
  },
  {
    outlet: "Südkurier",
    title: "Industriekletterer reinigen die Fassade des Hegau-Towers",
    desc: "Arbeitseinsatz in fast 70 Metern Höhe: Fünf Industriekletterer reinigen die Außenscheiben des Hegau-Towers.",
    links: [
      {
        label: "Artikel 1: Arbeitseinsatz bei atemberaubender Aussicht",
        href: "https://www.suedkurier.de/region/kreis-konstanz/singen/Arbeitseinsatz-bei-atemberaubender-Aussicht-Industriekletterer-putzen-die-Fassade-des-Hegau-Towers;art372458,9736706",
      },
      {
        label: "Artikel 2: In fast 70 Meter Höhe",
        href: "https://www.suedkurier.de/region/kreis-konstanz/singen/Waghalsiger-Arbeitseinsatz-In-fast-70-Meter-Hoehe-reinigen-fuenf-Industriekletterer-die-Aussenscheiben-des-Hegau-Tower;art372458,9736101",
      },
    ],
  },
  {
    outlet: "Mittelbayerische Zeitung",
    title: "Zeltdach der Anlegestelle strahlt wieder",
    desc: "Reinigung des Membrandachs der Schiffsanlegestelle in Kelheim.",
    links: [
      {
        label: "Zum Artikel",
        href: "https://www.mittelbayerische.de/lokales/landkreis-kelheim/zeltdach-der-anlegestelle-strahlt-wieder-17365289",
      },
    ],
  },
  {
    outlet: "Südkurier",
    title: "Ein Wahrzeichen mit Fernsicht – 10 Jahre Hegau-Tower",
    desc: "Bericht zum zehnjährigen Bestehen des Hegau-Towers, inklusive Abseilaktion vom Turm.",
    links: [
      {
        label: "Zum Artikel",
        href: "https://www.suedkurier.de/region/kreis-konstanz/singen/Ein-Wahrzeichen-mit-Fernsicht-Den-Hegau-Tower-gibt-es-seit-zehn-Jahren;art372458,9893584",
      },
    ],
  },
];
