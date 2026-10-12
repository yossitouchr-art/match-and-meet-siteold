import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { JsonLd, webPage } from '@/lib/jsonld';
import { pageMeta } from '@/lib/meta';
import { AGE_RANGE, EMAIL, NAME, PRICE_TEXT, UPDATED_TEXT } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Terms & Conditions',
  description: 'The terms for applying to and attending MATCH & MEET events in Bangkok: who can apply, approval, payment, conduct and what we do and do not promise.',
  path: '/terms',
});

export default function Terms() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [webPage('/terms', 'MATCH & MEET Terms & Conditions', 'Terms for applying to and attending events.')] }} />
      <PageHead
        path="/terms"
        crumb="Terms & Conditions"
        title={<>Terms &amp; <em>Conditions</em></>}
        intro="The simple rules for applying to and attending our events."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap narrow prose">
          <h2 style={{ marginTop: 0 }}>Who can apply</h2>
          <p>
            You must be at least 20 years old. Our current events are for ages {AGE_RANGE}, and you must be single (not in a relationship or marriage). You agree that the
            information you give us is true and that the photos you share are of you.
          </p>

          <h2>Approval</h2>
          <p>
            Applying is free and does not guarantee a place. We review every application, and we may approve, waitlist or decline it. Our decision takes into account
            fit with the event and its balance, and we do not have to give a reason.
          </p>

          <h2>Payment</h2>
          <p>
            Event entry is {PRICE_TEXT} unless the event page says otherwise, and includes your Compatibility Passport. You pay only after you are approved, and your place
            is confirmed when payment is received. Cancellation and refund terms for each event are confirmed in your approval message.
          </p>

          <h2>What we promise, and what we do not</h2>
          <p>
            We promise careful matching, a well-run event and respect for your privacy. We cannot promise that you will meet a partner, that someone will want to meet you
            again, or that a relationship will last. The Compatibility Passport is guidance, not a prediction.
          </p>

          <h2>How we expect everyone to behave</h2>
          <ul>
            <li>Treat every guest with courtesy and respect.</li>
            <li>Do not harass, pressure or discriminate against anyone.</li>
            <li>Do not share another guest’s details, photos or story without their permission.</li>
            <li>Do not use our events to sell, recruit or promote.</li>
          </ul>
          <p>We may remove anyone who breaks these rules from an event or from our service.</p>

          <h2>Photos at events</h2>
          <p>
            Photos and short clips from events may be used in our promotion only if you gave consent for that when you applied. You can say no and still attend.
          </p>

          <h2>Your information</h2>
          <p>How we handle it is explained in our <Link href="/privacy">Privacy Policy</Link>.</p>

          <h2>Changes and contact</h2>
          <p>
            We may update these terms and will show the date below. If you have questions, write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. These terms are governed by the
            laws of Thailand. {NAME} is based in Bangkok.
          </p>
          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
