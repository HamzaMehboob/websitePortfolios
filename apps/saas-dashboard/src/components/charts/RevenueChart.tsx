import {
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TimeSeriesPoint } from "@/data/mock";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function RevenueLineChart({ data }: { data: TimeSeriesPoint[] }) {
  return (
    <div className="h-72 w-full" role="img" aria-label="Revenue trend line chart by month">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            name="Revenue"
            stroke="var(--pulse-chart-1)"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
            strokeDasharray="0"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AudienceBarChart({ data }: { data: TimeSeriesPoint[] }) {
  return (
    <div className="h-72 w-full" role="img" aria-label="Audience bar chart by month">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(v) => formatNumber(v)} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value: number) => formatNumber(value)} />
          <Legend />
          <Bar dataKey="audience" name="Audience" fill="var(--pulse-chart-2)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
