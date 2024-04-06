import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Represents the metadata for the Weather Report Application.
 *  https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  /**
   * The name of the application.
   */
  applicationName: "Weather Report Application",

  /**
   * The creator of the application.
   */
  creator: "Scott Milliorn",

  /**
   * The description of the application.
   */
  description: "Get the latest weather report for your location.",

  /**
   * The keywords associated with the application.
   */
  keywords: ["weather", "report", "forecast"],

  /**
   * The robots meta tag for search engine indexing.
   */
  robots: "index, follow",

  /**
   * The title of the application.
   */
  title: "Weather Report",

  /**
   * The publisher of the application.
   */
  publisher: "Scott Milliorn",

  /**
   * The Twitter metadata for the application.
   */
  twitter: {
    /**
     * The Twitter site handle.
     */
    site: "@scottmilliorn",

    /**
     * The Twitter creator handle.
     */
    creator: "@scottmilliorn",
  },

  /**
   * The format detection settings for the application.
   */
  formatDetection: {
    /**
     * Whether email format detection is enabled.
     */
    email: false,

    /**
     * Whether address format detection is enabled.
     */
    address: false,

    /**
     * Whether telephone format detection is enabled.
     */
    telephone: false,
  },

  /**
   * The authors of the application.
   */
  authors: [{ name: "Scott Milliorn", url: "https://milliorn.xyz" }],

  /**
   * The generator of the application.
   */
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
