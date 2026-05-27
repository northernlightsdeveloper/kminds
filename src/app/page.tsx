// src/app/page.tsx
// HOME PAGE — reorder sections here by moving lines around.

import Hero from "@/components/sections/Hero";
import WhyKminds from "@/components/sections/WhyKminds";
import Testimonials from "@/components/sections/Testimonials";
import Curriculums from "@/components/sections/Curriculums";
import AgeCategories from "@/components/sections/AgeCategories";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyKminds />
      <Testimonials />
      <Curriculums />
      <AgeCategories />
      <Founder />
      <FAQ />
    </>
  );
}
