"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { QuickViewModal } from "@/components/QuickViewModal";
import { categories, products, type Category, type Product } from "@/lib/products";
import { cn, formatPrice } from "@/lib/utils";

type Sort = "price-asc" | "price-desc" | "name";

export function ShopCatalog() {
  const [category, setCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState<Sort>("name");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const list = category === "all" ? [...products] : products.filter((p) => p.category === category);
    if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price);
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [category, sort]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm capitalize",
                category === cat.id ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="rounded-md border border-stone-300 px-3 py-2 text-sm"
          aria-label="Sort products"
        >
          <option value="name">Name</option>
          <option value="price-asc">Price: Low to high</option>
          <option value="price-desc">Price: High to low</option>
        </select>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <article key={product.id} className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Link href={`/product/${product.slug}`}>
                <Image src={product.images[0]} alt={product.name} fill className="object-cover transition group-hover:scale-[1.02]" />
              </Link>
              <button
                type="button"
                onClick={() => setQuickView(product)}
                className="absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 text-xs font-medium uppercase tracking-wider opacity-0 transition group-hover:opacity-100 focus:opacity-100"
              >
                Quick view
              </button>
            </div>
            <div className="mt-3">
              <p className="text-xs uppercase tracking-widest text-stone-500">{product.category}</p>
              <Link href={`/product/${product.slug}`} className="mt-1 block font-serif text-lg hover:underline">
                {product.name}
              </Link>
              <p className="text-stone-700">{formatPrice(product.price)}</p>
            </div>
          </article>
        ))}
      </div>

      {quickView && <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />}
    </>
  );
}
