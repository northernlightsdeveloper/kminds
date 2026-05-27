// src/components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────
// NAVBAR — Sticky top nav with dropdown menus + Sign In button.
// To edit links: src/data/content.ts (navLinks array)
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
      <nav className="flex justify-between items-center px-4 md:px-margin-desktop py-4 max-w-[1280px] mx-auto">
        {/* ── LOGO ────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline text-headline-md font-extrabold text-primary leading-none">
            Kaleidoscopic
            <br />
            <span className="text-secondary">Minds</span>
          </span>
        </Link>

        {/* ── DESKTOP NAV ─────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.dropdown.length > 0 && setOpenDropdown(link.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                {link.dropdown.length > 0 && (
                  <span className="material-symbols-outlined text-base">
                    expand_more
                  </span>
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown.length > 0 && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-outline-variant/20 py-2 min-w-[220px] z-50">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-3 font-headline text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── RIGHT BUTTONS ───────────────────────────────── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sign In — ghost button */}
          <Link
            href="#"
            className="font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          {/* Begin Session — primary CTA */}
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d text-sm"
          >
            Begin a Session
          </Link>
        </div>

        {/* ── MOBILE HAMBURGER ────────────────────────────── */}
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

      {/* ── MOBILE MENU ─────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-headline text-label-md text-on-surface-variant hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </Link>
              {link.dropdown.length > 0 && (
                <div className="pl-4 border-l border-outline-variant/30 mb-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-headline text-label-md text-on-surface-variant/70 hover:text-primary py-1.5 transition-colors text-xs"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-outline-variant/20 mt-2">
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-center font-headline text-label-md text-on-surface-variant py-2"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-on-primary text-center px-6 py-3 rounded-full font-headline text-label-md"
            >
              Begin a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
