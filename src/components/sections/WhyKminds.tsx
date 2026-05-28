// src/components/sections/WhyKminds.tsx
import Link from "next/link";
import { whyKminds } from "@/data/content";

const cardStyles = [
  {
    iconBg: "bg-primary-fixed",
    icon: "text-primary",
    num: "text-primary/20",
    accent: "border-l-primary",
  },
  {
    iconBg: "bg-secondary-fixed",
    icon: "text-secondary",
    num: "text-secondary/20",
    accent: "border-l-secondary",
  },
  {
    iconBg: "bg-tertiary-fixed",
    icon: "text-tertiary",
    num: "text-tertiary/20",
    accent: "border-l-tertiary",
  },
  {
    iconBg: "bg-primary-fixed",
    icon: "text-primary",
    num: "text-primary/20",
    accent: "border-l-primary",
  },
];

export default function WhyKminds() {
  return (
    <section
      id="why-kminds"
      className="py-section-gap relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="inline-block bg-secondary-fixed text-secondary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Why KMinds
            </span>
            <h2
              className="font-headline font-extrabold text-on-surface"
              style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
            >
              A Different Kind
              <br />
              of Learning
            </h2>
          </div>
          <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
            KMinds is not just tuition. It&apos;s a structured academic system
            built entirely around your child — their curriculum, their gaps,
            their pace.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {whyKminds.map((item, idx) => {
            const s = cardStyles[idx];
            return (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl p-8 card-shadow border border-outline-variant/20 border-l-4 ${s.accent} hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Big number watermark */}
                <span
                  className={`absolute -top-4 -right-2 font-headline font-black text-8xl ${s.num} select-none pointer-events-none leading-none`}
                >
                  {idx + 1}
                </span>
                <div
                  className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${s.icon}`}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-headline text-headline-md text-on-primary">
              Ready to start?
            </p>
            <p className="font-body text-body-md text-on-primary/80 mt-1">
              Begin with a free academic consultation — no commitment required.
            </p>
          </div>
          <Link
            href="/begin-session"
            className="shrink-0 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-headline text-label-md border-b-4 border-secondary btn-3d whitespace-nowrap"
          >
            Begin a Personalised Session
          </Link>
        </div>
      </div>
    </section>
  );
}
