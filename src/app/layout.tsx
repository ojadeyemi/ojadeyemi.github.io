import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OJ Adeyemi",
  description:
    "OJ Adeyemi - Personal Portfolio showcasing projects, skills, and experiences as a Computer Science student.",
  metadataBase: new URL("https://ojadeyemi.github.io/"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "OJ Adeyemi",
    description: "OJ Adeyemi's portfolio.",
    url: "https://ojadeyemi.github.io/",
    type: "website",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "OJ Adeyemi's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OJ Adeyemi",
    description: "OJ Adeyemi's portfolio.",
    images: ["/og_image.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://ojadeyemi.github.io/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="/sw-registration.js" defer></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <TooltipProvider delayDuration={1}>
            <div className="mx-auto min-h-screen max-w-3xl bg-background px-6 pb-12 font-sans antialiased sm:py-10">
              {children}
              <Navbar />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
