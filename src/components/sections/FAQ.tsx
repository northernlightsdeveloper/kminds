// src/components/sections/FAQ.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { faqItems, contactInfo } from "@/data/content";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(
    faqItems.find((f) => f.defaultOpen)?.id ?? null,
  );
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=Hi! I have a question about KMinds.`;

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

              {/* Still got questions → WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-headline text-label-md hover:bg-[#1da851] transition-colors shadow-md border-b-4 border-[#1a9e50] btn-3d"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current shrink-0"
                >
                  <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.01A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 19.471c-.398-.199-2.354-1.162-2.72-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.203-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319 0 1.957 1.426 3.848 1.625 4.113.2.265 2.807 4.285 6.802 6.011.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.364-.265-.762-.464z" />
                </svg>
                Still have questions?
              </a>
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
