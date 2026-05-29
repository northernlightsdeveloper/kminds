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
  // ── SEO ───────────────────────────────────────────────────
  title: "Kaleidoscopic Minds | Personalised Online Tutoring Years 5–12",
  description:
    "1-on-1 personalised online tutoring for Australian students in Years 5–12. Aligned with AC, VC, IGCSE and IB curriculums. Maths & Science. Real results.",
  keywords:
    "Kaleidoscopic Minds, KMinds, online tutoring Australia, year 10 tutor, maths tutor, science tutor, IGCSE tutor, IB tutor, Victorian curriculum tutor, Australian curriculum tutor",

  // ── Canonical URL ─────────────────────────────────────────
  metadataBase: new URL("https://www.k-minds.com"),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph (WhatsApp, Facebook previews) ──────────────
  openGraph: {
    title: "Kaleidoscopic Minds | Personalised Online Tutoring",
    description:
      "Where Potential Becomes Performance. 1-on-1 curriculum-aligned tutoring for Australian students Years 5–12.",
    url: "https://www.k-minds.com",
    siteName: "Kaleidoscopic Minds",
    locale: "en_AU",
    type: "website",
  },

  // ── Twitter / X card ──────────────────────────────────────
  twitter: {
    card: "summary",
    title: "Kaleidoscopic Minds | Online Tutoring",
    description:
      "Personalised 1-on-1 tutoring for Australian students. Years 5–12. AC, VC, IGCSE & IB.",
  },

  // ── Favicons ──────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // ── Tell Google to index the site ─────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
            Material Symbols  → icons
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
