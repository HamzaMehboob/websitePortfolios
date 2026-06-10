import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PortfolioDemos } from "@/components/portfolio-demos";

export const metadata: Metadata = {
  title: "Demos",
  description: "Launch every portfolio demo from one place.",
};

export default function DemosPage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: "Demos" }]} />
      <PortfolioDemos title="All portfolio demos" />
    </main>
  );
}
