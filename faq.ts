import { AGE_RANGE, EMAIL, MEMBERSHIP_TEXT, PRICE_TEXT } from './site';

export type QA = { q: string; a: string };

/**
 * Answers are written to stand alone: the first sentence answers the question, because that is the part
 * people and AI assistants quote. The same list feeds the FAQ page and its FAQPage structured data.
 */
export const FAQ: { group: string; items: QA[] }[] = [
  {
    group: 'The basics',
    items: [
      {
        q: 'What is MATCH & MEET?',
        a: `MATCH & MEET is a compatibility-led matchmaking service in Bangkok for adults aged ${AGE_RANGE} who want a committed relationship. You complete a private compatibility assessment, a matchmaker reviews your application, and you meet a small number of people chosen for how well you fit at a hosted event.`,
      },
      {
        q: 'Who is it for?',
        a: `Single adults aged ${AGE_RANGE} in Bangkok who are looking for something real, from a committed partnership to a relationship that could lead to marriage. We run separate events for gay men (Men & Men), lesbians (Women & Women) and straight singles (Men & Women). Our first event is for gay men.`,
      },
      {
        q: 'How is MATCH & MEET different from speed dating?',
        a: 'Speed dating gives you many very short introductions, mostly by chance. MATCH & MEET gives you a few longer conversations with people chosen for compatibility, led by a host, so there is time to find out whether you actually click.',
      },
      {
        q: 'How is it different from a dating app?',
        a: 'Apps rely on photos and swiping, and you do the sorting. At MATCH & MEET every guest is reviewed, completes a compatibility assessment, and meets in person. A matchmaker, not an algorithm alone, decides who you meet.',
      },
      {
        q: 'Do you guarantee a match or a relationship?',
        a: 'No. Nobody honestly can. Our matching uses published relationship research to find people who are likely to suit each other, but chemistry still has to happen in the room. What we promise is a better-chosen introduction and a well-run evening.',
      },
    ],
  },
  {
    group: 'Applying and cost',
    items: [
      {
        q: 'How much does it cost?',
        a: `Event entry is ${PRICE_TEXT}, and it includes your personal Compatibility Passport. You only pay after your application is approved. Applying is free.`,
      },
      {
        q: 'How does applying work?',
        a: 'Apply online in about 4 minutes with a few basics, two photos and your contact details. We review within 2 working days. If you are approved, you pay to secure your place and we email your private compatibility assessment, which takes about 25 minutes and saves as you go.',
      },
      {
        q: 'Why do you review applications?',
        a: 'So that every guest in the room is single, here for something real, and a good fit for that evening. It protects everyone who comes, and it is how we keep each event balanced.',
      },
      {
        q: 'What if my application is not approved right away?',
        a: `You pay nothing unless you are approved. If an event is not yet open for your age group or segment, we add you to the waitlist and contact you by LINE or email when a suitable event opens. Questions are welcome at ${EMAIL}.`,
      },
      {
        q: 'Is there a membership?',
        a: `There is an optional membership at ${MEMBERSHIP_TEXT}. Members receive compatible new profiles each month and discounted event entry. You do not need it to attend an event.`,
      },
    ],
  },
  {
    group: 'Compatibility and privacy',
    items: [
      {
        q: 'What is the Compatibility Passport?',
        a: 'The Compatibility Passport is a personal, private summary of what you are looking for, how you connect, and the kinds of people you are most compatible with. It is included with your event entry, and it is a starting point for conversation, not a verdict.',
      },
      {
        q: 'Is the matching scientific?',
        a: 'It is built on published research into what predicts satisfying relationships, such as shared relationship goals, values and ways of handling conflict. We are careful about limits: no questionnaire can predict love, so we treat the results as guidance for a matchmaker, not as a score that decides your future.',
      },
      {
        q: 'Who sees my information and photos?',
        a: 'Only our matchmaking team sees your application, assessment answers and photos. They are never shared with third parties and never shown to other applicants without your permission. You do not need an account to apply.',
      },
      {
        q: 'Is it safe and confidential for LGBTQ+ guests?',
        a: 'Yes. Confidentiality is a design rule, not an extra. Your details stay with the matchmaking team, nobody is outed or listed publicly, and you choose what is ever shared with a match. Read the full privacy policy for details.',
      },
      {
        q: 'Can I ask for my data to be deleted?',
        a: `Yes. Write to ${EMAIL} and we will delete your application, assessment answers and photos, unless the law requires us to keep something such as a payment record.`,
      },
    ],
  },
];

export const ALL_QA: QA[] = FAQ.flatMap((g) => g.items);
