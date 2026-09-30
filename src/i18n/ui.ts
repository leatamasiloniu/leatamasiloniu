export type Lang = 'en' | 'ro';
export type PageKey = 'home' | 'work' | 'savoir' | 'art' | 'about' | 'contact';

const base: Record<Lang, Record<PageKey, string>> = {
  en: { home: '/', work: '/work', savoir: '/savoir-faire', art: '/savoir-faire/painting-drawing', about: '/about', contact: '/contact' },
  ro: { home: '/ro', work: '/ro/proiecte', savoir: '/ro/savoir-faire', art: '/ro/savoir-faire/pictura-si-desen', about: '/ro/despre', contact: '/ro/contact' },
};

export function path(lang: Lang, key: PageKey): string {
  return base[lang][key];
}

export function projectPath(lang: Lang, slug: string): string {
  return `${base[lang].work}/${slug}`;
}

export const other = (lang: Lang): Lang => (lang === 'en' ? 'ro' : 'en');

/** "Lea Tămășiloniu" page titles, without dashes */
export const pageTitle = (name: string) => `${name} | Lea Tămășiloniu`;

export const ui = {
  en: {
    skip: 'Skip to content',
    toTop: 'Back to top',
    nav: { work: 'Work', savoir: 'Savoir-Faire', about: 'About', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
    studio: 'Lea Tămășiloniu Studio',
    available: 'Open to new clients',
    since: 'Since',
    heroLine: 'Consultancy for creative businesses',
    statement: 'I help creative businesses run as beautifully as the work they make. Calm systems, clear rhythms and projects delivered',
    statementEm: 'with an eye for quality.',
    howIHelp: 'How I can help',
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
    available: 'Disponibilă pentru clienți noi',
    since: 'Din',
    heroLine: 'Consultanță pentru afaceri creative',
    statement: 'Ajut afacerile creative să funcționeze la fel de frumos ca lucrurile pe care le creează. Sisteme calme, ritmuri clare și proiecte livrate',
    statementEm: 'cu un ochi atent la calitate.',
    howIHelp: 'Cum te pot ajuta',
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
      palette: 'Paletă',
      next: 'Proiectul următor',
      soon: 'Studiul de caz complet urmează în curând.',
    },
    cta: { q: 'Ai ceva în minte?', a: 'Hai să vorbim' },
  },
} as const;

/** The consultancy: four ways to work together. */
export const offers = {
  en: [
    {
      title: 'Operations review',
      body: 'A clear look at how your business really runs: where time and money slip away, and what to fix first.',
      items: ['Conversations with you and your team', 'A map of how work flows today', 'A short plan with clear priorities'],
    },
    {
      title: 'Systems & SOPs',
      body: 'Processes, operating rhythms and reporting your team can actually follow, built to last as you grow.',
      items: ['SOPs written with your team', 'Operating rhythms (EOS, Level 10)', 'Reporting and KPIs that mean something'],
    },
    {
      title: 'Projects & events',
      body: 'Launches, events and production projects run end to end, from the first brief to the final handover.',
      items: ['Planning, budgets and timelines', 'Suppliers and partners, managed', 'Delivery on the day'],
    },
    {
      title: 'Ongoing support',
      body: 'A few days a month on your side, keeping operations steady while you focus on the work.',
      items: ['Set days each month', 'Regular check-ins with your team', 'Help with hiring, onboarding and training'],
    },
  ],
  ro: [
    {
      title: 'Analiză operațională',
      body: 'O privire clară asupra felului în care funcționează afacerea ta: unde se pierd timp și bani și ce merită rezolvat mai întâi.',
      items: ['Discuții cu tine și cu echipa', 'O hartă a felului în care circulă munca azi', 'Un plan scurt, cu priorități clare'],
    },
    {
      title: 'Sisteme și proceduri',
      body: 'Procese, ritmuri de lucru și raportare pe care echipa ta le poate urma cu adevărat, gândite să dureze pe măsură ce crești.',
      items: ['Proceduri (SOP) scrise împreună cu echipa', 'Ritmuri de lucru (EOS, Level 10)', 'Raportare și KPI care spun ceva'],
    },
    {
      title: 'Proiecte și evenimente',
      body: 'Lansări, evenimente și proiecte de producție duse de la cap la coadă, de la primul brief până la predarea finală.',
      items: ['Planificare, bugete și termene', 'Relația cu furnizorii și partenerii', 'Coordonare în ziua evenimentului'],
    },
    {
      title: 'Sprijin continuu',
      body: 'Câteva zile pe lună alături de tine, ca operațiunile să meargă constant, iar tu să te poți concentra pe ce faci cel mai bine.',
      items: ['Zile stabilite în fiecare lună', 'Întâlniri regulate cu echipa', 'Sprijin la recrutare, integrare și training'],
    },
  ],
} as const;

/** The expertise behind the consultancy. */
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
      title: 'Detaliu',
      body: 'Brand, ambalaje și producție tipografică, tratate cu ochiul unui designer și disciplina unui producător.',
      items: ['Ambalaje și producție tipografică', 'Finisaje și relația cu tipografiile', 'Consecvență de brand pe toate canalele', 'Coordonare de campanii și conținut', 'Adobe Creative Suite'],
    },
  ],
} as const;
