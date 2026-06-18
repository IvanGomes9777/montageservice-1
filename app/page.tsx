import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import { company, services } from "@/lib/site";

// Service-/ItemList-Schema (JSON-LD) – deckt sich exakt mit sichtbaren Leistungen.
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Leistungen – ${company.name}`,
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.label,
      description: s.desc,
      url: `https://www.montageservice-duttle.de${s.href}`,
      areaServed: "DE",
      provider: {
        "@type": "LocalBusiness",
        name: company.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.street,
          postalCode: company.zip,
          addressLocality: company.city,
          addressCountry: company.country,
        },
        telephone: company.phone,
      },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />

      <main id="main">
        {/* Sektion 1: Navbar ✓ · 2: Hero ✓ · 3: Leistungen ✓ */}
        <Hero />
        <Leistungen />

        {/* Platzhalter — weitere Sektionen folgen */}
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="font-display text-sm uppercase tracking-widest text-duttle-yellow">
            Platzhalter
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-white">
            Hier folgt Sektion 4
          </h2>
        </section>
      </main>
    </>
  );
}
