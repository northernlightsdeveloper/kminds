// src/components/sections/Curriculums.tsx
// ─────────────────────────────────────────────────────────────
// CURRICULUMS — Grid of curriculum boards (AC, VC, IGCSE, IB).
//
// To add/edit curriculums: → src/data/content.ts (curriculums array)
// To link "View Detailed Syllabus" to a real page:
//   → Change the href on the button below to "/syllabus"
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import { curriculums } from "@/data/content";

export default function Curriculums() {
  return (
    <section
      id="curriculum"
      className="bg-surface-container py-section-gap"
    >
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">

        {/* ── SECTION HEADER ────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-headline text-headline-lg text-on-surface">
              Global Curriculums
            </h2>
            <p className="text-on-surface-variant font-body text-body-md mt-4">
              We align with world-class standards to ensure your child can
              thrive anywhere in the world.
            </p>
          </div>

          {/* Link to detailed syllabus page (build this page later) */}
          <Link
            href="#" // TODO: change to "/syllabus" when that page exists
            className="text-primary font-headline text-label-md flex items-center gap-2 hover:underline"
          >
            View Detailed Syllabus
            <span className="material-symbols-outlined">north_east</span>
          </Link>
        </div>

        {/* ── CURRICULUM CARD GRID ──────────────────────────── */}
        {/* 2 columns on small, 4 on large */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculums.map((curr) => (
            <div
              key={curr.id}
              className="bg-white p-10 rounded-3xl text-center card-shadow hover:-translate-y-2 transition-transform border border-outline-variant/30"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 mx-auto mb-6 bg-surface-container-high rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {curr.icon}
                </span>
              </div>

              {/* Abbreviation (big) */}
              <h4 className="font-headline text-headline-md text-primary mb-2">
                {curr.code}
              </h4>

              {/* Full name */}
              <p className="font-headline text-label-md text-on-surface-variant">
                {curr.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
