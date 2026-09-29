// src/components/ui/LeadPopup.tsx
// ─────────────────────────────────────────────────────────────
// LEAD POPUP — a contact form shown to visitors for marketing.
//
// Behaviour:
//   • Appears ~10 seconds after the visitor lands, OR as soon as
//     they scroll about one screen down — whichever is first.
//   • Can be closed (X button, Esc, or clicking outside). Closing
//     it snoozes it for DISMISS_DAYS days on that browser, so
//     visitors aren't nagged every single visit.
//   • Once submitted it's remembered permanently, so returning
//     visitors are never asked again.
//   • Never shown on the form / policy pages (so people can read
//     the Privacy Policy before consenting).
//   • Anyone who completes the main "Begin a Session" form is also
//     treated as done (they land on /thank-you).
//
// WHERE THE DETAILS GO:
//   • If SHEETS_URL below is filled in → straight into your Google
//     Sheet (see google-sheets-lead-script.gs for the 5-minute setup).
//   • If SHEETS_URL is empty → falls back to your Formspree form,
//     so it works immediately with zero setup.
// ─────────────────────────────────────────────────────────────
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

// 🔧 Paste your Google Apps Script "Web app" URL here (leave "" to use Formspree)
const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbzUXmT6mHSDCKF4h5H76JSdC-B366QkeCLdCj8L89sofwV6mb8vRtdRxU5JxqvDdnzhtw/exec";
// Same Formspree form used by /begin-session (fallback only)
const FORMSPREE_URL = "https://formspree.io/f/mbdbqvzb";

const STORAGE_KEY = "km_lead_v2";
const DISMISS_DAYS = 3; // closing (without submitting) hides it for this many days
const DELAY_MS = 10_000; // show after 10 seconds…
const SCROLL_TRIGGER = 0.8; // …or after scrolling ~1 screen (0.8 × screen height)
const SUCCESS_MS = 900; // how long the "thank you" stays up
const NEVER_SHOW_ON = [
  "/begin-session",
  "/thank-you",
  "/privacy-policy",
  "/terms-of-service",
];

type Role = "parent" | "student";
type Phase = "closed" | "open" | "success";
type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  consent?: string;
};

type Stored = { status: "submitted" } | { status: "dismissed"; at: number };

const readStored = (): Stored | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Stored) : null;
  } catch {
    return null;
  }
};
const shouldSkip = () => {
  const stored = readStored();
  if (!stored) return false;
  if (stored.status === "submitted") return true;
  return Date.now() - stored.at < DISMISS_DAYS * 24 * 60 * 60 * 1000;
};
const markSubmitted = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: "submitted" }));
  } catch {
    /* private mode — popup will simply show again next visit */
  }
};
const markDismissed = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status: "dismissed", at: Date.now() }),
    );
  } catch {
    /* private mode — popup will simply show again next visit */
  }
};

export default function LeadPopup() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("closed");
  const [role, setRole] = useState<Role>("parent");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [trap, setTrap] = useState(""); // honeypot — real people leave this empty
  const [errors, setErrors] = useState<Errors>({});
  const [sendError, setSendError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // ── When to show it ─────────────────────────────────────────
  useEffect(() => {
    if (pathname === "/thank-you") markSubmitted(); // finished the main form
    if (NEVER_SHOW_ON.includes(pathname)) {
      setPhase((p) => (p === "open" ? "closed" : p));
      return;
    }
    if (shouldSkip()) return;

    let timer: ReturnType<typeof setTimeout>;
    let retry: ReturnType<typeof setTimeout>;
    const show = () => {
      if (shouldSkip()) return;
      // page loader still up → try again in a moment (don't lose the trigger)
      if (document.getElementById("page-loader")) {
        clearTimeout(retry);
        retry = setTimeout(show, 300);
        return;
      }
      setPhase((p) => (p === "closed" ? "open" : p));
      cleanup();
    };
    const onScroll = () => {
      if (scrollY >= innerHeight * SCROLL_TRIGGER) show();
    };
    const cleanup = () => {
      clearTimeout(timer);
      clearTimeout(retry);
      window.removeEventListener("scroll", onScroll);
    };

    timer = setTimeout(show, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // already scrolled before this ran (e.g. page restored mid-way)
    return cleanup;
  }, [pathname]);

  const dismiss = useCallback(() => {
    if (phase !== "open") return; // don't let Esc cut off the "thank you" message
    markDismissed();
    setPhase("closed");
  }, [phase]);

  // ── Lock page scroll + keep keyboard focus inside the popup ──
  useEffect(() => {
    if (phase === "closed") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>(
        'input:not([tabindex="-1"]), button:not([disabled]), a[href]',
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [phase, dismiss]);

  // ── Close automatically after the thank-you message ─────────
  useEffect(() => {
    if (phase !== "success") return;
    const t = setTimeout(() => setPhase("closed"), SUCCESS_MS);
    return () => clearTimeout(t);
  }, [phase]);

  // ── Validation ──────────────────────────────────────────────
  const validate = useCallback((): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    const digits = phone.replace(/\D/g, "");
    if (
      !/^[+\d][\d\s\-().]*$/.test(phone.trim()) ||
      digits.length < 8 ||
      digits.length > 15
    )
      e.phone = "Please enter a valid WhatsApp number with country code.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      e.email = "That email doesn't look right.";
    if (!consent) e.consent = "Please tick this box so we can contact you.";
    return e;
  }, [name, phone, email, consent]);

  // ── Send the details ────────────────────────────────────────
  const send = async (): Promise<boolean> => {
    const details = {
      "Submitted At": new Date().toISOString(),
      "User Type": role === "parent" ? "Parent" : "Student",
      "Full Name": name.trim(),
      WhatsApp: phone.trim(),
      Email: email.trim(),
      Consent: "Yes",
      Page: pathname,
      Source: "Website popup",
    };

    if (SHEETS_URL) {
      // Apps Script can't return CORS headers, so the reply is opaque.
      // A network failure throws; anything else means it was delivered.
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(details),
      });
      return true;
    }

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(details),
    });
    return res.ok;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (loading) return;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    // Bot filled the hidden field → pretend it worked, send nothing
    if (trap) {
      markSubmitted();
      setPhase("success");
      return;
    }

    setLoading(true);
    setSendError(false);
    try {
      const ok = await send();
      if (!ok) throw new Error("send failed");
      markSubmitted();
      try {
        sendGAEvent("event", "generate_lead", {
          method: "popup",
          user_type: role,
        });
      } catch {
        /* analytics must never break the form */
      }
      setPhase("success");
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  if (phase === "closed") return null;

  const inputClass = (bad?: string) =>
    `w-full bg-surface-container-low border-2 rounded-2xl px-5 py-3 font-body text-body-md text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary focus:bg-white transition-all ${
      bad ? "border-error" : "border-outline-variant"
    }`;
  const labelClass = "block font-headline text-label-md text-on-surface mb-1.5";
  const errClass = "font-body text-sm text-error mt-1.5";

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-start justify-center overflow-y-auto p-4 bg-on-surface/60 backdrop-blur-sm"
      style={{ animation: "kmLeadFade 0.3s ease-out" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="km-lead-title"
        tabIndex={-1}
        className="relative w-full max-w-md my-auto bg-white rounded-[32px] card-shadow border border-outline-variant/20 overflow-hidden outline-none"
        style={{ animation: "kmLeadUp 0.4s ease-out" }}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />

        {phase === "open" && (
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close"
            className="absolute right-4 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        )}

        {phase === "success" ? (
          <div className="px-8 py-14 text-center">
            <div className="w-16 h-16 bg-tertiary-fixed rounded-2xl flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-tertiary text-3xl">
                check_circle
              </span>
            </div>
            <h2 className="font-headline font-extrabold text-on-surface text-2xl mb-2">
              Thank you!
            </h2>
            <p className="font-body text-body-md text-on-surface-variant">
              Our team will reach out to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="px-6 sm:px-8 py-6"
          >
            <div className="text-center mb-5">
              <div className="w-12 h-12 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="material-symbols-outlined text-primary text-3xl">
                  school
                </span>
              </div>
              <h2
                id="km-lead-title"
                className="font-headline font-extrabold text-on-surface text-2xl mb-2"
              >
                Welcome to Kaleidoscopic Minds
              </h2>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Share your details and our team will get in touch to help you
                get started.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Parent / Student */}
              <div>
                <p className={labelClass}>I am a:</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["parent", "student"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setRole(type)}
                      aria-pressed={role === type}
                      className={`flex items-center justify-center gap-2 py-3 rounded-2xl border-2 font-headline text-label-md transition-all ${
                        role === type
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

              {/* Name */}
              <div>
                <label htmlFor="km-lead-name" className={labelClass}>
                  Full Name <span className="text-error">*</span>
                </label>
                <input
                  id="km-lead-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className={inputClass(errors.name)}
                />
                {errors.name && <p className={errClass}>{errors.name}</p>}
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="km-lead-phone" className={labelClass}>
                  WhatsApp Number <span className="text-error">*</span>
                </label>
                <input
                  id="km-lead-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+61 4XX XXX XXX"
                  className={inputClass(errors.phone)}
                />
                {errors.phone ? (
                  <p className={errClass}>{errors.phone}</p>
                ) : (
                  role === "student" && (
                    <p className="font-body text-sm text-on-surface-variant mt-1.5">
                      Please use a parent or guardian&apos;s number.
                    </p>
                  )
                )}
              </div>

              {/* Email (optional) */}
              <div>
                <label htmlFor="km-lead-email" className={labelClass}>
                  Email{" "}
                  <span className="font-body font-normal text-on-surface-variant">
                    (optional)
                  </span>
                </label>
                <input
                  id="km-lead-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass(errors.email)}
                />
                {errors.email && <p className={errClass}>{errors.email}</p>}
              </div>

              {/* Honeypot — hidden from people, bots fill it in */}
              <input
                type="text"
                name="company_url"
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] w-px h-px opacity-0"
              />

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 rounded accent-primary cursor-pointer"
                  />
                  <span className="font-body text-sm text-on-surface-variant leading-relaxed">
                    I agree to be contacted by Kaleidoscopic Minds on WhatsApp,
                    phone or email about tutoring. See our{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && <p className={errClass}>{errors.consent}</p>}
              </div>

              {sendError && (
                <div className="bg-error-container rounded-2xl p-4">
                  <p className="font-body text-sm text-on-error-container">
                    Something went wrong sending your details. Please try again.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPhase("closed")}
                    className="mt-2 font-headline text-label-md text-on-error-container underline underline-offset-2"
                  >
                    Continue to website anyway
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary py-4 rounded-full font-headline text-body-md border-b-4 border-[#3435b0] btn-3d flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
                    Continue to Website
                    <span className="material-symbols-outlined text-xl">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        @keyframes kmLeadFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes kmLeadUp {
          from { opacity: 0; transform: translateY(24px) scale(0.98) }
          to   { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  );
}
