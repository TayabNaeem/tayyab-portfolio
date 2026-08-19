/**
 * Lead + escalation email for the site assistant.
 *
 * Sends over SMTP. Set these on the host (Vercel → Settings → Environment
 * Variables) and never commit them:
 *
 *   SMTP_HOST        e.g. smtp.gmail.com
 *   SMTP_PORT        587 for STARTTLS, 465 for implicit TLS. Defaults to 587.
 *   SMTP_USER        the mailbox to authenticate as
 *   SMTP_PASS        its password, or a Gmail app password. SECRET.
 *   SMTP_SECURE      optional "true"/"false"; inferred from the port otherwise
 *   LEAD_TO_EMAIL    where leads land, defaults to the contact address
 *   LEAD_FROM_EMAIL  the From header, defaults to SMTP_USER
 *
 * With SMTP unconfigured the route still answers 200 with delivered:false, so
 * missing settings degrade the notification rather than breaking the chat.
 */

import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.LEAD_TO_EMAIL || "naemtayb@gmail.com";
const FROM = process.env.LEAD_FROM_EMAIL || process.env.SMTP_USER || "";

/**
 * One transporter per warm instance. Serverless reuses the process between
 * invocations, so rebuilding the connection pool on every request would mean
 * a fresh TLS handshake for each lead.
 */
let transporter = null;

function getTransport() {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  if (transporter) return transporter;

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure =
    process.env.SMTP_SECURE != null ? process.env.SMTP_SECURE === "true" : port === 465;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    // a hung mail server must not hold the function open
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

const KINDS = {
  lead: { label: "New lead", tint: "#a855f7" },
  pricing: { label: "Pricing request", tint: "#f59e0b" },
  connect: { label: "Wants to talk to you", tint: "#22c55e" },
  summary: { label: "Chat finished", tint: "#3b82f6" },
};

const FOOTERS = {
  lead: "Sent the moment they gave their details, before any conversation. Their questions arrive separately.",
  pricing: "They were told you would reply within 24 hours.",
  connect: "They were told you would reply within 24 hours.",
  summary: "Sent when the conversation ended, or when they went quiet.",
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

function buildHtml({ kind, lead, question, transcript, interests }) {
  const k = KINDS[kind] || KINDS.lead;
  const when = new Date().toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  });

  const chat = (transcript || [])
    .slice(-40)
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
            ${row("Interested in", interests?.length ? interests.join(", ") : "")}
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
          ${esc(FOOTERS[kind] || FOOTERS.lead)}
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildText({ kind, lead, question, transcript, interests }) {
  const k = KINDS[kind] || KINDS.lead;
  const who = clean(lead?.name) || "Visitor";
  const lines = [
    k.label,
    "",
    `Name:  ${who}`,
    `Email: ${clean(lead?.email)}`,
    `Phone: ${clean(lead?.phone)}`,
  ];

  if (interests?.length) lines.push(`Interested in: ${interests.join(", ")}`);
  if (lead?.details) lines.push("", "Project details:", clean(lead.details));
  if (question) lines.push("", "Their question:", clean(question));

  if (transcript?.length) {
    lines.push("", "Conversation:");
    for (const m of transcript.slice(-40)) {
      lines.push(`${m.from === "bot" ? "Assistant" : who}: ${clean(m.text)}`);
    }
  }

  lines.push("", FOOTERS[kind] || FOOTERS.lead);
  return lines.join("\n");
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
    ? body.transcript.slice(-40).map((m) => ({ from: m?.from === "bot" ? "bot" : "user", text: clean(m?.text, 1200) }))
    : [];
  const interests = Array.isArray(body?.interests)
    ? body.interests.slice(0, 8).map((v) => plain(v, 60)).filter(Boolean)
    : [];

  if (!lead.name || !lead.email) {
    return Response.json({ ok: false, error: "name and email required" }, { status: 422 });
  }

  const mailer = getTransport();
  if (!mailer) {
    // Nothing to send with. Say so honestly rather than pretending it went.
    console.warn("[lead] SMTP is not configured — email not sent", { kind, email: lead.email });
    return Response.json({ ok: true, delivered: false, reason: "email not configured" });
  }

  const who = plain(lead.name) || "Someone";
  const subject =
    kind === "lead"
      ? `New lead: ${who}${lead.service ? ` · ${plain(lead.service)}` : ""}`
      : kind === "pricing"
        ? `Pricing request: ${who}`
        : kind === "summary"
          ? `Chat finished: ${who}${interests.length ? ` · ${interests.join(", ")}` : ""}`
          : `${who} wants to talk to you`;

  try {
    const info = await mailer.sendMail({
      from: FROM || process.env.SMTP_USER,
      to: TO,
      replyTo: lead.email,
      subject,
      html: buildHtml({ kind, lead, question, transcript, interests }),
      text: buildText({ kind, lead, question, transcript, interests }),
    });

    // A server that accepted nothing has not delivered anything.
    if (info?.rejected?.length && !info?.accepted?.length) {
      console.error("[lead] smtp rejected every recipient", info.rejected);
      return Response.json({ ok: true, delivered: false, reason: "rejected" });
    }

    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    // Bad credentials, blocked port, host down — log it, keep the chat working.
    console.error("[lead] smtp send failed", err?.message || err);
    transporter = null; // force a fresh connection next time
    return Response.json({ ok: true, delivered: false, reason: "send failed" });
  }
}
