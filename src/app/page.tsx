import Link from 'next/link';
import Scene, { HeroRings, type Variant } from '@/components/Scene';
import { HeroVideo, Journey } from '@/components/Motion';
import { EventCard, FirstEventCard } from '@/components/EventCard';
import { JsonLd, serviceNode, webPage } from '@/lib/jsonld';
import { getOpenEvents, fmtDate, prettyName } from '@/lib/events';
import { pageMeta } from '@/lib/meta';
import { AGE_RANGE, EMAIL, PRICE_TEXT, applyLink } from '@/lib/site';

export const revalidate = 300;

export const metadata = pageMeta({
  title: 'MATCH & MEET | Compatibility-led matchmaking events in Bangkok',
  description: `Meet a few people chosen for how well you fit. Hosted matchmaking events in Bangkok for adults aged ${AGE_RANGE}. Entry ${PRICE_TEXT}, with your Compatibility Passport.`,
  path: '/',
  absoluteTitle: true,
});

const STEPS: [string, string][] = [
  ['Apply in about 4 minutes', 'A few basics, two photos and how to reach you. It is free to apply.'],
  ['We review within 2 working days', 'So every guest in the room is single and here for something real.'],
  ['Secure your place', 'Once you are approved, you pay to confirm your place. Not before.'],
  ['Complete your private assessment', 'About 25 minutes, saved as you go. It shapes who we introduce you to and becomes your Compatibility Passport.'],
  ['Meet in person', 'Join a hosted evening and talk properly with a few people chosen for you.'],
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);

const TILES: { href: string; title: string; line: string; variant: Variant; slot: 'journey' | 'story2' | 'event' | 'about'; pattern: 0 | 1 | 2 }[] = [
  { href: '/how-it-works', title: 'How it works', line: 'Seven calm steps, from apply to hello', variant: 'd', slot: 'journey', pattern: 1 },
  { href: '/passport', title: 'Your Passport', line: 'A private portrait of how you connect', variant: 'b', slot: 'story2', pattern: 2 },
  { href: '/events', title: 'Events', line: 'See who the next evening is for', variant: 'c', slot: 'event', pattern: 0 },
  { href: '/faq', title: 'Questions', line: 'Cost, privacy and how matching works', variant: 'e', slot: 'about', pattern: 1 },
];

const dl = (ms: number) => ({ ['--dl' as string]: `${ms}ms` }) as React.CSSProperties;

export default async function Home() {
  const events = await getOpenEvents();
  const next = events[0];
  const nextLine = next
    ? `Next event: ${prettyName(next.name)} · ${fmtDate(next.starts_at)} · ${next.venue || 'Bangkok'}`
    : 'First event: Men & Men · late November 2026 · Bangkok';

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [webPage('/', 'MATCH & MEET', 'Compatibility-led matchmaking events in Bangkok'), serviceNode] }} />

      {/* 1. Opening film */}
      <Scene as="section" variant="a" slot="hero" pattern={0} className="hero-scene" bg={<><HeroRings /><HeroVideo /></>}>
        <div className="wrap">
          <p className="eyebrow hero-eyebrow rise" style={dl(100)}>Bangkok · Compatibility-led matchmaking</p>
          <h1 className="hero-title rise" style={dl(250)}><span className="ln">Connecting people</span> <span className="ln"><em>meaningfully</em> again.</span></h1>
          <p className="hero-sub rise" style={dl(450)}>A few deep conversations with people chosen for how well you fit, instead of countless quick introductions.</p>
          <div className="btnrow rise" style={dl(650)}>
            <a className="btn btn-primary" href={applyLink(next?.slug)}>{next ? 'Apply for the next event' : 'Apply for our first event'}</a>
            <Link className="btn btn-ghost" href="/how-it-works">See how it works</Link>
          </div>
          <p className="nextline rise" style={dl(800)}><span className="dot" aria-hidden="true" /><span>{nextLine}</span></p>
        </div>
        <span className="cue" aria-hidden="true" />
      </Scene>

      {/* 2. The plain-language answer, in a calm statement */}
      <Scene as="section" variant="e" pattern={1} className="statement">
        <div className="wrap narrow">
          <p className="eyebrow rv">What is MATCH &amp; MEET?</p>
          <h2 className="rv" style={dl(120)}>A matchmaking service in Bangkok for adults aged {AGE_RANGE} who want a committed relationship.</h2>
          <p className="say rv" style={dl(240)}>
            You complete a private compatibility assessment and a matchmaker reviews your application. Then you meet a small number of people chosen for fit,
            at a hosted event. Entry is {PRICE_TEXT}, paid only after you are approved, and includes your personal Compatibility Passport.
          </p>
        </div>
      </Scene>

      {/* 3. Three big story panels */}
      <Scene as="section" variant="b" slot="story1" pattern={2} className="panel">
        <div className="wrap">
          <p className="eyebrow rv">Why it is different</p>
          <h2 className="big rv" style={dl(100)}>Not luck. <em>Fit.</em></h2>
          <p className="say rv" style={dl(220)}>Every guest completes a private compatibility assessment. Our matching, checked by a matchmaker, decides who you meet. Not swiping. Not chance.</p>
        </div>
      </Scene>
      <Scene as="section" variant="d" slot="story2" pattern={0} className="panel">
        <div className="wrap">
          <h2 className="big rv">A few deep <em>conversations.</em></h2>
          <p className="say rv" style={dl(160)}>Instead of a dozen rushed hellos, you have time to talk properly with a small number of people who suit you.</p>
        </div>
      </Scene>
      <Scene as="section" variant="c" slot="story3" pattern={1} className="panel">
        <div className="wrap">
          <h2 className="big rv">Hosted, <em>not hustled.</em></h2>
          <p className="say rv" style={dl(160)}>A host guides each evening, so you can relax, be yourself and focus on the person in front of you.</p>
        </div>
      </Scene>

      {/* 4. Interactive journey */}
      <Scene as="section" variant="a" slot="journey" pattern={2} className="journey">
        <div className="wrap narrow">
          <p className="eyebrow rv">How it works · tap to explore</p>
          <h2 className="rv" style={dl(100)}>From first click to <em>first conversation.</em></h2>
          <div className="rv" style={dl(200)}>
            <Journey steps={STEPS.map(([title, body]) => ({ title, body }))} />
          </div>
          <div className="btnrow rv" style={dl(260)}>
            <Link className="btn btn-ghost" href="/how-it-works">The full story</Link>
          </div>
        </div>
      </Scene>

      {/* 5. Explore tiles */}
      <section className="explore">
        <div className="wrap">
          <h2 className="rv">Explore.</h2>
          <div className="tiles">
            {TILES.map((t, n) => (
              <Link key={t.href} href={t.href} className="tile rv" style={dl(n * 90)}>
                <Scene variant={t.variant} slot={t.slot} pattern={t.pattern} className="tile-bg" />
                <span className="tile-cap"><strong>{t.title}</strong><span>{t.line}<Arrow /></span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comparison, kept as plain readable text */}
      <section className="section" style={{ background: 'var(--night)', color: 'var(--glow)' }}>
        <div className="wrap">
          <p className="eyebrow rv" style={{ color: 'var(--gold)' }}>How we compare</p>
          <h2 className="rv" style={{ color: 'var(--glow)', fontWeight: 300 }}>Not an app. Not speed dating.</h2>
          <div className="grid grid-3" style={{ marginTop: 32 }}>
            <div className="card rv">
              <h3>A typical dating app</h3>
              <ul>
                <li>You sort through endless profiles</li>
                <li>Photos and swiping lead</li>
                <li>Mostly online, with no host</li>
              </ul>
            </div>
            <div className="card rv" style={dl(100)}>
              <h3>Typical speed dating</h3>
              <ul>
                <li>Many very short introductions</li>
                <li>Pairing is mostly by chance</li>
                <li>Hard to go beyond a first impression</li>
              </ul>
            </div>
            <div className="card card-wine rv" style={dl(200)}>
              <h3 style={{ color: 'var(--cream)' }}>MATCH &amp; MEET</h3>
              <ul className="tick">
                <li>A small number of longer conversations</li>
                <li>People chosen for compatibility and reviewed by a matchmaker</li>
                <li>Hosted in person, with privacy built in</li>
              </ul>
            </div>
          </div>
          <div className="btnrow rv">
            <Link className="btn btn-ghost" href="/why-match-and-meet" style={{ color: 'var(--glow)', borderColor: 'rgba(251,249,247,.7)' }}>All six differences</Link>
          </div>
        </div>
      </section>

      {/* 7. Next event */}
      <Scene as="section" variant="c" slot="event" pattern={0} className="stage">
        <div className="wrap">
          <p className="eyebrow rv">Next event</p>
          <h2 className="rv" style={dl(100)}>Save your <em>place.</em></h2>
          <div className="rv" style={{ ...dl(200), maxWidth: 560 }}>{next ? <EventCard ev={next} /> : <FirstEventCard />}</div>
          <p className="rv" style={{ ...dl(260), marginTop: 22 }}><Link href="/events">See all events and who each one is for</Link></p>
        </div>
      </Scene>

      {/* 8. Privacy */}
      <Scene as="section" variant="e" slot="privacy" pattern={2} className="stage">
        <div className="wrap narrow">
          <p className="eyebrow rv">Your privacy</p>
          <h2 className="rv" style={dl(100)}>What you share <em>stays with us.</em></h2>
          <ul className="tick rv" style={dl(200)}>
            <li>Only our matchmaking team sees your answers and photos.</li>
            <li>Nothing is shared with third parties.</li>
            <li>Nothing is shown to other applicants without your permission.</li>
            <li>No account is needed to apply, and you can ask us to delete your data any time.</li>
          </ul>
          <div className="btnrow rv" style={dl(280)}>
            <Link className="btn btn-ghost" href="/privacy">Read the privacy policy</Link>
          </div>
        </div>
      </Scene>

      {/* 9. Final call */}
      <Scene as="section" variant="d" slot="cta" pattern={1} className="final">
        <div className="wrap narrow">
          <h2 className="rv">Ready to meet <em>differently?</em></h2>
          <p className="lead rv" style={{ ...dl(120), margin: '0 auto' }}>Applying takes about four minutes and costs nothing.</p>
          <div className="btnrow rv" style={dl(220)}>
            <a className="btn btn-primary btn-block" href={applyLink(next?.slug)}>Apply now</a>
          </div>
          <p className="muted small rv" style={{ ...dl(300), marginTop: 20 }}>Questions? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </Scene>
    </>
  );
}
