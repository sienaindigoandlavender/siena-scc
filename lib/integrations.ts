import type { IntegrationStatus } from "@/lib/types";

const endpoints = [
  { name: "APS", envKey: "APS_ENDPOINT" },
  { name: "Labs", envKey: "LABS_ENDPOINT" },
  { name: "EHR", envKey: "EHR_ENDPOINT" }
] as const;

export async function checkIntegrations(): Promise<IntegrationStatus[]> {
  return Promise.all(
    endpoints.map(async (item) => {
      const url = process.env[item.envKey];
      if (!url) {
        return { name: item.name, healthy: false, detail: `${item.envKey} is not configured` };
      }

      try {
        const res = await fetch(url, { method: "GET", cache: "no-store" });
        return {
          name: item.name,
          healthy: res.ok,
          detail: res.ok ? "Connected" : `HTTP ${res.status}`
        };
      } catch {
        return { name: item.name, healthy: false, detail: "Connection error" };
      }
    })
  );
}
