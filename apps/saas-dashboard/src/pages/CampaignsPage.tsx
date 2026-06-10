import { useQuery } from "@tanstack/react-query";
import { fetchCampaigns } from "@/api/mockApi";
import { DataTable } from "@/components/DataTable";
import { RevenueLineChart } from "@/components/charts/RevenueChart";
import { revenueSeries } from "@/data/mock";

export function CampaignsPage() {
  const { data, isLoading } = useQuery({ queryKey: ["campaigns"], queryFn: fetchCampaigns });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Campaigns</h1>
        <p className="mt-1 text-sm text-neutral-500">Sponsorship performance and pipeline</p>
      </div>
      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <h2 className="font-semibold">Revenue by month</h2>
        <div className="mt-4">
          <RevenueLineChart data={revenueSeries} />
        </div>
      </div>
      {isLoading ? (
        <div className="h-64 animate-pulse rounded-xl bg-neutral-100" />
      ) : (
        <DataTable rows={data ?? []} />
      )}
    </div>
  );
}
