/* Generated from the v6 site data on 21 Oct 2026, then maintained by hand. */
export const PRODUCTS = [
  {
    "id": "trms",
    "icon": "ph-graduation-cap",
    "acr": "TRMS",
    "name": "Training Resource Management System",
    "group": "Training",
    "role": "Plans the training",
    "angle": "Digitise training resources, personnel, bookings, allocation and performance, so a training day is planned against what is actually available rather than against an assumption.",
    "users": [
      "Training planner",
      "Unit conductor",
      "Booking officer",
      "Instructor"
    ],
    "on": [
      "Access",
      "Register",
      "Brief"
    ],
    "where": "Training management office and the booking desk",
    "decides": "What is booked, who is expected, which resources are allocated, and whether the plan is achievable with what the facility has.",
    "media": {
      "id": "s-brief",
      "kind": "Image",
      "ratio": "r-43",
      "label": "Briefing room before a serial",
      "brief": "Empty briefing room, seats facing a dark screen. 3:4."
    },
    "groups": [
      {
        "k": "Resource management",
        "m": "Training resource register · Availability and allocation · Capacity planning against demand"
      },
      {
        "k": "Personnel",
        "m": "Trainee and instructor records · Qualification and currency · Assignment to a serial"
      },
      {
        "k": "Booking",
        "m": "Slot inventory · Individual and unit booking · Amendment and cancellation"
      },
      {
        "k": "Performance",
        "m": "Attendance · Results captured from the range · Trend reporting by unit and by individual"
      }
    ],
    "ifc": [
      [
        "Range management",
        "↔",
        "Throughout the training day"
      ],
      [
        "Administrative & Governance (AGS)",
        "←",
        "At registration"
      ],
      [
        "Training records",
        "↔",
        "On completion"
      ]
    ],
    "dep": "Requires an authoritative source for personnel and for the training calendar. Where a programme already runs a booking system, TRMS consumes it rather than replacing it.",
    "rel": [
      "rcs",
      "as",
      "hums"
    ]
  },
  {
    "id": "rcs",
    "icon": "ph-sliders-horizontal",
    "acr": "RMS",
    "name": "Range Management System",
    "group": "Range operations",
    "role": "Runs the range",
    "angle": "The system the range runs on. It prepares a session, drives targetry and effects in the moment, and files the record afterwards, and it is the only subsystem that sits on the safety path.",
    "users": [
      "Range Supervising Officer",
      "Range Control Officer",
      "Instructor",
      "Unit Conductor",
      "Booking officer"
    ],
    "on": [
      "Brief",
      "Prepare",
      "Conduct",
      "Review"
    ],
    "where": "Range Control Room, inside the range on a portable tablet client, and the briefing and after action rooms",
    "decides": "Whether the range is ready, whether the serial may start, continue or stop, and whether an event requires an immediate halt. Answered from a fixed client in the control room, or a portable one inside the range.",
    "media": {
      "id": "rcs",
      "kind": "Video",
      "ratio": "r-169",
      "label": "Control room, session in progress",
      "brief": "Wide shot of a range control room during a serial. Operators at consoles, wall of lane displays, low ambient light. No faces identifiable, no visible unit markings. 12 seconds, slow push in, no cuts."
    },
    "groups": [
      {
        "k": "Registration and access",
        "m": "User account management, creation and login · Role and permission management, with permission checked in every module"
      },
      {
        "k": "Resource management",
        "m": "Add and edit ranges and lanes, including marking a lane closed for maintenance · Allocate a range and its lanes to a programme, exercise or session · Allocate a control room · Allocate a briefing room"
      },
      {
        "k": "Booking management",
        "m": "Create, modify and cancel bookings for live firing and simulation programmes, held separately · Nominal roll for attendance and participation · Automated assignment of lane, base station and range from the roll · Downloadable individual and unit results"
      },
      {
        "k": "Exercise preparation",
        "m": "Range readiness check recorded against a checklist covering range, training systems, equipment, safety systems and supporting facilities · Equipment readiness verification · Dry run control with start, pause, resume, restart and end · Load the approved training exercise"
      },
      {
        "k": "Mission planning",
        "m": "Define the scenario including targetry, effects and session recording · Targetry and effect activation conditions and groupings · Conditional activation on time, hit detection and sensor input · Manual activation from the interface · Group activation, individually or collectively · Save, edit and re-execute scenarios"
      },
      {
        "k": "Execution and control",
        "m": "Mission execution triggering targetry, effects and recording · Scenario time jump to a specific time or event without restarting · Session start, stop and pause · Reshoot and retraining management"
      },
      {
        "k": "Equipment and infrastructure",
        "m": "Activate and control targetry and effects · Equipment status including position, activation state and hit or miss · Monitor infrastructure for availability, operational state, fault and device state · Control supported infrastructure · <strong>E-Stop, physical or virtual, halting all targetry and environmental effects immediately</strong>"
      },
      {
        "k": "Live monitoring",
        "m": "Cameras grouped by base station and range, with live view per camera · Weapon detection and tracking, maintaining identification and status until the weapon leaves the monitored zone · Notification with an attached still and a ten second clip on any weapon related event · Personnel, weapon and ammunition status from the tracking system"
      },
      {
        "k": "Recording, playback and review",
        "m": "Session recording of trainee data, engagement events and scoring · Event timeline where selecting an event reveals its detail and highlights the equipment on the layout map · Playback by session or by time period · Full playback controls including slow motion at fractional speeds, multi speed fast forward and rewind, zoom, and jump to an event or feedback marker"
      },
      {
        "k": "Assessment and analysis",
        "m": "Instructor feedback compiled into a list for debriefing · Points of interest and salient pointers captured during the serial · Shooting trend analysis over time · After action review conducted from playback"
      },
      {
        "k": "Visualisation and data",
        "m": "Layout map with equipment and trainee display · Scroll, zoom, draw lines and areas, de-clutter by offsetting or aggregating entities, and change map, colour and size · Data import and export · System activity log of all actions and changes for audit"
      },
      {
        "k": "Health and availability",
        "m": "System health of targetry equipment · Equipment usage, failures, serviceability and maintenance activity · Range and lane utilisation with rebalancing of allocations across ranges · Operational availability calculated from operating time, downtime and agreed exclusions"
      }
    ],
    "ifc": [
      [
        "Video targetry",
        "↔",
        "Throughout the serial"
      ],
      [
        "Environmental and battlefield effects",
        "→",
        "On the scenario timeline"
      ],
      [
        "Visualisation and public address",
        "→",
        "Per phase of the session"
      ],
      [
        "Video management",
        "↔",
        "Recording, markers, playback"
      ],
      [
        "Tracking",
        "↔",
        "Personnel, weapon and ammunition status"
      ],
      [
        "Weapon and ammunition management",
        "↔",
        "Session start and end"
      ],
      [
        "Authority booking and training records",
        "↔",
        "Scheduled"
      ],
      [
        "Building and security management",
        "↔",
        "Lighting, ventilation, alarms"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "RMS drives equipment supplied by others, including targetry, environmental and battlefield effects, visualisation and public address, and it reads facility systems it does not own. It also operates over the facility network, wired or wireless. Its authority over any counterpart is only as good as the interface agreed for it, which is why the interface register is settled before delivery rather than during it.",
    "rel": [
      "vms",
      "pwats",
      "hums"
    ]
  },
  {
    "id": "vms",
    "icon": "ph-video-camera",
    "acr": "VMS",
    "name": "Video Management System",
    "group": "Observation",
    "role": "Sees and remembers",
    "angle": "Video built for training rather than for security. Recording quality follows what the range is doing, playback is synchronised across cameras without interrupting the live feed, and a clip that matters can be starred so it survives the overwrite cycle.",
    "users": [
      "Range Control Officer",
      "Instructor",
      "Safety officer"
    ],
    "on": [
      "Conduct",
      "Observe",
      "Review"
    ],
    "where": "Integrated Operation Centre and Range Control Room",
    "decides": "What actually happened on a lane, retrieved from a marked timeline rather than reconstructed from memory.",
    "media": {
      "id": "vms",
      "kind": "Video",
      "ratio": "r-169",
      "label": "Synchronised playback, four views in lockstep",
      "brief": "Four camera views of the same empty range played back in exact sync, a playhead travelling together along every timeline. 16:9 video."
    },
    "groups": [
      {
        "k": "Cameras",
        "m": "Low profile, ceiling mounted, shock resistant and weather sealed · High definition at high frame rate with low light performance, efficient encoding, and fisheye or pan tilt zoom where needed · Motion detection that alerts the operator and raises recording quality automatically · Infrared emitters selected so they do not interfere with night vision equipment · Power over Ethernet · Synchronised audio"
      },
      {
        "k": "Network and integration",
        "m": "Closed wired network with end to end encryption · Integration with range control and with the operations centre · <strong>Standalone mode</strong> that keeps the system working without transmitting any feed off site"
      },
      {
        "k": "Recording",
        "m": "Continuous recording around the clock · Lower rate standby recording that steps up automatically on motion · Full rate recording during training sessions · Automatic time and location tagging · Audio included for after action review · Commercial encoding format rather than a proprietary one"
      },
      {
        "k": "Playback and export",
        "m": "Synchronised multi camera playback that does not interrupt live monitoring or recording · Control over speed, direction, zoom, volume, timestamps and event markers · Starred clips protected from automatic overwriting · Enhancement by crop, brightness, sharpness and contrast · Export in original or enhanced quality"
      },
      {
        "k": "Storage",
        "m": "Retention measured in weeks rather than days · First in, first out overwriting that never touches protected footage"
      },
      {
        "k": "Analytics, safety",
        "m": "Person in the target or butt area · Person crossing the firing line · Presence in a zone they are not authorised for · Muzzle pointing outside the safe sector · Unexpected firing on an inactive lane · Firing in the wrong lane · Smoke or fire without a corresponding firing event · Person down"
      },
      {
        "k": "Analytics, accountability",
        "m": "Unattended weapon · Weapon left behind after personnel leave · Weapon associated with an unexpected person"
      },
      {
        "k": "What happens on a detection",
        "m": "Alert the operator with event type, affected range, location, camera view and time · Retain a ten second clip covering before and after the event · Write a timestamped marker onto that session after action timeline, linked to the evidence · Let the operator review, acknowledge and record the outcome"
      }
    ],
    "ifc": [
      [
        "Range control",
        "↔",
        "Event markers, playback, recording triggers"
      ],
      [
        "Cameras and recording infrastructure",
        "←",
        "Continuous"
      ],
      [
        "Edge video analytics",
        "↔",
        "Detections and evidence"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous, or not at all in standalone mode"
      ]
    ],
    "dep": "Analytics depend on camera placement and coverage designed for the purpose. A camera positioned for general surveillance will not reliably support weapon association or muzzle direction work, so coverage design is part of the system rather than a site condition it inherits. Detection is also a prompt to a human, never an automatic judgement.",
    "rel": [
      "eva",
      "rcs",
      "pwats"
    ]
  },
  {
    "id": "eva",
    "icon": "ph-scan",
    "acr": "EVA",
    "name": "Vision AI Operations",
    "group": "Observation",
    "role": "Watches the perimeter",
    "angle": "Computer vision running at the edge on the facility own cameras, turning surveillance from a record reviewed after an incident into an alert received during one.",
    "users": [
      "Operations centre operator",
      "Guard house",
      "Security officer"
    ],
    "on": [
      "Access",
      "Observe"
    ],
    "where": "Integrated Operation Centre and Guard House",
    "decides": "Whether something is happening right now that needs a physical response, and where to send it.",
    "media": {
      "id": "eva",
      "kind": "Video",
      "ratio": "r-169",
      "label": "Perimeter at night, detection locking on",
      "brief": "Fixed camera on the night fenceline. The detection box snaps in around a distant figure and tracks it. 16:9 video."
    },
    "groups": [
      {
        "k": "Perimeter and access",
        "m": "Intrusion detection at the fenceline, alerting in time for a response before the intruder reaches sensitive infrastructure · Off hours human detection in secured zones · Unattended vehicle in loading, cargo and parking areas"
      },
      {
        "k": "Object and movement",
        "m": "Unattended baggage across all camera coverage · Unauthorised weapon movement out of secured zones · Unauthorised ammunition movement, by magazine and container"
      },
      {
        "k": "People",
        "m": "Crowd management at muster and assembly areas · Facial recognition for surveillance in off limit areas · Human re-identification across disjointed feeds, narrowing what an officer has to review · Active visitor tracking within secured zones without issuing a token"
      },
      {
        "k": "How it is deployed",
        "m": "Each use case is bound to a zone and a level rather than switched on facility wide, because a detector tuned for a perimeter fenceline is wrong for a muster area"
      }
    ],
    "ifc": [
      [
        "Cameras and edge workstations",
        "←",
        "Continuous"
      ],
      [
        "Video management",
        "↔",
        "Evidence clips and retrieval"
      ],
      [
        "Security management",
        "→",
        "Alerts and events"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "Two facial recognition cases are explicitly outside this scope: on demand recognition, and recognition used for access control. Recognition here supports surveillance and forensic search, and it produces a lead for a person to act on rather than a decision the system makes.",
    "rel": [
      "vms",
      "pwats",
      "as"
    ]
  },
  {
    "id": "pwats",
    "icon": "ph-map-pin",
    "acr": "PWATS",
    "name": "Personnel, Weapon & Ammunition Tracking System",
    "group": "Accountability",
    "role": "Knows where everything is",
    "angle": "Personnel, weapons and ammunition on one layout map, positioned to sub metre accuracy and refreshed at least once a second, with a tracking device assigned at registration so identity and position stay bound together for the whole visit.",
    "users": [
      "Range Control Officer",
      "Safety officer",
      "Armourer"
    ],
    "on": [
      "Register",
      "Draw",
      "Observe",
      "Return"
    ],
    "where": "Integrated Operation Centre, Range Control Room, inside the range, and the briefing and after action rooms",
    "decides": "Where every person and every issued item is at this moment, and whether each is somewhere it is authorised to be.",
    "media": {
      "id": "pwats",
      "kind": "Video",
      "ratio": "r-169",
      "label": "Layout map, tracks refreshing once a second",
      "brief": "Facility layout map. Position markers advance along their trails in visible one second ticks. 16:9 video."
    },
    "groups": [
      {
        "k": "Tracking performance",
        "m": "Sub metre positioning for trainees, weapons, magazines and equipment · Position and movement updated at least once per second · Ceiling mounted, shock resistant, weather sealed transceivers powered over Ethernet · A compact tracking device with a full day of battery life"
      },
      {
        "k": "Personnel tracking",
        "m": "Position and movement of all personnel, equipment and entities on the facility layout map, with configurable display settings · A tracking device assigned to each trainee at registration, so the operations centre can identify who it is following"
      },
      {
        "k": "Weapon tracking",
        "m": "Each weapon uniquely identified · Shot detection recording rounds fired, tracking rounds remaining, and reporting ammunition status in real time"
      },
      {
        "k": "Ammunition tracking",
        "m": "Magazines, ammunition boxes and other containers adapted so they can be tracked · Each magazine, box or individual round uniquely identified"
      },
      {
        "k": "Fitting to the weapon",
        "m": "Any modification made to carry a tag must not impede the shooter or meaningfully change the weapon weight or balance, a constraint that rules out a good deal of otherwise convenient hardware"
      }
    ],
    "ifc": [
      [
        "Range control",
        "↔",
        "Position request and map view"
      ],
      [
        "Weapon management",
        "↔",
        "Weapon ID, issued to, tracking activation"
      ],
      [
        "Ammunition management",
        "↔",
        "Magazine and container ID, rounds remaining"
      ],
      [
        "Administrative system",
        "↔",
        "Tracker issue at registration"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "Tracking is only as good as the field infrastructure behind it, meaning transceivers, tags, and the coverage design that places them. Where a gap exists it must be reported as unknown rather than as absence, because an unread tag and an absent person are not the same thing.",
    "rel": [
      "ewms",
      "eams",
      "rcs"
    ]
  },
  {
    "id": "ewms",
    "icon": "ph-vault",
    "acr": "EWMS",
    "name": "Electronic Weapon Management System",
    "group": "Accountability",
    "role": "Holds the weapons",
    "angle": "A weapon is a serialised asset that comes back whole. Its defects, cleaning, repairs and fit for firing certification follow the serial number for the whole of its service life, not just for one session.",
    "users": [
      "Armourer",
      "Storeman",
      "Inspector"
    ],
    "on": [
      "Draw",
      "Return"
    ],
    "where": "Armskote, weapon lockers and the ammunition collection point",
    "decides": "Whether this weapon may be released to this person now, whether it is certified fit to fire, and whether the daily and weekly accounts close.",
    "media": {
      "id": "ewms",
      "kind": "Image",
      "ratio": "r-43",
      "label": "Locker bank, one door open",
      "brief": "Bank of secure weapon lockers, one door open and empty, indicator light on. No weapons in frame, no people. Even industrial lighting. 4:3."
    },
    "groups": [
      {
        "k": "Access and security",
        "m": "Identity and authorisation verified before the assigned weapon is released · Tamper proof controls with a manual bypass for authorised personnel if the system fails · Detection and alerting of unauthorised weapon movement · Handover and takeover tracking, timestamped, so custody is never ambiguous while a weapon is being handled, maintained or cleaned"
      },
      {
        "k": "Weapon management",
        "m": "Storage, issuance and accounting of every weapon · Daily and weekly weapon accounting · Rounds fired recorded against each weapon · Sufficient serviceable weapons confirmed available before live firing"
      },
      {
        "k": "Status, in the operator words",
        "m": "Serviceable · drawn out · under maintenance · pending maintenance · undergoing cleaning, each with its projected timeline, so the question is not only what state a weapon is in but when it will leave it"
      },
      {
        "k": "Maintenance",
        "m": "Operator detectable defects recorded and tracked · Maintenance and repair before and after live firing · <strong>Fit for firing certification with notification as expiry approaches</strong> · Recovery and transport of equipment to the workshop · Indentation, return and disposal of spare parts"
      },
      {
        "k": "Real time records",
        "m": "Every weapon transaction recorded as it happens rather than reconciled afterwards"
      }
    ],
    "ifc": [
      [
        "Range control",
        "↔",
        "Session start and end"
      ],
      [
        "Tracking",
        "↔",
        "Weapon ID, issued to, tracking activation"
      ],
      [
        "Access control",
        "↔",
        "Identity and authorisation verification"
      ],
      [
        "Smart weapon rack and lockers",
        "↔",
        "Lock, unlock, presence detection"
      ],
      [
        "Security management",
        "↔",
        "Armskote access control and alarms"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "Issuance and return are only trustworthy if the physical locker participates and reports what was actually removed. The manual bypass is equally deliberate: a system that cannot be overridden by an authorised person when it fails is a system that can lock an armskote at the worst possible moment.",
    "rel": [
      "eams",
      "pwats",
      "rcs"
    ]
  },
  {
    "id": "eams",
    "icon": "ph-package",
    "acr": "EAMS",
    "name": "Electronic Ammunition Management System",
    "group": "Accountability",
    "role": "Holds the ammunition",
    "angle": "Ammunition is a consumable, not an asset. It is issued against a package, verified at the counter, accounted for daily and weekly, and watched closely enough that resupply is arranged before a range runs short rather than after.",
    "users": [
      "Ammunition officer",
      "Storeman",
      "Inspector"
    ],
    "on": [
      "Draw",
      "Return"
    ],
    "where": "Ammunition collection point and the central ammunition store",
    "decides": "How much left the store, how much came back, and whether the daily and weekly ammunition accounts close.",
    "media": {
      "id": "eams",
      "kind": "Image",
      "ratio": "r-43",
      "label": "Issue counter, closed",
      "brief": "Ammunition issue counter seen straight on, shutter closed, scanner and terminal visible. No ammunition, no people. Cool fluorescent light. 4:3."
    },
    "groups": [
      {
        "k": "Ammunition management",
        "m": "Storage, issuance and accounting of all ammunition · Daily and weekly ammunition accounting · Quantity and location of every holding displayed, not just the total"
      },
      {
        "k": "Issuance and return",
        "m": "Issue against the assigned package · Type and quantity verified at the point of issue · Receipt confirmed by the person drawing · Return of magazines and unexpended rounds"
      },
      {
        "k": "Usage and resupply",
        "m": "Usage tracked at each range · Resupply facilitated from the central store to the distribution points before a shortfall becomes a stoppage"
      },
      {
        "k": "Security",
        "m": "Access control for the ammunition store and distribution points · Handover and takeover tracking, timestamped, covering restocking and distribution handled by facility staff · Real time transaction records"
      }
    ],
    "ifc": [
      [
        "Range control",
        "↔",
        "Session start and end, rounds fired"
      ],
      [
        "Tracking",
        "↔",
        "Magazine and container ID, rounds remaining"
      ],
      [
        "Access control",
        "↔",
        "Identity and authorisation verification"
      ],
      [
        "Security management",
        "↔",
        "Store access control and alarms"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "Reconciliation depends on the execution record. Without rounds fired coming back from range control and from shot detection, the account cannot be closed against anything, which makes those interfaces functional dependencies rather than enhancements.",
    "rel": [
      "ewms",
      "pwats",
      "rcs"
    ]
  },
  {
    "id": "hums",
    "icon": "ph-pulse",
    "acr": "HUMS",
    "name": "Health & Utilisation Monitoring System",
    "group": "Sustainment",
    "role": "Predicts what will break",
    "angle": "A discipline borrowed from rotorcraft airworthiness. Its defining idea is not sensors, it is recording the operational context alongside every reading, so wear is judged against work actually done rather than against time elapsed.",
    "users": [
      "Engineering manager",
      "Maintenance team",
      "Operations centre"
    ],
    "on": [
      "Sustain"
    ],
    "where": "Integrated Operation Centre, Range Control Room, maintenance consoles and mobile devices",
    "decides": "What is degrading, how fast, and whether it will survive the next booked detail, so maintenance is planned against evidence rather than against a calendar.",
    "media": {
      "id": "hums",
      "kind": "Image",
      "ratio": "r-43",
      "label": "Maintenance console, health view",
      "brief": "Engineering console in a plant room showing a health dashboard, abstracted, no readable values. Cables and racks in soft focus behind. 4:3."
    },
    "groups": [
      {
        "k": "Data ingestion",
        "m": "Engineering, operational and maintenance data ingested from the targetry system and its subsystems · Monitoring and reporting activated automatically when those systems start up, rather than switched on by hand"
      },
      {
        "k": "System monitoring",
        "m": "Utilisation · network bandwidth and abnormal traffic · memory · battery · temperature and humidity · built in test results · overall system health"
      },
      {
        "k": "Usage monitoring",
        "m": "Activations · recoils · trigger pulls · failures · resets · charges · operating hours, the counters that make wear measurable against work rather than against the calendar"
      },
      {
        "k": "Event monitoring and records",
        "m": "Event timestamps, start and stop times, utilisation and recovery time · Event and maintenance logs maintained · Engineering and system status data processed, displayed and exported"
      },
      {
        "k": "Health display",
        "m": "Real time system availability on maintenance consoles and on mobile devices · A health widget on the operator workstations that already have the operator attention · Overall health with drill down to individual subsystem status"
      },
      {
        "k": "Analysis",
        "m": "Analysis of collected data to identify and pre-empt equipment failures · Failure history used to reduce unscheduled maintenance and direct maintenance effort · Alternative resources recommended so a fault disrupts a training day as little as possible"
      },
      {
        "k": "Maintenance management",
        "m": "Condition based preventive maintenance driven by processed data · Pre-emptive obsolescence management · Quarterly forecasting of spare parts and components for predictive purchasing"
      }
    ],
    "ifc": [
      [
        "Range control",
        "↔",
        "Display, request and send health data"
      ],
      [
        "Targetry, effects and visualisation equipment",
        "←",
        "Continuous collection"
      ],
      [
        "Video and analytics equipment",
        "←",
        "Continuous collection"
      ],
      [
        "Tracking, weapon and ammunition equipment",
        "←",
        "Continuous collection"
      ],
      [
        "Network, server and IT equipment",
        "←",
        "Continuous collection"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "HUMS can only report on equipment that will tell it something. Every source system has to expose health and usage data, and that exposure has to be agreed with whoever supplies it, which makes coverage a procurement question as much as an engineering one.",
    "rel": [
      "rcs",
      "vms",
      "pwats"
    ]
  },
  {
    "id": "as",
    "icon": "ph-identification-badge",
    "acr": "AGS",
    "name": "Administrative & Governance System",
    "group": "Facility",
    "role": "Gets people in",
    "angle": "The first queue of the day and the last impression of it. The only subsystem used by people from outside the facility, which makes it the only one carrying accessibility and visitor data obligations.",
    "users": [
      "Administrative officer",
      "Guard house",
      "Reception",
      "Visitors",
      "Visiting units"
    ],
    "on": [
      "Access",
      "Register"
    ],
    "where": "Administrative office, guard house, registration kiosk and reception desk",
    "decides": "Who is expected today, who has arrived, whose vehicle is cleared, and who may pass the gate.",
    "media": {
      "id": "as",
      "kind": "Image",
      "ratio": "r-43",
      "label": "Registration kiosk, arrival foyer",
      "brief": "Self service registration kiosk in an arrival foyer, screen dark, empty queue lane markings on the floor. No people. Daylight from one side. 4:3."
    },
    "groups": [
      {
        "k": "Visitor registration and access",
        "m": "Interface with the authority visitor clearance service to process and track clearance · Security enrolment, authentication and onboarding at the registration kiosk"
      },
      {
        "k": "Vehicle registration",
        "m": "Clearance obtained before a vehicle enters the compound · Registration and tracking by licence plate · Screening of registered vehicles against defined threat criteria"
      },
      {
        "k": "Appointment management",
        "m": "One view across visitor appointments, range bookings and service providers · Create, view, modify and cancel visitor appointments · View range bookings with training details, date and time, range, resources and participating personnel · Visitor clearance status shown against its appointment · Vehicle clearance status shown against its appointment"
      },
      {
        "k": "Queue management",
        "m": "Queue number issued to a walk in trainee against an appointment or booking · Call, skip and recall queue entries · Call the next number and notify the person it belongs to"
      },
      {
        "k": "Feedback management",
        "m": "Visitors and the authority submit feedback online · Consolidated so an authorised user can review, track and follow up rather than file it"
      },
      {
        "k": "Integration operations",
        "m": "Integration logs, audit records and operational events for monitoring and troubleshooting · Integration errors and exceptions handled with automated retries and transaction tracking"
      }
    ],
    "ifc": [
      [
        "Range control",
        "↔",
        "Appointment feeds session booking, arrival feeds the roll"
      ],
      [
        "Access control and turnstiles",
        "↔",
        "Authorisation and gate release"
      ],
      [
        "Licence plate recognition",
        "←",
        "Plate capture and match"
      ],
      [
        "Authority clearance and identity services",
        "↔",
        "Visitor and vehicle clearance, identity verification"
      ],
      [
        "Integrated operations and data platform",
        "→",
        "Continuous"
      ]
    ],
    "dep": "Clearance is granted by an authority service, not by us. Our system requests it, displays the result and acts on it. Visitor access also depends on the access control system that physically opens the door, and licence plate registration assumes recognition cameras supplied with the facility.",
    "rel": [
      "rcs",
      "eva",
      "pwats"
    ]
  }
];

export const BRAND = {
  "rcs": {
    "brand": "VULCAN",
    "sys": "Range Management System",
    "acr": "RMS"
  },
  "trms": {
    "brand": null,
    "sys": "Training Resource Management System",
    "acr": "TRMS"
  },
  "ewms": {
    "brand": "SENTRAX",
    "sys": "Electronic Weapon Management System",
    "acr": "EWMS"
  },
  "eams": {
    "brand": "MUNIX",
    "sys": "Electronic Ammunition Management System",
    "acr": "EAMS"
  },
  "hums": {
    "brand": "PRIMUS",
    "sys": "Health & Utilisation Monitoring System",
    "acr": "HUMS"
  },
  "pwats": {
    "brand": "WARDEN",
    "sys": "Personnel, Weapon & Ammunition Tracking System",
    "acr": "PWATS"
  },
  "as": {
    "brand": "AXIOM",
    "sys": "Administrative & Governance System",
    "acr": "AGS"
  },
  "vms": {
    "brand": "ACCEL",
    "sys": "Video Management System",
    "acr": "VMS",
    "partner": "SigmaWave"
  },
  "eva": {
    "brand": "ACCEL",
    "sys": "Vision AI Operations",
    "acr": "EVA",
    "partner": "SigmaWave"
  }
};

export const PRODUCT_DETAIL = {
  "rcs": {
    "lead": "The control layer of a live firing range, indoor or outdoor. VULCAN plans the session, presents the course of fire, holds the range state and records every shot, so the officer in charge runs the range from one place and the review starts from fact.",
    "problem": [
      "A lane goes hot while someone is still downrange",
      "Cease fire depends on reaching one console",
      "A stoppage quietly invalidates a score nobody notices",
      "Firers sit on the wrong lane and scores land on the wrong person",
      "Lanes reset slowly between details and the day runs late",
      "Results are keyed by hand into the training record",
      "An outdoor danger area is not confirmed clear before the range goes hot"
    ],
    "mods": [
      {
        "k": "Plan",
        "i": "ph-calendar-check",
        "m": [
          "Indoor and outdoor ranges under one control model",
          "Session booking against slot inventory",
          "Nominal roll and lane assignment",
          "Mission planning and course of fire builder",
          "Range allocation across lanes and details"
        ]
      },
      {
        "k": "Prepare",
        "i": "ph-list-checks",
        "m": [
          "Readiness check before the range goes hot",
          "Targetry and effects configuration",
          "Dry run without live rounds",
          "Scenario time compression for rehearsal",
          "Weather, light and visibility inputs for outdoor ranges",
          "Danger area and boundary clearance before going hot outdoors"
        ]
      },
      {
        "k": "Conduct",
        "i": "ph-crosshair",
        "m": [
          "Session control: start, pause, resume, end",
          "Range hot and cold as a system state",
          "Emergency stop above all scenario logic",
          "Live monitoring of every lane and firer",
          "Reshoot and stoppage handling, logged with reason"
        ]
      },
      {
        "k": "Review",
        "i": "ph-film-reel",
        "m": [
          "Event markers on one shared clock",
          "Playback synchronised with shot data",
          "Assessment against the course standard",
          "After-action review and clip export"
        ]
      },
      {
        "k": "Records",
        "i": "ph-database",
        "m": [
          "Results flow to the training record without re-keying",
          "Data import and export in open formats",
          "Range equipment health handed to PRIMUS"
        ]
      }
    ],
    "flow": [
      [
        "Book",
        "A detail is booked into a slot with its roll, lanes and course of fire."
      ],
      [
        "Ready",
        "The readiness check runs. The range cannot go hot until it passes."
      ],
      [
        "Brief",
        "Firers are confirmed against their lanes on the line."
      ],
      [
        "Conduct",
        "Targets present to the course. Every shot is scored and shown at once."
      ],
      [
        "Stop",
        "A cease fire from any control point stops every lane."
      ],
      [
        "Review",
        "Shots, states and video replay on one clock for the AAR."
      ]
    ],
    "out": [
      "Scores reach the firer and the instructor as each shot lands, so nobody walks downrange to check.",
      "The stop sits above scenario logic, so a cease fire from any control point halts every lane.",
      "Every shot, state change and video frame shares one clock, so the review shows what actually happened.",
      "A course of fire is defined once and reused, so every detail runs to the same standard."
    ],
    "std": [
      [
        "IEC 62443",
        "Security for software that controls physical equipment, applied to the range control network"
      ],
      [
        "Range safety doctrine",
        "Hot and cold states, danger areas for outdoor ranges, cease fire by anyone, officer in charge and safety officer roles, modelled on public range safety publications"
      ],
      [
        "MIL-STD-1472",
        "Human engineering for operator stations and console layout"
      ]
    ]
  },
  "trms": {
    "lead": "The planning layer above the range. TRMS turns a training calendar into resourced days: every booking carries its people, instructors, equipment and ammunition, and conflicts surface when someone books, not when units arrive.",
    "problem": [
      "Two units booked onto the same range",
      "A booking with no ammunition or instructor behind it",
      "Qualifications lapse without anyone noticing",
      "Rolls kept on paper and reconciled afterwards",
      "Utilisation figures nobody trusts"
    ],
    "mods": [
      {
        "k": "Calendar",
        "i": "ph-calendar",
        "m": [
          "Training calendar across ranges and areas",
          "Booking requests with approval workflow",
          "Conflict warnings for safety, schedule and resources"
        ]
      },
      {
        "k": "Resources",
        "i": "ph-users-three",
        "m": [
          "Instructor and support staff allocation",
          "Equipment and ammunition reserved against each booking",
          "Training packages built from standard tasks"
        ]
      },
      {
        "k": "People",
        "i": "ph-identification-card",
        "m": [
          "Nominal roll and attendance",
          "Qualification currency with expiry alerts",
          "Individual and unit performance history"
        ]
      },
      {
        "k": "Reporting",
        "i": "ph-chart-bar",
        "m": [
          "Utilisation and readiness reporting",
          "Audit trail of every approval",
          "Feeds to and from the governance record"
        ]
      }
    ],
    "flow": [
      [
        "Plan",
        "A unit requests training against the calendar."
      ],
      [
        "Check",
        "Conflicts and missing resources are flagged before approval."
      ],
      [
        "Resource",
        "People, instructors, equipment and ammunition are reserved."
      ],
      [
        "Hand over",
        "The approved session passes to VULCAN for conduct."
      ],
      [
        "Record",
        "Results return to each person and to the unit history."
      ]
    ],
    "out": [
      "Conflicts are flagged at booking time, not on the morning of the shoot.",
      "Each booking carries its own resources, so the day is covered before it starts.",
      "Qualification expiry is visible in advance, not discovered after it lapses.",
      "Results flow from the range into the record without being typed twice."
    ],
    "std": [
      [
        "ISO/IEC 27001",
        "Organisational information security, applied to personnel and training data"
      ],
      [
        "Personal data protection",
        "Purpose limitation and retention rules for training records"
      ]
    ]
  },
  "ewms": {
    "lead": "Serialised custody for every weapon. SENTRAX controls who may take which weapon and when, records every removal and return against a named person, and keeps a weapon that is not fit for firing out of anyone's hands.",
    "problem": [
      "A weapon goes missing from a paper log until the end of day count",
      "Out of hours or unauthorised access to the armskote",
      "Keys shared or copied",
      "A weapon reported defective is issued again",
      "A stocktake recorded but never performed",
      "No record of who held a weapon at the moment that mattered"
    ],
    "mods": [
      {
        "k": "Access",
        "i": "ph-fingerprint",
        "m": [
          "User authorisation by card, PIN and optional biometrics",
          "Permissions by person, weapon type and time window",
          "Two-person rule, configurable per action"
        ]
      },
      {
        "k": "Custody",
        "i": "ph-arrows-left-right",
        "m": [
          "Issue and return against a named person and session",
          "Handover and takeover between duty staff",
          "Movement detection with alarm on unauthorised removal",
          "Overdue alerts at the due time"
        ]
      },
      {
        "k": "Accounting",
        "i": "ph-clipboard-text",
        "m": [
          "Instant serial inventory by RFID read",
          "Storage and issuance records",
          "Immutable, exportable audit trail"
        ]
      },
      {
        "k": "Serviceability",
        "i": "ph-wrench",
        "m": [
          "Defect reporting and quarantine lockout",
          "Maintenance and repair history per serial",
          "Fit for firing certification before reissue",
          "Equipment recovery and spares"
        ]
      }
    ],
    "flow": [
      [
        "Authorise",
        "The firer is verified against the roll and their permissions."
      ],
      [
        "Issue",
        "The locker opens for one serial only. Custody is recorded."
      ],
      [
        "Bind",
        "The weapon is linked to the person for tracking."
      ],
      [
        "Return",
        "The serial is read back in. Condition is captured."
      ],
      [
        "Inventory",
        "A full serial count completes before personnel are released."
      ]
    ],
    "out": [
      "Every removal and return is recorded with who, what and when, without anyone writing it down.",
      "The cabinet itself enforces who may take which weapon, and when.",
      "An unreturned weapon raises an alarm at its due time, not at the end of day count.",
      "A weapon flagged defective cannot be issued until it is cleared."
    ],
    "std": [
      [
        "Arms physical security practice",
        "Access lists, key control and serial inventory, modelled on public guidance such as US AR 190-11"
      ],
      [
        "IEC 62443",
        "Security for software that drives locks and lockers"
      ],
      [
        "ISO/IEC 27001",
        "Organisational information security for custody records"
      ]
    ]
  },
  "eams": {
    "lead": "Ammunition as an accountable consumable. MUNIX issues against an authorised scale, traces each lot to a person and course of fire, and reconciles the return in four terms before anyone leaves.",
    "problem": [
      "An issue that does not match the authorisation",
      "Rounds or residue lost between the firing point and turn in",
      "A suspended lot reaching the counter",
      "Accounts drifting from physical stock",
      "A discrepancy nobody owns",
      "Heat degraded stock going unnoticed"
    ],
    "mods": [
      {
        "k": "Issue",
        "i": "ph-package",
        "m": [
          "Issue against the scale for each person and course",
          "Lot and batch capture by scan",
          "Blind count verification at the counter",
          "Oldest lot first issue logic"
        ]
      },
      {
        "k": "Return",
        "i": "ph-arrow-u-down-left",
        "m": [
          "Fired, returned unexpended, residue and unaccounted",
          "Discrepancy workflow with a named owner",
          "Reconciliation before personnel are released"
        ]
      },
      {
        "k": "Stock",
        "i": "ph-stack",
        "m": [
          "Stock balances and periodic accounts",
          "Storage temperature and humidity per magazine",
          "Serviceability, suspension and restriction by lot"
        ]
      },
      {
        "k": "Supply",
        "i": "ph-truck",
        "m": [
          "Resupply forecast from scheduled training",
          "Consumption history by course",
          "Audit support and full trail"
        ]
      }
    ],
    "flow": [
      [
        "Allocate",
        "The session's scale of issue arrives with the booking."
      ],
      [
        "Issue",
        "Lots are scanned and counted against the allocation."
      ],
      [
        "Fire",
        "Rounds expended are taken from the range record."
      ],
      [
        "Return",
        "Unexpended rounds and residue are counted in."
      ],
      [
        "Reconcile",
        "Four terms must balance. Any gap opens an owned discrepancy."
      ]
    ],
    "out": [
      "Every round is traced from lot to person to course of fire.",
      "The return is reconciled before personnel are released, not later.",
      "A suspended lot cannot reach the counter.",
      "Storage conditions become part of the serviceability record.",
      "Forecasts come from scheduled training rather than estimates."
    ],
    "std": [
      [
        "UN IATG 03.10",
        "Inventory management and accounting principles for ammunition"
      ],
      [
        "UN IATG 07.10 / 07.20",
        "Storage, surveillance and in-service proof concepts"
      ],
      [
        "Ammunition physical security practice",
        "Modelled on public guidance such as US AR 190-11"
      ]
    ]
  },
  "pwats": {
    "lead": "One live picture of people, weapons and ammunition. WARDEN combines precise position with doorway presence, binds each issued item to its holder, and raises a separation as it happens rather than as a finding at end of day.",
    "problem": [
      "An item leaves a controlled area unnoticed",
      "A weapon is separated from the person it was issued to",
      "Roll call after an incident is slow or misses someone",
      "An end of day count will not close and nobody can show where the item went",
      "Someone enters a restricted area while the range is hot",
      "Dead tags make the system look healthy while it is blind"
    ],
    "mods": [
      {
        "k": "Locate",
        "i": "ph-map-pin",
        "m": [
          "Sub-metre position for people",
          "Layout map with live tracks",
          "Movement history and replay"
        ]
      },
      {
        "k": "Identify",
        "i": "ph-barcode",
        "m": [
          "Tracking device assignment at issue",
          "Unique identity for weapons and magazines",
          "Presence and passage reads at doorways and racks"
        ]
      },
      {
        "k": "Guard",
        "i": "ph-shield-warning",
        "m": [
          "Zones with entry and dwell rules",
          "Separation alerts between person and item",
          "Restricted area alerts tied to range state"
        ]
      },
      {
        "k": "Account",
        "i": "ph-users",
        "m": [
          "Live count by zone against the expected list",
          "Exception list of people not accounted for",
          "Tag battery and anchor health"
        ]
      }
    ],
    "flow": [
      [
        "Assign",
        "A tag is assigned to the person at registration."
      ],
      [
        "Bind",
        "Weapon and magazine identities are bound at the counter."
      ],
      [
        "Track",
        "Position refreshes continuously across the facility."
      ],
      [
        "Alert",
        "A separation or zone breach alerts while it happens."
      ],
      [
        "Release",
        "Bindings close at return. The history stays for review."
      ]
    ],
    "out": [
      "Every issued item is tied to a person at the counter, so separation is an alert, not a finding.",
      "Doorways read tags without line of sight, so nothing leaves a controlled area without a record.",
      "Roll call is a live count by zone, with exceptions listed.",
      "Every movement is timestamped, so an inquiry replays what happened instead of reconstructing it."
    ],
    "std": [
      [
        "IEEE 802.15.4z",
        "Secure ranging for ultra wideband, which resists distance spoofing"
      ],
      [
        "ISO/IEC 18000-63",
        "Passive UHF RFID air interface for presence and passage"
      ],
      [
        "IEC 62443",
        "Security of the tracking network and its integrations"
      ]
    ]
  },
  "hums": {
    "lead": "Sustainment from measured condition. PRIMUS watches the health and use of range equipment, predicts what will fail, and turns that into maintenance between sessions instead of breakdowns during them.",
    "problem": [
      "A breakdown cancels a session that was fully booked",
      "Calendar maintenance replaces healthy parts and misses failing ones",
      "Availability claims that cannot be evidenced",
      "Faults recur because nobody linked them to usage",
      "Spares run out at the wrong time",
      "A silent sensor is mistaken for a healthy asset"
    ],
    "mods": [
      {
        "k": "Monitor",
        "i": "ph-heartbeat",
        "m": [
          "Health display for every connected asset",
          "Usage counted with its operating context",
          "Sensor dropouts made visible"
        ]
      },
      {
        "k": "Predict",
        "i": "ph-chart-line-up",
        "m": [
          "Trend alerts before a hard limit",
          "Analytical failure prediction",
          "Remaining useful life with a confidence band"
        ]
      },
      {
        "k": "Maintain",
        "i": "ph-wrench",
        "m": [
          "Condition based maintenance triggers",
          "Work orders raised, assigned, closed and verified",
          "Engineering commands to equipment, under control"
        ]
      },
      {
        "k": "Plan",
        "i": "ph-package",
        "m": [
          "Spares forecast from predicted failures",
          "Obsolescence tracking across the estate",
          "Availability, MTBF and MTTR from logged events"
        ]
      }
    ],
    "flow": [
      [
        "Collect",
        "Equipment reports health and use, tagged to the session."
      ],
      [
        "Trend",
        "Readings are compared with each asset's own history."
      ],
      [
        "Predict",
        "A developing fault surfaces with its likely component."
      ],
      [
        "Act",
        "A work order is raised and scheduled between sessions."
      ],
      [
        "Verify",
        "Post repair readings confirm the fix before release."
      ]
    ],
    "out": [
      "Maintenance follows measured condition, not the calendar.",
      "Every reading is stored with how the equipment was used, so a fault traces to its cause.",
      "Availability is calculated from logged events, so the operator and the owner see the same number.",
      "Developing faults are visible early, so repairs happen between sessions."
    ],
    "std": [
      [
        "ISO 55001",
        "Asset management system requirements"
      ],
      [
        "ISO 17359 / ISO 13374",
        "Condition monitoring programme and data processing architecture"
      ],
      [
        "ISO 13381-1",
        "Prognostics guidance"
      ],
      [
        "IEC 60812",
        "FMEA and FMECA for choosing what to monitor"
      ]
    ]
  },
  "vms": {
    "lead": "Training video that is synchronised, searchable and trusted. ACCEL, our partner's platform, records every lane and position, and Blue Silo integrates it with range control so footage and shot data share one clock.",
    "problem": [
      "Footage missing for the critical minutes",
      "Investigators aligning unsynchronised clips by hand",
      "Exports nobody can prove are authentic",
      "A camera brand change forcing a platform replacement"
    ],
    "mods": [
      {
        "k": "Record",
        "i": "ph-record",
        "m": [
          "Continuous recording around the clock",
          "Adaptive quality per stream",
          "Time and location tagging on every frame",
          "Failover recording"
        ]
      },
      {
        "k": "Review",
        "i": "ph-play",
        "m": [
          "Synchronised multi camera playback",
          "Starred clips and markers from range events",
          "Image enhancement for review"
        ]
      },
      {
        "k": "Export",
        "i": "ph-export",
        "m": [
          "Clip export with metadata",
          "Signed exports and export log",
          "Role based viewing and export rights"
        ]
      }
    ],
    "flow": [
      [
        "Record",
        "Every lane records continuously."
      ],
      [
        "Mark",
        "Range events place markers on the shared timeline."
      ],
      [
        "Review",
        "Instructors scrub once and every view follows."
      ],
      [
        "Export",
        "Clips leave with their metadata and a handling log."
      ]
    ],
    "out": [
      "Every camera plays back on one clock, so an incident is reviewed from every angle at once.",
      "Range events mark the footage, so review jumps straight to the shot that matters.",
      "Each export carries its own handling log, so its integrity can be shown later."
    ],
    "std": [
      [
        "ONVIF Profiles S, T, G, M",
        "Interoperable streaming, recording and analytics metadata"
      ],
      [
        "IEC 62676",
        "Video surveillance system practice"
      ],
      [
        "Personal data protection",
        "Retention limits and access control over footage"
      ]
    ]
  },
  "eva": {
    "lead": "Analytics that act while the event is happening. ACCEL edge analytics, from our partner, watch the perimeter and approaches beside the camera, so an alert reaches an operator in time to matter, even if the uplink is down.",
    "problem": [
      "An intrusion found on the recording the next morning",
      "Alarm fatigue until operators switch analytics off",
      "Analytics that stop when the link to the server fails",
      "Unattended items noticed too late"
    ],
    "mods": [
      {
        "k": "Perimeter",
        "i": "ph-scan",
        "m": [
          "Intrusion and line crossing",
          "Human presence outside operating hours",
          "Loitering by dwell time"
        ]
      },
      {
        "k": "Safety",
        "i": "ph-fire",
        "m": [
          "Smoke and fire detection",
          "Crowd density",
          "Person in a restricted area"
        ]
      },
      {
        "k": "Objects",
        "i": "ph-suitcase",
        "m": [
          "Unattended baggage",
          "Unattended vehicles",
          "Re-identification across cameras"
        ]
      },
      {
        "k": "Operate",
        "i": "ph-bell",
        "m": [
          "Operator acknowledgement and classification",
          "Masking zones and suppression schedules",
          "Classifications fed back into tuning"
        ]
      }
    ],
    "flow": [
      [
        "Detect",
        "Inference runs at the edge, beside the camera."
      ],
      [
        "Alert",
        "The operator receives the event with its clip."
      ],
      [
        "Classify",
        "True or nuisance, recorded by the operator."
      ],
      [
        "Tune",
        "Classifications refine rules and thresholds."
      ]
    ],
    "out": [
      "Analytics run beside the camera, so the alert arrives during the incident.",
      "Detection continues when the uplink is lost.",
      "Operators classify every alarm, and that is what tunes the rules."
    ],
    "std": [
      [
        "ONVIF Profile M",
        "Analytics metadata and event streaming"
      ],
      [
        "IEC 62443",
        "Security for edge devices and their network"
      ],
      [
        "Personal data protection",
        "Purpose limitation and retention for analytics data"
      ]
    ]
  },
  "as": {
    "lead": "Governance for everyone who enters. AXIOM clears visits before arrival, confirms identity at the gate, issues access that expires on its own, and keeps one record of who approved, who entered and who is on site now.",
    "problem": [
      "Queues at the gate because nobody was cleared in advance",
      "Temporary credentials that never expire",
      "Paper logbooks that cannot answer who is on site during an evacuation",
      "Identity data copied and kept indefinitely",
      "Approvals given by message with no record"
    ],
    "mods": [
      {
        "k": "Before arrival",
        "i": "ph-calendar-plus",
        "m": [
          "Visit pre-registration by a host",
          "Approval workflow with separation of duties",
          "Vehicle pre-clearance by plate"
        ]
      },
      {
        "k": "At arrival",
        "i": "ph-identification-badge",
        "m": [
          "Self service registration",
          "Identity confirmed against the pre-registration",
          "Time bounded credentials issued to access control"
        ]
      },
      {
        "k": "On site",
        "i": "ph-users-four",
        "m": [
          "Escort and host notification",
          "Live headcount for muster",
          "Automatic revocation at expiry or checkout"
        ]
      },
      {
        "k": "After",
        "i": "ph-chat-centered-text",
        "m": [
          "Feedback capture",
          "Audit trail of request, approval, entry and exit",
          "Retention and purge on schedule"
        ]
      }
    ],
    "flow": [
      [
        "Request",
        "A host registers the visit and its purpose."
      ],
      [
        "Approve",
        "A separate approver clears it before arrival."
      ],
      [
        "Arrive",
        "Identity is confirmed. Access is issued with an expiry."
      ],
      [
        "On site",
        "Every entry and exit updates the headcount."
      ],
      [
        "Leave",
        "Access ends on its own. The record is kept, then purged."
      ]
    ],
    "out": [
      "Clearance happens before arrival, so the gate only confirms identity.",
      "Every temporary credential carries its own expiry.",
      "The same record answers who approved, who entered and who is on site now.",
      "Visitor data is kept only for its stated purpose and purged on schedule."
    ],
    "std": [
      [
        "NIST SP 800-53",
        "Access control, identification, audit and visitor records controls"
      ],
      [
        "ISO/IEC 27001",
        "Physical entry controls and access rights management"
      ],
      [
        "PDPA",
        "Consent, purpose limitation and retention for personal data"
      ],
      [
        "WCAG 2.2",
        "Accessibility of portals and kiosks"
      ]
    ]
  }
};

export const VISUAL_PRODUCTS = {
  "trms": {
    "short": "Turns a training calendar into resourced days. Every booking carries its people, instructors, equipment and ammunition.",
    "chips": [
      [
        "ph-calendar-check",
        "Plan"
      ],
      [
        "ph-users-three",
        "Resource"
      ],
      [
        "ph-gauge",
        "Readiness"
      ]
    ],
    "probIcons": [
      "ph-calendar-x",
      "ph-package",
      "ph-hourglass-low",
      "ph-clipboard-text",
      "ph-chart-line-down"
    ],
    "mods": [
      "cal",
      "res",
      "ppl",
      "rep"
    ],
    "flowIcons": [
      "ph-calendar-plus",
      "ph-warning-diamond",
      "ph-stack",
      "ph-arrow-square-out",
      "ph-archive"
    ]
  }
};

export const TRMS = {
  "short": "One place to plan, run and close out simulator-based training. Every booking follows one rule-checked record, from the first request to the last piece of equipment returned.",
  "status": "Working prototype, in active design and build",
  "why": [
    [
      "ph-calendar-x",
      "No double booking",
      "Station, lane and room conflicts are checked by the system, which refuses or reassigns instead of relying on someone remembering."
    ],
    [
      "ph-database",
      "One digital record",
      "Every field of a booking lives in the system, from the unit contact to the trainee list, with no paper running alongside."
    ],
    [
      "ph-list-checks",
      "Rules built in",
      "Each training programme has its own booking logic, and the right rules apply automatically."
    ]
  ],
  "progs": [
    {
      "k": "Weapon",
      "n": "Weapon (Firearms) Simulator Training",
      "slot": "weapon",
      "i": "ph-crosshair-simple",
      "trains": "Weapon proficiency for individuals and groups, in marksmanship, collective and judgemental modes.",
      "books": "Simulator stations, flat screen and C-shaped, divided into lanes.",
      "steps": [
        [
          "ph-calendar-plus",
          "Create booking"
        ],
        [
          "ph-hourglass",
          "Scheduled"
        ],
        [
          "ph-scan",
          "Issue assets"
        ],
        [
          "ph-user-check",
          "Onboarding"
        ],
        [
          "ph-play-circle",
          "Live session"
        ],
        [
          "ph-chart-bar",
          "Live results"
        ],
        [
          "ph-arrow-u-down-left",
          "Return assets"
        ]
      ],
      "pts": [
        "One courseware is one session",
        "Trainees queue per station in details",
        "Reshoot and lane changes mid-session",
        "Equipment scanned out and back against the booking"
      ]
    },
    {
      "k": "Vehicle",
      "n": "Vehicle Simulator Training",
      "slot": "crew",
      "i": "ph-steering-wheel",
      "trains": "Vehicle crew tactical training in an armoured vehicle simulator: driving, gunnery, vehicle and standalone.",
      "books": "Cabins, each with a platform type, crew roles and a call sign.",
      "steps": [
        [
          "ph-calendar-plus",
          "Create booking"
        ],
        [
          "ph-note-pencil",
          "Review details"
        ],
        [
          "ph-user-check",
          "Onboarding"
        ],
        [
          "ph-play-circle",
          "Live training"
        ]
      ],
      "pts": [
        "Cabins switched on up to the number booked, the rest lock",
        "Control stations set friendly or opposing, one master",
        "Nominal roll per control station",
        "No equipment step, so the lifecycle is shorter"
      ]
    },
    {
      "k": "Command",
      "n": "Command Team Training",
      "slot": "command",
      "i": "ph-users-four",
      "trains": "The same idea at command-team scale: many crews training together across several vehicle types.",
      "books": "Clusters of workstations, grouped into zones.",
      "steps": [
        [
          "ph-calendar-plus",
          "Create booking"
        ],
        [
          "ph-squares-four",
          "Configure clusters"
        ],
        [
          "ph-users",
          "Nominal roll"
        ],
        [
          "ph-check-circle",
          "Confirm"
        ],
        [
          "ph-user-check",
          "Onboarding"
        ]
      ],
      "pts": [
        "One tab per zone, listing only its clusters",
        "Vehicle variant, weapon variant and roles per cluster",
        "Roll limit shown on screen as trainees are added",
        "Summary review before the booking is saved"
      ]
    }
  ],
  "assets": {
    "h": "Equipment that checks itself out",
    "pts": [
      [
        "ph-scan",
        "Scanned out against the booking",
        "Tagged assets are issued by scan, and an item that does not belong to the booking is rejected."
      ],
      [
        "ph-broadcast",
        "RFID readers and antennas",
        "Readers, antennas and assignments are managed in the platform, so every issue is a record, not a note."
      ],
      [
        "ph-arrow-u-down-left",
        "Returned to the armoury",
        "After the session, equipment is scanned back into the armoury. Any item not returned is flagged straight away and stays open until it is accounted for."
      ]
    ]
  },
  "platform": [
    [
      "ph-squares-four",
      "Dashboard",
      "Day, week and month views of training activity"
    ],
    [
      "ph-broadcast",
      "Equipment and RFID",
      "Assets, types, assignments, readers and tracking"
    ],
    [
      "ph-map-trifold",
      "Site management",
      "Stations, lanes, blackout dates, zones and clusters"
    ],
    [
      "ph-gear-six",
      "Settings",
      "Briefing rooms, locations, notifications and rules"
    ],
    [
      "ph-users-three",
      "Users and permissions",
      "Users, roles, permissions and ranks"
    ],
    [
      "ph-arrows-down-up",
      "Data management",
      "Import and export of bookings, trainees and results"
    ],
    [
      "ph-chart-line-up",
      "Results and planning",
      "Results per training, resource planning and availability"
    ],
    [
      "ph-pulse",
      "Activity and health",
      "Who did what, and whether the hardware is running"
    ]
  ],
  "gloss": [
    [
      "Booking",
      "A reservation of training resources for a unit on a date"
    ],
    [
      "Courseware",
      "The training content. For weapon simulator training, one courseware is one session"
    ],
    [
      "Nominal roll",
      "The list of trainees expected for a booking"
    ],
    [
      "Onboarding",
      "Check-in on training day, before the session starts"
    ],
    [
      "Detail",
      "A group of trainees training together in one turn at a station"
    ],
    [
      "Lane, cabin, cluster",
      "The unit of simulator capacity for weapon, vehicle and command team training"
    ],
    [
      "Zone",
      "A group of command team clusters"
    ],
    [
      "Assignment",
      "The record of equipment issued to a booking"
    ]
  ],
  "journey": [
    [
      "ph-calendar-plus",
      "Create booking",
      "Mode, courseware, date and session, then lanes and the trainee roll"
    ],
    [
      "ph-calendar-check",
      "Scheduled",
      "The booking is confirmed and its stations are reserved until training day"
    ],
    [
      "ph-scan",
      "Issue equipment",
      "Tagged assets scanned out; anything not on the booking is refused"
    ],
    [
      "ph-user-check",
      "Onboard",
      "Who is present, confirmed by list upload or ID scan"
    ],
    [
      "ph-play-circle",
      "Run live",
      "Details queue per station; move, reshoot or change lanes"
    ],
    [
      "ph-chart-bar",
      "Live results",
      "Results update live during the session, compared against the session and overall results"
    ],
    [
      "ph-arrow-u-down-left",
      "Return",
      "Equipment scanned back into the armoury; anything not returned is flagged"
    ]
  ],
  "rules": [
    [
      "ph-stack",
      "One courseware, one session",
      "A session is never half of one programme and half of another."
    ],
    [
      "ph-prohibit",
      "Shared slots, if allowed",
      "Decide whether two groups may share a station in the same slot."
    ],
    [
      "ph-calendar-x",
      "Mixed days, if allowed",
      "Decide whether groups and individuals may train on the same station on the same day."
    ],
    [
      "ph-rows",
      "One row, one status",
      "Each booking is one row whose status rolls up everything inside it."
    ]
  ],
  "live": [
    [
      "ph-timer",
      "Running timer",
      "The session clock everyone works to"
    ],
    [
      "ph-users-three",
      "Details per station",
      "Who is on, who is next, per station"
    ],
    [
      "ph-arrow-bend-up-right",
      "Move a detail forward",
      "When a station frees early"
    ],
    [
      "ph-arrow-counter-clockwise",
      "Reshoot",
      "Without losing the first result"
    ],
    [
      "ph-arrows-left-right",
      "Change lanes mid-session",
      "When a lane goes down"
    ],
    [
      "ph-chart-bar",
      "Results as they land",
      "Passed, failed and qualified counts"
    ]
  ]
};

/* ---------- typed accessors ---------- */
export type Brand = { brand: string | null; acr: string; sys: string; partner?: string };
export type Product = (typeof PRODUCTS)[number];
export const brandOf = (id: string): Brand | undefined => (BRAND as unknown as Record<string, Brand>)[id];
export const productOf = (id: string): Product | undefined => PRODUCTS.find((p) => p.id === id);

/* v2 product content, rewritten from the technical architecture work
   (Oct 2026). Generic by design: no programme, zone, vendor or retention
   figures. Missing fields fall back to PRODUCT_DETAIL. */
export const PRODUCT_DETAIL_V2: Record<string, {
  lead: string; problem: string[]; mods: { k: string; i: string; m: string[] }[];
  flow: string[][]; out: string[]; arch: string[][];
}> = {
  rcs: {
    lead: 'One place to plan, prepare, run and review a live firing range. RMS holds the range state, drives targetry and effects to the planned exercise, and records every session for the debrief.',
    problem: [
      'A lane goes hot before the range is confirmed ready',
      'The briefing roll does not match who actually turned up',
      'Targetry, effects and cameras are checked by hand, one by one',
      'Instructor feedback lives on paper and never reaches the record',
      'The debrief relies on memory instead of the recorded session',
      'Results are re-keyed into the training record after the day',
    ],
    mods: [
      { k: 'Plan', i: 'ph-calendar-check', m: [
        'Ranges, lanes and details as bookable resources',
        'Nominal roll from the day’s confirmed attendance',
        'Exercise and scenario preparation ahead of the day',
        'Accounts, roles and permissions per user' ] },
      { k: 'Prepare', i: 'ph-list-checks', m: [
        'Built-in test of network, services and databases at start-up',
        'Range checklist for equipment, targetry and cameras',
        'Repeat any failed check before going hot',
        'Load the planned exercise in one step' ] },
      { k: 'Conduct', i: 'ph-crosshair', m: [
        'Live control of targetry and effects to the scenario',
        'Range hot and cold held as a system state',
        'Fixed console in the control room, tablet for instructors on the range',
        'Physical emergency stop that works without the software',
        '2.5D range view with locations and camera feeds' ] },
      { k: 'Review', i: 'ph-film-reel', m: [
        'Results, feedback and event timeline in one record',
        'After-action playback beside the recorded video',
        'Assessment against the course standard',
        'Reshoots arranged from the debrief' ] },
      { k: 'Records', i: 'ph-database', m: [
        'Reports and analytics across sessions',
        'Data import and export',
        'Append-only log of user actions and key changes',
        'Equipment health passed to HUMS' ] },
    ],
    flow: [
      ['Book', 'Ranges, lanes and the nominal roll are allocated to the session.'],
      ['Confirm', 'In the briefing room the operator matches the roll to who is present.'],
      ['Ready', 'Built-in test and range checklist pass before the exercise loads.'],
      ['Conduct', 'Targetry and effects run to plan while instructors log feedback.'],
      ['Stop', 'The hard-wired emergency stop halts targetry and effects; RMS records it.'],
      ['Debrief', 'Results, timeline and video replay together for the after-action review.'],
    ],
    out: [
      'The range cannot go hot until its checks pass, and every session runs from one confirmed state.',
      'Instructor feedback is captured at the firing point, not rewritten afterwards.',
      'The debrief replays what happened, with results and video on the same clock.',
      'If the video link drops, video panes close and training carries on.',
    ],
    arch: [
      ['ph-door', 'One secured entry', 'Every request and live event passes a single gateway with encryption and token checks.'],
      ['ph-fingerprint', 'Directory sign-in', 'Multi-factor sign-in against the customer directory, with role-based access.'],
      ['ph-stack', 'Independent services', 'Booking, mission control, equipment, records and reporting run as separate containerised services.'],
      ['ph-plugs-connected', 'Adapters only', 'Other systems are reached only through integration adapters and an event bus.'],
    ],
  },
  hums: {
    lead: 'One view of the health of every system on the range. HUMS gathers health, usage and fault data from each connected system, shows availability as it is, and turns trends into maintenance before a failure stops training.',
    problem: [
      'A fault is found when a session is already running',
      'Each system reports health in its own console, so nobody sees the whole range',
      'Availability is argued over instead of measured',
      'Maintenance follows the calendar, not the condition of the equipment',
      'Spares and obsolescence are noticed too late',
      'A system that has gone quiet looks the same as a healthy one',
    ],
    mods: [
      { k: 'Availability', i: 'ph-gauge', m: [
        'Real-time availability for every connected system',
        'Overall health of the range at a glance',
        'Live status passed up to the operations centre' ] },
      { k: 'Monitor', i: 'ph-heartbeat', m: [
        'Utilisation, bandwidth and built-in test results',
        'Battery, temperature, activations and operating hours',
        'Heartbeats, so a silent system is flagged' ] },
      { k: 'Events', i: 'ph-list-magnifying-glass', m: [
        'Time-stamped start, stop and fault events',
        'Recovery time after each fault',
        'Abnormal traffic detection' ] },
      { k: 'Predict', i: 'ph-chart-line-up', m: [
        'Failure prediction from trends',
        'Preventive maintenance scheduling',
        'Obsolescence tracking and spares forecast' ] },
      { k: 'Report', i: 'ph-export', m: [
        'Reports and data export',
        'Log of user actions and ingestion errors',
        'Long-term history for reliability trending' ] },
    ],
    flow: [
      ['Ingest', 'Each system reports its health and usage over standard protocols.'],
      ['Watch', 'Availability and status update in real time.'],
      ['Trend', 'History reveals the faults that are developing.'],
      ['Plan', 'Maintenance and spares are scheduled between sessions.'],
      ['Report', 'Availability and reliability are reported from logged events.'],
    ],
    out: [
      'The whole range has one health picture, not one console per system.',
      'Availability is calculated from logged events, so the operator and the owner see the same number.',
      'Developing faults surface early enough to fix between sessions.',
      'Long-term history supports reliability trending and technology refresh decisions.',
    ],
    arch: [
      ['ph-download-simple', 'Ingestion adapters', 'REST, MQTT and syslog inputs with retry and tracking for every source system.'],
      ['ph-fingerprint', 'Directory sign-in', 'Multi-factor sign-in with role-based access for maintenance, operators and instructors.'],
      ['ph-database', 'Own data store', 'Health, events and audit logs in separate encrypted stores, with live status cached.'],
      ['ph-clock', 'One clock', 'Time synchronised with the other range systems, so events line up.'],
    ],
  },
  vms: {
    lead: 'Video for training and safety on the range. ACCEL, our partner’s platform, records every lane, watches for unsafe situations as they happen, and works with range control so footage and range events share one clock.',
    problem: [
      'Footage is missing for the minutes that matter',
      'Clips from different cameras have to be aligned by hand',
      'An unsafe act is found on the recording after the session, not during it',
      'The key moment is overwritten before anyone keeps it',
    ],
    mods: [
      { k: 'Live', i: 'ph-video-camera', m: [
        'Multi-camera live view with alerts',
        'Standby and training modes, switched with the session',
        'Camera control and PTZ presets',
        'Event markers from range events' ] },
      { k: 'Record', i: 'ph-record', m: [
        'Continuous recording, higher quality during training and motion',
        'Time and location tags on every recording',
        'Failover recording',
        'Starred clips that are never overwritten' ] },
      { k: 'Review', i: 'ph-play', m: [
        'Synchronised playback across cameras',
        'Image enhancement for review',
        'Debrief room playback and external projection',
        'Export with a logged handling record' ] },
      { k: 'Analytics', i: 'ph-scan', m: [
        'Muzzle discipline monitoring',
        'Person in the butt area',
        'Unattended weapon',
        'Fire and smoke in the butt area',
        'Operator alert with a short evidence clip' ] },
    ],
    flow: [
      ['Standby', 'Cameras record continuously at standby quality.'],
      ['Train', 'The session starts and video switches to training recording.'],
      ['Alert', 'Video analytics raise an operator alert with a short evidence clip.'],
      ['Review', 'Playback follows the range timeline across every camera.'],
    ],
    out: [
      'Unsafe situations are flagged during the session, with the evidence attached.',
      'Every camera plays back on one clock, so an incident is seen from every angle at once.',
      'Kept clips stay kept, and every export is logged.',
      'Video runs standalone if the operations centre link is unavailable.',
    ],
    arch: [
      ['ph-lock', 'Closed network', 'A closed wired network with end-to-end encryption for every stream.'],
      ['ph-brain', 'Models that improve', 'Detection zones and rules are managed centrally, and operator feedback retrains the models.'],
      ['ph-plugs', 'Open camera standards', 'Cameras connect over standard streaming and device protocols.'],
      ['ph-heartbeat', 'Health reported', 'Camera, server and storage status is reported to HUMS.'],
    ],
  },
};
