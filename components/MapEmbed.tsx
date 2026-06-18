"use client";

import { useState } from "react";
import { company } from "@/lib/site";

/**
 * Klick-to-load-Karte: lädt OpenStreetMap erst nach aktivem Klick
 * (datensparsam, kein ungefragtes Drittinhalt-Embed → DSGVO-freundlich).
 */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  // Münster (Näherung) – Marker für die Anfahrt.
  const lat = 51.9607;
  const lon = 7.6261;
  const bbox = `${lon - 0.012},${lat - 0.006},${lon + 0.012},${lat + 0.006}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;

  if (loaded) {
    return (
      <div className="aspect-[16/10] w-full overflow-hidden border border-white/10">
        <iframe
          title={`Karte – ${company.name}, ${company.city}`}
          src={src}
          className="h-full w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 border border-white/10 bg-white/5 p-6 text-center">
      <p className="max-w-xs text-sm text-neutral-400">
        Aus Datenschutzgründen wird die Karte (OpenStreetMap) erst nach Ihrem
        Klick geladen.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="clip-cta bg-duttle-yellow px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-transform duration-200 hover:-translate-y-0.5"
      >
        Karte laden
      </button>
      <a
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-500 underline underline-offset-2 hover:text-duttle-yellow"
      >
        Stattdessen in OpenStreetMap öffnen
      </a>
    </div>
  );
}
