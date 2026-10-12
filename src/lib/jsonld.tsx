import { CITY, EMAIL, NAME, ORG_DESCRIPTION, PRICE_THB, SITE_URL, SLOGAN, UPDATED_ISO } from './site';

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

/** Renders one JSON-LD block. "<" is escaped so page text can never close the script tag. */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

/** Site-wide: who we are and what the site is. Sent on every page. */
export const siteGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      email: EMAIL,
      slogan: SLOGAN,
      description: ORG_DESCRIPTION,
      areaServed: { '@type': 'City', name: CITY },
      knowsLanguage: ['en', 'th'],
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: EMAIL, availableLanguage: ['English', 'Thai'] },
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE_URL,
      name: NAME,
      description: SLOGAN,
      inLanguage: 'en',
      publisher: { '@id': ORG_ID },
    },
  ],
};

/** The matchmaking service and its price. Used on the home and Passport pages. */
export const serviceNode = {
  '@type': 'Service',
  '@id': `${SITE_URL}/#service`,
  name: 'Compatibility-led matchmaking events in Bangkok',
  serviceType: 'Matchmaking',
  description:
    'A private compatibility assessment, a matchmaker review and a hosted event where you meet a small number of people chosen for compatibility. Includes a personal Compatibility Passport.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'City', name: CITY },
  audience: { '@type': 'PeopleAudience', suggestedMinAge: 30, suggestedMaxAge: 60 },
  offers: {
    '@type': 'Offer',
    price: String(PRICE_THB),
    priceCurrency: 'THB',
    description: 'Event entry including the Compatibility Passport. Paid only after your application is approved.',
    url: `${SITE_URL}/events`,
  },
};

export function webPage(path: string, name: string, description: string, type: 'WebPage' | 'FAQPage' | 'AboutPage' | 'CollectionPage' = 'WebPage') {
  return {
    '@type': type,
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en',
    dateModified: UPDATED_ISO,
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}
