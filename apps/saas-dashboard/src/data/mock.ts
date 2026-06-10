export interface Kpi {
  id: string;
  label: string;
  value: number;
  change: number;
  format: "currency" | "number" | "percent";
}

export interface TimeSeriesPoint {
  month: string;
  revenue: number;
  audience: number;
}

export interface CampaignRow {
  id: string;
  name: string;
  sponsor: string;
  status: "active" | "completed" | "draft";
  revenue: number;
  impressions: number;
  ctr: number;
}

export const kpis: Kpi[] = [
  { id: "revenue", label: "Monthly revenue", value: 28450, change: 12.4, format: "currency" },
  { id: "subscribers", label: "Subscribers", value: 248500, change: 3.2, format: "number" },
  { id: "engagement", label: "Engagement rate", value: 6.8, change: -0.4, format: "percent" },
  { id: "campaigns", label: "Active campaigns", value: 3, change: 0, format: "number" },
];

export const revenueSeries: TimeSeriesPoint[] = [
  { month: "Jan", revenue: 18200, audience: 221000 },
  { month: "Feb", revenue: 21500, audience: 228000 },
  { month: "Mar", revenue: 19800, audience: 232000 },
  { month: "Apr", revenue: 24100, audience: 236500 },
  { month: "May", revenue: 26200, audience: 242000 },
  { month: "Jun", revenue: 28450, audience: 248500 },
];

export const campaigns: CampaignRow[] = [
  { id: "1", name: "Summer gear launch", sponsor: "TrailCo", status: "active", revenue: 9200, impressions: 410000, ctr: 3.2 },
  { id: "2", name: "VPN awareness", sponsor: "ShieldNet", status: "active", revenue: 7500, impressions: 520000, ctr: 2.1 },
  { id: "3", name: "Meal kit promo", sponsor: "FreshPlate", status: "completed", revenue: 6800, impressions: 380000, ctr: 2.8 },
  { id: "4", name: "Audio sponsor read", sponsor: "SoundWave", status: "completed", revenue: 4200, impressions: 290000, ctr: 1.9 },
  { id: "5", name: "App install push", sponsor: "FitTrack", status: "draft", revenue: 0, impressions: 0, ctr: 0 },
  { id: "6", name: "Holiday bundle", sponsor: "GiftBox", status: "completed", revenue: 5100, impressions: 310000, ctr: 2.4 },
];

export const audienceByPlatform = [
  { platform: "YouTube", value: 62, fill: "var(--pulse-chart-1)" },
  { platform: "Newsletter", value: 18, fill: "var(--pulse-chart-2)" },
  { platform: "Podcast", value: 12, fill: "var(--pulse-chart-3)" },
  { platform: "Other", value: 8, fill: "#a3a3a3" },
];
