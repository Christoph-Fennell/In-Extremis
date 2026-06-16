# In Extremis Consulting — Website

**inextremisconsulting.com.com** · Next.js 15 · TypeScript · CSS Modules

---

## Quick Start

```bash
# 1. Clone / unzip the repo
cd inextremisconsulting.com

# 2. Install dependencies
npm install

# 3. Copy the environment file and fill in your values
cp .env.example .env.local

# 4. Run the development server
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — Nav + Footer wraps all pages
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About
│   ├── services/page.tsx   # Services
│   ├── privacy/page.tsx    # Privacy notice
│   ├── not-found.tsx       # 404
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── api/contact/
│       └── route.ts        # Contact form API endpoint
├── components/
│   ├── Nav.tsx / Nav.module.css
│   ├── Footer.tsx / Footer.module.css
│   ├── home/
│   │   ├── HeroSection         # Full-bleed video/image hero
│   │   ├── WhatWeDoSection     # Copy + media panel
│   │   ├── MediaMomentSection  # Full-bleed media band + single line
│   │   └── LogoStripSection    # Client logo grid
│   ├── about/
│   │   ├── AboutHero           # Header image + page title
│   │   ├── FounderBio          # Portrait + full bio copy
│   │   └── CredentialsSection  # Mono credentials band
│   └── services/
│       ├── ServicesHero        # Page header + intro copy
│       ├── ServiceCards        # Five service area cards
│       └── ContactForm         # Form with validation + honeypot
├── hooks/
│   └── useScrollReveal.ts  # IntersectionObserver fade-rise hook
└── styles/
    └── globals.css         # Brand tokens, typography, resets
```

---

## Brand Tokens (globals.css)

| Token      | Hex       | Use                                      |
|------------|-----------|------------------------------------------|
| `--ink`    | `#0C0C0D` | Primary bg, dark sections, body on light |
| `--bone`   | `#ECE6D8` | Light bg sections, text on dark          |
| `--blood`  | `#8A1815` | Accent — links, rules, hovers, cross     |
| `--paper`  | `#F4EFE3` | Secondary light bg (alternating sections)|

**Typography**
- Display/headings: `Cormorant Garamond` (Google Fonts)
- Body: `EB Garamond` (Google Fonts)
- Labels/nav/mono: `JetBrains Mono` (Google Fonts)

---

## Adding Media

Every media slot is clearly labelled with a comment in the component. Here is a summary:

### Hero video (Home)
`src/components/home/HeroSection.tsx`
```tsx
// Replace the <div className={styles.placeholder}> with:
<video
  className={styles.video}
  src="/video/hero.mp4"           // place file at public/video/hero.mp4
  poster="/images/hero-poster.jpg"
  autoPlay muted loop playsInline
  aria-hidden="true"
/>
```

### Hero still image (mobile fallback or if no video)
```tsx
import Image from 'next/image';
<Image
  src="/images/hero-still.jpg"    // public/images/hero-still.jpg
  alt=""
  fill
  priority
  style={{ objectFit: 'cover' }}
/>
```

### What We Do — supporting image
`src/components/home/WhatWeDoSection.tsx` — replace `.mediaPlaceholder` div:
```tsx
<Image src="/images/what-we-do.jpg" alt="..." fill style={{ objectFit: 'cover' }} />
```
Recommended: portrait-oriented, dark, authentic field content.

### Second media moment
`src/components/home/MediaMomentSection.tsx` — replace `.mediaPlaceholder` div.

### About hero image
`src/components/about/AboutHero.tsx` — replace `.mediaPlaceholder` div.
```tsx
<Image src="/images/about-hero.jpg" alt="Chase Welch" fill priority
  style={{ objectFit: 'cover', objectPosition: 'top center' }} />
```

### Founder portrait
`src/components/about/FounderBio.tsx` — replace `.portraitPlaceholder` div.
```tsx
<Image src="/images/chase-portrait.jpg" alt="Chase Welch" fill
  style={{ objectFit: 'cover', objectPosition: 'top center' }} />
```

---

## Client Logos

Edit the `logos` array in `src/components/home/LogoStripSection.tsx`:

```ts
const logos: LogoItem[] = [
  { name: 'Acme Defense', src: '/images/logos/acme.svg', width: 140, height: 44 },
  // ...up to 8 logos
];
```

Place SVG or PNG logo files in `public/images/logos/`.
Logos are grayscale by default; colour appears on hover (desktop).

---

## Logo / Wordmark

The site currently uses a CSS/text stand-in for the wordmark.

To use the official brand kit artwork:
1. Place `logo-horizontal.svg` in `public/images/`
2. In `Nav.tsx`, replace `<WordmarkSVG />` with:
   ```tsx
   <Image src="/images/logo-horizontal.svg" alt="In Extremis Consulting" width={200} height={48} priority />
   ```
3. Do the same in `Footer.tsx` for both the wordmark and sword mark.

---

## Contact Form — Connecting to Email

The form POSTs to `/api/contact`. To actually send emails:

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Verify your domain
3. Install: `npm install resend`
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_EMAIL=chase@inextremisconsulting.com.com
   ```
5. Uncomment the Resend block in `src/app/api/contact/route.ts`

---

## Confirming Before Launch

From the design brief — check these before going live:

- [ ] Confirm final contact email (`chase@inextremisconsulting.com.com`)
- [ ] Confirm which social profiles are live — remove dead links from `Footer.tsx`
- [ ] Provide and place all media (hero video/still, what-we-do, media moment, about hero, portrait)
- [ ] Provide approved client logos for the logo strip (or confirm "no logos yet")
- [ ] Connect contact form to email provider
- [ ] Add OG share image (`public/og-share.png`, 1200×630px) using primary lockup
- [ ] Generate and place favicon set (`public/icons/favicon-16.png`, `-32.png`, `-64.png`, `-192.png`, `-512.png`, `apple-touch-icon.png`)
- [ ] Point `inextremisconsulting.com.com` DNS to host
- [ ] Confirm Google Workspace MX records won't conflict with form mail routing

---

## Deployment

```bash
# Vercel (recommended — push to GitHub and import at vercel.com)
npm run build && npm run start

# Or deploy to Vercel CLI:
npm i -g vercel
vercel --prod
```

Add environment variables in the Vercel dashboard (Settings → Environment Variables).

---

## Analytics (Optional)

Uncomment one of these in `src/app/layout.tsx` and add the script tag:

- **Plausible** (privacy-first, no cookies): `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- **Fathom** (similar): `NEXT_PUBLIC_FATHOM_SITE_ID`

Neither requires a cookie banner.

---

*In Extremis Consulting, LLC · Afton, VA · MMXXVI*  
*Transfixus sed non mortuus*
