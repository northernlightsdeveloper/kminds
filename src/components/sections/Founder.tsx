// src/components/sections/Founder.tsx
import Image from "next/image";
import { founder } from "@/data/content";

export default function Founder() {
  return (
    <section
      id="about"
      className="py-section-gap relative overflow-hidden bg-surface"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-container/10 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary-fixed text-secondary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            {founder.eyebrow}
          </span>
          <h2
            className="font-headline font-extrabold text-on-surface max-w-3xl mx-auto"
            style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
          >
            {founder.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[48px] blur-xl" />
              <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={founder.imageSrc}
                  alt="KMinds Founder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Name card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl border border-outline-variant/20 text-center w-[80%]">
                <p className="font-headline text-label-md text-primary font-bold">
                  {founder.founderName}
                </p>
                <p className="text-xs text-on-surface-variant font-headline mt-0.5">
                  {founder.founderTitle}
                </p>
              </div>
            </div>

            {/* Stats below portrait */}
            <div className="flex justify-around mt-16 pt-6">
              {founder.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-headline font-black text-3xl text-primary">
                    {stat.value}
                  </p>
                  <p className="font-headline text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h3 className="font-headline text-headline-md text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  format_quote
                </span>
                Founder&apos;s Note
              </h3>
              <div className="space-y-4 text-on-surface-variant font-body text-body-lg leading-relaxed pl-4 border-l-2 border-secondary-container">
                {founder.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Vision / Mission / Goal */}
            <div className="space-y-4">
              {[
                {
                  label: "Our Vision",
                  text: founder.vision,
                  icon: "visibility",
                  bg: "bg-primary-fixed",
                  ic: "text-primary",
                },
                {
                  label: "Our Mission",
                  text: founder.mission,
                  icon: "flag",
                  bg: "bg-secondary-fixed",
                  ic: "text-secondary",
                },
                {
                  label: "Our Goal",
                  text: founder.goal,
                  icon: "my_location",
                  bg: "bg-tertiary-fixed",
                  ic: "text-tertiary",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 bg-surface-container-low rounded-2xl border border-outline-variant/20 hover:border-primary/20 transition-colors"
                >
                  <div
                    className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <span className={`material-symbols-outlined ${item.ic}`}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-headline text-label-md text-on-surface font-bold mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-body-md text-on-surface-variant">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
