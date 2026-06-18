import Link from "next/link";
import { company, cta } from "@/lib/site";

/**
 * Wiederverwendbarer CTA-Banner (Schwarz/Gelb, abgeschnittene Ecken).
 */
export default function CtaBanner({
  title = "Bereit für Ihr Projekt in der Höhe?",
  subtitle = "Antwort in der Regel < 24 h.",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={
        "clip-banner flex flex-wrap items-center justify-between gap-5 bg-duttle-yellow p-6 text-duttle-black sm:p-9 " +
        className
      }
    >
      <div>
        <h3 className="font-display text-xl font-black uppercase leading-none tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 font-semibold">{subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={cta.href}
          className="bg-duttle-black px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          {cta.label}
        </Link>
        <a
          href={company.phoneHref}
          className="border-2 border-duttle-black px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-colors duration-200 hover:bg-duttle-black hover:text-white"
        >
          ☎ {company.phone}
        </a>
      </div>
    </div>
  );
}
