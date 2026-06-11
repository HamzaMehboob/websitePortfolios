"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (reduceMotion || isMobile || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (pinRef.current && quoteRef.current) {
        gsap.to(quoteRef.current, {
          y: -40,
          opacity: 1,
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: 0.6,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".parallax-band").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30 },
          {
            y: -30,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section className="grid min-h-[85vh] items-end gap-12 px-4 pb-20 pt-32 sm:px-6 md:min-h-screen lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Boutique design studio</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-stone-900 sm:text-7xl lg:text-8xl">
            Craft for brands that value silence over noise
          </h1>
          <p className="mt-8 max-w-xl text-lg text-stone-600">
            Atelier North partners with lifestyle and culture brands on identity, digital, and spatial experiences.
          </p>
        </div>
        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-lg ring-1 ring-stone-200/80 lg:max-w-none"
          style={{
            background: `linear-gradient(160deg, ${projects[0].accent}66 0%, #faf9f7 50%, #e7e5e4 100%)`,
          }}
        >
          <Image
            src={projects[0].image}
            alt={projects[0].title}
            fill
            priority
            className="object-contain p-8"
            sizes="(max-width: 1024px) 80vw, 40vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/70 to-transparent p-6 text-stone-50">
            <p className="text-xs uppercase tracking-[0.25em] opacity-80">{projects[0].category}</p>
            <p className="mt-1 font-serif text-2xl">{projects[0].title}</p>
          </div>
        </div>
      </section>

      <section
        ref={pinRef}
        className="border-y border-stone-200 bg-stone-900 px-4 py-24 text-stone-50 sm:px-6 md:py-32"
      >
        <p
          ref={quoteRef}
          className="mx-auto max-w-3xl font-serif text-3xl leading-snug opacity-90 sm:text-4xl md:text-5xl"
        >
          We design with restraint — every margin, every motion, every word earns its place.
        </p>
      </section>

      <section className="parallax-band px-4 py-24 sm:px-6 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
          {[
            { title: "Brand", body: "Identity systems that feel inevitable, not loud." },
            { title: "Digital", body: "Sites and products with editorial pacing." },
            { title: "Spatial", body: "Environments that extend the story into place." },
          ].map((item) => (
            <div key={item.title} className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] text-stone-500">{item.title}</h2>
              <p className="font-serif text-2xl text-stone-800">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
