import { useQuery } from "@tanstack/react-query";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { fetchAudience } from "@/api/mockApi";
import { AudienceBarChart } from "@/components/charts/RevenueChart";

export function AudiencePage() {
  const { data, isLoading } = useQuery({ queryKey: ["audience"], queryFn: fetchAudience });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Audience</h1>
        <p className="mt-1 text-sm text-neutral-500">Growth and channel mix</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h2 className="font-semibold">Monthly audience</h2>
          {isLoading ? (
            <div className="mt-4 h-72 animate-pulse rounded bg-neutral-100" />
          ) : (
            <div className="mt-4">
              <AudienceBarChart data={data!.revenueSeries} />
            </div>
          )}
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <h2 className="font-semibold">Traffic by platform</h2>
          {isLoading ? (
            <div className="mt-4 h-72 animate-pulse rounded bg-neutral-100" />
          ) : (
            <div className="mt-4 h-72" role="img" aria-label="Audience share by platform pie chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data!.audienceByPlatform} dataKey="value" nameKey="platform" cx="50%" cy="50%" outerRadius={90} label={({ platform, value }) => `${platform} ${value}%`}>
                    {data!.audienceByPlatform.map((entry) => (
                      <Cell key={entry.platform} fill={entry.fill} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
