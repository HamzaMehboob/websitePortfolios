import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { SkipLink } from "@/components/SkipLink";
import { ShopHeader } from "@/components/ShopHeader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Forma — Premium Home Goods", template: "%s | Forma" },
  description: "Premium home goods with conversion-focused commerce UX.",
  openGraph: {
    type: "website",
    title: "Forma — Premium Home Goods",
    description: "Premium home goods with conversion-focused commerce UX.",
  },
  twitter: { card: "summary_large_image", title: "Forma Shop" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <SkipLink />
        <ShopHeader />
        <main id="main-content" className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6">
          {children}
        </main>
        <CartDrawer />
      </body>
    </html>
  );
}
