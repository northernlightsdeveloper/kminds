// src/components/ui/WhatsAppButton.tsx
// ─────────────────────────────────────────────────────────────
// WHATSAPP FLOATING BUTTON
//
// Sits fixed at the bottom-right of every page.
// Clicking it opens WhatsApp with a pre-filled message.
//
// To change the number or message:
//   → Update WHATSAPP_NUMBER and WHATSAPP_MESSAGE below
// ─────────────────────────────────────────────────────────────

"use client";

import { useState } from "react";

// ── CONFIG — edit these two values only ──────────────────────
const WHATSAPP_NUMBER = "916267000755"; // country code + number, no spaces or +
const WHATSAPP_MESSAGE =
  "Hi! I'd like to know more about Kaleidoscopic Minds programs.";

export default function WhatsAppButton() {
  // Tooltip visibility state
  const [showTooltip, setShowTooltip] = useState(false);

  // Build the WhatsApp URL with pre-filled message
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* ── TOOLTIP ─────────────────────────────────────── */}
      {/* Slides in from right on hover */}
      <div
        className={`
          bg-white text-on-surface font-headline text-label-md
          px-4 py-2 rounded-full shadow-lg border border-outline-variant/20
          transition-all duration-300 whitespace-nowrap
          ${showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}
        `}
      >
        Chat with us 👋
      </div>

      {/* ── BUTTON ──────────────────────────────────────── */}
      <div
        className="
        w-14 h-14 rounded-full flex items-center justify-center
        shadow-lg hover:scale-110 active:scale-95
        transition-all duration-200
        bg-[#25D366]
      "
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white"
        >
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.01A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.485-.289-5.01 1.194 1.269-4.874-.317-.5A13.234 13.234 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.72-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.203-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319 0 1.957 1.426 3.848 1.625 4.113.2.265 2.807 4.285 6.802 6.011.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.364-.265-.762-.464z" />
        </svg>
      </div>

      {/* Pulse ring animation behind the button */}
      <span className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
    </a>
  );
}
