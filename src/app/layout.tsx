// src/app/layout.tsx
// ─────────────────────────────────────────────────────────────
// ROOT LAYOUT — This wraps EVERY page on the site.
//
// Think of it like a picture frame: whatever you put here
// (Navbar, Footer, global providers) appears on every page.
//
// To add a new page, create a folder under src/app/:
//   src/app/about/page.tsx  →  yoursite.com/about
//   src/app/courses/page.tsx →  yoursite.com/courses
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Kaleidoscopic Minds | Learn Differently. Think Boldly.",
  description:
    "Kaleidoscopic Minds offers personalised, curriculum-aligned education for Australian students from Prep to Year 12 — where imagination meets excellence.",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── GOOGLE FONTS ──────────────────────────────────────
            Loaded directly in <head> because Next.js's font system
            does not support Material Symbols variable fonts.

            Plus Jakarta Sans → headings
            Nunito Sans       → body text
            Material Symbols  → icons (the square boxes you saw)
        ─────────────────────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* FILL axis (0..1) lets us toggle filled vs outlined icons with CSS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Floating WhatsApp button — appears on every page */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
