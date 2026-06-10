import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected studio projects — branding, digital, and spatial.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-stone-900 sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-xl text-stone-600">
        Filter by discipline. Select a project to read the studio narrative.
      </p>
      <div className="mt-12">
        <ProjectGallery />
      </div>
    </div>
  );
}
