import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* ABOVE THE FOLD / HERO SECTION */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col items-center text-center bg-radial from-primary/5 via-transparent to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1c190a_1px,transparent_1px),linear-gradient(to_bottom,#1b1c190a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 fade-in">
          {/* Pre-headline tag */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-3 border-on-surface bg-tertiary-fixed text-on-tertiary-fixed font-label-bold text-label-bold uppercase tracking-wider mb-6 rotate-[-1.5deg] shadow-[3px_3px_0px_0px_var(--color-secondary)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Free System Diagnostic for MSMEs
          </span>

          {/* Headline - Benefit-driven, names avatar, under 12 words */}
          <h1 className="font-display-lg text-4xl md:text-6xl text-on-surface tracking-tight leading-[1.1] max-w-3xl mb-6">
            Get a Custom CRM Funnel <br className="hidden md:inline" />
            <span className="text-primary-container bg-on-surface px-4 py-1 rounded inline-block rotate-[1deg] shadow-[4px_4px_0px_0px_var(--color-secondary)] text-white mt-2">Built for Your Business</span>
          </h1>

          {/* Sub-headline - Names mechanism, under 20 words */}
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed bg-surface/90 p-3 rounded-lg border-2 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            We design high-converting landing pages and automate lead collection in under 30 days.
          </p>

          {/* Primary CTA - 48px min height, active first person benefit */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/quiz"
              className="cta-primary cta-pulse w-full sm:w-auto min-h-[48px] text-center uppercase tracking-wide"
              id="hero-cta-btn"
            >
              Take the Free System Diagnostic
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Proof Row - Defensible credentials */}
          <div className="mt-12 py-5 border-y-3 border-on-surface bg-surface-container w-full max-w-3xl flex flex-wrap justify-around items-center gap-y-4 gap-x-6 text-sm text-on-surface font-label-bold text-label-bold uppercase tracking-wider rounded shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">★</span>
              <span>$10M+ Revenue Managed</span>
            </div>
            <div className="h-6 w-[3px] bg-on-surface hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">★</span>
              <span>1,000+ Trained</span>
            </div>
            <div className="h-6 w-[3px] bg-on-surface hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">★</span>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 border-y-3 border-on-surface bg-surface-container-low relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-6">
            As featured in & trusted by local MSMEs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 font-headline-md text-on-surface">
            <span className="font-black text-lg border-3 border-on-surface px-4 py-1.5 bg-surface-container-highest rounded rotate-[-2deg] shadow-[3px_3px_0px_0px_var(--color-secondary)]">BUSINESS DAILY</span>
            <span className="font-black text-xl border-3 border-on-surface px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed rounded rotate-[3deg] shadow-[3px_3px_0px_0px_var(--color-secondary)]">MSME HUB</span>
            <span className="font-bold text-lg border-3 border-on-surface px-4 py-1.5 bg-primary-fixed text-on-primary-fixed rounded rotate-[-1deg] shadow-[3px_3px_0px_0px_var(--color-secondary)]">SYSTEMS INC</span>
            <span className="font-extrabold text-xl border-3 border-on-surface px-4 py-1.5 bg-surface-container rounded rotate-[1.5deg] shadow-[3px_3px_0px_0px_var(--color-secondary)]">CRM INSIDER</span>
          </div>
        </div>
      </section>

      {/* SERVICES / VALUE PROPOSITION */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary-container text-on-primary-container border-3 border-on-surface px-4 py-1 rounded-full font-label-bold text-label-bold uppercase tracking-wide rotate-[-1deg] shadow-[3px_3px_0px_0px_var(--color-secondary)] mb-4">
            Our Solutions 🚀
          </div>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface tracking-tight mb-4">
            Custom Funnel Solutions Built for Conversion
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
            Unlike generic web builders, we build complete custom booking and acquisition pipelines integrated directly with CRM automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed border-3 border-on-surface flex items-center justify-center font-black text-xl mb-6 shadow-[3px_3px_0px_0px_var(--color-secondary)]">
              1
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-3">High-Converting Landing Pages</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Fast, custom-coded landing pages designed visually and textually to drive visitors to a single clear conversion objective.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed border-3 border-on-surface flex items-center justify-center font-black text-xl mb-6 shadow-[3px_3px_0px_0px_var(--color-secondary)]">
              2
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-3">Interactive Lead Filters</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Step-by-step diagnostic forms that capture user intent, score suitability, and filter low-value inquiries automatically.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-secondary-fixed text-on-secondary-fixed border-3 border-on-surface flex items-center justify-center font-black text-xl mb-6 shadow-[3px_3px_0px_0px_var(--color-secondary)]">
              3
            </div>
            <h3 className="font-headline-md text-xl text-on-surface mb-3">CRM & GoHighLevel Pipelines</h3>
            <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
              Full sync with CRM fields, automated text/email follow-up reminders, and self-serve calendar booking logic.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 md:py-28 bg-surface-container-low border-y-3 border-on-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-headline-lg text-3xl text-on-surface tracking-tight text-center mb-16">
            Client Success
          </h2>

          {/* Testimonial Card */}
          <div className="glass-card flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-20 h-20 rounded-full bg-primary text-on-primary border-3 border-on-surface flex items-center justify-center font-black text-2xl shrink-0 shadow-[4px_4px_0px_0px_var(--color-secondary)]">
              SJ
            </div>
            <div>
              <p className="font-body-lg text-lg md:text-xl font-medium text-on-surface italic mb-6 leading-relaxed">
                &ldquo;They built our funnel and automated our booking workflow. We went from chasing leads manually to waking up with 15+ qualified appointments every single week.&rdquo;
              </p>
              <div>
                <h4 className="font-headline-md text-on-surface text-base">Sarah Jenkins</h4>
                <p className="font-body-md text-on-surface-variant text-sm font-semibold">Founder, Zenith Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ BLOCK */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6">
        <h2 className="font-headline-lg text-3xl text-on-surface tracking-tight text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-surface-container rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            <h4 className="font-headline-md text-lg text-on-surface mb-2">How long does a custom build take?</h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              Our standard lead generation funnel and GoHighLevel calendar/CRM integration is fully designed, built, and launched in under 30 days.
            </p>
          </div>

          <div className="p-6 bg-surface-container rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            <h4 className="font-headline-md text-lg text-on-surface mb-2">Do I need to manage the CRM integrations myself?</h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              No. We handle the complete technical integration, including field mapping, email triggers, calendar rules, and webhook setup.
            </p>
          </div>

          <div className="p-6 bg-surface-container rounded-lg border-3 border-on-surface shadow-[4px_4px_0px_0px_var(--color-secondary)]">
            <h4 className="font-headline-md text-lg text-on-surface mb-2">How does the diagnostic quiz help my business?</h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              It filters out unqualified leads before they can book on your calendar, ensuring your sales team only spends time talking to warm, prepared, high-intent prospects.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA STACK */}
      <section className="py-24 bg-surface-container-low border-t-3 border-on-surface text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface tracking-tight mb-4">
            Ready to Automate Your Booking Pipeline?
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Take our free 3-minute diagnostic quiz to identify automation gaps and view our system roadmap recommendations.
          </p>
          <Link
            href="/quiz"
            className="cta-primary min-h-[48px] w-full sm:w-auto px-10 text-center uppercase tracking-wide"
            id="final-cta-btn"
          >
            Take the Free System Diagnostic
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t-3 border-on-surface bg-surface text-center text-xs text-on-surface-variant font-label-bold text-label-bold uppercase">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} ScaleSystems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-primary hover:underline">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
