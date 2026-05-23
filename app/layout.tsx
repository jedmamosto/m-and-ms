import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import UtmTracker from "./utm-tracker";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
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
  title: "M&Ms | Filipino MSME Product Marketplace",
  description: "Shop authentic handcrafted artisan crafts, local delicacies, and handwoven apparel directly supporting local MSMEs across the Philippines.",
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
        <CartProvider>
          <UtmTracker />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
