/* Company page, v2 layouts A, B and C (Oct 2026).
   Source: section 1.1 "About Blue Silo" of our own proposal, rewritten as
   sales copy for the public site. Kept generic on purpose: no programme,
   customer, agency or partner names, no product names of other companies,
   no figures we cannot back.
   28 Oct 2026: rewritten for the client's positioning. Blue Silo is a
   defence systems development company with four areas of focus; training
   is where it goes deepest, not the whole of what it does.
   Every constant here is used by the v2 layouts only (v1 renders layout 0
   in src/pages/Company.tsx), so they are edited in place. */

/* The one line the page exists to land. */
export const CO_LINE = 'We design, develop and integrate defence systems.';

export const CO_INTRO =
  'Blue Silo is a Singapore-based technology company specialising in military training systems, simulated firing range operations and the integration of complex defence systems.';

/* Short company story: where our knowledge comes from. */
export const CO_STORY =
  'Training is where we go deepest. Our software already supports simulated firing ranges, from bookings and the armoury to lanes and results. It already connects to virtual targetry, simulators and command team trainers from established industry suppliers.';
export const CO_STORY_2 =
  'That experience shapes everything we build: less paperwork, fewer handovers on paper, and one accurate picture that every team can rely on.';

/* v3: our origins, from the client's origin story, kept general: no founder (4 Nov 2026). Replaces
   the "where our experience comes from" copy in Company layout A. */
export const CO_ORIGIN = {
  h: 'Born from experience. Built to solve real challenges.',
  lead: "A founder's understanding of the mission became the foundation of Blue Silo.",
  body: "Our founder's journey began in the military. Firsthand experience in service, training and operations revealed the realities personnel face on the ground.",
  body2: 'Those challenges, limitations and inefficiencies showed where technology could make a practical difference. Blue Silo was built to turn operational needs into purpose-built defence systems designed around the people who use them.',
  pull: 'We build technology with an understanding of the people who use it.',
};

/* Origins, written for the text-only Company layout (A · Text), 5 Nov 2026.
   Same idea as the origins panel: first-hand military experience, real
   operational challenges, systems designed around the people who use them.
   General on purpose: no founder story, no location (client copy rules). */
export const CO_ORIGIN_TEXT = {
  h: 'Born from experience. Built to solve real challenges.',
  big: 'Blue Silo grew out of first-hand experience in military service, training and operations, and a clear view of the realities personnel face on the ground.',
  p1: 'That experience showed where challenges, limitations and inefficiencies hold operations back, and where technology can make a practical difference.',
  p2: 'Blue Silo turns real operational challenges into practical, purpose-built defence systems, designed around the people who use them.',
  pull: 'We do not just build technology for the military. We build it with an understanding of the people who use it.',
};

/* Why us. [title, line] */
export const CO_REASONS: [string, string][] = [
  ['Working software from day one', 'Our Training Resource Management System is already built. You start from software that works, configured to how you operate.'],
  ['Integration is our core skill', 'Defence facilities are never built by one supplier. We connect to the systems you already own, and agree every interface in writing before we build it.'],
  ['One team, start to finish', 'The people who capture your requirements also deploy the system, train your staff and support it over the long term.'],
  ['Based in Singapore', 'Close to the facilities we serve, in your time zone, and on site when you need us.'],
];

/* What we do: the four areas of focus.
   [title, line, Phosphor icon, short line for the four-column strip in B] */
export const CO_CAPABILITIES: [string, string, string, string][] = [
  ['Training systems', 'Training resource management, range management and simulator training, planned, run and recorded in one place.', 'ph-crosshair',
    'Training resources, ranges and simulators, managed in one place.'],
  ['System integration', 'Software, hardware and third-party platforms connected into one working environment. We already integrate virtual targetry, simulators and command team trainers.', 'ph-plugs-connected',
    'Software, hardware and third-party platforms, working as one.'],
  ['Monitoring and intelligence', 'Video management, vision AI, and health and usage monitoring, so you see issues early and equipment is ready when it is needed.', 'ph-eye',
    'Video, vision AI and equipment health, so you see issues early.'],
  ['Enterprise management', 'Administration, asset and weapon accountability, and resource allocation, with a clear audit trail.', 'ph-buildings',
    'Administration, accountability and resources, with a clear audit trail.'],
];

/* A fifth, broader service for the text-only layout (A · Text), chosen by the client on 5 Nov 2026
   so the offer does not read as limited to the four areas above. */
export const CO_EXTRA_SERVICE: [string, string] = [
  'Defence technology consulting',
  'Advice on system architecture, interfaces and upgrade paths, so new and existing systems fit together from the start.',
];

/* Our product across the training day. [stage, line] */
export const CO_TRMS: [string, string][] = [
  ['Plan', 'Bookings, trainee lists, lanes and resources, set up in five steps.'],
  ['Run', 'Check in, issue equipment and run the session, with live results for instructors and trainees.'],
  ['Close', 'Every item returned or flagged, and every result recorded, at the end of the session.'],
  ['Manage', 'Utilisation, availability and equipment health, reported across the whole centre.'],
];

/* Classes of system we have integrated with. Never name the supplier. */
export const CO_INTEGRATIONS: [string, string][] = [
  ['Virtual targetry', 'Marksmanship and specialist weapon training'],
  ['Tactical mission trainers', 'Team training in simulated terrain'],
  ['Command team trainers', 'Decision-making practice for commanders and staff'],
  ['Integrated operations systems', 'A shared operational picture'],
  ['Vehicle crew trainers', 'Simulators for armoured vehicle crews'],
];
export const CO_PIPELINE = 'We are developing further integrations with international defence technology providers.';

export const CO_LIFECYCLE = ['Requirements', 'Design', 'Development', 'Integration', 'Testing', 'Deployment', 'Configuration', 'Training', 'Support'];

export const CO_WHERE = 'Headquartered in Singapore, delivering across Southeast Asia and APAC';
export const CO_CTA_LINE = 'Tell us what you need. We will show you our software working.';
export const CO_WHERE_CREDIT = {
  author: 'Bibbobibib',
  source: 'https://commons.wikimedia.org/wiki/File:Marina_Bay_SG.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
};

/* Company v3 uses its own photo set; earlier layouts keep the original files. */
const COMPANY_V3_IMAGES: Record<string, string> = {
  hero: 'company-v3-western/hero.jpg',
  floor: 'company-v3-western/training.jpg',
  integration: 'company-v3-western/integration.jpg',
  where: 'company-v3-western/where-real-singapore.jpg',
  region: 'company-v3-western/where-real-singapore.jpg',
  office: 'company-v3-western/hero.jpg',
  control: 'home-v3-western/system-rcs.jpg',
  vision: 'home-v3-western/system-vms.jpg',
  security: 'home-v3-western/assurance-operations.jpg',
  partners: 'home-v3-western/partners-table.jpg',
};
export const companyImage = (name: string, v3: boolean) => v3 ? COMPANY_V3_IMAGES[name] || `c/${name}.jpg` : `c/${name}.jpg`;
