"use client";

import { FormEvent, useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};
    if (!String(form.get("name")).trim()) nextErrors.name = "Name is required";
    if (!String(form.get("email")).trim()) nextErrors.email = "Email is required";
    if (!String(form.get("message")).trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  return (
    <main id="main-content" className="mx-auto max-w-xl px-4 py-10 sm:px-6 sm:py-14">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        Available for senior UI/UX and frontend roles. Form uses mock submit — no backend.
      </p>

      {submitted ? (
        <div
          role="status"
          className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900 dark:border-green-900 dark:bg-green-950/40 dark:text-green-100"
        >
          Thanks — your message was recorded locally for this demo.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-950"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-950"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-950"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>
          <Button type="submit" size="lg">
            Send message
          </Button>
        </form>
      )}
    </main>
  );
}
