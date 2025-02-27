import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Technical Assessment - Payara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable}`}>{children}</body>
    </html>
  );
}
