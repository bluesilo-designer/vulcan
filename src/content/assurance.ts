/* Generated from the v6 site data on 21 Oct 2026, then maintained by hand. */
export const ASSURANCE_CONTROLS = [
  [
    "ph-lock-key",
    "Licensing and entitlement control",
    "Entitlements are bound to delivered hardware and validated offline, with no call-outs during operations."
  ],
  [
    "ph-shield-chevron",
    "System hardening",
    "Each component is hardened to the services it requires, with a documented baseline and secure configuration."
  ],
  [
    "ph-tree-structure",
    "Tamper-proof architecture",
    "Critical components are integrity checked, with subsystems separated by function to contain faults."
  ],
  [
    "ph-fingerprint",
    "Multi-factor authentication",
    "Multi-factor sign-in for operators and administrators, with role-based access control in every module."
  ],
  [
    "ph-shield-warning",
    "Cybersecurity and network segregation",
    "Segmented networks, continuous monitoring, audit logs and defined patch routes for fielded and enterprise systems."
  ],
  [
    "ph-seal-check",
    "Standards alignment and compliance",
    "Built to meet relevant defence and government standards, with evidence provided in the assurance summary."
  ]
];

export const ASSURANCE_IMAGES = [
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6"
];

export const LICENSING_CONTROLS = [
  {
    "n": "01",
    "k": "License Protection",
    "gate": "May this copy run at all?",
    "d": "Ensures only authorised and properly licensed systems can use the product.",
    "practice": "A delivered copy of this software is not something that simply starts. It has to be entitled to run on the systems it was delivered for, and entitlement is bound to those systems rather than granted once and forgotten. An installation that was never authorised does not quietly become a running one.",
    "prevents": [
      "A copy taken from one site and stood up at another without anyone knowing",
      "A development or test build finding its way into an operational environment",
      "Scope drift where more instances run than were ever procured, and nobody can say how many"
    ],
    "evidence": "The binding model, meaning what entitlement is tied to, how it is issued, and what happens when hardware legitimately changes, is documented in the assurance summary and is a fair thing to ask us to walk through before award.",
    "impl": [
      [
        "Node locked entitlement",
        "Entitlement is bound to a machine fingerprint derived from stable hardware identifiers, such as board or chassis serial, CPU identifier and primary network interface address, rather than to a key string that can be copied."
      ],
      [
        "Tolerant matching",
        "The fingerprint is matched on a threshold of its components rather than all of them, so replacing a failed network card does not brick a cluster node. Falling below the threshold triggers re-issue, not a hard stop mid session."
      ],
      [
        "Counted scope",
        "The entitlement states how many nodes and which clusters it covers, so the number of running instances is a number someone can actually check against the contract."
      ]
    ]
  },
  {
    "n": "02",
    "k": "Secure License Validation",
    "gate": "Is that entitlement still good?",
    "d": "Validates license authenticity, entitlement, status and expiry before allowing licensed functionality.",
    "practice": "Four separate checks, made before functionality is released rather than after it has already run. They are separate because a licence can be genuine and still expired, current and still outside its entitlement, or within entitlement and still suspended. Collapsing them into one yes or no is how licensing quietly stops meaning anything.",
    "prevents": [
      "<strong>Authenticity</strong> a forged or altered licence presented as genuine",
      "<strong>Entitlement</strong> a genuine licence used for more, or for something other, than it covers",
      "<strong>Status</strong> a licence that has been suspended or revoked continuing to work",
      "<strong>Expiry</strong> a licence that has simply run out being honoured indefinitely"
    ],
    "evidence": "What each check reads, in what order, and what the system does when one fails, including whether it degrades or stops, is stated in the assurance summary rather than discovered during acceptance.",
    "impl": [
      [
        "A signed document, not a key",
        "The licence is a signed artefact carrying the full entitlement, not a serial number checked against a list. Signature <code>Ed25519</code>, with <code>RSA-2048</code> as the interoperable alternative, payload optionally encrypted with <code>AES-256-GCM</code>."
      ],
      [
        "Verification key in the product, signing key never",
        "The public verification key ships inside the product. The private signing key stays with the issuing authority and never reaches a delivered system."
      ],
      [
        "Clock tampering",
        "Validity is checked against a monotonic high water mark of the last observed time as well as the system clock, so winding a clock backwards does not extend a licence."
      ],
      [
        "Fails closed, with one exception",
        "Licensed functionality is withheld on a failed validation. Safety functions are not licensed functionality: the emergency stop path sits outside this boundary by design."
      ]
    ]
  },
  {
    "n": "03",
    "k": "Offline and Air-Gapped Ready",
    "gate": "Does it work with no way out?",
    "d": "Supports secure license validation in isolated environments without requiring internet connectivity.",
    "practice": "A licensing scheme that phones home is a licensing scheme that fails in an isolated environment, which is precisely where this software is expected to live. Validation is designed for no outbound route as the normal case, not as a degraded mode that has to be requested.",
    "prevents": [
      "A range that cannot start a training day because a licence server was unreachable",
      "Pressure to open an outbound route through a boundary that exists for good reasons",
      "Renewal and re-issue turning into a site visit every time"
    ],
    "evidence": "The offline issue, renewal and revocation path, meaning how a licence gets in and out of a closed environment and who carries it, is the part worth examining closely, because it is where most offline schemes turn out to be online schemes with extra steps.",
    "impl": [
      [
        "Challenge and response, carried by hand",
        "The node emits an activation request containing the product code and its fingerprint. It is carried out on removable media, or read from the screen as a code. The issuing side returns a signed, encrypted licence file, which the node verifies and decrypts locally."
      ],
      [
        "Nothing outbound at runtime",
        "After activation, validation reads the stored local artefact. There is no call out, so there is no dependency on a route that a closed environment was never going to provide."
      ],
      [
        "Renewal and revocation travel the same way",
        "Renewals and a signed revocation list are distributed as artefacts on the same path, so withdrawal of entitlement does not require connectivity either."
      ],
      [
        "Announced grace, not silent expiry",
        "Approaching expiry is surfaced to operators and to the health monitoring system well before the date, because a licence that lapses unannounced on the morning of a range day is an outage we caused."
      ]
    ]
  },
  {
    "n": "04",
    "k": "Tamper Protection",
    "gate": "Are the parts doing the checking intact?",
    "d": "Protects critical product components from unauthorised modification or manipulation.",
    "practice": "Integrity of the delivered components is part of the security posture, not a packaging detail. It also closes the obvious hole in the three controls above: a validation step is only worth having if the thing performing it cannot simply be edited out.",
    "prevents": [
      "Validation logic being bypassed by modifying the component that performs it",
      "A substituted or altered component running unnoticed alongside genuine ones",
      "Silent drift between what was delivered, what was accredited, and what is actually executing"
    ],
    "evidence": "Which components are treated as critical, how modification is detected, and what the system does on detection are stated per component. A blanket claim of tamper protection without that list is not a claim anyone can verify.",
    "impl": [
      [
        "Signed build artefacts",
        "Container images are signed at build time and referenced by digest. The cluster refuses to admit an image that is unsigned or whose digest does not match the signed one, so an altered artefact does not reach execution."
      ],
      [
        "Bill of materials and provenance",
        "A software bill of materials and a build provenance attestation are produced in the pipeline and shipped with the release, so what is running can be compared against what was delivered and accredited."
      ],
      [
        "Start up integrity check",
        "Critical components are enumerated in a signed manifest and verified at start up. Enumeration is the point: a blanket claim of integrity protection without a list of what is covered is not verifiable."
      ],
      [
        "The licensing component is inside the protected set",
        "Validation is only worth having if the component performing it cannot be edited out, so it sits within the protected boundary rather than guarding it from outside."
      ],
      [
        "Detection is loud",
        "A failed integrity check is logged, raised to the operator and forwarded to the programme log platform. Silent failure would leave the control doing nothing at exactly the moment it matters."
      ]
    ]
  },
  {
    "n": "05",
    "k": "Standards and Compliance",
    "gate": "Is the process around it controlled?",
    "d": "Our products and processes are designed with security, quality and operational controls aligned with applicable international standards, with ISO certification initiatives planned to further strengthen our commitment to security and quality.",
    "practice": "Stated precisely, because the precision is the point. Controls are <strong>aligned with</strong> applicable international standards today. Certification is <strong>planned</strong>. Those are two different claims and we keep them apart, in writing, everywhere.",
    "prevents": [
      "<strong>Aligned with</strong> the standard shaped how we designed and how we work",
      "<strong>Certified</strong> an independent body has audited and issued a certificate. We do not claim this",
      "<strong>Accredited</strong> granted against a specific programme and its environment, obtained as programme work with a schedule"
    ],
    "evidence": "Which standards shaped which controls, and the current state and intended timing of the certification initiatives, are set out in the assurance summary. Conflating these three is the fastest way for a supplier to lose credibility in due diligence, and it is usually done by accident rather than design.",
    "impl": [
      [
        "ISO 9001, quality management",
        "Organisational. How work is specified, reviewed, controlled and corrected. The standard behind our configuration management and release discipline."
      ],
      [
        "ISO/IEC 27001, information security management",
        "Organisational. Access control, cryptography, supplier security and incident response, commonly expected of a supplier before facility clearance is considered."
      ],
      [
        "IEC 62443, security for control systems",
        "Product and system, not organisation. The relevant family for software that controls physical equipment, which is what a range control system does."
      ],
      [
        "Common Criteria, ISO/IEC 15408",
        "Product evaluation against a defined target, with mutual recognition between participating countries. Relevant where a component must be an evaluated product rather than a well built one."
      ],
      [
        "Where we are",
        "Controls are designed in alignment with the above. Certification initiatives are planned. We do not claim a certificate we have not been issued."
      ]
    ]
  }
];

/* v2 (27 Oct 2026): claims brought back to what we can evidence.
   "Tamper-proof" and "built to meet" overstated; we state alignment. */
export const ASSURANCE_CONTROLS_V2 = ASSURANCE_CONTROLS.map((c) =>
  c[1] === 'Tamper-proof architecture'
    ? [c[0], 'Tamper-resistant architecture', 'Critical components are integrity checked, and subsystems are separated by function so a fault stays local.']
    : c[1] === 'Standards alignment and compliance'
      ? [c[0], 'Standards alignment', 'Designed in line with relevant defence and government standards. The assurance summary sets out how.']
      : c);
