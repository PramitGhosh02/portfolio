import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    // Extract real client IP
    const forwarded = req.headers.get("x-forwarded-for");
    let ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip");
    if (!ip || ip === "::1" || ip === "127.0.0.1") {
      ip = "127.0.0.1 (Localhost)";
    }

    // Geolocation from Vercel edge headers
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";
    const userAgent = req.headers.get("user-agent") || "Unknown";

    // Formatted timestamp (IST + UTC)
    const now = new Date();
    const timeIST = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    const visitorData = {
      ip,
      time: timeIST,
      page: body.page || "/",
      referrer: body.referrer || "Direct",
      city,
      country,
      userAgent,
      rawTimestamp: now.toISOString(),
    };

    console.log("[Visitor Log]:", visitorData);

    // Forward to Google Sheets Webhook URL if configured
    const webhookUrl = process.env.TRACKING_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visitorData),
      }).catch((err) => {
        console.error("Error forwarding to Google Sheets:", err);
      });
    }

    return NextResponse.json({ success: true, logged: visitorData });
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
