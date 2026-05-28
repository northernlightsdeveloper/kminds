// src/app/begin-session/page.tsx
// ─────────────────────────────────────────────────────────────
// BEGIN A SESSION — Registration form page.
// ALL CTAs across the site point here.
// On submit → redirects to /thank-you
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { contactInfo } from "@/data/content";

const curriculums = [
  "Australian Curriculum (AC)",
  "Victorian Curriculum (VC)",
  "IGCSE",
  "IB",
  "Other",
];
const grades = [
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
];
const subjects = [
  "Mathematics",
  "Science",
  "Both Mathematics & Science",
  "Other",
];
const countries = [
  "Australia",
  "India",
  "United Kingdom",
  "United States",
  "Singapore",
  "New Zealand",
  "Other",
];

export default function BeginSessionPage() {
  const router = useRouter();
  const [userType, setUserType] = useState<"parent" | "student">("parent");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    curriculum: "",
    grade: "",
    subject: "",
    preferredDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.fullName || !form.email || !form.phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }
    setLoading(true);
    // Simulate submission delay — replace with real API call later
    await new Promise((r) => setTimeout(r, 1200));
    router.push("/thank-you");
  };

  const inputClass =
    "w-full bg-surface-container-low border border-outline-variant rounded-2xl px-5 py-4 font-body text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all";
  const labelClass = "block font-headline text-label-md text-on-surface mb-2";

  return (
    <div className="min-h-screen bg-surface geo-bg">
      {/* Decorative blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-2xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-headline text-label-md mb-8 transition-colors"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            Back to Home
          </Link>
          <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              school
            </span>
          </div>
          <h1
            className="font-headline font-extrabold text-on-surface mb-3"
            style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
          >
            Begin Your Learning Journey
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            Please fill in the details below and our team will get in touch with
            you shortly to schedule your personalised session.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-[32px] p-8 md:p-10 card-shadow border border-outline-variant/20">
          {/* User type toggle */}
          <div className="mb-8">
            <p className={labelClass}>I am a:</p>
            <div className="grid grid-cols-2 gap-4">
              {(["parent", "student"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`flex items-center justify-center gap-3 py-4 rounded-2xl border-2 font-headline text-label-md transition-all ${
                    userType === type
                      ? "border-primary bg-primary-fixed text-primary"
                      : "border-outline-variant text-on-surface-variant hover:border-primary/40"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">
                    {type === "parent" ? "family_restroom" : "person"}
                  </span>
                  {type === "parent" ? "Parent" : "Student"}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className={labelClass}>
                Full Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>
                Email Address <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>
                Phone Number <span className="text-error">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+61 400 000 000"
                className={inputClass}
              />
              <p className="mt-2 font-body text-xs text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[#25D366] text-sm">
                  chat
                </span>
                We will contact you via WhatsApp or Email regarding your session
                details.
              </p>
            </div>

            {/* Country */}
            <div>
              <label className={labelClass}>Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select your country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Curriculum */}
            <div>
              <label className={labelClass}>Curriculum</label>
              <select
                name="curriculum"
                value={form.curriculum}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select curriculum</option>
                {curriculums.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Grade */}
            <div>
              <label className={labelClass}>Grade / Year Level</label>
              <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select year level</option>
                {grades.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className={labelClass}>Subject Required</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className={labelClass}>Preferred Class Date</label>
              <input
                type="text"
                name="preferredDate"
                value={form.preferredDate}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                className={inputClass}
              />
              <p className="mt-1.5 font-body text-xs text-on-surface-variant">
                Format: Day/Month/Year (e.g. 15/07/2025)
              </p>
            </div>

            {/* Submit button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-primary text-on-primary py-5 rounded-full font-headline text-body-md border-b-4 border-[#3435b0] btn-3d flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-xl animate-spin">
                    progress_activity
                  </span>
                  Submitting...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-xl">
                    send
                  </span>
                  Book My Session
                </>
              )}
            </button>
          </div>
        </div>

        {/* Alternative contact */}
        <p className="text-center font-body text-body-md text-on-surface-variant mt-8">
          Prefer to reach us directly?{" "}
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'd like to book a session with KMinds.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-headline text-label-md hover:underline"
          >
            Chat on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
