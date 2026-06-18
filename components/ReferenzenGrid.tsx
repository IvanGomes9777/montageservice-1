"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { references, materials, countries, type Material } from "@/lib/referenzen";

/**
 * Referenzen-Vollseite: filterbar nach Material & Land, mit Klick-Lightbox.
 */
export default function ReferenzenGrid() {
  const reduce = useReducedMotion();
  const [mat, setMat] = useState<Material | "all">("all");
  const [land, setLand] = useState<string | "all">("all");
  const [index, setIndex] = useState<number | null>(null);

  const list = useMemo(
    () =>
      references.filter(
        (r) => (mat === "all" || r.material === mat) && (land === "all" || r.country === land)
      ),
    [mat, land]
  );

  // Lightbox bezieht sich auf die aktuell gefilterte Liste.
  const isOpen = index !== null;
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % list.length)),
    [list.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + list.length) % list.length)),
    [list.length]
  );

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

  const active = isOpen ? list[index] : null;

  const chip = (active: boolean) =>
    `border px-3 py-2 font-display text-xs font-bold uppercase tracking-wide transition-colors ${
      active
        ? "border-duttle-yellow bg-duttle-yellow text-duttle-black"
        : "border-white/15 text-neutral-300 hover:border-duttle-yellow hover:text-duttle-yellow"
    }`;

  return (
    <div>
      {/* Filter */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs uppercase tracking-wide text-neutral-500">Material:</span>
          <button onClick={() => setMat("all")} className={chip(mat === "all")}>Alle</button>
          {materials.map((m) => (
            <button key={m} onClick={() => setMat(m)} className={chip(mat === m)}>{m}</button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs uppercase tracking-wide text-neutral-500">Land:</span>
          <button onClick={() => setLand("all")} className={chip(land === "all")}>Alle</button>
          {countries.map((c) => (
            <button key={c} onClick={() => setLand(c)} className={chip(land === c)}>{c}</button>
          ))}
        </div>
      </div>

      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-neutral-500">
        {list.length} Projekt{list.length === 1 ? "" : "e"}
      </p>

      {/* Grid */}
      <ul className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={`${p.name}-${i}`}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${p.name}, ${p.location} – Bild ansehen`}
              className="group relative flex h-full min-h-[15rem] w-full flex-col justify-end overflow-hidden bg-duttle-black p-5 text-left"
            >
              <Image
                src={p.image}
                alt={`${p.name}, ${p.location}`}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-duttle-black via-duttle-black/40 to-transparent" />
              <span className="absolute left-4 top-4 z-10 bg-duttle-yellow px-2 py-1 font-display text-[0.66rem] font-extrabold uppercase tracking-wide text-duttle-black">
                {p.material}
              </span>
              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                  {p.location} · {p.country}
                </span>
                <h2 className="mt-1 font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-white">
                  {p.name}
                </h2>
                <span className="text-xs text-neutral-400">{p.detail}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <button onClick={close} aria-label="Schließen" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/30 text-white hover:border-duttle-yellow hover:text-duttle-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Vorheriges" className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 bg-black/40 text-2xl text-white hover:border-duttle-yellow hover:text-duttle-yellow sm:left-6">‹</button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Nächstes" className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 bg-black/40 text-2xl text-white hover:border-duttle-yellow hover:text-duttle-yellow sm:right-6">›</button>

            <motion.figure
              key={active.full}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-5xl flex-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.full} alt={`${active.name}, ${active.location} – ${active.detail}`} className="max-h-[78vh] w-auto border-2 border-duttle-yellow object-contain" />
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wide text-duttle-yellow">
                    {active.location} · {active.country} · {active.detail}
                  </span>
                  <p className="font-display text-lg font-extrabold uppercase tracking-tight text-white">{active.name}</p>
                </div>
                <span className="font-mono text-sm text-neutral-400">
                  {String((index ?? 0) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
