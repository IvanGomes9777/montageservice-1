"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { company, trustPoints } from "@/lib/site";
import CtaBanner from "@/components/CtaBanner";

/**
 * Sicherheit & Qualität — Design "Split + Checkliste" (Option 02).
 * - Links: Höhenfoto mit Gelb-Stempel (FISAT & IRATA, seit 2011)
 * - Rechts: Checkliste mit gestaffeltem Reveal der Häkchen
 * - Darunter: wiederverwendbarer CTA-Banner
 */
export default function Sicherheit() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const li: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <section className="bg-duttle-black py-16 sm:py-24" aria-labelledby="sicherheit-titel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-duttle-yellow">
            Sicherheit &amp; Qualität
          </p>
          <h2
            id="sicherheit-titel"
            className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl"
          >
            Worauf Sie sich{" "}
            <em className="not-italic text-duttle-yellow">verlassen können.</em>
          </h2>
        </header>

        <div className="grid grid-cols-1 overflow-hidden border border-white/10 lg:grid-cols-[1fr_1.1fr]">
          {/* Bild */}
          <div className="relative min-h-[16rem] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=70"
              alt="Industriekletterer gesichert am Doppelseil"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-duttle-black/30 to-duttle-black/70" />
            <span className="absolute bottom-5 left-5 bg-duttle-yellow px-4 py-3 font-display text-sm font-black uppercase leading-tight text-duttle-black">
              Seit {company.founded}
              <br />
              FISAT &amp; IRATA
            </span>
          </div>

          {/* Checkliste */}
          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5 p-6 sm:p-10"
          >
            {trustPoints.map((p) => (
              <motion.li key={p.title} variants={li} className="flex gap-4">
                <span className="grid h-6 w-6 flex-none place-items-center bg-duttle-yellow font-bold text-duttle-black">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M5 12l5 5L20 6" />
                  </svg>
                </span>
                <div>
                  <b className="block font-semibold text-white">{p.title}</b>
                  <span className="text-sm text-neutral-400">{p.desc}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <CtaBanner
          title="Unverbindlich anfragen"
          subtitle="Wir melden uns in der Regel innerhalb von 24 h."
          className="mt-10"
        />
      </div>
    </section>
  );
}
