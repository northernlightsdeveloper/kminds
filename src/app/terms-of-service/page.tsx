// src/app/terms-of-service/page.tsx

export default function TermsOfService() {
  const blocks = [
    {
      number: "01",
      title: "Acceptance of Terms",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <>
          <p>
            By accessing or using any services provided by Kaleidoscopic Minds
            (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), you agree to be
            bound by these Terms of Service. If you do not agree, please do not
            use our services.
          </p>
          <p>
            These terms apply to all users including parents, guardians, and
            students who access our tutoring programs.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "Our Services",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <>
          <p>
            Kaleidoscopic Minds provides personalised, one-on-one academic
            tutoring sessions for students in Years 5–12, aligned with
            Australian, Victorian, IGCSE, and IB curricula.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of
            our services at any time with reasonable notice.
          </p>
        </>
      ),
    },
    {
      number: "03",
      title: "Bookings & Scheduling",
      badge: "bg-tertiary-fixed text-tertiary",
      border: "border-l-tertiary",
      num: "text-tertiary/10",
      content: (
        <ul>
          <li>Sessions must be booked in advance through agreed channels</li>
          <li>
            A minimum of 24 hours&apos; notice is required to cancel or
            reschedule
          </li>
          <li>
            Late cancellations or no-shows may be charged at the full session
            rate
          </li>
          <li>
            We will make reasonable efforts to reschedule sessions cancelled by
            us
          </li>
        </ul>
      ),
    },
    {
      number: "04",
      title: "Payments & Fees",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <>
          <p>
            Session fees are communicated at the time of enrolment and are
            subject to change with advance notice. Payment is due as per the
            agreed schedule.
          </p>
          <ul>
            <li>Fees are non-refundable once a session has been delivered</li>
            <li>
              Prepaid session packages are valid for the period specified at
              purchase
            </li>
            <li>Outstanding fees may result in suspension of sessions</li>
          </ul>
        </>
      ),
    },
    {
      number: "05",
      title: "Student & Parent Responsibilities",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <>
          <p>To get the most out of our program, we ask that:</p>
          <ul>
            <li>Students attend sessions punctually and come prepared</li>
            <li>
              Parents or guardians provide accurate information about the
              student&apos;s curriculum and needs
            </li>
            <li>
              Respectful communication is maintained with all mentors and staff
            </li>
            <li>Any concerns about session quality are raised promptly</li>
          </ul>
        </>
      ),
    },
    {
      number: "06",
      title: "Intellectual Property",
      badge: "bg-tertiary-fixed text-tertiary",
      border: "border-l-tertiary",
      num: "text-tertiary/10",
      content: (
        <p>
          All materials provided during sessions — including worksheets, notes,
          and assessments — are the intellectual property of Kaleidoscopic
          Minds. They are for personal academic use only and may not be
          reproduced, distributed, or shared without written permission.
        </p>
      ),
    },
    {
      number: "07",
      title: "Limitation of Liability",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <>
          <p>
            Kaleidoscopic Minds provides educational support services and does
            not guarantee specific academic outcomes. While we strive to deliver
            the highest quality sessions, individual results depend on many
            factors including student effort and engagement.
          </p>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            indirect, incidental, or consequential damages arising from the use
            of our services.
          </p>
        </>
      ),
    },
    {
      number: "08",
      title: "Code of Conduct",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <>
          <p>
            We are committed to providing a safe, respectful, and supportive
            learning environment. We reserve the right to terminate services
            without refund if a student or parent engages in:
          </p>
          <ul>
            <li>Abusive, threatening, or disrespectful behaviour</li>
            <li>Harassment of any mentor or staff member</li>
            <li>Any conduct that disrupts the learning environment</li>
          </ul>
        </>
      ),
    },
    {
      number: "09",
      title: "Governing Law",
      badge: "bg-tertiary-fixed text-tertiary",
      border: "border-l-tertiary",
      num: "text-tertiary/10",
      content: (
        <p>
          These Terms of Service are governed by the laws of Victoria,
          Australia. Any disputes arising from these terms shall be subject to
          the exclusive jurisdiction of the courts of Victoria.
        </p>
      ),
    },
    {
      number: "10",
      title: "Changes to These Terms",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <p>
          We reserve the right to update these Terms of Service at any time.
          Updated terms will be posted on this page with a revised date.
          Continued use of our services after changes are posted constitutes
          acceptance of the new terms.
        </p>
      ),
    },
    {
      number: "11",
      title: "Contact Us",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <>
          <p>For any questions about these Terms of Service, please contact:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:kaleidoscopicminds.kl@gmail.com"
                className="text-primary underline underline-offset-2"
              >
                kaleidoscopicminds.kl@gmail.com
              </a>
            </li>
            <li>Phone: +91 6267 000 755</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <main className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="bg-surface-container-low py-16 md:py-24 relative overflow-hidden border-b border-outline-variant/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
          <span className="inline-block bg-secondary-fixed text-secondary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Legal
          </span>
          <h1
            className="font-headline font-extrabold text-on-surface mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3rem)" }}
          >
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            By using Kaleidoscopic Minds&apos; services, you agree to the
            following terms. Please read them carefully.
          </p>
          <p className="font-body text-body-md text-on-surface-variant mt-4">
            <span className="font-semibold text-on-surface">Last updated:</span>{" "}
            May 2026
          </p>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-16 md:py-20">
        <div className="px-4 md:px-margin-desktop max-w-[860px] mx-auto space-y-6">
          {blocks.map((b) => (
            <div
              key={b.number}
              className={`bg-white rounded-3xl p-8 md:p-10 card-shadow border border-outline-variant/20 border-l-4 ${b.border} relative overflow-hidden`}
            >
              {/* Watermark number */}
              <span
                className={`absolute -bottom-4 -right-2 font-headline font-black text-9xl leading-none select-none pointer-events-none ${b.num}`}
              >
                {b.number}
              </span>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-outline-variant/20">
                <span
                  className={`font-headline text-label-md px-3 py-1 rounded-full ${b.badge}`}
                >
                  {b.number}
                </span>
                <h2 className="font-headline font-bold text-on-surface text-headline-md">
                  {b.title}
                </h2>
              </div>
              <div className="space-y-4 font-body text-body-md text-on-surface-variant leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-2 [&_ul]:list-none [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2 [&_ul_li]:before:content-['—'] [&_ul_li]:before:text-primary [&_ul_li]:before:font-bold [&_ul_li]:before:shrink-0">
                {b.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
