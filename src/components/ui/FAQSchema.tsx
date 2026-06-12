// src/components/ui/FAQSchema.tsx
// ─────────────────────────────────────────────────────────────
// FAQ SCHEMA — Adds structured data (JSON-LD) for Google rich results.
// This makes your Google search result show expandable Q&A dropdowns.
//
// No visible UI — purely a <script> tag in the page head.
// Pulls questions directly from your content.ts faqItems array
// so you never need to update this separately.
// ─────────────────────────────────────────────────────────────

import { faqItems } from "@/data/content";

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
