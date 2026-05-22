"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getStoredUtmParams } from "../utm-tracker";

// Defining types for form data
interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface QuizData {
  contact: ContactInfo;
  painPoints: string[];
  commitment: number; // 1-10
  budget: string;
  timeline: string;
}

const PAIN_POINT_OPTIONS = [
  { id: "low_lead", label: "Low lead volume" },
  { id: "manual_follow", label: "Manual follow-ups" },
  { id: "slow_site", label: "Slow site speed" },
  { id: "no_booking", label: "Lack of booking organization" },
];

const BUDGET_OPTIONS = [
  { label: "Under $1k", value: "under_1k" },
  { label: "$1k - $3k", value: "1k_3k" },
  { label: "$3k+", value: "gt_3k" },
];

const TIMELINE_OPTIONS = [
  { label: "Exploring", value: "exploring" },
  { label: "1 month", value: "1_month" },
  { label: "Immediately", value: "immediately" },
];

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuizData>({
    contact: { name: "", email: "", phone: "" },
    painPoints: [],
    commitment: 5,
    budget: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Validation functions
  const validateStep = (currentStep: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.contact.name.trim()) {
        stepErrors.name = "Full name is required.";
      }
      if (!formData.contact.email.trim()) {
        stepErrors.email = "Email address is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.contact.email)) {
        stepErrors.email = "Please enter a valid email address.";
      }
      if (!formData.contact.phone.trim()) {
        stepErrors.phone = "Phone number is required.";
      } else if (!/^\+?[0-9\s\-()]{7,18}$/.test(formData.contact.phone)) {
        stepErrors.phone = "Please enter a valid phone number.";
      }
    }

    if (currentStep === 2) {
      if (formData.painPoints.length === 0) {
        stepErrors.painPoints = "Please select at least one pain point.";
      }
    }

    if (currentStep === 4) {
      if (!formData.budget) {
        stepErrors.budget = "Please select your budget range.";
      }
    }

    if (currentStep === 5) {
      if (!formData.timeline) {
        stepErrors.timeline = "Please select your project timeline.";
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  // Checkbox handler for Step 2
  const handlePainPointToggle = (label: string) => {
    setFormData((prev) => {
      const selected = prev.painPoints.includes(label)
        ? prev.painPoints.filter((p) => p !== label)
        : [...prev.painPoints, label];
      return { ...prev, painPoints: selected };
    });
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setSubmitError("");

    // Calculate score logic:
    // Pain points: +10 pts per selected point (max 40 pts)
    const painPointsScore = formData.painPoints.length * 10;

    // Budget: Under $1k = 0 (disqualify), $1k - $3k = 10, $3k+ = 20
    let budgetScore = 0;
    if (formData.budget === "1k_3k") budgetScore = 10;
    else if (formData.budget === "gt_3k") budgetScore = 20;

    // Timeline: Exploring = 0 (disqualify), 1 month = 10, Immediately = 20
    let timelineScore = 0;
    if (formData.timeline === "1_month") timelineScore = 10;
    else if (formData.timeline === "immediately") timelineScore = 20;

    // Commitment: 1-6 = 0 (disqualify), 7-8 = 15, 9-10 = 20
    let commitmentScore = 0;
    if (formData.commitment >= 7 && formData.commitment <= 8) commitmentScore = 15;
    else if (formData.commitment >= 9) commitmentScore = 20;

    const calculatedScore = painPointsScore + budgetScore + timelineScore + commitmentScore;

    // Hard disqualifier rules
    const isDisqualified =
      formData.budget === "under_1k" ||
      formData.timeline === "exploring" ||
      formData.commitment < 7 ||
      calculatedScore < 70;

    // Fetch UTM params
    const utmParams = getStoredUtmParams();

    // Payload submission to API route
    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: formData.contact,
          painPoints: formData.painPoints,
          commitment: formData.commitment,
          budget: formData.budget,
          timeline: formData.timeline,
          score: calculatedScore,
          isQualified: !isDisqualified,
          utms: utmParams,
        }),
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await response.json();

      router.push(
        `/recommendation?score=${calculatedScore}&disqualified=${isDisqualified ? "true" : "false"}&name=${encodeURIComponent(
          formData.contact.name
        )}&email=${encodeURIComponent(formData.contact.email)}&phone=${encodeURIComponent(formData.contact.phone)}`
      );
    } catch (e) {
      console.error("Quiz submission failure", e);
      setSubmitError("We had a minor communication issue, but your settings have been saved locally. Let's look at your roadmap.");
      // Redirect anyway after 3 seconds so the lead does not get stuck
      setTimeout(() => {
        router.push(
          `/recommendation?score=${calculatedScore}&disqualified=${isDisqualified ? "true" : "false"}&name=${encodeURIComponent(
            formData.contact.name
          )}&email=${encodeURIComponent(formData.contact.email)}&phone=${encodeURIComponent(formData.contact.phone)}`
        );
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = Math.round((step / 5) * 100);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col items-center justify-center px-4 py-12 selection:bg-primary-container selection:text-on-primary-container noise-bg">
      <div className="w-full max-w-xl bg-surface-container-lowest border-3 border-on-surface rounded-xl shadow-[6px_6px_0px_0px_var(--color-secondary)] overflow-hidden fade-in">
        {/* Progress Bar & Header */}
        <div className="bg-surface-container px-8 py-6 border-b-3 border-on-surface">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label-bold text-label-bold uppercase tracking-wider text-primary">
              Step {step} of 5
            </span>
            <span className="font-label-bold text-label-bold text-on-surface-variant">{progressPercent}% Completed</span>
          </div>
          <div className="w-full h-4 bg-surface-container-high border-2 border-on-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-primary border-r-2 border-on-surface transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Wizard Form Area */}
        <div className="px-8 py-10 min-h-[380px] flex flex-col justify-between">
          <div>
            {/* STEP 1: CONTACT INFO */}
            {step === 1 && (
              <div className="fade-in">
                <h2 className="font-headline-md text-2xl text-on-surface tracking-tight mb-2">Let&apos;s start with your contact details</h2>
                <p className="font-body-md text-on-surface-variant text-sm mb-8">
                  We need this to associate your diagnostic score and build your custom roadmap.
                </p>

                <div className="space-y-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name-input" className="font-label-bold text-label-bold text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      placeholder="e.g. John Doe"
                      className="form-input"
                      autoComplete="name"
                      value={formData.contact.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, name: e.target.value },
                        }))
                      }
                    />
                    {errors.name && <p className="font-label-bold text-xs text-error mt-1">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email-input" className="font-label-bold text-label-bold text-on-surface-variant">
                      Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      placeholder="e.g. john@company.com"
                      className="form-input"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.contact.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, email: e.target.value },
                        }))
                      }
                    />
                    {errors.email && <p className="font-label-bold text-xs text-error mt-1">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone-input" className="font-label-bold text-label-bold text-on-surface-variant">
                      Phone Number
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      placeholder="e.g. +1 (555) 000-0000"
                      className="form-input"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.contact.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          contact: { ...prev.contact, phone: e.target.value },
                        }))
                      }
                    />
                    {errors.phone && <p className="font-label-bold text-xs text-error mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PAIN POINTS */}
            {step === 2 && (
              <div className="fade-in">
                <h2 className="font-headline-md text-2xl text-on-surface tracking-tight mb-2">What is holding your business back?</h2>
                <p className="font-body-md text-on-surface-variant text-sm mb-8">
                  Select the main challenges you are currently facing (select all that apply).
                </p>

                <div className="space-y-3.5">
                  {PAIN_POINT_OPTIONS.map((option) => {
                    const isSelected = formData.painPoints.includes(option.label);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handlePainPointToggle(option.label)}
                        className={`w-full text-left px-5 py-4 border-3 rounded-lg font-headline-md text-base flex items-center justify-between transition-all duration-200 min-h-[48px] ${
                          isSelected
                            ? "border-on-surface bg-tertiary-fixed text-on-tertiary-fixed shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
                            : "border-on-surface bg-surface text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        <span>{option.label}</span>
                        <div
                          className={`w-6 h-6 rounded border-3 flex items-center justify-center transition-colors ${
                            isSelected ? "border-on-surface bg-primary text-white" : "border-on-surface bg-surface"
                          }`}
                        >
                          {isSelected && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                  {errors.painPoints && <p className="font-label-bold text-xs text-error mt-1">{errors.painPoints}</p>}
                </div>
              </div>
            )}

            {/* STEP 3: COMMITMENT SCALE */}
            {step === 3 && (
              <div className="fade-in">
                <h2 className="font-headline-md text-2xl text-on-surface tracking-tight mb-2">How committed are you to fixing these gaps?</h2>
                <p className="font-body-md text-on-surface-variant text-sm mb-8">
                  Rate your commitment level from 1 (Exploring) to 10 (Critical immediate priority).
                </p>

                <div className="py-6 flex flex-col items-center">
                  <div className="font-display-lg text-5xl font-extrabold text-primary mb-6 animate-pulse">
                    {formData.commitment}
                  </div>

                  {/* 1-10 circular selector button row */}
                  <div className="grid grid-cols-5 gap-3 w-full max-w-md">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            commitment: val,
                          }))
                        }
                        className={`aspect-square rounded-full flex items-center justify-center font-black text-base transition-all duration-200 border-3 min-h-[48px] min-w-[48px] ${
                          formData.commitment === val
                            ? "bg-primary border-on-surface text-white shadow-[3px_3px_0px_0px_var(--color-secondary)] scale-110"
                            : "bg-surface border-on-surface text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between w-full max-w-md mt-6 font-label-bold text-xs text-on-surface-variant tracking-wider px-2">
                    <span>EXPLORING</span>
                    <span>MODERATE</span>
                    <span>ALL IN</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: BUDGET RANGE */}
            {step === 4 && (
              <div className="fade-in">
                <h2 className="font-headline-md text-2xl text-on-surface tracking-tight mb-2">What is your budget for systems development?</h2>
                <p className="font-body-md text-on-surface-variant text-sm mb-8">
                  Select the budget allocation range planned for custom funnel/CRM integration projects.
                </p>

                <div className="space-y-3.5">
                  {BUDGET_OPTIONS.map((option) => {
                    const isSelected = formData.budget === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            budget: option.value,
                          }))
                        }
                        className={`w-full text-left px-5 py-4 border-3 rounded-lg font-headline-md text-base flex items-center justify-between transition-all duration-200 min-h-[48px] ${
                          isSelected
                            ? "border-on-surface bg-tertiary-fixed text-on-tertiary-fixed shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
                            : "border-on-surface bg-surface text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        <span>{option.label}</span>
                        <div
                          className={`w-6 h-6 rounded-full border-3 flex items-center justify-center bg-surface transition-colors ${
                            isSelected ? "border-on-surface" : "border-on-surface"
                          }`}
                        >
                          {isSelected && <div className="w-3 h-3 rounded-full bg-primary" />}
                        </div>
                      </button>
                    );
                  })}
                  {errors.budget && <p className="font-label-bold text-xs text-error mt-1">{errors.budget}</p>}
                </div>
              </div>
            )}

            {/* STEP 5: TIMELINE */}
            {step === 5 && (
              <div className="fade-in">
                <h2 className="font-headline-md text-2xl text-on-surface tracking-tight mb-2">When do you want to kickoff the system?</h2>
                <p className="font-body-md text-on-surface-variant text-sm mb-8">
                  Choose the timeline for integrating custom funnels and automations.
                </p>

                <div className="space-y-3.5">
                  {TIMELINE_OPTIONS.map((option) => {
                    const isSelected = formData.timeline === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            timeline: option.value,
                          }))
                        }
                        className={`w-full text-left px-5 py-4 border-3 rounded-lg font-headline-md text-base flex items-center justify-between transition-all duration-200 min-h-[48px] ${
                          isSelected
                            ? "border-on-surface bg-tertiary-fixed text-on-tertiary-fixed shadow-[3px_3px_0px_0px_var(--color-secondary)] translate-y-[-2px] translate-x-[-2px]"
                            : "border-on-surface bg-surface text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        <span>{option.label}</span>
                        <div
                          className={`w-6 h-6 rounded-full border-3 flex items-center justify-center bg-surface transition-colors ${
                            isSelected ? "border-on-surface" : "border-on-surface"
                          }`}
                        >
                          {isSelected && <div className="w-3 h-3 rounded-full bg-primary" />}
                        </div>
                      </button>
                    );
                  })}
                  {errors.timeline && <p className="font-label-bold text-xs text-error mt-1">{errors.timeline}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Graceful Submit Error Message */}
          {submitError && (
            <div className="mt-4 p-4 rounded-lg bg-error-container border-3 border-on-surface text-sm text-on-error-container font-label-bold shadow-[2px_2px_0px_0px_var(--color-secondary)]">
              {submitError}
            </div>
          )}

          {/* Wizard Footer Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t-3 border-on-surface gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                disabled={isSubmitting}
                className="px-5 py-3 border-3 border-on-surface text-on-surface hover:bg-surface-container font-button-text text-button-text rounded bg-surface min-h-[48px] transition-all disabled:opacity-50"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-primary text-on-primary hover:bg-primary-container font-button-text text-button-text border-3 border-on-surface rounded min-h-[48px] transition-all flex items-center gap-1 shadow-[3px_3px_0px_0px_var(--color-secondary)] hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-none"
              >
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-primary text-on-primary hover:bg-primary-container font-button-text text-button-text border-3 border-on-surface rounded min-h-[48px] transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_var(--color-secondary)] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none disabled:opacity-50 w-full sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Analyzing Systems...
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
