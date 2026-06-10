import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Portfolio case studies and project writeups.",
};

export default function WorkPage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: "Work" }]} />
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Work</h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Each project includes problem framing, research, IA, design tradeoffs, and measurable outcomes.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/work/${study.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
