import Link from "next/link";
import {
  company,
  services,
  companyLinks,
  legalLinks,
  socials,
} from "@/lib/site";

/**
 * Footer — Design "Mega Wordmark" (Option 02).
 * Server-Komponente (kein Client-JS): Spalten + großer Outline-Schriftzug
 * (Hover → Gelb), Legal-Bar mit DSGVO-Pflichtlinks.
 */
export default function Footer() {
  // Linkliste mit interner Navigation + externen (mailto/tel/social).
  const col = (
    title: string,
    links: { label: string; href: string }[],
    external = false
  ) => (
    <div>
      <h2 className="mb-4 font-display text-sm font-extrabold uppercase tracking-wide text-white">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) =>
          external ? (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-link"
              >
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.label}>
              <Link href={l.href} className="footer-link">
                {l.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );

  return (
    <footer className="bg-duttle-black text-neutral-300">
      <style>{`.footer-link{font-size:.9rem;color:#aab0b8;position:relative;width:fit-content;display:inline-block;transition:color .2s}.footer-link:hover{color:#fff}.footer-link::after{content:"";position:absolute;left:0;bottom:-2px;height:1px;width:0;background:#FFD400;transition:width .25s}.footer-link:hover::after{width:100%}`}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Spalten */}
        <div className="grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
          {col(
            "Kontakt",
            [
              { label: `${company.street}, ${company.zip} ${company.city}`, href: "/kontakt" },
              { label: company.phone, href: company.phoneHref },
              { label: company.email, href: `mailto:${company.email}` },
            ],
            true
          )}
          {col(
            "Leistungen",
            services.map((s) => ({ label: s.label, href: s.href }))
          )}
          {col("Unternehmen", companyLinks)}
          {col("Folgen", socials, true)}
        </div>
      </div>

      {/* Mega-Schriftzug */}
      <div className="overflow-hidden px-4 sm:px-6 lg:px-8" aria-hidden="true">
        <span className="mega-word block font-display text-[clamp(3rem,14vw,11rem)] font-black uppercase leading-[0.82] tracking-tight">
          {company.shortName}
        </span>
      </div>

      {/* Legal-Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-500 sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} {company.name} · FISAT &amp; IRATA · HWK{" "}
            {company.city}
          </span>
          <nav aria-label="Rechtliches" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
            {/* Cookie-Einstellungen: öffnet später das Consent-Tool erneut */}
            <button type="button" className="footer-link cursor-pointer text-left">
              Cookie-Einstellungen
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
