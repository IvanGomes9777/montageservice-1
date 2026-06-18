"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { references } from "@/lib/site";

/**
 * Referenzen — Design "Project Grid" (Option 01) mit Klick-Lightbox.
 * - 6 Projekte als 3×2-Raster (geht immer auf), Hover: Bild-Zoom + Zoom-Icon
 * - Klick auf ein Projekt öffnet das Bild in voller Größe (Lightbox):
 *   Pfeil-Navigation, ESC schließt, Klick auf Hintergrund schließt, Scroll-Lock
 */
export default function Referenzen() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % references.length)),
    []
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + references.length) % references.length)),
    []
  );

  // Tastatur + Body-Scroll-Lock, solange die Lightbox offen ist
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, next, prev]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
  };

  const active = isOpen ? references[index] : null;

  return (
    <section className="bg-duttle-ink py-16 sm:py-24" aria-labelledby="referenzen-titel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-duttle-yellow">
              Referenzen
            </p>
            <h2
              id="referenzen-titel"
              className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl"
            >
              Projekte, die{" "}
              <em className="not-italic text-duttle-yellow">für sich sprechen.</em>
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-400">
              Von Rottweil bis New York — in 7 Ländern im Einsatz.
            </p>
          </div>
          <Link
            href="/referenzen"
            className="clip-cta bg-duttle-yellow px-5 py-3.5 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-transform duration-200 hover:-translate-y-0.5"
          >
            Alle Referenzen
          </Link>
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {references.map((p, i) => (
            <motion.li key={p.name} variants={item}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${p.name}, ${p.location} – Bild in voller Größe ansehen`}
                className="group relative flex h-full min-h-[16rem] w-full flex-col justify-end overflow-hidden bg-duttle-black p-5 text-left"
              >
                <Image
                  src={p.image}
                  alt={`${p.name}, ${p.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 z-0 bg-gradient-to-t from-duttle-black via-duttle-black/40 to-transparent" />

                {/* Material-Tag */}
                <span className="absolute left-4 top-4 z-10 bg-duttle-yellow px-2 py-1 font-display text-[0.66rem] font-extrabold uppercase tracking-wide text-duttle-black">
                  {p.material}
                </span>
                {/* Zoom-Hinweis */}
                <span className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>

                <div className="relative z-10">
                  <span className="font-mono text-xs font-medium uppercase tracking-wide text-duttle-yellow">
                    {p.location}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-white">
                    {p.name}
                  </h3>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name}, ${active.location}`}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          >
            {/* Schließen */}
            <button
              type="button"
              onClick={close}
              aria-label="Schließen"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/30 text-white transition-colors hover:border-duttle-yellow hover:text-duttle-yellow"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Zurück */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Vorheriges Projekt"
              className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 bg-black/40 text-2xl text-white transition-colors hover:border-duttle-yellow hover:text-duttle-yellow sm:left-6"
            >
              ‹
            </button>
            {/* Weiter */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Nächstes Projekt"
              className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 bg-black/40 text-2xl text-white transition-colors hover:border-duttle-yellow hover:text-duttle-yellow sm:right-6"
            >
              ›
            </button>

            <motion.figure
              key={active.full}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-5xl flex-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.full}
                alt={`${active.name}, ${active.location} – ${active.material}`}
                className="max-h-[78vh] w-auto border-2 border-duttle-yellow object-contain"
              />
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                    {active.location} · {active.material}
                  </span>
                  <p className="font-display text-lg font-extrabold uppercase tracking-tight text-white">
                    {active.name}
                  </p>
                </div>
                <span className="font-mono text-sm text-neutral-400">
                  {String(index! + 1).padStart(2, "0")} / {String(references.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
