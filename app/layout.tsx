import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import ThemeToggle from "@/components/themeToggle";
import ThemeProviders from "./themeProvider"
import React from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yinkai Xiong",
  description: "Yinkai Xiong Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // May need an attribute in html tag: suppressHydrationWarning
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <ThemeProviders>
          <Nav />
          {children}
          <ThemeToggle />
        </ThemeProviders>
      </body>
    </html>
  );
}
