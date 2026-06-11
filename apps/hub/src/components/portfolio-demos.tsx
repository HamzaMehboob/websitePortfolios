import { portfolioDemos } from "@/lib/demos";
import { DemoCard } from "@/components/demo-card";

export function PortfolioDemos({ title = "Portfolio Demos" }: { title?: string }) {
  return (
    <section aria-labelledby="portfolio-demos-heading" className="space-y-6">
      <div>
        <h2 id="portfolio-demos-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Explore five spoke demos across React, Next.js, Flutter, and Astro — plus this hub, six sites in total.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioDemos.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>
    </section>
  );
}
