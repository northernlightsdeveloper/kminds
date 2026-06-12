# Kaleidoscopic Minds — KMinds Website

Official website for **Kaleidoscopic Minds**, a structured online tutoring platform for Australian students (Years 5–12) in Mathematics and Science.

🌐 **Live:** [kminds.vercel.app](https://kminds.vercel.app)

---

## Tech Stack

| Tool                    | Purpose                                            |
| ----------------------- | -------------------------------------------------- |
| Next.js 16 (App Router) | React framework                                    |
| TypeScript              | Type safety                                        |
| Tailwind CSS            | Utility-first styling                              |
| Vercel                  | Hosting + auto-deploy                              |
| Formspree               | Form submissions to email                          |
| Cloudinary              | Image + video hosting                              |
| Google Fonts            | Plus Jakarta Sans + Nunito Sans + Material Symbols |

---

## Quick Start

```bash
# Navigate to project
cd Desktop/kminds

# Install dependencies (first time only)
npm install

# Start local dev server
npm run dev
# Opens at http://localhost:3000
```

---

## Deploy

Every push to `main` auto-deploys via Vercel.

```bash
git add .
git commit -m "your change description"
git push origin main
```

---

## Project Structure

```
kminds/
│
├── public/                              ← Static assets served at root URL
│   ├── Kaliedoscopic Minds.svg          ← Logo (used in Navbar + Footer)
│   └── founder.jpg                      ← Founder photo (or Cloudinary URL)
│
├── src/
│   ├── app/                             ← Pages (Next.js App Router)
│   │   ├── layout.tsx                   ← Root layout — Navbar + Footer on every page
│   │   ├── page.tsx                     ← Homepage (/)
│   │   ├── globals.css                  ← Global styles, animations, design utilities
│   │   ├── not-found.tsx                ← 404 page
│   │   ├── robots.ts                    ← robots.txt (SEO)
│   │   ├── sitemap.ts                   ← sitemap.xml (SEO)
│   │   │
│   │   ├── begin-session/               ← /begin-session — Registration form
│   │   │   └── page.tsx
│   │   ├── courses/                     ← /courses — Programs page
│   │   │   └── page.tsx
│   │   ├── customised-learning/         ← /customised-learning — Our approach
│   │   │   └── page.tsx
│   │   ├── thank-you/                   ← /thank-you — Post form submission
│   │   │   └── page.tsx
│   │   ├── privacy-policy/              ← /privacy-policy
│   │   │   └── page.tsx
│   │   └── terms-of-service/            ← /terms-of-service
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               ← Sticky top nav with dropdowns
│   │   │   └── Footer.tsx               ← Site footer with Instagram + WhatsApp
│   │   │
│   │   ├── sections/                    ← Homepage sections (one file each)
│   │   │   ├── Hero.tsx                 ← Hero with video player + ticker pill
│   │   │   ├── WhyKminds.tsx            ← 4 feature cards
│   │   │   ├── Testimonials.tsx         ← Scrollable review cards
│   │   │   ├── Curriculums.tsx          ← AC / VC / IGCSE / IB
│   │   │   ├── AgeCategories.tsx        ← Years 5–7 / 8–10 / 11–12 paths
│   │   │   ├── Founder.tsx              ← Founder story + vision/mission/goal
│   │   │   └── FAQ.tsx                  ← Accordion with 20 questions
│   │   │
│   │   └── ui/
│   │       ├── FAQSchema.tsx            ← JSON-LD schema for Google rich results
│   │       └── WhatsAppButton.tsx       ← Floating WhatsApp button (bottom-right)
│   │
│   └── data/
│       ├── content.ts                   ← ✅ ALL site text lives here
│       └── courses.ts                   ← Course card data
│
├── tailwind.config.ts                   ← Full design system (colors, fonts, spacing)
├── next.config.js                       ← Image domains (Cloudinary, Google CDN)
├── postcss.config.js
├── tsconfig.json
└── .gitignore                           ← node_modules + .next excluded
```

---

## How to Edit Content

### ✅ Change any text, links, or copy

Open `src/data/content.ts` — everything is here:

- Nav links and dropdowns
- Hero tagline, CTAs, badges
- Testimonials (name, quote, role, stars)
- Curriculum cards (AC, VC, IGCSE, IB)
- Age category cards
- Why KMinds features
- Founder section (name, story, vision, mission, goal, stats)
- All 20 FAQ questions and answers
- Footer links
- Contact info (email, phone, WhatsApp, Instagram)

### ✅ Change course cards

Open `src/data/courses.ts` — add, edit, or remove course objects.

### ✅ Change brand colors or fonts

Open `tailwind.config.ts` — the full design token system is defined here.

---

## Adding a New Page

1. Create folder: `src/app/about/`
2. Create file: `src/app/about/page.tsx`
3. Automatically live at `kminds.vercel.app/about`

```tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto">
      <h1 className="font-headline text-headline-xl text-on-surface">About</h1>
    </div>
  );
}
```

Also add it to `sitemap.ts` so Google indexes it.

---

## Form Submissions (Formspree)

The `/begin-session` form sends to email via Formspree.

To update the email receiving submissions:

1. Log in at [formspree.io](https://formspree.io)
2. Open your KMinds form → **Settings → Email Notifications**
3. Update the email there — no code changes needed

To change the Form ID (if you recreate the form):

- Open `src/app/begin-session/page.tsx`
- Find: `const FORMSPREE_ID = "xxxxxxxx"`
- Replace with your new ID

---

## Media (Cloudinary)

Images and videos are hosted on Cloudinary.

**To replace the founder photo:**

- Upload new photo to Cloudinary → copy URL
- Open `src/data/content.ts` → update `founder.imageSrc`

**To replace the hero video:**

- Upload video to Cloudinary → copy `.mp4` URL
- Open `src/data/content.ts` → update `heroVideoSrc`

Cloudinary is whitelisted in `next.config.js` under `remotePatterns`.

---

## WhatsApp Number

Open `src/data/content.ts` → find `contactInfo.whatsapp`

Format: country code + number, no spaces or `+`

```ts
whatsapp: "916267000755"; // +91 6267 000 755
```

---

## SEO

| File                              | Purpose                                                   |
| --------------------------------- | --------------------------------------------------------- |
| `src/app/sitemap.ts`              | Auto-generates sitemap.xml — update when adding new pages |
| `src/app/robots.ts`               | robots.txt — update domain when going live                |
| `src/app/layout.tsx`              | Global `<title>` and `<meta description>`                 |
| `src/components/ui/FAQSchema.tsx` | FAQ rich results schema for Google                        |

**To verify rich results:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)

---

## Environment

No environment variables needed. Formspree ID is stored directly in the begin-session page component.

---

## Contact

- 📧 kaleidoscopicminds.kl@gmail.com
- 📱 +91 6267 000 755
- 📸 [@kaleidoscopic*minds*](https://www.instagram.com/kaleidoscopic_minds_/)
