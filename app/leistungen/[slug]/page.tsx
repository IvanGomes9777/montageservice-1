import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { company } from "@/lib/site";
import { leistungen, leistungBySlug } from "@/lib/leistungen";

const BASE = "https://www.montageservice-duttle.de";

export function generateStaticParams() {
  return leistungen.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const l = leistungBySlug(params.slug);
  if (!l) return {};
  return {
    title: l.title,
    description: l.lead,
    alternates: { canonical: `${BASE}/leistungen/${l.slug}` },
    openGraph: { title: `${l.title} | ${company.name}`, description: l.lead, images: [l.image] },
  };
}

export default function LeistungPage({ params }: { params: { slug: string } }) {
  const l = leistungBySlug(params.slug);
  if (!l) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: l.title,
        description: l.intro,
        url: `${BASE}/leistungen/${l.slug}`,
        areaServed: ["DE", "EU"],
        provider: { "@id": `${BASE}/#localbusiness` },
      },
      {
        "@type": "FAQPage",
        mainEntity: l.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  const others = leistungen.filter((x) => x.slug !== l.slug);

  return (
    <PageShell
      title={l.title}
      lead={l.lead}
      breadcrumbs={[
        { label: "Leistungen", href: "/leistungen" },
        { label: l.label, href: `/leistungen/${l.slug}` },
      ]}
      contentClassName="max-w-4xl"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Bild */}
      <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden border border-white/10">
        <Image src={l.image} alt={l.title} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" priority />
      </div>

      {/* Answer-first Intro */}
      <p className="mb-12 max-w-[65ch] border-l-2 border-duttle-yellow pl-5 text-lg leading-relaxed text-neutral-200">
        {l.intro}
      </p>

      {/* Sektionen */}
      <div className="legal">
        {l.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((para, i) => <p key={i}>{para}</p>)}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
            {s.table && (
              <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} className="border border-white/10 bg-white/5 p-3 text-left font-display text-xs font-extrabold uppercase tracking-wide text-duttle-yellow">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} className={`border border-white/10 p-3 align-top text-neutral-300 ${ci === 0 ? "font-semibold text-white" : ""}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {/* FAQ */}
        <h2>Häufige Fragen</h2>
        <dl className="mt-2 divide-y divide-white/10 border-y border-white/10">
          {l.faq.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-display text-base font-bold uppercase tracking-tight text-white">
                {f.q}
              </dt>
              <dd className="mt-2 max-w-[65ch] text-neutral-300">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA */}
      <CtaBanner
        title="Projekt in dieser Leistung geplant?"
        subtitle="Kostenlose Einschätzung · Antwort in der Regel < 24 h."
        className="mt-12"
      />

      {/* Weitere Leistungen */}
      <nav aria-label="Weitere Leistungen" className="mt-12">
        <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-wide text-white">
          Weitere Leistungen
        </h2>
        <ul className="flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/leistungen/${o.slug}`}
                className="inline-block border border-white/15 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-duttle-yellow hover:text-duttle-yellow"
              >
                {o.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </PageShell>
  );
}
