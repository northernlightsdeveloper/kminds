// src/components/sections/FAQ.tsx
// ─────────────────────────────────────────────────────────────
// FAQ — Accordion of frequently asked questions.
//
// To add/edit questions: → src/data/content.ts (faqItems array)
//
// This uses React state to handle open/close toggling.
// 'use client' is required because of useState.
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import { faqItems } from "@/data/content";

export default function FAQ() {
  // Track which FAQ item is open by its id.
  // null = all closed. A number = that item's id is open.
  const [openId, setOpenId] = useState<number | null>(
    // Find the first item marked defaultOpen, and start with it open
    faqItems.find((f) => f.defaultOpen)?.id ?? null
  );

  // Toggle: if clicking the already-open item, close it; else open the new one
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-headline-lg text-on-surface mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* ── ACCORDION ITEMS ───────────────────────────── */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-outline-variant/30 overflow-hidden"
              >
                {/* Question row (clickable) */}
                <button
                  className="w-full flex justify-between items-center p-6 cursor-pointer font-headline text-headline-md text-on-surface hover:text-primary transition-colors text-left"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  {/* Chevron rotates 180° when open */}
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Answer — conditionally rendered */}
                {isOpen && (
                  <div className="px-6 pb-6 text-on-surface-variant font-body text-body-md leading-relaxed border-t border-outline-variant/10 pt-4">
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
