import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere",
  description: `Werde Teil von ${company.name}: Wir suchen international qualifizierte Höhenarbeiter und Monteure. Bewirb dich per E-Mail.`,
  alternates: { canonical: "https://www.montageservice-duttle.de/karriere" },
};

export default function KarrierePage() {
  return (
    <PageShell
      title="Arbeiten in der Höhe — bei uns"
      lead="Wir sind international auf der Suche nach qualifizierten Arbeitskräften."
      breadcrumbs={[{ label: "Karriere", href: "/karriere" }]}
      contentClassName="max-w-3xl"
    >
      <div className="legal">
        <p>
          Schwindelfrei, zuverlässig und bereit, dort anzupacken, wo andere
          aufhören? Wir erweitern unser Team kontinuierlich und suchen Menschen, die
          mit uns an textilen Bauwerken und in luftiger Höhe arbeiten wollen.
        </p>

        <h2>Wen wir suchen</h2>
        <ul>
          <li>Höhenarbeiter / Industriekletterer (FISAT oder IRATA von Vorteil)</li>
          <li>Monteure für Membranbau &amp; Spezialmontagen</li>
          <li>Quereinsteiger mit handwerklichem Geschick &amp; Schwindelfreiheit</li>
        </ul>

        <h2>Was wir bieten</h2>
        <ul>
          <li>Abwechslungsreiche Projekte im In- und Ausland</li>
          <li>Stetige Weiterbildung in Fachthemen &amp; Zertifizierungen</li>
          <li>Ein eingespieltes, gewerkeübergreifendes Team</li>
        </ul>

        <h2>So bewirbst du dich</h2>
        <p>
          Sende deine Bewerbung einfach per E-Mail an{" "}
          <a href={`mailto:${company.email}?subject=Bewerbung`}>{company.email}</a>{" "}
          (Betreff: Bewerbung). Wir melden uns zeitnah bei dir.
        </p>
      </div>

      <a
        href={`mailto:${company.email}?subject=Bewerbung`}
        className="clip-cta mt-10 inline-block bg-duttle-yellow px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-transform duration-200 hover:-translate-y-0.5"
      >
        Jetzt bewerben
      </a>
    </PageShell>
  );
}
