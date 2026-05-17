# Kaleidoscopic Minds — KMinds Website

A Next.js 14 website for the KMinds educational platform, serving Australian school students from Prep to Year 12.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
kminds/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (Navbar + Footer on every page)
│   │   ├── page.tsx            ← Homepage (/)
│   │   └── globals.css         ← Global styles
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Top navigation bar
│   │   │   └── Footer.tsx      ← Site footer
│   │   │
│   │   └── sections/           ← Each homepage section is its own file
│   │       ├── Hero.tsx
│   │       ├── Testimonials.tsx
│   │       ├── AgeCategories.tsx
│   │       ├── Curriculums.tsx
│   │       ├── ForParentsAndKids.tsx
│   │       ├── Founder.tsx
│   │       └── FAQ.tsx
│   │
│   └── data/
│       └── content.ts          ← ✅ ALL site text lives here. Edit this file.
│
├── tailwind.config.ts          ← Design system (colors, fonts, spacing)
├── next.config.js              ← Next.js config (image domains etc.)
└── README.md
```

---

## ✏️ How to Edit Content

**To change any text on the site:**
→ Open `src/data/content.ts` and edit the relevant object.
→ You do NOT need to touch component files for text changes.

**To change colors or fonts:**
→ Open `tailwind.config.ts` and update the design tokens.

---

## ➕ How to Add a New Page

1. Create a folder: `src/app/courses/`
2. Create a file: `src/app/courses/page.tsx`
3. It's automatically available at `yoursite.com/courses`

Example:
```tsx
// src/app/courses/page.tsx
export default function CoursesPage() {
  return (
    <div className="px-margin-desktop py-section-gap max-w-[1280px] mx-auto">
      <h1 className="font-headline text-headline-xl text-on-surface">
        All Courses
      </h1>
    </div>
  );
}
```

---

## 🔗 Linking Buttons to Pages

Search for `TODO:` comments in the component files — these mark buttons that need real links when pages are built.

For example in `Hero.tsx`:
```tsx
// Change this when /courses page is ready:
href="#categories"  →  href="/courses"
```

---

## 🌐 Deploying to Vercel (Free)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select your repo → Deploy
4. Done! You get a free `.vercel.app` URL

---

## 📦 Tech Stack

- **Next.js 14** — React framework (App Router)
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Google Fonts** — Plus Jakarta Sans + Nunito Sans
- **Material Symbols** — Icons
