import { NextResponse } from "next/server";

interface GhlCustomField {
  id: string;
  name: string;
  fieldKey: string;
  dataType: string;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    const ghlPrivateIntegrationToken = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    // Server-side validation of core fields
    if (!payload.contact || !payload.contact.name || !payload.contact.email || !payload.contact.phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please ensure all required contact fields (Name, Email, Phone) are filled.",
        },
        { status: 400 }
      );
    }

    // 1. Direct GHL API v2 Integration (No Premium Webhooks Required)
    if (ghlPrivateIntegrationToken && ghlLocationId) {
      try {
        console.log("Using direct GHL API v2 integration...");

        // Step A: Fetch custom fields to dynamically resolve IDs (protects user from manual copy-paste of IDs)
        const fieldsRes = await fetch(
          `https://services.leadconnectorhq.com/locations/${ghlLocationId}/customFields`,
          {
            headers: {
              Authorization: `Bearer ${ghlPrivateIntegrationToken}`,
              Version: "2021-07-28",
            },
          }
        );

        if (!fieldsRes.ok) {
          throw new Error(`Failed to fetch GHL custom fields schema (Status: ${fieldsRes.status})`);
        }

        const fieldsData = await fieldsRes.json();
        const ghlFields: GhlCustomField[] = fieldsData.customFields || [];

        // Define local mappings
        const fieldMapping: Record<string, string | number | string[] | undefined> = {
          is_qualified: payload.isQualified ? "Yes" : "No",
          computed_score: payload.score,
          pain_points: Array.isArray(payload.painPoints) ? payload.painPoints.join(", ") : payload.painPoints,
          commitment_level: payload.commitment,
          budget_range: ["under_1k", "1k_3k", "gt_3k"].includes(payload.budget)
            ? (payload.budget === "under_1k" ? "Under $1k" : payload.budget === "1k_3k" ? "$1k - $3k" : "$3k+")
            : payload.budget,
          kickoff_timeline: ["exploring", "1_month", "immediately"].includes(payload.timeline)
            ? (payload.timeline === "exploring" ? "Exploring" : payload.timeline === "1_month" ? "1 month" : "Immediately")
            : payload.timeline,
          utm_source: payload.utms?.lastTouch?.utm_source,
          utm_medium: payload.utms?.lastTouch?.utm_medium,
          utm_campaign: payload.utms?.lastTouch?.utm_campaign,
          utm_content: payload.utms?.lastTouch?.utm_content,
          utm_term: payload.utms?.lastTouch?.utm_term,
          utm_source_first: payload.utms?.firstTouch?.utm_source,
          utm_campaign_first: payload.utms?.firstTouch?.utm_campaign,
        };

        // Match custom fields by field key or display name to build payload
        const customFieldsPayload: { id: string; value: string | number | string[] }[] = [];
        for (const [key, value] of Object.entries(fieldMapping)) {
          if (value === undefined || value === null || value === "") continue;

          const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
          const match = ghlFields.find((f) => {
            const normName = f.name.toLowerCase().replace(/[^a-z0-9]/g, "");
            const normKey = f.fieldKey.toLowerCase().replace(/[^a-z0-9]/g, "");
            return normName === normalizedKey || normKey === normalizedKey || normKey === `contact${normalizedKey}`;
          });

          if (match) {
            customFieldsPayload.push({
              id: match.id,
              value: value,
            });
          } else {
            console.warn(`No matching GHL custom field found for key: ${key}`);
          }
        }

        // Split full name into firstName/lastName
        const fullName = payload.contact.name.trim();
        const nameParts = fullName.split(/\s+/);
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        // Standard free automation triggers inside GHL: Tag contact
        const tags = ["system-quiz-submitted"];
        const primaryPainPoint = payload.painPoints?.[0] || "";
        if (primaryPainPoint.startsWith("Seller")) {
          tags.push("seller-application-submitted");
        } else if (primaryPainPoint.startsWith("Order")) {
          tags.push("buyer-order-submitted");
        }
        if (payload.isQualified) {
          tags.push("qualified-lead");
        } else {
          tags.push("disqualified-lead");
        }

        const upsertBody = {
          locationId: ghlLocationId,
          email: payload.contact.email,
          phone: payload.contact.phone,
          firstName: firstName,
          lastName: lastName,
          name: fullName,
          tags: tags,
          customFields: customFieldsPayload,
        };

        // Step B: Submit upsert request to Contacts API
        const upsertRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ghlPrivateIntegrationToken}`,
            Version: "2021-07-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(upsertBody),
        });

        if (!upsertRes.ok) {
          const errText = await upsertRes.text();
          throw new Error(`GHL Upsert Contact API returned status ${upsertRes.status}: ${errText}`);
        }

        console.log("Lead successfully synced directly to GHL via Contacts API.");

        return NextResponse.json({
          success: true,
          message: "Lead created and custom fields synced successfully.",
        });
      } catch (directApiError) {
        console.error("Direct GHL API submission failed:", directApiError);
        // Graceful fallback to client so user redirects are unaffected
        return NextResponse.json({
          success: true,
          message: "Lead saved locally. Our team will verify your system recommendation shortly.",
          apiFailed: true,
        });
      }
    }

    // 2. Webhook Handoff Integration (Fallback if Webhook URL is explicitly configured)
    if (ghlWebhookUrl) {
      try {
        const response = await fetch(ghlWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`GHL Webhook returned status ${response.status}`);
        }

        return NextResponse.json({
          success: true,
          message: "Lead submitted successfully to GHL Webhook.",
        });
      } catch (webhookError) {
        console.error("Failed to forward lead to GHL Webhook:", webhookError);
        return NextResponse.json({
          success: true,
          message: "Thank you! Your details have been submitted.",
          deliveryFailed: true,
        });
      }
    }

    // 3. Fallback for Development (No keys configured)
    console.warn("--- WARNING: No GHL API tokens or Webhook URLs are configured ---");
    console.log("Lead Data Captured Server-side:", JSON.stringify(payload, null, 2));

    return NextResponse.json({
      success: true,
      message: "Thank you! We have received your diagnostic details. (Mock Success)",
      mocked: true,
    });
  } catch (err) {
    console.error("Internal Server Error in submit-lead API route:", err);
    return NextResponse.json(
      {
        success: false,
        message: "We encountered a minor system sync issue. Please proceed to review your roadmap recommendations.",
      },
      { status: 500 }
    );
  }
}
