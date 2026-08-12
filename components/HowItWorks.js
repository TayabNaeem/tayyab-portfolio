"use client";

import { ClipboardList, PenTool, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    no: "01",
    Icon: ClipboardList,
    title: "Pick a plan",
    desc: "Tell me what you need. You get a fixed scope and price before anything starts.",
    meta: "Day 1",
  },
  {
    no: "02",
    Icon: PenTool,
    title: "Receive your design",
    desc: "I send the design for review. You give notes, I revise until it feels right.",
    meta: "Days 2 to 5",
  },
  {
    no: "03",
    Icon: Rocket,
    title: "Launch in 2 weeks",
    desc: "Approved work gets built, tested and shipped, with a handover for your team.",
    meta: "Week 2",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="shell section-y">
      <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
        <span className="eyebrow">HOW IT WORKS</span>
        <h2 className="h2">
          Three steps, <span className="grad-text">two weeks.</span>
        </h2>
        <p className="lead mt-4">
          No drawn out timelines or surprise invoices. Here is exactly how a project runs from
          the day you say go.
        </p>
      </Reveal>

      <div className="relative">
        {/* connecting rail */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[13%] right-[13%] top-[38px] hidden h-px lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(168,85,247,0.5), transparent)",
          }}
        />

        <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.1}>
              <div className="group relative text-center lg:px-4">
                <div className="relative z-10 mx-auto mb-6 grid h-[76px] w-[76px] place-items-center">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl border bg-bg transition-colors duration-300 group-hover:border-brand"
                    style={{ borderColor: "var(--border-2)" }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl bg-grad opacity-0 transition-opacity duration-300 group-hover:opacity-15"
                  />
                  <s.Icon
                    size={28}
                    strokeWidth={1.6}
                    className="relative text-brand transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-grad font-display text-[0.72rem] font-bold text-bg">
                    {s.no}
                  </span>
                </div>

                <span className="small mb-2 block uppercase tracking-[0.14em] text-brand">
                  {s.meta}
                </span>
                <h3 className="h3 mb-2.5">{s.title}</h3>
                <p className="body mx-auto max-w-[320px]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* availability badge */}
      <Reveal delay={0.2}>
        <div className="mt-14 flex justify-center">
          <span
            className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5 backdrop-blur-md"
            style={{ borderColor: "var(--border-2)", background: "rgba(168,85,247,0.08)" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <span className="text-[0.88rem] font-semibold text-white">
              Limited slots available
            </span>
            <span className="text-[0.88rem] text-dim">Booking new projects this month</span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}
