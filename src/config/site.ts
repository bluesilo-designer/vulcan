/* One place for everything the head of every page needs. */
export const SITE = {
  name: 'Blue Silo',
  legalName: 'Blue Silo Pte. Ltd.',
  tagline: 'Transforming Digitally',
  /* Public origin, used for canonical and Open Graph URLs. */
  url: 'https://bluesilo.studio',
  locale: 'en_SG',
  defaultTitle: 'Blue Silo. Defence and Security Technology',
  titleSuffix: 'Blue Silo',
  defaultDescription:
    'Blue Silo designs, develops and integrates mission-critical systems for military training, range operations, asset accountability and operational readiness.',
  ogImage: '/media/og-default.jpg',
  /* Draft for review and the tender is live: keep search engines out
     until someone with the authority to publish says otherwise. */
  indexable: false,
  /* The floating Content panel and hero switcher. Review only, and only
     shown after visiting /__demo. */
  reviewTools: true,
} as const;

/* Products shown on the site for now. Hidden products keep their content
   but are left out of navigation, listings, the home page and the build,
   and their URLs redirect to /products. Add an id back to show it again. */
export const VISIBLE_PRODUCTS = ['trms', 'rcs', 'hums', 'vms', 'ewms'];
export const isVisible = (id: string) => VISIBLE_PRODUCTS.includes(id);

/* Sections hidden at the client's request. The code and content stay;
   remove a key from this list to bring the section back. */
export const HIDDEN_SECTIONS = [
  'home.tiles',            // the card grid under the systems diagram (23 Oct 2026)
  'home.whereWeOperate',   // "Built for complex defence environments" (23 Oct 2026)
  'company.leadership',    // portrait placeholders (23 Oct 2026)
  'company.disciplines',   // "Disciplines, not headcount" (23 Oct 2026)
  'company.corporate',     // registration table and office photo (23 Oct 2026)
  'homeSlider.products',   // slider home product grid, not ticked in the merged reference (28 Oct 2026)
  'homeSlider.proof',      // slider home figures band, not ticked in the merged reference (28 Oct 2026)
];
export const shown = (key: string) => !HIDDEN_SECTIONS.includes(key);
