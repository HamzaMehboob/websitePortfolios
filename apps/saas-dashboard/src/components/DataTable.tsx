import { useMemo, useState } from "react";
import type { CampaignRow } from "@/data/mock";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";

type SortKey = keyof Pick<CampaignRow, "name" | "revenue" | "impressions" | "ctr">;

export function DataTable({
  rows,
  emptyMessage = "No campaigns match your filters.",
}: {
  rows: CampaignRow[];
  emptyMessage?: string;
}) {
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("revenue");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const filtered = useMemo(() => {
    let list = [...rows];
    if (status !== "all") list = list.filter((r) => r.status === status);
    if (filter.trim()) {
      const q = filter.toLowerCase();
      list = list.filter((r) => r.name.toLowerCase().includes(q) || r.sponsor.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "string" && typeof bv === "string") {
        return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sortDir === "asc" ? Number(av) - Number(bv) : Number(bv) - Number(av);
    });
    return list;
  }, [rows, filter, status, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  if (filtered.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-12 text-center">
        <p className="font-medium text-neutral-900">No data yet</p>
        <p className="mt-2 text-sm text-neutral-500">{emptyMessage}</p>
        <button
          type="button"
          onClick={() => {
            setFilter("");
            setStatus("all");
          }}
          className="mt-4 rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600"
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Search campaigns…"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          aria-label="Search campaigns"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md border border-neutral-300 px-3 py-2 text-sm"
          aria-label="Filter by status"
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-neutral-200 bg-neutral-50 text-neutral-600">
            <tr>
              <th className="px-4 py-3 font-medium">
                <button type="button" onClick={() => toggleSort("name")} className="hover:text-neutral-900">
                  Campaign {sortKey === "name" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">
                <button type="button" onClick={() => toggleSort("revenue")} className="hover:text-neutral-900">
                  Revenue {sortKey === "revenue" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="px-4 py-3 font-medium">
                <button type="button" onClick={() => toggleSort("impressions")} className="hover:text-neutral-900">
                  Impressions {sortKey === "impressions" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </button>
              </th>
              <th className="px-4 py-3 font-medium">
                <button type="button" onClick={() => toggleSort("ctr")} className="hover:text-neutral-900">
                  CTR {sortKey === "ctr" ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                <td className="px-4 py-3">
                  <div className="font-medium text-neutral-900">{row.name}</div>
                  <div className="text-neutral-500">{row.sponsor}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                      row.status === "active" && "bg-green-100 text-green-800",
                      row.status === "completed" && "bg-neutral-100 text-neutral-700",
                      row.status === "draft" && "bg-amber-100 text-amber-800",
                    )}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">{formatCurrency(row.revenue)}</td>
                <td className="px-4 py-3">{formatNumber(row.impressions)}</td>
                <td className="px-4 py-3">{row.ctr}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
