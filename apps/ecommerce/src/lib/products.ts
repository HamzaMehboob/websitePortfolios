import { publicAsset } from "@/lib/assets";

export type Category = "furniture" | "lighting" | "textiles" | "decor";

export interface Review {
  author: string;
  rating: number;
  text: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  images: string[];
  sizes?: string[];
  rating: number;
  reviewCount: number;
  reviews: Review[];
  relatedId?: string;
}

const base = (id: string, name: string, category: Category, price: number, desc: string, related?: string): Product => ({
  id,
  slug: id,
  name,
  category,
  price,
  description: desc,
  images: [publicAsset(`/products/${id}.svg`), publicAsset(`/products/${id}-2.svg`)],
  sizes: category === "furniture" || category === "textiles" ? ["S", "M", "L"] : undefined,
  rating: 4.2 + (id.length % 8) * 0.1,
  reviewCount: 12 + (id.length % 20),
  reviews: [
    { author: "Alex M.", rating: 5, text: "Beautiful quality — exactly as pictured." },
    { author: "Sam K.", rating: 4, text: "Fast shipping and thoughtful packaging." },
  ],
  relatedId: related,
});

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "furniture", label: "Furniture" },
  { id: "lighting", label: "Lighting" },
  { id: "textiles", label: "Textiles" },
  { id: "decor", label: "Decor" },
];

export const products: Product[] = [
  base("oak-console", "Oak Console Table", "furniture", 48900, "Solid oak with soft-close drawers.", "linen-throw"),
  base("walnut-chair", "Walnut Lounge Chair", "furniture", 79900, "Hand-finished walnut frame with linen upholstery.", "ceramic-vase"),
  base("marble-side", "Marble Side Table", "furniture", 32900, "Carrara top, powder-coated steel base."),
  base("dining-bench", "Dining Bench", "furniture", 54900, "Seats three comfortably; FSC-certified wood."),
  base("arc-floor", "Arc Floor Lamp", "lighting", 27900, "Brushed brass arc with dimmable LED.", "table-lamp"),
  base("table-lamp", "Ceramic Table Lamp", "lighting", 14900, "Matte ceramic base, warm linen shade.", "arc-floor"),
  base("pendant-set", "Pendant Light Set", "lighting", 19900, "Set of two smoked-glass pendants."),
  base("wall-sconce", "Wall Sconce", "lighting", 12900, "Minimal wall mount, 2700K bulb included."),
  base("linen-throw", "Linen Throw", "textiles", 8900, "Stone-washed European linen.", "oak-console"),
  base("wool-rug", "Wool Area Rug", "textiles", 34900, "Hand-tufted wool in neutral tones."),
  base("cotton-duvet", "Cotton Duvet Cover", "textiles", 11900, "400-thread organic cotton."),
  base("pillow-set", "Linen Pillow Set", "textiles", 6900, "Set of two envelope-closure pillows."),
  base("ceramic-vase", "Ceramic Vase", "decor", 5900, "Wheel-thrown stoneware.", "walnut-chair"),
  base("brass-tray", "Brass Serving Tray", "decor", 7900, "Antique brass finish."),
  base("mirror-round", "Round Wall Mirror", "decor", 16900, "Thin brass frame, 24 inch."),
  base("candle-set", "Soy Candle Set", "decor", 4500, "Three calming scents, 40hr burn."),
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProduct(product: Product) {
  if (!product.relatedId) return products.find((p) => p.category === product.category && p.id !== product.id);
  return products.find((p) => p.id === product.relatedId);
}
