import type { Metadata } from 'next';
import { NAME, SITE_URL } from './site';

const OG = { url: '/og.png', width: 1200, height: 630, alt: `${NAME}: connecting people meaningfully again` };

/** Per-page metadata: title, description, canonical address and social preview. */
export function pageMeta(o: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const full = o.absoluteTitle ? o.title : `${o.title} | ${NAME}`;
  return {
    title: o.absoluteTitle ? { absolute: o.title } : o.title,
    description: o.description,
    alternates: { canonical: o.path },
    openGraph: { type: 'website', siteName: NAME, locale: 'en_US', url: `${SITE_URL}${o.path}`, title: full, description: o.description, images: [OG] },
    twitter: { card: 'summary_large_image', title: full, description: o.description, images: [OG.url] },
  };
}
