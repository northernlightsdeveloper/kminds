// src/components/layout/Footer.tsx
import Link from "next/link";
import { footerLinks, contactInfo } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-on-surface relative overflow-hidden">
      {/* Top gradient line */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary-container to-tertiary-container" />
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src="/Kaliedoscopic Minds.svg"
                alt="Kaleidoscopic Minds"
                className="h-16 w-auto"
              />

              <div className="leading-tight">
                <div className="font-headline font-extrabold text-inverse-on-surface text-2xl">
                  Kaleidoscopic
                </div>

                <div className="font-headline font-extrabold text-secondary-container text-2xl -mt-1">
                  Minds
                </div>
              </div>
            </Link>
            <p className="text-inverse-on-surface/50 font-body text-body-md leading-relaxed mb-6">
              Where Potential Becomes Performance. Structured, personalised
              learning for Australian students.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-4 py-2 rounded-full font-headline text-label-md hover:bg-[#25D366]/20 transition-colors"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.01A15.934 15.934 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm7.27 19.471c-.398-.199-2.354-1.162-2.72-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.203-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.464.597-.696.2-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319 0 1.957 1.426 3.848 1.625 4.113.2.265 2.807 4.285 6.802 6.011.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.364-.265-.762-.464z" />
              </svg>
              Chat with us
            </a>
          </div>

          {/* Explore */}
          <div>
            <h5 className="font-headline text-label-md text-inverse-on-surface/40 uppercase tracking-widest mb-6">
              Explore
            </h5>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-inverse-on-surface/60 font-body text-body-md hover:text-inverse-on-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="font-headline text-label-md text-inverse-on-surface/40 uppercase tracking-widest mb-6">
              Support
            </h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-inverse-on-surface/60 font-body text-body-md hover:text-inverse-on-surface transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-headline text-label-md text-inverse-on-surface/40 uppercase tracking-widest mb-6">
              Contact
            </h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-inverse-on-surface/60 font-body text-body-md">
                <span className="material-symbols-outlined text-primary text-base">
                  mail
                </span>
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-3 text-inverse-on-surface/60 font-body text-body-md">
                <span className="material-symbols-outlined text-secondary text-base">
                  phone
                </span>
                {contactInfo.phone}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-inverse-on-surface/30 font-headline text-label-md">
            © {new Date().getFullYear()} Kaleidoscopic Minds. All rights
            reserved.
          </p>
          <p className="text-inverse-on-surface/20 font-headline text-xs">
            Clarity. Confidence. Academic Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
