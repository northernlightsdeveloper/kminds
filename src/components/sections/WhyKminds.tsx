// src/components/sections/WhyKminds.tsx
// To edit: src/data/content.ts (whyKminds array)

import Link from "next/link";
import { whyKminds } from "@/data/content";

const iconColors = [
  "text-primary",
  "text-secondary",
  "text-tertiary",
  "text-primary",
];
const bgColors = [
  "bg-primary-fixed",
  "bg-secondary-fixed",
  "bg-tertiary-fixed",
  "bg-primary-fixed",
];

export default function WhyKminds() {
  return (
    <section id="why-kminds" className="bg-on-surface py-section-gap">
      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-headline text-label-md uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-headline text-headline-lg text-inverse-on-surface">
            A Different Kind of Learning
          </h2>
          <p className="text-inverse-on-surface/70 font-body text-body-md mt-4 max-w-2xl mx-auto">
            KMinds is not just tuition. It&apos;s a structured academic system
            built around your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyKminds.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div
                className={`w-14 h-14 ${bgColors[idx]} rounded-2xl flex items-center justify-center mb-6`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${iconColors[idx]}`}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-inverse-on-surface mb-3">
                {item.title}
              </h3>
              <p className="font-body text-body-md text-inverse-on-surface/70 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA inside Why section */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-headline text-body-md border-b-4 border-secondary btn-3d"
          >
            Begin a Personalised Session
          </Link>
        </div>
      </div>
    </section>
  );
}
