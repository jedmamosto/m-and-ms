import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary overflow-x-hidden selection:bg-accent/20 selection:text-accent">
      {/* ABOVE THE FOLD / HERO SECTION */}
      <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28 flex flex-col items-center text-center bg-radial from-accent/5 via-transparent to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 fade-in">
          {/* Pre-headline tag */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Free System Diagnostic for MSMEs
          </span>

          {/* Headline - Benefit-driven, names avatar, under 12 words */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1] max-w-3xl mb-6">
            Get a Custom CRM Funnel Built for Your Business
          </h1>

          {/* Sub-headline - Names mechanism, under 20 words */}
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-normal">
            We design high-converting landing pages and automate lead collection in under 30 days.
          </p>

          {/* Primary CTA - 48px min height, active first person benefit */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/quiz"
              className="cta-primary cta-pulse w-full sm:w-auto min-h-[48px] text-center"
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
          <div className="mt-12 py-4 border-y border-border-custom w-full max-w-3xl flex flex-wrap justify-around items-center gap-y-4 gap-x-6 text-sm text-text-secondary font-medium">
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg">★</span>
              <span>$10M+ Revenue Managed</span>
            </div>
            <div className="h-4 w-px bg-border-custom hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg">★</span>
              <span>1,000+ Trained</span>
            </div>
            <div className="h-4 w-px bg-border-custom hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg">★</span>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10 border-t border-b border-border-custom bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-wider text-text-muted font-bold mb-6">
            As featured in & trusted by local MSMEs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-semibold text-lg text-text-secondary tracking-widest">BUSINESS DAILY</span>
            <span className="font-bold text-xl text-text-secondary tracking-wider">MSME HUB</span>
            <span className="font-medium text-lg text-text-secondary tracking-normal">SYSTEMS INC</span>
            <span className="font-extrabold text-xl text-text-secondary tracking-tight">CRM INSIDER</span>
          </div>
        </div>
      </section>

      {/* SERVICES / VALUE PROPOSITION */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Custom Funnel Solutions Built for Conversion
          </h2>
          <p className="text-text-secondary">
            Unlike generic web builders, we build complete custom booking and acquisition pipelines integrated directly with CRM automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">High-Converting Landing Pages</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Fast, custom-coded landing pages designed visually and textually to drive visitors to a single clear conversion objective.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Interactive Lead Filters</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Step-by-step diagnostic forms that capture user intent, score suitability, and filter low-value inquiries automatically.
            </p>
          </div>

          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">CRM & GoHighLevel Pipelines</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Full sync with CRM fields, automated text/email follow-up reminders, and self-serve calendar booking logic.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 md:py-28 bg-bg-secondary border-t border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Client Success
          </h2>

          {/* Testimonial Card */}
          <div className="glass-card flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center font-bold text-accent text-2xl shrink-0">
              SJ
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium text-text-primary italic mb-6 leading-relaxed">
                &ldquo;They built our funnel and automated our booking workflow. We went from chasing leads manually to waking up with 15+ qualified appointments every single week.&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-text-primary">Sarah Jenkins</h4>
                <p className="text-text-secondary text-sm font-medium">Founder, Zenith Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ BLOCK */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-bg-secondary rounded-lg border border-border-custom">
            <h4 className="font-bold text-lg mb-2">How long does a custom build take?</h4>
            <p className="text-text-secondary text-sm">
              Our standard lead generation funnel and GoHighLevel calendar/CRM integration is fully designed, built, and launched in under 30 days.
            </p>
          </div>

          <div className="p-6 bg-bg-secondary rounded-lg border border-border-custom">
            <h4 className="font-bold text-lg mb-2">Do I need to manage the CRM integrations myself?</h4>
            <p className="text-text-secondary text-sm">
              No. We handle the complete technical integration, including field mapping, email triggers, calendar rules, and webhook setup.
            </p>
          </div>

          <div className="p-6 bg-bg-secondary rounded-lg border border-border-custom">
            <h4 className="font-bold text-lg mb-2">How does the diagnostic quiz help my business?</h4>
            <p className="text-text-secondary text-sm">
              It filters out unqualified leads before they can book on your calendar, ensuring your sales team only spends time talking to warm, prepared, high-intent prospects.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA STACK */}
      <section className="py-24 bg-bg-secondary border-t border-border-custom text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-accent/5 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to Automate Your Booking Pipeline?
          </h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto">
            Take our free 3-minute diagnostic quiz to identify automation gaps and view our system roadmap recommendations.
          </p>
          <Link
            href="/quiz"
            className="cta-primary min-h-[48px] w-full sm:w-auto px-10 text-center"
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
      <footer className="py-12 border-t border-border-custom bg-bg-primary text-center text-xs text-text-muted">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} ScaleSystems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
