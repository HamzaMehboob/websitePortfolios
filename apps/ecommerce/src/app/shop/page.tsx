import { ShopCatalog } from "@/components/ShopCatalog";

export const metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <div>
      <h1 className="font-serif text-4xl text-stone-900">Shop all</h1>
      <p className="mt-2 text-stone-600">Curated furniture, lighting, textiles, and decor.</p>
      <div className="mt-10">
        <ShopCatalog />
      </div>
    </div>
  );
}
