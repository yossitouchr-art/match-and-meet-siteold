/** One place for every fact about the business, so pages, structured data and llms.txt never disagree. */
export const SITE_URL = 'https://matchandmeet.life';
export const APPLY_URL = process.env.NEXT_PUBLIC_APPLY_URL || 'https://apply.matchandmeet.life';
export const NAME = 'MATCH & MEET';
export const SLOGAN = 'Connecting people meaningfully again';
export const EMAIL = 'soulmates@matchandmeet.life';
export const CITY = 'Bangkok';

/** Event entry price (Sean, 7 Oct 2026): 2,590 baht, about US$75, includes the Compatibility Passport. */
export const PRICE_THB = 2590;
export const PRICE_TEXT = '2,590 baht (about US$75)';
export const AGE_RANGE = '30–60';

/** Optional membership (Sean, 7 Oct 2026). */
export const MEMBERSHIP_TEXT = 'US$20 a month';

/** Shown on pages and in structured data as the freshness signal. Update when copy changes. */
export const UPDATED_ISO = '2026-10-09';
export const UPDATED_TEXT = '9 October 2026';

export const ORG_DESCRIPTION =
  'MATCH & MEET is a compatibility-led matchmaking service in Bangkok for adults aged 30–60 who want a committed relationship. Each guest completes a private compatibility assessment and is reviewed by a matchmaker, then meets a small number of people chosen for fit at hosted events. Separate events are held for gay men, lesbians and straight singles.';

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
] as const;

export const applyLink = (slug?: string) => (slug ? `${APPLY_URL}/${slug}` : APPLY_URL);
