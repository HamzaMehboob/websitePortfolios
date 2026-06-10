import type { Kpi } from "@/data/mock";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";

function formatValue(kpi: Kpi) {
  if (kpi.format === "currency") return formatCurrency(kpi.value);
  if (kpi.format === "percent") return `${kpi.value}%`;
  return formatNumber(kpi.value);
}

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const positive = kpi.change >= 0;
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-neutral-500">{kpi.label}</p>
      <p className="mt-2 text-2xl font-semibold text-neutral-900">{formatValue(kpi)}</p>
      {kpi.change !== 0 && (
        <p className={cn("mt-1 text-sm font-medium", positive ? "text-green-600" : "text-amber-600")}>
          {positive ? "↑" : "↓"} {Math.abs(kpi.change)}% vs last month
        </p>
      )}
    </div>
  );
}

export function KpiSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-neutral-200 bg-white p-5">
      <div className="h-4 w-24 rounded bg-neutral-200" />
      <div className="mt-3 h-8 w-32 rounded bg-neutral-200" />
      <div className="mt-2 h-3 w-20 rounded bg-neutral-100" />
    </div>
  );
}
