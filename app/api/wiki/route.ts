import { NextRequest, NextResponse } from "next/server";
import { wikiEntries } from "@/data/wiki";

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();

  if (!q) return NextResponse.json({ results: wikiEntries, count: wikiEntries.length });

  const results = wikiEntries.filter((entry) => {
    const haystack = `${entry.title} ${entry.category} ${entry.content} ${entry.tags.join(" ")}`.toLowerCase();
    return haystack.includes(q);
  });

  return NextResponse.json({ results, count: results.length });
}
