// src/components/layout/Footer.tsx
// ─────────────────────────────────────────────────────────────
// FOOTER — Appears on every page (set in layout.tsx).
//
// To update links or contact info, edit src/data/content.ts
// To add a new footer column, add a new <div> block below.
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { footerLinks, contactInfo } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant pt-section-gap pb-base w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-4 md:px-margin-desktop max-w-[1280px] mx-auto">

        {/* ── BRAND COLUMN ──────────────────────────────────── */}
        <div className="col-span-1 md:col-span-1">
          {/* Logo / wordmark */}
          <div className="font-headline text-headline-md font-black text-primary mb-4">
            KM.
          </div>
          <p className="text-on-surface-variant font-body text-body-md pr-4">
            Fueling curiosity and educational excellence through a vibrant,
            personalised approach to learning.
          </p>
        </div>

        {/* ── EXPLORE COLUMN ────────────────────────────────── */}
        <div>
          <h5 className="font-headline text-label-md text-primary font-bold mb-6">Explore</h5>
          <ul className="space-y-4">
            {footerLinks.explore.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant font-body text-body-md hover:text-primary hover:underline transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── SUPPORT COLUMN ────────────────────────────────── */}
        <div>
          <h5 className="font-headline text-label-md text-primary font-bold mb-6">Support</h5>
          <ul className="space-y-4">
            {footerLinks.support.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-on-surface-variant font-body text-body-md hover:text-primary hover:underline transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── CONTACT COLUMN ────────────────────────────────── */}
        <div>
          <h5 className="font-headline text-label-md text-primary font-bold mb-6">Contact</h5>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-on-surface-variant font-body text-body-md hover:text-primary hover:underline transition-all duration-200">
                Contact Us
              </Link>
            </li>
            <li className="flex items-center gap-2 text-on-surface-variant font-body text-body-md">
              <span className="material-symbols-outlined text-sm">mail</span>
              {contactInfo.email}
            </li>
            <li className="flex items-center gap-2 text-on-surface-variant font-body text-body-md">
              <span className="material-symbols-outlined text-sm">phone</span>
              {contactInfo.phone}
            </li>
          </ul>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────── */}
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-headline text-label-md">
          © {new Date().getFullYear()} Kaleidoscopic Minds. Fueling curiosity and educational excellence.
        </p>
        {/* Social icons — replace hrefs with your actual social URLs */}
        <div className="flex gap-6">
          <Link href="#" aria-label="Website" className="text-primary hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">public</span>
          </Link>
          <Link href="#" aria-label="Share" className="text-primary hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">share</span>
          </Link>
          <Link href="#" aria-label="Like" className="text-primary hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">thumb_up</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
