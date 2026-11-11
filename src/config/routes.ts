import { PRODUCTS, brandOf } from '../content/products';
import { isLive, isVisible, shown } from './site';

/* Share images that exist for each product; others fall back to the default. */
const SHARE_IMAGE: Record<string, string | undefined> = {
  trms: '/media/p/trms-hero-steel.jpg', as: '/media/as.jpg', ewms: '/media/ewms.jpg', eams: '/media/eams.jpg',
  hums: '/media/hums.jpg', pwats: '/media/pwats.jpg', vms: '/media/vms.jpg', eva: '/media/eva.jpg',
};

/* One full sentence per product for search results and link previews (11 Nov 2026).
   The earlier fallback cut the internal "decides" text at 160 characters, mid sentence. */
const DESCRIPTION: Record<string, string> = {
  trms: 'One place to plan, run and close out simulator-based training: conflict-checked bookings, live sessions, equipment issue and return, on one platform.',
  rcs: 'Range Management System: run the whole range from one place, from readiness checks and live control to the debrief.',
  hums: 'Health and Utilisation Monitoring System: spot equipment faults early and plan maintenance before training stops.',
  vms: 'Video Management System: record, review and search training video, with vision AI alerts as events happen.',
  ewms: 'Electronic Weapon Management System: control who takes which weapon and when, with every issue and return recorded.',
};
const OURS = PRODUCTS.filter((p) => isVisible(p.id) && !brandOf(p.id)?.partner).length;
const WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

export type RouteMeta = { path: string; title: string; description: string; image?: string };


/* Per route title and description. Also read by scripts/prerender.mjs
   through the build, so every route ships its own static <head>. */
export const ROUTE_META: RouteMeta[] = [
  { path: '/', title: 'Blue Silo. Defence and Security Technology',
    description: 'Blue Silo designs, develops and integrates defence systems for training, monitoring, enterprise management and the enhancement of existing capabilities.' },
  { path: '/products', title: 'Systems',
    description: `${WORDS[OURS] ?? OURS} Blue Silo systems and a partner video platform for training, range operations, monitoring and asset control. Use one, or connect them all.` },
  ...PRODUCTS.filter((p) => isVisible(p.id) && isLive(p.id)).map((p) => {
    const b = brandOf(p.id);
    const name = b ? (b.brand ? `${b.brand}, ${b.sys}` : b.sys) : p.name;
    return { path: `/products/${p.id}`, title: name, description: DESCRIPTION[p.id] ?? `${b?.sys ?? p.name}. ${p.decides}`.slice(0, 160),
      image: SHARE_IMAGE[p.id] };
  }),
  { path: '/integration', title: 'Integration',
    description: 'How Blue Silo systems connect to targetry, access control, building management and enterprise platforms, with an owner for every interface.' },
  { path: '/assurance', title: 'Assurance',
    description: 'Secure and safe by design: role-based access, system hardening, separated and monitored networks, encrypted offline updates and alignment with ISO/IEC 27001.' },
  { path: '/company', title: 'About Us',
    description: 'Blue Silo designs, develops and integrates defence systems, then supports them for the long term: training, integration, monitoring and enterprise management.' },
  { path: '/faq', title: 'FAQ',
    description: 'Answers to what defence organisations, programme teams and evaluators ask Blue Silo first.' },
  ...(shown('page.privacy') ? [{ path: '/privacy', title: 'Privacy',
    description: 'What Blue Silo collects when you use this site or contact us, why, and the choices you have.' }] : []),
  ...(shown('page.terms') ? [{ path: '/terms', title: 'Terms of use',
    description: 'The terms that apply when you use the Blue Silo website.' }] : []),
  { path: '/security', title: 'Security',
    description: 'How to report a security problem with the Blue Silo website, and where to read how our systems are secured.' },
  { path: '/contact', title: 'Contact',
    description: 'Talk to our team about a product demonstration, your requirements, system integration or long-term support.' },
];

export const metaFor = (path: string) => ROUTE_META.find((r) => r.path === path);
