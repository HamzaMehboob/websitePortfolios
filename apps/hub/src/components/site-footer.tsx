import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          UI/UX specialist portfolio — six demos, one hub.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/"
            className="font-medium text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400"
          >
            Back to Home
          </Link>
          <Link href="/demos" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
            Portfolio Demos
          </Link>
          <Link href="/contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
