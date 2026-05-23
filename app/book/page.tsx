import type { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
  title: "Book Onboarding & Verification | M&Ms Merchant Portal",
  description: "Schedule your MSME seller verification and onboarding video call with the M&Ms Marketplace team to list your native products.",
  openGraph: {
    title: "Book Onboarding & Verification | M&Ms Merchant Portal",
    description: "Schedule your MSME seller verification and onboarding video call.",
    type: "website",
  },
};

export default function BookPage() {
  return <BookClient />;
}
