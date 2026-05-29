// src/components/sections/AgeCategories.tsx
import Link from "next/link";
import { ageCategories } from "@/data/content";

const cardStyles = [
  {
    wrap: "bg-secondary-fixed hover:bg-secondary-container",
    icon: "text-secondary",
    title: "text-on-secondary-fixed",
    muted: "text-on-secondary-fixed-variant",
    check: "text-secondary",
    arrow: "text-on-secondary-fixed",
    num: "text-secondary/15",
  },
  {
    wrap: "bg-primary-fixed   hover:bg-primary-container",
    icon: "text-primary",
    title: "text-on-primary-fixed group-hover:text-on-primary",
    muted: "text-on-primary-fixed-variant group-hover:text-primary-fixed",
    check: "text-primary",
    arrow: "text-on-primary-fixed group-hover:text-on-primary",
    num: "text-primary/15",
  },
  {
    wrap: "bg-tertiary-fixed  hover:bg-tertiary-container",
    icon: "text-tertiary",
    title: "text-on-tertiary-fixed group-hover:text-on-tertiary",
    muted: "text-on-tertiary-fixed-variant group-hover:text-tertiary-fixed",
    check: "text-tertiary",
    arrow: "text-on-tertiary-fixed group-hover:text-on-tertiary",
    num: "text-tertiary/15",
  },
];

export default function AgeCategories() {
  return (
    <section
      id="categories"
      className="py-section-gap relative overflow-hidden bg-surface-container-low"
    >
      <div className="absolute inset-0 geo-bg pointer-events-none" />
      <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-fixed text-primary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Programs
          </span>
          <h2
            className="font-headline font-extrabold text-on-surface"
            style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
          >
            Find Your Perfect Path
          </h2>
          <p className="text-on-surface-variant font-body text-body-md mt-4 max-w-2xl mx-auto">
            Structured learning programs tailored for every stage of academic
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageCategories.map((cat, index) => {
            const s = cardStyles[index];
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className={`group relative p-8 rounded-[40px] cursor-pointer transition-all duration-300 flex flex-col overflow-hidden ${s.wrap} card-shadow hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Watermark number */}
                <span
                  className={`absolute -bottom-4 -right-2 font-headline font-black text-9xl leading-none select-none pointer-events-none ${s.num}`}
                >
                  {index + 1}
                </span>

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <span
                    className={`material-symbols-outlined text-3xl ${s.icon}`}
                  >
                    {cat.icon}
                  </span>
                </div>

                <h3
                  className={`font-headline font-bold text-2xl mb-1 ${s.title}`}
                >
                  {cat.title}
                </h3>
                <p className={`font-headline text-label-md mb-2 ${s.muted}`}>
                  {cat.ageRange}
                </p>
                {/* Tagline — italic, no finger icon */}
                <p
                  className={`font-headline text-label-md mb-6 italic ${s.muted}`}
                >
                  {cat.tagline}
                </p>
                <p
                  className={`font-body text-body-md leading-relaxed mb-6 ${s.muted}`}
                >
                  {cat.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {cat.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-center gap-2 font-headline text-label-md ${s.muted}`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${s.check}`}
                      >
                        check_circle
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`font-headline text-label-md ${s.muted}`}>
                    Learn more
                  </span>
                  <span
                    className={`material-symbols-outlined group-hover:translate-x-2 transition-transform ${s.arrow}`}
                  >
                    arrow_forward_ios
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
