// src/components/sections/Testimonials.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { testimonials, testimonialsSection } from "@/data/content";

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
      className="bg-surface-container-low py-16 md:py-24 overflow-hidden relative"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="px-4 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-tertiary/10 text-tertiary font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
              Community
            </span>
            <h2 className="font-extrabold text-on-surface text-3xl md:text-4xl leading-tight tracking-tight">
              Hear from our{" "}
              <span className="text-primary italic">Community</span>
            </h2>
            <p className="text-on-surface-variant text-sm mt-2 font-medium">
              &ldquo;{testimonialsSection.headline}&rdquo;
            </p>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-4 shrink-0 bg-white/70 backdrop-blur-sm border border-outline-variant/20 rounded-2xl px-5 py-3.5 shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-on-surface leading-none">
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
            <div className="w-px h-9 bg-outline-variant/30" />
            <div>
              <p className="font-bold text-on-surface text-xs leading-tight">
                Verified Rating
              </p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">
                From parents & students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards scroll rail */}
      <div className="relative">
        {/* Left fade */}
        <div
          className={`absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Right fade */}
        <div
          className={`absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          className="flex gap-3.5 overflow-x-auto px-4 md:px-12 pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`
  group min-w-[260px] max-w-[280px] flex-shrink-0 snap-start
  p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden
  transition-transform duration-300 hover:-translate-y-1
  ${
    t.variant === "dark"
      ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
      : t.id % 3 === 0
        ? "bg-[#fef3e2] text-on-surface border border-[#f5e0b8]/60 shadow shadow-black/5" // peach
        : t.id % 3 === 1
          ? "bg-[#eef0ff] text-on-surface border border-[#d8dbf5]/60 shadow shadow-black/5" // lavender
          : "bg-[#e6f7f4] text-on-surface border border-[#b8e8e0]/60 shadow shadow-black/5" // mint
  }
`}
            >
              {/* Decorative quote mark */}
              <div
                className={`absolute -top-1 right-4 font-serif font-black leading-none select-none pointer-events-none text-[80px] ${
                  t.variant === "dark" ? "text-white/8" : "text-primary/6"
                }`}
              >
                &ldquo;
              </div>

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-amber-400 text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className={`absolute -top-1 right-4 font-serif font-black leading-none select-none pointer-events-none text-[80px] ${
                    t.variant === "dark"
                      ? "text-white/8"
                      : t.id % 3 === 0
                        ? "text-amber-400/10"
                        : t.id % 3 === 1
                          ? "text-primary/8"
                          : "text-tertiary/10"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div
                className={`mt-5 flex items-center gap-2.5 pt-4 border-t ${
                  t.variant === "dark"
                    ? "border-white/10"
                    : t.id % 3 === 0
                      ? "border-amber-300/30"
                      : t.id % 3 === 1
                        ? "border-primary/15"
                        : "border-tertiary/20"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full ${t.avatarColor} flex items-center justify-center shrink-0 ring-2 ${
                    t.variant === "dark" ? "ring-white/10" : "ring-primary/10"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-base ${
                      t.variant === "dark"
                        ? "text-on-primary/50"
                        : "text-on-surface/30"
                    }`}
                  >
                    person
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-bold text-xs truncate ${
                      t.variant === "dark"
                        ? "text-on-primary"
                        : "text-on-surface"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[10.5px] mt-0.5 truncate ${
                      t.variant === "dark"
                        ? "text-on-primary/55"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
                {/* Verified badge */}
                <span
                  className={`material-symbols-outlined text-base shrink-0 ${
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
