import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_HUB_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portfolio Hub | UI/UX Developer",
    template: "%s | Portfolio Hub",
  },
  description: "Expert UI/UX portfolio hub — explore SaaS, agency, e-commerce, Flutter, and editorial demos.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio Hub",
    title: "Portfolio Hub | UI/UX Developer",
    description: "Expert UI/UX portfolio hub — explore SaaS, agency, e-commerce, Flutter, and editorial demos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Hub | UI/UX Developer",
    description: "Expert UI/UX portfolio hub — explore SaaS, agency, e-commerce, Flutter, and editorial demos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        <ThemeProvider>
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
