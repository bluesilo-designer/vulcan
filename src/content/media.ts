/* Generated from the v6 site data on 21 Oct 2026, then maintained by hand. */
export const MEDIA_READY = [
  "home-control-room",
  "home-range-dawn",
  "rcs",
  "vms",
  "eva",
  "pwats",
  "ewms",
  "eams",
  "hums",
  "as",
  "integration-bench",
  "assurance-estop",
  "hero-a",
  "hero-b",
  "hero-c",
  "hero-d",
  "hero-e",
  "hero-f",
  "hero-g"
];

export const HERO_CUTS = [
  {
    "id": "home-control-room",
    "k": "Current",
    "d": "Control room"
  },
  {
    "id": "hero-a",
    "k": "A",
    "d": "The plan comes alive"
  },
  {
    "id": "hero-b",
    "k": "B",
    "d": "One second, everywhere"
  },
  {
    "id": "hero-c",
    "k": "C",
    "d": "One day on the range, eight systems"
  },
  {
    "id": "hero-d",
    "k": "D",
    "d": "The digital range, eight layers"
  },
  {
    "id": "hero-e",
    "k": "E",
    "d": "One trainee, indoor and outdoor, 18 s"
  },
  {
    "id": "hero-f",
    "k": "F",
    "d": "The range as a scale model, 18 s, no text"
  },
  {
    "id": "hero-g",
    "k": "G",
    "d": "Real people, documentary daylight, 28 s, no text"
  }
];

export const LOOKS = [
  {
    "id": "original",
    "k": "Original",
    "d": "Cold blue, the first set",
    "sw": [
      "#08090B",
      "#1E3A5F",
      "#5EA5FF"
    ]
  },
  {
    "id": "golden",
    "k": "Golden",
    "d": "Late sun, amber and sage",
    "sw": [
      "#2A2118",
      "#B9863F",
      "#8C9A6B"
    ]
  },
  {
    "id": "golden2",
    "k": "Golden 2.0",
    "d": "Client pick: golden light, original assurance picture",
    "sw": ["#2A2118", "#C9953F", "#5EA5FF"]
  },
  {
    "id": "daylight",
    "k": "Daylight",
    "d": "Overcast, olive, sand and terracotta",
    "sw": [
      "#3B4031",
      "#A8916A",
      "#B4694A"
    ]
  },
  {
    "id": "dusk",
    "k": "Dusk",
    "d": "Blue hour outside, tungsten inside",
    "sw": [
      "#10262A",
      "#C2672E",
      "#E3A94B"
    ]
  }
];

/* Image sets offered in the review panel (29 Oct 2026: the client dropped
   all but Golden 2.0). The other looks stay in LOOKS and their files stay in
   media/look/, so a set comes back by adding its id here. */
export const LOOKS_SHOWN = ['golden2'];

export const SLOTS = {
  "ops": {
    "k": "Where we operate, bed",
    "base": "home-range-dawn.jpg",
    "sel": "figure[data-id=\"home-range-dawn\"] img"
  },
  "aerial": {
    "k": "Modernising defence",
    "base": "s-aerial.jpg"
  },
  "command": {
    "k": "Simulate",
    "base": "sim-command-4k.jpg"
  },
  "partners": {
    "k": "Partners",
    "base": "partners.jpg"
  },
  "assurance": {
    "k": "Assurance",
    "base": "assurance.jpg"
  }
};

export const PRODUCT_IMAGE_SETS = [
  {
    "id": "steel",
    "k": "Set 1",
    "d": "Graphite, steel and amber"
  },
  {
    "id": "sage",
    "k": "Set 2",
    "d": "Sage, bone and oak"
  },
  {
    "id": "day",
    "k": "Set 3",
    "d": "Daylight, earlier shoot"
  },
  {
    "id": "dusk",
    "k": "Set 4",
    "d": "Dusk, earlier shoot"
  }
];

export const PRODUCT_IMAGE_ALIASES = {
  "day": {
    "weapon": "ppl",
    "crew": "cal",
    "command": "flow",
    "assets": "res"
  },
  "dusk": {
    "weapon": "ppl",
    "crew": "cal",
    "command": "flow",
    "assets": "res"
  }
};

/* Field set (28 Oct 2026): natural-light documentary photographs of a
   training day, shown in v2 and v3 only. Old path -> new file; patterns
   cover every look and product image set of the same slot. Shot list and
   art direction: docs/field-image-set.md. */
export const FIELD_SWAP: [RegExp, string][] = [
  [/^(s-brief|c\/floor|p\/trms-hero-[a-z0-9]+)\.jpg$/, 'f/trms.jpg'],
  [/^s-firingline\.jpg$/, 'f/rms.jpg'],
  [/^hums\.jpg$/, 'f/hums.jpg'],
  [/^vms\.jpg$/, 'f/vms.jpg'],
  [/^ewms\.jpg$/, 'f/ewms.jpg'],
  /* range day: four steps reuse the product frame for the same moment */
  [/^chain-04\.jpg$/, 'f/ewms.jpg'],
  [/^chain-05\.jpg$/, 'f/rms.jpg'],
  [/^chain-07\.jpg$/, 'f/vms.jpg'],
  [/^chain-10\.jpg$/, 'f/hums.jpg'],
  [/^chain-(\d\d)\.jpg$/, 'f/chain-$1.jpg'],
  [/^(look\/command-[a-z0-9]+|integration-bench|c\/integration)\.jpg$/, 'f/lab.jpg'],
  [/^(look\/assurance-[a-z0-9]+|a\/hero)\.jpg$/, 'f/server.jpg'],
  [/^look\/aerial-[a-z0-9]+\.jpg$/, 'f/aerial.jpg'],
  [/^look\/partners-[a-z0-9]+\.jpg$/, 'f/partners.jpg'],
  [/^a\/estop\.jpg$/, 'f/estop.jpg'],
];
export const fieldSwap = (file: string) => {
  for (const [re, to] of FIELD_SWAP) if (re.test(file)) return file.replace(re, to);
  return file;
};

/* Golden Dusk set (29 Oct 2026): one shoot in the Golden 2.0 colour with
   the Dusk concept, everyone in army uniform, every row of cards from the
   same set. Pending the client's final image review. Shot list, job ids and
   rejects: docs/field-image-set.md. */
export const GD_SWAP: [RegExp, string][] = [
  [/^(s-brief|c\/floor|sim-command-4k|p\/trms-hero-[a-z0-9]+)\.jpg$/, 'gd/trms.jpg'],
  [/^s-firingline\.jpg$/, 'gd/rms.jpg'],
  [/^(hums|vms|ewms)\.jpg$/, 'gd/$1.jpg'],
  [/^as\.jpg$/, 'gd/ewms.jpg'],
  /* range day: four steps reuse the product frame for the same moment */
  [/^chain-04\.jpg$/, 'gd/ewms.jpg'],
  [/^chain-05\.jpg$/, 'gd/rms.jpg'],
  [/^chain-07\.jpg$/, 'gd/vms.jpg'],
  [/^chain-10\.jpg$/, 'gd/hums.jpg'],
  [/^chain-(\d\d)\.jpg$/, 'gd/chain-$1.jpg'],
  [/^(look\/command-[a-z0-9]+|integration-bench|c\/integration)\.jpg$/, 'gd/lab.jpg'],
  [/^(look\/assurance-[a-z0-9]+|a\/hero)\.jpg$/, 'gd/server.jpg'],
  [/^(look\/aerial-[a-z0-9]+|s-aerial)\.jpg$/, 'gd/aerial.jpg'],
  [/^look\/partners-[a-z0-9]+\.jpg$/, 'gd/partners.jpg'],
  [/^a\/estop\.jpg$/, 'gd/estop.jpg'],
  /* the six assurance controls, in the v2 order */
  [/^a\/c1\.jpg$/, 'gd/a-licence.jpg'],
  [/^a\/c2\.jpg$/, 'gd/a-hardening.jpg'],
  [/^a\/c3\.jpg$/, 'gd/a-tamper.jpg'],
  [/^a\/c6\.jpg$/, 'gd/a-iso.jpg'],
  [/^a\/c5\.jpg$/, 'gd/a-zones.jpg'],
  [/^a\/c7\.jpg$/, 'gd/a-update.jpg'],
  /* closing CTA band; the Company "Where we are" band keeps its city view */
  [/^(c\/region|look\/ops-[a-z0-9]+)\.jpg$/, 'gd/cta.jpg'],
  /* v3 home: the three document cards in the v1 closing block */
  [/^rel-capability\.jpg$/, 'gd/chain-06.jpg'],
  [/^rel-assurance\.jpg$/, 'gd/a-iso.jpg'],
  [/^rel-interface\.jpg$/, 'gd/a-zones.jpg'],
];
export const gdSwap = (file: string) => {
  for (const [re, to] of GD_SWAP) if (re.test(file)) return file.replace(re, to);
  return file;
};

/* Photography sets shown in v2/v3, newest first. Choosing an image set
   (LOOKS) instead turns these off, which is the earlier photography. */
export const PHOTO_SETS = [
  { id: 'gd', k: 'Golden Dusk', d: '29 Oct: Golden 2.0 colour, Dusk concept, army throughout. Draft, images in revision', sw: ['#1B2A33', '#C9953F', '#E3A94B'] },
  { id: 'field', k: 'Field', d: '28 Oct: bright daylight documentary set', sw: ['#5B6B4A', '#C9B48A', '#8FB3D0'] },
];
export const PHOTO_SWAPS: Record<string, (file: string) => string> = { gd: gdSwap, field: fieldSwap };
