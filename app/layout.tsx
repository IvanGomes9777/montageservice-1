import type { Metadata } from "next";
import { archivo, inter } from "./fonts";
import { company } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${company.name} – ${company.claim}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Montageservice Duttle aus Münster: Membranbau, Industrieklettern, Spezialmontagen und Höhenreinigung – zertifiziert nach FISAT & IRATA, ohne Gerüst, gewerkeübergreifend.",
  metadataBase: new URL("https://www.montageservice-duttle.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: company.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${archivo.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-duttle-yellow focus:px-4 focus:py-2 focus:font-display focus:font-bold focus:uppercase focus:text-duttle-black"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
