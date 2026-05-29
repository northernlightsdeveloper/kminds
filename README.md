# Kaleidoscopic Minds — KMinds Website

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Deployed free on **Vercel**.

Live site: [kminds.vercel.app](https://kminds.vercel.app)

---

## Quick Start

```bash
cd Desktop/kminds
npm install          # first time only
npm run dev          # starts at http://localhost:3000
```

To deploy — just push to GitHub. Vercel auto-deploys on every push.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Project Structure

```
kminds/
│
├── public/                          ← Static files (images, icons)
│   └── founder.jpg                  ← Founder photo (replace this)
│
├── src/
│   ├── app/                         ← Pages (Next.js App Router)
│   │   ├── layout.tsx               ← Root layout — Navbar + Footer on every page
│   │   ├── page.tsx                 ← Homepage (/)
│   │   ├── globals.css              ← Global styles + design utilities
│   │   │
│   │   ├── begin-session/           ← /begin-session — Registration form
│   │   │   └── page.tsx
│   │   ├── thank-you/               ← /thank-you — After form submission
│   │   │   └── page.tsx
│   │   ├── courses/                 ← /courses — All programs
│   │   │   └── page.tsx
│   │   ├── customised-learning/     ← /customised-learning — Approach page
│   │   │   └── page.tsx
│   │   ├── privacy-policy/          ← /privacy-policy
│   │   │   └── page.tsx
│   │   └── terms-of-service/        ← /terms-of-service
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           ← Top navigation bar
│   │   │   └── Footer.tsx           ← Site footer
│   │   │
│   │   ├── sections/                ← Each homepage section
│   │   │   ├── Hero.tsx             ← Hero banner
│   │   │   ├── WhyKminds.tsx        ← Why KMinds features
│   │   │   ├── Testimonials.tsx     ← Reviews / community
│   │   │   ├── Curriculums.tsx      ← AC, VC, IGCSE, IB
│   │   │   ├── AgeCategories.tsx    ← Years 5-7, 8-10, 11-12
│   │   │   ├── Founder.tsx          ← About / founder section
│   │   │   └── FAQ.tsx              ← FAQ accordion
│   │   │
│   │   └── ui/
│   │       └── WhatsAppButton.tsx   ← Floating WhatsApp button
│   │
│   └── data/
│       ├── content.ts               ← ✅ ALL site text lives here
│       └── courses.ts               ← Course card data
│
├── tailwind.config.ts               ← Design system (colors, fonts, spacing)
├── next.config.js                   ← Image domains, Next.js config
└── .gitignore                       ← node_modules, .next excluded
```

---

## How to Edit Content

### Change any text on the site

Open `src/data/content.ts` — all text, links, and copy is here.
You never need to touch component files just to update words.

### Change course cards

Open `src/data/courses.ts` — add, edit, or remove course objects here.

### Change colors or fonts

Open `tailwind.config.ts` — the full design system is defined here.

---

## How to Add a New Page

1. Create a folder: `src/app/about/`
2. Create a file: `src/app/about/page.tsx`
3. It's automatically live at `kminds.vercel.app/about`

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

---

## Form Submissions (Formspree)

The Begin a Session form uses **Formspree** to send emails.

Setup (one time):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your form ID
3. Open `src/app/begin-session/page.tsx`
4. Replace `"YOUR_FORMSPREE_ID"` with your actual ID

Free plan = 50 submissions/month.

---

## Replacing the Founder Photo

1. Rename your photo to `founder.jpg`
2. Drop it into the `public/` folder
3. It automatically shows — no code changes needed

---

## WhatsApp Number

Open `src/data/content.ts` → find `contactInfo.whatsapp`
Format: country code + number, no spaces or + (e.g. `"916268300535"`)

---

## Tech Stack

| Tool             | Purpose                         |
| ---------------- | ------------------------------- |
| Next.js 16       | React framework                 |
| TypeScript       | Type safety                     |
| Tailwind CSS     | Styling                         |
| Vercel           | Free hosting + auto-deploy      |
| Formspree        | Form submissions to email       |
| Google Fonts     | Plus Jakarta Sans + Nunito Sans |
| Material Symbols | Icons                           |

---

## Contact

Email: kaleidoscopicminds.kl@gmail.com  
WhatsApp: +91 6268 300 535
