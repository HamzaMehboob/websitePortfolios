import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import { getDemoUrl, portfolioDemos } from "@/lib/demos";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  return { title: study.title, description: study.excerpt };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const relatedDemo = study.demoId
    ? portfolioDemos.find((d) => d.id === study.demoId)
    : undefined;
  const demoUrl = relatedDemo ? getDemoUrl(relatedDemo) : null;

  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: "Work", href: "/work" }, { label: study.title }]} />
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="not-prose mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{study.title}</h1>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{study.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <span key={tech} className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                {tech}
              </span>
            ))}
          </div>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              View live demo →
            </a>
          )}
        </header>

        <section className="mb-8">
          <h2>Problem</h2>
          <p>{study.sections.problem}</p>
        </section>
        <section className="mb-8">
          <h2>Research</h2>
          <p>{study.sections.research}</p>
        </section>
        <section className="mb-8">
          <h2>IA</h2>
          <p>{study.sections.ia}</p>
        </section>
        <section className="mb-8">
          <h2>Design decisions</h2>
          <ul>
            {study.sections.decisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2>Accessibility & performance</h2>
          <p>{study.sections.a11yPerf}</p>
        </section>
        <section>
          <h2>Outcome</h2>
          <p>{study.sections.outcome}</p>
        </section>
      </article>
      <div className="not-prose mt-10">
        <Link href="/work" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
          ← Back to all work
        </Link>
      </div>
    </main>
  );
}
