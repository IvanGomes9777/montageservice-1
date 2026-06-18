import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Crumb = { label: string; href: string };

/**
 * Wiederverwendbarer Rahmen für Unterseiten:
 * Navbar (fixed) + dunkles Header-Band (klärt die fixe Navbar) + Inhalt + Footer.
 * Erzeugt zusätzlich BreadcrumbList-Schema (SEO).
 */
export default function PageShell({
  title,
  lead,
  breadcrumbs = [],
  children,
  contentClassName = "max-w-3xl",
}: {
  title: string;
  lead?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
  contentClassName?: string;
}) {
  const crumbs: Crumb[] = [{ label: "Start", href: "/" }, ...breadcrumbs];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://www.montageservice-duttle.de${c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main id="main" className="min-h-screen bg-duttle-ink">
        <header className="border-b border-white/10 bg-duttle-black px-4 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Brotkrumen" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide text-neutral-500">
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-2">
                    {i > 0 && <span className="text-duttle-yellow">/</span>}
                    {i < crumbs.length - 1 ? (
                      <Link href={c.href} className="hover:text-white">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-neutral-300">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            {lead && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                {lead}
              </p>
            )}
          </div>
        </header>

        <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className={`mx-auto ${contentClassName}`}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
