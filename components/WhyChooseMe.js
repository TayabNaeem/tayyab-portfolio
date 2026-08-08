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

        {/* frosted glass surface */}
        <div
          className="relative flex h-full flex-col items-center overflow-hidden rounded-[22px] px-7 py-10 text-center backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1.5"
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025) 55%, rgba(255,255,255,0.015))",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 12px 40px -18px rgba(0,0,0,0.9)",
          }}
        >
          {/* top edge highlight, the giveaway that it is glass */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
            }}
          />

          {/* index */}
          <span className="relative mb-6 font-display text-[0.72rem] font-bold tracking-[0.22em] text-mute transition-colors duration-300 group-hover:text-brand">
            {n}
          </span>

          {/* bare icon, no tile */}
          <span
            className="relative mb-6 text-brand transition-transform duration-300 group-hover:scale-110"
            style={{ filter: "drop-shadow(0 6px 18px rgba(168,85,247,0.45))" }}
          >
            <p.Icon size={46} strokeWidth={1.35} />
          </span>

          <h3 className="h3 relative mb-2.5">{p.title}</h3>
          <p className="body relative">{p.desc}</p>

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
    <section id="why-me" className="relative shell py-24">
      {/* colour behind the grid so the glass has something to refract */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute left-[8%] top-[26%] h-[420px] w-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.30), transparent 68%)",
            filter: "blur(70px)",
          }}
        />
        <span
          className="absolute bottom-[8%] right-[10%] h-[380px] w-[380px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(109,40,217,0.28), transparent 68%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <Reveal className="relative mx-auto mb-14 max-w-[620px] text-center">
        <span className="eyebrow">WHY WORK WITH ME</span>
        <h2 className="h2">
          What you actually <span className="grad-text">get.</span>
        </h2>
        <p className="lead mt-4">
          Six things I hold to on every project. The reasons clients come back rather than
          shopping around again.
        </p>
      </Reveal>

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
