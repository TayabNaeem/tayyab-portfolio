"use client";

import Link from "next/link";
import { ArrowUpRight, ClipboardList, PenTool, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    no: "01",
    Icon: ClipboardList,
    title: "Pick a plan",
    desc: "Tell me what you need and pick the scope that fits. No discovery calls that go nowhere — you get a fixed plan and a clear price before anything starts.",
    meta: "Day 1",
  },
  {
    no: "02",
    Icon: PenTool,
    title: "Receive your design",
    desc: "I send the design and structure for review. You give notes, I revise, and nothing gets built until you're happy with what it's going to look like.",
    meta: "Days 2–5",
  },
  {
    no: "03",
    Icon: Rocket,
    title: "Launch in 2 weeks",
    desc: "Approved design gets built, tested and shipped — typically inside two weeks, with handover so your team can run it from there.",
    meta: "Week 2",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="shell py-24">
      <Reveal className="mb-14 max-w-[620px]">
        <span className="eyebrow">HOW IT WORKS</span>
        <h2 className="h2">
          Three steps, <span className="grad-text">two weeks.</span>
        </h2>
        <p className="lead mt-4">
          No drawn-out timelines or surprise invoices. Here&apos;s exactly how a project runs from
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
                <p className="body mx-auto max-w-[340px]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Start your project <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
