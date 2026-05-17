// src/components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────
// NAVBAR — Sticky navigation bar at the top of every page.
//
// To add a new nav link:
//   1. Open src/data/content.ts
//   2. Add to the navLinks array: { label: "Courses", href: "/courses" }
//
// To make "Join Now" open a modal or go to a page:
//   Change the href on the button below, or add an onClick handler.
// ─────────────────────────────────────────────────────────────

"use client"; // 'use client' is needed because we use React state (mobile menu toggle)

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  // State to track whether the mobile menu is open or closed
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-4 md:px-margin-desktop py-4 max-w-[1280px] mx-auto">

        {/* ── LOGO ──────────────────────────────────────────── */}
        {/* To add an image logo: replace the text with <Image src="/logo.png" ... /> */}
        <Link href="/" className="font-headline text-headline-md font-extrabold text-primary">
          Kaleidoscopic Minds
        </Link>

        {/* ── DESKTOP NAV LINKS ─────────────────────────────── */}
        {/* Hidden on mobile (hidden), shown on medium+ screens (md:flex) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── JOIN NOW BUTTON ───────────────────────────────── */}
        {/* When you build a signup page, change href to "/signup" */}
        <Link
          href="#"
          className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline text-label-md border-b-4 border-primary-container btn-3d"
        >
          Join Now
        </Link>

        {/* ── MOBILE HAMBURGER ─────────────────────────────── */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* ── MOBILE DROPDOWN MENU ──────────────────────────── */}
      {/* Shown only when mobileOpen is true */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)} // close menu on tap
              className="font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMobileOpen(false)}
            className="bg-primary text-on-primary text-center px-6 py-3 rounded-full font-headline text-label-md"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
