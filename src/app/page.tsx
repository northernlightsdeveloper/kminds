// src/app/page.tsx
// ─────────────────────────────────────────────────────────────
// HOME PAGE — This is the main landing page (yoursite.com/).
//
// It simply imports and stacks each section component.
// To reorder sections, just move the lines around.
// To hide a section, comment it out with //
// To add a new section, create it in src/components/sections/
// and import it here.
// ─────────────────────────────────────────────────────────────

import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import AgeCategories from "@/components/sections/AgeCategories";
import Curriculums from "@/components/sections/Curriculums";
import ForParentsAndKids from "@/components/sections/ForParentsAndKids";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      {/* 1. Big hero with headline + CTA */}
      <Hero />

      {/* 2. Scrollable testimonials strip */}
      <Testimonials />

      {/* 3. Curriculum boards (AC, VC, IGCSE, IB) */}
      <Curriculums />

      {/* 4. Three age group cards (Early Explorers, Mind Builders, Future Leaders) */}
      <AgeCategories />

      {/* 5. Split section — benefits for kids and parents */}
      <ForParentsAndKids />

      {/* 6. Founder story + stats */}
      <Founder />

      {/* 7. FAQ accordion */}
      <FAQ />
    </>
  );
}
