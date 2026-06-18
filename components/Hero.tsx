"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { company, cta, heroKpis } from "@/lib/site";
import TrustStrip from "@/components/TrustStrip";

/**
 * Hero — Design "Fullscreen Impact" (Option 01)
 * - Vollbild-Höhenfoto mit langsamem Ken-Burns-Zoom
 * - Stagger-Reveal der Inhalte beim Laden (Framer Motion)
 * - 2 CTAs, KPI-Reihe, "Bekannt aus"-Streifen, animierter Scroll-Cue
 */
export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.15 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
  };

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      {/* Hintergrundbild (Ken Burns) */}
      <div className="absolute inset-0 animate-kenburns">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=70"
          alt="Industriekletterer bei Höhenarbeit an einer Fassade"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-duttle-black/80 via-duttle-black/40 to-duttle-black" />

      {/* Scroll-Cue */}
      <span className="pointer-events-none absolute bottom-40 right-5 z-10 hidden font-mono text-[0.68rem] tracking-[0.2em] text-white/50 [writing-mode:vertical-rl] sm:block">
        <span className="animate-bob inline-block">SCROLL ↓</span>
      </span>

      {/* Inhalt */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-28 sm:px-6 lg:px-8"
      >
        <motion.span
          variants={item}
          className="inline-block -skew-x-6 bg-duttle-yellow px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-duttle-black"
        >
          <span className="inline-block skew-x-6">
            Höhenarbeit ohne Gerüst · seit {company.founded}
          </span>
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-5 max-w-4xl font-display text-4xl font-black uppercase leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Wir arbeiten dort,
          <br />
          wo andere <em className="not-italic text-duttle-yellow">aufhören.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg"
        >
          Seilzugangstechnik nach FISAT &amp; IRATA — Membranbau, Montage &amp;
          Reinigung in jeder Höhe. Ohne Gerüst, aus einer Hand.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Link
            href={cta.href}
            className="clip-cta bg-duttle-yellow px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-transform duration-200 hover:-translate-y-0.5"
          >
            {cta.label}
          </Link>
          <Link
            href="/referenzen"
            className="border-2 border-white/30 px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-white transition-colors duration-200 hover:border-duttle-yellow hover:text-duttle-yellow"
          >
            Referenzen ansehen
          </Link>
        </motion.div>

        {/* KPIs */}
        <motion.dl
          variants={item}
          className="mt-10 flex flex-wrap gap-x-10 gap-y-5"
        >
          {heroKpis.map((kpi) => (
            <div key={kpi.label}>
              <dt className="sr-only">{kpi.label}</dt>
              <dd>
                <span className="block font-display text-2xl font-black text-duttle-yellow sm:text-3xl">
                  {kpi.value}
                </span>
                <span className="mt-1 block max-w-[8rem] font-mono text-[0.7rem] uppercase leading-tight tracking-wide text-neutral-300">
                  {kpi.label}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Bekannt aus */}
      <TrustStrip className="relative z-10" />
    </section>
  );
}
