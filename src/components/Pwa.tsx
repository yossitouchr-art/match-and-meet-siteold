'use client';

import { useEffect, useState } from 'react';

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

/** Registers the offline service worker (production only, so local development is never confused by caching). */
export function RegisterSW() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    const go = () => navigator.serviceWorker.register('/sw.js').catch(() => { /* offline support is a bonus, never an error */ });
    if (document.readyState === 'complete') go();
    else window.addEventListener('load', go, { once: true });
  }, []);
  return null;
}

/** "Add to your home screen": Android/desktop Chrome use the install prompt; iPhone gets the two-tap hint. */
export function InstallButton() {
  const [evt, setEvt] = useState<InstallEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) { setDone(true); return; }
    const ua = navigator.userAgent;
    setIos(/iPad|iPhone|iPod/.test(ua) && !/CriOS|FxiOS/.test(ua));
    const onPrompt = (e: Event) => { e.preventDefault(); setEvt(e as InstallEvent); };
    const onInstalled = () => { setDone(true); setEvt(null); };
    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => { window.removeEventListener('beforeinstallprompt', onPrompt); window.removeEventListener('appinstalled', onInstalled); };
  }, []);

  if (done) return null;
  if (evt) {
    return (
      <div className="install">
        <button type="button" onClick={async () => { await evt.prompt(); await evt.userChoice.catch(() => null); setEvt(null); }}>Add to your home screen</button>
      </div>
    );
  }
  if (ios) {
    return <div className="install"><p>Tip: tap the Share button, then “Add to Home Screen” to keep MATCH &amp; MEET on your phone.</p></div>;
  }
  return null;
}
