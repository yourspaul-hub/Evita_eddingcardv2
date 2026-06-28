import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!data.name || typeof data.name !== "string") {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const TO_EMAIL = "2wearthehope@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;

  // ── Graceful degradation ─────────────────────────────────────────────────────
  if (!apiKey) {
    console.log("[RSVP] RESEND_API_KEY not set — logging submission only:", {
      name: data.name,
      phone: data.phone,
      guests: data.guests,
      accommodation: data.accommodation,
      foodPreferences: data.foodPreferences,
      specialRequests: data.specialRequests,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ success: true });
  }

  // ── Format values ─────────────────────────────────────────────────────────────
  const name = String(data.name);
  const phone = String(data.phone || "—");
  const guests = String(data.guests || "1");
  const accommodation =
    data.accommodation === "yes" ? "Yes — needs help finding a hotel" : "No — sorted";
  const foodPrefs =
    Array.isArray(data.foodPreferences) && data.foodPreferences.length
      ? (data.foodPreferences as string[]).join(", ")
      : "None specified";
  const special = String(data.specialRequests || "—");
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  // ── HTML email ────────────────────────────────────────────────────────────────
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #faf7f2; margin: 0; padding: 0; }
    .wrap { max-width: 560px; margin: 32px auto; background: #fff; border: 1px solid #e8dfc8;
            border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #6b2d3e, #4a1e2b); padding: 32px 24px;
              text-align: center; }
    .header h1 { margin: 0; color: #c8a951; font-size: 28px; font-weight: normal;
                 letter-spacing: 0.05em; }
    .header p { margin: 6px 0 0; color: rgba(200,169,81,0.7); font-size: 13px;
                letter-spacing: 0.2em; text-transform: uppercase; }
    .body { padding: 28px 32px; }
    .row { display: flex; border-bottom: 1px solid #f0e8d8; padding: 12px 0; }
    .row:last-child { border-bottom: none; }
    .label { color: #888; font-size: 11px; text-transform: uppercase;
             letter-spacing: 0.15em; width: 170px; flex-shrink: 0; padding-top: 2px; }
    .value { color: #4a1e2b; font-size: 15px; flex: 1; }
    .footer { background: #faf7f2; padding: 16px 32px; text-align: center;
              color: #aaa; font-size: 12px; border-top: 1px solid #e8dfc8; }
    .heart { color: #c8a951; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>New RSVP Received</h1>
      <p>Evita &amp; Roshan &mdash; September 2026</p>
    </div>
    <div class="body">
      <div class="row"><div class="label">Name</div><div class="value"><strong>${name}</strong></div></div>
      <div class="row"><div class="label">Phone</div><div class="value">${phone}</div></div>
      <div class="row"><div class="label">Guests</div><div class="value">${guests}</div></div>
      <div class="row"><div class="label">Accommodation</div><div class="value">${accommodation}</div></div>
      <div class="row"><div class="label">Food Preferences</div><div class="value">${foodPrefs}</div></div>
      <div class="row"><div class="label">Special Requests</div><div class="value">${special}</div></div>
      <div class="row"><div class="label">Received At</div><div class="value">${timestamp} IST</div></div>
    </div>
    <div class="footer">
      Submitted via evitawedsroshan.com <span class="heart">♥</span>
    </div>
  </div>
</body>
</html>`;

  const text = `
New RSVP — Evita & Roshan Wedding

Name:              ${name}
Phone:             ${phone}
Guests:            ${guests}
Accommodation:     ${accommodation}
Food Preferences:  ${foodPrefs}
Special Requests:  ${special}
Received At:       ${timestamp} IST

Submitted via evitawedsroshan.com
`.trim();

  // ── Send via Resend ───────────────────────────────────────────────────────────
  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Evita & Roshan RSVP <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `💌 New RSVP — ${name} (${guests} guest${guests === "1" ? "" : "s"})`,
      html,
      text,
    });

    console.log(`[RSVP] Email sent for: ${name}`);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[RSVP] Resend send failed:", err);
    // Guest never sees this error
    return NextResponse.json({ success: true });
  }
}
