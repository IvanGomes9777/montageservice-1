import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { pressArticles } from "@/lib/presse";

export const metadata: Metadata = {
  title: "Presse",
  description:
    "Montageservice Duttle in den Medien: DMAX (Helden der Baustelle), Südkurier (Hegau-Tower) und Mittelbayerische Zeitung.",
  alternates: { canonical: "https://www.montageservice-duttle.de/presse" },
};

export default function PressePage() {
  return (
    <PageShell
      title="Presse"
      lead="Über unsere Einsätze wurde berichtet — im TV und in der Tagespresse."
      breadcrumbs={[{ label: "Presse", href: "/presse" }]}
      contentClassName="max-w-4xl"
    >
      <ul className="flex flex-col gap-px border border-white/10 bg-white/10">
        {pressArticles.map((a, i) => (
          <li key={i} className="bg-duttle-black p-6 transition-colors hover:bg-white/5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-duttle-yellow px-2.5 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-duttle-black">
                {a.outlet}
              </span>
              <h2 className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                {a.title}
              </h2>
            </div>
            <p className="mt-2 max-w-[65ch] text-neutral-300">{a.desc}</p>
            {a.links && (
              <ul className="mt-4 flex flex-col gap-2">
                {a.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-duttle-yellow underline underline-offset-2 hover:text-white"
                    >
                      {l.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <CtaBanner className="mt-12" />
    </PageShell>
  );
}
