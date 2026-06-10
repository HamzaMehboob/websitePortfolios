"use client";

import Link from "next/link";
import { HubBackLink } from "@/components/HubBackLink";
import { useCartStore } from "@/store/cartStore";

export function ShopHeader() {
  const itemCount = useCartStore((s) => s.itemCount());
  const openCart = useCartStore((s) => s.openCart);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#faf8f5]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/shop" className="font-serif text-2xl tracking-tight text-stone-900">
          Forma
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/shop" className="hidden text-sm text-stone-600 hover:text-stone-900 sm:inline">
            Shop
          </Link>
          <HubBackLink />
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-md px-3 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-amber-600"
            aria-label={`Open cart, ${itemCount} items`}
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-xs text-white">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
