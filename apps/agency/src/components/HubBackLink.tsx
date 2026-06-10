const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "http://localhost:3000";

export function HubBackLink() {
  return (
    <a
      href={hubUrl}
      className="inline-flex min-h-11 items-center text-sm tracking-wide text-stone-600 underline-offset-4 hover:text-stone-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
      aria-label="Return to portfolio home"
    >
      ← Portfolio Home
    </a>
  );
}
