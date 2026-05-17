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

// ── SEO METADATA ─────────────────────────────────────────────
// This controls the <title> and <meta description> in the browser tab
// and in Google search results. Update these for each page too.
export const metadata: Metadata = {
  title: "Kaleidoscopic Minds | Learn Differently. Think Boldly.",
  description:
    "Kaleidoscopic Minds offers personalised, curriculum-aligned education for Australian students from Prep to Year 12 — where imagination meets excellence.",
  // When you have a real domain, add it here:
  // metadataBase: new URL("https://kminds.com.au"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* ── NAVBAR ──────────────────────────────────────────
            Sticky navigation bar — appears on every page.
            Edit it in: src/components/layout/Navbar.tsx
        ─────────────────────────────────────────────────── */}
        <Navbar />

        {/* ── PAGE CONTENT ────────────────────────────────────
            'children' = whatever page.tsx is currently active.
            The <main> tag is important for accessibility (screen readers).
        ─────────────────────────────────────────────────── */}
        <main>{children}</main>

        {/* ── FOOTER ──────────────────────────────────────────
            Footer — appears on every page.
            Edit it in: src/components/layout/Footer.tsx
        ─────────────────────────────────────────────────── */}
        <Footer />
      </body>
    </html>
  );
}
