import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { JsonLd, webPage } from '@/lib/jsonld';
import { ALL_QA, FAQ } from '@/lib/faq';
import { pageMeta } from '@/lib/meta';
import { EMAIL, UPDATED_TEXT, applyLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Questions & answers',
  description: 'Straight answers about MATCH & MEET: who it is for, what it costs, how applying works, how the matching works, and how your privacy is protected.',
  path: '/faq',
});

export default function Faq() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              ...webPage('/faq', 'MATCH & MEET questions and answers', 'Answers about who MATCH & MEET is for, cost, applying, matching and privacy.', 'FAQPage'),
              mainEntity: ALL_QA.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
            },
          ],
        }}
      />
      <PageHead
        path="/faq"
        crumb="Questions & answers"
        title={<>Questions &amp; <em>answers</em></>}
        intro="Straight answers about who it is for, what it costs, how the matching works and how your privacy is protected."
      />
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap narrow faq">
          {FAQ.map((g) => (
            <div key={g.group}>
              <h2>{g.group}</h2>
              {g.items.map((x) => (
                <details key={x.q}>
                  <summary>{x.q}</summary>
                  <div className="ans"><p>{x.a}</p></div>
                </details>
              ))}
            </div>
          ))}
          <div className="card" style={{ marginTop: 40 }}>
            <h3>Still have a question?</h3>
            <p>Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and a member of the team will reply.</p>
            <div className="btnrow" style={{ marginTop: 16 }}>
              <a className="btn btn-primary" href={applyLink()}>Apply now</a>
              <Link className="btn btn-ghost" href="/how-it-works">How it works</Link>
            </div>
          </div>
          <p className="updated">Last updated {UPDATED_TEXT}.</p>
        </div>
      </section>
    </>
  );
}
