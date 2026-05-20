// src/data/content.ts
// ─────────────────────────────────────────────────────────────
// CONTENT DATA FILE — The single source of truth for all text.
//
// ✅ To change any text on the site, edit it HERE.
// ✅ You don't need to touch the component files for text changes.
// ✅ To add more testimonials, FAQ items, etc. — just add to the arrays.
// ─────────────────────────────────────────────────────────────

// ── NAVIGATION ───────────────────────────────────────────────
export const navLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Parents", href: "#parents" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

// ── HERO SECTION ─────────────────────────────────────────────
export const hero = {
  eyebrow: "Unlocking Every Child's Potential",
  // The word in <em> tags will render in italic + primary color
  headline: "Igniting Young Minds through a",
  headlineAccent: "Kaleidoscope",
  headlineSuffix: "of Learning",
  body: "Discover a vibrant educational journey where imagination meets excellence. We offer personalised curriculums designed to fuel curiosity and build future-ready skills.",
  // CTA = Call To Action (the buttons)
  // When you build a /courses page, change primaryCta.href to "/courses"
  primaryCta: { label: "Explore Programs", href: "/courses" },
  secondaryCta: { label: "Our Story", href: "#about" },
  videoLabel: "Sample Class Recording",
  // Replace this with your own hosted video thumbnail image
  heroImageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCtaJVdf5WP63FxQ4gCiFbgwEGZN4kCwmz0BhIr7ml90nGgI43LISv4L7VNSmz1KWBDFBmQIwzQE8dop04PEnoSqT-H3XtIoPgPcnu4azTZZY1k-yMUs1t3s94edR_FAiaMhUQsYxrApD9lUohdE7KzbelswlTFgHEaBfL-_99bra4CY-HYYpev8bZicO3pmkUYfD8287Dp2rYb22SJnxhFvEl92voLNGfSAM60WIDik4znOJoUQuu5yD9KGKQIFkcFNNajlj8Y2WA",
};

// ── TESTIMONIALS ─────────────────────────────────────────────
// Add more objects to this array to add more testimonial cards.
// 'variant' controls the card color: "light" = white, "dark" = primary purple
export const testimonials = [
  {
    id: 1,
    quote:
      "The curriculum at Kaleidoscopic Minds is exactly what my daughter needed. She's finally excited about math and looks forward to every session!",
    name: "Sarah J.",
    role: "Parent of Year 4 Student",
    avatarColor: "bg-secondary-fixed",
    variant: "light" as const,
  },
  {
    id: 2,
    quote:
      "I love how interactive the lessons are. It doesn't feel like school, it feels like an adventure. I've learned more here than anywhere else.",
    name: "Leo M.",
    role: "Grade 7 Student",
    avatarColor: "bg-primary-fixed-dim",
    variant: "dark" as const,
  },
  {
    id: 3,
    quote:
      "The transition to IGCSE was daunting, but the support here made it seamless. The tutors are truly world-class and very patient.",
    name: "David R.",
    role: "Parent of Year 10 Student",
    avatarColor: "bg-tertiary-fixed",
    variant: "light" as const,
  },
];

// ── AGE CATEGORIES ───────────────────────────────────────────
// The three learning path cards.
// Color styles are defined in AgeCategories.tsx (not here) because
// Tailwind purges dynamic class strings from data files.
// 'icon' is a Material Symbols icon name — browse at:
// https://fonts.google.com/icons
export const ageCategories = [
  {
    id: 1,
    icon: "child_care",
    title: "Early Explorers",
    ageRange: "Ages 1 – 5 Years",
    description:
      "Focusing on sensory play, foundational numeracy, and fostering a love for discovery.",
    href: "#",
  },
  {
    id: 2,
    icon: "architecture",
    title: "Mind Builders",
    ageRange: "Ages 6 – 8 Years",
    description:
      "Building critical thinking skills through logic puzzles, storytelling, and basic science.",
    href: "#",
  },
  {
    id: 3,
    icon: "rocket_launch",
    title: "Future Leaders",
    ageRange: "Ages 9 – 12 Years",
    description:
      "Advanced problem-solving, project-based learning, and academic leadership prep.",
    href: "#",
  },
];

// ── CURRICULUM BOARDS ────────────────────────────────────────
// Add more curriculum cards here as needed.
export const curriculums = [
  { id: 1, code: "AC", name: "Australian Curriculum", icon: "school" },
  { id: 2, code: "VC", name: "Victorian Curriculum", icon: "history_edu" },
  {
    id: 3,
    code: "IGCSE",
    name: "UK Cambridge Int.",
    icon: "workspace_premium",
  },
  { id: 4, code: "IB", name: "International Baccalaureate", icon: "public" },
];

// ── FOR PARENTS & KIDS ───────────────────────────────────────
export const perspectives = [
  {
    id: 1,
    icon: "celebration",
    iconBg: "bg-secondary-container/20",
    iconColor: "text-secondary",
    title: "Pure Joy for Kids",
    body: "Gamified challenges, interactive storytelling, and creative rewards that keep engagement high and boredom at bay.",
  },
  {
    id: 2,
    icon: "monitoring",
    iconBg: "bg-primary-container/20",
    iconColor: "text-primary",
    title: "Peace of Mind for Parents",
    body: "Real-time progress tracking, weekly performance insights, and direct communication channels with expert educators.",
  },
];

// ── FOUNDER SECTION ───────────────────────────────────────────
export const founder = {
  eyebrow: "The Visionary Behind KM",
  headline: "Nurturing curiosity is my lifelong mission.",
  paragraphs: [
    "Founded on the belief that education should be as vibrant as a kaleidoscope, Kaleidoscopic Minds began as a small initiative to bridge the gap between rigid curriculums and the boundless imagination of children.",
    "With over 20 years of experience in educational psychology and curriculum design, I've seen firsthand how a child's potential can be unlocked when they are met with empathy, creativity, and the right intellectual challenge.",
    "Our goal is not just to teach subjects, but to build a foundation of lifelong curiosity and resilience. We don't just prepare kids for exams; we prepare them for the world.",
  ],
  stats: [
    { value: "15k+", label: "Students" },
    { value: "120+", label: "Educators" },
    { value: "48", label: "Awards" },
  ],
  founderName: "Dr. Elena Vance",
  founderTitle: "PhD in Educational Psychology",
  // Replace with your actual founder photo
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCCccehq32S2xTup5U47MSrwuZygTkvE-PdY_GSNLdcEvv4FBb45gNr04e-yMGG_pwzU_MyZCpfh6hyI2ECW9PoqrtmIjNLXMZ3x8ZkhpKDL2G73KF_vIIHmHzmrEfvpQNJ6wwryLnKMuKgQQcepBujy-V6lmv_EtzfPKSIQHUMMbYLHpJMLe9Aa8i3ZHk5ZAmFgXaG3aKxN5oIDU169kfqhYBBKvZN09oBwp_fd9rFb51LHqd_zXktFS-xAofv0fdvouYKW1B8FN8",
};

// ── FAQ ───────────────────────────────────────────────────────
// Add more objects here to add more FAQ items.
// The first item (defaultOpen: true) is expanded on page load.
export const faqItems = [
  {
    id: 1,
    question: "How do I choose the right curriculum for my child?",
    answer:
      "Our educational advisors offer a free 30-minute consultation to assess your child's needs, academic history, and future goals to recommend the most suitable path.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Are the classes live or pre-recorded?",
    answer:
      "We offer a hybrid model. Most of our core modules include live interactive sessions with tutors, complemented by high-quality pre-recorded deep dives and practice modules.",
    defaultOpen: false,
  },
  {
    id: 3,
    question: "Can I switch programs if my child isn't happy?",
    answer:
      "Yes! We prioritise the child's comfort. You can switch between age categories or curriculum tracks within the first two weeks of any term.",
    defaultOpen: false,
  },
];

// ── FOOTER ───────────────────────────────────────────────────
export const footerLinks = {
  explore: [
    { label: "Categories", href: "#categories" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Join Now", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export const contactInfo = {
  email: "hello@kminds.com.au",
  phone: "+61 (0) EDU-KATE",
};
