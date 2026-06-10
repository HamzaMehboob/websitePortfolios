const hubUrl = import.meta.env.VITE_HUB_URL || "http://localhost:3000";

export function HubBackLink() {
  return (
    <a
      href={hubUrl}
      className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-sky-700 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      aria-label="Return to portfolio home"
    >
      ← Portfolio Home
    </a>
  );
}
