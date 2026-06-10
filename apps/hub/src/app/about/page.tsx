import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description: "About the portfolio author — UI/UX specialist and frontend engineer.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: "About" }]} />
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-8 space-y-6 text-neutral-700 dark:text-neutral-300">
        <p className="text-lg">
          I design and build frontend experiences that balance visual craft with usability, performance, and accessibility.
        </p>
        <p>
          This portfolio is a hub-and-spoke system: one index to launch every demo, with case studies that explain the why — not just the stack.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Skills</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {["UI/UX design", "Design systems", "Next.js & React", "Accessibility (WCAG)", "Motion design", "Performance"].map(
              (skill) => (
                <li key={skill} className="rounded-lg border border-neutral-200 px-4 py-2 dark:border-neutral-800">
                  {skill}
                </li>
              ),
            )}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Experience</h2>
          <p className="mt-3">
            Senior frontend engineer and UI specialist — shipping product dashboards, brand sites, commerce flows, and content platforms.
          </p>
        </section>
      </div>
    </main>
  );
}
