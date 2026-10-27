/* Company page, v2 layouts A, B and C (Oct 2026).
   Source: section 1.1 "About Blue Silo" of our own proposal, rewritten as
   sales copy for the public site. Kept generic on purpose: no programme,
   customer, agency or partner names, no product names of other companies,
   no figures we cannot back. Voice: plain, confident, about the training
   day, not about us. */

/* The one line the page exists to land. */
export const CO_LINE = 'Training ranges run on many systems. We make them run as one.';

export const CO_INTRO =
  'Blue Silo is a Singapore software company for military training. We build the systems that plan, run and account for the training day, and connect them to the equipment already on your range.';

/* Short company story: where our knowledge comes from. */
export const CO_STORY =
  'We work inside military training, not around it. Our software already supports simulated firing ranges: the bookings, the armoury, the lanes and the results. It already connects to targetry and training simulators from established industry suppliers.';
export const CO_STORY_2 =
  'That work taught us what a range needs most. Fewer forms. Fewer handovers on paper. One picture of the day that everyone trusts.';

/* Why us. [title, line] */
export const CO_REASONS: [string, string][] = [
  ['A product, not a project', 'Our Training Resource Management System is already built. Your programme starts from working software, configured to how your range runs.'],
  ['Integration is our day job', 'Ranges are never single supplier. We connect to the systems you already own, and agree every interface in writing before we build to it.'],
  ['Same team, start to finish', 'The people who capture your requirements also deploy the system, train your staff and support it for years after.'],
  ['Here in Singapore', 'Close to the ranges we serve, in your time zone, and on site when it matters.'],
];

/* What we do, written as outcomes. [title, line, Phosphor icon] */
export const CO_CAPABILITIES: [string, string, string][] = [
  ['Training management', 'Bookings, trainees and resources planned before the day begins.', 'ph-calendar-check'],
  ['Range operations', 'Readiness, control and live results while training happens.', 'ph-crosshair'],
  ['Armoury and asset accountability', 'Weapons, controlled items and equipment issued, tracked and returned, with an audit trail that closes the day.', 'ph-package'],
  ['Equipment health', 'Faults and usage tracked, so equipment is ready before the session it is booked for.', 'ph-pulse'],
  ['Systems integration', 'Targetry, simulators and facility systems from different suppliers, working together.', 'ph-plugs-connected'],
];

/* Our product across the training day. [stage, line] */
export const CO_TRMS: [string, string][] = [
  ['Plan', 'Bookings, nominal rolls, lanes and resources, set up in five clear steps.'],
  ['Run', 'Check in, issue, conduct and score, with live results for instructors and trainees.'],
  ['Close', 'Assets returned, variances reconciled and results recorded before anyone leaves.'],
  ['Sustain', 'Utilisation, availability and equipment health, reported for the whole centre.'],
];

/* Classes of system we have integrated with. Never name the supplier. */
export const CO_INTEGRATIONS: [string, string][] = [
  ['Virtual targetry', 'Marksmanship and specialised weapon training'],
  ['Tactical mission trainers', 'Team training in simulated terrain'],
  ['Command team trainers', 'Decision making under pressure'],
  ['Integrated operations systems', 'A shared operational picture'],
  ['Vehicle crew trainers', 'Simulators for armoured vehicle crews'],
];
export const CO_PIPELINE = 'New integrations with further international defence technology providers are in development.';

export const CO_LIFECYCLE = ['Requirements', 'Design', 'Development', 'Integration', 'Testing', 'Deployment', 'Configuration', 'Training', 'Support'];

export const CO_WHERE = 'Headquartered in Singapore, delivering across Southeast Asia and APAC';
export const CO_CTA_LINE = 'Tell us how your range runs today. We will show you our software running.';
