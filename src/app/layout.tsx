import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CommandProvider } from "@/components/terminal/CommandProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LARP CEO - Manage Your AI Agents",
  description: "LARP CEO is the ultimate AI agent management platform for enterprise-level operations",
  keywords: "AI, agents, management, CEO, enterprise, LARP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CommandProvider>
            {children}
          </CommandProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
