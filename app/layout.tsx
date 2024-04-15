import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/css/globals.css";

export const metadata: Metadata = {
  authors: [{ name: "Scott Milliorn", url: "https://milliorn.xyz/" }],
  description:
    "A weather report application built with Next.js and Tailwind CSS.",
  generator: "Next.js",
  keywords: ["weather", "report", "next.js", "tailwind", "css"],
  title: "Weather Report",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
