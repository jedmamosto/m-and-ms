"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function BookContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  // Split name for GHL's first/last name structure if needed
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  // GHL iframe URL construction. We default to a placeholder widget slug.
  const calendarSlug = "system-integration-discovery"; // Placeholder calendar ID/slug
  const calendarBaseUrl = `https://link.gohighlevel.com/widget/booking/${calendarSlug}`;

  const queryParams = new URLSearchParams();
  if (firstName) queryParams.set("first_name", firstName);
  if (lastName) queryParams.set("last_name", lastName);
  if (name) queryParams.set("name", name);
  if (email) queryParams.set("email", email);
  if (phone) queryParams.set("phone", phone);

  const iframeSrc = `${calendarBaseUrl}?${queryParams.toString()}`;

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-between selection:bg-primary-container selection:text-on-primary-container noise-bg">
      <main className="flex-grow flex flex-col items-center justify-start px-4 py-12 md:py-16 max-w-5xl mx-auto w-full">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 fade-in">
          <Link
            href="/"
            className="inline-flex items-center justify-center min-h-[44px] px-3 py-2 gap-1.5 text-xs font-label-bold text-primary hover:underline mb-4 uppercase tracking-wider"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-display-lg text-3xl md:text-4xl tracking-tight mb-3 text-on-surface uppercase">
            Schedule Your Seller Verification Call
          </h1>
          <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
            Please choose a convenient time for your onboarding call. We have pre-filled the registration form with your contact details to secure your slot.
          </p>
        </div>

        {/* Calendar Widget Container */}
        <div className="w-full bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[6px_6px_0px_0px_var(--color-secondary)] overflow-hidden p-2 md:p-4 min-h-[600px] flex flex-col items-center justify-center relative fade-in">
          {/* GHL Calendar Embed */}
          <iframe
            src={iframeSrc}
            style={{ width: "100%", border: "none", minHeight: "680px" }}
            scrolling="no"
            id="ghl-calendar-iframe"
            title="GoHighLevel Calendar Booking Widget"
            className="w-full rounded-lg"
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t-3 border-on-surface bg-surface-container-high text-center text-xs text-on-surface-variant animate-none">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ScaleSystems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors min-h-[44px] flex items-center justify-center">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors min-h-[44px] flex items-center justify-center">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BookLoading() {
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
        <span className="text-sm font-label-bold text-on-surface-variant uppercase tracking-wider">Loading Booking Calendar...</span>
      </div>
    </div>
  );
}

export default function BookClient() {
  return (
    <Suspense fallback={<BookLoading />}>
      <BookContent />
    </Suspense>
  );
}
