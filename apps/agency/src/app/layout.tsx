import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { SkipLink } from "@/components/SkipLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atelier North",
    template: "%s | Atelier North",
  },
  description: "Boutique creative design studio — branding, digital, and spatial craft.",
  openGraph: {
    type: "website",
    title: "Atelier North",
    description: "Boutique creative design studio — branding, digital, and spatial craft.",
  },
  twitter: { card: "summary_large_image", title: "Atelier North" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <SkipLink />
        <SiteHeader />
        <PageTransition>
          <main id="main-content" className="min-h-screen pt-20">
            {children}
          </main>
        </PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
