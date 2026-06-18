import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description: `${company.name} aus ${company.city}, gegründet ${company.founded} von ${company.owner}: Spezialist für textile Bauwerke und Höhenarbeit nach FISAT & IRATA.`,
  alternates: { canonical: "https://www.montageservice-duttle.de/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <PageShell
      title="Über uns"
      lead={`Spezialist für Arbeiten in der Höhe — aus ${company.city}, seit ${company.founded}.`}
      breadcrumbs={[{ label: "Über uns", href: "/ueber-uns" }]}
      contentClassName="max-w-4xl"
    >
      <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden border border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=70"
          alt="Industriekletterer im Einsatz"
          fill
          sizes="(max-width:1024px) 100vw, 60vw"
          className="object-cover"
          priority
        />
      </div>

      <p className="mb-12 max-w-[65ch] border-l-2 border-duttle-yellow pl-5 text-lg leading-relaxed text-neutral-200">
        Montageservice Duttle wurde {company.founded} von {company.owner} gegründet
        und hat sich auf die komplette Abwicklung von Baumaßnahmen an textilen
        Bauwerken aller Art spezialisiert — ETFE, PVC und PTFE sowie Aluminium- und
        Glasfassaden.
      </p>

      <div className="legal">
        <h2>Geht nicht, gibt&apos;s nicht</h2>
        <p>
          Was für andere unerreichbar scheint, ist für uns Alltag. Mit
          Seilzugangstechnik arbeiten wir dort, wo Gerüst und Hubsteiger an ihre
          Grenzen kommen — sicher, schnell und oft im laufenden Betrieb. Von
          historischen, denkmalgeschützten Gebäuden bis zum modernen Neubau.
        </p>

        <h2>Qualifikation &amp; Sicherheit</h2>
        <p>
          Wir entwickeln Zugangskonzepte nach den Standards von <strong>FISAT</strong>{" "}
          und <strong>IRATA</strong> und arbeiten konform zu den DGUV- und
          TRBS-Richtlinien für Höhenarbeiter. Stetige Weiterbildung in Fachthemen
          ist für uns selbstverständlich.
        </p>

        <h2>International vernetzt</h2>
        <p>
          Über ein international aufgestelltes Netzwerk an Nachunternehmern und die
          Zusammenarbeit mit renommierten Bau- und Produktionsunternehmen
          realisieren wir auch komplexe Bauvorhaben — von Deutschland über die
          Niederlande, Dänemark und Ungarn bis in die VAE, die USA und Kanada.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
        {[
          { v: "2011", l: "gegründet" },
          { v: "15+", l: "Jahre Erfahrung" },
          { v: "7", l: "Länder" },
          { v: "FISAT/IRATA", l: "zertifiziert" },
        ].map((k) => (
          <div key={k.l} className="bg-duttle-black p-5">
            <dt className="sr-only">{k.l}</dt>
            <dd>
              <span className="block font-display text-2xl font-black text-duttle-yellow">{k.v}</span>
              <span className="mt-1 block font-mono text-[0.7rem] uppercase tracking-wide text-neutral-400">{k.l}</span>
            </dd>
          </div>
        ))}
      </dl>

      <CtaBanner className="mt-12" />
    </PageShell>
  );
}
