'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HERO_VIDEO } from '@/lib/media';

/** Fades things in as you scroll to them. Looks for elements with class "rv". Without JavaScript they simply show. */
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rv:not(.in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [path]);
  return null;
}

/** Background film for the opening screen. Skipped for people who prefer less motion or are saving data; the poster shows instead. */
export function HeroVideo() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setOk(!calm && !nav.connection?.saveData);
  }, []);
  if (!HERO_VIDEO || !ok) return null;
  const wide = window.matchMedia('(min-width: 700px)').matches;
  return (
    <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={HERO_VIDEO.poster} aria-hidden="true">
      {!wide && HERO_VIDEO.mp4Mobile && <source src={HERO_VIDEO.mp4Mobile} type="video/mp4" />}
      {HERO_VIDEO.webm && <source src={HERO_VIDEO.webm} type="video/webm" />}
      <source src={HERO_VIDEO.mp4} type="video/mp4" />
    </video>
  );
}

/** Tap through the five steps, one at a time, in big type. All the text is in the page for readers and crawlers. */
export function Journey({ steps }: { steps: { title: string; body: string }[] }) {
  const [i, setI] = useState(0);
  const last = steps.length - 1;
  return (
    <div>
      <div className="jstage" aria-live="polite">
        <span className="jnum" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        {steps.map((s, n) => (
          <div key={s.title} className="jpanel" data-on={n === i} aria-hidden={n !== i}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
      <div className="jdots" role="group" aria-label="Choose a step">
        {steps.map((s, n) => (
          <button key={s.title} type="button" className="jdot" aria-label={`Step ${n + 1}: ${s.title}`} aria-current={n === i} data-done={n < i} onClick={() => setI(n)} />
        ))}
      </div>
      <div className="jctl">
        <button type="button" className="jbtn" aria-label="Previous step" disabled={i === 0} onClick={() => setI((v) => Math.max(0, v - 1))}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button type="button" className="jbtn" aria-label="Next step" disabled={i === last} onClick={() => setI((v) => Math.min(last, v + 1))}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
        </button>
        <span className="jcount">{i + 1} / {steps.length}</span>
      </div>
    </div>
  );
}
