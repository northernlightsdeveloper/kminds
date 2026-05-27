// src/components/sections/Testimonials.tsx
import { testimonials, testimonialsSection } from "@/data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-surface-container-low py-section-gap overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            <p className="text-primary font-headline text-body-md mt-3 flex items-center gap-2">
              <span className="text-xl">👉</span>
              &ldquo;{testimonialsSection.headline}&rdquo;
            </p>
          </div>
          {/* Star rating */}
          <div className="flex items-center gap-1 shrink-0">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-secondary-container text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
            <span className="font-headline text-label-md text-on-surface-variant ml-2">
              Rated 5/5 by parents
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="flex gap-6 overflow-x-auto px-4 md:px-margin-desktop custom-scrollbar pb-6 snap-x">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`min-w-[340px] md:min-w-[420px] p-8 rounded-[32px] snap-start flex flex-col justify-between relative overflow-hidden ${
              t.variant === "dark"
                ? "bg-primary text-on-primary"
                : "bg-white text-on-surface border border-outline-variant/20 card-shadow"
            }`}
          >
            {/* Decorative quote mark */}
            <div
              className={`absolute top-4 right-6 font-headline font-black text-9xl leading-none select-none pointer-events-none ${
                t.variant === "dark" ? "text-white/5" : "text-primary/5"
              }`}
            >
              &ldquo;
            </div>

            <div className="relative">
              <span
                className={`material-symbols-outlined text-4xl block mb-5 ${t.variant === "dark" ? "text-tertiary-fixed" : "text-secondary-container"}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p
                className={`font-body text-body-lg italic leading-relaxed ${t.variant === "dark" ? "text-on-primary/90" : "text-on-surface-variant"}`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
              <div
                className={`w-12 h-12 rounded-full ${t.avatarColor} flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-on-surface/50">
                  person
                </span>
              </div>
              <div>
                <p
                  className={`font-headline text-label-md font-bold ${t.variant === "dark" ? "text-on-primary" : "text-on-surface"}`}
                >
                  {t.name}
                </p>
                <p
                  className={`text-xs font-headline ${t.variant === "dark" ? "text-on-primary/70" : "text-on-surface-variant"}`}
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
