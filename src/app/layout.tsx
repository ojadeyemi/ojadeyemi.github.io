import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <TooltipProvider delayDuration={1}>
            <div className="mx-auto min-h-screen max-w-3xl bg-background px-6 pb-12 font-sans antialiased sm:py-24">
              {children}
              <Navbar />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
