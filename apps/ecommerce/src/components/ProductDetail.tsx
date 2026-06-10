"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

export function ProductDetail({ product }: { product: Product }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [size, setSize] = useState(product.sizes?.[1] ?? "");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  function handleAdd() {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes ? size : undefined,
    });
  }

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square bg-stone-100">
            <Image src={product.images[imageIndex]} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="mt-3 flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setImageIndex(i)}
                className={`relative h-16 w-16 border-2 ${i === imageIndex ? "border-stone-900" : "border-transparent"}`}
                aria-label={`View image ${i + 1}`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-stone-500">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <span aria-label={`${product.rating} out of 5 stars`}>★ {product.rating.toFixed(1)}</span>
            <span className="text-stone-500">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-4 text-2xl">{formatPrice(product.price)}</p>
          <p className="mt-4 text-stone-600">{product.description}</p>

          {product.sizes && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label htmlFor="size" className="text-sm font-medium">
                  Size
                </label>
                <button type="button" onClick={() => setSizeGuideOpen(true)} className="text-sm text-amber-800 hover:underline">
                  Size guide
                </button>
              </div>
              <select
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="mt-2 w-full border border-stone-300 px-3 py-2"
              >
                {product.sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 hidden w-full bg-stone-900 py-4 text-sm font-medium uppercase tracking-wider text-white hover:bg-stone-800 lg:block"
          >
            Add to cart
          </button>

          <section className="mt-10 border-t border-stone-200 pt-8" aria-label="Customer reviews">
            <h2 className="font-serif text-xl">Reviews</h2>
            <ul className="mt-4 space-y-4">
              {product.reviews.map((r) => (
                <li key={r.author} className="text-sm">
                  <p className="font-medium">{r.author}</p>
                  <p className="text-amber-700">{"★".repeat(r.rating)}</p>
                  <p className="mt-1 text-stone-600">{r.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-stone-200 bg-white p-4 shadow-lg lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="font-medium">{formatPrice(product.price)}</p>
          <button
            type="button"
            onClick={handleAdd}
            className="flex-1 bg-stone-900 py-3 text-sm font-medium uppercase tracking-wider text-white"
          >
            Add to cart
          </button>
        </div>
      </div>

      {sizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true" onClick={() => setSizeGuideOpen(false)}>
          <div className="max-w-md bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif text-xl">Size guide</h3>
            <p className="mt-4 text-sm text-stone-600">
              S — compact spaces · M — standard · L — generous proportions. Measurements vary by product category.
            </p>
            <button type="button" className="mt-6 text-sm font-medium underline" onClick={() => setSizeGuideOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
