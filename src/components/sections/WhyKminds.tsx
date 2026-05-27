// src/components/sections/WhyKminds.tsx
// To edit: src/data/content.ts (whyKminds array)

import Link from "next/link";
import { whyKminds } from "@/data/content";

// Static icon background + text colors — full strings for Tailwind
const cardStyles = [
  {
    iconBg: "bg-primary-fixed",
    icon: "text-primary",
    border: "border-primary-fixed",
  },
  {
    iconBg: "bg-secondary-fixed",
    icon: "text-secondary",
    border: "border-secondary-fixed",
  },
  {
    iconBg: "bg-tertiary-fixed",
    icon: "text-tertiary",
    border: "border-tertiary-fixed",
  },
  {
    iconBg: "bg-primary-fixed",
    icon: "text-primary",
    border: "border-primary-fixed",
  },
];

export default function WhyKminds() {
  return (
    <section
      id="why-kminds"
      className="bg-surface-container-low py-section-gap border-y border-outline-variant/20"
    >
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-headline text-label-md uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface">
            A Different Kind of Learning
          </h2>
          <p className="text-on-surface-variant font-body text-body-md mt-4 max-w-2xl mx-auto">
            KMinds is not just tuition. It&apos;s a structured academic system
            built around your child.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyKminds.map((item, idx) => {
            const s = cardStyles[idx];
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl p-8 card-shadow border-t-4 ${s.border} hover:-translate-y-2 transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${s.icon}`}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-headline text-body-md border-b-4 border-[#3435b0] btn-3d"
          >
            Begin a Personalised Session
          </Link>
        </div>
      </div>
    </section>
  );
}
