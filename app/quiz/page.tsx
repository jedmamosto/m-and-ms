"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuizRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/demo?tab=quiz");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface noise-bg text-on-surface">
      <div className="text-center p-8 border-3 border-on-surface bg-surface-container rounded-xl shadow-[4px_4px_0px_0px_var(--color-secondary)]">
        <span className="w-8 h-8 border-3 border-primary border-t-transparent animate-spin rounded-full inline-block mb-3" />
        <p className="font-label-bold text-xs uppercase tracking-wider">Redirecting to Matchmaker Quiz Sandbox...</p>
      </div>
    </div>
  );
}
