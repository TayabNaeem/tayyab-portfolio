"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "How long does a project take?",
    a: "Most builds ship within two weeks of the design being approved. Larger stores or multi-channel chatbot work can run longer — you'll get a realistic timeline before anything starts, not an optimistic one.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed scope, fixed price. You approve both before work begins, so there's no hourly creep and no surprise invoice at the end. If the scope genuinely changes mid-project, we agree the difference in writing first.",
  },
  {
    q: "Do you work with existing stores or only new ones?",
    a: "Both. A lot of my work is taking a store that already sells and fixing what's holding it back — speed, structure, a theme that was never customised properly. I won't rebuild something that doesn't need rebuilding.",
  },
  {
    q: "What do you need from me to start?",
    a: "Your brand assets, access to the store or hosting, and a clear idea of what success looks like. If you don't have that last part nailed down yet, we work it out together in the first conversation.",
  },
  {
    q: "Can you maintain the site after launch?",
    a: "Yes, though it's optional. Everything is handed over with a walkthrough so your team can run it independently. If you'd rather I stay on for updates and monitoring, we can arrange that separately.",
  },
  {
    q: "Which chatbot platform do you use?",
    a: "It depends on the job. Botpress and Voiceflow for conversational flows, Vapi when you need voice agents handling calls. I'll recommend based on your channels and budget rather than defaulting to one tool.",
  },
];

function Item({ item, open, onToggle }) {
  return (
    <div className="border-b" style={{ borderColor: "var(--border)" }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-5 py-6 text-left"
      >
        <h3 className="h3 flex-1 transition-colors group-hover:text-brand-light">{item.q}</h3>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            open ? "rotate-45 bg-grad text-bg" : "text-brand group-hover:border-brand"
          }`}
          style={!open ? { borderColor: "var(--border-2)" } : { borderColor: "transparent" }}
        >
          <Plus size={17} strokeWidth={2.2} />
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="body max-w-[760px] pb-7 pr-14">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="shell section-y">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">
              Questions, <span className="grad-text">answered.</span>
            </h2>
            <p className="lead mt-4 max-w-[380px]">
              The things people usually ask before starting. If yours isn&apos;t here, just ask —
              I reply within a day.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Ask a question <ArrowUpRight size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t" style={{ borderColor: "var(--border)" }}>
            {FAQS.map((f, i) => (
              <Item
                key={f.q}
                item={f}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
