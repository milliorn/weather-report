import "@/app/css/globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  width: "device-width",
  initialScale: 1
};

/**
 * Represents the metadata for a weather report application.
 */
export const metadata: Metadata = {
  authors: [{ name: "Scott Milliorn", url: "https://milliorn.xyz/" }],
  creator: "Scott Milliorn",
  publisher: "Scott Milliorn",
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
