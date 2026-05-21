"use client";

import { useEffect } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface StoredUtms {
  firstTouch: UtmParams;
  lastTouch: UtmParams;
}

export function getStoredUtmParams(): StoredUtms {
  if (typeof window === "undefined") {
    return { firstTouch: {}, lastTouch: {} };
  }
  try {
    const firstTouchRaw = localStorage.getItem("utm_first_touch");
    const lastTouchRaw = localStorage.getItem("utm_last_touch");
    return {
      firstTouch: firstTouchRaw ? JSON.parse(firstTouchRaw) : {},
      lastTouch: lastTouchRaw ? JSON.parse(lastTouchRaw) : {},
    };
  } catch (e) {
    console.error("Failed to read UTMs from localStorage", e);
    return { firstTouch: {}, lastTouch: {} };
  }
}

export default function UtmTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const params = new URLSearchParams(window.location.search);
      const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
      const utms: UtmParams = {};

      keys.forEach((key) => {
        const val = params.get(key);
        if (val) {
          utms[key] = val;
        }
      });

      if (Object.keys(utms).length > 0) {
        // First-touch: only set if not already stored
        if (!localStorage.getItem("utm_first_touch")) {
          localStorage.setItem("utm_first_touch", JSON.stringify(utms));
        }
        // Last-touch: always overwrite
        localStorage.setItem("utm_last_touch", JSON.stringify(utms));
      }
    } catch (e) {
      console.error("Failed to store UTMs in localStorage", e);
    }
  }, []);

  return null;
}
