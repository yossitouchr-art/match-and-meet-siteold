import PageHead from '@/components/PageHead';
import { JsonLd, webPage } from '@/lib/jsonld';
import { pageMeta } from '@/lib/meta';
import { EMAIL, NAME, UPDATED_TEXT } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How MATCH & MEET collects, uses and protects your information, including your photos and assessment answers, and how you can ask us to delete them.',
  path: '/privacy',
});

export default function Privacy() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [webPage('/privacy', 'MATCH & MEET Privacy Policy', 'How we collect, use and protect your information.')] }} />
      <PageHead
        path="/privacy"
        crumb="Privacy Policy"
        title={<>Privacy <em>Policy</em></>}
        intro="What we collect, why, who sees it, and how you stay in control. In plain language."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap narrow prose">
          <p>
            {NAME} (“we”) runs matchmaking events in Bangkok, Thailand. We follow Thailand’s Personal Data Protection Act (PDPA). This page explains how we handle
            your information. Questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Your application:</strong> first name or nickname, date of birth, gender, area of Bangkok, languages, who you would like to meet, relationship status and intentions, work, interests, and why you are applying.</li>
            <li><strong>Photos:</strong> a face photo and, optionally, a full-length photo.</li>
            <li><strong>Contact details:</strong> email, LINE ID or phone number, and optionally your Instagram or Facebook handle.</li>
            <li><strong>Your assessment answers:</strong> your answers to the private compatibility assessment, which may include personal views and preferences about relationships.</li>
            <li><strong>Payment records:</strong> that a payment was made, and its reference. We do not store your card details.</li>
            <li><strong>Event feedback:</strong> who you would like to meet again.</li>
          </ul>

          <h2>Why we use it</h2>
          <ul>
            <li>To review your application and check you are a fit for an event.</li>
            <li>To work out who you are likely to be compatible with and to prepare your Compatibility Passport.</li>
            <li>To run events and to introduce you to people where interest is mutual.</li>
            <li>To contact you about your application and events.</li>
            <li>To improve our method, using combined information that does not identify you.</li>
          </ul>

          <h2>Who sees it</h2>
          <p>
            Only our matchmaking team sees your application, photos and assessment answers. We do not sell your information and we do not share it with third parties for their
            own use. We use trusted service providers to run the site, store data securely and send email; they may handle your data only to provide those services. Other
            applicants never see your information unless you give permission, for example when you both ask to meet again.
          </p>

          <h2>Your consent</h2>
          <p>
            We ask for your consent when you apply, and separately for optional things such as event photos and marketing messages. You can say no to the optional ones and
            still take part. You can withdraw consent at any time by writing to us.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep your information only as long as needed for the purposes above, and for as long as the law requires for records such as payments. If you are not
            approved or stop taking part, we delete your information when you ask, or after a reasonable period.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to see the information we hold about you, correct it, receive a copy, object to its use, withdraw consent, or have it deleted. Write to{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we will respond promptly. You may also complain to Thailand’s Personal Data Protection Committee.
          </p>

          <h2>Security</h2>
          <p>
            Photos and answers are stored in access-controlled systems, available only to our matchmaking team. No system is perfectly secure, but we work to protect your
            information and we will tell you if something goes wrong that affects you.
          </p>

          <h2>This website</h2>
          <p>
            This website does not use advertising trackers. It stores no personal information in your browser, apart from a copy of the pages to help the site work offline if
            you add it to your home screen.
          </p>

          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
