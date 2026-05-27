// src/components/sections/AgeCategories.tsx
// NOTE: Colors are hardcoded per card — Tailwind purges dynamic strings.
// To edit content: src/data/content.ts (ageCategories array)

import Link from "next/link";
import { ageCategories } from "@/data/content";

const cardStyles = [
  {
    wrap: "bg-secondary-fixed hover:bg-secondary-container",
    icon: "text-secondary",
    title: "text-on-secondary-fixed",
    muted: "text-on-secondary-fixed-variant",
    arrow: "text-on-secondary-fixed",
    check: "text-secondary",
  },
  {
    wrap: "bg-primary-fixed hover:bg-primary-container",
    icon: "text-primary",
    title: "text-on-primary-fixed group-hover:text-on-primary",
    muted: "text-on-primary-fixed-variant group-hover:text-primary-fixed",
    arrow: "text-on-primary-fixed group-hover:text-on-primary",
    check: "text-primary",
  },
  {
    wrap: "bg-tertiary-fixed hover:bg-tertiary-container",
    icon: "text-tertiary",
    title: "text-on-tertiary-fixed group-hover:text-on-tertiary",
    muted: "text-on-tertiary-fixed-variant group-hover:text-tertiary-fixed",
    arrow: "text-on-tertiary-fixed group-hover:text-on-tertiary",
    check: "text-tertiary",
  },
];

export default function AgeCategories() {
  return (
    <section
      id="categories"
      className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline text-headline-lg text-on-surface">
          Find Your Perfect Path
        </h2>
        <p className="text-on-surface-variant font-body text-body-md mt-4 max-w-2xl mx-auto">
          Structured learning programs tailored to every stage of academic
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ageCategories.map((cat, index) => {
          const styles = cardStyles[index];
          return (
            <Link
              key={cat.id}
              href={cat.href}
              className={`group p-8 rounded-[40px] card-shadow cursor-pointer transition-all duration-300 flex flex-col ${styles.wrap}`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span
                  className={`material-symbols-outlined text-3xl ${styles.icon}`}
                >
                  {cat.icon}
                </span>
              </div>

              <h3
                className={`font-headline text-headline-md mb-1 ${styles.title}`}
              >
                {cat.title}
              </h3>
              <p className={`font-headline text-label-md mb-2 ${styles.muted}`}>
                {cat.ageRange}
              </p>
              <p
                className={`font-headline text-label-md mb-6 italic ${styles.muted}`}
              >
                👉 {cat.tagline}
              </p>

              <p
                className={`font-body text-body-md leading-relaxed mb-6 ${styles.muted}`}
              >
                {cat.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6 flex-1">
                {cat.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-center gap-2 font-headline text-label-md ${styles.muted}`}
                  >
                    <span
                      className={`material-symbols-outlined text-base ${styles.check}`}
                    >
                      check_circle
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end mt-auto">
                <span
                  className={`material-symbols-outlined group-hover:translate-x-2 transition-transform ${styles.arrow}`}
                >
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
