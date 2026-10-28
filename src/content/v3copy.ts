/* Version 3 copy (28 Oct 2026). Light, punchy, professional.
   Each key is a line exactly as v1/v2 render it; the value is what v3
   shows instead. Applied only in v3 by useV3Copy (src/lib/v3copy.ts), so
   v1 and v2 never change. To trim, delete a row: that line falls back to
   its v2 wording. Rules: same facts, no new claims, short sentences,
   everyday words, zero em-dashes. */

export const V3_COPY: Record<string, string> = {
  /* ---------- Home: hero and trust ---------- */
  'Defence systems that work as one': 'Defence systems that work as one',
  'We design, develop and integrate defence systems across four areas: training, system integration, monitoring and intelligence, and enterprise management.':
    'We design, build and connect defence systems. Training, integration, monitoring and enterprise management, all from one team.',
  'Explore our systems': 'See our systems',
  'Trusted in mission-critical environments': 'Trusted where it matters',
  'Supporting defence, government and homeland security organisations across Singapore and APAC.':
    'Working with defence, government and homeland security teams across Singapore and APAC.',

  /* ---------- Home: modernising (back from v1) ---------- */
  'Modernising defence operations': 'Defence runs on more systems than ever',
  'Defence operations are becoming increasingly connected.': 'Training, operations, assets and data now depend on each other.',
  'Blue Silo connects these layers into a unified operational environment.': 'We connect them, so everything runs as one.',

  /* ---------- Home: systems ---------- */
  'Four systems, each available on its own': 'Four systems. Use one, or all of them.',
  'Four systems from Blue Silo, plus ACCEL from our partner SigmaWave for video and vision AI. Use one on its own, or connect them all.':
    'Four Blue Silo systems, plus ACCEL from our partner SigmaWave for video and vision AI. Start with one. Add the rest when you are ready.',
  'Select a system to see its detail': 'Pick a system to see what it does',
  'Digitise training resources, personnel, bookings, allocation and performance.': 'Bookings, people, resources and results, all in one place.',
  'The decision it supports': 'It helps you decide',
  'What is booked, who is expected, which resources are allocated, and whether the plan is achievable with what the facility has.':
    'What is booked, who is coming, what is allocated, and whether the plan actually fits the facility.',
  'Compare every system': 'Compare all systems',

  /* ---------- Home: range day chain ---------- */
  'One range day, from the gate to the final count': 'One range day, gate to final count',
  'Each step hands its data to the next, so nothing is carried on paper. Select a step to see what happens and which system handles it.':
    'Every step passes its data to the next. No paper in between. Pick a step to see what happens.',
  'Cleared before anyone arrives': 'Cleared before anyone arrives',
  'The cleared list of people and vehicles reaches access control the day before. At the gate, plates and credentials are matched and the barrier opens.':
    'Access control gets the cleared list the day before. At the gate, plates and passes match, and the barrier opens.',
  'Check in, and the roll builds itself': 'Check in. The roll builds itself.',
  'Each person checks in at a kiosk against their booking and collects a tracking card. Attendance updates as they arrive.':
    'Each person checks in at a kiosk and collects a tracking card. Attendance updates live.',
  'Briefing against who actually came': 'Brief the people who actually came',
  'The operator confirms who is actually present and adjusts lanes and the detail list before the session starts.':
    'The operator confirms who is here, then adjusts lanes and the detail list before the start.',
  'Weapons issued to the right hands': 'The right weapon, to the right person',
  'Weapons are released only to the person and booking they belong to. Every issue is recorded at the counter.':
    'A weapon is released only to the person it is booked for. Every issue is recorded.',
  'Range ready before the first detail': 'Ready before the first detail',
  'A built-in test checks network and services, then the operator runs the range checklist and loads the exercise.':
    'A self-test checks the network and services. The operator runs the checklist and loads the exercise.',
  'One operator, one range state': 'One operator. One clear range state.',
  'One operator runs targetry and effects to plan. Instructors log feedback at the firing point. The emergency stop works without the software.':
    'One operator runs targets and effects. Instructors log feedback on the spot. The emergency stop works even without the software.',
  'Every lane recorded, in step': 'Every lane recorded, in sync',
  'Every lane is recorded at full quality, time-stamped on the same clock as range events.':
    'Every lane is recorded in full quality, on the same clock as range events.',
  'The debrief starts from fact': 'Debriefs built on facts',
  'Results, instructor notes and the event timeline replay alongside the video. Reshoots are booked where needed.':
    'Results, notes and the timeline replay with the video. Reshoots are booked on the spot.',
  'Weapons back, accounts closed': 'Weapons back. Day closed.',
  'Weapons are scanned back in and unused ammunition handed over. Anything missing stays open until it is accounted for.':
    'Weapons are scanned back in and unused ammunition returned. Anything missing stays flagged until found.',
  'The health of every system, every day': 'Every system, checked every day',
  'Health and fault data from every system lands in one place, so maintenance is planned before a failure stops training.':
    'Health and fault data lands in one place. Fix things before they stop training.',
  'Who is expected today': 'Who is coming today',
  'Who has actually arrived': 'Who is actually here',
  'The confirmed composition of each detail': 'Who is in each detail',
  'Who holds which weapon': 'Who holds which weapon',
  'Whether the range is ready to go hot': 'Is the range ready to go hot?',
  'What is happening on every lane': 'What is happening on every lane',
  'What each lane looked like, moment by moment': 'Every lane, moment by moment',
  'How each trainee performed, and why': 'How each trainee did, and why',
  'That everything issued has come back': 'Has everything come back?',
  'What needs attention before the next range day': 'What needs fixing before next time',
  'Data that moves': 'Data passed on',

  /* ---------- Home: measures (back from v1) ---------- */
  'Personnel, weapons, magazines and equipment on one layout map.': 'People, weapons, magazines and equipment on one map.',
  'Position and movement updated at least once per second.': 'Positions update at least once a second.',
  'Licensing, validation and operation designed for an isolated site.': 'Licensing and operation built for a closed site.',
  'Emergency stop does not depend on our software running.': 'The emergency stop works even if our software does not.',

  /* ---------- Home: integration intro ---------- */
  'Connects to what you already run': 'Works with what you already have',
  'We connect the whole training environment, from live targets and simulators to facility, operations and security systems.':
    'Targets, simulators, building, operations and security systems. We connect them all.',
  'Targets, hit detection and scoring linked to the training session, with results returned to the record.':
    'Targets and scoring tied to the session. Results go straight to the record.',
  'Simulator stations, scenarios and results linked to training sessions, so virtual and live training share one record.':
    'Simulator results land in the same record as live training.',
  'Lighting, ventilation and alarms that follow what is happening on the range.': 'Lights, air and alarms that follow the range.',
  'System status, alerts and events brought together in one view.': 'Status, alerts and events in one view.',
  'Access control, secure zones, perimeter systems and surveillance, connected to day-to-day operations.':
    'Access, secure zones, perimeter and surveillance, linked to daily operations.',
  'Smoke, sound and lighting timed to the training scenario, for realistic conditions.': 'Smoke, sound and light, timed to the scenario.',
  'Screens, announcements and visual cues that change with each phase of training.': 'Screens and announcements that change with each phase.',
  'Bookings, schedules and training records shared with your scheduling and records systems.': 'Bookings and records, shared with your own systems.',

  /* ---------- Home: simulate ---------- */
  'We test every interface and dependency before anything reaches your site, so the systems work together from day one.':
    'We test every connection before it reaches your site. It works on day one.',

  /* ---------- Home: partners (back from v1, v2 copy) ---------- */
  'How we work with partners and integrators': 'Built to work with partners',
  'We work alongside prime contractors, technology partners, system integrators and your own team. Together we agree who does what and how the systems connect, then deliver as one team.':
    'Primes, partners, integrators and your own team. We agree who does what, then deliver as one.',
  'Before work starts, everyone knows what Blue Silo, each partner and your own team are responsible for.':
    'Everyone knows their job before work starts.',
  'We agree how each system and its data connect, with an owner named on each side.': 'Every connection has an owner on each side.',
  'We test each connection as it is built, instead of leaving integration to the end.': 'We test as we build. No big surprise at the end.',
  'Every change is written down and agreed by everyone involved, so the programme stays on track.': 'Every change is agreed in writing. The programme stays on track.',
  'Built for complex, multi-party defence programmes': 'Made for complex, multi-party programmes',

  /* ---------- Home: assurance feature ---------- */
  'Secure by design,': 'Secure by design,',
  'from the node to the enterprise.': 'from the range to the enterprise.',
  'We build security, reliability and compliance into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.':
    'Security and reliability are built in at every layer, from equipment on site to enterprise networks.',
  'Each licence is tied to the hardware it was delivered for and checked offline, with no outside connection during operations.':
    'Licences are tied to your hardware and checked offline. No outside connection needed.',
  'Each component runs only the services it needs, from a documented and secure baseline.': 'Each part runs only what it needs. Nothing extra.',
  'Critical components are checked for tampering, and systems are separated by function so a fault stays contained.':
    'Critical parts are checked for tampering. Faults stay contained.',
  'We manage information security in line with ISO/IEC 27001, the international standard covering access control, encryption and incident response. Certification is planned.':
    'We follow ISO/IEC 27001 for information security. Certification is planned.',
  'Networks are split into zones and monitored continuously, with audit logs and a defined way to patch every system, on site and in the office.':
    'Networks are zoned, watched around the clock and patched on a set routine.',
  'No remote access. Updates arrive on encrypted media and are tested before they go live, and every system is security tested each year.':
    'No remote access. Updates come on encrypted media, tested first. Every system is security tested yearly.',

  /* ---------- Home: company facts (back from v1) ---------- */
  'A defence and security specialist, and the continuity to match.': 'Here for the long run',
  'We design, develop and integrate mission-critical systems for military training, range operations, asset accountability and operational readiness, with a long-term commitment to the environments we serve.':
    'We build mission-critical systems for training, ranges, assets and readiness. And we stay to support them.',
  'Defined release conditions and a verified deposit to ensure continued access when required.': 'Your access to the code is protected, always.',
  'Rights are clearly assigned in the contract, in writing, before delivery.': 'Who owns what is agreed in writing, before delivery.',
  'Comprehensive technical and operational documentation so a competent team can take over if needed.': 'Clear documents, so another team could take over if needed.',
  'A long-term partner for defence and security organisations': 'A long-term partner for defence and security',

  /* ---------- Home: questions ---------- */
  'The questions we hear most': 'Questions we get a lot',
  'Short answers for defence organisations, programme teams and evaluators.': 'Quick answers for defence and programme teams.',
  'Yes. Every system can be deployed on its own, with its own software and interfaces. When you are ready, it connects to other Blue Silo systems or to the systems you already run.':
    'Yes. Every system works on its own. Connect it to others whenever you are ready.',
  'No. We design, develop and integrate defence systems in four areas: training systems, system integration, monitoring and intelligence, and enterprise management. Training ranges are where we go deepest, but our systems also serve defence sites and other secure environments.':
    'No. We work in four areas: training, integration, monitoring and enterprise management. Ranges are our deepest specialism, not our only one.',
  'Yes. We work alongside prime contractors, integrators and technology partners. Our systems use documented interfaces and common industry protocols, so they connect to the hardware and software you already have.':
    'Yes. We use documented interfaces and common protocols, so we plug into what you already have.',
  'Yes. They run on isolated, secure networks. Activation, licensing and updates are handled offline, so no internet connection is needed during operations.':
    'Yes. They run on closed networks. Licensing and updates work fully offline.',
  'We document our systems so a competent third party can take over support if needed, and we agree ownership and support terms in the contract. We also offer long-term support and maintenance.':
    'They can. Our documents are written for that. Ownership and support are set in the contract, and we offer long-term support too.',

  /* ---------- Shared CTA ---------- */
  'Talk to us about your programme': 'Let us talk about your programme',
  'Whether you need one system or several working together, we will help you find the right approach.':
    'One system or several, we will help you find the right fit.',
  'Discuss your requirements': 'Talk requirements',
  'Request a demonstration': 'Book a demo',

  /* ---------- Footer ---------- */
  'Blue Silo is a Singapore defence systems company. We design, develop and integrate defence systems in four areas: training systems, system integration, monitoring and intelligence, and enterprise management.':
    'Blue Silo is a Singapore defence systems company. We design, build and connect systems for training, integration, monitoring and enterprise management.',

  /* ---------- Company (layout B) ---------- */
  'Defence systems, built to work together': 'Defence systems, built to work together',
  'Blue Silo is a Singapore-based technology company specialising in military training systems, simulated firing range operations and the integration of complex defence systems.':
    'We are a Singapore team that builds military training systems, runs simulated firing ranges and connects complex defence systems.',
  'See our product': 'See our product',
  'Training resources, ranges and simulators, managed in one place.': 'Ranges, simulators and resources in one place.',
  'Software, hardware and third-party platforms, working as one.': 'Any supplier, one working system.',
  'Video, vision AI and equipment health, so you see issues early.': 'Video, vision AI and health data. Spot problems early.',
  'Administration, accountability and resources, with a clear audit trail.': 'Admin, accountability and resources, fully traced.',
  'One system for the whole training day': 'One system for the whole training day',
  'Training is where we go deepest. Our Training Resource Management System manages a session from the first booking to the last item returned. It is already built, so you start from working software, configured to how your centre runs.':
    'Training is our deepest specialism. Our Training Resource Management System runs a session from first booking to last item returned. It is already built, so you start with software that works.',
  'Bookings, trainee lists, lanes and resources, set up in five steps.': 'Bookings, trainees, lanes and resources. Five steps.',
  'Check in, issue equipment and run the session, with live results for instructors and trainees.': 'Check in, issue, run. Live results for everyone.',
  'Every item returned or flagged, and every result recorded, at the end of the session.': 'Every item back or flagged. Every result saved.',
  'Utilisation, availability and equipment health, reported across the whole centre.': 'Use, availability and health across the centre.',
  'Connected to the systems you already run': 'Works with what you already run',
  "No defence facility runs on one supplier's systems. Our software already works with these types of training system, and we agree every new connection in writing before we build it.":
    'No facility runs on one supplier. Our software already works with these systems, and every new link is agreed in writing first.',
  'Decision-making practice for commanders and staff': 'Decision practice for commanders',
  'We are developing further integrations with international defence technology providers.': 'More integrations with international providers are on the way.',
  'One team, from the first workshop to long-term support': 'One team, from first workshop to long-term support',
  'You work with the same people at every stage, so nothing gets lost between suppliers.': 'Same people at every stage. Nothing lost in handover.',
  'Tell us what you need. We will show you our software working.': 'Tell us what you need. We will show you it working.',

  /* ---------- Products ---------- */
  'Use one system on its own or connect them all. Each page shows what the system does, who uses it and where it runs.':
    'Use one, or connect them all. Each page shows what it does, who uses it and where.',
  'What each system does': 'What each system does',
  'Who uses each system, and the question it answers for them.': 'Who uses it, and the question it answers.',
  'What is booked, who is coming, and whether the centre has the stations and equipment to run it.': 'What is booked, who is coming, and if the centre can run it.',
  'Whether the range is ready, when a session can start, and when it must stop.': 'Is the range ready? When can we start? When must we stop?',
  'What actually happened on a lane, found on the session timeline rather than from memory.': 'What really happened on a lane. From the timeline, not memory.',
  'Whether this weapon can go to this person now, and whether every weapon is back at the end of the day.': 'Can this person take this weapon now? Is every weapon back?',
  'What is wearing out, how fast, and whether it will last until the next session.': 'What is wearing out, and will it last until next session?',
  'Where each system is used': 'Where each system is used',
  'Four systems share a naming pattern and two handle video. Confusing them in a specification is expensive later.':
    'Some names look alike, and two systems handle video. Mixing them up costs money later.',

  /* ---------- TRMS ---------- */
  'Book stations, issue equipment, run sessions and capture results. One system for your whole simulator training centre.':
    'Book, issue, run, score. One system for your whole simulator centre.',
  'Book a session in five simple steps': 'Book a session in five steps',
  'Everything the training day needs, captured once.': 'Enter it once. The whole day uses it.',
  'Always know where every booking stands': 'Know where every booking stands',
  'See the status of every booking at a glance, from the day it is made to the day it closes.': 'Every booking, every status, at a glance.',
  'It also flags what needs your attention': 'And it flags what needs you',
  'Training day, without the paperwork': 'Training day. No paperwork.',
  'Check trainees in with a scan, run the session from one screen, and see results as they come in.': 'Scan in, run from one screen, watch results arrive.',
  'Know who is missing before you start': 'See who is missing before you start',
  'A live leaderboard for the whole centre': 'A live leaderboard for the whole centre',
  'Put results on a screen in the centre. Each group sees the podium, the full ranking and how it compares in each category.':
    'Put results on the big screen. Podium, full ranking, every category.',
  'Finish with nothing left behind': 'Finish with nothing left behind',
  'Scan equipment back in, and find every trainee’s result in one place.': 'Scan it all back in. Every result in one place.',
  'Manage the whole centre, not just bookings': 'Run the whole centre, not just bookings',
  'Your day, your availability, your sites and your equipment, in the same system.': 'Your day, sites and equipment, in one system.',
  'Built for everyone in the centre': 'Built for everyone in the centre',
  'Each person sees what they need, with access set by role.': 'Everyone sees what they need. Nothing more.',
  'Three kinds of training, one system': 'Three kinds of training. One system.',
  'Book and manage all your simulators in one place.': 'All your simulators, booked in one place.',
  'See TRMS running': 'See TRMS in action',
  'We will walk you through a full training day in TRMS, from booking to results.': 'We will walk you through a full day, booking to results.',

  /* ---------- Product pages, shared headings ---------- */
  'The problems it solves': 'The problems it solves',
  'What it does': 'What it does',
  'How it works': 'How it works',
  'What you gain': 'What you get',
  'Secure, and ready to connect': 'Secure and ready to connect',
  'More detail': 'More detail',
  'We design in line with these standards. We do not claim certification against them.': 'We design to these standards. We do not claim certification.',
  'Types of system, not specific vendor products.': 'System types, not vendor products.',

  /* ---------- RMS ---------- */
  'Run your whole range from one place.': 'Run your whole range from one screen.',
  'Live firing starts before anyone has confirmed the range is ready': 'Live firing starts before anyone confirms the range is ready',
  'Instructor feedback stays on paper and never reaches the record': 'Instructor feedback stays on paper',
  'Results are typed into the training record again after the day': 'Results get typed in twice',
  'Live firing cannot start until every check has passed.': 'No live firing until every check passes.',
  'Feedback is captured at the firing point, not rewritten later.': 'Feedback captured at the firing point.',
  'Debriefs replay what actually happened, with results and video on one clock.': 'Debriefs replay what really happened, video and results in sync.',
  'If the video link drops, training carries on.': 'Video link drops? Training carries on.',
  'Every request and live event passes through one encrypted gateway that checks who is asking.': 'Every request goes through one encrypted gateway that checks who is asking.',
  'Staff sign in with their existing accounts, and each role sees only what it needs.': 'Staff use their existing logins. Each role sees only what it needs.',
  'Booking, control, equipment, records and reporting run as separate services.': 'Booking, control, equipment and records run separately.',
  'Other systems connect only through dedicated adapters and a shared message channel.': 'Other systems connect only through set adapters.',
  'We will show you VULCAN at work on a range scenario.': 'See VULCAN run a range scenario.',

  /* ---------- HUMS ---------- */
  'Know the health of every system on your range before a fault stops training.': 'Spot faults before they stop training.',
  'Every system has its own health screen, so nobody sees the whole range': 'Every system has its own screen. Nobody sees the whole range.',
  'Availability is argued over instead of measured': 'Availability is argued, not measured',
  'Maintenance follows the calendar, not the condition of the equipment': 'Maintenance follows the calendar, not the equipment',
  'One health picture for the whole range, not one screen per system.': 'One health view for the whole range.',
  'Availability comes from logged events, so you and your supplier see the same number.': 'Availability comes from logged events. Everyone sees the same number.',
  'Developing faults show up early enough to fix between sessions.': 'Faults show up early. Fix them between sessions.',
  'Years of history support reliability and replacement decisions.': 'Years of history guide repair and replace calls.',
  'We will show you PRIMUS at work on a range scenario.': 'See PRIMUS run a range scenario.',

  /* ---------- VMS ---------- */
  'Never miss the moment that matters.': 'Never miss the moment that matters.',
  'An unsafe act is found on the recording after the session, not during it': 'Unsafe acts are spotted after the session, not during it',
  'Unsafe situations are flagged during the session, with evidence attached.': 'Unsafe moments flagged live, with evidence.',
  'Every camera plays back on one clock, so you see an incident from every angle.': 'Every camera on one clock. See it from every angle.',
  'Saved clips stay saved, and every export is logged.': 'Saved clips stay saved. Every export is logged.',
  'Video keeps running if the operations centre link goes down.': 'Video keeps running if the link goes down.',
  'We will show you ACCEL at work on a range scenario.': 'See ACCEL run a range scenario.',

  /* ---------- EWMS ---------- */
  'Know who holds every weapon, at every moment.': 'Know who holds every weapon, every moment.',
  'A missing weapon is only noticed at the end-of-day count': 'A missing weapon is noticed only at the final count',
  'Every issue and return is recorded with who, what and when, with no paperwork.': 'Every issue and return logged. Who, what, when. No paper.',
  'The locker itself enforces who may take which weapon, and when.': 'The locker decides who takes what, and when.',
  'An unreturned weapon raises an alarm when it is due, not at the end of the day.': 'A late weapon raises an alarm on time, not at day end.',
  'A faulty weapon cannot be issued until it is cleared.': 'A faulty weapon stays locked until cleared.',
  'We will show you SENTRAX at work on a range scenario.': 'See SENTRAX run a range scenario.',

  /* ---------- Integration ---------- */
  'Works with the systems you already run': 'Works with what you already run',
  'We test every connection in our own lab before it reaches your site, and agree each one in writing with the other supplier.':
    'Every connection is tested in our lab first, and agreed in writing with the other supplier.',
  'Built to work with what is already on site': 'Built for what is already on site',
  'From live targets and simulators to building systems, the operations centre, security and training records.':
    'Targets, simulators, buildings, operations, security and training records.',
  'Every connection is documented and owned': 'Every connection has an owner',
  'For each system we connect to, both sides agree in writing how the connection works and who is responsible for it. This keeps integration predictable and avoids surprises late in the programme.':
    'Both sides agree in writing how each link works and who owns it. No late surprises.',
  'We share the full list of connections with programme teams on request.': 'Programme teams can request the full list.',
  'Already working with other suppliers’ equipment': 'Already running other suppliers’ kit',
  'On most ranges, targets, effects, displays and public address come from other suppliers. Our range control software already drives them, through connections that are specified, tested and kept under version control.':
    'On most ranges, targets, effects, screens and PA come from other suppliers. Our range control software already drives them, through tested, versioned connections.',
  'Three things every connected range needs': 'Three things every connected range needs',
  'They are easy to overlook, and hard to add later.': 'Easy to miss. Hard to add later.',
  'Everyone signs in once against your directory, with access set by role. When someone leaves, their access ends everywhere at once.':
    'One login for everything. When someone leaves, access ends everywhere.',
  'Video, tracking, alerts and health data carry the same time, so a debrief or an investigation can line them up exactly.':
    'Video, tracking, alerts and health data share one clock. Everything lines up.',
  'Records of weapon and ammunition handling are sent to your own logging system, not kept only in ours.':
    'Weapon and ammunition records go to your own logs, not just ours.',
  'Tested before it reaches your site': 'Tested before it reaches you',
  'Every connection is proven in our own test environment before installation, so commissioning on site is faster and lower risk.':
    'We prove every connection in our lab first. Setup on site is faster and safer.',
  'Each connection is first tested against a simulated version of the other system, so work starts before the real equipment arrives.':
    'We test against a simulated version first, so work starts before the real kit arrives.',
  'Connections come online one at a time, in the order they depend on each other, not all at once at the end.':
    'Links go live one by one, in the right order. Not all at once at the end.',
  'Every change to a connection is documented, versioned and agreed by both sides.': 'Every change is written, versioned and agreed.',
  'Once a connection works, it is re-tested automatically with every new software release.': 'Every release re-tests every connection, automatically.',
  'Tell us which systems you need us to connect to, and we will walk you through how the integration works.':
    'Tell us what needs connecting. We will show you how.',

  /* ---------- Assurance ---------- */
  'Secure and safe by design': 'Secure and safe by design',
  'Security, reliability and safety are built into every layer, from the equipment on your range to the systems your whole organisation relies on.':
    'Security, reliability and safety at every layer, from range equipment to enterprise systems.',
  'The same protections sit under every system we deliver, from sign-in to the database.': 'Every system gets the same protection, from login to database.',
  'Staff sign in against your directory. Each role sees only the functions and data it needs, and every request carries a short-lived, signed pass.':
    'Staff use your directory. Each role sees only what it needs, and every request carries a short-lived signed pass.',
  'Data is encrypted as it moves between systems and wherever it is stored. Personal details are masked on screen and kept in a separate encrypted store.':
    'Data is encrypted on the move and at rest. Personal details are masked and stored separately.',
  'Every user action and system change is written to an audit log that can only be added to, never changed, and is copied to your security monitoring.':
    'Every action goes into a log that can never be edited, and a copy goes to your security team.',
  'Training, administration and shared services sit in separate network zones. Traffic between zones passes a firewall, and links to outside systems pass through one gateway.':
    'Training, admin and shared services sit in separate zones, behind firewalls and one outside gateway.',
  'Each system runs as copies spread across three servers, with the database duplicated too, so losing one server does not stop a session.':
    'Every system runs on three servers, database included. Lose one, and training goes on.',
  'The emergency stop does not rely on our control software being healthy, reachable or even running. It halts targets and effects immediately.':
    'The emergency stop works even if our software is down. It halts targets and effects at once.',
  'During live firing, a person detected in the target area triggers a critical alert with the camera view and the time, so the operator can stop the range at once.':
    'If someone is spotted in the target area during live firing, the operator gets an instant alert with the camera view, and can stop the range.',
  'Loss of communication, power or network each has a defined safe state, written down and tested in advance.':
    'Lose comms, power or network, and the system goes to a safe state we have already tested.',
  'Each layer keeps working when something fails': 'Each layer keeps going when something fails',
  'Not every part needs the same level of backup. We put it where training and safety depend on it.': 'Backup goes where training and safety need it most.',
  'A second engineer reviews every change before it is built.': 'A second engineer checks every change.',
  'Connections, safety behaviour and equipment counts each have their own tests.': 'Connections, safety and counts each have their own tests.',
  'Every site runs a known set of software versions that we can rebuild exactly.': 'Every site runs known versions we can rebuild exactly.',
  'We track the third-party components we use, with a defined way to patch systems already on site.': 'We track every third-party part, with a clear patch route.',
  'Speak with our team about security, safety and compliance for your programme.': 'Talk to us about security and safety for your programme.',

  /* ---------- Contact ---------- */
  'Talk to our team': 'Talk to our team',
  'Planning a new programme, evaluating a system or looking for an integration partner? Tell us what you need and the right person on our team will reply.':
    'New programme? Evaluating a system? Need an integration partner? Tell us, and the right person will reply.',
  'See our systems running on a working setup, guided by the people who build them.': 'See our systems run live, with the people who built them.',
  'Our approach to licensing, hardening, cybersecurity and compliance.': 'How we handle licensing, hardening and security.',
  'Interface structures, protocol patterns and our approach to multi-system delivery.': 'How we connect systems and deliver across many suppliers.',
  'For defence organisations, prime contractors, system integrators and technology partners.': 'For defence teams, primes, integrators and technology partners.',
  'Send us an enquiry': 'Send us a message',

  /* ---------- FAQ ---------- */
  'Straight answers to the questions defence organisations and programme teams ask us first.': 'Straight answers to what people ask us first.',
  'Have a question we have not answered? Ask us, and the right specialist will reply.': 'Still have a question? Ask, and a specialist will reply.',
};
