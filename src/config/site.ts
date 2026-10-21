/* One place for everything the head of every page needs. */
export const SITE = {
  name: 'Blue Silo',
  legalName: 'Blue Silo Pte. Ltd.',
  tagline: 'Transforming Digitally',
  /* Public origin, used for canonical and Open Graph URLs. */
  url: 'https://bluesilo.studio',
  locale: 'en_SG',
  defaultTitle: 'Blue Silo. Defence and Security Technology',
  titleSuffix: 'Blue Silo',
  defaultDescription:
    'Blue Silo designs, develops and integrates mission-critical systems for military training, range operations, asset accountability and operational readiness.',
  ogImage: '/media/og-default.jpg',
  /* Draft for review and the tender is live: keep search engines out
     until someone with the authority to publish says otherwise. */
  indexable: false,
  /* The floating Content panel and hero switcher. Review only. */
  reviewTools: true,
} as const;
