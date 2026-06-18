import { company, services } from "@/lib/site";

const BASE = "https://www.montageservice-duttle.de";

// Globaler Entity-Graph (Organization + WebSite + LocalBusiness) – JSON-LD.
// Nur reale, sichtbare Daten (keine erfundenen Bewertungen/Fakten).
export const orgGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: company.name,
      url: `${BASE}/`,
      founder: { "@type": "Person", name: company.owner },
      foundingDate: String(company.founded),
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.zip,
        addressLocality: company.city,
        addressCountry: company.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: company.phone,
        email: company.email,
        contactType: "customer service",
        areaServed: ["DE", "EU"],
        availableLanguage: ["de"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      url: `${BASE}/`,
      name: company.name,
      publisher: { "@id": `${BASE}/#organization` },
      inLanguage: "de",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE}/#localbusiness`,
      name: company.name,
      url: `${BASE}/`,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.zip,
        addressLocality: company.city,
        addressCountry: company.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: 51.9607, longitude: 7.6261 },
      areaServed: ["DE", "EU"],
      priceRange: "€€",
      knowsAbout: services.map((s) => s.label),
      parentOrganization: { "@id": `${BASE}/#organization` },
    },
  ],
};
