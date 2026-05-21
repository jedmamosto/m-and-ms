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
  // GHL native calendar URLs support query params for pre-filling:
  // e.g. ?first_name=...&last_name=...&email=...&phone=...&name=...
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
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col justify-between selection:bg-accent/20 selection:text-accent">
      <main className="flex-grow flex flex-col items-center justify-start px-4 py-12 md:py-16 max-w-5xl mx-auto w-full">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-8 fade-in">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline mb-4 uppercase tracking-wider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Book Your System Integration Call
          </h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Please choose a time that works best. We have pre-filled the booking form with your contact info to secure your spot.
          </p>
        </div>

        {/* Calendar Widget Container */}
        <div className="w-full bg-bg-primary border border-border-custom rounded-xl shadow-xl overflow-hidden p-2 md:p-4 min-h-[600px] flex flex-col items-center justify-center relative fade-in">
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
      <footer className="py-8 border-t border-border-custom bg-bg-primary text-center text-xs text-text-muted">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} ScaleSystems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BookLoading() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-bg-primary border border-border-custom rounded-xl shadow-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
        <svg
          className="animate-spin h-10 w-10 text-accent mb-4"
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
        <span className="text-sm font-semibold text-text-secondary">Loading Booking Calendar...</span>
      </div>
    </div>
  );
}

export default function Book() {
  return (
    <Suspense fallback={<BookLoading />}>
      <BookContent />
    </Suspense>
  );
}
