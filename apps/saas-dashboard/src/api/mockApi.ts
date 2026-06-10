import { campaigns, kpis, revenueSeries, audienceByPlatform } from "@/data/mock";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchDashboard() {
  await delay(600);
  return { kpis, revenueSeries, campaigns: campaigns.slice(0, 5) };
}

export async function fetchCampaigns() {
  await delay(500);
  return campaigns;
}

export async function fetchAudience() {
  await delay(500);
  return { revenueSeries, audienceByPlatform };
}

export async function fetchAnalyticsTable() {
  await delay(700);
  return campaigns;
}
