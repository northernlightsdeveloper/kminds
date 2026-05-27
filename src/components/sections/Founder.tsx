// src/components/sections/Founder.tsx
// To update: src/data/content.ts (founder object)

import Image from "next/image";
import { founder } from "@/data/content";

export default function Founder() {
  return (
    <section
      id="about"
      className="bg-surface-container-lowest py-section-gap border-y border-outline-variant/30"
    >
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* About headings */}
        <div className="text-center mb-16">
          <span className="text-primary font-headline text-label-md uppercase tracking-widest mb-2 block">
            {founder.eyebrow}
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface max-w-3xl mx-auto">
            {founder.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* ── LEFT: Portrait ──────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container/10 rounded-full blur-3xl" />
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden card-shadow grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={founder.imageSrc}
                  alt="KMinds Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/20">
                <p className="font-headline text-headline-md text-primary">
                  {founder.founderName}
                </p>
                <p className="text-xs text-on-surface-variant font-headline">
                  {founder.founderTitle}
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ──────────────────────────────── */}
          <div className="lg:col-span-3">
            {/* Founder's note */}
            <h3 className="font-headline text-headline-md text-on-surface mb-6">
              Founder&apos;s Note
            </h3>
            <div className="space-y-4 text-on-surface-variant font-body text-body-lg mb-10">
              {founder.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Vision / Mission / Goal */}
            <div className="space-y-4 mb-10">
              {[
                {
                  label: "Our Vision",
                  text: founder.vision,
                  icon: "visibility",
                },
                { label: "Our Mission", text: founder.mission, icon: "flag" },
                { label: "Our Goal", text: founder.goal, icon: "target" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                    <span className="font-headline text-label-md text-primary font-bold">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {founder.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary font-headline">
                    {stat.value}
                  </p>
                  <p className="text-xs font-headline text-label-md text-on-surface-variant uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
