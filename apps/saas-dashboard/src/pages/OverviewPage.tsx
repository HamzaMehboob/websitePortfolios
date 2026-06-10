import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchDashboard } from "@/api/mockApi";
import { KpiCard, KpiSkeleton } from "@/components/KpiCard";
import { AudienceBarChart, RevenueLineChart } from "@/components/charts/RevenueChart";
import { DataTable } from "@/components/DataTable";

export function OverviewPage() {
  const { data, isLoading, isError } = useQuery({ queryKey: ["dashboard"], queryFn: fetchDashboard });

  if (isError) {
    return <p className="text-red-600">Failed to load dashboard. Please refresh.</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">Overview</h1>
        <p className="mt-1 text-sm text-neutral-500">KPIs → trends → recent campaigns</p>
      </div>

      <section aria-label="Key metrics">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => <KpiSkeleton key={i} />)
            : data?.kpis.map((kpi) => <KpiCard key={kpi.id} kpi={kpi} />)}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2" aria-label="Trend charts">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h2 className="font-semibold text-neutral-900">Revenue trend</h2>
          {isLoading ? (
            <div className="mt-4 h-72 animate-pulse rounded bg-neutral-100" />
          ) : (
            <div className="mt-4">
              <RevenueLineChart data={data!.revenueSeries} />
            </div>
          )}
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h2 className="font-semibold text-neutral-900">Audience growth</h2>
          {isLoading ? (
            <div className="mt-4 h-72 animate-pulse rounded bg-neutral-100" />
          ) : (
            <div className="mt-4">
              <AudienceBarChart data={data!.revenueSeries} />
            </div>
          )}
        </div>
      </section>

      <section aria-label="Recent campaigns">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-neutral-900">Recent campaigns</h2>
          <Link to="/analytics" className="text-sm font-medium text-sky-600 hover:underline">
            View all analytics →
          </Link>
        </div>
        {isLoading ? (
          <div className="h-48 animate-pulse rounded-xl bg-neutral-100" />
        ) : (
          <DataTable rows={data!.campaigns} emptyMessage="No recent campaigns." />
        )}
      </section>
    </div>
  );
}
