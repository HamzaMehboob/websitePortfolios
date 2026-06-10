import Link from "next/link";
import { Hero } from "@/components/hero";
import { PortfolioDemos } from "@/components/portfolio-demos";
import { caseStudies } from "@/lib/case-studies";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const featured = caseStudies.slice(0, 3);

  return (
    <main id="main-content" className="mx-auto max-w-6xl space-y-16 px-4 py-10 sm:px-6 sm:py-14">
      <Hero />

      <PortfolioDemos />

      <section aria-labelledby="featured-work" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="featured-work" className="text-2xl font-semibold tracking-tight">
              Featured work
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Case studies documenting problem, research, and design decisions.
            </p>
          </div>
          <Link href="/work" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((study) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="group block h-full">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.excerpt}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/40">
        <h2 className="text-xl font-semibold">Stack & craft</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Next.js, React, Flutter, Astro — with shared design tokens, accessible patterns, and performance budgets on every demo.
        </p>
      </section>
    </main>
  );
}
