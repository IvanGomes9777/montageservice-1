import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import ReferenzenGrid from "@/components/ReferenzenGrid";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Referenzprojekte von Montageservice Duttle – Membranbau, Industrieklettern & Reinigung in 7 Ländern: ThyssenKrupp Testturm, HSV-Campus, Elefantenhaus Dresden u. v. m.",
  alternates: { canonical: "https://www.montageservice-duttle.de/referenzen" },
};

export default function ReferenzenPage() {
  return (
    <PageShell
      title="Referenzen"
      lead="Von Rottweil bis New York — in 7 Ländern im Einsatz. Filtern Sie nach Material oder Land und klicken Sie ein Projekt für die Großansicht."
      breadcrumbs={[{ label: "Referenzen", href: "/referenzen" }]}
      contentClassName="max-w-6xl"
    >
      <ReferenzenGrid />
      <CtaBanner className="mt-12" title="Ihr Projekt als nächste Referenz?" />
    </PageShell>
  );
}
