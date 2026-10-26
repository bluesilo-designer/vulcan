/* Generated from the v6 site data on 21 Oct 2026, then maintained by hand. */
export const MODERN = {
  "title": "Modernising defence operations",
  "line": "Defence operations are becoming increasingly connected.",
  "close": "Blue Silo connects these layers into a unified operational environment.",
  "cols": [
    [
      "Training",
      "ph-graduation-cap",
      [
        [
          "Personnel",
          "ph-users-three"
        ],
        [
          "Resources",
          "ph-stack"
        ]
      ]
    ],
    [
      "Operations",
      "ph-crosshair",
      [
        [
          "Ranges",
          "ph-target"
        ],
        [
          "Facilities",
          "ph-buildings"
        ]
      ]
    ],
    [
      "Assets",
      "ph-package",
      [
        [
          "Weapons",
          "ph-vault"
        ],
        [
          "Ammunition",
          "ph-circles-three"
        ]
      ]
    ],
    [
      "Data",
      "ph-chart-line",
      [
        [
          "Events",
          "ph-pulse"
        ],
        [
          "Analytics",
          "ph-chart-bar"
        ]
      ]
    ]
  ]
};

export const TILES = [
  [
    "Train",
    "trms",
    "Digitise training resources, personnel, bookings, allocation and performance."
  ],
  [
    "Operate",
    "rcs",
    "Coordinate range operations, control, safety and utilisation."
  ],
  [
    "Account",
    "ewms",
    "Hold weapons as serialised assets, from issue and return to fit for firing certification."
  ],
  [
    "Account",
    "eams",
    "Issue, verify and reconcile ammunition as a counted consumable, daily and weekly."
  ],
  [
    "Account",
    "pwats",
    "Locate personnel and issued items to sub metre accuracy, refreshed every second."
  ],
  [
    "Monitor",
    "hums",
    "Read equipment health and usage, so maintenance is planned against evidence."
  ],
  [
    "Monitor",
    "vms",
    "Record what happened and detect what is happening now, processed at the edge."
  ],
  [
    "Govern",
    "as",
    "Control who is inside the fence, and keep the administrative record defensible."
  ]
];

export const OPS = [
  [
    "ph-graduation-cap",
    "Training",
    "Military training"
  ],
  [
    "ph-crosshair",
    "Ranges",
    "Indoor and outdoor live fire ranges"
  ],
  [
    "ph-package",
    "Assets",
    "Weapons and ammunition"
  ],
  [
    "ph-users-three",
    "Readiness",
    "Personnel operations"
  ],
  [
    "ph-shield-check",
    "Security",
    "Surveillance, AI and video"
  ],
  [
    "ph-scales",
    "Governance",
    "Administration and compliance"
  ]
];

export const STEPS = [
  "Identity, booking and vehicle clearance are checked at the gate, before anyone is inside.",
  "Each person checks in against their booking and is issued a tracking tag.",
  "Attendance comes from the tags, so the brief matches who is really here.",
  "The locker opens to the right person, and ammunition is issued against the package.",
  "Lanes, targetry and safety are verified ready before the serial starts.",
  "Targetry and effects run on plan, with one range state governing everything.",
  "Hazards are flagged and evidence is captured the moment they happen.",
  "Results and marked video are ready before anyone walks back.",
  "Weapons and ammunition reconcile before anyone is released.",
  "Equipment health is read against work actually done, so maintenance is planned."
];

export const CHAIN = [
  {
    "k": "Access",
    "s": "AGS · EVA",
    "t": "Controlled access into the facility",
    "b": "Identity and booking are verified at the guard house from a scanned credential or booking code, and the vehicle licence plate is captured and matched automatically. The verification result and clearance status are shown to the guard before the gate opens, so the decision is informed rather than assumed.",
    "d": "Identity, booking reference, vehicle clearance, licence plate",
    "h": "Who is authorised to be inside today"
  },
  {
    "k": "Register",
    "s": "AGS · PWATS",
    "t": "Self registration and tracker issue",
    "b": "The trainee registers at a kiosk, completes facial registration, and is onboarded automatically with an assigned location displayed. An active tag is collected and bound to that person for the duration of the visit.",
    "d": "Registration record, assigned location, tracker binding",
    "h": "The link between a person and a trackable identity"
  },
  {
    "k": "Brief",
    "s": "RMS",
    "t": "Briefing, against the real roll",
    "b": "Entry to the briefing room is by multi factor authentication. The conductor reviews the final nominal roll built from actual kiosk registrations, adjusts details where needed, and only then does the session become real.",
    "d": "Final nominal roll, session assignment",
    "h": "The confirmed composition of the detail"
  },
  {
    "k": "Draw",
    "s": "EWMS · EAMS",
    "t": "Weapon and ammunition drawn",
    "b": "At the locker, authentication unlocks the assigned weapon and the withdrawal is confirmed by the system rather than by memory. At the collection point, ammunition is issued against the assigned package, verified by type and quantity, and receipt is confirmed.",
    "d": "Weapon serial, locker event, ammunition type and quantity, issued to identity",
    "h": "Custody, from this moment until return"
  },
  {
    "k": "Prepare",
    "s": "RMS",
    "t": "Pre conduct verification",
    "b": "Range, safety systems and equipment readiness are verified and submitted as a digital pre conduct checklist. The approved exercise is loaded, a dry run is conducted, and only then is the range confirmed ready for training.",
    "d": "Readiness checklist, loaded exercise, dry run result",
    "h": "Evidence that the range was fit before firing began"
  },
  {
    "k": "Conduct",
    "s": "RMS · VMS",
    "t": "The serial runs",
    "b": "Mission execution is driven from a fixed client in the control room and a portable client inside the range. Targetry and effects are triggered on plan, the session is recorded, scenario time jump allows a move to a specific event without restarting, and E-Stop halts everything immediately whether triggered physically or virtually.",
    "d": "Scenario state, target and effect events, session recording, safety state",
    "h": "Authority to start, pause and stop"
  },
  {
    "k": "Observe",
    "s": "VMS · EVA",
    "t": "Computer vision watches with the operator",
    "b": "Muzzle discipline, unattended weapons, presence in the butt area, and smoke or fire are each detected, raised as an alert, captured as a short evidence clip, and written to the timeline. Where a person is detected forward of the firing line, firing is inhibited and targetry paused until the area is confirmed clear.",
    "d": "Detections, alerts, evidence clips, timeline markers, positions",
    "h": "What happened, at the moment it happened"
  },
  {
    "k": "Review",
    "s": "RMS · VMS",
    "t": "After action review from the timeline",
    "b": "Results and feedback are reviewed at the kiosk, debriefing runs playback against the marked event timeline, and any reshoots are identified and scheduled. Because markers were made during the serial, the debrief is conducted from the record that will be filed.",
    "d": "Event timeline, results, instructor feedback, reshoot schedule",
    "h": "The assessment, tied to evidence"
  },
  {
    "k": "Return",
    "s": "EWMS · EAMS",
    "t": "Returned, verified and accounted for",
    "b": "The weapon is verified on return with computer vision support and a declaration, magazines and unexpended rounds are returned, defects and cleaning are recorded against the serial, and daily and weekly accounting is closed.",
    "d": "Return state, defects, cleaning record, reconciliation result",
    "h": "The closing account"
  },
  {
    "k": "Sustain",
    "s": "HUMS",
    "t": "Health and usage of everything that ran",
    "b": "Health, usage and utilisation are collected continuously from every connected system and item of equipment, feeding failure prediction, condition based preventive maintenance, spare part forecasting and operational availability reporting.",
    "d": "Health, utilisation, fault events, reliability, availability",
    "h": "Whether the facility is fit for tomorrow"
  }
];

export const SIMULATE = [
  [
    "ph-plugs-connected",
    "Interface validation",
    "Every interface is exercised against a stand in before the counterpart arrives."
  ],
  [
    "ph-tree-structure",
    "System dependency mapping",
    "Dependencies are mapped and integrated in order, not discovered in the final month."
  ],
  [
    "ph-flask",
    "Scenario testing and simulation",
    "Operational behaviour is rehearsed end to end before anything is deployed."
  ]
];

export const FACTS = [
  [
    "ph-code",
    "Source code escrow, as standard",
    "Defined release conditions and a verified deposit to ensure continued access when required."
  ],
  [
    "ph-file-text",
    "Intellectual property settled first",
    "Rights are clearly assigned in the contract, in writing, before delivery."
  ],
  [
    "ph-users-three",
    "Documentation a third party can use",
    "Comprehensive technical and operational documentation so a competent team can take over if needed."
  ]
];

export const FAQ = [
  [
    "Can Blue Silo systems be deployed individually?",
    "Yes. Each system can be deployed independently with its own hardware, software and interfaces. Our systems are designed to operate as standalone modules, while remaining ready to integrate with other Blue Silo or third-party systems as the programme evolves."
  ],
  [
    "Is Blue Silo only a range systems company?",
    "No. While range training is a core focus, we also develop and integrate systems for security, video analytics, asset management, operational monitoring and training management. Our solutions support military training facilities, defence installations and other mission-critical environments."
  ],
  [
    "Can Blue Silo work with our existing suppliers and systems?",
    "Yes. We work with prime contractors, system integrators and technology partners. Our systems are designed with defined interfaces and industry-standard protocols, allowing integration with existing infrastructure, third-party hardware and software where required."
  ],
  [
    "Can the systems operate in isolated or offline environments?",
    "Yes. Our systems can be deployed in isolated, secure networks without internet connectivity. Activation, licensing and updates can be handled through controlled offline methods, with no live internet connection required during operations."
  ],
  [
    "What happens if we need long-term continuity or another team needs to take over?",
    "We provide comprehensive documentation, source-code escrow, and clearly defined intellectual property rights. Our systems are designed for maintainability, allowing a competent third party to take over support if required. We also offer long-term support and maintenance options for continued operations."
  ]
];

export const TRUST = {
  "title": "Trusted in mission-critical environments",
  "line": "Supporting defence, government and homeland security organisations across Singapore and APAC.",
  "logos": [
    {
      "n": "MINDEF",
      "f": "mindef-t.png"
    },
    {
      "n": "DSTA",
      "f": "dsta.svg"
    },
    {
      "n": "Certis",
      "f": "certis.svg"
    },
    {
      "n": "Surbana Jurong",
      "f": "sj.svg",
      "m": "sj-m.svg"
    },
    {
      "n": "NCS",
      "f": "ncs.png"
    },
    {
      "n": "ST Engineering",
      "f": "ste.svg"
    }
  ]
};

export const STACK = [
  {
    "k": "Train",
    "d": "Plan the training day against what the facility actually has.",
    "ids": [
      "trms"
    ]
  },
  {
    "k": "Operate",
    "d": "Run the range, hold the safety state, file the record.",
    "ids": [
      "rcs"
    ]
  },
  {
    "k": "Account",
    "d": "Weapons, ammunition and people, counted and located.",
    "ids": [
      "ewms",
      "eams",
      "pwats"
    ]
  },
  {
    "k": "Monitor",
    "d": "Watch the equipment and watch the ground.",
    "ids": [
      "hums",
      "vms",
      "eva"
    ]
  },
  {
    "k": "Govern",
    "d": "Control who is inside, and keep the record defensible.",
    "ids": [
      "as"
    ]
  }
];

export const RELEASE = [
  [
    "Product Demonstration",
    "See our systems running on a working setup, guided by the people who build them.",
    "rel-capability",
    "Request a demonstration"
  ],
  [
    "Assurance Summary",
    "Our approach to licensing, hardening, cybersecurity and compliance.",
    "rel-assurance",
    "Request a copy"
  ],
  [
    "Integration & Interface Pack",
    "Interface structures, protocol patterns and our approach to multi-system delivery.",
    "rel-interface",
    "Request a copy"
  ]
];

export const EXPLORER_IMAGES = {
  "trms": "s-brief",
  "rcs": "s-firingline",
  "ewms": "ewms",
  "eams": "eams",
  "pwats": "pwats",
  "hums": "hums",
  "vms": "vms",
  "as": "as"
};

export const WORDS = [
  "no",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve"
];
