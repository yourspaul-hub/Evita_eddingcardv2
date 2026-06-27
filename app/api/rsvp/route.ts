import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Validate required fields
  if (!data.name || typeof data.name !== "string") {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const scriptUrl = process.env.RSVP_SCRIPT_URL;

  if (!scriptUrl) {
    // No Google Apps Script URL configured yet — log submission and return success.
    // This allows the form to work gracefully before the Apps Script is deployed.
    console.log("[RSVP] Submission received (RSVP_SCRIPT_URL not set):", {
      name: data.name,
      guests: data.guests,
      accommodation: data.accommodation,
      foodPreferences: data.foodPreferences,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ success: true });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: "evitawedsroshan.com",
      }),
      // Apps Script has a 30-second timeout; we give it 25 seconds
      signal: AbortSignal.timeout(25000),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("[RSVP] Script returned error:", response.status, text);
      return NextResponse.json({ error: "Submission failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[RSVP] Fetch error:", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
