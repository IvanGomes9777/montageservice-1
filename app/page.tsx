import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        {/* Sektion 1: Navbar ✓ · Sektion 2: Hero ✓ */}
        <Hero />

        {/* Platzhalter — weitere Sektionen folgen */}
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="font-display text-sm uppercase tracking-widest text-duttle-yellow">
            Platzhalter
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-white">
            Hier folgt Sektion 3
          </h2>
          <p className="mt-4 text-neutral-400">
            Scrolle hoch/runter, um Hero-Reveal und das Solide-Werden der Navbar
            im echten Next.js-Kontext zu sehen.
          </p>
        </section>
      </main>
    </>
  );
}
