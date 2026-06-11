import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const featured = projects.slice(0, 4);

export function FeaturedWork() {
  return (
    <section className="border-t border-stone-200 px-4 py-20 sm:px-6" aria-labelledby="featured-work-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 id="featured-work-heading" className="font-serif text-3xl text-stone-900 sm:text-4xl">
              Featured projects
            </h2>
            <p className="mt-3 max-w-md text-stone-600">
              A selection of branding, digital, and spatial work from the studio archive.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center border border-stone-900 px-8 py-3 text-sm uppercase tracking-[0.2em] text-stone-900 transition hover:bg-stone-900 hover:text-stone-50"
          >
            View gallery
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <Link
              key={project.id}
              href="/work"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-sm ring-1 ring-stone-200/80"
                style={{
                  background: `linear-gradient(145deg, ${project.accent}55 0%, #faf9f7 55%, #f5f5f4 100%)`,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">{project.category}</p>
              <h3 className="mt-1 font-serif text-xl text-stone-900 group-hover:underline">{project.title}</h3>
              <p className="text-sm text-stone-600">{project.client}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
