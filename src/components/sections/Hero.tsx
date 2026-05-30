// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/data/content";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = hero.heroVideos ?? [
    { src: hero.heroVideoSrc, label: hero.videoLabel, icon: "videocam" },
  ];

  useEffect(() => {
    videos.forEach((_, i) => {
      const vid = videoRefs.current[i];
      if (!vid) return;
      vid.muted = true;
      if (i === activeTab) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
    setIsMuted(true);
  }, [activeTab]);

  const toggleMute = () => {
    const vid = videoRefs.current[activeTab];
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
    if (!vid.muted && vid.paused) vid.play();
  };

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const activeVideo = videos[activeTab];

  // Animated pill messages — cycles through these instead of just showing brand name
  const pillMessages = [
    "✦ Now Enrolling for 2025",
    "✦ Free Consultation Available",
    "✦ Years 5–12 · Maths & Science",
    "✦ Live 1-on-1 Online Sessions",
    "✦ AC · VC · IGCSE · IB",
  ];

  return (
    <section className="relative overflow-hidden bg-surface geo-bg">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary-container/20 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative px-4 md:px-margin-desktop pt-20 pb-24 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── LEFT ──────────────────────────────────────────── */}
        <div className="animate-fade-up">
          {/* ── ANIMATED TICKER PILL ──────────────────────────
              Scrolls through key facts instead of repeating the brand name.
              Pure CSS animation — no JS needed.
              To change messages: edit the pillMessages array above.
          ─────────────────────────────────────────────────── */}
          <div className="inline-flex items-center gap-2 bg-primary-fixed border border-primary/20 px-4 py-2 rounded-full mb-8 shadow-sm overflow-hidden max-w-[320px]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            {/* Outer clip window */}
            <div className="overflow-hidden h-5 flex-1">
              {/* Inner scroll track — animates upward continuously */}
              <div className="animate-ticker">
                {/* Duplicate messages so the loop is seamless */}
                {[...pillMessages, ...pillMessages].map((msg, i) => (
                  <div
                    key={i}
                    className="h-5 flex items-center font-headline text-label-md text-primary font-bold tracking-wide whitespace-nowrap"
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Headline — clamp reduced from 2rem–3.5rem to 1.6rem–2.8rem */}
          <h1
            className="font-headline font-extrabold text-on-surface mb-5 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {hero.tagline}
          </h1>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            <p className="font-headline text-label-md text-primary uppercase tracking-widest">
              {hero.subTagline}
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-secondary/30 to-transparent" />
          </div>
          <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            <em className="not-italic font-body text-body-lg text-on-surface-variant">
              {hero.body}
            </em>
          </p>
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
          {/* Stat card 1 — 95% */}
          <div className="group absolute -left-6 top-8 z-10 bg-white border border-outline-variant/20 shadow-xl rounded-2xl flex items-center overflow-hidden animate-fade-up delay-300 transition-[width,padding] duration-300 ease-out w-[52px] hover:w-[196px] p-[6px] hover:px-4 hover:py-3">
            <div className="w-10 h-10 bg-tertiary-fixed rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-tertiary text-xl">
                trending_up
              </span>
            </div>
            <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-150 whitespace-nowrap">
              <p className="font-headline text-headline-md text-on-surface leading-none">
                95%
              </p>
              <p className="font-headline text-xs text-on-surface-variant">
                Score Improvement
              </p>
            </div>
          </div>

          {/* Stat card 2 — 4 Curriculums */}
          <div className="group absolute -right-4 bottom-16 z-10 bg-white border border-outline-variant/20 shadow-xl rounded-2xl flex items-center overflow-hidden animate-fade-up delay-400 transition-[width,padding] duration-300 ease-out w-[52px] hover:w-[172px] p-[6px] hover:px-4 hover:py-3">
            <div className="w-10 h-10 bg-secondary-fixed rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-secondary text-xl">
                school
              </span>
            </div>
            <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-150 whitespace-nowrap">
              <p className="font-headline text-headline-md text-on-surface leading-none">
                4
              </p>
              <p className="font-headline text-xs text-on-surface-variant">
                Curriculums
              </p>
            </div>
          </div>

          {/* ── VIDEO CARD ── */}
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden card-shadow border-4 border-white bg-black">
            {videos.map((v, i) => (
              <video
                key={i}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={v.src}
                autoPlay={i === 0}
                muted
                loop
                playsInline
                className={[
                  "absolute inset-0 w-full h-full transition-opacity duration-500",
                  i === 0 ? "object-cover" : "object-contain",
                  i === activeTab
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none",
                ].join(" ")}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {videos.length > 1 && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/15 z-10 w-max">
                {videos.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    aria-label={`Switch to ${v.label}`}
                    className={[
                      "flex items-center gap-1 px-3 py-1.5 rounded-full font-headline transition-all duration-200 whitespace-nowrap text-[11px] sm:text-xs",
                      i === activeTab
                        ? "bg-white text-on-surface shadow-sm"
                        : "text-white/80 hover:text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {(v as any).icon ??
                        (i === activeTab ? "play_circle" : "videocam")}
                    </span>
                    {v.label}
                  </button>
                ))}
              </div>
            )}

            <div className="absolute bottom-6 left-6 glass-card px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm z-10">
              <span className="w-2 h-2 bg-error rounded-full animate-pulse flex-shrink-0" />
              <span className="font-headline text-label-md text-on-surface truncate max-w-[140px] sm:max-w-none">
                {activeVideo.label}
              </span>
            </div>

            <div className="absolute bottom-5 right-5 flex items-center gap-2 z-10">
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/20"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  {isMuted ? "volume_off" : "volume_up"}
                </span>
              </button>
              <button
                onClick={toggleExpand}
                aria-label="Expand video"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/20"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  open_in_full
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={toggleExpand}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {videos.length > 1 && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/15 z-10 w-max">
                {videos.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={[
                      "flex items-center gap-1 px-3 py-1.5 rounded-full font-headline text-xs transition-all duration-200 whitespace-nowrap",
                      i === activeTab
                        ? "bg-white text-on-surface shadow-sm"
                        : "text-white/80 hover:text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {(v as any).icon ??
                        (i === activeTab ? "play_circle" : "videocam")}
                    </span>
                    {v.label}
                  </button>
                ))}
              </div>
            )}
            <video
              src={activeVideo.src}
              autoPlay
              loop
              playsInline
              controls
              className="w-full h-auto block"
            />
            <button
              onClick={toggleExpand}
              aria-label="Close expanded video"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors border border-white/20"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
