import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "../lib/fonts";
import { ThemeProvider } from "next-themes";
import { PricingProvider } from "@/contexts/pricing-context";

export const metadata: Metadata = {
  title: "Technical Assessment - Payara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.variable}`}>
        <PricingProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PricingProvider>
      </body>
    </html>
  );
}
