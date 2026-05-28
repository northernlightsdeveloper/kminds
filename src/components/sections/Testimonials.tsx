// src/components/sections/Testimonials.tsx
import { testimonials, testimonialsSection } from "@/data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-surface-container-low py-section-gap relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section header — contained */}
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block bg-tertiary-fixed text-tertiary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Community
            </span>
            <h2
              className="font-headline font-extrabold text-on-surface"
              style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
            >
              Hear from our Community
            </h2>
            <p className="text-primary font-headline text-body-md mt-3 italic">
              &ldquo;{testimonialsSection.headline}&rdquo;
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-secondary-container text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <div>
              <p className="font-headline text-label-md text-on-surface font-bold">
                5.0 / 5.0
              </p>
              <p className="font-headline text-xs text-on-surface-variant">
                Verified reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD GRID — no horizontal scroll, proper grid ── */}
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`relative rounded-[28px] p-8 flex flex-col justify-between overflow-hidden ${
                t.variant === "dark"
                  ? "bg-primary text-on-primary"
                  : "bg-white border border-outline-variant/20 card-shadow"
              }`}
            >
              {/* Decorative watermark quote */}
              <div
                className={`absolute -top-2 right-4 font-headline font-black leading-none select-none pointer-events-none text-8xl ${
                  t.variant === "dark" ? "text-white/5" : "text-primary/5"
                }`}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-lg text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className={`font-body text-body-md italic leading-relaxed mb-8 flex-1 ${
                  t.variant === "dark"
                    ? "text-on-primary/90"
                    : "text-on-surface-variant"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author row */}
              <div
                className={`flex items-center gap-4 pt-5 border-t ${
                  t.variant === "dark"
                    ? "border-white/10"
                    : "border-outline-variant/20"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarColor} flex items-center justify-center shrink-0`}
                >
                  <span
                    className={`material-symbols-outlined text-base ${
                      t.variant === "dark"
                        ? "text-on-primary/50"
                        : "text-on-surface/40"
                    }`}
                  >
                    person
                  </span>
                </div>
                <div className="min-w-0">
                  <p
                    className={`font-headline text-label-md font-bold truncate ${
                      t.variant === "dark"
                        ? "text-on-primary"
                        : "text-on-surface"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-xs font-headline ${
                      t.variant === "dark"
                        ? "text-on-primary/60"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
                <span
                  className={`material-symbols-outlined text-xl ml-auto shrink-0 ${
                    t.variant === "dark"
                      ? "text-tertiary-fixed"
                      : "text-tertiary"
                  }`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
