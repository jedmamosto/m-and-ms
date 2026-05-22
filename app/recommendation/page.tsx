"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function RecommendationContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "0", 10);
  const disqualified = searchParams.get("disqualified") === "true";
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  // Qualified threshold check
  const isQualified = !disqualified && score >= 70;

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container noise-bg">
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto w-full">
        {/* Core Diagnosis Card */}
        <div className="w-full bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[6px_6px_0px_0px_var(--color-secondary)] p-8 md:p-12 fade-in">
          {/* Diagnostic score badge */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full border-3 border-on-surface flex flex-col items-center justify-center bg-tertiary-fixed shadow-[3px_3px_0px_0px_var(--color-secondary)]">
              <span className="text-3xl font-black text-on-tertiary-fixed leading-none">{score}</span>
              <span className="text-[10px] font-label-bold text-on-tertiary-fixed/70 mt-1 uppercase tracking-wider">SCORE</span>
            </div>
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-label-bold font-bold mt-4">
              Diagnostic Result for {name || "Your Business"}
            </span>
          </div>

          {isQualified ? (
            /* QUALIFIED ROADMAP VIEW */
            <div className="text-center md:text-left">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border-2 border-on-surface bg-emerald-200 text-emerald-950 font-label-bold text-xs uppercase tracking-wider mb-4 rotate-[-1deg] shadow-[2px_2px_0px_0px_var(--color-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Highly Qualified for Custom Systems
                </span>
                <h2 className="font-display-lg text-3xl md:text-4xl text-on-surface tracking-tight mt-4 mb-3">
                  We recommend a Custom Landing Page + CRM Booking Funnel.
                </h2>
                <p className="font-body-md text-on-surface-variant text-base leading-relaxed">
                  Your business meets the target criteria for automated acquisition. You have the active pain points, commitment, and budget allocation needed to unlock positive ROI from custom automation.
                </p>
              </div>

              {/* System Specs List */}
              <div className="bg-surface-container rounded-lg border-3 border-on-surface p-6 mb-8 max-w-2xl mx-auto text-left shadow-[3px_3px_0px_0px_var(--color-secondary)]">
                <h4 className="font-label-bold text-on-surface text-sm uppercase tracking-wider mb-4">
                  Custom Funnel Specs Included:
                </h4>
                <ul className="space-y-3.5 text-sm font-body-md text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Custom-coded conversion-optimized React/Next.js landing page.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Step-by-step lead qualifying diagnostic wizard integration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Full GoHighLevel location fields mapping and custom webhook sync.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary shrink-0">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span>Automated email/SMS follow-up reminders triggering post-booking.</span>
                  </li>
                </ul>
              </div>

              {/* Call Booking CTA */}
              <div className="text-center">
                <Link
                  href={`/book?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`}
                  className="cta-primary cta-pulse min-h-[48px] px-10 text-center uppercase tracking-wide inline-flex items-center justify-center"
                >
                  Book Your System Integration Call
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                <p className="text-xs text-on-surface-variant/80 mt-4 font-medium">
                  Pre-fills calendars and locks in your custom score validation.
                </p>
              </div>
            </div>
          ) : (
            /* DISQUALIFIED STARTER TEMPLATE VIEW */
            <div className="text-center">
              <div className="max-w-2xl mx-auto mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-on-surface bg-secondary-fixed text-on-secondary-fixed font-label-bold text-xs uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_var(--color-secondary)]">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Starter Level Recommended
                </span>
                <h2 className="font-display-lg text-3xl tracking-tight mt-4 mb-3">
                  We recommend starting with our Self-Serve Launch Template.
                </h2>
                <p className="font-body-md text-on-surface-variant text-base leading-relaxed">
                  Based on your current diagnostic profile, we recommend building foundational conversions first. Custom CRM and landing pages may introduce unnecessary overhead at this stage. Instead, leverage our free, self-serve resource.
                </p>
              </div>

              {/* Resource description */}
              <div className="bg-surface-container rounded-lg border-3 border-on-surface p-6 mb-8 max-w-lg mx-auto text-left shadow-[3px_3px_0px_0px_var(--color-secondary)]">
                <h4 className="font-label-bold text-on-surface text-sm uppercase tracking-wider mb-2">
                  What is included in the template?
                </h4>
                <p className="font-body-md text-on-surface-variant text-xs leading-relaxed mb-4">
                  A complete, modular wireframe setup including Tailwind styling variables, optimized copy placeholders, and a simple email-capture form integration guide.
                </p>
                <div className="border-t-2 border-on-surface pt-4 flex items-center justify-between text-xs font-label-bold text-on-surface-variant">
                  <span>Format: ZIP Archive / HTML</span>
                  <span>File size: 1.4 MB</span>
                </div>
              </div>

              {/* Soft download link */}
              <div>
                <a
                  href="#download-template"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Thank you! Your template download has been queued. We've sent a download link to your email.");
                  }}
                  className="cta-primary min-h-[48px] px-8 text-center uppercase tracking-wide inline-flex items-center justify-center"
                >
                  Download Free Starter Template
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <div className="mt-6">
                  <Link href="/" className="text-xs font-label-bold text-primary hover:underline uppercase tracking-wider">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t-3 border-on-surface bg-surface-container-high text-center text-xs text-on-surface-variant">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ScaleSystems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Fallback skeleton loader during URL parsing SSR
function RecommendationLoading() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex items-center justify-center px-6 noise-bg">
      <div className="w-full max-w-xl bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[4px_4px_0px_0px_var(--color-secondary)] p-8 flex flex-col items-center justify-center min-h-[300px]">
        <svg
          className="animate-spin h-10 w-10 text-primary mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Analyzing diagnostic results...</span>
      </div>
    </div>
  );
}

export default function RecommendationPage() {
  return (
    <Suspense fallback={<RecommendationLoading />}>
      <RecommendationContent />
    </Suspense>
  );
}
