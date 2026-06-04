// src/app/page.tsx
// HOME PAGE — reorder sections here by moving lines around.

import Hero from "@/components/sections/Hero";
import WhyKminds from "@/components/sections/WhyKminds";
import Testimonials from "@/components/sections/Testimonials";
import Curriculums from "@/components/sections/Curriculums";
import AgeCategories from "@/components/sections/AgeCategories";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Kaleidoscopic Minds",
            url: "https://www.k-minds.com",
            description:
              "Personalised 1-on-1 online tutoring in Maths and Science for Years 5–12",
            founder: { "@type": "Person", name: "Khadija A." },
          }),
        }}
      />
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
