import type { ImageMetadata } from 'astro';
import mspShop from '../assets/work/msp/shopfront.jpg';
import mspFoil from '../assets/work/msp/foil-wall.jpg';
import mspPress from '../assets/work/msp/press.jpg';
import mspCards from '../assets/work/msp/cards.jpg';
import mspCardTools from '../assets/work/msp/card-tools.jpg';
import dogMap from '../assets/work/dog/map.jpg';
import dogBook from '../assets/work/dog/book.jpg';
import dogCounter from '../assets/work/dog/launch-counter.jpg';
import dogBar from '../assets/work/dog/launch-bar.jpg';
import dogReading from '../assets/work/dog/reading.jpg';
import dogBookshop from '../assets/work/dog/bookshop.jpg';
import dogSigning from '../assets/work/dog/signing.jpg';
import dogTable from '../assets/work/dog/table-bw.jpg';
import dogDog from '../assets/work/dog/dog.jpg';
import dogAudience from '../assets/work/dog/audience.jpg';
import dogGuests from '../assets/work/dog/guests.jpg';
import dogLea from '../assets/work/dog/lea.jpg';
import demInvitation from '../assets/work/demystified/invitation.jpg';
import demTickets from '../assets/work/demystified/tickets.jpg';
import demEnvelope from '../assets/work/demystified/envelope.jpg';
import demMaking from '../assets/work/demystified/making-impressions.jpg';
import demTicketDie from '../assets/work/demystified/ticket-die.jpg';
import demBooklet from '../assets/work/demystified/booklet.jpg';
import demQuote from '../assets/work/demystified/quote-card.jpg';
import demInk from '../assets/work/demystified/ink-cards.jpg';
import demDrinks from '../assets/work/demystified/drinks.jpg';
import demPress from '../assets/work/demystified/press.jpg';
import demLea from '../assets/work/demystified/lea.jpg';
import demPanel from '../assets/work/demystified/panel.jpg';
import demSpeaker from '../assets/work/demystified/speaker.jpg';
import demGuests from '../assets/work/demystified/guests.jpg';
import impInvitation from '../assets/work/impressed/invitation.jpg';
import impFoilPattern from '../assets/work/impressed/foil-pattern.jpg';
import impFoilLetters from '../assets/work/impressed/foil-letters.jpg';
import impEnvelope from '../assets/work/impressed/envelope.jpg';
import impDies from '../assets/work/impressed/brass-dies.jpg';
import impCards from '../assets/work/impressed/cards.jpg';
import impTalk from '../assets/work/impressed/talk.jpg';
import impShowing from '../assets/work/impressed/showing-invite.jpg';
import impMachine from '../assets/work/impressed/foiling-machine.jpg';
import impGuests from '../assets/work/impressed/guests.jpg';
import whLobby1 from '../assets/work/watchhouse/lobby-1.jpg';
import whLobbyWide from '../assets/work/watchhouse/lobby-wide.jpg';
import whStreetWindows from '../assets/work/watchhouse/street-windows.jpg';
import whStreetFront from '../assets/work/watchhouse/street-front.jpg';
import whStreetCorner from '../assets/work/watchhouse/street-corner.jpg';
import whPastry from '../assets/work/watchhouse/pastry.jpg';
import whCans from '../assets/work/watchhouse/cans.jpg';

export interface Palette {
  swatches: [string, string, string];
  /** card background shown on hover */
  bg: string;
  /** title colour on the card, checked for contrast against bg */
  ink: string;
}

interface Localised {
  kind: string;
  role: string;
  intro: string;
  points: string[];
}

export interface Project {
  slug: string;
  name: string;
  italic?: boolean;
  client: string;
  /** e.g. '2025' or '2023–24'. For current work set `since` instead. */
  year: string;
  since?: boolean;
  /** Card image. Some projects still use Lea's own photographs as placeholders. */
  image?: ImageMetadata;
  alt?: { en: string; ro: string };
  /** optional different image for the top of the project page */
  hero?: { image: ImageMetadata; alt: { en: string; ro: string } };
  /** an outside link shown under the project text */
  link?: { href: string; en: string; ro: string };
  palette: Palette;
  /** extra photos shown on the project page */
  gallery?: { image: ImageMetadata; alt: { en: string; ro: string } }[];
  soon?: boolean;
  en: Localised;
  ro: Localised;
}

// Palettes were sampled from each photo (dominant, characterful colours), then hand-checked.
const brand: Palette = { swatches: ['#FAF1EE', '#8C6A5C', '#4A3228'], bg: '#FAF1EE', ink: '#4A3228' };

export const projects: Project[] = [
  {
    slug: 'mount-street-printers',
    name: 'Mount Street Printers',
    client: 'Mount Street Printers, Mayfair',
    year: '2024',
    since: true,
    image: mspShop,
    alt: { en: 'The Mount Street Printers shopfront on Mount Street, Mayfair', ro: 'Vitrina Mount Street Printers de pe Mount Street, Mayfair' },
    hero: { image: mspFoil, alt: { en: 'A wall of foil rolls in every colour above the presses in the Mount Street Printers workshop', ro: 'Un perete de role de folie în toate culorile, deasupra preselor din atelierul Mount Street Printers' } },
    palette: { swatches: ['#E0B25A', '#C8502F', '#1F2A4F'], bg: '#F7EEE6', ink: '#1F2A4F' },
    gallery: [
      { image: mspPress, alt: { en: 'A century-old die-stamping press inked in blue', ro: 'O presă de die-stamping veche de un secol, cu cerneală albastră' } },
      { image: mspCards, alt: { en: 'Lea’s own business cards, printed at Mount Street Printers', ro: 'Cărțile de vizită ale Leei, tipărite la Mount Street Printers' } },
      { image: mspCardTools, alt: { en: 'A business card on the workbench with the copper plate and press tools', ro: 'O carte de vizită pe banc, cu placa de cupru și uneltele presei' } },
    ],
    en: {
      kind: 'Operations & systems',
      role: 'Operations Manager',
      intro: 'Bringing structure to a Mayfair print studio, across sales, production, design and admin.',
      points: [
        'Designed and rolled out 20+ SOPs across key operational functions.',
        'Introduced weekly and quarterly operating rhythms, from leadership meetings to quarterly planning.',
        'Built monthly and quarterly reviews to give leadership clear visibility.',
        'Coordinated recruitment and onboarding for five hires across production, retail and sales.',
        'Improved the Shopify store, from campaign planning to an archive sale.',
        'Delivered launch photography, campaign content and a rebrand across digital and physical touchpoints.',
      ],
    },
    ro: {
      kind: 'Operațiuni și sisteme',
      role: 'Operations Manager',
      intro: 'Structură pentru un atelier de tipar din Mayfair, de la vânzări și producție la design și administrație.',
      points: [
        'Am creat și implementat peste 20 de proceduri operaționale standard (SOP) în funcțiile-cheie.',
        'Am introdus ritmuri de lucru săptămânale și trimestriale, de la ședințele conducerii la planificarea trimestrială.',
        'Am construit analize lunare și trimestriale care oferă conducerii o imagine clară.',
        'Am coordonat recrutarea și integrarea a cinci angajați în producție, retail și vânzări.',
        'Am îmbunătățit magazinul Shopify, de la planificarea campaniilor la o vânzare de arhivă.',
        'Am livrat fotografia de lansare, conținutul de campanie și un rebranding pe canalele digitale și fizice.',
      ],
    },
  },
  {
    slug: 'msp-gf-smith',
    name: 'MSP × GF Smith',
    client: 'Mount Street Printers × GF Smith',
    year: '2026',
    image: demInvitation,
    alt: { en: 'The Die-Stamping, Demystified invitation: mint card with blue, pink, green, yellow and gold die-stamped lines', ro: 'Invitația Die-Stamping, Demystified: carton mentă cu linii în albastru, roz, verde, galben și auriu, imprimate prin die-stamping' },
    palette: { swatches: ['#CFE8DA', '#D63A8A', '#2F6FD0'], bg: '#EEF6F1', ink: '#1F3F80' },
    gallery: [
      { image: demTickets, alt: { en: 'Die-stamped Mount Street Printers ticket sleeves and invitations in blue and mint', ro: 'Mâneci de bilet și invitații Mount Street Printers în albastru și mentă, realizate prin die-stamping' } },
      { image: demEnvelope, alt: { en: 'Pink envelope with blue die-stamped address and blind-embossed rings', ro: 'Plic roz cu adresa imprimată prin die-stamping în albastru și cercuri embosate' } },
      { image: demMaking, alt: { en: '"Making Impressions" blind-embossed on blue card', ro: '„Making Impressions” embosat pe carton albastru' } },
      { image: demTicketDie, alt: { en: 'The ticket sleeve next to the brass die that stamped it', ro: 'Mâneca de bilet lângă clișeul de alamă cu care a fost imprimată' } },
      { image: demBooklet, alt: { en: 'The "Die Stamping: The Art Explained" booklet', ro: 'Broșura „Die Stamping: The Art Explained”' } },
      { image: demQuote, alt: { en: 'A printed card: "Like a live performance, working on a century-old press demands rhythm, instinct and attention."', ro: 'Un card tipărit: „Like a live performance, working on a century-old press demands rhythm, instinct and attention.”' } },
      { image: demInk, alt: { en: '"The smell of the ink, the roar of the press" cards', ro: 'Cărțile „The smell of the ink, the roar of the press”' } },
      { image: demDrinks, alt: { en: 'Half-moon drinks menus in blue and mint', ro: 'Meniuri de băuturi în formă de semilună, albastre și mentă' } },
      { image: demPress, alt: { en: 'Guests filming a live die-stamping demonstration on the press', ro: 'Invitați filmând o demonstrație live de die-stamping la presă' } },
      { image: demLea, alt: { en: 'Lea hosting the evening', ro: 'Lea prezentând seara' } },
      { image: demPanel, alt: { en: 'The panel talk', ro: 'Discuția de panel' } },
      { image: demSpeaker, alt: { en: 'A speaker addressing a full room', ro: 'Un vorbitor în fața unei săli pline' } },
      { image: demGuests, alt: { en: 'Guests talking after the talks', ro: 'Invitați stând de vorbă după prezentări' } },
    ],
    en: {
      kind: 'Die-Stamping, Demystified: An Evening with Mount Street Printers x GF Smith',
      role: 'Planning & delivery',
      intro: 'An evening that opened up the craft of die-stamping, with talks, a live press and printed pieces made for the night. Hosted with GF Smith on Thursday 11 June 2026.',
      points: [
        'Planned and delivered the evening end to end, from partners and speakers to guests and the running order on the night.',
        'Produced the printed pieces: die-stamped invitations and ticket sleeves, envelopes, a booklet explaining the craft, cards and drinks menus.',
        'Brought die-stamping to life with a live press demonstration and a panel talk.',
        'Hosted the evening and welcomed guests.',
      ],
    },
    ro: {
      kind: 'Die-Stamping, Demystified: An Evening with Mount Street Printers x GF Smith',
      role: 'Planificare și execuție',
      intro: 'O seară care a deschis meșteșugul die-stamping-ului (tiparul în relief cu matriță gravată), cu prezentări, o presă funcționând live și materiale tipărite special pentru eveniment. Organizată împreună cu GF Smith, joi, 11 iunie 2026.',
      points: [
        'Am planificat și livrat seara de la cap la coadă, de la parteneri și vorbitori la invitați și desfășurarea evenimentului.',
        'Am produs materialele tipărite: invitații și mâneci de bilet prin die-stamping, plicuri, o broșură care explică tehnica, carduri și meniuri de băuturi.',
        'Am adus tehnica la viață printr-o demonstrație live la presă și o discuție de panel.',
        'Am prezentat seara și am primit invitații.',
      ],
    },
  },
  {
    slug: 'msp-foilco-fedrigoni',
    name: 'MSP × Foilco × Fedrigoni',
    client: 'Mount Street Printers × Foilco × Fedrigoni',
    year: '2025',
    image: impFoilPattern,
    alt: { en: 'Close-up of the silver foiled and embossed pattern with the Mount Street Printers name', ro: 'Detaliu cu modelul embosat, imprimat cu folie argintie, și numele Mount Street Printers' },
    palette: { swatches: ['#D6D8D2', '#56535F', '#171926'], bg: '#EEEEF2', ink: '#171926' },
    gallery: [
      { image: impInvitation, alt: { en: 'The Impressed invitation: navy card with iridescent foiled lettering and an embossed pattern', ro: 'Invitația Impressed: carton bleumarin cu litere imprimate cu folie irizată la cald și un model embosat' } },
      { image: impFoilLetters, alt: { en: 'Iridescent foiled and debossed IMPRESSED lettering on navy card', ro: 'Literele IMPRESSED, imprimate cu folie irizată și presate în carton bleumarin' } },
      { image: impDies, alt: { en: 'The brass dies used for the embossing and foiling', ro: 'Clișeele de alamă folosite pentru embosare și imprimarea cu folie la cald' } },
      { image: impShowing, alt: { en: 'Guests looking at the invitation next to its brass dies at the event', ro: 'Invitați privind invitația lângă clișeele ei de alamă, la eveniment' } },
      { image: impCards, alt: { en: 'The "Make an impression" playing cards, foiled in copper, silver, pink and holographic', ro: 'Cărțile de joc „Make an impression”, cu folie aramie, argintie, roz și holografică' } },
      { image: impMachine, alt: { en: 'Live foiling on a vintage press during the evening', ro: 'Demonstrație live de imprimare cu folie la cald, pe o presă de epocă' } },
      { image: impTalk, alt: { en: 'Lea welcoming guests at the event', ro: 'Lea urând bun venit invitaților la eveniment' } },
      { image: impEnvelope, alt: { en: 'The navy envelope with a blind-embossed Mount Street Printers name', ro: 'Plicul bleumarin cu numele Mount Street Printers embosat' } },
      { image: impGuests, alt: { en: 'Guests gathered in front of a wall of coloured papers during a talk', ro: 'Invitați adunați în fața unui perete de hârtii colorate, în timpul unei prezentări' } },
    ],
    en: {
      kind: 'Impressed: An Evening with Mount Street Printers x Foilco',
      role: 'Planning & delivery',
      intro: 'A celebration of foiling and embossing for 70+ guests, co-hosted with Foilco and sponsored by Fedrigoni and Tomlinson.',
      points: [
        'Planned and delivered the evening end to end: venue, suppliers, sponsors and guests.',
        'Produced the invitation, envelope and a "Make an impression" playing card deck to show what foil can do.',
        'Brought the craft to life with live foiling demonstrations and talks.',
        'Opened new business conversations with 50+ prospective clients.',
      ],
    },
    ro: {
      kind: 'Impressed: An Evening with Mount Street Printers x Foilco',
      role: 'Planificare și execuție',
      intro: 'O seară dedicată imprimării cu folie la cald și embosării, pentru peste 70 de invitați, organizată împreună cu Foilco și susținută de Fedrigoni și Tomlinson.',
      points: [
        'Am planificat și livrat seara de la cap la coadă: locație, furnizori, sponsori și invitați.',
        'Am produs invitația, plicul și un pachet de cărți de joc „Make an impression”, care arată ce se poate obține cu folia la cald.',
        'Am adus meșteșugul la viață prin demonstrații live de imprimare cu folie și prezentări.',
        'Am deschis discuții de business cu peste 50 de potențiali clienți.',
      ],
    },
  },
  {
    slug: 'watchhouse',
    name: 'WatchHouse',
    client: 'WatchHouse',
    year: '2023–24',
    image: whCans,
    alt: { en: 'Rows of WatchHouse nitrogen-infused coffee cans on a green counter', ro: 'Rânduri de doze de cafea WatchHouse cu azot, pe o tejghea verde' },
    hero: { image: whLobby1, alt: { en: 'WatchHouse window graphics in the Art Deco lobby of the Chrysler Building, New York', ro: 'Grafica WatchHouse în vitrinele din holul Art Deco al Chrysler Building, New York' } },
    gallery: [
      { image: whStreetWindows, alt: { en: 'WatchHouse window posters in New York: latte art and the London Bermondsey shop', ro: 'Afișe WatchHouse în vitrine, la New York: latte art și cafeneaua din Bermondsey, Londra' } },
      { image: whLobbyWide, alt: { en: 'The Chrysler Building lobby with the WatchHouse windows', ro: 'Holul Chrysler Building cu vitrinele WatchHouse' } },
      { image: whPastry, alt: { en: 'Pastries and cans of nitro coffee on a green WatchHouse counter', ro: 'Patiserie și doze de cafea nitro pe o tejghea verde WatchHouse' } },
      { image: whStreetFront, alt: { en: 'WatchHouse storefront graphics in New York, with a QR code for the app', ro: 'Grafica vitrinei WatchHouse din New York, cu un cod QR pentru aplicație' } },
      { image: whStreetCorner, alt: { en: 'A WatchHouse site in New York before opening, seen from the street', ro: 'O locație WatchHouse din New York înainte de deschidere, văzută din stradă' } },
    ],
    palette: { swatches: ['#E4D9BE', '#2F8F3A', '#0A3516'], bg: '#F4F1E8', ink: '#0A3516' },
    en: {
      kind: 'Packaging & print production',
      role: 'Creative Designer',
      intro: 'Packaging, print and brand production for a specialty coffee brand, from London flagships to the Chrysler Building in New York.',
      points: [
        'Ran packaging and production projects end to end: brief, suppliers, print finishes and delivery.',
        'Produced print-ready artwork for the Chrysler Building in New York and UK flagship sites.',
        'Cut print costs by 25% by centralising the print supplier relationship.',
        'Restructured the internal asset library, reducing delivery delays.',
        'Before that, as House Supervisor (2020–23), led day-to-day operations in a high-volume, premium setting.',
      ],
    },
    ro: {
      kind: 'Ambalaje și producție tipografică',
      role: 'Creative Designer',
      intro: 'Ambalaje, tipar și producție de brand pentru un brand de cafea de specialitate, de la locațiile din Londra la Chrysler Building din New York.',
      points: [
        'Am coordonat proiecte de ambalare și producție de la cap la coadă: brief, furnizori, finisaje și livrare.',
        'Am pregătit fișiere pentru tipar pentru Chrysler Building din New York și locațiile principale din Marea Britanie.',
        'Am redus costurile de tipar cu 25% prin centralizarea relației cu furnizorul.',
        'Am restructurat biblioteca internă de materiale, reducând întârzierile de livrare.',
        'Înainte, ca House Supervisor (2020–23), am coordonat activitatea zilnică într-un mediu premium, cu volum mare.',
      ],
    },
  },
  {
    slug: 'the-whole-world-and-his-dog',
    name: 'The Whole World and His Dog',
    italic: true,
    client: 'Jonathan Posner, Buchanan Press',
    year: '2024–25',
    image: dogBook,
    alt: { en: 'The Whole World and His Dog by Jonathan Posner, lying on a sunlit brick wall', ro: 'The Whole World and His Dog de Jonathan Posner, pe un zid de cărămidă în soare' },
    hero: { image: dogCounter, alt: { en: 'Copies of the book tied with red ribbon, next to postcards, at the launch', ro: 'Exemplare ale cărții legate cu panglică roșie, lângă cărți poștale, la lansare' } },
    palette: { swatches: ['#D9C27A', '#9A5A45', '#5E6B3A'], bg: '#F6F0E6', ink: '#5A3325' },
    link: { href: 'https://andhisdog.com', en: 'Buy the book at andhisdog.com', ro: 'Cartea se poate cumpăra de pe andhisdog.com' },
    gallery: [
      { image: dogMap, alt: { en: 'Lea’s hand-painted map of Hampstead Heath in the book: The Route of our Thousand Days', ro: 'Harta Hampstead Heath pictată de mână de Lea, în carte: The Route of our Thousand Days' } },
      { image: dogBar, alt: { en: 'Guests at the launch evening, along the coffee bar', ro: 'Invitați la seara de lansare, de-a lungul barului' } },
      { image: dogReading, alt: { en: 'Jonathan Posner reading on the stairs, his dog beside him', ro: 'Jonathan Posner citind pe scări, cu câinele alături' } },
      { image: dogBookshop, alt: { en: 'The Whole World and His Dog in a bookshop window', ro: 'The Whole World and His Dog în vitrina unei librării' } },
      { image: dogSigning, alt: { en: 'Jonathan Posner signing a copy of the book', ro: 'Jonathan Posner semnând un exemplar al cărții' } },
      { image: dogTable, alt: { en: 'The book table from above, with candles and postcards', ro: 'Masa cu cărți văzută de sus, cu lumânări și cărți poștale' } },
      { image: dogDog, alt: { en: 'The guest of honour, surrounded by guests', ro: 'Invitatul de onoare, înconjurat de oaspeți' } },
      { image: dogAudience, alt: { en: 'Guests listening to the reading', ro: 'Invitați ascultând lectura' } },
      { image: dogGuests, alt: { en: 'Guests looking through the postcards', ro: 'Invitați răsfoind cărțile poștale' } },
      { image: dogLea, alt: { en: 'Lea at the launch', ro: 'Lea la lansare' } },
    ],
    en: {
      kind: 'Illustration & book launch',
      role: 'Illustrator & launch event',
      intro: 'Illustrations for Jonathan Posner’s The Whole World and His Dog: A Thousand Days on Hampstead Heath, and the launch evening that introduced it.',
      points: [
        'Illustrated the book, including a hand-painted map of the Heath: The Route of our Thousand Days.',
        'Planned and delivered the launch: guests, a reading, a book signing and a table of postcards and ribbon-wrapped copies.',
      ],
    },
    ro: {
      kind: 'Ilustrație și lansare de carte',
      role: 'Ilustrație și eveniment de lansare',
      intro: 'Ilustrațiile pentru cartea lui Jonathan Posner, The Whole World and His Dog: A Thousand Days on Hampstead Heath, și seara de lansare care a prezentat-o.',
      points: [
        'Am ilustrat cartea, inclusiv o hartă a parcului Hampstead Heath pictată de mână: The Route of our Thousand Days.',
        'Am planificat și organizat lansarea: invitați, o lectură, o sesiune de autografe și o masă cu cărți poștale și exemplare legate cu panglică.',
      ],
    },
  },
];

/** Year as shown on the site, e.g. "Since 2024" / "Din 2024". */
export function yearLabel(p: Project, since: string): string {
  return p.since ? `${since} ${p.year}` : p.year;
}
