import type { ImageMetadata } from 'astro';
import tiles from '../assets/work/tiles.jpg';
import diary from '../assets/work/diary.jpg';
import candles from '../assets/work/candles.jpg';
import roses from '../assets/work/roses.jpg';

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
  /** Placeholder photos for now: Lea's own photographs, to be swapped for project imagery. */
  image?: ImageMetadata;
  alt?: { en: string; ro: string };
  palette: Palette;
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
    image: tiles,
    alt: { en: 'Green and white marble checkerboard floor in sunlight', ro: 'Pardoseală de marmură în carouri verzi și albe, în lumina soarelui' },
    palette: { swatches: ['#CBD6A5', '#92A163', '#152119'], bg: '#F7F8F1', ink: '#152119' },
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
    image: diary,
    alt: { en: 'Pink linen-bound 2025 diary on a hot pink cover, with a rainbow of light', ro: 'Agendă 2025 legată în pânză roz, pe o copertă roz aprins, cu un curcubeu de lumină' },
    palette: { swatches: ['#C0828B', '#88263C', '#060505'], bg: '#F5EBEC', ink: '#88263C' },
    soon: true,
    en: {
      kind: 'Industry event',
      role: 'Planning & delivery',
      intro: 'My most recent industry event, created with GF Smith.',
      points: [],
    },
    ro: {
      kind: 'Eveniment de industrie',
      role: 'Planificare și execuție',
      intro: 'Cel mai recent eveniment de industrie, creat alături de GF Smith.',
      points: [],
    },
  },
  {
    slug: 'msp-foilco-fedrigoni',
    name: 'MSP × Foilco × Fedrigoni',
    client: 'Mount Street Printers × Foilco × Fedrigoni',
    year: '2025',
    image: candles,
    alt: { en: 'Rows of coral, mint and lilac taper candles hanging in a shop window', ro: 'Rânduri de lumânări coral, mentă și liliachii atârnate într-o vitrină' },
    palette: { swatches: ['#AD8F51', '#B2331E', '#582E25'], bg: '#F3DEDB', ink: '#582E25' },
    en: {
      kind: 'Industry event, 70+ guests',
      role: 'Planning & delivery',
      intro: 'An industry event for 70+ guests, planned and delivered end to end.',
      points: [
        'Managed logistics, suppliers and stakeholder communication from start to finish.',
        'Brought together three names from the print and paper industry for one event.',
        'Opened new business conversations with 50+ prospective clients.',
      ],
    },
    ro: {
      kind: 'Eveniment de industrie, 70+ invitați',
      role: 'Planificare și execuție',
      intro: 'Un eveniment de industrie pentru peste 70 de invitați, planificat și livrat de la cap la coadă.',
      points: [
        'Am gestionat logistica, furnizorii și comunicarea cu partenerii de la început până la final.',
        'Am reunit trei nume din industria tiparului și a hârtiei într-un singur eveniment.',
        'Am deschis discuții de business cu peste 50 de potențiali clienți.',
      ],
    },
  },
  {
    slug: 'watchhouse',
    name: 'WatchHouse',
    client: 'WatchHouse',
    year: '2023–24',
    image: roses,
    alt: { en: 'Garden roses in a green glass vase on a steel counter', ro: 'Trandafiri de grădină într-o vază de sticlă verde, pe un blat de oțel' },
    palette: { swatches: ['#E29876', '#91AA3D', '#9F4C4D'], bg: '#FAEFE9', ink: '#9F4C4D' },
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
    client: 'The Whole World and His Dog',
    year: '2024–25',
    palette: brand,
    en: {
      kind: 'Illustration & book launch',
      role: 'Illustrator & launch event',
      intro: 'Illustrations for The Whole World and His Dog, and the launch event that introduced it.',
      points: ['Illustrated the book.', 'Planned and delivered its launch event.'],
    },
    ro: {
      kind: 'Ilustrație și lansare de carte',
      role: 'Ilustrație și eveniment de lansare',
      intro: 'Ilustrațiile pentru The Whole World and His Dog și evenimentul de lansare care l-a prezentat.',
      points: ['Am ilustrat cartea.', 'Am planificat și organizat evenimentul de lansare.'],
    },
  },
];

/** Year as shown on the site, e.g. "Since 2024" / "Din 2024". */
export function yearLabel(p: Project, since: string): string {
  return p.since ? `${since} ${p.year}` : p.year;
}
