"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, projects, type Project, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#faf9f7] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative mb-6 aspect-[16/10] w-full overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${project.accent}44, #faf9f7)` }}
        >
          <Image src={project.image} alt="" fill className="object-contain p-6" />
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
          {project.category} · {project.year}
        </p>
        <h2 id="project-title" className="mt-2 font-serif text-3xl text-stone-900">
          {project.title}
        </h2>
        <p className="mt-1 text-stone-600">{project.client}</p>
        <p className="mt-6 leading-relaxed text-stone-700">{project.description}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 min-h-11 border border-stone-900 px-6 py-2 text-sm uppercase tracking-widest hover:bg-stone-900 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={cn(
              "min-h-11 px-5 text-xs uppercase tracking-[0.2em] transition",
              filter === cat.id
                ? "bg-stone-900 text-stone-50"
                : "border border-stone-300 text-stone-600 hover:border-stone-900",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {filtered.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm ring-1 ring-stone-200/80"
              style={{ background: `linear-gradient(145deg, ${project.accent}55 0%, #faf9f7 60%)` }}
            >
              <Image
                src={project.image}
                alt=""
                fill
                className="object-contain p-5 transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">{project.category}</p>
            <h3 className="mt-1 font-serif text-2xl text-stone-900">{project.title}</h3>
            <p className="text-stone-600">{project.client}</p>
          </button>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
