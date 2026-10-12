import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { JsonLd, webPage } from '@/lib/jsonld';
import { pageMeta } from '@/lib/meta';
import { AGE_RANGE, EMAIL, NAME, SLOGAN, UPDATED_TEXT, applyLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About',
  description: `About MATCH & MEET: a Bangkok matchmaking service built around compatibility, hosted conversations and privacy, for adults aged ${AGE_RANGE} who want a committed relationship.`,
  path: '/about',
});

export default function About() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [webPage('/about', 'About MATCH & MEET', 'A Bangkok matchmaking service built around compatibility, hosted conversations and privacy.', 'AboutPage')] }} />
      <PageHead
        path="/about"
        crumb="About"
        title={<>About <em>{NAME}</em></>}
        intro={`${SLOGAN}. We are a Bangkok matchmaking service for adults who are ready for something real.`}
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap narrow prose">
          <h2 style={{ marginTop: 0 }}>Why we exist</h2>
          <p>
            Many people in Bangkok are looking for a committed partner and are tired of the same pattern: endless swiping, many quick introductions, and very few
            real conversations. We built MATCH &amp; MEET to turn that around. Fewer introductions, chosen with care, and the time to talk properly.
          </p>

          <h2>What we believe</h2>
          <ul className="tick">
            <li><strong>Compatibility first.</strong> Shared goals and values matter more than a good photo.</li>
            <li><strong>Depth over volume.</strong> A few good conversations beat a hundred hellos.</li>
            <li><strong>A human in the loop.</strong> Matching helps, but a matchmaker makes the final call.</li>
            <li><strong>Honesty about limits.</strong> We promise a better-chosen introduction, never a guaranteed outcome.</li>
            <li><strong>Privacy as a rule.</strong> Especially for LGBTQ+ guests, discretion is not optional.</li>
          </ul>

          <h2>Who we serve</h2>
          <p>
            Single adults aged {AGE_RANGE} in Bangkok. We run separate events for gay men, lesbians and straight singles, beginning with Men &amp; Men in late
            November 2026, with the goal of becoming the most trusted matchmaking service in Asia.
          </p>

          <h2>How we use research</h2>
          <p>
            Our assessment draws on published research into what helps relationships go well, such as shared relationship goals, values, communication and handling
            conflict. We use it to guide introductions, and we are clear that it is guidance, not prediction.
          </p>

          <h2>Contact</h2>
          <p>
            Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Based in Bangkok, Thailand.
          </p>
          <div className="btnrow">
            <a className="btn btn-primary" href={applyLink()}>Apply now</a>
            <Link className="btn btn-ghost" href="/privacy">Privacy Policy</Link>
          </div>
          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
