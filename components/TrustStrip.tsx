import { pressMentions } from "@/lib/site";

/**
 * "Bekannt aus"-Trust-Streifen — reale Presse-/Referenz-Nennungen.
 * Textmarken in Graustufen, beim Hover voll sichtbar. (Echte Logos später.)
 */
export default function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 bg-black/40 px-4 py-4 sm:px-6 lg:px-8 " +
        className
      }
    >
      <span className="whitespace-nowrap font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-duttle-yellow">
        Bekannt aus
      </span>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {pressMentions.map((name) => (
          <li
            key={name}
            className="cursor-default font-display text-sm font-extrabold uppercase tracking-wide text-neutral-300/60 transition-colors duration-200 hover:text-white"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
