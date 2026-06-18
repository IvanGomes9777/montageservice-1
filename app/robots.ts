import type { MetadataRoute } from "next";

// robots.txt – KI-Such-/Retrieval-Crawler ausdrücklich erlauben (GEO-Sichtbarkeit).
export default function robots(): MetadataRoute.Robots {
  const base = "https://www.montageservice-duttle.de";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
