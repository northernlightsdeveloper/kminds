// src/components/sections/AgeCategories.tsx
// ─────────────────────────────────────────────────────────────
// AGE CATEGORIES — Three learning path cards.
//
// To edit titles, descriptions, age ranges:
//   → src/data/content.ts (ageCategories array)
//
// To link cards to individual category pages:
//   → Update href in each category object in content.ts
//   → Create src/app/categories/early-explorers/page.tsx etc.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { ageCategories } from "@/data/content";

export default function AgeCategories() {
  return (
    <section
      id="categories" // matches href="#categories" in the navbar
      className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto"
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-headline text-headline-lg text-on-surface">
          Find Your Perfect Path
        </h2>
        <p className="text-on-surface-variant font-body text-body-md mt-4 max-w-2xl mx-auto">
          Tailored learning modules designed for every developmental milestone.
        </p>
      </div>

      {/* ── CARD GRID ─────────────────────────────────────── */}
      {/* 1 column on mobile, 3 columns on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ageCategories.map((cat) => (
          // 'group' lets us use group-hover: on child elements
          <Link
            key={cat.id}
            href={cat.href}
            className={`
              group p-8 rounded-[40px] card-shadow cursor-pointer
              transition-all duration-300
              ${cat.colorTheme.bg} ${cat.colorTheme.bgHover}
            `}
          >
            {/* Icon box */}
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <span className={`material-symbols-outlined text-3xl ${cat.colorTheme.icon}`}>
                {cat.icon}
              </span>
            </div>

            {/* Text */}
            <h3 className={`font-headline text-headline-md mb-2 ${cat.colorTheme.text}`}>
              {cat.title}
            </h3>
            <p className={`font-headline text-label-md mb-6 ${cat.colorTheme.textMuted}`}>
              {cat.ageRange}
            </p>
            <p className={`font-body text-body-md leading-relaxed ${cat.colorTheme.textMuted}`}>
              {cat.description}
            </p>

            {/* Arrow — slides right on hover */}
            <div className="mt-8 flex justify-end">
              <span className={`material-symbols-outlined group-hover:translate-x-2 transition-transform ${cat.colorTheme.text}`}>
                arrow_forward_ios
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
