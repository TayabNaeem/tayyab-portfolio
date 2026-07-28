"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { StoreMockup, ChatMockup, FlowMockup, DashMockup } from "./Mockups";

const PROJECTS = [
  {
    Mockup: StoreMockup,
    tag: "Shopify",
    title: "Fashion Store Rebuild",
    desc: "Rebuilt a slow, cluttered storefront as a fast headless Shopify experience with a redesigned PDP and checkout flow.",
    stack: ["Hydrogen", "Liquid", "Tailwind"],
    metrics: [
      { v: "60%", l: "faster loads" },
      { v: "+32%", l: "conversions" },
    ],
  },
  {
    Mockup: ChatMockup,
    tag: "AI Chatbot",
    title: "Support Copilot",
    desc: "A RAG-powered assistant trained on product docs and order data, answering across web chat and WhatsApp.",
    stack: ["OpenAI", "RAG", "WhatsApp API"],
    metrics: [
      { v: "70%", l: "tickets auto-solved" },
      { v: "24/7", l: "coverage" },
    ],
  },
  {
    Mockup: FlowMockup,
    tag: "Automation",
    title: "Order Ops Pipeline",
    desc: "An end-to-end workflow syncing orders, invoices, inventory and Slack alerts with zero manual entry.",
    stack: ["n8n", "Node.js", "Webhooks"],
    metrics: [
      { v: "15h", l: "saved weekly" },
      { v: "0", l: "manual entry" },
    ],
  },
  {
    Mockup: DashMockup,
    tag: "AI + Data",
    title: "Revenue Insights Bot",
    desc: "An AI reporting agent that reads store analytics and posts a plain-English performance digest every morning.",
    stack: ["Python", "Claude", "Shopify API"],
    metrics: [
      { v: "Daily", l: "auto reports" },
      { v: "12+", l: "data sources" },
    ],
  },
];

export default function Portfolio({ hideHeading = false, limit }) {
  const shown = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <section id="portfolio" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div>
            <span className="eyebrow">PORTFOLIO</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
              Featured Projects <span className="grad-text">Selected Work.</span>
            </h2>
          </div>
          <Link href="/work" className="btn btn-ghost self-start sm:self-auto">
            View All Work <span className="text-[0.78rem]">➤</span>
          </Link>
        </Reveal>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group h-full flex flex-col overflow-hidden rounded-[20px] border bg-surface hover:border-brand/50 hover:shadow-soft transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              {/* mockup */}
              <div className="relative h-[190px] overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                  <p.Mockup />
                </div>
                <span className="absolute top-3.5 left-3.5 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-brand backdrop-blur-md bg-[#131317b3]"
                      style={{ borderColor: "var(--border-2)" }}>
                  {p.tag}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.2rem] mb-2">{p.title}</h3>
                <p className="text-dim text-[0.9rem] mb-5">{p.desc}</p>

                {/* metrics */}
                <div className="flex gap-6 mb-5">
                  {p.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-[1.4rem] font-bold text-brand leading-none">{m.v}</div>
                      <div className="text-[0.72rem] text-mute mt-1">{m.l}</div>
                    </div>
                  ))}
                </div>

                {/* stack chips */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t}
                          className="rounded-lg border bg-surface-2 px-2.5 py-1 text-[0.74rem] text-dim"
                          style={{ borderColor: "var(--border)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
