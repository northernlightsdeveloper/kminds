// tailwind.config.ts
// ─────────────────────────────────────────────────────────────
// This file defines the ENTIRE design system for KMinds.
// All colors, fonts, spacing, and border radii live here.
// To update a brand color, change it once here — it applies everywhere.
// ─────────────────────────────────────────────────────────────

import type { Config } from "tailwindcss";

const config: Config = {
  // Tell Tailwind which files to scan for class names
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── COLORS ──────────────────────────────────────────────
      // Material Design 3 color system, tuned for KMinds.
      // primary     = Electric Indigo (main brand color)
      // secondary   = Sunlight Amber (highlights, achievements)
      // tertiary    = Fresh Emerald  (progress, STEM)
      colors: {
        primary: "#4648d4",
        "on-primary": "#ffffff",
        "primary-container": "#6063ee",
        "on-primary-container": "#fffbff",
        "inverse-primary": "#c0c1ff",
        "primary-fixed": "#e1e0ff",
        "primary-fixed-dim": "#c0c1ff",
        "on-primary-fixed": "#07006c",
        "on-primary-fixed-variant": "#2f2ebe",

        secondary: "#855300",
        "on-secondary": "#ffffff",
        "secondary-container": "#fea619",
        "on-secondary-container": "#684000",
        "secondary-fixed": "#ffddb8",
        "secondary-fixed-dim": "#ffb95f",
        "on-secondary-fixed": "#2a1700",
        "on-secondary-fixed-variant": "#653e00",

        tertiary: "#006c49",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#00885d",
        "on-tertiary-container": "#000703",
        "tertiary-fixed": "#6ffbbe",
        "tertiary-fixed-dim": "#4edea3",
        "on-tertiary-fixed": "#002113",
        "on-tertiary-fixed-variant": "#005236",

        // Neutral surfaces
        surface: "#f9f9ff",
        "surface-dim": "#cfdaf2",
        "surface-bright": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d8e3fb",
        "on-surface": "#111c2d",
        "on-surface-variant": "#464554",
        "inverse-surface": "#263143",
        "inverse-on-surface": "#ecf1ff",
        "surface-tint": "#494bd6",
        "surface-variant": "#d8e3fb",
        background: "#f9f9ff",
        "on-background": "#111c2d",
        outline: "#767586",
        "outline-variant": "#c7c4d7",

        // Errors
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
      },

      // ── BORDER RADIUS ────────────────────────────────────────
      // KMinds uses ultra-rounded shapes — no sharp corners.
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",      // cards
        xl: "1.5rem",    // buttons (pill-ish)
        "2xl": "2rem",
        "3xl": "3rem",
        full: "9999px",  // full pill buttons
      },

      // ── FONT FAMILIES ────────────────────────────────────────
      // Plus Jakarta Sans → headings (geometric, modern, playful)
      // Nunito Sans       → body text (rounded, highly readable)
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      },

      // ── FONT SIZES ───────────────────────────────────────────
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-xl-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", fontWeight: "600" }],
      },

      // ── SPACING ──────────────────────────────────────────────
      // 8px base grid. Use multiples of 8 for consistent spacing.
      spacing: {
        base: "8px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "section-gap": "80px",
      },

      // ── BOX SHADOWS ──────────────────────────────────────────
      // Color-tinted shadows (not generic grey)
      boxShadow: {
        card: "0 16px 32px -12px rgba(70, 72, 212, 0.15)",
        btn: "0 4px 0 0 #3435b0",
      },

      // ── KEYFRAME ANIMATIONS ──────────────────────────────────
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
