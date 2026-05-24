import type { SiegeState } from "./types";

const PHASE_DIGESTION = "⏳ PHASE: DIGESTION (System Busy)";
const PHASE_HEALING = "🔥 PHASE: HEALING SWITCH ON (Autophagy Active)";
const PHASE_SENTINEL = "⚔️ PHASE: SENTINEL DOMINANCE (NK Cells Hunting)";

function parseTime(time: string): number {
  const match = /^(\d{2}):(\d{2})$/.exec(time);
  if (!match) throw new Error("Time must be in HH:MM format.");

  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) throw new Error("Invalid time value.");

  return hours * 60 + minutes;
}

export function calculateSiegeStatus(lastMealTime: string, currentTime: string, bioactives: string[]): SiegeState {
  const lastMealMinutes = parseTime(lastMealTime);
  let currentMinutes = parseTime(currentTime);

  if (currentMinutes < lastMealMinutes) currentMinutes += 24 * 60;

  const fastingHours = (currentMinutes - lastMealMinutes) / 60;
  const sentinelVisibility = Math.min(100, bioactives.length * 15);
  const fortressSoftness = bioactives.includes("Ginger") ? 25 : 0;

  let phase = PHASE_DIGESTION;
  if (fastingHours >= 18) phase = PHASE_SENTINEL;
  else if (fastingHours >= 14) phase = PHASE_HEALING;

  return {
    target: "SCC Grade 2 (Moderately Differentiated)",
    status: "Post-Surgical / Siege Mode",
    fastingTarget: 18,
    lastMealTime,
    sentinelVisibility,
    fortressSoftness,
    phase,
    fastingHours: Number(fastingHours.toFixed(2))
  };
}
