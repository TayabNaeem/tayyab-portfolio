"use client";

import { Gauge, MessagesSquare, Boxes, ShieldCheck, Repeat, Wallet } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Asymmetric bento — two wide anchors and four compact tiles, so the section
 * reads differently from the even card grids elsewhere on the site.
 */
const POINTS = [
  {
    Icon: Gauge,
    title: "Speed is a feature",
    desc: "Every build gets audited for load time. Fast pages keep shoppers moving instead of bouncing before they ever see the product.",
    span: "lg:col-span-2",
    stat: "< 2s",
    statLabel: "target load",
  },
  {
    Icon: Boxes,
    title: "One person, whole stack",
    desc: "Storefront, chatbot and automations from the same hands — no agency handoffs, no gaps between vendors.",
  },
  {
    Icon: MessagesSquare,
    title: "You always know where it stands",
    desc: "Clear updates in plain language. No silence for a week, no jargon to decode.",
  },
  {
    Icon: Repeat,
    title: "Built to be handed over",
    desc: "Clean structure and a walkthrough at the end, so your team can edit without calling me back.",
  },
  {
    Icon: Wallet,
    title: "Fixed scope, fixed price",
    desc: "You approve the plan and the number before work starts. No hourly creep.",
  },
  {
    Icon: ShieldCheck,
    title: "Nothing ships untested",
    desc: "Checkout flows, forms and automations get run end to end before launch — on desktop and mobile — so problems surface on my time, not in front of your customers.",
    span: "lg:col-span-2",
    stat: "3+ yrs",
    statLabel: "shipping client work",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="shell py-24">
      <Reveal className="mb-12 max-w-[620px]">
        <span className="eyebrow">WHY WORK WITH ME</span>
        <h2 className="h2">
          What you actually <span className="grad-text">get.</span>
        </h2>
        <p className="lead mt-4">
          Six things I hold to on every project — the reasons clients come back rather than
          shopping around again.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POINTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.07} className={p.span || ""}>
            <div
              className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border bg-surface p-7 transition-colors duration-300 hover:border-brand/45"
              style={{ borderColor: "var(--border)" }}
            >
              {/* corner glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)",
                  filter: "blur(28px)",
                }}
              />

              <div className="relative mb-5 flex items-start justify-between gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border bg-surface-2 text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand/10"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p.Icon size={22} strokeWidth={1.6} />
                </span>

                {p.stat && (
                  <div className="text-right">
                    <div className="font-display text-[1.6rem] font-bold leading-none text-brand">
                      {p.stat}
                    </div>
                    <div className="small mt-1">{p.statLabel}</div>
                  </div>
                )}
              </div>

              <h3 className="h3 relative mb-2">{p.title}</h3>
              <p className="body relative">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
