"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { CONTACT } from "@/lib/site";

const NEEDS = ["Shopify store", "Custom website", "AI chatbot", "Voice agent", "Automation", "Meta ads"];
const BUDGETS = ["Under $1k", "$1k – $3k", "$3k – $8k", "$8k+"];
const TIMELINES = ["As soon as possible", "In the next month", "In 2 to 3 months", "Just exploring"];

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const chipBase = {
  minHeight: 44,
  padding: "0 16px",
  borderRadius: 999,
  font: "inherit",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
};
const chipOn = { background: "var(--ink)", color: "var(--bg)", border: "1px solid var(--ink)" };
const chipOff = { background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--line)" };

const labelStyle = { display: "flex", flexDirection: "column", gap: 6, fontSize: 14, fontWeight: 500 };
const inputStyle = {
  minHeight: 50,
  border: "1px solid var(--line)",
  borderRadius: 12,
  padding: "0 14px",
  font: "inherit",
  fontWeight: 400,
  background: "var(--bg)",
  color: "var(--ink)",
};
const legendStyle = { fontSize: 14, fontWeight: 500, padding: 0, marginBottom: 10 };

const EMPTY = { name: "", email: "", store: "", timeline: TIMELINES[1], message: "" };

/** Best-effort email to the owner. A failed notification never fails the submission. */
async function notify(payload) {
  try {
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    /* the brief is already saved in Firestore */
  }
}

export default function ContactForm() {
  const [data, setData] = useState(EMPTY);
  const [needs, setNeeds] = useState({ "Shopify store": true });
  const [budget, setBudget] = useState("$1k – $3k");
  const [err, setErr] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const toggleNeed = (label) => setNeeds((n) => ({ ...n, [label]: !n[label] }));
  const selected = NEEDS.filter((n) => needs[n]);

  const submit = async (e) => {
    e.preventDefault();
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();
    if (!name) return setErr("Please enter your name.");
    if (!emailOk(email)) return setErr("Please enter a valid email address, like you@company.com.");
    if (!selected.length) return setErr("Pick at least one thing you need.");
    if (!message) return setErr("Please tell me a little about the project.");
    setErr("");
    setSending(true);

    const service = selected.join(", ");
    const store = data.store.trim();

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        company: "",
        phone: "",
        service,
        services: selected,
        budget,
        timeline: data.timeline,
        storeUrl: store,
        message,
        source: "contact-page",
        createdAt: serverTimestamp(),
      });
    } catch (e2) {
      console.error("Failed to save contact brief:", e2);
      setSending(false);
      return setErr(`Something went wrong sending your brief. Please email me directly at ${CONTACT.email}.`);
    }

    await notify({
      kind: "contact",
      lead: {
        name,
        email,
        phone: "",
        service,
        details: [
          `Store URL: ${store || "not given"}`,
          `Budget: ${budget || "not given"}`,
          `Timeline: ${data.timeline}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      },
    });

    setSending(false);
    setDone(true);
    setData(EMPTY);
    setNeeds({ "Shopify store": true });
  };

  const formShell = {
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: 28,
    padding: "clamp(22px, 3.4vw, 40px)",
    display: "flex",
    flexDirection: "column",
    gap: 22,
    minWidth: 0,
  };

  if (done) {
    return (
      <div id="brief" role="status" aria-live="polite" style={formShell}>
        <span style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--dot)", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: 24, fontWeight: 700 }} aria-hidden="true">✓</span>
        <span className="tn-display" style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.03em" }}>Brief received. Thank you!</span>
        <span style={{ color: "var(--muted)" }}>
          I&apos;ll read it and reply within one working day with next steps and a time for a free call.
        </span>
        <button
          type="button"
          onClick={() => setDone(false)}
          style={{ ...chipBase, ...chipOff, alignSelf: "flex-start", minHeight: 48, padding: "0 22px" }}
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form id="brief" onSubmit={submit} noValidate style={formShell}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="tn-display" style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-0.03em" }}>Project brief</span>
        <span style={{ color: "var(--muted)", fontSize: 15 }}>Takes about two minutes.</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: 14 }}>
        <label htmlFor="c-name" style={labelStyle}>
          Your name
          <input id="c-name" type="text" autoComplete="name" value={data.name} onChange={set("name")} style={inputStyle} />
        </label>
        <label htmlFor="c-email" style={labelStyle}>
          Email
          <input id="c-email" type="email" autoComplete="email" value={data.email} onChange={set("email")} style={inputStyle} />
        </label>
      </div>

      <label htmlFor="c-store" style={labelStyle}>
        Website or store URL (if you have one)
        <input id="c-store" type="text" inputMode="url" placeholder="yourstore.com" value={data.store} onChange={set("store")} style={inputStyle} />
      </label>

      <fieldset style={{ border: 0, margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        <legend style={legendStyle}>What do you need? Pick any.</legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {NEEDS.map((label) => {
            const on = !!needs[label];
            return (
              <button key={label} type="button" aria-pressed={on} onClick={() => toggleNeed(label)} style={{ ...chipBase, ...(on ? chipOn : chipOff) }}>
                {label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset style={{ border: 0, margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        <legend style={legendStyle}>Budget</legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {BUDGETS.map((label) => {
            const on = budget === label;
            return (
              <button key={label} type="button" aria-pressed={on} onClick={() => setBudget(label)} style={{ ...chipBase, ...(on ? chipOn : chipOff) }}>
                {label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label htmlFor="c-when" style={labelStyle}>
        When do you want to launch?
        <select id="c-when" value={data.timeline} onChange={set("timeline")} style={{ ...inputStyle, padding: "0 12px" }}>
          {TIMELINES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      <label htmlFor="c-msg" style={labelStyle}>
        Tell me about the project
        <textarea
          id="c-msg"
          rows={5}
          placeholder="What you sell, the tools you use, and what you'd like to change"
          value={data.message}
          onChange={set("message")}
          style={{ ...inputStyle, minHeight: 0, padding: "12px 14px", resize: "vertical" }}
        />
      </label>

      {err && (
        <p role="alert" style={{ margin: 0, color: "var(--accent-text)", fontSize: 15, fontWeight: 500 }}>
          {err}
        </p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
        <button
          type="submit"
          disabled={sending}
          style={{ minHeight: 56, padding: "0 30px", border: 0, borderRadius: 999, background: "var(--accent)", color: "#0D1117", font: "inherit", fontWeight: 600, cursor: sending ? "wait" : "pointer", opacity: sending ? 0.7 : 1 }}
        >
          {sending ? "Sending…" : "Send project brief →"}
        </button>
        <span style={{ color: "var(--muted)", fontSize: 14 }}>No spam. Your details stay with me.</span>
      </div>
    </form>
  );
}
