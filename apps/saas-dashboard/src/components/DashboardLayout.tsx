import { NavLink, Outlet } from "react-router-dom";
import { HubBackLink } from "@/components/HubBackLink";
import { CommandPalette } from "@/components/CommandPalette";
import { useUiStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Overview", end: true },
  { to: "/campaigns", label: "Campaigns" },
  { to: "/audience", label: "Audience" },
  { to: "/analytics", label: "Analytics" },
  { to: "/settings", label: "Settings" },
];

export function DashboardLayout() {
  const collapsed = useUiStore((s) => s.sidebarCollapsed);
  const mobileOpen = useUiStore((s) => s.mobileNavOpen);
  const setMobileOpen = useUiStore((s) => s.setMobileNavOpen);
  const toggleSidebar = useUiStore((s) => s.toggleSidebar);

  const sidebar = (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-neutral-200 bg-white",
        collapsed ? "w-16" : "w-56",
      )}
    >
      <div className={cn("flex items-center gap-2 border-b border-neutral-100 p-4", collapsed && "justify-center")}>
        {!collapsed && <span className="text-lg font-bold text-sky-600">Pulse</span>}
        {collapsed && <span className="text-lg font-bold text-sky-600">P</span>}
      </div>
      <div className="border-b border-neutral-100 p-2">
        <HubBackLink />
      </div>
      <nav className="flex-1 space-y-1 p-2" aria-label="Dashboard">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                isActive ? "bg-sky-50 text-sky-700" : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
                collapsed && "justify-center px-2",
              )
            }
            title={collapsed ? item.label : undefined}
          >
            {collapsed ? item.label[0] : item.label}
          </NavLink>
        ))}
      </nav>
      <div className="hidden border-t border-neutral-100 p-2 md:block">
        <button
          type="button"
          onClick={toggleSidebar}
          className="w-full rounded-md px-3 py-2 text-xs text-neutral-500 hover:bg-neutral-50"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "→" : "← Collapse"}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <div className="hidden md:flex">{sidebar}</div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <button type="button" className="flex-1 bg-black/40" aria-label="Close menu" onClick={() => setMobileOpen(false)} />
          <div className="w-56 shadow-xl">{sidebar}</div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-4 md:px-6">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            Menu
          </button>
          <p className="text-sm text-neutral-500">
            Creator analytics · <kbd className="rounded border px-1 text-xs">⌘K</kbd>
          </p>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
      <CommandPalette />
    </div>
  );
}
