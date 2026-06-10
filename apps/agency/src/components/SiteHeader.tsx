"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HubBackLink } from "@/components/HubBackLink";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-[#faf9f7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-serif text-xl tracking-tight text-stone-900">
          Atelier North
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-[0.2em] transition-colors",
                pathname === link.href ? "text-stone-900" : "text-stone-500 hover:text-stone-800",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <HubBackLink />
        </div>
        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer text-sm uppercase tracking-widest">Menu</summary>
          <div className="absolute right-0 mt-2 w-48 rounded border border-stone-200 bg-[#faf9f7] p-3 shadow-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2 text-sm">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-stone-200 pt-2">
              <HubBackLink />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
