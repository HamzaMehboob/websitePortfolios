"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/demos", label: "Demos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-50"
        >
          Portfolio Hub
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  active
                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-md border border-neutral-200 bg-white p-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
