import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${company.name}, ${company.city} – Anbieterkennzeichnung nach § 5 DDG.`,
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <PageShell
      title="Impressum"
      lead="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      breadcrumbs={[{ label: "Impressum", href: "/impressum" }]}
    >
      <div className="legal">
        <h2>Diensteanbieter</h2>
        <p>
          <strong>{company.name}</strong>
          <br />
          Inhaber: {company.owner}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={company.phoneHref}>{company.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>

        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          <strong>DE 271 374 485</strong>
        </p>

        <h2>Zuständige Kammer</h2>
        <p>
          Handwerkskammer Münster
          <br />
          Betriebsnummer: 41531657
        </p>

        <h2>Berufsbezeichnung</h2>
        <p>
          Eingetragener Handwerksbetrieb
          <br />
          Verliehen in: Deutschland
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          {company.owner}
          <br />
          {company.street}, {company.zip} {company.city}
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung &amp; Urheberrecht</h2>
        <p>
          Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht.
        </p>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-neutral-500">
          Hinweis (nicht Teil des Impressums): Dieser Text wird vor dem Livegang
          durch den Seitenbetreiber bzw. einen seriösen Generator/Anwalt final
          geprüft.
        </p>
      </div>
    </PageShell>
  );
}
