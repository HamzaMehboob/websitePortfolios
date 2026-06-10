import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
        <li>
          <Link
            href="/"
            className="font-medium text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-neutral-50"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 dark:text-neutral-100" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
