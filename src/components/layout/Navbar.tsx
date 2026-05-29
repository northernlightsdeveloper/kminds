// src/components/layout/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 max-w-[1280px] mx-auto">
        {/* LOGO */}
        <Link href="/" className="shrink-0 flex items-center">
          <img
            src="/Kaliedoscopic Minds.svg"
            alt="Kaleidoscopic Minds"
            className="h-12 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
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
                className="font-headline text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-0.5 py-2 whitespace-nowrap"
              >
                {link.label}
                {link.dropdown.length > 0 && (
                  <span
                    className={`material-symbols-outlined text-sm transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                )}
              </Link>

              {link.dropdown.length > 0 && openDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2 z-50 min-w-[220px]">
                  <div className="bg-white rounded-2xl shadow-xl border border-outline-variant/20 py-2 overflow-hidden">
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
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/begin-session"
          className="hidden md:block bg-primary text-on-primary px-5 py-2.5 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d shrink-0 whitespace-nowrap"
        >
          Begin a Session
        </Link>

        {/* MOBILE HAMBURGER */}
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

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-headline text-label-md text-on-surface-variant hover:text-primary py-2.5 transition-colors"
              >
                {link.label}
              </Link>
              {link.dropdown.length > 0 && (
                <div className="pl-4 border-l-2 border-outline-variant/30 mb-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-headline text-xs text-on-surface-variant/70 hover:text-primary py-1.5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-outline-variant/20 mt-2">
            <Link
              href="/begin-session"
              onClick={() => setMobileOpen(false)}
              className="block bg-primary text-on-primary text-center px-6 py-3 rounded-full font-headline text-label-md"
            >
              Begin a Session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
