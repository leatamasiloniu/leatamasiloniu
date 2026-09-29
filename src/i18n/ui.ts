export type Lang = 'en' | 'ro';
export type PageKey = 'home' | 'work' | 'savoir' | 'about' | 'contact';

const base: Record<Lang, Record<PageKey, string>> = {
  en: { home: '/', work: '/work', savoir: '/savoir-faire', about: '/about', contact: '/contact' },
  ro: { home: '/ro', work: '/ro/proiecte', savoir: '/ro/savoir-faire', about: '/ro/despre', contact: '/ro/contact' },
};

export function path(lang: Lang, key: PageKey): string {
  return base[lang][key];
}

export function projectPath(lang: Lang, slug: string): string {
  return `${base[lang].work}/${slug}`;
}

export const other = (lang: Lang): Lang => (lang === 'en' ? 'ro' : 'en');

export const ui = {
  en: {
    skip: 'Skip to content',
    toTop: 'Back to top',
    nav: { work: 'Work', savoir: 'Savoir-Faire', about: 'About', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
    studio: 'Lea Tămășiloniu Studio',
    available: 'Taking on select projects',
    heroLine: 'Operations · Delivery · Craft',
    statement: 'I bring structure to creative businesses — the systems, rhythms and projects behind work done well,',
    statementEm: 'with an eye for quality.',
    whatIDo: 'What I do',
    moreSavoir: 'More on Savoir-Faire',
    selectedWork: 'Selected work',
    allWork: 'All work',
    closer: 'A closer look',
    prev: 'Previous',
    next: 'Next',
    footer: {
      contact: 'Contact',
      follow: 'Follow',
      studio: 'Studio',
      studioLine: 'Working with clients in London and across Europe',
      availability: 'Availability',
    },
    project: {
      client: 'Client',
      role: 'Role',
      year: 'Year',
      discipline: 'Discipline',
      palette: 'Palette',
      next: 'Next project',
      soon: 'Full case study coming soon.',
    },
    cta: { q: 'Have something in mind?', a: 'Start a conversation' },
  },
  ro: {
    skip: 'Sari la conținut',
    toTop: 'Înapoi sus',
    nav: { work: 'Proiecte', savoir: 'Savoir-Faire', about: 'Despre', contact: 'Contact' },
    menu: 'Meniu',
    close: 'Închide',
    langLabel: 'Limba',
    studio: 'Lea Tămășiloniu Studio',
    available: 'Disponibilă pentru proiecte selectate',
    heroLine: 'Operațiuni · Execuție · Meșteșug',
    statement: 'Aduc structură în afacerile creative: sistemele, ritmurile și proiectele din spatele lucrului bine făcut,',
    statementEm: 'cu un ochi atent la calitate.',
    whatIDo: 'Ce fac',
    moreSavoir: 'Mai multe despre Savoir-Faire',
    selectedWork: 'Proiecte selectate',
    allWork: 'Toate proiectele',
    closer: 'Mai de aproape',
    prev: 'Înapoi',
    next: 'Înainte',
    footer: {
      contact: 'Contact',
      follow: 'Urmărește',
      studio: 'Studio',
      studioLine: 'Lucrez cu clienți din Londra și din întreaga Europă',
      availability: 'Disponibilitate',
    },
    project: {
      client: 'Client',
      role: 'Rol',
      year: 'An',
      discipline: 'Disciplină',
      palette: 'Paletă',
      next: 'Proiectul următor',
      soon: 'Studiul de caz complet urmează în curând.',
    },
    cta: { q: 'Ai ceva în minte?', a: 'Hai să vorbim' },
  },
} as const;

export const services = {
  en: [
    {
      title: 'Structure',
      body: 'Operations built to last: SOPs, operating rhythms, reporting and the systems that keep a business calm as it grows.',
      items: ['SOP design and rollout', 'Operating rhythms (EOS, Level 10)', 'Reporting, KPIs and reviews', 'Workflow and process improvement', 'Recruitment, onboarding and training'],
    },
    {
      title: 'Delivery',
      body: 'Projects, launches and events run end to end, from the first brief to the final handover.',
      items: ['End-to-end project coordination', 'Events and launches', 'Supplier and stakeholder management', 'Milestones, risks and dependencies', 'Client delivery'],
    },
    {
      title: 'Craft',
      body: 'Brand, packaging and print production, handled with a designer’s eye and a producer’s discipline.',
      items: ['Packaging and print production', 'Print finishes and supplier liaison', 'Brand consistency across touchpoints', 'Campaign and content coordination', 'Adobe Creative Suite'],
    },
  ],
  ro: [
    {
      title: 'Structură',
      body: 'Operațiuni gândite să dureze: proceduri, ritmuri de lucru, raportare și sistemele care păstrează o afacere calmă pe măsură ce crește.',
      items: ['Proceduri operaționale standard (SOP)', 'Ritmuri de lucru (EOS, Level 10)', 'Raportare, KPI și analize periodice', 'Optimizarea fluxurilor și proceselor', 'Recrutare, integrare și training'],
    },
    {
      title: 'Execuție',
      body: 'Proiecte, lansări și evenimente duse de la cap la coadă, de la primul brief până la predarea finală.',
      items: ['Coordonare de proiect de la cap la coadă', 'Evenimente și lansări', 'Relația cu furnizorii și partenerii', 'Etape, riscuri și dependențe', 'Livrare către client'],
    },
    {
      title: 'Meșteșug',
      body: 'Brand, ambalaje și producție tipografică, tratate cu ochiul unui designer și disciplina unui producător.',
      items: ['Ambalaje și producție tipografică', 'Finisaje și relația cu tipografiile', 'Consecvență de brand pe toate canalele', 'Coordonare de campanii și conținut', 'Adobe Creative Suite'],
    },
  ],
} as const;
