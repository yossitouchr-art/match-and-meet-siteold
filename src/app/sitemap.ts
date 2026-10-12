import type { MetadataRoute } from 'next';
import { SITE_URL, UPDATED_ISO } from '@/lib/site';

const PAGES: { path: string; priority: number; freq: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, freq: 'weekly' },
  { path: '/how-it-works', priority: 0.9, freq: 'monthly' },
  { path: '/events', priority: 0.9, freq: 'weekly' },
  { path: '/why-match-and-meet', priority: 0.9, freq: 'monthly' },
  { path: '/passport', priority: 0.8, freq: 'monthly' },
  { path: '/faq', priority: 0.8, freq: 'monthly' },
  { path: '/about', priority: 0.6, freq: 'monthly' },
  { path: '/privacy', priority: 0.3, freq: 'yearly' },
  { path: '/terms', priority: 0.3, freq: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${SITE_URL}${p.path === '/' ? '' : p.path}`, lastModified: new Date(UPDATED_ISO), changeFrequency: p.freq, priority: p.priority }));
}
