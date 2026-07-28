import {
  Manrope,
  Cormorant_Garamond,
  Allura,
} from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  weight: "400",
});

import WhatsAppWidget from "./components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Noor Al Zahraa | Premium Ladies & Kids Boutique, Sharjah",
  description: "Premium ladies designer wear, kids festive collections, custom tailoring, bridal couture, and professional alterations at Noor Al Zahraa Boutique in Sharjah, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
  lang="en"
  className={`${manrope.variable} ${cormorant.variable} ${allura.variable}`}
>
      <body className="min-h-full flex flex-col relative">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}