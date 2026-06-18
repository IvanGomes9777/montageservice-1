import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import KontaktForm from "@/components/KontaktForm";
import MapEmbed from "@/components/MapEmbed";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Anfrage an ${company.name} in ${company.city}: Projekt schildern, Rückruf anfordern. Antwort in der Regel innerhalb von 24 Stunden.`,
  alternates: { canonical: "https://www.montageservice-duttle.de/kontakt" },
};

export default function KontaktPage() {
  return (
    <PageShell
      title="Projekt anfragen"
      lead="Schildern Sie uns kurz Ihr Vorhaben — wir melden uns in der Regel innerhalb von 24 Stunden."
      breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      contentClassName="max-w-5xl"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Formular */}
        <div>
          <KontaktForm />
        </div>

        {/* Kontaktdaten + Karte */}
        <aside className="flex flex-col gap-8">
          <div>
            <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-wide text-white">
              Direkt erreichbar
            </h2>
            <ul className="flex flex-col gap-4 text-neutral-300">
              <li>
                <span className="block font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                  Adresse
                </span>
                {company.name}
                <br />
                {company.street}, {company.zip} {company.city}
              </li>
              <li>
                <span className="block font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                  Telefon / WhatsApp
                </span>
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <span className="block font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                  E-Mail
                </span>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <span className="block font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                  Antwortzeit
                </span>
                in der Regel &lt; 24 h
              </li>
            </ul>
          </div>

          <MapEmbed />
        </aside>
      </div>
    </PageShell>
  );
}
