"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-duttle-yellow focus:outline-none";
const label = "mb-1.5 block font-display text-xs font-bold uppercase tracking-wide text-neutral-300";

export default function KontaktForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      vorname: String(fd.get("vorname") || ""),
      nachname: String(fd.get("nachname") || ""),
      email: String(fd.get("email") || ""),
      telefon: String(fd.get("telefon") || ""),
      leistung: String(fd.get("leistung") || ""),
      nachricht: String(fd.get("nachricht") || ""),
      datenschutz: fd.get("datenschutz") === "on",
      company_website: String(fd.get("company_website") || ""), // Honeypot
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(json.error || "Bitte prüfen Sie Ihre Eingaben.");
      }
    } catch {
      setStatus("error");
      setError("Verbindung fehlgeschlagen. Bitte später erneut versuchen.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-duttle-yellow/40 bg-duttle-yellow/5 p-8">
        <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-duttle-yellow">
          Danke für Ihre Anfrage!
        </h3>
        <p className="mt-3 text-neutral-300">
          Wir haben Ihre Nachricht erhalten und melden uns in der Regel innerhalb
          von 24 Stunden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="vorname">Vorname *</label>
          <input id="vorname" name="vorname" required className={field} autoComplete="given-name" />
        </div>
        <div>
          <label className={label} htmlFor="nachname">Nachname *</label>
          <input id="nachname" name="nachname" required className={field} autoComplete="family-name" />
        </div>
        <div>
          <label className={label} htmlFor="email">E-Mail *</label>
          <input id="email" name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="telefon">Telefon</label>
          <input id="telefon" name="telefon" type="tel" className={field} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="leistung">Leistung</label>
        <select id="leistung" name="leistung" className={field} defaultValue="">
          <option value="" disabled>Bitte wählen …</option>
          {services.map((s) => (
            <option key={s.href} value={s.label} className="bg-duttle-black">
              {s.label}
            </option>
          ))}
          <option value="Sonstiges" className="bg-duttle-black">Sonstiges</option>
        </select>
      </div>

      <div>
        <label className={label} htmlFor="nachricht">Nachricht *</label>
        <textarea id="nachricht" name="nachricht" required rows={5} className={field} placeholder="Objekt, Höhe, gewünschte Leistung …" />
      </div>

      {/* Honeypot – für Menschen unsichtbar */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-neutral-400">
        <input type="checkbox" name="datenschutz" required className="mt-1 h-4 w-4 flex-none accent-duttle-yellow" />
        <span>
          Ich habe die{" "}
          <Link href="/datenschutz" className="text-duttle-yellow underline underline-offset-2">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der
          Anfrage zu. *
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="clip-cta self-start bg-duttle-yellow px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-duttle-black transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
    </form>
  );
}
