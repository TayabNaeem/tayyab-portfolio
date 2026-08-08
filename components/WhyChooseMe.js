"use client";

import { Gauge, MessagesSquare, Boxes, ShieldCheck, Repeat, Wallet } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    Icon: Gauge,
    title: "Speed is a feature",
    desc: "Every build gets audited for load time, so shoppers keep moving instead of bouncing.",
  },
  {
    Icon: Boxes,
    title: "One person, whole stack",
    desc: "Storefront, chatbot and automations from the same hands. No agency handoffs, no gaps.",
  },
  {
    Icon: MessagesSquare,
    title: "You always know where it stands",
    desc: "Clear updates in plain language. No silence for a week, no jargon to decode.",
  },
  {
    Icon: Repeat,
    title: "Built to be handed over",
    desc: "Clean structure and a walkthrough at the end, so your team can edit without calling me.",
  },
  {
    Icon: Wallet,
    title: "Fixed scope, fixed price",
    desc: "You approve the plan and the number before work starts. No hourly creep.",
  },
  {
    Icon: ShieldCheck,
    title: "Nothing ships untested",
    desc: "Checkouts, forms and automations run end to end before launch, on desktop and mobile.",
  },
];

function Card({ p, i }) {
  const n = String(i + 1).padStart(2, "0");
  return (
    <Reveal delay={(i % 3) * 0.07}>
      <div className="group relative h-full">
        {/* gradient ring, revealed on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            padding: "1px",
            background: "linear-gradient(150deg, #a855f7, rgba(168,85,247,0.15) 55%, transparent)",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div
          className="relative flex h-full flex-col items-center overflow-hidden rounded-[22px] border bg-surface px-7 py-9 text-center transition-transform duration-300 group-hover:-translate-y-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          {/* glow from the top on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* index */}
          <span className="relative mb-5 font-display text-[0.72rem] font-bold tracking-[0.22em] text-mute transition-colors duration-300 group-hover:text-brand">
            {n}
          </span>

          {/* icon */}
          <span
            className="relative mb-6 grid h-16 w-16 place-items-center rounded-2xl border bg-surface-2 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand"
            style={{ borderColor: "var(--border-2)" }}
          >
            <p.Icon size={26} strokeWidth={1.6} />
          </span>

          <h3 className="h3 relative mb-2.5">{p.title}</h3>
          <p className="body relative">{p.desc}</p>

          {/* underline accent */}
          <span
            aria-hidden
            className="relative mt-6 h-[2px] w-0 rounded-full bg-grad transition-all duration-300 group-hover:w-12"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="shell py-24">
      <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
        <span className="eyebrow">WHY WORK WITH ME</span>
        <h2 className="h2">
          What you actually <span className="grad-text">get.</span>
        </h2>
        <p className="lead mt-4">
          Six things I hold to on every project. The reasons clients come back rather than
          shopping around again.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
