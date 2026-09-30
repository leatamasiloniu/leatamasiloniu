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
    heroLine: 'Consultancy for growing businesses',
    statement: 'I help growing businesses see what’s holding them back and build the structure to move forward. Calm systems, clear plans and events people remember, all',
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
    heroLine: 'Consultanță pentru afaceri în creștere',
    statement: 'Ajut afacerile în creștere să vadă ce le ține pe loc și să construiască structura de care au nevoie ca să meargă mai departe. Sisteme calme, planuri clare și evenimente memorabile, toate',
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
      title: 'Review & plan',
      body: 'I find where time, money and energy slip away, then turn it into a clear plan: priorities, owners and 90-day goals.',
      items: ['Conversations with you and your team', 'An honest picture of how the business runs today', 'A roadmap with clear priorities'],
    },
    {
      title: 'Systems that stick',
      body: 'I set up the structure a growing team needs and guide your people through it until it becomes habit.',
      items: ['Meeting rhythms and a weekly scorecard', 'SOPs written with your team', 'Coaching through the first quarters'],
    },
    {
      title: 'Projects & events',
      body: 'Launches, industry events and brand moments, planned end to end and delivered with care.',
      items: ['Concept, budget and timeline', 'Suppliers, partners and guests', 'Delivery on the day'],
    },
    {
      title: 'Advisory',
      body: 'Regular sessions to keep the momentum, check progress and make the next decision with confidence.',
      items: ['Quarterly planning sessions', 'A sounding board between sessions', 'Support with hiring and onboarding'],
    },
  ],
  ro: [
    {
      title: 'Analiză și plan',
      body: 'Găsesc unde se pierd timpul, banii și energia, apoi transform totul într-un plan clar: priorități, responsabili și obiective pe 90 de zile.',
      items: ['Discuții cu tine și cu echipa', 'O imagine sinceră a felului în care funcționează afacerea azi', 'Un plan cu priorități clare'],
    },
    {
      title: 'Sisteme care rămân',
      body: 'Construiesc structura de care are nevoie o echipă în creștere și îi ghidez pe oameni până când devine obicei.',
      items: ['Ritmuri de întâlniri și indicatori urmăriți săptămânal', 'Proceduri (SOP) scrise împreună cu echipa', 'Îndrumare în primele trimestre'],
    },
    {
      title: 'Proiecte și evenimente',
      body: 'Lansări, evenimente de industrie și momente de brand, planificate de la cap la coadă și livrate cu grijă.',
      items: ['Concept, buget și calendar', 'Furnizori, parteneri și invitați', 'Coordonare în ziua evenimentului'],
    },
    {
      title: 'Consultanță continuă',
      body: 'Întâlniri regulate ca să păstrăm ritmul, să urmărim progresul și să iei următoarea decizie cu încredere.',
      items: ['Sesiuni trimestriale de planificare', 'Un partener de discuție între sesiuni', 'Sprijin la recrutare și integrare'],
    },
  ],
} as const;

/** The expertise behind the consultancy. */
export const services = {
  en: [
    {
      title: 'Structure',
      body: 'Operations built to last: SOPs, operating rhythms, reporting and the systems that keep a business calm as it grows.',
      items: ['SOP design and rollout', 'Weekly and quarterly operating rhythms', 'Reporting, KPIs and reviews', 'Workflow and process improvement', 'Recruitment, onboarding and training'],
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
      items: ['Proceduri operaționale standard (SOP)', 'Ritmuri de lucru săptămânale și trimestriale', 'Raportare, KPI și analize periodice', 'Optimizarea fluxurilor și proceselor', 'Recrutare, integrare și training'],
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
