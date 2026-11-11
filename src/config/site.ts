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
    'Blue Silo designs, develops and integrates defence systems for training, monitoring, enterprise management and the enhancement of existing capabilities.',
  ogImage: '/media/og-default.jpg',
  /* Draft for review and the tender is live: keep search engines out
     until someone with the authority to publish says otherwise. */
  indexable: false,
  /* The floating Content panel, /__demo and the ?v= version switch. Review only.
     Off for production at the client's request (11 Nov 2026), until they ask to
     open it again: every visitor gets the latest version and the default content. */
  reviewTools: false,
} as const;

/* Products shown on the site for now. Hidden products keep their content
   but are left out of navigation, listings, the home page and the build,
   and their URLs redirect to /products. Add an id back to show it again. */
export const VISIBLE_PRODUCTS = ['trms', 'rcs', 'hums', 'vms', 'ewms'];
export const isVisible = (id: string) => VISIBLE_PRODUCTS.includes(id);

/* Products whose own page is open (client, 11 Nov 2026). The others stay listed
   with a "Coming soon" label, like the menu, but their page redirects to /products
   and is left out of the sitemap. Add an id to open its page again. */
export const LIVE_PRODUCTS = ['trms'];
export const isLive = (id: string) => LIVE_PRODUCTS.includes(id);
/* A link to a closed product page falls back to the product overview. */
export const liveHref = (to: string) => {
  const m = to.match(/^\/products\/([a-z]+)/);
  return m && !isLive(m[1]) ? '/products' : to;
};

/* Sections hidden at the client's request. The code and content stay;
   remove a key from this list to bring the section back. */
export const HIDDEN_SECTIONS = [
  'home.tiles',            // the card grid under the systems diagram (23 Oct 2026)
  'home.whereWeOperate',   // "Built for complex defence environments" (23 Oct 2026)
  'company.leadership',    // portrait placeholders (23 Oct 2026)
  'company.disciplines',   // "Disciplines, not headcount" (23 Oct 2026)
  'company.corporate',     // registration table and office photo (23 Oct 2026)
  'homeSlider.products',   // slider home product grid, not ticked in the merged reference (28 Oct 2026)
  'homeChain.dataPassed',  // "Data passed on" chips in the chain panel, replaced by supporting features (5 Nov 2026)
  'homeSlider.feature',    // "Featured work" band with the training system, slider home (5 Nov 2026)
  'homeSlider.why',        // "More than technology. A long-term partner." band, slider home (5 Nov 2026)
  'footer.sitemap',        // "Site map" link in the footer, v3 (11 Nov 2026). sitemap.xml is still built.
  'nav.integration',       // "Integration" item in the header menu, v3 only (11 Nov 2026)
  'homeSlider.proof',      // slider home figures band, not ticked in the merged reference (28 Oct 2026)
  'footer.linkedin',       // v3 footer LinkedIn icon linked to /contact; show again with a real URL (11 Nov 2026)
  'page.privacy',          // Privacy page hidden until legal review (route shows Not found, link and sitemap removed) (11 Nov 2026)
  'page.terms',            // Terms page hidden until legal review (11 Nov 2026)
];
export const shown = (key: string) => !HIDDEN_SECTIONS.includes(key);
