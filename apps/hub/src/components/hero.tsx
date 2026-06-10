import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-14 dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 sm:px-10 sm:py-16">
      <p className="hero-fade hero-fade-1 text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
        UI/UX · Frontend Engineering
      </p>
      <h1 className="hero-fade hero-fade-2 mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-5xl">
        Portfolio demos that answer the questions clients actually ask
      </h1>
      <p className="hero-fade hero-fade-3 mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
        Six intentional frontends — SaaS, agency, commerce, mobile, and editorial — unified by a hub built for discovery and narrative.
      </p>
      <div className="hero-fade hero-fade-4 mt-8 flex flex-wrap gap-3">
        <Link href="/demos">
          <Button size="lg">Explore all demos</Button>
        </Link>
        <Link href="/work">
          <Button size="lg" variant="outline">
            View case studies
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="ghost">
            Get in touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
