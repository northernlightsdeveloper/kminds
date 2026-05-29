// src/data/content.ts — Single source of truth for all site text.

export const navLinks = [
  {
    label: "Why KMinds",
    href: "/#why-kminds",
    dropdown: [
      { label: "Customised Learning", href: "/customised-learning" },
      { label: "Reviews", href: "/#testimonials" },
    ],
  },
  {
    label: "Curriculums",
    href: "/#curriculum",
    dropdown: [
      { label: "Australian Curriculum (AC)", href: "/#curriculum" },
      { label: "Victorian Curriculum (VC)", href: "/#curriculum" },
      { label: "IGCSE", href: "/#curriculum" },
      { label: "IB", href: "/#curriculum" },
    ],
  },
  {
    label: "Programs",
    href: "/courses",
    dropdown: [
      { label: "Years 5–7", href: "/courses" },
      { label: "Years 8–10", href: "/courses" },
      { label: "Years 11–12", href: "/courses" },
    ],
  },
  { label: "FAQs", href: "/#faq", dropdown: [] },
  { label: "About Us", href: "/#about", dropdown: [] },
];

// ── REPLACE the `hero` export in src/data/content.ts with this ──

export const hero = {
  brandName: "Kaleidoscopic Minds",
  tagline: "Where Potential Becomes Performance",
  subTagline: "Clarity. Confidence. Academic Excellence.",
  body: "A structured learning experience designed for students who aim higher.",
  primaryCta: { label: "Begin a Personalised Session", href: "/begin-session" },
  secondaryCta: { label: "Explore Programs", href: "/courses" },

  // ── VIDEOS ────────────────────────────────────────────────────────────────
  heroVideos: [
    {
      src: "https://res.cloudinary.com/dimqweehx/video/upload/v1780045098/WhatsApp_Video_2026-05-29_at_14.19.12_zcdou3.mp4",
      label: "Live Class",
      icon: "cast_for_education",
    },
    {
      // Replace with your second Cloudinary video URL
      src: "https://res.cloudinary.com/dimqweehx/video/upload/v1780045509/Screen_Recording_2026-03-11_141436_zr8qed.mp4",
      label: "Real Results",
      icon: "emoji_events",
    },
  ],
  heroVideoSrc:
    "https://res.cloudinary.com/dimqweehx/video/upload/v1780045098/WhatsApp_Video_2026-05-29_at_14.19.12_zcdou3.mp4",
  videoLabel: "Live Class",
};

export const testimonialsSection = {
  headline: "Trusted by Parents. Valued by Students.",
};

export const testimonials = [
  {
    id: 1,
    name: "Mr. John Joseph",
    role: "Parent of Year 10 Student",
    quote:
      "I would like to say how beneficial the K-Minds program has been for my child. He has been with K-Minds for a year now and his school performance has increased tremendously. He is more engaged in his school work and getting better grades. K-Minds tutors go above and beyond to make sure he understands topics before moving on. They are kind and very understanding. Highly recommend.",
    stars: 5,
    avatarColor: "bg-primary-fixed-dim",
    variant: "light" as const,
  },
  {
    id: 2,
    name: "Pretty",
    role: "Parent of Year 10 Student",
    quote:
      "As a parent of a year 10 student who has completed 200 classes with K-Minds, I highly recommend K-Minds for anyone seeking effective and supportive academic help. The tutors are knowledgeable, patient, and adaptable, providing personalized attention that leads to real improvements in both grades and confidence. Highly recommended for their quality and proven results.",
    stars: 5,
    avatarColor: "bg-secondary-fixed",
    variant: "dark" as const,
  },
  {
    id: 3,
    name: "Kitty Khattar",
    role: "Parent of Year 7 Student",
    quote:
      "Tavish received an A- in Semester 1 and an A in Semester 2 for Science. We are so proud of how far he has come, especially since this is his first year of high school at one of the top schools in the state. Your guidance, patience, and way of teaching have made such a big difference. We truly can't thank you enough.",
    stars: 5,
    avatarColor: "bg-tertiary-fixed",
    variant: "light" as const,
  },
  {
    id: 4,
    name: "Zeynab",
    role: "Science Student",
    quote:
      "I just wanted to say that I finished my bio exam and it went quite well — it was easier than I expected, which was a nice surprise. Once again thank you so much for being such a great teacher. I really enjoyed being your student!",
    stars: 5,
    avatarColor: "bg-primary-fixed",
    variant: "light" as const,
  },
  {
    id: 5,
    name: "Mrs. Anita Sharma",
    role: "Parent of Year 9 Student",
    quote:
      "K-Minds has been a turning point for my son. The one-on-one attention and structured approach made a huge difference — he went from dreading exams to feeling genuinely prepared and confident.",
    stars: 5,
    avatarColor: "bg-tertiary-fixed-dim",
    variant: "light" as const,
  },
];

export const curriculums = [
  {
    id: 1,
    code: "AC",
    icon: "school",
    name: "Australian Curriculum",
    yearRange: "Years 5–12",
    description:
      "A structured academic pathway aligned with national standards, designed to build strong fundamentals and consistent performance across all year levels.",
    points: [
      "Concept-focused learning approach",
      "Aligned with school assessments",
      "Progressive skill development",
      "Regular performance tracking",
    ],
    footer: "Designed for clarity, consistency, and long-term academic growth.",
  },
  {
    id: 2,
    code: "VC",
    icon: "history_edu",
    name: "Victorian Curriculum",
    yearRange: "Years 5–12",
    description:
      "Tailored to meet the Victorian framework, this pathway ensures students stay aligned with school expectations while strengthening core academic skills.",
    points: [
      "Curriculum-mapped lesson structure",
      "Assessment-oriented preparation",
      "Focus on analytical thinking",
      "Continuous progress monitoring",
    ],
    footer: "Built to support both academic understanding and exam readiness.",
  },
  {
    id: 3,
    code: "IGCSE",
    icon: "workspace_premium",
    name: "IGCSE",
    yearRange: "Years 5–10",
    description:
      "An internationally recognised curriculum that emphasises deep conceptual understanding and structured exam preparation.",
    points: [
      "Strong focus on core concepts",
      "Global academic standards",
      "Exam-focused learning strategy",
      "Application-based problem solving",
    ],
    footer:
      "Ideal for students aiming for clarity and strong academic outcomes.",
  },
  {
    id: 4,
    code: "IB",
    icon: "public",
    name: "International Baccalaureate",
    yearRange: "Years 5–10",
    description:
      "A holistic, inquiry-based learning pathway that develops critical thinking and independent learning skills.",
    points: [
      "Inquiry-led learning approach",
      "Real-world concept application",
      "Emphasis on analytical thinking",
      "Structured academic progression",
    ],
    footer: "Designed to build confident, independent learners.",
  },
];

export const ageCategories = [
  {
    id: 1,
    icon: "foundation",
    title: "Early Foundations",
    ageRange: "Years 5–7",
    tagline: "Where strong learners are built",
    description:
      "Building the essential academic foundations with concept clarity, logical thinking, and guided progress tracking that sets students up for long-term success.",
    points: [
      "Concept clarity & logical thinking",
      "Strong academic foundations",
      "Guided progress tracking",
    ],
    href: "/courses",
  },
  {
    id: 2,
    icon: "trending_up",
    title: "Academic Advancement",
    ageRange: "Years 8–10",
    tagline: "Where performance begins to matter",
    description:
      "Strengthening fundamentals and shifting focus toward exam-ready performance, with regular assessments and structured feedback to drive real improvement.",
    points: [
      "Strengthened fundamentals",
      "Exam-focused preparation",
      "Regular assessments & feedback",
    ],
    href: "/courses",
  },
  {
    id: 3,
    icon: "emoji_events",
    title: "Senior Excellence",
    ageRange: "Years 11–12",
    tagline: "Where outcomes define direction",
    description:
      "Intensive, outcome-driven preparation for senior students — advanced concept mastery, revision strategies, and detailed performance tracking for decisive results.",
    points: [
      "Advanced concept mastery",
      "Intensive practice & revision",
      "Detailed performance tracking",
    ],
    href: "/courses",
  },
];

export const whyKminds = [
  {
    id: 1,
    icon: "person_pin",
    title: "Personalised to Each Student",
    body: "No two students are the same. Every learning plan is built around the individual — their curriculum, year level, strengths, and gaps.",
  },
  {
    id: 2,
    icon: "track_changes",
    title: "Structured & Outcome-Driven",
    body: "Our sessions are focused, methodical, and designed for measurable academic improvement — not just completion of content.",
  },
  {
    id: 3,
    icon: "verified",
    title: "Qualified Mentors",
    body: "All mentors are carefully selected, trained, and aligned with the specific curriculum requirements of each student.",
  },
  {
    id: 4,
    icon: "insights",
    title: "Progress You Can See",
    body: "Regular assessments, performance reports, and continuous feedback keep both students and parents informed at every stage.",
  },
];

export const founder = {
  eyebrow: "About Kaleidoscopic Minds",
  headline: "Every mind is unique. We build the system around it.",
  paragraphs: [
    "I began teaching over a decade ago, working across multiple learning systems and platforms. Over time, one thing became clear — most models focus on delivering more classes, not better learning. Students are often placed into fixed structures, regardless of what they truly need.",
    "KMinds was created to change that. The name Kaleidoscopic Minds comes from a simple belief: every child thinks differently. Each mind is a unique blend of ideas, perspectives, and potential — much like a kaleidoscope. When guided in the right way, that complexity becomes clarity.",
    "At KMinds, we don't fit students into a system — we build the system around them.",
  ],
  vision:
    "To redefine academic learning through clarity, confidence, and long-term success.",
  mission:
    "To deliver structured, personalised learning that adapts to each student and drives measurable academic outcomes.",
  goal: "To build a globally trusted platform that supports diverse learning styles across leading curricula — while staying consistent in quality, structure, and results.",
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "4", label: "Curriculums" },
    { value: "1:1", label: "Sessions" },
  ],
  founderName: "Khadija Topiwala",
  founderTitle: "Founder, Kaleidoscopic Minds",
  imageSrc:
    "https://res.cloudinary.com/dimqweehx/image/upload/v1780039357/WhatsApp_Image_2026-05-29_at_10.52.05_svfzfp.jpg",
};

export const faqItems = [
  {
    id: 1,
    question: "How is KMinds different from regular tuition?",
    answer:
      "KMinds offers a structured, personalised academic system rather than generic group tuition, focusing on measurable outcomes.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Do you follow the school curriculum?",
    answer:
      "Yes, all sessions are aligned with the student's curriculum — Australian, Victorian, IGCSE, or IB.",
    defaultOpen: false,
  },
  {
    id: 3,
    question: "What grades do you cover?",
    answer: "We work with students from Years 5 to 12 across most curricula.",
    defaultOpen: false,
  },
  {
    id: 4,
    question: "How are sessions conducted?",
    answer:
      "Sessions are conducted live, online, with focused mentor interaction and structured lesson plans.",
    defaultOpen: false,
  },
  {
    id: 5,
    question: "Are sessions one-on-one or group-based?",
    answer: "We offer one-to-one sessions.",
    defaultOpen: false,
  },
  {
    id: 6,
    question: "How do you track progress?",
    answer:
      "Through regular assessments, performance reports, and continuous mentor feedback.",
    defaultOpen: false,
  },
  {
    id: 7,
    question: "Can parents monitor progress?",
    answer: "Yes, parents receive clear updates and performance insights.",
    defaultOpen: false,
  },
  {
    id: 8,
    question: "How often are sessions held?",
    answer: "Frequency depends on the student's personalised learning plan.",
    defaultOpen: false,
  },
  {
    id: 9,
    question: "Do you provide homework or practice?",
    answer: "Yes, structured practice is part of the learning system.",
    defaultOpen: false,
  },
  {
    id: 10,
    question: "What subjects do you cover?",
    answer:
      "Primarily Mathematics and Science, with expansion based on demand.",
    defaultOpen: false,
  },
  {
    id: 11,
    question: "How do you ensure concept clarity?",
    answer:
      "By focusing on understanding before practice, supported by mentor guidance.",
    defaultOpen: false,
  },
  {
    id: 12,
    question: "Is there an initial assessment?",
    answer:
      "Yes, we begin with an academic evaluation to understand the student's requirements.",
    defaultOpen: false,
  },
  {
    id: 13,
    question: "What is the teaching approach?",
    answer: "Concept-first, structured, and outcome-driven.",
    defaultOpen: false,
  },
  {
    id: 14,
    question: "Are mentors qualified?",
    answer:
      "All mentors are carefully selected and trained to deliver structured learning.",
    defaultOpen: false,
  },
  {
    id: 15,
    question: "What if a student misses a session?",
    answer: "Make-up sessions or adjustments are provided where applicable.",
    defaultOpen: false,
  },
  {
    id: 16,
    question: "How soon can we see results?",
    answer:
      "Most parents notice improvement within a few months of consistent sessions.",
    defaultOpen: false,
  },
  {
    id: 17,
    question: "Is KMinds suitable for high-performing students?",
    answer:
      "Yes, we help both struggling and advanced students reach their potential.",
    defaultOpen: false,
  },
  {
    id: 18,
    question: "How do we get started?",
    answer:
      "You can begin with a personalised academic consultation — free of cost.",
    defaultOpen: false,
  },
  {
    id: 19,
    question: "Is there a long-term commitment?",
    answer: "Plans are flexible and based on student needs.",
    defaultOpen: false,
  },
  {
    id: 20,
    question: "Do you prepare for exams?",
    answer: "Yes, we include structured exam preparation within every program.",
    defaultOpen: false,
  },
];

export const footerLinks = {
  explore: [
    { label: "Why KMinds", href: "/#why-kminds" },
    { label: "Customised Learning", href: "/customised-learning" },
    { label: "Programs", href: "/courses" },
    { label: "Curriculums", href: "/#curriculum" },
    { label: "FAQs", href: "/#faq" },
  ],
  support: [
    { label: "Begin a Session", href: "/begin-session" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export const contactInfo = {
  email: "kaleidoscopicminds.kl@gmail.com",
  phone: "+91 6267 000 755",
  whatsapp: "916267000755",
};
