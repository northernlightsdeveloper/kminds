// src/components/sections/Hero.tsx
// To change content: src/data/content.ts (hero object)

import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="px-4 md:px-margin-desktop pt-16 pb-section-gap max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* ── LEFT ────────────────────────────────────────────── */}
      <div>
        {/* Brand name */}
        <div className="inline-flex items-center gap-2 bg-primary-fixed px-4 py-2 rounded-full mb-6">
          <span className="material-symbols-outlined text-primary text-base">
            auto_awesome
          </span>
          <span className="font-headline text-label-md text-primary font-bold">
            {hero.brandName}
          </span>
        </div>

        {/* Main tagline */}
        <h1 className="font-headline text-headline-xl-mobile md:text-headline-xl text-on-surface mb-4 leading-tight">
          {hero.tagline}
        </h1>

        {/* Sub tagline */}
        <p className="font-headline text-headline-md text-primary mb-4">
          {hero.subTagline}
        </p>

        {/* Body */}
        <div className="flex items-start gap-2 mb-8">
          <span className="text-xl">👉</span>
          <p className="font-body text-body-lg text-on-surface-variant">
            {hero.body}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={hero.primaryCta.href}
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-body-md border-b-4 border-[#3435b0] btn-3d"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-headline text-body-md border-b-4 border-outline-variant btn-3d"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Video card ───────────────────────────────── */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-tertiary-fixed-dim/20 rounded-[48px] blur-2xl group-hover:bg-tertiary-fixed-dim/30 transition-all duration-500" />
        <div className="relative aspect-video rounded-[32px] overflow-hidden bg-surface-container-highest card-shadow border-4 border-white">
          <Image
            src={hero.heroImageSrc}
            alt="KMinds sample class recording"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
            <button
              className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform"
              aria-label="Play sample class"
            >
              <span
                className="material-symbols-outlined text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
            </button>
          </div>
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
