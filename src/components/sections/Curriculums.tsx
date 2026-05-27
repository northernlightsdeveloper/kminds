// src/components/sections/Curriculums.tsx
import { curriculums } from "@/data/content";

const codeColors = [
  "bg-primary text-on-primary",
  "bg-secondary-container text-on-secondary-container",
  "bg-tertiary-container text-on-tertiary-container",
  "bg-surface-container-highest text-on-surface",
];

export default function Curriculums() {
  return (
    <section
      id="curriculum"
      className="py-section-gap relative overflow-hidden bg-on-surface"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />

      <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-inverse-on-surface font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/10">
            Curriculums
          </span>
          <h2
            className="font-headline font-extrabold text-inverse-on-surface"
            style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
          >
            Global Standards.
            <br />
            Local Understanding.
          </h2>
          <p className="text-inverse-on-surface/60 font-body text-body-md mt-4 max-w-2xl mx-auto">
            Every session is built around your child&apos;s specific curriculum
            — so learning always connects to what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculums.map((curr, idx) => (
            <div
              key={curr.id}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span
                    className={`font-headline font-black text-2xl px-3 py-1 rounded-xl ${codeColors[idx]}`}
                  >
                    {curr.code}
                  </span>
                  <div>
                    <h3 className="font-headline text-headline-md text-inverse-on-surface">
                      📘 {curr.name}
                    </h3>
                    <p className="font-headline text-label-md text-inverse-on-surface/50 mt-0.5">
                      {curr.yearRange}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-body-md text-inverse-on-surface/70 mb-6 leading-relaxed">
                {curr.description}
              </p>

              {/* Points */}
              <ul className="space-y-2.5 mb-6">
                {curr.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-headline text-label-md text-inverse-on-surface/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-white/10 pt-4">
                <p className="text-secondary-container font-headline text-label-md flex items-center gap-2">
                  <span>👉</span> {curr.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
