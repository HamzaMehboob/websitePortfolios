import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about UI/UX and frontend opportunities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
