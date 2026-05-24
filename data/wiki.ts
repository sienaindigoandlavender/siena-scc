import type { WikiEntry } from "../lib/types";

export const wikiEntries: WikiEntry[] = [
  {
    id: "fasting-phases",
    title: "Fasting Phases",
    category: "Protocol",
    tags: ["fasting", "autophagy", "metabolic"],
    content:
      "The dashboard tracks digestion (<14h), healing switch (14-17.99h), and sentinel dominance (>=18h) based on elapsed time since last meal."
  },
  {
    id: "bioactives",
    title: "Bioactives",
    category: "Nutrition",
    tags: ["ginger", "egcg", "nigella", "sulforaphane"],
    content:
      "Each bioactive increases sentinel visibility by 15 points, with a cap at 100. Ginger adds 25 points of fortress softness in the current model."
  },
  {
    id: "integration-health",
    title: "Integration Health",
    category: "Operations",
    tags: ["aps", "ehr", "labs", "api"],
    content:
      "Integration checks report environment configuration and API reachability for external systems such as APS, Labs, and EHR endpoints."
  }
];
