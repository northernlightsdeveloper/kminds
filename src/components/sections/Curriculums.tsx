// src/components/sections/Curriculums.tsx
// To edit: src/data/content.ts (curriculums array)

import Link from "next/link";
import { curriculums } from "@/data/content";

export default function Curriculums() {
  return (
    <section id="curriculum" className="bg-surface-container py-section-gap">
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-lg text-on-surface">
            Global Curriculums
          </h2>
          <p className="text-on-surface-variant font-body text-body-md mt-4 max-w-2xl mx-auto">
            We align with world-class standards to ensure your child can thrive
            anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {curriculums.map((curr) => (
            <div
              key={curr.id}
              className="bg-white p-8 rounded-3xl card-shadow border border-outline-variant/20 hover:-translate-y-1 transition-transform"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {curr.icon}
                  </span>
                </div>
                <div>
                  <span className="font-headline text-headline-md text-primary">
                    📘 {curr.name}
                  </span>
                  <p className="font-headline text-label-md text-on-surface-variant">
                    {curr.yearRange}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {curr.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                {curr.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-headline text-label-md text-on-surface"
                  >
                    <span className="material-symbols-outlined text-tertiary text-base">
                      check_circle
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Footer note */}
              <p className="text-primary font-headline text-label-md border-t border-outline-variant/20 pt-4">
                👉 {curr.footer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
