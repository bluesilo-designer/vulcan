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
