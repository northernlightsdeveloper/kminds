// src/app/courses/page.tsx
// ─────────────────────────────────────────────────────────────
// COURSES PAGE — yoursite.com/courses
// 'use client' needed because of useState for filters
// To add courses: → src/data/courses.ts
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  courses,
  levelFilters,
  subjectFilters,
  deliveryFeatures,
  type CourseLevel,
  type CourseSubject,
} from "@/data/courses";

// Static color lookup maps — full class strings so Tailwind includes them
const accentMap: Record<string, string> = {
  "bg-secondary-fixed": "bg-secondary-fixed",
  "bg-primary-fixed": "bg-primary-fixed",
  "bg-tertiary-fixed": "bg-tertiary-fixed",
};
const textMap: Record<string, string> = {
  "text-secondary": "text-secondary",
  "text-primary": "text-primary",
  "text-tertiary": "text-tertiary",
};
const badgeMap: Record<string, string> = {
  "bg-secondary-container text-on-secondary-container":
    "bg-secondary-container text-on-secondary-container",
  "bg-primary-container text-on-primary-container":
    "bg-primary-container text-on-primary-container",
  "bg-tertiary-container text-on-tertiary-container":
    "bg-tertiary-container text-on-tertiary-container",
};

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState<"All" | CourseLevel>("All");
  const [activeSubject, setActiveSubject] = useState<"All" | CourseSubject>(
    "All",
  );

  const filtered = courses.filter((c) => {
    const levelMatch = activeLevel === "All" || c.level === activeLevel;
    const subjectMatch = activeSubject === "All" || c.subject === activeSubject;
    return levelMatch && subjectMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-b border-outline-variant/20 py-20 px-4 md:px-margin-desktop">
        <div className="max-w-[1280px] mx-auto text-center">
          <span className="text-secondary font-headline text-label-md tracking-widest uppercase mb-4 block">
            Our Programs
          </span>
          <h1 className="font-headline text-headline-xl text-on-surface mb-6">
            Find Your{" "}
            <em className="text-primary not-italic">Perfect Course</em>
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            From early explorers to senior students — every KMinds course blends
            live sessions, expert-crafted materials, and on-demand recordings to
            fit your child's pace.
          </p>
        </div>
      </section>

      {/* ── DELIVERY FEATURES STRIP ─────────────────────────── */}
      <section className="bg-primary py-5 px-4 overflow-x-auto">
        <div className="max-w-[1280px] mx-auto flex gap-8 md:justify-center min-w-max">
          {deliveryFeatures.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2 text-on-primary"
            >
              <span className="material-symbols-outlined text-xl">
                {f.icon}
              </span>
              <span className="font-headline text-label-md whitespace-nowrap">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTERS ─────────────────────────────────────────── */}
      <section className="px-4 md:px-margin-desktop py-12 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-headline text-label-md text-on-surface-variant">
              Subject:
            </span>
            {subjectFilters.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSubject(s)}
                className={`px-5 py-2 rounded-full font-headline text-label-md transition-all duration-200 border ${
                  activeSubject === s
                    ? "bg-primary text-on-primary border-primary"
                    : "bg-white text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-headline text-label-md text-on-surface-variant">
              Level:
            </span>
            {levelFilters.map((l) => (
              <button
                key={l}
                onClick={() => setActiveLevel(l)}
                className={`px-5 py-2 rounded-full font-headline text-label-md transition-all duration-200 border ${
                  activeLevel === l
                    ? "bg-on-surface text-surface border-on-surface"
                    : "bg-white text-on-surface-variant border-outline-variant hover:border-on-surface hover:text-on-surface"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <p className="font-headline text-label-md text-on-surface-variant mt-6">
          Showing{" "}
          <span className="text-primary font-bold">{filtered.length}</span>{" "}
          courses
        </p>
      </section>

      {/* ── COURSE CARDS ────────────────────────────────────── */}
      <section className="px-4 md:px-margin-desktop pb-section-gap max-w-[1280px] mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-outline mb-4 block">
              search_off
            </span>
            <p className="font-headline text-headline-md text-on-surface-variant">
              No courses match those filters.
            </p>
            <button
              onClick={() => {
                setActiveLevel("All");
                setActiveSubject("All");
              }}
              className="mt-6 text-primary font-headline text-label-md underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-[32px] overflow-hidden card-shadow border border-outline-variant/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Coloured top section */}
                <div
                  className={`${accentMap[course.accentColor]} p-8 flex items-start justify-between`}
                >
                  <div>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span
                        className={`text-xs font-headline px-3 py-1 rounded-full ${badgeMap[course.badgeColor]}`}
                      >
                        {course.subject}
                      </span>
                      <span className="text-xs font-headline px-3 py-1 rounded-full bg-white/60 text-on-surface">
                        {course.level}
                      </span>
                    </div>
                    <h2 className="font-headline text-headline-lg text-on-surface">
                      {course.name}
                    </h2>
                    <p
                      className={`font-headline text-label-md mt-1 ${textMap[course.textColor]}`}
                    >
                      {course.tagline}
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 ml-4">
                    <span
                      className={`material-symbols-outlined text-3xl ${textMap[course.textColor]}`}
                    >
                      {course.icon}
                    </span>
                  </div>
                </div>

                {/* White body */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-4 mb-6 flex-wrap">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">
                        school
                      </span>
                      <span className="font-headline text-label-md">
                        {course.yearRange}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base">
                        live_tv
                      </span>
                      <span className="font-headline text-label-md">
                        {course.delivery}
                      </span>
                    </div>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="mb-8">
                    <p className="font-headline text-label-md text-on-surface mb-3">
                      Topics Covered:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="bg-surface-container px-3 py-1.5 rounded-full font-headline text-label-md text-on-surface-variant"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href="/contact"
                      className="w-full block text-center bg-primary text-on-primary py-4 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d"
                    >
                      Book a Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section className="bg-surface-container-low border-t border-outline-variant/20 py-20 px-4 md:px-margin-desktop">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-headline text-headline-lg text-on-surface mb-4">
            Not sure which course is right?
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Our advisors offer a free 30-minute consultation to match your child
            with the perfect program.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-headline text-body-lg border-b-4 border-[#3435b0] btn-3d"
          >
            Get Free Advice
          </Link>
        </div>
      </section>
    </div>
  );
}
