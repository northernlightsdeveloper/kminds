// src/components/sections/Testimonials.tsx
"use client";

import { useRef, useState, useEffect } from "react";
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

  // Cycle through subtle tinted backgrounds for light cards
  const lightCardStyles = [
    {
      bg: "bg-[#fef3e2]",
      border: "border-[#f5e0b8]/60",
      quoteMark: "text-amber-400/20",
      divider: "border-amber-300/30",
    },
    {
      bg: "bg-[#eef0ff]",
      border: "border-[#d8dbf5]/60",
      quoteMark: "text-primary/15",
      divider: "border-primary/15",
    },
    {
      bg: "bg-[#e6f7f4]",
      border: "border-[#b8e8e0]/60",
      quoteMark: "text-tertiary/20",
      divider: "border-tertiary/20",
    },
  ];

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
                From parents &amp; students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards scroll rail */}
      <div className="relative">
        {/* Left fade */}
        <div
          className={`absolute left-0 top-0 bottom-2 w-14 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Right fade */}
        <div
          className={`absolute right-0 top-0 bottom-2 w-14 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 md:px-12 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, index) => {
            const style = lightCardStyles[index % lightCardStyles.length];
            const isDark = t.variant === "dark";

            return (
              <div
                key={t.id}
                className={`
                  group w-[320px] md:w-[360px] flex-shrink-0 snap-start
                  p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden
                  transition-transform duration-300 hover:-translate-y-1
                  ${
                    isDark
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                      : `${style.bg} text-on-surface border ${style.border} shadow shadow-black/5`
                  }
                `}
              >
                {/* Decorative quote mark — small and clipped */}
                <span
                  className={`absolute top-3 right-4 font-serif font-black leading-none select-none pointer-events-none text-5xl ${
                    isDark ? "text-white/15" : style.quoteMark
                  }`}
                >
                  &ldquo;
                </span>

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-amber-400 text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      isDark ? "text-on-primary/85" : "text-on-surface-variant"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div
                  className={`mt-6 flex items-center gap-3 pt-4 border-t ${
                    isDark ? "border-white/10" : style.divider
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ring-2 ${
                      isDark
                        ? "bg-white/12 ring-white/10"
                        : `${t.avatarColor} ring-primary/10`
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-lg ${
                        isDark ? "text-on-primary/40" : "text-on-surface/30"
                      }`}
                    >
                      person
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`font-bold text-sm truncate ${
                        isDark ? "text-on-primary" : "text-on-surface"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-xs mt-0.5 truncate ${
                        isDark
                          ? "text-on-primary/55"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                  {/* Verified badge */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span
                      className={`material-symbols-outlined text-lg ${
                        isDark ? "text-tertiary-fixed" : "text-tertiary"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    <span
                      className={`text-xs font-medium hidden sm:block ${
                        isDark ? "text-tertiary-fixed" : "text-tertiary"
                      }`}
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
