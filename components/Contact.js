"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Reveal from "./Reveal";

export const CONTACT_EMAIL = "naemtayb@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+92 336 4103354";
export const CONTACT_PHONE_E164 = "+923364103354";

const STEPS = ["About you", "Project", "Details"];

const SERVICES = [
  "Shopify Development",
  "AI Chatbot",
  "AI Automation",
  "API Integration",
  "Something else",
];
const BUDGETS = ["< $500", "$500 – $1k", "$1k – $5k", "$5k+"];
const TIMELINES = ["ASAP", "2–4 weeks", "1–3 months", "Flexible"];

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const EMPTY = {
  name: "", email: "", company: "", phone: "",
  service: "", budget: "", timeline: "", message: "",
};

/* ---------- small building blocks ---------- */

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
        {label} {optional && <span className="font-normal normal-case tracking-normal text-mute/70">(optional)</span>}
      </span>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border bg-surface-2 px-4 py-3.5 text-[0.95rem] text-[#f4f4f5] outline-none transition-colors placeholder:text-mute/70 focus:border-brand"
      style={{ borderColor: "var(--border)" }}
    />
  );
}

function ChipGroup({ options, value, onChange, name }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(active ? "" : o)}
            className={`rounded-xl border px-4 py-2.5 text-[0.87rem] transition-all ${
              active
                ? "border-brand bg-brand/15 text-white"
                : "bg-surface-2 text-dim hover:text-white"
            }`}
            style={!active ? { borderColor: "var(--border)" } : undefined}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- main ---------- */

export default function Contact({ hideHeading = false }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(EMPTY);
  const [err, setErr] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const setVal = (k) => (v) => setData((d) => ({ ...d, [k]: v }));

  const next = () => {
    if (step === 0) {
      if (!data.name.trim()) return setErr("Please enter your name.");
      if (!emailOk(data.email.trim())) return setErr("Please enter a valid email address.");
    }
    if (step === 1 && !data.service) return setErr("Please pick a service.");
    setErr("");
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const back = () => { setErr(""); setStep((s) => Math.max(s - 1, 0)); };

  const submit = async (e) => {
    e.preventDefault();
    if (!data.message.trim()) return setErr("Please tell me a bit about the project.");
    setErr("");
    setSending(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: data.name.trim(),
        email: data.email.trim(),
        company: data.company.trim(),
        phone: data.phone.trim(),
        service: data.service,
        budget: data.budget,
        timeline: data.timeline,
        message: data.message.trim(),
        createdAt: serverTimestamp(),
      });
      setDone(true);
      setData(EMPTY);
    } catch (e2) {
      console.error("Failed to save contact message:", e2);
      setErr(`Something went wrong. Please email me directly at ${CONTACT_EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="shell max-w-[980px] py-24">
      <Reveal>
        <div
          className="rounded-[26px] border p-6 shadow-soft sm:p-10 md:p-12"
          style={{ borderColor: "var(--border-2)", background: "linear-gradient(160deg,#1c1c20,#151517)" }}
        >
          {!hideHeading && (
            <div className="mb-10 text-center">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
                Let&apos;s build something <span className="grad-text">that grows your business.</span>
              </h2>
            </div>
          )}

          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-grad">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#0a0a0b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-[1.5rem]">Message sent!</h3>
              <p className="text-dim">Thanks {"—"} I&apos;ll get back to you within a day.</p>
              <button onClick={() => { setDone(false); setStep(0); }} className="btn btn-ghost mt-7">
                Send another
              </button>
            </motion.div>
          ) : (
            <>
              {/* stepper */}
              <div className="mb-9 flex items-center">
                {STEPS.map((label, i) => (
                  <div key={label} className={`flex items-center ${i < STEPS.length - 1 ? "flex-1" : ""}`}>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[0.8rem] font-bold transition-all ${
                          i <= step ? "bg-grad text-bg" : "border text-mute"
                        }`}
                        style={i > step ? { borderColor: "var(--border-2)" } : undefined}
                      >
                        {i + 1}
                      </span>
                      <span className={`hidden text-[0.88rem] font-medium sm:block ${i <= step ? "text-white" : "text-mute"}`}>
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="mx-3 h-px flex-1" style={{ background: i < step ? "#a855f7" : "var(--border-2)" }} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={submit} noValidate>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                    {step === 0 && (
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Name">
                          <Input value={data.name} onChange={set("name")} placeholder="Your full name" autoComplete="name" />
                        </Field>
                        <Field label="Email">
                          <Input type="email" value={data.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" />
                        </Field>
                        <Field label="Company / Website" optional>
                          <Input value={data.company} onChange={set("company")} placeholder="Acme Co. / acme.com" />
                        </Field>
                        <Field label="Phone" optional>
                          <Input type="tel" value={data.phone} onChange={set("phone")} placeholder="+1 ..." autoComplete="tel" />
                        </Field>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="grid gap-7">
                        <Field label="What do you need?">
                          <ChipGroup options={SERVICES} value={data.service} onChange={setVal("service")} />
                        </Field>
                        <Field label="Budget" optional>
                          <ChipGroup options={BUDGETS} value={data.budget} onChange={setVal("budget")} />
                        </Field>
                        <Field label="Timeline" optional>
                          <ChipGroup options={TIMELINES} value={data.timeline} onChange={setVal("timeline")} />
                        </Field>
                      </div>
                    )}

                    {step === 2 && (
                      <Field label="Project details">
                        <textarea
                          rows={7}
                          value={data.message}
                          onChange={set("message")}
                          placeholder="Tell me about your store, the problem you're solving, and what success looks like…"
                          className="w-full resize-y rounded-xl border bg-surface-2 px-4 py-3.5 text-[0.95rem] text-[#f4f4f5] outline-none transition-colors placeholder:text-mute/70 focus:border-brand"
                          style={{ borderColor: "var(--border)" }}
                        />
                      </Field>
                  )}
                </motion.div>

                {err && <p className="mt-4 text-[0.88rem] text-brand-deep">{err}</p>}

                {/* nav buttons */}
                <div className="mt-9 flex items-center justify-between gap-4">
                  {step > 0 ? (
                    <button type="button" onClick={back} className="btn btn-ghost">
                      <span className="text-[0.78rem]">←</span> Back
                    </button>
                  ) : <span />}

                  {step < STEPS.length - 1 ? (
                    <button type="button" onClick={next} className="btn btn-primary">
                      Next <span className="text-[0.78rem]">→</span>
                    </button>
                  ) : (
                    <button type="submit" disabled={sending} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                      {sending ? "Sending…" : <>Send Message <span className="text-[0.78rem]">➤</span></>}
                    </button>
                  )}
                </div>
              </form>
            </>
          )}

          {/* direct contact */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t pt-7 text-[0.92rem]" style={{ borderColor: "var(--border)" }}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-dim transition-colors hover:text-brand-light">
              ✉️ {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="text-dim transition-colors hover:text-brand-light">
              📞 {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-brand-light"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
