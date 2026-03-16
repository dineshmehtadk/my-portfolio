import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Dinesh Mehta | Frontend Developer",
  description: "Portfolio of Dinesh Mehta - Frontend & Software Developer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased dark`}>
        <main className="min-h-screen w-full">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}