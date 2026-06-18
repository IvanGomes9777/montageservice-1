import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${company.name} – Informationen nach Art. 13 DSGVO.`,
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <PageShell
      title="Datenschutzerklärung"
      lead="Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO."
      breadcrumbs={[{ label: "Datenschutz", href: "/datenschutz" }]}
    >
      <div className="legal">
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          <strong>{company.name}</strong>, {company.owner}
          <br />
          {company.street}, {company.zip} {company.city}
          <br />
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
          <br />
          Telefon: <a href={company.phoneHref}>{company.phone}</a>
        </p>

        <h2>2. Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei der Vercel Inc. (USA) gehostet. Beim Aufruf
          werden technisch notwendige Daten (insbesondere die IP-Adresse) in
          Server-/Edge-Logs verarbeitet, um die Auslieferung und Sicherheit zu
          gewährleisten (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse).
          Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag (Art. 28
          DSGVO); für die Übermittlung in die USA dienen das EU-US Data Privacy
          Framework bzw. Standardvertragsklauseln als Grundlage.
        </p>

        <h2>3. Server-Logfiles</h2>
        <p>
          Bei jedem Zugriff werden automatisch Informationen erfasst, die Ihr
          Browser übermittelt: Browsertyp/-version, Betriebssystem, Referrer-URL,
          Uhrzeit der Anfrage und IP-Adresse. Rechtsgrundlage ist das
          berechtigte Interesse an einem sicheren, störungsfreien Betrieb (Art. 6
          Abs. 1 lit. f DSGVO).
        </p>

        <h2>4. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, werden Ihre
          Angaben zur Bearbeitung der Anfrage verarbeitet (Art. 6 Abs. 1 lit. b
          DSGVO bei vertraglichem Bezug, sonst lit. f). Die Daten werden gelöscht,
          sobald sie nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>5. Schriftarten</h2>
        <p>
          Die verwendeten Schriftarten werden <strong>lokal (self-hosted)</strong>{" "}
          ausgeliefert. Es findet <strong>kein</strong> Verbindungsaufbau zu
          Google-Servern statt; es werden hierfür keine personenbezogenen Daten an
          Dritte übertragen.
        </p>

        <h2>6. Cookies &amp; Einwilligung</h2>
        <p>
          Diese Website verwendet ausschließlich technisch notwendige Mechanismen.
          Es werden derzeit <strong>keine</strong> nicht-essenziellen Cookies,
          kein Tracking und keine eingebetteten Drittinhalte (z. B. Karten,
          Videos) ohne Ihre Einwilligung geladen. Sobald solche Dienste
          eingesetzt werden, erfolgt dies erst nach aktiver Einwilligung (§ 25
          TDDDG) über ein Consent-Tool mit gleichwertiger Ablehnen-Option.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>Sie haben nach der DSGVO folgende Rechte:</p>
        <ul>
          <li>Auskunft (Art. 15)</li>
          <li>Berichtigung (Art. 16)</li>
          <li>Löschung (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>Widerspruch (Art. 21) sowie Widerruf erteilter Einwilligungen</li>
        </ul>
        <p>
          Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
          zu beschweren (Art. 77 DSGVO).
        </p>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-neutral-500">
          Hinweis (nicht Teil der Erklärung): Diese Datenschutzerklärung ist eine
          technische Vorlage und bildet die aktuell eingesetzten Dienste ab. Vor
          dem Livegang wird sie durch den Verantwortlichen bzw. einen seriösen
          Generator/Anwalt final geprüft und an tatsächlich genutzte Tools
          angepasst.
        </p>
      </div>
    </PageShell>
  );
}
