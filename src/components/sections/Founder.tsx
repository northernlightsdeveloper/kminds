// src/components/sections/Founder.tsx
// ─────────────────────────────────────────────────────────────
// FOUNDER SECTION — Story, portrait, and stats.
//
// To update text, stats, founder name/title, or image:
//   → src/data/content.ts (founder object)
// ─────────────────────────────────────────────────────────────

import Image from "next/image";
import { founder } from "@/data/content";

export default function Founder() {
  return (
    <section
      id="about"
      className="bg-surface-container-lowest py-section-gap border-y border-outline-variant/30"
    >
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* ── LEFT: Portrait ────────────────────────────── */}
          {/* Takes up 2 of 5 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative blur blob */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container/10 rounded-full blur-3xl" />

              {/* Portrait image — grayscale, reveals color on hover */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden card-shadow grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={founder.imageSrc}
                  alt={`Portrait of ${founder.founderName}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name card floating at bottom-right */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/20">
                <p className="font-headline text-headline-md text-primary">
                  {founder.founderName}
                </p>
                <p className="text-xs text-on-surface-variant font-headline text-label-md">
                  {founder.founderTitle}
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Story + Stats ──────────────────────── */}
          {/* Takes up 3 of 5 columns on large screens */}
          <div className="lg:col-span-3">
            {/* Eyebrow label */}
            <span className="text-primary font-headline text-label-md uppercase tracking-widest mb-4 block">
              {founder.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="font-headline text-headline-xl text-on-surface mb-8">
              {founder.headline}
            </h2>

            {/* Paragraphs — mapped from the array in content.ts */}
            <div className="space-y-6 text-on-surface-variant font-body text-body-lg">
              {founder.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* ── STATS ROW ──────────────────────────────── */}
            <div className="mt-10 flex gap-8">
              {founder.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs font-headline text-label-md text-on-surface-variant uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
