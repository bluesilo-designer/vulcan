import { PRODUCTS, brandOf } from '../content/products';
import { isVisible } from './site';

/* Share images that exist for each product; others fall back to the default. */
const SHARE_IMAGE: Record<string, string | undefined> = {
  trms: '/media/p/trms-hero-steel.jpg', as: '/media/as.jpg', ewms: '/media/ewms.jpg', eams: '/media/eams.jpg',
  hums: '/media/hums.jpg', pwats: '/media/pwats.jpg', vms: '/media/vms.jpg', eva: '/media/eva.jpg',
};

/* Where a product's one-line "decides" text no longer describes it. */
const DESCRIPTION: Record<string, string> = {
  trms: 'One place to plan, run and close out simulator-based training: conflict-checked bookings, live sessions, equipment issue and return, on one platform.',
};

export type RouteMeta = { path: string; title: string; description: string; image?: string };


/* Per route title and description. Also read by scripts/prerender.mjs
   through the build, so every route ships its own static <head>. */
export const ROUTE_META: RouteMeta[] = [
  { path: '/', title: 'Blue Silo. Defence and Security Technology',
    description: 'Mission-critical systems for military training, range operations, asset accountability and operational readiness, built to integrate.' },
  { path: '/products', title: 'Systems',
    description: 'Seven systems and a partner video platform that cover a training facility from the gate to the debrief.' },
  ...PRODUCTS.filter((p) => isVisible(p.id)).map((p) => {
    const b = brandOf(p.id);
    const name = b ? (b.brand ? `${b.brand}, ${b.sys}` : b.sys) : p.name;
    return { path: `/products/${p.id}`, title: name, description: DESCRIPTION[p.id] ?? `${b?.sys ?? p.name}. ${p.decides}`.slice(0, 160),
      image: SHARE_IMAGE[p.id] };
  }),
  { path: '/integration', title: 'Integration',
    description: 'How Blue Silo systems connect to targetry, access control, building management and enterprise platforms, with an owner for every interface.' },
  { path: '/assurance', title: 'Assurance',
    description: 'Secure by design: licensing, hardening, tamper-proof architecture, multi-factor sign-in, network segregation and standards alignment.' },
  { path: '/company', title: 'Company',
    description: 'Blue Silo is a Singapore-headquartered defence technology company delivering mission-critical systems across Southeast Asia and APAC.' },
  { path: '/contact', title: 'Contact',
    description: 'Talk to the people who build it: procurement, technical integration, or anything else.' },
];

export const metaFor = (path: string) => ROUTE_META.find((r) => r.path === path);
