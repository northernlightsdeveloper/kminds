// src/data/courses.ts — Real course content for KMinds

export type CourseLevel = "Early" | "Primary" | "Secondary" | "Senior";
export type CourseSubject = "Maths" | "Science";

export interface Course {
  id: number;
  name: string;
  subject: CourseSubject;
  tagline: string;
  description: string;
  level: CourseLevel;
  yearRange: string;
  topics: string[];
  icon: string;
  accentColor: string;
  textColor: string;
  badgeColor: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Number Explorers",
    subject: "Maths",
    tagline: "Building Strong Foundations",
    description:
      "A structured introduction to core mathematical concepts, designed to build confidence and clarity from the ground up.",
    level: "Early",
    yearRange: "Years 5–7",
    topics: [
      "Number sense & arithmetic",
      "Fractions, decimals & percentages",
      "Introductory algebra & geometry",
    ],
    icon: "calculate",
    accentColor: "bg-secondary-fixed",
    textColor: "text-secondary",
    badgeColor: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: 2,
    name: "Logic Builders",
    subject: "Maths",
    tagline: "Strengthening Concepts & Application",
    description:
      "Moving beyond the basics, students develop analytical thinking and problem-solving skills across key mathematical domains.",
    level: "Primary",
    yearRange: "Years 8–10",
    topics: [
      "Algebra, equations & trigonometry",
      "Geometry & mensuration",
      "Statistics & probability",
    ],
    icon: "functions",
    accentColor: "bg-primary-fixed",
    textColor: "text-primary",
    badgeColor: "bg-primary-container text-on-primary-container",
  },
  {
    id: 3,
    name: "Problem Masters",
    subject: "Maths",
    tagline: "Advanced Mathematics & Precision",
    description:
      "Rigorous, exam-focused senior mathematics preparation with expert guidance on the most challenging topics.",
    level: "Secondary",
    yearRange: "Years 11–12",
    topics: [
      "Functions, calculus & advanced algebra",
      "Trigonometry — advanced applications",
      "Probability & statistics",
    ],
    icon: "timeline",
    accentColor: "bg-tertiary-fixed",
    textColor: "text-tertiary",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    id: 4,
    name: "Idea Explorers",
    subject: "Science",
    tagline: "Exploring Scientific Foundations",
    description:
      "Science begins with curiosity. Students explore fundamental concepts across physics, chemistry, and biology through clear, structured sessions.",
    level: "Early",
    yearRange: "Years 5–7",
    topics: [
      "Basics of physics, chemistry & biology",
      "Matter, energy & environment",
      "Everyday science applications",
    ],
    icon: "science",
    accentColor: "bg-tertiary-fixed",
    textColor: "text-tertiary",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    id: 5,
    name: "Concept Navigators",
    subject: "Science",
    tagline: "Concept Development & Application",
    description:
      "A comprehensive deep-dive into secondary science, building strong conceptual understanding across all three core disciplines.",
    level: "Primary",
    yearRange: "Years 8–10",
    topics: [
      "Physics — motion, energy, electricity",
      "Chemistry — reactions, elements",
      "Biology — cells, systems, processes",
    ],
    icon: "bubble_chart",
    accentColor: "bg-secondary-fixed",
    textColor: "text-secondary",
    badgeColor: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: 6,
    name: "Critical Thinkers",
    subject: "Science",
    tagline: "Advanced Science & Mastery",
    description:
      "Senior science preparation with a focus on analytical thinking, application-based learning, and exam readiness across advanced topics.",
    level: "Secondary",
    yearRange: "Years 11–12",
    topics: [
      "Subject-focused advanced topics",
      "Analytical & application-based learning",
      "Exam readiness & precision",
    ],
    icon: "biotech",
    accentColor: "bg-primary-fixed",
    textColor: "text-primary",
    badgeColor: "bg-primary-container text-on-primary-container",
  },
];

export const levelFilters: ("All" | CourseLevel)[] = [
  "All",
  "Early",
  "Primary",
  "Secondary",
];
export const subjectFilters: ("All" | CourseSubject)[] = [
  "All",
  "Maths",
  "Science",
];

export const deliveryFeatures = [
  { icon: "live_tv", label: "Live Interactive Sessions" },
  { icon: "play_circle", label: "Recorded Lessons On-Demand" },
  { icon: "slideshow", label: "Expert-Designed Slide Decks" },
  { icon: "quiz", label: "Practice Quizzes & Tests" },
  { icon: "support_agent", label: "Direct Mentor Access" },
  { icon: "workspace_premium", label: "Curriculum Aligned" },
];
