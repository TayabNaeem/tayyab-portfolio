/**
 * Lead + escalation email for the site assistant.
 *
 * Sends through Resend's REST API so there is no extra dependency. It needs
 * two environment variables set on the host (Vercel → Settings → Environment
 * Variables), never committed:
 *
 *   RESEND_API_KEY   secret, from resend.com
 *   LEAD_TO_EMAIL    where leads land, defaults to the contact address
 *   LEAD_FROM_EMAIL  a sender on a domain verified in Resend
 *
 * With no key configured the route still answers 200 with delivered:false, so
 * a missing key degrades the notification rather than breaking the chat.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.LEAD_TO_EMAIL || "naemtayb@gmail.com";
const FROM = process.env.LEAD_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

const KINDS = {
  lead: { label: "New lead", tint: "#a855f7" },
  pricing: { label: "Pricing request", tint: "#f59e0b" },
  connect: { label: "Wants to talk to you", tint: "#22c55e" },
};

const clean = (v, max = 2000) =>
  String(v ?? "")
    .replace(/[\u0000-\u0009\u000b\u000c\u000e-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);

/** Subject lines are not HTML; strip the angle brackets so they read cleanly. */
const plain = (v, max = 120) => clean(v, max).replace(/[<>]/g, "").trim();

const esc = (v) =>
  clean(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function row(label, value, opts = {}) {
  if (!value) return "";
  const inner = opts.href
    ? `<a href="${esc(opts.href)}" style="color:#7c3aed;text-decoration:none">${esc(value)}</a>`
    : esc(value).replace(/\n/g, "<br>");
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #ececf1;vertical-align:top;width:150px;
                 font:600 13px/1.5 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#6b7280;">
        ${esc(label)}
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #ececf1;vertical-align:top;
                 font:400 15px/1.6 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
        ${inner}
      </td>
    </tr>`;
}

function buildHtml({ kind, lead, question, transcript }) {
  const k = KINDS[kind] || KINDS.lead;
  const when = new Date().toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  });

  const chat = (transcript || [])
    .slice(-14)
    .map((m) => {
      const mine = m.from === "bot";
      return `
        <tr><td style="padding:4px 0;">
          <div style="font:600 11px/1.4 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
                      letter-spacing:.06em;text-transform:uppercase;color:${mine ? "#7c3aed" : "#6b7280"};">
            ${mine ? "Assistant" : esc(lead?.name || "Visitor")}
          </div>
          <div style="font:400 14px/1.6 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
                      color:#111827;padding:2px 0 8px;">${esc(m.text).replace(/\n/g, "<br>")}</div>
        </td></tr>`;
    })
    .join("");

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f4f4f7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:28px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
             style="max-width:620px;background:#ffffff;border-radius:14px;overflow:hidden;
                    box-shadow:0 1px 3px rgba(0,0,0,.08);">

        <tr><td style="background:#111014;padding:24px 28px;">
          <div style="font:700 19px/1.3 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#ffffff;">
            ${esc(k.label)}
          </div>
          <div style="font:400 13px/1.5 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#a1a1aa;padding-top:4px;">
            From the assistant on your portfolio · ${esc(when)} PKT
          </div>
        </td></tr>

        <tr><td style="height:4px;background:${k.tint};font-size:0;line-height:0;">&nbsp;</td></tr>

        <tr><td style="padding:8px 28px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Name", lead?.name)}
            ${row("Email", lead?.email, { href: `mailto:${clean(lead?.email, 200)}` })}
            ${row("Phone", lead?.phone, { href: `tel:${clean(lead?.phone, 40).replace(/[^\d+]/g, "")}` })}
            ${row("Service", lead?.service)}
            ${row("Project details", lead?.details)}
            ${question ? row("Their question", question) : ""}
          </table>
        </td></tr>

        ${
          chat
            ? `<tr><td style="padding:0 28px 8px;">
                 <div style="font:600 12px/1.5 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
                             letter-spacing:.08em;text-transform:uppercase;color:#6b7280;
                             border-top:1px solid #ececf1;padding-top:18px;">Conversation</div>
               </td></tr>
               <tr><td style="padding:6px 28px 22px;">
                 <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${chat}</table>
               </td></tr>`
            : ""
        }

        <tr><td style="padding:0 28px 28px;">
          <a href="mailto:${esc(lead?.email)}"
             style="display:inline-block;background:#7c3aed;color:#ffffff;text-decoration:none;
                    font:600 14px/1 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
                    padding:13px 22px;border-radius:999px;">Reply to ${esc(lead?.name || "them")}</a>
        </td></tr>

        <tr><td style="background:#fafafa;padding:16px 28px;
                       font:400 12px/1.6 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#9ca3af;">
          ${
            kind === "lead"
              ? "Sent when someone completed the chat form."
              : "They were told you would reply within 24 hours."
          }
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildText({ kind, lead, question }) {
  const k = KINDS[kind] || KINDS.lead;
  return [
    k.label,
    "",
    `Name:    ${clean(lead?.name)}`,
    `Email:   ${clean(lead?.email)}`,
    `Phone:   ${clean(lead?.phone)}`,
    `Service: ${clean(lead?.service)}`,
    "",
    "Project details:",
    clean(lead?.details),
    question ? `\nTheir question:\n${clean(question)}` : "",
  ].join("\n");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  const kind = KINDS[body?.kind] ? body.kind : "lead";
  const lead = {
    name: clean(body?.lead?.name, 120),
    email: clean(body?.lead?.email, 200),
    phone: clean(body?.lead?.phone, 40),
    service: clean(body?.lead?.service, 120),
    details: clean(body?.lead?.details, 4000),
  };
  const question = clean(body?.question, 1000);
  const transcript = Array.isArray(body?.transcript)
    ? body.transcript.slice(-14).map((m) => ({ from: m?.from === "bot" ? "bot" : "user", text: clean(m?.text, 1200) }))
    : [];

  if (!lead.name || !lead.email) {
    return Response.json({ ok: false, error: "name and email required" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Nothing to send with. Say so honestly rather than pretending it went.
    console.warn("[lead] RESEND_API_KEY is not set — email not sent", { kind, email: lead.email });
    return Response.json({ ok: true, delivered: false, reason: "email not configured" });
  }

  const who = plain(lead.name) || "Someone";
  const subject =
    kind === "lead"
      ? `New lead: ${who}${lead.service ? ` · ${plain(lead.service)}` : ""}`
      : kind === "pricing"
        ? `Pricing request: ${who}`
        : `${who} wants to talk to you`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: lead.email,
        subject,
        html: buildHtml({ kind, lead, question, transcript }),
        text: buildText({ kind, lead, question }),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[lead] resend rejected", res.status, detail.slice(0, 400));
      return Response.json({ ok: true, delivered: false, reason: "provider error" });
    }

    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] send failed", err);
    return Response.json({ ok: true, delivered: false, reason: "send failed" });
  }
}
