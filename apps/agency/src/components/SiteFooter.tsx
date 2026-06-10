import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-serif text-lg text-stone-800">Atelier North</p>
        <div className="flex flex-wrap gap-6 text-sm text-stone-600">
          <Link href="/" className="hover:text-stone-900">
            Home
          </Link>
          <Link href="/work" className="hover:text-stone-900">
            Work
          </Link>
          <Link href="/contact" className="min-h-11 inline-flex items-center hover:text-stone-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
