import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { JsonLd, ORG_ID, webPage } from '@/lib/jsonld';
import { pageMeta } from '@/lib/meta';
import { AGE_RANGE, EMAIL, PRICE_TEXT, SITE_URL, UPDATED_TEXT, applyLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'How it works',
  description: 'Apply in four minutes, get reviewed within two working days, complete a private compatibility assessment, then meet a few people chosen for fit at a hosted event in Bangkok.',
  path: '/how-it-works',
});

const STEPS: { t: string; b: React.ReactNode }[] = [
  { t: 'Apply (about 4 minutes)', b: <>Tell us a few basics, add two photos and share how to reach you on LINE or email. It is free, needs no account, and your answers save on your device as you go.</> },
  { t: 'We review (within 2 working days)', b: <>A matchmaker reads every application. We check that each guest is single, aged {AGE_RANGE}, and here for something real, and that the evening will be balanced for everyone. You hear from us on LINE and email.</> },
  { t: 'Secure your place', b: <>If you are approved, we send a payment link. Event entry is {PRICE_TEXT} and includes your Compatibility Passport. You never pay before approval.</> },
  { t: 'Complete your private assessment (about 25 minutes)', b: <>We email you a personal link. The assessment looks at what you want from a relationship, how you connect and what matters most to you. It saves as you go, so you can pause and come back.</> },
  { t: 'We choose who you meet', b: <>Our matching looks for people who are likely to suit you, and a matchmaker checks the result. You are introduced to a small number of people, not a room full of strangers.</> },
  { t: 'Meet in person', b: <>Come to a hosted evening in Bangkok. A host guides the conversations so you can relax and get to know each person properly.</> },
  { t: 'After the event', b: <>You tell us who you would like to see again. Where the interest is mutual, we make the introduction. Your Compatibility Passport stays with you.</> },
];

export default function HowItWorks() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            webPage('/how-it-works', 'How MATCH & MEET works', 'The steps from applying to meeting people chosen for compatibility.'),
            {
              '@type': 'HowTo',
              '@id': `${SITE_URL}/how-it-works#howto`,
              name: 'How to join a MATCH & MEET event in Bangkok',
              description: 'From applying to meeting a few people chosen for compatibility.',
              totalTime: 'PT30M',
              estimatedCost: { '@type': 'MonetaryAmount', currency: 'THB', value: '2590' },
              publisher: { '@id': ORG_ID },
              step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.t, url: `${SITE_URL}/how-it-works#step-${i + 1}` })),
            },
          ],
        }}
      />
      <PageHead slot="story1" variant="d"
        path="/how-it-works"
        crumb="How it works"
        title={<>How it <em>works</em></>}
        intro="You apply, we review, you complete a private assessment, and then you meet a few people chosen for how well you fit."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap narrow">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.t} id={`step-${i + 1}`}>
                <span className="num" aria-hidden="true">{i + 1}</span>
                <div><h2 style={{ fontSize: '1.4rem', marginBottom: 4 }}>{s.t}</h2><p>{s.b}</p></div>
              </li>
            ))}
          </ol>
          <div className="btnrow">
            <a className="btn btn-primary" href={applyLink()}>Apply now</a>
            <Link className="btn btn-ghost" href="/faq">Read the questions &amp; answers</Link>
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="wrap narrow prose">
          <h2 style={{ marginTop: 0 }}>Why we do it this way</h2>
          <p>
            Research on lasting relationships points to the same few things again and again: wanting the same kind of relationship, sharing core values, and handling
            disagreement well. Chemistry matters too, but it is hard to judge in a two-minute chat. So we use the assessment to find people who are likely to suit you,
            and the evening to see whether the spark is really there.
          </p>
          <p>
            We are open about the limits. No questionnaire can promise love, so a matchmaker always reviews the result, and the evening is where you decide.
          </p>
          <h2>Privacy at every step</h2>
          <p>
            Only our matchmaking team sees your application, assessment answers and photos. They are never shared with third parties and never shown to other applicants
            without your permission. Read the <Link href="/privacy">privacy policy</Link> or write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
