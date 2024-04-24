import "@/app/css/globals.css";
import type { Metadata } from "next";

/**
 * Represents the metadata for a weather report application.
 */
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
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

/**
 * Root layout component.
 *
 * @param children - The content to be rendered inside the layout.
 * @returns The rendered layout.
 */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
