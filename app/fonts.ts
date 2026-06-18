import { Archivo, Inter } from "next/font/google";

// Self-hosted beim Build → KEIN Runtime-Request an Google (DSGVO-konform).
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
});
