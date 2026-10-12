import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Everything on this site is public marketing content, so everyone is welcome, AI search and assistant crawlers included.
 * The apply, assessment and admin areas live on apply.matchandmeet.life, a separate site that is marked noindex.
 * To opt out of AI *training* only, remove the training crawlers (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot)
 * from the list below and keep the search and user-request crawlers.
 */
const AI_CRAWLERS = [
  // Search and answer engines
  'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot',
  // Fetches a page when a person asks an assistant about it
  'ChatGPT-User', 'Claude-User', 'Perplexity-User',
  // Model training
  'GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/offline'] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: ['/offline'] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
