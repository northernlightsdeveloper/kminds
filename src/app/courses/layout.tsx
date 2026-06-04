import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs | Maths & Science Courses for Years 5–12 | KMinds",
  description:
    "Explore KMinds programs: Number Explorers (Yrs 5–7), Logic Builders (Yrs 8–10), Problem Masters (Yrs 11–12), and Idea Explorers Science. Find the perfect course for your child.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Find Your Perfect Course | KMinds Programs",
    description:
      "Every KMinds course blends live sessions, expert materials, and on-demand recordings. Maths & Science for Years 5–12.",
    url: "https://www.k-minds.com/courses",
    images: [
      {
        url: "/og-courses.jpg",
        width: 1200,
        height: 630,
        alt: "KMinds Course Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Perfect Course | KMinds Programs",
    description:
      "Live sessions, expert slide decks, practice quizzes & direct mentor access.",
    images: ["/og-courses.jpg"],
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
