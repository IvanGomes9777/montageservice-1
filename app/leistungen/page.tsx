import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { leistungen } from "@/lib/leistungen";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Membranbau, Industrieklettern, Spezialmontagen, Industrie- & Höhenreinigung sowie Inspektion & Wartung – alles in der Höhe aus einer Hand.",
  alternates: { canonical: "https://www.montageservice-duttle.de/leistungen" },
};

export default function LeistungenIndex() {
  return (
    <PageShell
      title="Alles in der Höhe — aus einer Hand"
      lead="Fünf Disziplinen, ein Team, ein Ansprechpartner. Wählen Sie eine Leistung für Details."
      breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }]}
      contentClassName="max-w-5xl"
    >
      <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
        {leistungen.map((l, i) => (
          <li key={l.slug}>
            <Link
              href={`/leistungen/${l.slug}`}
              className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden bg-duttle-black p-6"
            >
              <Image
                src={l.image}
                alt=""
                fill
                sizes="(max-width:640px) 100vw, 50vw"
                className="object-cover opacity-30 transition-[opacity,transform] duration-500 group-hover:scale-105 group-hover:opacity-50"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-duttle-black via-duttle-black/70 to-transparent" />
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold text-duttle-yellow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-white">
                  {l.label}
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-300">
                  {l.lead}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <CtaBanner className="mt-12" />
    </PageShell>
  );
}
