"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { company, navItems, cta } from "@/lib/site";

/**
 * Navbar — Design "Industrie & Höhe / Bold" (Option 02)
 * - Transparent über dem Hero, wird beim Scrollen solide (Blur + gelbe Linie)
 * - Desktop: Leistungen-Dropdown (Hover + Tastatur via focus-within)
 * - Micro-Interactions: Gelb füllt Menüpunkte von unten, schräg geschnittener CTA
 * - Mobile: animiertes Vollbild-Overlay (Framer Motion), Body-Scroll-Lock, ESC schließt
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Solide Navbar ab kleinem Scroll-Offset
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile-Menü: Body-Scroll sperren + ESC schließt
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,padding,border-color] duration-400 ease-out-expo",
        "border-b",
        scrolled
          ? "bg-duttle-black/95 backdrop-blur-md border-duttle-yellow/20 py-2"
          : "bg-transparent border-transparent py-4",
      ].join(" ")}
    >
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white"
          aria-label={`${company.name} – Startseite`}
        >
          <span className="clip-mark grid h-9 w-9 place-items-center bg-duttle-yellow font-display text-lg font-black text-duttle-black transition-transform duration-300 group-hover:rotate-3">
            D
          </span>
          <span className="font-display text-lg font-black uppercase tracking-tight">
            Duttle
          </span>
        </Link>

        {/* Desktop-Menü */}
        <ul className="hidden items-center lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.href} className="group/drop relative">
                <Link
                  href={item.href}
                  className="group/item relative flex items-center gap-1 overflow-hidden px-3.5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-neutral-200"
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover/item:text-duttle-black">
                    {item.label}
                  </span>
                  <svg
                    className="relative z-10 h-3 w-3 transition-[transform,color] duration-200 group-hover/item:text-duttle-black group-hover/drop:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <span className="absolute inset-0 z-0 translate-y-full bg-duttle-yellow transition-transform duration-300 ease-out-expo group-hover/item:translate-y-0" />
                </Link>

                {/* Dropdown-Panel */}
                <div className="invisible absolute left-0 top-full w-80 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover/drop:visible group-hover/drop:translate-y-0 group-hover/drop:opacity-100 group-focus-within/drop:visible group-focus-within/drop:translate-y-0 group-focus-within/drop:opacity-100">
                  <ul className="overflow-hidden border border-duttle-yellow/20 bg-duttle-ink shadow-2xl">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="group/sub block border-l-2 border-transparent px-4 py-3 transition-colors hover:border-duttle-yellow hover:bg-white/5"
                        >
                          <span className="font-display text-sm font-bold uppercase tracking-wide text-white group-hover/sub:text-duttle-yellow">
                            {child.label}
                          </span>
                          {child.desc && (
                            <span className="mt-0.5 block text-xs text-neutral-400">
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group/item relative block overflow-hidden px-3.5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-neutral-200"
                >
                  <span className="relative z-10 transition-colors duration-200 group-hover/item:text-duttle-black">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 z-0 translate-y-full bg-duttle-yellow transition-transform duration-300 ease-out-expo group-hover/item:translate-y-0" />
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA + Burger */}
        <div className="flex items-center gap-2">
          <Link
            href={cta.href}
            className="clip-cta hidden bg-duttle-yellow px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-105 sm:inline-block"
          >
            {cta.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 place-items-center border border-white/30 text-white transition-colors hover:border-duttle-yellow hover:text-duttle-yellow lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile-Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-duttle-black/98 px-6 pb-10 pt-24 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 + i * 0.05 }}
                  className="border-b border-white/10 py-3"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-extrabold uppercase tracking-tight text-white"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 flex flex-col gap-1.5 pl-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-1 text-sm text-neutral-300 hover:text-duttle-yellow"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="clip-cta bg-duttle-yellow px-5 py-4 text-center font-display text-base font-extrabold uppercase tracking-wide text-duttle-black"
              >
                {cta.label}
              </Link>
              <a
                href={company.phoneHref}
                className="py-2 text-center font-display text-lg font-bold text-white"
              >
                ☎ {company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
