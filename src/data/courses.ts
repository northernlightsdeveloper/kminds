// src/data/courses.ts
// ─────────────────────────────────────────────────────────────
// COURSES DATA — All course content lives here.
// To add a new course: copy one object and fill in the details.
// To edit: just update the fields below.
// ─────────────────────────────────────────────────────────────

export type CourseLevel = "Early" | "Primary" | "Secondary" | "Senior";
export type CourseSubject = "Maths" | "Science";
export type DeliveryMode = "Live + Recorded" | "Live Sessions" | "Self-Paced";

export interface Course {
  id: number;
  name: string;
  subject: CourseSubject;
  tagline: string;
  description: string;
  level: CourseLevel;
  yearRange: string;
  delivery: DeliveryMode;
  topics: string[];
  icon: string;
  accentColor: string;
  textColor: string;
  badgeColor: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Numberverse",
    subject: "Maths",
    tagline: "Where numbers come alive",
    description:
      "A magical first encounter with numbers, shapes, and patterns. Through stories, songs, and hands-on play, young learners build an unshakeable foundation in early numeracy.",
    level: "Early",
    yearRange: "Prep – Year 2",
    delivery: "Live + Recorded",
    topics: [
      "Counting & Number Sense",
      "Basic Shapes",
      "Patterns",
      "Simple Addition",
    ],
    icon: "auto_awesome",
    accentColor: "bg-secondary-fixed",
    textColor: "text-secondary",
    badgeColor: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: 2,
    name: "Pattern Pioneers",
    subject: "Maths",
    tagline: "Crack the code of the universe",
    description:
      "Students become mathematical detectives, uncovering patterns in multiplication, geometry, and data. Puzzle-based challenges keep every session exciting and brain-stretching.",
    level: "Primary",
    yearRange: "Year 3 – 6",
    delivery: "Live + Recorded",
    topics: [
      "Multiplication & Division",
      "Fractions",
      "Geometry",
      "Data & Graphs",
    ],
    icon: "pattern",
    accentColor: "bg-primary-fixed",
    textColor: "text-primary",
    badgeColor: "bg-primary-container text-on-primary-container",
  },
  {
    id: 3,
    name: "Equation Explorers",
    subject: "Maths",
    tagline: "Algebra, unlocked",
    description:
      "The bridge between arithmetic and higher mathematics. Students conquer algebra, ratios, and geometry through real-world problem solving and visual explanations that actually click.",
    level: "Secondary",
    yearRange: "Year 7 – 10",
    delivery: "Live + Recorded",
    topics: ["Algebra", "Trigonometry", "Statistics", "Linear Equations"],
    icon: "functions",
    accentColor: "bg-tertiary-fixed",
    textColor: "text-tertiary",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    id: 4,
    name: "Calculus Cosmos",
    subject: "Maths",
    tagline: "Master the mathematics of change",
    description:
      "A rigorous yet approachable deep-dive into senior mathematics. From calculus to complex numbers, students are guided by expert educators using precision-crafted slides and live problem-solving sessions.",
    level: "Senior",
    yearRange: "Year 11 – 12",
    delivery: "Live + Recorded",
    topics: [
      "Calculus",
      "Complex Numbers",
      "Proof",
      "Probability & Statistics",
    ],
    icon: "timeline",
    accentColor: "bg-secondary-fixed",
    textColor: "text-secondary",
    badgeColor: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: 5,
    name: "Curious Circuits",
    subject: "Science",
    tagline: "Spark a love for discovery",
    description:
      "Science begins with wonder. Young explorers discover how the world works through simple experiments, animated lessons, and hands-on activities that make every concept tangible and memorable.",
    level: "Early",
    yearRange: "Prep – Year 2",
    delivery: "Live + Recorded",
    topics: [
      "Living Things",
      "Weather & Earth",
      "Light & Sound",
      "Simple Machines",
    ],
    icon: "bolt",
    accentColor: "bg-tertiary-fixed",
    textColor: "text-tertiary",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    id: 6,
    name: "Lab Legends",
    subject: "Science",
    tagline: "Every student a scientist",
    description:
      "Hands-on, experiment-first science learning. Students design experiments, analyse results, and present findings — building both knowledge and scientific thinking that lasts a lifetime.",
    level: "Primary",
    yearRange: "Year 3 – 6",
    delivery: "Live + Recorded",
    topics: [
      "Biology Basics",
      "Chemistry Intro",
      "Forces & Motion",
      "Earth & Space",
    ],
    icon: "science",
    accentColor: "bg-primary-fixed",
    textColor: "text-primary",
    badgeColor: "bg-primary-container text-on-primary-container",
  },
  {
    id: 7,
    name: "Particle Pulse",
    subject: "Science",
    tagline: "Physics and chemistry, demystified",
    description:
      "From atoms to ecosystems, students explore the full breadth of secondary science. Crystal-clear explanations, expert-designed slide decks, and live Q&A sessions make the hardest concepts feel manageable.",
    level: "Secondary",
    yearRange: "Year 7 – 10",
    delivery: "Live + Recorded",
    topics: [
      "Atomic Theory",
      "Chemical Reactions",
      "Forces & Energy",
      "Ecosystems",
    ],
    icon: "bubble_chart",
    accentColor: "bg-secondary-fixed",
    textColor: "text-secondary",
    badgeColor: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: 8,
    name: "Nova Academy",
    subject: "Science",
    tagline: "Senior science, elevated",
    description:
      "Exam-focused, deep-content senior science preparation. Covering Biology, Chemistry, and Physics with past-paper analysis, expert live sessions, and professionally designed study materials.",
    level: "Senior",
    yearRange: "Year 11 – 12",
    delivery: "Live + Recorded",
    topics: [
      "Advanced Biology",
      "Organic Chemistry",
      "Quantum Physics",
      "Exam Technique",
    ],
    icon: "rocket_launch",
    accentColor: "bg-tertiary-fixed",
    textColor: "text-tertiary",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
  },
];

export const levelFilters: ("All" | CourseLevel)[] = [
  "All",
  "Early",
  "Primary",
  "Secondary",
  "Senior",
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
  { icon: "support_agent", label: "Direct Tutor Access" },
  { icon: "workspace_premium", label: "Curriculum Aligned" },
];
