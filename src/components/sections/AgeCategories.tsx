// src/components/sections/AgeCategories.tsx
// ─────────────────────────────────────────────────────────────
// AGE CATEGORIES — Three learning path cards.
//
// NOTE: Colors are hardcoded per card below (not from content.ts).
// This is intentional — Tailwind purges dynamic class strings from
// data files. All Tailwind classes must appear as complete strings
// in component files to be included in the final CSS build.
//
// To edit titles, descriptions, age ranges:
//   → src/data/content.ts (ageCategories array)
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { ageCategories } from "@/data/content";

// Static card style configs — full class strings so Tailwind doesn't purge them
const cardStyles = [
  {
    // Card 1: Amber / Secondary
    wrap: "bg-secondary-fixed hover:bg-secondary-container",
    icon: "text-secondary",
    title: "text-on-secondary-fixed",
    muted: "text-on-secondary-fixed-variant",
    arrow: "text-on-secondary-fixed",
  },
  {
    // Card 2: Indigo / Primary
    wrap: "bg-primary-fixed hover:bg-primary-container",
    icon: "text-primary",
    title: "text-on-primary-fixed group-hover:text-on-primary",
    muted: "text-on-primary-fixed-variant group-hover:text-primary-fixed",
    arrow: "text-on-primary-fixed group-hover:text-on-primary",
  },
  {
    // Card 3: Emerald / Tertiary
    wrap: "bg-tertiary-fixed hover:bg-tertiary-container",
    icon: "text-tertiary",
    title: "text-on-tertiary-fixed group-hover:text-on-tertiary",
    muted: "text-on-tertiary-fixed-variant group-hover:text-tertiary-fixed",
    arrow: "text-on-tertiary-fixed group-hover:text-on-tertiary",
  },
];

export default function AgeCategories() {
  return (
    <section id="categories" className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline text-headline-lg text-on-surface">Find Your Perfect Path</h2>
        <p className="text-on-surface-variant font-body text-body-md mt-4 max-w-2xl mx-auto">
          Tailored learning modules designed for every developmental milestone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ageCategories.map((cat, index) => {
          const styles = cardStyles[index];
          return (
            // 'group' enables group-hover: classes on children
            <Link
              key={cat.id}
              href={cat.href}
              className={`group p-8 rounded-[40px] card-shadow cursor-pointer transition-all duration-300 ${styles.wrap}`}
            >
              {/* Icon box — always white bg so icon color pops */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className={`material-symbols-outlined text-3xl ${styles.icon}`}>
                  {cat.icon}
                </span>
              </div>

              <h3 className={`font-headline text-headline-md mb-2 ${styles.title}`}>
                {cat.title}
              </h3>
              <p className={`font-headline text-label-md mb-6 ${styles.muted}`}>
                {cat.ageRange}
              </p>
              <p className={`font-body text-body-md leading-relaxed ${styles.muted}`}>
                {cat.description}
              </p>

              {/* Arrow slides right on hover */}
              <div className="mt-8 flex justify-end">
                <span className={`material-symbols-outlined group-hover:translate-x-2 transition-transform ${styles.arrow}`}>
                  arrow_forward_ios
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
