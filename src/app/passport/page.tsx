import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { JsonLd, ORG_ID, serviceNode, webPage } from '@/lib/jsonld';
import { pageMeta } from '@/lib/meta';
import { PRICE_TEXT, SITE_URL, UPDATED_TEXT, applyLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'The Compatibility Passport',
  description: `Your personal, private summary of what you are looking for, how you connect and who you are most compatible with. Included with MATCH & MEET event entry, ${PRICE_TEXT}.`,
  path: '/passport',
});

export default function Passport() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            webPage('/passport', 'The Compatibility Passport', 'A personal, private summary of what you are looking for and who you are most compatible with.'),
            {
              '@type': 'Product',
              '@id': `${SITE_URL}/passport#product`,
              name: 'Compatibility Passport',
              description: 'A personal, private summary of what you are looking for, how you connect, and the kinds of people you are most compatible with. Included with MATCH & MEET event entry.',
              brand: { '@id': ORG_ID },
              category: 'Matchmaking',
              offers: { '@type': 'Offer', price: '2590', priceCurrency: 'THB', url: `${SITE_URL}/events`, description: 'Included with event entry. Paid only after your application is approved.' },
            },
            serviceNode,
          ],
        }}
      />
      <PageHead slot="story2" variant="b"
        path="/passport"
        crumb="Compatibility Passport"
        title={<>Your Compatibility <em>Passport</em></>}
        intro="A personal, private summary of what you are looking for, how you connect, and the kinds of people you are most compatible with."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap narrow prose">
          <div className="glance">
            <h2 style={{ marginTop: 0 }}>In short</h2>
            <p>
              The Compatibility Passport is what you receive after completing your private assessment. It is included with your event entry ({PRICE_TEXT}), and it
              is a starting point for conversation, not a verdict.
            </p>
          </div>

          <h2>What it gives you</h2>
          <ul className="tick">
            <li>A clear picture of what you want from a relationship, in words you recognise.</li>
            <li>Insight into how you connect, and what tends to matter most to you.</li>
            <li>The kinds of people you are most compatible with, and why.</li>
            <li>Things worth talking about on a first meeting, so conversations start well.</li>
          </ul>

          <h2>How you get it</h2>
          <p>
            Apply, get approved, then complete the assessment: about 25 minutes, saved as you go, and available to complete in your own time. Your Passport comes
            from your answers. See the <Link href="/how-it-works">full process</Link>.
          </p>

          <h2>What it is not</h2>
          <p>
            It does not predict whether a relationship will last, and it will not tell you who to marry. Research can show which things help relationships go well,
            but people are more than a questionnaire. We treat your Passport as guidance for you and your matchmaker, and the evening as the real test.
          </p>

          <h2>Who sees it</h2>
          <p>Only you and our matchmaking team. It is never shared with other applicants or third parties without your permission.</p>

          <div className="btnrow">
            <a className="btn btn-primary" href={applyLink()}>Apply to get yours</a>
            <Link className="btn btn-ghost" href="/faq">Questions &amp; answers</Link>
          </div>
          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
