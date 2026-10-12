import { applyLink } from '@/lib/site';
import { fmtDate, fmtTime, prettyName, priceLine, type EventRow } from '@/lib/events';
import { PRICE_TEXT } from '@/lib/site';

/** An event that is open for applications (from the database). */
export function EventCard({ ev, headingLevel = 3 }: { ev: EventRow; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as 'h2' | 'h3';
  const price = priceLine(ev) || PRICE_TEXT;
  return (
    <article className="event">
      <span className="pill">Applications open</span>
      <H>{prettyName(ev.name)}</H>
      <dl className="facts">
        <div><dt>Date</dt><dd>{fmtDate(ev.starts_at)}</dd></div>
        {ev.starts_at && <div><dt>Time</dt><dd>{fmtTime(ev.starts_at)} Bangkok time</dd></div>}
        <div><dt>Where</dt><dd>{ev.venue || 'Bangkok, venue to be announced'}</dd></div>
        <div><dt>Entry</dt><dd>{price}</dd></div>
      </dl>
      <p className="muted small">Includes your Compatibility Passport. You pay only after your application is approved.</p>
      <a className="btn btn-primary btn-block" href={applyLink(ev.slug)}>Apply for this event</a>
    </article>
  );
}

/** Shown while no event is open in the database: our first event, described honestly without inventing a date. */
export function FirstEventCard({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as 'h2' | 'h3';
  return (
    <article className="event">
      <span className="pill">Our first event</span>
      <H>Men &amp; Men</H>
      <dl className="facts">
        <div><dt>When</dt><dd>Late November 2026</dd></div>
        <div><dt>Where</dt><dd>Bangkok, venue to be announced</dd></div>
        <div><dt>For</dt><dd>Gay men aged 30–60</dd></div>
        <div><dt>Entry</dt><dd>{PRICE_TEXT}</dd></div>
      </dl>
      <p className="muted small">Includes your Compatibility Passport. You pay only after your application is approved. Applications are open now, and the exact date and venue are confirmed to approved guests.</p>
      <a className="btn btn-primary btn-block" href={applyLink()}>Apply now</a>
    </article>
  );
}
