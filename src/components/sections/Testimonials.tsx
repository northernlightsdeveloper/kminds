// src/components/sections/Testimonials.tsx
// To add/edit: src/data/content.ts (testimonials array)

import { testimonials, testimonialsSection } from "@/data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-surface-container-low py-section-gap overflow-hidden"
    >
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto mb-12">
        <h2 className="font-headline text-headline-lg text-on-surface">
          Hear from our Community
        </h2>
        <p className="text-primary font-headline text-headline-md mt-2">
          👉 &ldquo;{testimonialsSection.headline}&rdquo;
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto px-4 md:px-margin-desktop custom-scrollbar pb-8 snap-x">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`min-w-[320px] md:min-w-[400px] p-8 rounded-[32px] card-shadow snap-start flex flex-col justify-between ${
              t.variant === "dark"
                ? "bg-primary text-on-primary"
                : "bg-white text-on-surface"
            }`}
          >
            <div>
              <span
                className={`material-symbols-outlined text-5xl block mb-4 ${
                  t.variant === "dark"
                    ? "text-tertiary-fixed"
                    : "text-secondary-container"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p
                className={`font-body text-body-lg italic leading-relaxed ${t.variant === "dark" ? "" : "text-on-surface-variant"}`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${t.avatarColor}`} />
              <div>
                <p
                  className={`font-headline text-label-md ${t.variant === "dark" ? "" : "text-on-surface"}`}
                >
                  {t.name}
                </p>
                <p
                  className={`text-xs ${t.variant === "dark" ? "opacity-80" : "text-on-surface-variant"}`}
                >
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
