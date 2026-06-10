"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
      <section className="flex min-h-[85vh] flex-col justify-end px-4 pb-20 pt-32 sm:px-6 md:min-h-screen">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Boutique design studio</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-stone-900 sm:text-7xl lg:text-8xl">
          Craft for brands that value silence over noise
        </h1>
        <p className="mt-8 max-w-xl text-lg text-stone-600">
          Atelier North partners with lifestyle and culture brands on identity, digital, and spatial experiences.
        </p>
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

      <section className="border-t border-stone-200 px-4 py-20 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-md text-stone-600">Eight studio projects across branding, digital, and spatial.</p>
          </div>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center border border-stone-900 px-8 py-3 text-sm uppercase tracking-[0.2em] text-stone-900 transition hover:bg-stone-900 hover:text-stone-50"
          >
            View gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
