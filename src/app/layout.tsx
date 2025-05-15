import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitPilot App - Be the Captain",
  description: "A modern fitness AI platform to get fit for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          style={{ backgroundColor: "#111827" }}
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-white p-4 md:p-6 lg:p-10 lg:pt-6 overflowH padding0`}
        >
          <Navbar />
          <main className="pt-[20px]">{children}</main>

          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
