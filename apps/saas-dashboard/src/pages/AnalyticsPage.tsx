import { useQuery } from "@tanstack/react-query";
import { fetchAnalyticsTable } from "@/api/mockApi";
import { DataTable } from "@/components/DataTable";

export function AnalyticsPage() {
  const { data, isLoading } = useQuery({ queryKey: ["analytics"], queryFn: fetchAnalyticsTable });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="mt-1 text-sm text-neutral-500">Drill-down table with sort, filter, and search</p>
      </div>
      {isLoading ? (
        <div className="h-96 animate-pulse rounded-xl bg-neutral-100" />
      ) : (
        <DataTable rows={data ?? []} emptyMessage="Try clearing filters to see all campaigns." />
      )}
    </div>
  );
}
