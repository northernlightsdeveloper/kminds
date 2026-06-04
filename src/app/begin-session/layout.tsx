import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Begin a Personalised Session | Free Consultation | KMinds",
  description:
    "Start your child's learning journey with KMinds. Fill in your details and our team will schedule a personalised tutoring session. Free consultation available.",
  alternates: { canonical: "/begin-session" },
  openGraph: {
    title: "Begin Your Learning Journey | KMinds",
    description:
      "Book a personalised session with KMinds. Share your details and we'll match your child with the right mentor.",
    url: "https://www.k-minds.com/begin-session",
    images: [
      {
        url: "/og-begin.jpg",
        width: 1200,
        height: 630,
        alt: "Begin a Session - KMinds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Begin Your Learning Journey | KMinds",
    description:
      "Start with a free consultation. Our team will schedule a personalised session for your child.",
    images: ["/og-begin.jpg"],
  },
};

export default function BeginSessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
