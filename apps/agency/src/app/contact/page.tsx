"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <h1 className="font-serif text-4xl text-stone-900">Contact</h1>
      <p className="mt-4 text-stone-600">Tell us about your project. Mock form — no backend.</p>

      {sent ? (
        <p className="mt-10 rounded border border-stone-300 bg-stone-100 p-4 text-stone-800" role="status">
          Thank you — we&apos;ll be in touch (demo).
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="text-sm uppercase tracking-widest text-stone-500">
              Name
            </label>
            <input
              id="name"
              required
              className="mt-2 w-full border-b border-stone-300 bg-transparent py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm uppercase tracking-widest text-stone-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-2 w-full border-b border-stone-300 bg-transparent py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm uppercase tracking-widest text-stone-500">
              Project
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-2 w-full border-b border-stone-300 bg-transparent py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            />
          </div>
          <button
            type="submit"
            className="min-h-11 w-full border border-stone-900 py-3 text-sm uppercase tracking-[0.2em] hover:bg-stone-900 hover:text-stone-50 sm:w-auto sm:px-10"
          >
            Send inquiry
          </button>
        </form>
      )}
    </div>
  );
}
