/**
 * Photos and video for the site.
 *
 * Every picture and film on the site is a "slot". While a slot is empty (null) the site shows a slow, calm moving
 * background (drifting light and soft glows) in its place, so nothing looks broken. To use real media:
 *   1. Put the file in /public/media/ (see public/media/README.txt for sizes and formats).
 *   2. Replace null below with the file path and a short, honest description of what the picture shows.
 * Nothing else needs to change. Descriptions double as alt text, which also helps AI search understand the page.
 */

export type Photo = { src: string; alt: string } | null;
export type Video = { mp4: string; webm?: string; mp4Mobile?: string; poster: string } | null;

export type SlotKey = 'hero' | 'story1' | 'story2' | 'story3' | 'journey' | 'event' | 'about' | 'privacy' | 'cta';

/** Full-screen background film for the top of the home page. Keep it silent, 8 to 12 seconds, looping, under 3 MB. */
export const HERO_VIDEO: Video = { mp4: '/media/hero.mp4', webm: '/media/hero.webm', poster: '/media/hero-poster.jpg' };

export const PHOTOS: Record<SlotKey, Photo> = {
  hero: { src: '/media/hero-poster.jpg', alt: 'Two men laughing together over wine at a candlelit Bangkok restaurant with the city skyline behind them' },
  story1: { src: '/media/pair-women.webp', alt: 'Two women in conversation at an evening gathering, smiling and relaxed, with white lilies behind them' },
  story2: { src: '/media/pair-men.webp', alt: 'Two men smiling at each other across a table with glasses of white wine in a warm, dim restaurant' },
  story3: { src: '/media/group-men.webp', alt: 'Four men laughing together over drinks at a rooftop evening in Bangkok' },
  journey: { src: '/media/pair-mixed.webp', alt: 'A man and a woman in evening dress talking warmly at a hosted party, glasses in hand' },
  event: { src: '/media/group-men.webp', alt: 'Four men laughing together over drinks at a rooftop evening in Bangkok' },
  about: null,   // The team or the venue.
  privacy: null, // Abstract: a closed door, soft curtains, shadows.
  cta: { src: '/media/pair-mixed.webp', alt: 'A man and a woman in evening dress talking warmly at a hosted party, glasses in hand' },
};
