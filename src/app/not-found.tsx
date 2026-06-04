// src/app/not-found.tsx
// Next.js automatically uses this file for all 404 errors.

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface geo-bg flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-lg w-full text-center">

        {/* Big 404 watermark with icon on top */}
        <div className="relative mb-8">
          <p className="font-headline font-black text-[160px] leading-none text-primary/10 select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-primary-fixed rounded-3xl flex items-center justify-center shadow-xl">
              <span className="material-symbols-outlined text-primary text-5xl">
                search_off
              </span>
            </div>
          </div>
        </div>

        <h1 className="font-headline font-extrabold text-on-surface mb-4" style={{fontSize:"clamp(1.8rem,4vw,2.5rem)"}}>
          Page Not Found
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d"
          >
            <span className="material-symbols-outlined text-base">home</span>
            Back to Home
          </Link>
          <Link
            href="/courses"
            className="flex items-center justify-center gap-2 bg-white text-on-surface px-8 py-4 rounded-full font-headline text-label-md border border-outline-variant hover:border-primary hover:text-primary transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-base">school</span>
            View Programs
          </Link>
        </div>

        {/* Quick links pill row */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { label: "Begin a Session", href: "/begin-session" },
            { label: "Curriculums",     href: "/#curriculum" },
            { label: "FAQs",            href: "/#faq" },
            { label: "About Us",        href: "/#about" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-headline text-label-md text-on-surface-variant hover:text-primary px-4 py-2 bg-surface-container rounded-full hover:bg-primary-fixed transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
