const hubUrl = process.env.NEXT_PUBLIC_HUB_URL || "http://localhost:3000";

export function HubBackLink() {
  return (
    <a
      href={hubUrl}
      className="text-sm text-stone-600 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
      aria-label="Return to portfolio home"
    >
      ← Portfolio Home
    </a>
  );
}
