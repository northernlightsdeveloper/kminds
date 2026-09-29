// src/components/ui/PageLoader.tsx
// ─────────────────────────────────────────────────────────────
// PAGE LOADER — full-screen splash shown on the first page load.
//
// Why it exists: the Material Symbols icon font loads a moment
// after the page, so for a split second icons show up as raw
// text (e.g. "expand_more") and the site looks unfinished.
//
// How it works:
//   1. It is rendered on the server, so it covers the page from
//      the very first paint (no flash of unfinished content).
//   2. Once the page + icon font have loaded, it fades out.
//   3. It always stays for at least MIN_VISIBLE_MS so it never
//      just flickers, and gives up after MAX_WAIT_MS so a slow
//      network can never trap the visitor behind it. A CSS-only
//      failsafe also hides it after 5s even if JavaScript fails.
// ─────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 500; // shortest time the loader stays up
const MAX_WAIT_MS = 3500; // safety net — always reveal the site by then
const FADE_MS = 400; // fade-out duration
const QUOTE_MS = 1400; // how long each quote is shown before the next fades in

// On-brand, upbeat lines shown one at a time while the site loads.
// Colour cycles through the theme (primary → secondary → tertiary).
const QUOTES = [
  { text: "Where potential becomes performance", color: "text-primary" },
  { text: "Sharpening minds, one session at a time", color: "text-secondary" },
  { text: "Clarity. Confidence. Academic excellence.", color: "text-tertiary" },
  { text: "Structured learning, real results", color: "text-primary" },
  { text: "Building strong fundamentals that last", color: "text-secondary" },
];

type Phase = "visible" | "fading" | "gone";

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>("visible");
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Cycle the quote underneath the logo for as long as the loader is up
  useEffect(() => {
    if (phase !== "visible") return;
    const t = setInterval(
      () => setQuoteIndex((i) => (i + 1) % QUOTES.length),
      QUOTE_MS,
    );
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    let cancelled = false;
    const started = Date.now();

    // Resolves once the whole page (incl. the Google Fonts stylesheet) is loaded
    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });

    const iconsReady = pageLoaded
      .then(() =>
        // Explicitly request the icon font, then wait for all fonts
        document.fonts.load('24px "Material Symbols Outlined"', "expand_more"),
      )
      .then(() => document.fonts.ready)
      .catch(() => undefined); // never block the site if anything fails

    const timeout = new Promise<void>((resolve) =>
      setTimeout(resolve, MAX_WAIT_MS),
    );

    Promise.race([iconsReady, timeout]).then(() => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - started));
      setTimeout(() => {
        if (!cancelled) setPhase("fading");
      }, wait);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = setTimeout(() => setPhase("gone"), FADE_MS);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      id="page-loader"
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-background transition-opacity ease-out ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <img
        src="/Kaliedoscopic Minds.svg"
        alt="Kaleidoscopic Minds"
        className="h-20 w-auto motion-safe:animate-pulse"
      />

      <div
        className="h-14 px-8 flex items-center justify-center"
        aria-hidden="true"
      >
        <p
          key={quoteIndex}
          className={`font-headline font-semibold text-center text-base sm:text-lg max-w-xs sm:max-w-sm ${QUOTES[quoteIndex].color}`}
          style={{ animation: "kmLoaderQuote 1.4s ease-in-out" }}
        >
          {QUOTES[quoteIndex].text}
        </p>
      </div>

      <div className="flex gap-1.5" aria-hidden="true">
        {QUOTES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === quoteIndex ? "w-5 bg-primary" : "w-1.5 bg-primary-fixed"
            }`}
          />
        ))}
      </div>

      <style>{`
        /* Failsafe: even if JavaScript never runs, hide the loader after 5s */
        @keyframes kmLoaderFailsafe {
          to { opacity: 0; visibility: hidden; pointer-events: none; }
        }
        #page-loader { animation: kmLoaderFailsafe 0.4s ease-out 5s forwards; }
        @keyframes kmLoaderQuote {
          0%   { opacity: 0; transform: translateY(6px); }
          15%  { opacity: 1; transform: translateY(0); }
          85%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
