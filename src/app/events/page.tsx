import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { EventCard, FirstEventCard } from '@/components/EventCard';
import { JsonLd, ORG_ID, webPage } from '@/lib/jsonld';
import { baht, getOpenEvents, prettyName } from '@/lib/events';
import { pageMeta } from '@/lib/meta';
import { AGE_RANGE, EMAIL, PRICE_TEXT, SITE_URL, UPDATED_TEXT, applyLink } from '@/lib/site';

export const revalidate = 300;

export const metadata = pageMeta({
  title: 'Events in Bangkok',
  description: `MATCH & MEET events in Bangkok for gay men, lesbians and straight singles aged ${AGE_RANGE}. First event: Men & Men, late November 2026. Entry ${PRICE_TEXT}.`,
  path: '/events',
});

const SEGMENTS = [
  { name: 'Men & Men', who: 'Gay men', status: 'First event: late November 2026' },
  { name: 'Women & Women', who: 'Lesbians and women who date women', status: 'Coming next. Apply now to be invited.' },
  { name: 'Men & Women', who: 'Straight singles', status: 'Coming next. Apply now to be invited.' },
];

export default async function Events() {
  const events = await getOpenEvents();

  const eventNodes = events
    .filter((e) => e.starts_at)
    .map((e) => {
      const price = baht(e.early_price_label && e.early_ends_at && Date.now() < new Date(e.early_ends_at).getTime() ? e.early_price_label : e.price_label);
      return {
        '@type': 'Event',
        '@id': `${SITE_URL}/events#${e.slug}`,
        name: `MATCH & MEET ${prettyName(e.name)}`,
        description: `A hosted matchmaking evening in Bangkok where guests meet a small number of people chosen for compatibility. Includes the Compatibility Passport.`,
        startDate: e.starts_at,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: { '@type': 'Place', name: e.venue || 'Bangkok', address: { '@type': 'PostalAddress', addressLocality: 'Bangkok', addressCountry: 'TH' } },
        organizer: { '@id': ORG_ID },
        offers: {
          '@type': 'Offer',
          url: applyLink(e.slug),
          price: String(price ?? 2590),
          priceCurrency: 'THB',
          availability: 'https://schema.org/InStock',
        },
      };
    });

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [webPage('/events', 'MATCH & MEET events in Bangkok', 'Upcoming matchmaking events.', 'CollectionPage'), ...eventNodes] }} />
      <PageHead slot="story3" variant="c"
        path="/events"
        crumb="Events"
        wide
        title={<>Events in <em>Bangkok</em></>}
        intro={`Separate evenings for gay men, lesbians and straight singles aged ${AGE_RANGE}. Our first event is Men & Men in late November 2026.`}
      />

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <h2 style={{ fontSize: '1.8rem', marginBottom: 20 }}>Open for applications</h2>
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            {events.length > 0 ? events.map((e) => <EventCard key={e.slug} ev={e} />) : <FirstEventCard />}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="wrap">
          <p className="eyebrow">Who each event is for</p>
          <h2>One service, three evenings.</h2>
          <div className="grid grid-3" style={{ marginTop: 28 }}>
            {SEGMENTS.map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p style={{ marginBottom: 8 }}>{s.who}</p>
                <p className="muted small" style={{ margin: 0 }}>{s.status}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            Applications are open to everyone now. If your event is not scheduled yet, we add you to the list and invite you as soon as it is.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow prose">
          <h2 style={{ marginTop: 0 }}>What is included</h2>
          <ul className="tick">
            <li>A place at a hosted evening, with a small number of people chosen for you.</li>
            <li>Your private assessment and personal <Link href="/passport">Compatibility Passport</Link>.</li>
            <li>Introductions after the event, where the interest is mutual.</li>
          </ul>
          <p>
            <strong>Entry: {PRICE_TEXT}.</strong> Applying is free and you pay only after you are approved.
          </p>
          <div className="btnrow">
            <a className="btn btn-primary" href={applyLink(events[0]?.slug)}>Apply now</a>
            <Link className="btn btn-ghost" href="/how-it-works">How it works</Link>
          </div>
          <p className="muted small" style={{ marginTop: 20 }}>Questions about an event? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
