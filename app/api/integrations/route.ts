import { NextResponse } from "next/server";
import { checkIntegrations } from "@/lib/integrations";

export async function GET() {
  const results = await checkIntegrations();
  return NextResponse.json({ integrations: results });
}
