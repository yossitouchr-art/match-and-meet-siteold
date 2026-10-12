MATCH & MEET: photo and film guide
==================================
LIVE NOW: hero film (hero.mp4/webm + poster), 4 photos (pair-women, pair-men, group-men, pair-mixed) and the logo (public/brand/).
Slots still empty (event, about, privacy) show moving light; fill them the same way.
The site works with no pictures at all (calm moving light fills every slot). To add real media:
1. Drop the file in this folder.
2. Open src/lib/media.ts and replace null with the path and a one-line honest description (it becomes alt text).
No other change is needed. Redeploy.

PHOTOS (JPG or WebP, under 400 KB each, 2000 px wide, subject kept in the centre and lower-left clear for text)
  hero     Two people in calm conversation, warm light (also the poster frame for the film)
  story1   Someone alone with a phone in a city evening, soft focus   ("Not luck. Fit.")
  story2   Two hands near a cup, or two people turning toward each other ("A few deep conversations.")
  story3   A relaxed hosted evening, two people laughing at a small table ("Hosted, not hustled.")
  journey  Candlelit table, glasses, quiet venue detail
  event    Bangkok at dusk, rooftop or riverside (no faces needed)
  about    The team or the venue
  privacy  Abstract: a closed door, soft curtains, shadows
  cta      A warm, inviting two-person shot

HERO FILM (silent, looping, 8 to 12 seconds)
  hero.mp4          1920x1080, H.264, under 3 MB (about 2 Mbps)
  hero-portrait.mp4 1080x1920, same length, under 2.5 MB (served on phones)
  hero.webm         optional, VP9, smaller
  hero-poster.jpg   first frame, under 200 KB
  Shoot slow: slow push-in, shallow focus, warm light, no fast cuts, no speech. Then set HERO_VIDEO in src/lib/media.ts.
  The film is skipped automatically for people who prefer reduced motion or have Data Saver on; the poster shows instead.

RIGHTS AND CONSENT
  Use only photos you own, commissioned, or licensed for commercial web use. For any identifiable person, keep a signed model release
  that covers website, social media and advertising. Do not use photos of real applicants or guests without written consent.

DISCLOSURE: the current images and film look AI-generated. If they are, say so honestly (a footer line such as "Images are illustrative") and do not present them as real members or guests. Replace with real photography from your first event.
