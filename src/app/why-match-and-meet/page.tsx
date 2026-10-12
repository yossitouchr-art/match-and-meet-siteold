import Link from 'next/link';
import PageHead from '@/components/PageHead';
import Scene from '@/components/Scene';
import { JsonLd, webPage } from '@/lib/jsonld';
import { pageMeta } from '@/lib/meta';
import { AGE_RANGE, PRICE_TEXT, UPDATED_TEXT, applyLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Why MATCH & MEET is different',
  description: `Research-based, multi-level matching, compatibility before looks, less emotional stress and risk, and hosted conversations that go somewhere. How MATCH & MEET solves what frustrates people about dating apps and speed dating in Bangkok.`,
  path: '/why-match-and-meet',
});

const FIVE: { cap: string; em: string; body: string }[] = [
  { cap: 'Built on', em: 'research.', body: 'Our assessment draws on a 23,000-person study of couples in Australia, the UK and Germany, a 43-study analysis of what predicts relationship quality, Thai research on couple bonding and family responsibility, and research on same-sex couples. It shows that how each person relates, and how two people cope together, matter more than simply being alike. We keep a register of every source and only cite what we have checked.' },
  { cap: 'Matched on', em: 'four levels.', body: 'We do not match on one score. Your non-negotiables, your fit across seven areas of real-couple research (emotional fit, communication, values, lifestyle, intimacy, practical plans and attraction), what matters most to you and a matchmaker’s own judgement each narrow the list before anyone is introduced.' },
  { cap: 'Compatibility', em: 'first.', body: 'Who you meet is decided by how well you fit, not by who photographs best. Your photos are seen only by our matchmaking team.' },
  { cap: 'Less stress,', em: 'less risk.', body: 'When you meet people who already fit your values, your expectations and the way you handle life, there is far less to second-guess: fewer mismatched dates, fewer heartbreaks you saw coming and less wondering whether this person is serious. Every guest is reviewed, and a matchmaker checks every shortlist.' },
  { cap: 'Conversations that', em: 'go somewhere.', body: 'A host guides each evening and you get time to talk properly. If the interest is mutual afterwards, we make the introduction, so a good evening does not end at the door.' },
];

const AREAS: [string, string][] = [
  ['Emotional fit', 'How you give and receive support.'],
  ['Communication', 'How you talk and handle disagreement.'],
  ['Values and direction', 'What you want your life to stand for.'],
  ['Practical plans', 'Family, children, money and the future.'],
  ['Lifestyle', 'How you like to live day to day.'],
  ['Intimacy', 'Closeness and physical connection.'],
  ['Attraction', 'Included, but never allowed to outweigh the rest.'],
];

const STATS: { fig: string; text: string; src: string }[] = [
  { fig: '45%', text: 'Relationship-specific factors such as appreciation, commitment, conflict and sexual satisfaction explained up to 45% of the differences in relationship quality, against 21% for individual traits. Across 43 studies of couples.', src: 'Joel et al., 2020, PNAS' },
  { fig: '23,250', text: 'In a study of this many people in Australia, the UK and Germany, similarity in personality added little. What each person brings, and how they treat each other, mattered more.', src: 'Dyrenforth et al., 2010, J Pers Soc Psychol' },
  { fig: '85 years', text: 'The Harvard Study of Adult Development, begun in 1938, found satisfaction in relationships, especially marriage, was the best predictor of who would be happy and healthy at 80, ahead of midlife cholesterol.', src: 'Harvard Gazette, 2023' },
  { fig: 'Looks', text: 'In speed dating, looks drew interest in the moment, but what people said they wanted in a partner did not predict who they actually liked. Ideal lists are a poor guide, so we match on how people really relate.', src: 'Eastwick and Finkel, 2008, J Pers Soc Psychol' },
];

const LEVELS: [string, string][] = [
  ['Non-negotiables first', 'If something is a deal-breaker for either of you, you are not matched on it. This saves both of you from a meeting that was never going to work.'],
  ['Seven areas of compatibility', 'We compare how you each relate, decide and live across seven areas drawn from research on real couples. We keep the detail of how they are weighed private.'],
  ['What matters most to you', 'Each person picks their top three priorities, and those count for more than the rest.'],
  ['A person checks it', 'A matchmaker reviews every shortlist, can overrule the numbers, and decides who you actually meet.'],
];

const VS: { pain: string; app: string; speed: string; us: string }[] = [
  { pain: 'Too much choice, too little depth', app: 'Endless profiles and a habit of swiping on to the next one.', speed: 'Many introductions of a few minutes each.', us: 'A few people chosen for you, and time to talk properly.' },
  { pain: 'Judged on photos and first impressions', app: 'Photos and a short bio decide almost everything.', speed: 'A few minutes is only enough for a first impression.', us: 'Compatibility decides who you meet. Photos are seen only by our team.' },
  { pain: 'Matches by chance', app: 'Algorithms built to keep you scrolling, with little you can check.', speed: 'Pairing is mostly by luck of the table.', us: 'Matched in advance on four levels, with a person checking the result.' },
  { pain: 'Emotional stress and risk', app: 'Repeated rejection, ghosting and meeting strangers you know little about.', speed: 'Many quick judgements, with little to tell you who is a good fit.', us: 'People are chosen for high compatibility and reviewed first, so there is less to worry about.' },
  { pain: 'Unsure who is serious', app: 'Fake profiles and people who are not looking for a relationship.', speed: 'Anyone who buys a ticket can attend.', us: `Every applicant is reviewed, single and here for something real, aged ${AGE_RANGE}.` },
  { pain: 'Nothing happens afterwards', app: 'Chats fade out and people stop replying.', speed: 'You have to chase contact details yourself.', us: 'If interest is mutual, we make the introduction for you.' },
];

export default function Why() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [webPage('/why-match-and-meet', 'Why MATCH & MEET is different', 'How research-based, multi-level matching and hosted conversations solve the problems of dating apps and speed dating.')] }} />
      <PageHead
        path="/why-match-and-meet"
        crumb="Why MATCH & MEET"
        variant="d"
        slot="story3"
        pattern={0}
        title={<>Why we are <em>different</em></>}
        intro="Dating apps give you endless choice and speed dating gives you a few minutes. MATCH & MEET gives you a few well-chosen people and the time to talk."
      />

      {FIVE.map((f, i) => (
        <Scene key={f.cap} as="section" variant={(['b', 'e', 'c', 'd', 'a'] as const)[i]} pattern={(i % 3) as 0 | 1 | 2} className="statement why">
          <div className="wrap narrow">
            <p className="eyebrow rv">{String(i + 1).padStart(2, '0')} of 5</p>
            <h2 className="big rv">{f.cap} <em>{f.em}</em></h2>
            <p className="say rv">{f.body}</p>
          </div>
        </Scene>
      ))}

      <section className="section" style={{ background: 'var(--night)', color: 'var(--glow)' }}>
        <div className="wrap narrow">
          <p className="eyebrow rv" style={{ color: 'var(--gold)' }}>The matching</p>
          <h2 className="rv" style={{ color: 'var(--glow)', fontWeight: 300 }}>Four levels before you <em style={{ color: 'var(--gold)' }}>meet anyone.</em></h2>
          <ol className="steps whysteps" style={{ marginTop: 32 }}>
            {LEVELS.map(([t, b], i) => (
              <li key={t} className="rv">
                <span className="num" aria-hidden="true">{i + 1}</span>
                <div><h3>{t}</h3><p>{b}</p></div>
              </li>
            ))}
          </ol>
          <h3 className="rv" style={{ color: 'var(--gold)', marginTop: 40 }}>The seven areas</h3>
          <ul className="areas rv">
            {AREAS.map(([t, b]) => (<li key={t}><strong>{t}</strong> <span>{b}</span></li>))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow rv">What the research says</p>
          <h2 className="rv">Fit matters more than <em>first impressions.</em></h2>
          <div className="grid grid-2" style={{ marginTop: 32 }}>
            {STATS.map((x) => (
              <article key={x.src} className="card rv">
                <p style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: '2.2rem', color: 'var(--wine)', margin: 0 }}>{x.fig}</p>
                <p>{x.text}</p>
                <p className="muted small">Source: {x.src}</p>
              </article>
            ))}
          </div>
          <p className="muted small" style={{ marginTop: 24 }}>
            Research shows what tends to predict satisfied couples. It cannot promise an outcome for any one person. Physical attraction is real and we include it, but it does not decide who you meet.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What frustrates people, and what we do about it</p>
          <h2>Six problems, six answers.</h2>
          <div className="vs-list" style={{ marginTop: 32 }}>
            {VS.map((v) => (
              <article key={v.pain} className="vs rv">
                <h3>{v.pain}</h3>
                <dl>
                  <div><dt>Dating apps</dt><dd>{v.app}</dd></div>
                  <div><dt>Speed dating</dt><dd>{v.speed}</dd></div>
                  <div className="us"><dt>MATCH &amp; MEET</dt><dd>{v.us}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className="muted small" style={{ marginTop: 24 }}>
            These describe common experiences with typical apps and speed-dating events, not any one company. We do not guarantee a match or a relationship. The Compatibility Passport and your matchmaker help you meet people worth meeting.
          </p>
        </div>
      </section>

      <Scene as="section" variant="d" slot="cta" pattern={1} className="final">
        <div className="wrap narrow">
          <h2 className="rv">See the difference <em>for yourself.</em></h2>
          <p className="lead rv" style={{ margin: '0 auto' }}>Applying takes about four minutes and costs nothing. Entry is {PRICE_TEXT}, paid only after you are approved.</p>
          <div className="btnrow rv">
            <a className="btn btn-primary btn-block" href={applyLink()}>Apply now</a>
            <Link className="btn btn-ghost btn-block" href="/how-it-works">How it works</Link>
          </div>
          <p className="muted small rv" style={{ marginTop: 20 }}>Last updated {UPDATED_TEXT}.</p>
        </div>
      </Scene>
    </>
  );
}
