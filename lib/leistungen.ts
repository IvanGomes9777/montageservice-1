// Inhalte der Leistungs-Money-Pages (answer-first, FAQ für GEO).
// Fachlich gestützt auf die Projekt-Wissensbasis (Membranbau, SZP, Montage, Reinigung).

export type Section = {
  h: string;
  p?: string[];
  bullets?: string[];
  table?: { head: string[]; rows: string[][] };
};

export type Faq = { q: string; a: string };

export type LeistungPage = {
  slug: string;
  label: string;
  title: string;
  lead: string;
  intro: string; // answer-first
  image: string;
  sections: Section[];
  faq: Faq[];
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=70`;

export const leistungen: LeistungPage[] = [
  {
    slug: "membranbau",
    label: "Membranbau",
    title: "Membranbau & textile Architektur",
    lead: "ETFE · PVC · PTFE – von der Formfindung über die Montage bis zur Wartung, aus einer Hand.",
    intro:
      "Membranbau ist das Bauen mit dünnen, ausschließlich auf Zug beanspruchten Hochleistungsgeweben, die zugleich Wetterhaut und tragendes Element sind. Montageservice Duttle übernimmt die komplette Abwicklung an textilen Bauwerken aller Art – inklusive Alu- und Glasfassaden.",
    image: u("photo-1487958449943-2429e8be8625"),
    sections: [
      {
        h: "Leistungsspektrum",
        bullets: [
          "Beratung, Entwurf & Formfindung",
          "Montage textiler Konstruktionen vor Ort (auch per Seilzugangstechnik)",
          "Wartung, Reinigung & Reparatur über die gesamte Nutzungsphase",
          "Alu- und Glasfassaden als Ergänzung",
        ],
      },
      {
        h: "Materialien im Überblick",
        p: [
          "Welches Material passt? Das hängt von Lebensdauer, Lichtwunsch und Brandschutz ab. Die wichtigsten drei im Vergleich:",
        ],
        table: {
          head: ["Material", "Eigenschaften", "Typischer Einsatz"],
          rows: [
            ["PVC-Polyester", "Günstig, leicht verarbeitbar, große Farbauswahl, schwer entflammbar (B1)", "Überdachungen, Textilfassaden, mobile Konstruktionen"],
            ["PTFE-Glasgewebe", "Sehr langlebig, schmutzabweisend, bleicht UV-beständig weiß aus", "Feste Membrandächer, Stadien, Großflächen"],
            ["ETFE-Folie", "~90 % Lichtdurchlässigkeit, selbstreinigend, recycelbar (als Kissen oder vorgespannt)", "Transparente Dächer & Fassaden, Atrien, Bäder"],
          ],
        },
      },
      {
        h: "Typische Einsätze",
        bullets: [
          "Membrandächer für Tribünen, Stadien & Eventbauten",
          "Textile Fassaden & Sonnensegel im gewerblichen Bereich",
          "Atrien, Innenhöfe & transparente Überdachungen (ETFE)",
          "Sanierung & Neueindeckung bestehender Membranbauten",
        ],
      },
    ],
    faq: [
      { q: "Wie lange hält ein Membranbau?", a: "Je nach Material und Beanspruchung sind PVC-Konstruktionen rund 15–25 Jahre haltbar, PTFE- und ETFE-Konstruktionen deutlich länger. Regelmäßige Inspektion und Reinigung verlängern die Lebensdauer spürbar – diese Wartung bieten wir mit an." },
      { q: "Wie sieht es mit dem Brandschutz aus?", a: "Die gängigen Architekturmembranen sind mindestens schwer entflammbar (Klasse B1), PTFE- und teils ETFE-Aufbauten erreichen sogar nicht brennbare bzw. sehr gute Brandklassen. Die konkrete Anforderung richtet sich nach Bauordnung und Nutzung des Objekts." },
      { q: "Reinigt sich eine Membran selbst?", a: "ETFE-Folie gilt als selbstreinigend und PTFE als sehr schmutzabweisend. Eine regelmäßige fachgerechte Reinigung – materialschonend, ohne aggressive Mittel – erhält dennoch Optik und Lichttransluzenz. Wir übernehmen sie per Seilzugangstechnik ohne Gerüst." },
      { q: "Was kostet ein Membranbau?", a: "Der Preis hängt von Fläche, Spannweite, Material und Unterkonstruktion ab. Nach einem kurzen Erstgespräch und Aufmaß erstellen wir ein konkretes Angebot. Anfragen beantworten wir in der Regel innerhalb von 24 Stunden." },
    ],
  },
  {
    slug: "industrieklettern",
    label: "Industrieklettern",
    title: "Industrieklettern & Seilzugangstechnik",
    lead: "Höhenarbeit nach FISAT & IRATA – ohne Gerüst, ohne Hubsteiger, oft im laufenden Betrieb.",
    intro:
      "Industrieklettern – fachlich Seilzugangs- und Positionierungstechnik (SZP) – ermöglicht Arbeiten an hoch- oder tiefgelegenen, schwer zugänglichen Stellen. Statt teurem Gerüst sichern sich unsere zertifizierten Höhenarbeiter über ein redundantes Doppelseilsystem.",
    image: u("photo-1504307651254-35680f356dfd"),
    sections: [
      {
        h: "Ihre Vorteile gegenüber Gerüst & Hubsteiger",
        bullets: [
          "Kosteneffizient – kein teures Gerüst, keine Hubarbeitsbühne",
          "Schnell – kurze Auf- und Abbauzeiten, oft tagesaktueller Einsatz",
          "Flexibel – auch verwinkelte und exponierte Stellen erreichbar",
          "Betriebssicher – Arbeiten häufig ohne Betriebsunterbrechung",
          "Ressourcenschonend – geringerer Material- und Energieeinsatz",
        ],
      },
      {
        h: "Typische Tätigkeiten",
        bullets: [
          "Bauwerks- & Anlageninspektion mit Schadensdokumentation",
          "Montage-, Reparatur- & Instandhaltungsarbeiten (gewerkeübergreifend)",
          "Fassaden- & Glasreinigung in großer Höhe",
          "Installation von Sicherungs- und Personenauffangnetzen",
          "Höhenrettung & Absturzsicherung als Zusatzleistung",
        ],
      },
      {
        h: "Sicherheit nach Norm",
        p: [
          "Wir arbeiten nach den Standards von FISAT und IRATA sowie den DGUV- und TRBS-Vorgaben für Höhenarbeiter (u. a. DGUV Information 212-001, TRBS 2121 Teil 3). Grundprinzip ist das permanent redundante Doppelseilsystem – ein belastetes Tragseil plus ein unabhängiges Sicherungsseil – mit einem Rettungskonzept unter 20 Minuten.",
        ],
      },
    ],
    faq: [
      { q: "Ist Seilzugangstechnik wirklich sicher?", a: "Ja. Es wird immer mit zwei voneinander unabhängigen Seilen gearbeitet (Trag- und Sicherungsseil), die Höhenarbeiter sind FISAT-/IRATA-zertifiziert mit aktueller Sachkunde, und die PSA wird jährlich geprüft. Zusätzlich existiert für jeden Einsatz ein Rettungskonzept mit Zielzeit unter 20 Minuten." },
      { q: "Brauche ich für Höhenarbeiten eine Sondergenehmigung?", a: "Seilzugangstechnik ist ein anerkanntes Arbeitsverfahren und nach Betriebssicherheitsverordnung sowie TRBS 2121-3 zulässig, wenn die Gefährdungsbeurteilung eine sichere Durchführung ergibt. Eine gesonderte Anmeldung bei der Berufsgenossenschaft ist in der Regel nicht erforderlich." },
      { q: "Welche Höhen und Stellen sind erreichbar?", a: "Praktisch alle – von der Hochhausfassade über Industrieanlagen bis zu verwinkelten, exponierten Bereichen, die mit Gerüst oder Hubsteiger nicht oder nur sehr aufwendig zugänglich sind. Beispielprojekt: Fassadenreinigung am Hegau-Tower in rund 70 Metern Höhe." },
      { q: "Was spart Seilzugang gegenüber einem Gerüst?", a: "Vor allem Zeit und Kosten: Es entfällt der tage- bis wochenlange Auf- und Abbau, die Miete und die Logistik eines Gerüsts. Häufig kann im laufenden Betrieb gearbeitet werden, sodass auch Stillstandskosten vermieden werden." },
    ],
  },
  {
    slug: "spezialmontagen",
    label: "Spezialmontagen",
    title: "Spezialmontagen & Industriemontage",
    lead: "Sonderkonstruktionen und modulare Strukturen – gewerkeübergreifend montiert, weltweit.",
    intro:
      "Spezialmontagen umfassen die anspruchsvollen Montagefälle: komplexe Konstruktionen, Sondergewerke, schwer zugängliche oder hochpräzise Aufgaben – häufig in Kombination mit Seilzugangstechnik. Wir führen einzelne Komponenten vor Ort zu einer funktionsfähigen Einheit zusammen.",
    image: u("photo-1581094794329-c8112a89af12"),
    sections: [
      {
        h: "Montagearten",
        bullets: [
          "Neu- & Anlagenmontage inklusive Vormontage",
          "Modulmontage – vorgefertigte Module vor Ort zusammengesetzt",
          "Stahl-, Behälter- & Sonderkonstruktionen",
          "Personenschutznetze, Randsicherungen & Vogelschutz",
          "Instandhaltungs- & Reparaturmontagen",
        ],
      },
      {
        h: "So läuft ein Projekt ab",
        bullets: [
          "Planung & Montageplanung",
          "Komponentenvorbereitung / Vormontage",
          "Transport & Baustellenlogistik",
          "Montage vor Ort (auch seilunterstützt)",
          "Feinjustierung, Übergabe & Dokumentation",
        ],
      },
      {
        h: "Warum Duttle",
        p: [
          "Jede Minute Stillstand kostet – deshalb zählen Termintreue und Präzision. Als gewerkeübergreifendes Team mit zertifizierten Höhenarbeitern erreichen wir auch Montagepunkte, an denen klassische Verfahren an ihre Grenzen kommen, und arbeiten dort, wo möglich, im laufenden Betrieb.",
        ],
      },
    ],
    faq: [
      { q: "Was unterscheidet eine Spezialmontage von einer normalen Montage?", a: "Spezialmontagen betreffen anspruchsvolle, oft branchenspezifische Fälle: Sonderkonstruktionen, hohe Präzisionsanforderungen, schwer zugängliche Einbauorte oder erhöhte Sicherheitsauflagen. Häufig wird dabei Seilzugangstechnik eingesetzt, um Montagepunkte ohne Gerüst zu erreichen." },
      { q: "Arbeiten Sie auch im laufenden Betrieb?", a: "Wo es die Aufgabe zulässt, ja. Gerade die Seilzugangstechnik erlaubt punktuelle Eingriffe, ohne ganze Bereiche stillzulegen. Das reduziert Stillstandszeiten und damit Kosten erheblich – ein zentraler Vorteil gegenüber großflächigen Gerüstlösungen." },
      { q: "Montieren Sie auch Personenschutznetze?", a: "Ja. Die Installation von Sicherungs- und Personenauffangnetzen, Randsicherungen und Vogelschutz gehört zu unseren Sondergewerken und wird häufig mit Seilzugangstechnik kombiniert. Wir beraten Sie zur passenden, normgerechten Lösung." },
      { q: "Sind Sie auch überregional im Einsatz?", a: "Ja. Von unserem Sitz in Münster aus arbeiten wir bundesweit und international – unsere Referenzen reichen von Deutschland über die Niederlande, Dänemark und Ungarn bis in die VAE, die USA und Kanada." },
    ],
  },
  {
    slug: "reinigung",
    label: "Industrie- & Höhenreinigung",
    title: "Industrie- & Höhenreinigung",
    lead: "Materialschonende Membran- & Glasreinigung ohne Gerüst – mit biologisch abbaubaren Mitteln.",
    intro:
      "Membranen reagieren empfindlich auf aggressive Reiniger. Montageservice Duttle reinigt textile Bauwerke und Glasfassaden materialschonend per Seilzugangstechnik – ohne teure Hubsteiger oder Gerüste, oft als einziger sichere Weg, alle Bereiche zu erreichen.",
    image: u("photo-1486406146926-c627a92ad1ab"),
    sections: [
      {
        h: "Unser Reinigungsansatz",
        bullets: [
          "Nur oberflächenschonende, biologisch abbaubare Reinigungsmittel",
          "Schutz der Materialeigenschaften (z. B. Weichmacher in PVC)",
          "Optional: Nano-Versiegelung & Glanzbehandlung nach der Reinigung",
          "Umweltbewusste, ressourcenschonende Verfahren",
        ],
      },
      {
        h: "Einsatzbereiche",
        bullets: [
          "Membrandächer & textile Fassaden",
          "Glas- & Fassadenreinigung in großer Höhe",
          "Industrie-, Anlagen- & Hallenreinigung",
          "Individuelle Reinigungskonzepte je Objekt",
        ],
      },
    ],
    faq: [
      { q: "Warum keine handelsüblichen Reiniger für Membranen?", a: "Aggressive Reiniger können Membranen dauerhaft schädigen – bei PVC etwa, indem sie Weichmacher herauslösen und so die Haltbarkeit verringern. Wir setzen ausschließlich oberflächenschonende, biologisch abbaubare Mittel ein, die auf das jeweilige Material abgestimmt sind." },
      { q: "Wie reinigen Sie schwer zugängliche Fassaden?", a: "Über Seilzugangstechnik nach DGUV- und TRBS-Vorgaben. So erreichen wir auch hohe, verwinkelte oder exponierte Bereiche sicher – ohne teure Hubsteiger oder Gerüste. In vielen Fällen ist das die einzige wirtschaftliche Möglichkeit, alle Flächen zu reinigen." },
      { q: "Bieten Sie auch eine Versiegelung an?", a: "Ja, optional. Nach der Reinigung kann eine Nano-Versiegelung aufgebracht werden, die Schmutz und Wasser besser abperlen lässt und die nächste Reinigung erleichtert. Ob das sinnvoll ist, hängt von Material und Standort ab – wir beraten Sie dazu." },
      { q: "Wie oft sollte gereinigt werden?", a: "Das hängt von Standort, Umweltbelastung und Material ab. Für eine gleichbleibende Optik und Lichttransluzenz empfiehlt sich ein regelmäßiges Intervall, oft kombiniert mit der turnusmäßigen Inspektion. Wir erstellen Ihnen ein passendes Wartungskonzept." },
    ],
  },
  {
    slug: "inspektion-wartung",
    label: "Inspektion & Wartung",
    title: "Inspektion, Wartung, Dokumentation & Reparatur",
    lead: "Regelmäßige Prüfung von Material und Befestigung – für die Langlebigkeit Ihrer Bauwerke.",
    intro:
      "Um die Langlebigkeit Ihrer Bauwerke zu sichern, empfiehlt sich eine regelmäßige Wartung. Sowohl das Material als auch die Befestigungsmittel sollten in festen Abständen überprüft und bei Bedarf repariert werden. Wir dokumentieren den Zustand lückenlos und beheben Schäden direkt mit.",
    image: u("photo-1473341304170-971dccb5ac1e"),
    sections: [
      {
        h: "Unsere Leistungen",
        bullets: [
          "Inspektion von Material & Befestigungsmitteln",
          "Lückenlose Zustandsdokumentation",
          "Reparatur & Instandsetzung bei Bedarf",
          "Wiederkehrende Wartung nach Intervall",
        ],
      },
      {
        h: "Warum regelmäßige Wartung",
        p: [
          "Frühzeitig erkannte Schäden lassen sich günstig beheben, bevor sie zum Ausfall führen. Eine dokumentierte Wartung erhält Funktion, Optik und Sicherheit Ihres Bauwerks – und liefert zugleich die Nachweise, die Betreiber gegenüber Versicherung und Behörden benötigen.",
        ],
      },
    ],
    faq: [
      { q: "In welchen Abständen sollte gewartet werden?", a: "Das richtet sich nach Bauwerk, Material und Beanspruchung. Üblich ist eine wiederkehrende Inspektion in festen Intervallen, oft jährlich. Wir legen gemeinsam mit Ihnen ein sinnvolles Wartungsintervall fest und erinnern Sie an anstehende Termine." },
      { q: "Was umfasst die Dokumentation?", a: "Wir halten den Ist-Zustand von Material und Befestigung fest, dokumentieren festgestellte Schäden mit Bildern und beschreiben die durchgeführten Maßnahmen. So erhalten Sie einen prüfsicheren Nachweis für den Werterhalt und gegenüber Dritten." },
      { q: "Reparieren Sie auch gleich vor Ort?", a: "Ja. Kleinere Schäden beheben wir direkt im Zuge der Inspektion. Bei größeren Reparaturen erstellen wir ein Angebot und stimmen den Ablauf mit Ihnen ab – auf Wunsch ebenfalls per Seilzugangstechnik ohne Gerüst." },
    ],
  },
];

export const leistungBySlug = (slug: string) =>
  leistungen.find((l) => l.slug === slug);
