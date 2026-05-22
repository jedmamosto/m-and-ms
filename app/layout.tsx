import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import UtmTracker from "./utm-tracker";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${bricolageGrotesque.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface noise-bg font-body-md">
        <UtmTracker />
        {children}
      </body>
    </html>
  );
}
