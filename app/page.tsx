import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import Referenzen from "@/components/Referenzen";
import Sicherheit from "@/components/Sicherheit";
import Footer from "@/components/Footer";
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
        {/* 1 Navbar ✓ · 2 Hero ✓ · 3 Leistungen ✓ · 4 Referenzen ✓ · 5 Sicherheit+CTA ✓ */}
        <Hero />
        <Leistungen />
        <Referenzen />
        <Sicherheit />
      </main>

      {/* Sektion 6: Footer ✓ */}
      <Footer />
    </>
  );
}
