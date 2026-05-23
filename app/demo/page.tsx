import type { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "MSME Marketplace Sandbox | M&Ms",
  description: "Test interactive sandbox features for the M&Ms Filipino MSME product marketplace, including the shop checkout, maker matchmaking quiz, and merchant onboarding portal.",
  openGraph: {
    title: "MSME Marketplace Sandbox | M&Ms",
    description: "Test interactive sandbox features for the M&Ms Filipino MSME product marketplace.",
    type: "website",
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
