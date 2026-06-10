import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Studio story, values, and team.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-stone-900 sm:text-5xl">About the studio</h1>
      <div className="mt-10 space-y-8 text-lg leading-relaxed text-stone-700">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-none">
          Atelier North is a boutique practice for brands that believe design is a long-term asset — not a launch-day
          firework.
        </p>
        <p>
          We work in small, senior-led teams across identity, digital product, and spatial graphics. Our process favors
          research, typography, and whitespace over trend-chasing.
        </p>
        <p>
          Based remotely with clients across North America and Europe. Eight person studio, one point of contact, no
          bait-and-switch.
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-12 inline-flex min-h-11 items-center border border-stone-900 px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-stone-50"
      >
        Start a project
      </Link>
    </div>
  );
}
