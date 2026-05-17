// src/components/sections/ForParentsAndKids.tsx
// ─────────────────────────────────────────────────────────────
// FOR PARENTS & KIDS — Split section with feature list + image.
//
// To edit benefit items: → src/data/content.ts (perspectives array)
// To link "Start Your Free Trial" button:
//   → Change the href below to "/signup" or "/trial"
// To swap the image: → Replace the <Image> src below
// ─────────────────────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { perspectives } from "@/data/content";

export default function ForParentsAndKids() {
  return (
    <section
      id="parents"
      className="px-4 md:px-margin-desktop py-section-gap max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: Feature list + CTA ──────────────────────── */}
        {/* order-2 on mobile (appears below image), order-1 on desktop */}
        <div className="order-2 md:order-1">
          <div className="mb-12">
            <h2 className="font-headline text-headline-lg text-on-surface mb-6">
              Designed for Two Perspectives
            </h2>

            <div className="space-y-8">
              {perspectives.map((item) => (
                <div key={item.id} className="flex gap-6 items-start">
                  {/* Icon box */}
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor}`}>
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className="font-headline text-headline-md text-on-surface mb-2">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant font-body text-body-md">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button — link to trial/signup page */}
          <Link
            href="#" // TODO: change to "/signup" or "/free-trial"
            className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-headline text-label-md btn-3d"
          >
            Start Your Free Trial
          </Link>
        </div>

        {/* ── RIGHT: Image ──────────────────────────────────── */}
        <div className="order-1 md:order-2">
          <div className="relative bg-surface-container-high rounded-[64px] p-4 card-shadow">
            {/* Replace this with your own photo */}
            <div className="relative rounded-[50px] w-full h-[500px] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnwBEaqcUJzsJc4xq536StmvTgusSzVeEJ5E3GyLTcGoJ8Mpa8qjBBGyMtJ7KDvajiWgSABrzn29mRxkXviHTs2hCwfvfAUgmu5rNQZ6V4vggz1TeZm64sPk8ZTk769_AW3ZyeKhj5WrMLyjLDIVXEFlvzrBx-KnRrCgpOvv9bcOSiZ4qjjLu9me7xVaE-3v5NaZU_FvDRJlkf_NO9MzLJqbTMlOnrV1YZWTK-opWMtXc7MCB97Fk2muqS4cWGNBf-p-Zngc4OsgA"
                alt="Parent and child learning together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
