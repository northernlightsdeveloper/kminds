// src/components/sections/Testimonials.tsx
// ─────────────────────────────────────────────────────────────
// TESTIMONIALS — Horizontally scrollable cards.
//
// To add/edit testimonials: → src/data/content.ts (testimonials array)
// Cards automatically render from that array.
// ─────────────────────────────────────────────────────────────

import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-section-gap overflow-hidden">
      {/* Section header */}
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto mb-12">
        <h2 className="font-headline text-headline-lg text-on-surface">
          Hear from our Community
        </h2>
        <p className="text-on-surface-variant font-body text-body-md mt-2">
          Smiles and success stories from parents and students.
        </p>
      </div>

      {/* ── SCROLLABLE CARD ROW ───────────────────────────── */}
      {/* overflow-x-auto = horizontal scroll on small screens
          snap-x = snaps to each card when scrolling on mobile */}
      <div className="flex gap-6 overflow-x-auto px-4 md:px-margin-desktop custom-scrollbar pb-8 snap-x">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`
              min-w-[320px] md:min-w-[400px] p-8 rounded-[32px] card-shadow snap-start
              flex flex-col justify-between
              ${t.variant === "dark"
                ? "bg-primary text-on-primary"   // purple card
                : "bg-white text-on-surface"     // white card
              }
            `}
          >
            {/* Quote text */}
            <div>
              {/* Big quotation mark icon */}
              <span
                className={`material-symbols-outlined text-5xl block mb-4 ${
                  t.variant === "dark" ? "text-tertiary-fixed" : "text-secondary-container"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className={`font-body text-body-lg italic leading-relaxed ${
                t.variant === "dark" ? "" : "text-on-surface-variant"
              }`}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="mt-8 flex items-center gap-4">
              {/* Avatar placeholder — replace with <Image> when you have real photos */}
              <div className={`w-12 h-12 rounded-full ${t.avatarColor}`} />
              <div>
                <p className={`font-headline text-label-md ${t.variant === "dark" ? "" : "text-on-surface"}`}>
                  {t.name}
                </p>
                <p className={`text-xs ${t.variant === "dark" ? "opacity-80" : "text-on-surface-variant"}`}>
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
