import type { MetadataRoute } from 'next';
import { NAME, SLOGAN } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: NAME,
    short_name: 'MATCH&MEET',
    description: `${SLOGAN}. Compatibility-led matchmaking events in Bangkok.`,
    start_url: '/?source=pwa',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#F4F2F0',
    theme_color: '#140F10',
    lang: 'en',
    categories: ['lifestyle', 'social'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Apply now', short_name: 'Apply', url: '/events', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
      { name: 'How it works', short_name: 'How it works', url: '/how-it-works', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
    ],
  };
}
