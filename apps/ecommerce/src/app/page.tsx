import Link from "next/link";

/** Works on static GitHub Pages export — no JS-only redirect. */
export default function Home() {
  return (
    <div className="mx-auto max-w-lg py-24 text-center">
      <h1 className="font-serif text-3xl text-stone-900">Forma Shop</h1>
      <p className="mt-4 text-stone-600">Premium home goods with conversion-focused commerce UX.</p>
      <Link
        href="/shop"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-stone-900 px-8 py-3 text-sm font-medium text-stone-50 hover:bg-stone-800"
      >
        Enter shop
      </Link>
    </div>
  );
}
