/* MATCH & MEET service worker: keeps the site usable on a bad connection.
   - Static files (scripts, styles, fonts, icons): served from cache, refreshed in the background by new versions.
   - Pages: network first, so people always see the latest event details; the last copy opens if they are offline.
   Bump VERSION whenever this file changes. */
const VERSION = 'v1';
const STATIC = `mm-static-${VERSION}`;
const PAGES = `mm-pages-${VERSION}`;
const PRECACHE = ['/offline', '/icons/icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(PAGES).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('mm-') && !k.endsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.startsWith('/_next/static/') || url.pathname.startsWith('/icons/') || url.pathname.startsWith('/brand/')) {
    event.respondWith(
      caches.open(STATIC).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      }),
    );
    return;
  }

  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(PAGES);
        try {
          const res = await fetch(req);
          if (res.ok) cache.put(req, res.clone());
          return res;
        } catch (_) {
          return (await cache.match(req)) || (await cache.match('/offline')) || Response.error();
        }
      })(),
    );
  }
});
