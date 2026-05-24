export type SiegeState = {
  target: string;
  status: string;
  fastingTarget: number;
  lastMealTime: string;
  sentinelVisibility: number;
  fortressSoftness: number;
  phase: string;
  fastingHours: number;
};

export type IntegrationStatus = {
  name: string;
  healthy: boolean;
  detail: string;
};

export type WikiEntry = {
  id: string;
  title: string;
  category: string;
  content: string;
  tags: string[];
};
