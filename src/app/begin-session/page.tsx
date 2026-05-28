// src/app/begin-session/page.tsx
// ─────────────────────────────────────────────────────────────
// FORM DATA — Uses Formspree to send submissions to your email.
// SETUP (one time only):
//   1. Go to https://formspree.io and sign up free
//   2. Create a new form → copy your form ID (looks like "xpwzabcd")
//   3. Replace "YOUR_FORMSPREE_ID" below with your actual ID
//   4. Formspree sends you an email for every submission — free up to 50/month
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { contactInfo } from "@/data/content";

// 🔴 REPLACE THIS with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = "mbdbqvzb";

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
  const [error, setError] = useState("");
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

  const handleSubmit = async () => {
    setError("");
    if (!form.fullName || !form.email || !form.phone) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "User Type": userType === "parent" ? "Parent" : "Student",
          "Full Name": form.fullName,
          Email: form.email,
          Phone: form.phone,
          Country: form.country,
          Curriculum: form.curriculum,
          Grade: form.grade,
          Subject: form.subject,
          "Preferred Date": form.preferredDate,
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setError(
          "Something went wrong. Please try again or contact us on WhatsApp.",
        );
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-surface-container-low border-2 border-outline-variant rounded-2xl px-5 py-4 font-body text-body-md text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary focus:bg-white transition-all";
  const labelClass = "block font-headline text-label-md text-on-surface mb-2";

  return (
    <div className="min-h-screen bg-surface relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="fixed inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 py-12">
        {/* Back button — properly placed at top */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary font-headline text-label-md px-4 py-2.5 rounded-full transition-all"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
            <span className="material-symbols-outlined text-primary text-3xl">
              school
            </span>
          </div>
          <h1
            className="font-headline font-extrabold text-on-surface mb-3"
            style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
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
                      ? "border-primary bg-primary-fixed text-primary shadow-sm"
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
              <div className="mt-2 flex items-start gap-2 bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl px-3 py-2.5">
                <svg
                  viewBox="0 0 32 32"
                  className="w-4 h-4 fill-[#25D366] shrink-0 mt-0.5"
                >
                  <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.01A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 19.471c-.398-.199-2.354-1.162-2.72-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.203-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319 0 1.957 1.426 3.848 1.625 4.113.2.265 2.807 4.285 6.802 6.011.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.364-.265-.762-.464z" />
                </svg>
                <p className="font-body text-xs text-on-surface-variant">
                  We will contact you via WhatsApp or Email regarding your
                  session details.
                </p>
              </div>
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
                Format: Day/Month/Year — e.g. 15/07/2025
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-error-container border border-error/20 rounded-2xl px-5 py-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-error text-xl shrink-0">
                  error
                </span>
                <p className="font-body text-body-md text-on-error-container">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-primary text-on-primary py-5 rounded-full font-headline text-body-md border-b-4 border-[#3435b0] btn-3d flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
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

        {/* Alternative */}
        <div className="mt-8 text-center">
          <p className="font-body text-body-md text-on-surface-variant mb-3">
            Prefer to reach us directly?
          </p>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'd like to book a session with KMinds.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-headline text-label-md hover:bg-[#1da851] transition-colors shadow-md"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.01A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 19.471c-.398-.199-2.354-1.162-2.72-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.203-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319 0 1.957 1.426 3.848 1.625 4.113.2.265 2.807 4.285 6.802 6.011.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.364-.265-.762-.464z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
