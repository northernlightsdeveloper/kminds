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

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -460 : 460, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="bg-surface-container-low py-20 md:py-28 overflow-hidden relative"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="px-4 md:px-16 max-w-[1280px] mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-tertiary/10 text-tertiary font-semibold text-xs px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                groups
              </span>
              Community
            </span>
            <h2 className="font-extrabold text-on-surface text-4xl md:text-5xl leading-tight tracking-tight">
              Hear from our{" "}
              <span className="text-primary italic">Community</span>
            </h2>
            <p className="text-on-surface-variant text-base mt-3 font-medium">
              &ldquo;{testimonialsSection.headline}&rdquo;
            </p>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-4 shrink-0 bg-white/70 backdrop-blur-sm border border-outline-variant/20 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-on-surface leading-none">
                5.0
              </span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-amber-400 text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-outline-variant/30" />
            <div>
              <p className="font-bold text-on-surface text-sm leading-tight">
                Verified Rating
              </p>
              <p className="text-xs text-on-surface-variant mt-0.5">
                From parents & students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards row */}
      <div className="relative">
        {/* Left fade */}
        <div
          className={`absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Right fade */}
        <div
          className={`absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-4 md:px-16 pb-6 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`
                group min-w-[340px] md:min-w-[420px] flex-shrink-0 snap-start
                p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden
                transition-transform duration-300 hover:-translate-y-1
                ${
                  t.variant === "dark"
                    ? "bg-primary text-on-primary shadow-xl shadow-primary/20"
                    : "bg-white text-on-surface border border-outline-variant/20 shadow-md shadow-black/5"
                }
              `}
            >
              {/* Decorative quote mark */}
              <div
                className={`absolute -top-2 right-6 font-serif font-black leading-none select-none pointer-events-none text-[120px] ${
                  t.variant === "dark" ? "text-white/8" : "text-primary/6"
                }`}
              >
                &ldquo;
              </div>

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-amber-400 text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className={`text-[15px] leading-relaxed font-medium ${
                    t.variant === "dark"
                      ? "text-on-primary/85"
                      : "text-on-surface-variant"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div
                className={`mt-8 flex items-center gap-3 pt-5 border-t ${
                  t.variant === "dark"
                    ? "border-white/10"
                    : "border-outline-variant/20"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarColor} flex items-center justify-center shrink-0 ring-2 ${
                    t.variant === "dark" ? "ring-white/10" : "ring-primary/10"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-xl ${
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
                    className={`font-bold text-sm truncate ${
                      t.variant === "dark"
                        ? "text-on-primary"
                        : "text-on-surface"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-xs mt-0.5 truncate ${
                      t.variant === "dark"
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
                      t.variant === "dark"
                        ? "text-tertiary-fixed"
                        : "text-tertiary"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      t.variant === "dark"
                        ? "text-tertiary-fixed"
                        : "text-tertiary"
                    }`}
                  >
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex gap-3 justify-center mt-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
            canScrollLeft
              ? "border-outline-variant bg-white hover:bg-primary hover:border-primary hover:text-on-primary text-on-surface shadow-sm"
              : "border-outline-variant/30 bg-transparent text-on-surface/20 cursor-not-allowed"
          }`}
          aria-label="Scroll left"
        >
          <span className="material-symbols-outlined text-lg">
            chevron_left
          </span>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
            canScrollRight
              ? "border-outline-variant bg-white hover:bg-primary hover:border-primary hover:text-on-primary text-on-surface shadow-sm"
              : "border-outline-variant/30 bg-transparent text-on-surface/20 cursor-not-allowed"
          }`}
          aria-label="Scroll right"
        >
          <span className="material-symbols-outlined text-lg">
            chevron_right
          </span>
        </button>
      </div>
    </section>
  );
}
