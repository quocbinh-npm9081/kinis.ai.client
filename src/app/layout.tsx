import type { Metadata } from "next";
import {  Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"], variable: "--font-rubik" });
export const metadata: Metadata = {
  title: "Kinis.ai - AI-powered fall prediction",
  description: "AI-powered fall prediction Smart insoles for gait analysis Fall prevention technology Wearable balance assessment tools Machine learning in physical therapy Elderly fall risk assessment AI gait analysis solutions Predictive analytics for fall prevention Smart technology for senior care Digital balance testing AI-assisted physical therapy Real-time fall risk monitoring Innovative fall prevention strategies Wearable sensors for fall detection AI in geriatric care Smart insole data interpretation Personalized fall prevention plans Advanced gait analysis techniques AI balance improvement tools Technology-driven physical therapy Fall risk prediction algorithms Smart insoles for mobility assessment AI-enhanced physical rehabilitation Proactive fall prevention systems Digital health solutions for seniors Machine learning gait pattern recognition AI-driven balance training programs Smart technology for fall risk reduction Wearable tech in fall prevention AI physical therapy assistants",
};



// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
