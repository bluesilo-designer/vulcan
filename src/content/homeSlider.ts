/* Home, slider layout (v2, ?hm=s). Written 28 Oct 2026 from the client's
   positioning: Blue Silo develops and integrates defence systems in four
   areas. No new claims: every line restates what the product pages and the
   technical proposal already say, filtered through CLAUDE.md section 5. */

export type Slide = { k: string; icon: string; h: string; line: string; img: string; cta: [string, string] };

/* One slide per capability area. Images are already in /public/media. */
export const HS_SLIDES: Slide[] = [
  { k: 'Training systems', icon: 'ph-crosshair', img: 'sim-command-4k.jpg',
    h: 'Plan, run and close every training day in one system',
    line: 'Bookings, trainees, lanes and equipment in one place, from the first request to the final result.',
    cta: ['Explore training systems', '/products/trms'] },
  { k: 'System integration', icon: 'ph-plugs-connected', img: 'integration-bench.jpg',
    h: 'Many suppliers. One working system.',
    line: 'We connect targetry, simulators, video and facility systems, so your teams work from one picture.',
    cta: ['See how we integrate', '/integration'] },
  { k: 'Monitoring and intelligence', icon: 'ph-eye', img: 'look/command-dusk.jpg',
    h: 'See what is happening, as it happens',
    line: 'Live video, vision AI and equipment health, so operators act on alerts instead of watching screens.',
    cta: ['Explore monitoring', '/products/vms'] },
  { k: 'Enterprise management', icon: 'ph-stack', img: 'ewms.jpg',
    h: 'Know where every asset is, and who holds it',
    line: 'Weapon custody, administration and resource planning, with a clear record behind every decision.',
    cta: ['Explore enterprise systems', '/products/ewms'] },
];

export const HS_INTRO = {
  label: 'What we do',
  h: 'Four capabilities. One integrated approach.',
  p: 'We design, develop and integrate defence systems, then support them for the long term. Most programmes need more than one of these, so we build them to work together.',
};

/* Capability cards: [title, line, image, link] */
export const HS_CAPS: [string, string, string, string, string][] = [
  ['ph-crosshair', 'Training systems', 'Resource planning, range management and simulator training, run from one place.', 's-firingline.jpg', '/products/trms'],
  ['ph-plugs-connected', 'System integration', 'Software, hardware and third-party platforms connected into one working environment.', 'c/integration.jpg', '/integration'],
  ['ph-eye', 'Monitoring and intelligence', 'Video, vision AI and health monitoring that turn raw data into clear alerts.', 'vms.jpg', '/products/vms'],
  ['ph-stack', 'Enterprise management', 'Administration, asset custody and resource allocation, with a full audit trail.', 'as.jpg', '/products/ewms'],
];

/* One line per product for the product grid. Falls back to the product role. */
export const HS_PRODUCT_LINES: Record<string, string> = {
  trms: 'Book, run and close simulator training from one system.',
  rcs: 'Run the whole range from one place, from readiness checks to debrief.',
  hums: 'Spot equipment faults early and plan maintenance before training stops.',
  vms: 'Record, review and search training video, with vision AI alerts as they happen.',
  ewms: 'Control who takes which weapon and when, with every issue and return recorded.',
  eams: 'Issue and count back ammunition against each booking.',
  pwats: 'Know where people, weapons and equipment are on the range.',
  as: 'Bookings, visitors and access, handled before anyone arrives.',
};

export const HS_PROOF = {
  h: 'Built for the field. Ready to show you.',
  p: 'Our systems are designed for secure, isolated sites and real training days, not for a demo room.',
  /* Counts are derived in the component; the third item is a mechanism, not a number. */
  offline: ['Offline', 'Runs on air-gapped sites, with no internet connection needed'],
};

export const HS_FEATURE = {
  label: 'Featured work',
  h: 'Simulator training, managed end to end',
  p: 'Our training resource management system takes a booking from request to result. Lanes are assigned, equipment is issued and returned, and scores appear live on screen. It is ready to demonstrate today.',
  cta: ['See how it works', '/products/trms'],
  img: 'p/trms-hero-dusk.jpg',
};

export const HS_WHY_H = 'More than technology. A long-term partner.';

export const HS_WHY: [string, string, string][] = [
  ['ph-shield-star', 'Defence focus', 'We know how ranges, armouries and control rooms really run.'],
  ['ph-plugs-connected', 'Built to integrate', 'Clear, documented interfaces to the systems you already have.'],
  ['ph-lock-key', 'Secure by design', 'Offline operation, encryption and role-based access as standard.'],
  ['ph-lifebuoy', 'Long-term support', 'From installation and user training to updates on site.'],
];

export const HS_CTA = {
  title: 'Talk to our team about your next programme',
  line: 'Tell us what you need. We will show you how our systems can help.',
};
