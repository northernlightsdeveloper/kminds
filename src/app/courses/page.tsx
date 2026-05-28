// src/app/courses/page.tsx — All "Begin a Session" buttons → /begin-session
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
  const filtered = courses.filter(
    (c) =>
      (activeLevel === "All" || c.level === activeLevel) &&
      (activeSubject === "All" || c.subject === activeSubject),
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-on-surface relative overflow-hidden py-20 px-4 md:px-margin-desktop">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />
        <div className="relative max-w-[1280px] mx-auto text-center">
          <span className="inline-block bg-white/10 text-inverse-on-surface font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/10">
            Our Programs
          </span>
          <h1
            className="font-headline font-extrabold text-inverse-on-surface mb-6"
            style={{ fontSize: "clamp(2rem,5vw,3rem)" }}
          >
            Find Your{" "}
            <em className="text-secondary-container not-italic">
              Perfect Course
            </em>
          </h1>
          <p className="font-body text-body-lg text-inverse-on-surface/60 max-w-2xl mx-auto">
            Every KMinds course blends live sessions, expert-crafted materials,
            and on-demand recordings to fit your child&apos;s pace.
          </p>
        </div>
      </section>

      {/* Delivery features strip */}
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

      {/* Filters */}
      <section className="px-4 md:px-margin-desktop py-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-headline text-label-md text-on-surface-variant">
              Subject:
            </span>
            {subjectFilters.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSubject(s)}
                className={`px-5 py-2 rounded-full font-headline text-label-md transition-all border ${activeSubject === s ? "bg-primary text-on-primary border-primary" : "bg-white text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"}`}
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
                className={`px-5 py-2 rounded-full font-headline text-label-md transition-all border ${activeLevel === l ? "bg-on-surface text-surface border-on-surface" : "bg-white text-on-surface-variant border-outline-variant hover:border-on-surface hover:text-on-surface"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <p className="font-headline text-label-md text-on-surface-variant mt-4">
          Showing{" "}
          <span className="text-primary font-bold">{filtered.length}</span>{" "}
          courses
        </p>
      </section>

      {/* Course cards */}
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
                {/* Coloured top */}
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
                        {course.yearRange}
                      </span>
                    </div>
                    <h2 className="font-headline text-headline-lg text-on-surface">
                      {course.name}
                    </h2>
                    {/* Tagline italic, no icon */}
                    <p
                      className={`font-headline text-label-md mt-1 italic ${textMap[course.textColor]}`}
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

                {/* Body */}
                <div className="p-8 flex flex-col flex-1">
                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <div className="mb-8">
                    <p className="font-headline text-label-md text-on-surface mb-3">
                      Topics Covered:
                    </p>
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 font-body text-body-md text-on-surface-variant"
                        >
                          <span
                            className={`material-symbols-outlined text-base ${textMap[course.textColor]}`}
                          >
                            check_circle
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    {/* All CTAs → /begin-session */}
                    <Link
                      href="/begin-session"
                      className="w-full block text-center bg-primary text-on-primary py-4 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d"
                    >
                      Begin a Personalised Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-surface-container-low border-t border-outline-variant/20 py-20 px-4 md:px-margin-desktop">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2
            className="font-headline font-extrabold text-on-surface mb-4"
            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
          >
            Not sure which course is right?
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Our advisors offer a free 30-minute consultation to match your child
            with the perfect program.
          </p>
          <Link
            href="/begin-session"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-headline text-body-lg border-b-4 border-[#3435b0] btn-3d"
          >
            Get Free Advice
          </Link>
        </div>
      </section>
    </div>
  );
}
