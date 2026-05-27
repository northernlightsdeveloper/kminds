// src/components/sections/FAQ.tsx
"use client";
import { useState } from "react";
import { faqItems } from "@/data/content";
import Link from "next/link";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(
    faqItems.find((f) => f.defaultOpen)?.id ?? null,
  );
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="py-section-gap bg-surface-container-low relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />

      <div className="px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left sticky header */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block bg-primary-fixed text-primary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                FAQs
              </span>
              <h2
                className="font-headline font-extrabold text-on-surface mb-4"
                style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-8">
                Everything you need to know about KMinds — from how sessions
                work to how we track progress.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d"
              >
                Still have questions?
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? "border-primary/30 shadow-md" : "border-outline-variant/20"}`}
                >
                  <button
                    className="w-full flex justify-between items-center p-5 text-left gap-4 group"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-headline text-body-md transition-colors ${isOpen ? "text-primary" : "text-on-surface group-hover:text-primary"}`}
                    >
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant"}`}
                    >
                      <span
                        className={`material-symbols-outlined text-base transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        expand_more
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 font-body text-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
