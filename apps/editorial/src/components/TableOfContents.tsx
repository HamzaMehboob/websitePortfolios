interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
}

export function TableOfContents({ headings }: Props) {
  const items = headings.filter((h) => h.depth === 2 || h.depth === 3);
  if (items.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-lg border border-stone-200 bg-white p-4 text-sm">
      <p className="mb-3 font-medium text-ink">On this page</p>
      <ul className="space-y-2 text-stone-600">
        {items.map((h) => (
          <li key={h.slug} className={h.depth === 3 ? 'pl-3' : undefined}>
            <a href={`#${h.slug}`} className="hover:text-accent">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
