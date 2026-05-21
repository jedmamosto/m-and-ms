import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import UtmTracker from "./utm-tracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScaleSystems | Custom Landing Pages & CRM Funnels for MSMEs",
  description: "Stop wasting time on manual follow-ups. We build custom high-converting landing pages and automated booking funnels designed for MSME growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <UtmTracker />
        {children}
      </body>
    </html>
  );
}
