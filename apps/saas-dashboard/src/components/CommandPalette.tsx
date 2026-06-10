import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUiStore } from "@/store/uiStore";

const commands = [
  { label: "Overview", path: "/" },
  { label: "Campaigns", path: "/campaigns" },
  { label: "Audience", path: "/audience" },
  { label: "Analytics", path: "/analytics" },
  { label: "Settings", path: "/settings" },
];

export function CommandPalette() {
  const open = useUiStore((s) => s.commandOpen);
  const setOpen = useUiStore((s) => s.setCommandOpen);
  const navigate = useNavigate();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[20vh]" role="dialog" aria-modal="true" aria-label="Command palette">
      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white shadow-xl">
        <p className="border-b border-neutral-100 px-4 py-2 text-xs text-neutral-500">⌘K — Quick navigation</p>
        <ul className="max-h-64 overflow-auto p-2">
          {commands.map((cmd) => (
            <li key={cmd.path}>
              <button
                type="button"
                className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                onClick={() => {
                  navigate(cmd.path);
                  setOpen(false);
                }}
              >
                {cmd.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
