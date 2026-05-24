import { NextRequest, NextResponse } from "next/server";
import { calculateSiegeStatus } from "../../../lib/siege";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      lastMealTime?: string;
      currentTime?: string;
      bioactives?: string[];
    };

    if (!body.lastMealTime || !body.currentTime) {
      return NextResponse.json(
        { error: "lastMealTime and currentTime are required (HH:MM)." },
        { status: 400 }
      );
    }

    const data = calculateSiegeStatus(body.lastMealTime, body.currentTime, body.bioactives ?? []);
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid request.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
