import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

const BASE = "https://www.montageservice-duttle.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/leistungen",
    "/referenzen",
    "/ueber-uns",
    "/presse",
    "/karriere",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const serviceRoutes = services.map((s) => s.href);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/leistungen") ? 0.8 : 0.6,
  }));
}
