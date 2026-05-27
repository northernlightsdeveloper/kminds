// src/components/sections/FAQ.tsx
// To add/edit questions: src/data/content.ts (faqItems array)

"use client";

import { useState } from "react";
import { faqItems } from "@/data/content";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(
    faqItems.find((f) => f.defaultOpen)?.id ?? null,
  );
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-headline-lg text-on-surface">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant font-body text-body-md mt-4">
            Everything you need to know about KMinds.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-outline-variant/30 overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 cursor-pointer font-headline text-body-md text-on-surface hover:text-primary transition-colors text-left gap-4"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-on-surface-variant font-body text-body-md leading-relaxed border-t border-outline-variant/10 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
