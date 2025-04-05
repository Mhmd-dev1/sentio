import type { Metadata } from "next";
import "./globals.css";
import MobilePopupModal from "@/components/PopupModal";
import { Navbar } from "@/components/Navbar";
import { Playfair_Display } from "next/font/google";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sentio--The Future Of Fragrance",
  description:
    "Introducing the world's first smart fragrance—an AI-powered scent system that learns and evolves with you. This revolutionary bottle analyzes your body chemistry and wellness signals in real time, crafting a scent that adapts to your skin,mood,and wellbeing. No static perfumes,no wrong choices—just a fragrance that intuitively supports you throughout your day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/test.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/test.ico" type="image/x-icon" />
      </head>
      <body
        className={` ${playfairDisplay.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />
        {children}
        <MobilePopupModal />
      </body>
    </html>
  );
}
