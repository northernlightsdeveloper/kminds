// src/app/privacy-policy/page.tsx

export default function PrivacyPolicy() {
  const blocks = [
    {
      number: "01",
      title: "Information We Collect",
      color: "primary",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <>
          <p>
            We collect information you provide directly when you fill out forms,
            book a session, or contact us. This may include:
          </p>
          <ul>
            <li>Full name and email address</li>
            <li>Phone number</li>
            <li>Child&apos;s year level and curriculum</li>
            <li>Any additional information you choose to share</li>
          </ul>
          <p>
            We may also collect basic usage data (such as pages visited and time
            spent) to improve the experience on our website.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "How We Use Your Information",
      color: "secondary",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Schedule and deliver tutoring sessions</li>
            <li>Communicate with you about your child&apos;s progress</li>
            <li>Send session reminders and program updates</li>
            <li>Improve the quality of our services</li>
            <li>Respond to enquiries and support requests</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to any
            third party.
          </p>
        </>
      ),
    },
    {
      number: "03",
      title: "Data Storage & Security",
      color: "tertiary",
      badge: "bg-tertiary-fixed text-tertiary",
      border: "border-l-tertiary",
      num: "text-tertiary/10",
      content: (
        <>
          <p>
            Your data is stored securely and accessed only by authorised team
            members. We take reasonable precautions to protect your information
            from unauthorised access, disclosure, or loss.
          </p>
          <p>
            While we strive to use industry-standard security practices, no
            method of transmission over the internet is 100% secure. Please
            contact us immediately if you suspect any unauthorised use.
          </p>
        </>
      ),
    },
    {
      number: "04",
      title: "Cookies",
      color: "primary",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <>
          <p>
            Our website may use cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help us remember
            your preferences and understand how you use our site.
          </p>
          <p>
            You can choose to disable cookies through your browser settings,
            though some features of the website may not function correctly as a
            result.
          </p>
        </>
      ),
    },
    {
      number: "05",
      title: "Third-Party Services",
      color: "secondary",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <>
          <p>
            We may use trusted third-party tools (such as scheduling platforms,
            payment processors, or communication tools) to deliver our services.
            These providers have their own privacy policies and we encourage you
            to review them.
          </p>
          <p>
            We only share the minimum information necessary for these services
            to function.
          </p>
        </>
      ),
    },
    {
      number: "06",
      title: "Children's Privacy",
      color: "tertiary",
      badge: "bg-tertiary-fixed text-tertiary",
      border: "border-l-tertiary",
      num: "text-tertiary/10",
      content: (
        <>
          <p>
            Our services are designed for students, often minors. We take the
            privacy of children seriously. We do not knowingly collect personal
            information directly from children under 13 without verifiable
            parental consent.
          </p>
          <p>
            All student-related information is collected from and managed by a
            parent or guardian.
          </p>
        </>
      ),
    },
    {
      number: "07",
      title: "Your Rights",
      color: "primary",
      badge: "bg-primary-fixed text-primary",
      border: "border-l-primary",
      num: "text-primary/10",
      content: (
        <>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Ask us to correct or update inaccurate information</li>
            <li>Request deletion of your data at any time</li>
            <li>Withdraw consent for communications</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the details
            below.
          </p>
        </>
      ),
    },
    {
      number: "08",
      title: "Changes to This Policy",
      color: "secondary",
      badge: "bg-secondary-fixed text-secondary",
      border: "border-l-secondary",
      num: "text-secondary/10",
      content: (
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date. We encourage you to
          review this page periodically.
        </p>
      ),
    },
    {
      number: "09",
      title: "Contact Us",
      color: "tertiary",
      badge: "bg-tertiary-fixed text-tertiary",
      border: "border-l-tertiary",
      num: "text-tertiary/10",
      content: (
        <>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please reach out:
          </p>
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="relative px-4 md:px-margin-desktop max-w-[1280px] mx-auto">
          <span className="inline-block bg-primary-fixed text-primary font-headline text-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Legal
          </span>
          <h1
            className="font-headline font-extrabold text-on-surface mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3rem)" }}
          >
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Your privacy matters to us. This policy explains how Kaleidoscopic
            Minds collects, uses, and protects your personal information.
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
