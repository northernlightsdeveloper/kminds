// src/components/sections/Hero.tsx
// ─────────────────────────────────────────────────────────────
// HERO SECTION — The first thing visitors see.
//
// To change the headline, tagline, or button text:
//   → Edit src/data/content.ts (hero object)
//
// To link the "Explore Programs" button to a real page:
//   → Change hero.primaryCta.href in content.ts to "/courses"
//
// To replace the video thumbnail with a real video:
//   → Replace the <img> with a <video> tag or embed
// ─────────────────────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="px-4 md:px-margin-desktop pt-16 pb-section-gap max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* ── LEFT COLUMN: Text Content ─────────────────────── */}
      <div>
        {/* Eyebrow — small label above the headline */}
        <span className="text-secondary font-headline text-label-md tracking-widest uppercase mb-4 block">
          {hero.eyebrow}
        </span>

        {/* Main headline — the accent word is italic + colored */}
        <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">
          {hero.headline}{" "}
          <em className="text-primary not-italic">{hero.headlineAccent}</em>{" "}
          {hero.headlineSuffix}
        </h1>

        {/* Supporting paragraph */}
        <p className="font-body text-body-lg text-on-surface-variant mb-8 max-w-lg">
          {hero.body}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Primary CTA — filled indigo button */}
          <Link
            href={hero.primaryCta.href}
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-body-lg border-b-4 border-[#3435b0] btn-3d"
          >
            {hero.primaryCta.label}
          </Link>

          {/* Secondary CTA — lighter outlined button */}
          <Link
            href={hero.secondaryCta.href}
            className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-headline text-body-lg border-b-4 border-outline-variant btn-3d"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Video Thumbnail ─────────────────── */}
      {/* 'group' class lets child elements respond to hover on the parent */}
      <div className="relative group">
        {/* Decorative glowing blob behind the video card */}
        <div className="absolute -inset-4 bg-tertiary-fixed-dim/20 rounded-[48px] blur-2xl group-hover:bg-tertiary-fixed-dim/30 transition-all duration-500" />

        {/* Video card */}
        <div className="relative aspect-video rounded-[32px] overflow-hidden bg-surface-container-highest card-shadow border-4 border-white">
          {/* Replace this src with your own image or video poster */}
          <Image
            src={hero.heroImageSrc}
            alt="Sample class recording preview"
            fill
            className="object-cover"
            priority // load this image immediately (it's above the fold)
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
            <button
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform"
              aria-label="Play sample class"
              // TODO: Add onClick to open a video modal when ready
            >
              <span
                className="material-symbols-outlined text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
            </button>
          </div>

          {/* "Live" badge at the bottom left */}
          <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <span className="w-3 h-3 bg-error rounded-full animate-pulse" />
            <span className="font-headline text-label-md text-on-surface">
              {hero.videoLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
