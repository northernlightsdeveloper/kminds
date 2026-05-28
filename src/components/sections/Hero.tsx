// src/components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface geo-bg">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary-container/20 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />
      {/* Dot grid accent */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative px-4 md:px-margin-desktop pt-20 pb-24 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── LEFT ──────────────────────────────────────────── */}
        <div className="animate-fade-up">
          {/* Brand pill */}
          <div className="inline-flex items-center gap-2 bg-primary-fixed border border-primary/20 px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-headline text-label-md text-primary font-bold tracking-wide">
              {hero.brandName}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-headline font-extrabold text-on-surface mb-5 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {hero.tagline}
          </h1>

          {/* Sub tagline with colored words */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            <p className="font-headline text-label-md text-primary uppercase tracking-widest">
              {hero.subTagline}
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-secondary/30 to-transparent" />
          </div>

          {/* Body */}
          <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            <em className="not-italic font-body text-body-lg text-on-surface-variant">
              {hero.body}
            </em>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="group bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-body-md border-b-4 border-[#3435b0] btn-3d flex items-center gap-2"
            >
              {hero.primaryCta.label}
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="bg-white text-on-surface px-8 py-4 rounded-full font-headline text-body-md border border-outline-variant hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex items-center gap-6 flex-wrap">
            {[
              { icon: "verified", label: "Curriculum Aligned" },
              { icon: "groups", label: "1-on-1 Sessions" },
              { icon: "star", label: "Expert Mentors" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-tertiary text-base">
                  {b.icon}
                </span>
                <span className="font-headline text-label-md">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Video Card ────────────────────────────── */}
        <div className="relative animate-scale-in delay-200">
          {/* Floating stat cards */}
          <div className="absolute -left-6 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10 border border-outline-variant/20 animate-fade-up delay-300">
            <div className="w-10 h-10 bg-tertiary-fixed rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-xl">
                trending_up
              </span>
            </div>
            <div>
              <p className="font-headline text-headline-md text-on-surface leading-none">
                95%
              </p>
              <p className="font-headline text-xs text-on-surface-variant">
                Score Improvement
              </p>
            </div>
          </div>
          <div className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-10 border border-outline-variant/20 animate-fade-up delay-400">
            <div className="w-10 h-10 bg-secondary-fixed rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-xl">
                school
              </span>
            </div>
            <div>
              <p className="font-headline text-headline-md text-on-surface leading-none">
                4
              </p>
              <p className="font-headline text-xs text-on-surface-variant">
                Curriculums
              </p>
            </div>
          </div>

          {/* Video thumbnail */}
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden card-shadow border-4 border-white">
            <Image
              src={hero.heroImageSrc}
              alt="KMinds sample class"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 hover:bg-white transition-all"
                aria-label="Play"
              >
                <span
                  className="material-symbols-outlined text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
              </button>
            </div>
            <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
              <span className="w-2.5 h-2.5 bg-error rounded-full animate-pulse" />
              <span className="font-headline text-label-md text-on-surface">
                {hero.videoLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
