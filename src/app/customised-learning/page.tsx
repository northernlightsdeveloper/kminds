// src/app/customised-learning/page.tsx
// Full page for the "Customised Learning" dropdown link

import Link from "next/link";

const sections = [
  {
    emoji: "🎯",
    title: "A Truly Personalised Approach",
    subtitle:
      "Every learning journey is designed around the student — not the syllabus alone.",
    points: [
      "Tailored learning pathways based on individual needs",
      "Continuous adaptation as the student progresses",
      "Focus on both strengths and improvement areas",
    ],
    italic: "The right guidance, at the right time.",
  },
  {
    emoji: "👩‍🏫",
    title: "Live, Face-to-Face Online Learning",
    subtitle: "Structured, interactive sessions — conducted entirely online.",
    points: [
      "Real-time mentor interaction",
      "Guided problem-solving during sessions",
      "Concept explanation + application",
      "Use of collaborative tools (whiteboard, audio, video)",
    ],
    italic: "Focused learning, without the need to travel.",
  },
  {
    emoji: "🧩",
    title: "Structured Learning Experience",
    subtitle: "Every session follows a clear, effective flow:",
    points: [
      "Concept clarity",
      "Guided practice",
      "Application & problem-solving",
      "Feedback & refinement",
    ],
    italic: "Consistency creates confidence.",
  },
  {
    emoji: "📝",
    title: "Practice That Builds Mastery",
    subtitle: "Learning doesn't stop after the session.",
    points: [
      "Targeted practice exercises",
      "Concept-based worksheets",
      "Gradual progression in difficulty",
    ],
    italic: "Reinforcing understanding, not memorisation.",
  },
  {
    emoji: "📊",
    title: "Progress Tracking & Parent Visibility",
    subtitle:
      "We believe clarity matters as much to parents as it does to students.",
    points: [
      "Feedback after every session",
      "Regular progress updates",
      "Clear performance insights",
      "No guesswork — only measurable growth",
    ],
    italic: null,
  },
  {
    emoji: "🗓️",
    title: "Flexible Scheduling",
    subtitle: "Designed to fit real family routines.",
    points: [
      "Available 6 days a week: Monday – Saturday",
      "Timings: 10:30 AM – 5:00 PM IST / 2:30 PM – 10:30 PM AEST",
      "Easy rescheduling options",
    ],
    italic: "Learning that adapts to your schedule.",
  },
  {
    emoji: "🌐",
    title: "Learn From Anywhere",
    subtitle: "All sessions are conducted 100% online.",
    points: ["No travel", "No waiting", "No disruption"],
    italic: "A seamless learning environment, wherever you are.",
  },
];

const cardColors = [
  "border-l-primary bg-primary-fixed/30",
  "border-l-secondary bg-secondary-fixed/30",
  "border-l-tertiary bg-tertiary-fixed/30",
  "border-l-primary bg-primary-fixed/30",
  "border-l-secondary bg-secondary-fixed/30",
  "border-l-tertiary bg-tertiary-fixed/30",
  "border-l-primary bg-primary-fixed/30",
];

export default function CustomisedLearningPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative bg-on-surface overflow-hidden py-24 px-4 md:px-margin-desktop">
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />
        <div className="relative max-w-[1280px] mx-auto text-center">
          <span className="inline-block bg-white/10 text-inverse-on-surface font-headline text-label-md px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest border border-white/10">
            Our Approach
          </span>
          <h1
            className="font-headline font-extrabold text-inverse-on-surface mb-6"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}
          >
            Customised Learning at
            <br />
            <span className="text-secondary-container">
              Kaleidoscopic Minds
            </span>
          </h1>
          <p className="font-headline text-headline-md text-inverse-on-surface/70 mb-4 max-w-2xl mx-auto">
            Every Mind is Different. Every Path Should Be Too.
          </p>
          <p className="font-body text-body-lg text-inverse-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            At Kaleidoscopic Minds, we believe learning is not linear. Each
            student brings a unique way of thinking — a different pattern, pace,
            and perspective. Our role is simple:
          </p>
          <p className="font-headline text-headline-md text-secondary-container mt-4 italic">
            To understand that pattern and build a system around it.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-section-gap px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, idx) => (
            <div
              key={sec.title}
              className={`bg-white rounded-3xl p-8 card-shadow border border-outline-variant/20 border-l-4 ${cardColors[idx]} hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{sec.emoji}</div>
              <h2 className="font-headline text-headline-md text-on-surface mb-3">
                {sec.title}
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mb-5 leading-relaxed">
                {sec.subtitle}
              </p>
              <ul className="space-y-2.5 mb-5">
                {sec.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 font-body text-body-md text-on-surface"
                  >
                    <span className="material-symbols-outlined text-tertiary text-base mt-0.5 shrink-0">
                      check_circle
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              {sec.italic && (
                <p className="font-headline text-label-md text-primary italic border-t border-outline-variant/20 pt-4">
                  {sec.italic}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-primary rounded-3xl p-10 text-center">
          <h2
            className="font-headline font-extrabold text-on-primary mb-3"
            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
          >
            Ready to experience the difference?
          </h2>
          <p className="font-body text-body-lg text-on-primary/80 mb-8 max-w-lg mx-auto">
            Begin with a free personalised consultation — no commitment
            required.
          </p>
          <Link
            href="/begin-session"
            className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-headline text-body-md border-b-4 border-secondary btn-3d"
          >
            Begin a Personalised Session
            <span className="material-symbols-outlined text-xl">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
