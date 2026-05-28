// src/app/thank-you/page.tsx — Shown after successful form submission

import Link from "next/link";
import { contactInfo } from "@/data/content";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-surface geo-bg flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="w-24 h-24 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <span
            className="material-symbols-outlined text-tertiary text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>

        <h1
          className="font-headline font-extrabold text-on-surface mb-4"
          style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)" }}
        >
          You&apos;re Successfully Registered!
        </h1>

        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-10 max-w-md mx-auto">
          Thank you for registering with Kaleidoscopic Minds. We have received
          your details and our team will contact you shortly regarding your
          personalised learning session.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-label-md border-b-4 border-[#3435b0] btn-3d"
          >
            <span className="material-symbols-outlined text-base">home</span>
            Back to Home
          </Link>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I just registered with KMinds and would like to confirm my session details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-headline text-label-md border-b-4 border-[#1da851] btn-3d"
          >
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.01A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 19.471c-.398-.199-2.354-1.162-2.72-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.203-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319 0 1.957 1.426 3.848 1.625 4.113.2.265 2.807 4.285 6.802 6.011.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.364-.265-.762-.464z" />
            </svg>
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
