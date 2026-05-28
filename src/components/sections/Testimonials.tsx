// src/components/sections/Testimonials.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { testimonials, testimonialsSection } from "@/data/content";

// Matches the exact token pattern from AgeCategories / WhyKminds
const cardStyles = [
  {
    wrap: "bg-secondary-fixed",
    avatarBg: "bg-secondary-container",
    avatarIcon: "text-secondary",
    quote: "text-on-secondary-fixed-variant",
    name: "text-on-secondary-fixed",
    role: "text-on-secondary-fixed-variant",
    divider: "border-secondary/20",
    quoteAccent: "text-secondary/20",
    verified: "text-secondary",
    stars: "text-secondary",
  },
  {
    wrap: "bg-primary text-on-primary", // dark card — matches "dark" variant
    avatarBg: "bg-white/15",
    avatarIcon: "text-white/50",
    quote: "text-on-primary/80",
    name: "text-on-primary",
    role: "text-on-primary/60",
    divider: "border-white/15",
    quoteAccent: "text-white/10",
    verified: "text-tertiary-fixed",
    stars: "text-amber-300",
  },
  {
    wrap: "bg-tertiary-fixed",
    avatarBg: "bg-tertiary-container",
    avatarIcon: "text-tertiary",
    quote: "text-on-tertiary-fixed-variant",
    name: "text-on-tertiary-fixed",
    role: "text-on-tertiary-fixed-variant",
    divider: "border-tertiary/20",
    quoteAccent: "text-tertiary/20",
    verified: "text-tertiary",
    stars: "text-amber-500",
  },
  {
    wrap: "bg-primary-fixed",
    avatarBg: "bg-primary-container",
    avatarIcon: "text-primary",
    quote: "text-on-primary-fixed-variant",
    name: "text-on-primary-fixed",
    role: "text-on-primary-fixed-variant",
    divider: "border-primary/20",
    quoteAccent: "text-primary/15",
    verified: "text-primary",
    stars: "text-amber-500",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-section-gap relative overflow-hidden bg-surface-container-low"
    >
      {/* Background accent — same dot-grid pattern as WhyKminds */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* ── Header — matches WhyKminds 2-col layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <span className="inline-block bg-tertiary-fixed text-tertiary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Community
            </span>
            <h2
              className="font-headline font-extrabold text-on-surface"
              style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
            >
              Hear from our{" "}
              <span className="text-primary italic">Community</span>
            </h2>
          </div>

          {/* Right col — tagline + aggregate rating */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed flex-1">
              &ldquo;{testimonialsSection.headline}&rdquo;
            </p>
            <div className="flex items-center gap-4 shrink-0 bg-white border border-outline-variant/30 rounded-2xl px-5 py-4 card-shadow">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-headline font-extrabold text-on-surface leading-none">
                  5.0
                </span>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-amber-400 text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-px h-9 bg-outline-variant/40" />
              <div>
                <p className="font-headline text-label-md text-on-surface leading-tight">
                  Verified Rating
                </p>
                <p className="font-body text-xs text-on-surface-variant mt-0.5">
                  From parents &amp; students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll rail — full bleed so cards peek at edges ── */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className={`absolute left-0 top-0 bottom-2 w-16 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-2 w-16 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-4 md:px-margin-desktop pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, index) => {
            const s = cardStyles[index % cardStyles.length];

            return (
              <div
                key={t.id}
                className={`
                  group relative
                  w-[320px] md:w-[370px] flex-shrink-0 snap-start
                  p-7 rounded-3xl flex flex-col justify-between
                  overflow-hidden card-shadow
                  border border-outline-variant/10
                  hover:-translate-y-2 transition-all duration-300
                  ${s.wrap}
                `}
              >
                {/* Watermark number — same as WhyKminds / AgeCategories */}
                <span
                  className={`absolute -bottom-3 -right-1 font-headline font-black text-8xl leading-none select-none pointer-events-none ${s.quoteAccent}`}
                >
                  {index + 1}
                </span>

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-lg ${s.stars}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className={`font-body text-body-md leading-relaxed ${s.quote}`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div
                  className={`mt-6 flex items-center gap-3 pt-5 border-t ${s.divider}`}
                >
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${s.avatarBg}`}
                  >
                    <span
                      className={`material-symbols-outlined text-lg ${s.avatarIcon}`}
                    >
                      person
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-headline text-label-md truncate ${s.name}`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`font-body text-xs mt-0.5 truncate ${s.role}`}
                    >
                      {t.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span
                      className={`material-symbols-outlined text-lg ${s.verified}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    <span
                      className={`font-headline text-xs font-semibold hidden sm:block ${s.verified}`}
                    >
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
