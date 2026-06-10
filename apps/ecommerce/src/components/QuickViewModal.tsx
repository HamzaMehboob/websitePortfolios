"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

export function QuickViewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-square bg-stone-100">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-stone-500">{product.category}</p>
          <h2 className="mt-1 font-serif text-2xl">{product.name}</h2>
          <p className="mt-2 text-lg">{formatPrice(product.price)}</p>
          <p className="mt-4 text-sm text-stone-600">{product.description}</p>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => {
                addItem({ productId: product.id, name: product.name, price: product.price, image: product.images[0] });
                onClose();
              }}
              className="flex-1 bg-stone-900 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-stone-800"
            >
              Add to cart
            </button>
            <Link
              href={`/product/${product.slug}`}
              onClick={onClose}
              className="flex flex-1 items-center justify-center border border-stone-900 py-3 text-sm font-medium uppercase tracking-wider"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
