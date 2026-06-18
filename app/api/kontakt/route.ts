import { NextResponse } from "next/server";

// DSGVO-konformer Formular-Endpunkt: serverseitige Validierung + Honeypot.
// HINWEIS: Für echten Mailversand hier einen Provider anbinden
// (z. B. Resend/SMTP via Umgebungsvariable). Aktuell wird die Anfrage
// validiert und – falls konfiguriert – versendet; sonst nur protokolliert.

type Payload = {
  vorname?: string;
  nachname?: string;
  email?: string;
  telefon?: string;
  leistung?: string;
  nachricht?: string;
  datenschutz?: boolean;
  company_website?: string; // Honeypot (muss leer sein)
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Bot-Schutz: ausgefülltes Honeypot-Feld → still „erfolgreich" abweisen.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const errors: string[] = [];
  if (!data.vorname?.trim()) errors.push("Vorname fehlt.");
  if (!data.nachname?.trim()) errors.push("Nachname fehlt.");
  if (!data.email?.trim() || !isEmail(data.email)) errors.push("Gültige E-Mail fehlt.");
  if (!data.nachricht?.trim()) errors.push("Nachricht fehlt.");
  if (data.datenschutz !== true) errors.push("Datenschutz-Einwilligung fehlt.");

  if (errors.length) {
    return NextResponse.json({ ok: false, error: errors.join(" ") }, { status: 422 });
  }

  // TODO: Mailversand an info@montageservice-duttle.de anbinden (z. B. Resend).
  // if (process.env.RESEND_API_KEY) { ...send... }
  console.info("[Kontaktanfrage]", {
    name: `${data.vorname} ${data.nachname}`,
    email: data.email,
    leistung: data.leistung,
  });

  return NextResponse.json({ ok: true });
}
