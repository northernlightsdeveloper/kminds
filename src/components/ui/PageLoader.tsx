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
//      network can never trap the visitor behind it.
// ─────────────────────────────────────────────────────────────
"use client";

import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 500; // shortest time the loader stays up
const MAX_WAIT_MS = 3500; // safety net — always reveal the site by then
const FADE_MS = 400; // fade-out duration

type Phase = "visible" | "fading" | "gone";

export default function PageLoader() {
  const [phase, setPhase] = useState<Phase>("visible");

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
      <div className="h-1 w-40 overflow-hidden rounded-full bg-primary-fixed">
        <div
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary via-secondary-container to-tertiary-container"
          style={{ animation: "kmLoaderSlide 1.1s ease-in-out infinite" }}
        />
      </div>
      <style>{`
        @keyframes kmLoaderSlide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}
