"use client";

import Image from "next/image";
import Link from "next/link";
import { getRelatedProduct, products, type Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

function Upsell({ lastProductId }: { lastProductId?: string }) {
  const addItem = useCartStore((s) => s.addItem);
  const last = products.find((p) => p.id === lastProductId);
  const related: Product | undefined = last ? getRelatedProduct(last) : products[0];
  if (!related) return null;

  return (
    <div className="mt-6 rounded-lg border border-stone-200 bg-stone-50 p-4">
      <p className="text-xs uppercase tracking-widest text-stone-500">You may also like</p>
      <div className="mt-3 flex gap-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-stone-200">
          <Image src={related.images[0]} alt="" fill className="object-cover" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{related.name}</p>
          <p className="text-sm text-stone-600">{formatPrice(related.price)}</p>
          <button
            type="button"
            onClick={() =>
              addItem({
                productId: related.id,
                name: related.name,
                price: related.price,
                image: related.images[0],
              })
            }
            className="mt-2 text-sm font-medium text-amber-800 hover:underline"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const items = useCartStore((s) => s.items);
  const closeCart = useCartStore((s) => s.closeCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = useCartStore((s) => s.total());

  if (!isOpen) return null;

  const lastId = items[items.length - 1]?.productId;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button type="button" className="flex-1 bg-black/40" aria-label="Close cart" onClick={closeCart} />
      <div className="flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="font-serif text-xl">Your cart</h2>
          <button type="button" onClick={closeCart} className="text-stone-500 hover:text-stone-900" aria-label="Close">
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-stone-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={`${item.productId}-${item.size}`} className="flex gap-4">
                  <div className="relative h-20 w-20 bg-stone-100">
                    <Image src={item.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    {item.size && <p className="text-xs text-stone-500">Size: {item.size}</p>}
                    <p className="text-sm text-stone-600">{formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="h-8 w-8 border border-stone-300"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1, item.size)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="h-8 w-8 border border-stone-300"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1, item.size)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="ml-auto text-xs text-stone-500 hover:text-red-600"
                        onClick={() => removeItem(item.productId, item.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Upsell lastProductId={lastId} />
        </div>
        <div className="border-t border-stone-200 px-6 py-4">
          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Link
            href="/checkout"
            onClick={closeCart}
            className={`mt-4 block w-full py-3 text-center text-sm font-medium uppercase tracking-wider ${
              items.length ? "bg-stone-900 text-white hover:bg-stone-800" : "pointer-events-none bg-stone-200 text-stone-400"
            }`}
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
