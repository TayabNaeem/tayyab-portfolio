"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Check, ArrowRight, ArrowLeft, Send } from "lucide-react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Reveal from "./Reveal";

import { LinkedinIcon, GithubIcon, WhatsappIcon } from "./SocialIcons";

export const CONTACT_EMAIL = "naemtayb@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+92 336 4103354";
export const CONTACT_PHONE_E164 = "+923364103354";
const LINKEDIN = "https://www.linkedin.com/in/tayyab-naeem-54b011391/";

const STEPS = ["About you", "Project", "Details"];

const SERVICES = [
  "Shopify Development",
  "Website Development",
  "AI Chatbot",
  "AI Automation",
  "CRM Management",
  "Something else",
];
const BUDGETS = ["< $500", "$500 – $1k", "$1k – $5k", "$5k+"];
const TIMELINES = ["ASAP", "2–4 weeks", "1–3 months", "Flexible"];

const DETAILS = [
  { Icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { Icon: Phone, label: "Phone", value: CONTACT_PHONE_DISPLAY, href: `tel:${CONTACT_PHONE_E164}` },
];

const SOCIALS = [
  { Icon: WhatsappIcon, label: "WhatsApp", href: `https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}` },
  { Icon: LinkedinIcon, label: "LinkedIn", href: LINKEDIN },
  { Icon: GithubIcon, label: "GitHub", href: "#" },
];

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const EMPTY = {
  name: "", email: "", company: "", phone: "",
  service: "", budget: "", timeline: "", message: "",
};

/* ---------- building blocks ---------- */

function Field({ label, optional, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
        {label}{" "}
        {optional && (
          <span className="font-normal normal-case tracking-normal text-mute/70">(optional)</span>
        )}
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

function ChipGroup({ options, value, onChange }) {
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

/* ---------- left column ---------- */

function ContactInfo() {
  return (
    <div className="lg:sticky lg:top-32">
      <span className="eyebrow">CONTACT DETAILS</span>
      <h3 className="mb-4 text-[clamp(1.5rem,2.6vw,2rem)]">
        Let&apos;s start a <span className="grad-text">conversation.</span>
      </h3>
      <p className="mb-9 max-w-[380px] text-[0.95rem] text-dim">
        Prefer to reach out directly? Use any of the channels below — or fill in the form and
        I&apos;ll come back to you with a plan.
      </p>

      <ul className="space-y-3">
        {DETAILS.map(({ Icon, label, value, href, external }) => {
          const inner = (
            <>
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border bg-surface-2 text-brand transition-colors group-hover:border-brand group-hover:bg-brand/10"
                style={{ borderColor: "var(--border)" }}
              >
                <Icon size={19} strokeWidth={1.8} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-mute">
                  {label}
                </span>
                <span className="block truncate text-[0.95rem] text-[#f4f4f5]">{value}</span>
              </span>
            </>
          );

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border p-3.5 transition-colors hover:border-brand/40 hover:bg-surface-2/60"
                  style={{ borderColor: "var(--border)" }}
                >
                  {inner}
                </a>
              ) : (
                <div
                  className="group flex items-center gap-4 rounded-2xl border p-3.5"
                  style={{ borderColor: "var(--border)" }}
                >
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-[0.8rem] text-mute">Find me on</span>
        {SOCIALS.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            title={label}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="grid h-11 w-11 place-items-center rounded-xl border bg-surface text-dim transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
            style={{ borderColor: "var(--border)" }}
          >
            <Icon />
          </a>
        ))}
      </div>
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

  const back = () => {
    setErr("");
    setStep((s) => Math.max(s - 1, 0));
  };

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
    <section id="contact" className="shell py-24">
      <Reveal>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* LEFT — details */}
          <ContactInfo />

          {/* RIGHT — form */}
          <div
            className="rounded-[26px] border p-6 shadow-soft sm:p-9"
            style={{
              borderColor: "var(--border-2)",
              background: "linear-gradient(160deg,#1c1c20,#151517)",
            }}
          >
            {!hideHeading && (
              <div className="mb-8">
                <span className="eyebrow">GET IN TOUCH</span>
                <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">
                  Tell me about <span className="grad-text">your project.</span>
                </h2>
              </div>
            )}

            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-grad text-bg">
                  <Check size={30} strokeWidth={3} />
                </div>
                <h3 className="mb-2 text-[1.5rem]">Message sent!</h3>
                <p className="text-dim">Thanks — I&apos;ll get back to you within a day.</p>
                <button
                  onClick={() => {
                    setDone(false);
                    setStep(0);
                  }}
                  className="btn btn-ghost mt-7"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <>
                {/* stepper */}
                <div className="mb-8 flex items-center">
                  {STEPS.map((label, i) => (
                    <div
                      key={label}
                      className={`flex items-center ${i < STEPS.length - 1 ? "flex-1" : ""}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[0.8rem] font-bold transition-all ${
                            i <= step ? "bg-grad text-bg" : "border text-mute"
                          }`}
                          style={i > step ? { borderColor: "var(--border-2)" } : undefined}
                        >
                          {i < step ? <Check size={15} strokeWidth={3} /> : i + 1}
                        </span>
                        <span
                          className={`hidden text-[0.88rem] font-medium sm:block ${
                            i <= step ? "text-white" : "text-mute"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div
                          className="mx-3 h-px flex-1"
                          style={{ background: i < step ? "#a855f7" : "var(--border-2)" }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={submit} noValidate>
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
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
                          <Input type="tel" value={data.phone} onChange={set("phone")} placeholder="+92 ..." autoComplete="tel" />
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
                          rows={8}
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

                  <div className="mt-8 flex items-center justify-between gap-4">
                    {step > 0 ? (
                      <button type="button" onClick={back} className="btn btn-ghost">
                        <ArrowLeft size={15} strokeWidth={2.2} /> Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < STEPS.length - 1 ? (
                      <button type="button" onClick={next} className="btn btn-primary">
                        Next <ArrowRight size={15} strokeWidth={2.2} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={sending}
                        className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {sending ? "Sending…" : (<>Send Message <Send size={15} strokeWidth={2.2} /></>)}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
