import Image from "next/image";
import Navbar from "@/components/Navbar";

// Hinweis: Der Hero-Inhalt ist hier ein PLATZHALTER, damit das
// Transparent-→-Solide-Verhalten der Navbar (Sektion 1) live testbar ist.
// Der echte Hero wird in Sektion 2 mit 5 Optionen gebaut.
export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        {/* Platzhalter-Hero (Sektion 2 folgt) */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=70"
            alt="Industriekletterer bei Höhenarbeit an einer Fassade"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-duttle-black/80 via-duttle-black/40 to-duttle-black" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-block -skew-x-6 bg-duttle-yellow px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-widest text-duttle-black">
              Höhenarbeit ohne Gerüst
            </span>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Wir arbeiten dort,
              <br />
              wo andere <em className="not-italic text-duttle-yellow">aufhören.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              Seilzugangstechnik nach FISAT &amp; IRATA — von der Fassade in 70 m
              bis zum ETFE-Dach. Membranbau, Montage &amp; Reinigung aus einer Hand.
            </p>

            <p className="mt-10 font-display text-xs uppercase tracking-widest text-neutral-500">
              ↓ Scrollen — die Navbar wird solide (Sektion 1 · Demo)
            </p>
          </div>
        </section>

        {/* Zweite Sektion nur als Scroll-Strecke für die Navbar-Demo */}
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="font-display text-sm uppercase tracking-widest text-duttle-yellow">
            Platzhalter
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-white">
            Hier folgt Sektion 2 (Hero) &amp; weitere Inhalte
          </h2>
          <p className="mt-4 text-neutral-400">
            Diese Seite dient aktuell nur dazu, die gewählte Navbar (Option 02)
            im echten Next.js-Kontext zu testen — inklusive Sticky-Verhalten,
            Dropdown und mobilem Menü.
          </p>
        </section>
      </main>
    </>
  );
}
