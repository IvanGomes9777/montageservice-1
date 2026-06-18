"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { services } from "@/lib/site";

/**
 * Leistungen — Design "Bold Cards Grid" (Option 01), lückenlos gefüllt.
 * Layout-Logik (keine leeren Zellen, keine überbreite Einzelkarte):
 *  - Mobile  (1 Spalte): alle Karten gestapelt
 *  - sm (2 Spalten): Karten 1–4 als 2×2, Karte 5 über volle Breite
 *  - lg (6 Spalten): obere Reihe 3× col-span-2, untere Reihe 2× col-span-3
 * Micro-Interactions: Bild-Zoom, gelber Seitenbalken, Pfeil beim Hover.
 */

// Spaltenspannen je Karte, damit das Raster immer vollständig aufgeht.
const SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-3",
];

export default function Leistungen() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <section className="bg-duttle-black py-16 sm:py-24" aria-labelledby="leistungen-titel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-duttle-yellow">
            Unsere Leistungen
          </p>
          <h2
            id="leistungen-titel"
            className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl"
          >
            Alles in der Höhe —{" "}
            <em className="not-italic text-duttle-yellow">aus einer Hand.</em>
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Fünf Disziplinen, ein Team, ein Ansprechpartner — gewerkeübergreifend
            geplant, montiert und gewartet.
          </p>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6"
        >
          {services.map((s, i) => (
            <motion.div key={s.href} variants={item} className={SPANS[i]}>
              <Link
                href={s.href}
                className="group relative flex h-full min-h-[15rem] flex-col justify-end overflow-hidden bg-duttle-black p-6"
              >
                {/* gelber Seitenbalken */}
                <span className="absolute inset-y-0 left-0 z-20 w-0 bg-duttle-yellow transition-all duration-300 group-hover:w-1" />
                {/* Bild */}
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-30 transition-[opacity,transform] duration-500 group-hover:scale-105 group-hover:opacity-50"
                />
                <span className="absolute inset-0 z-0 bg-gradient-to-t from-duttle-black via-duttle-black/70 to-transparent" />

                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-duttle-yellow">
                    {s.n}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-white">
                    {s.label}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-300">
                    {s.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-duttle-yellow opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Mehr erfahren
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
