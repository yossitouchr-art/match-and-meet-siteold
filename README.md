# MATCH & MEET public site (matchandmeet.life)

Mobile-first, installable (PWA), server-rendered Next.js site. Public marketing pages only. The application form, assessment and admin stay in the separate apply app (`apply.matchandmeet.life`).

## Pages
`/` Home · `/how-it-works` · `/passport` · `/events` · `/faq` · `/about` · `/privacy` · `/terms` · `/offline`

## Look and feel: cinematic, calm and elegant
Big captions over full-screen scenes, tap-through "journey", explore tiles, reveal-on-scroll. Every picture and film is a **slot** (`src/lib/media.ts`). Empty slots show slowly drifting light so nothing looks broken; drop real files in `public/media/` and set the path (guide: `public/media/README.txt`). The film pauses for reduced-motion and Data Saver users. Copy is plain HTML text over the pictures, so AI crawlers and screen readers get everything.

## Why it is "AI search ready"
- Every page is rendered on the server, so the full text is in the first HTML response (AI crawlers mostly do not run JavaScript).
- Each page opens with a short, quotable answer; the FAQ answers are written to stand alone.
- JSON-LD on every page: Organization, WebSite, plus Service, Product, Event, FAQPage, HowTo, BreadcrumbList where they apply.
- `sitemap.xml`, `robots.txt` (names the AI search, user-request and training crawlers; edit `src/app/robots.ts` to opt out of training) and `public/llms.txt`.
- One source of truth for facts: `src/lib/site.ts` (price, ages, email, dates). Change it once, every page and the structured data follow. Update `UPDATED_ISO` and `UPDATED_TEXT` when copy changes.

## Mobile-first / installable
- Bottom tab bar on phones, top navigation on screens 900px and wider; touch targets 44-52px; safe-area aware.
- `manifest.webmanifest`, icons (any + maskable), apple-touch-icon, service worker (`public/sw.js`) with an offline page. The footer offers "Add to your home screen".

## Events come from the apply app's database
`/events` and the home page show events that are open for applications, read from the same Supabase `events` table (public read, same publishable key). If the variables below are missing or the database is unreachable, a "first event" placeholder shows instead. Pages refresh every 5 minutes.

## Deploy (Vercel)
1. Create a new Vercel project from this folder (framework: Next.js). Do not reuse the apply project.
2. Environment variables (Production and Preview):
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (same as the apply app)
   - `NEXT_PUBLIC_APPLY_URL` = `https://apply.matchandmeet.life`
3. Add domain `matchandmeet.life` (and `www`, redirecting to the apex) to this project.
4. At GoDaddy, set the DNS records Vercel shows: normally an `A` record for `@` and a `CNAME` for `www`. Remove any old records for `@` and `www` that point to the Atoms site.
5. Check: `https://matchandmeet.life/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/manifest.webmanifest`.
6. Then submit the sitemap in Google Search Console and Bing Webmaster Tools (Bing feeds ChatGPT search).

## Before launch checklist
- Logo is live (`public/brand/`: logo-light/color, mark-light/color). Regenerate icons and the share image with `python3 scripts/gen_icons.py` if the logo changes.
- Add social profile links to the Organization `sameAs` list in `src/lib/jsonld.tsx` once the Facebook, Instagram and LINE pages exist.
- Have the Privacy Policy and Terms reviewed by Thai counsel; they are written in plain language from how the system works today.
- Keep business facts identical on Facebook, Instagram, LINE, Google Business Profile and Eventpop (same name, description, price, ages).

## Local development
`npm install && npm run dev`. The service worker only registers in production builds.
