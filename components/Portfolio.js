"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const PROJECTS = [
  { icon: "🛍️", tag: "Shopify", title: "Fashion Store Rebuild", desc: "Headless build — 60% faster, 32% more conversions.", accent: "#ff7a18" },
  { icon: "🤖", tag: "AI Chatbot", title: "Support Copilot", desc: "RAG bot resolving 70% of tickets on web & WhatsApp.", accent: "#ff9d4d" },
  { icon: "⚙️", tag: "Automation", title: "Order Ops Pipeline", desc: "Automated sync saving 15+ hours every week.", accent: "#ffb066" },
  { icon: "📱", tag: "Headless", title: "Storefront App", desc: "Hydrogen storefront with a custom AI recommender.", accent: "#ff6a3c" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-[1160px] mx-auto px-5 sm:px-8 md:px-12 py-24">
      <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-11">
        <div>
          <span className="eyebrow">PORTFOLIO</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
            Featured Projects <span className="grad-text">Selected Work.</span>
          </h2>
        </div>
        <a href="#contact" className="btn btn-ghost self-start sm:self-auto">
          View All Projects <span className="text-[0.78rem]">➤</span>
        </a>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.09}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full rounded-[20px] border overflow-hidden bg-surface hover:shadow-soft transition-shadow"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="h-[150px] grid place-items-center text-[2.6rem] border-b"
                style={{
                  borderColor: "var(--border)",
                  background: `radial-gradient(circle at 30% 25%, ${p.accent}80, transparent 70%), #1c1c20`,
                }}
              >
                {p.icon}
              </div>
              <div className="p-5">
                <span className="inline-block text-[0.72rem] font-semibold uppercase tracking-wider text-brand mb-2">{p.tag}</span>
                <h3 className="text-[1.1rem] mb-1.5">{p.title}</h3>
                <p className="text-dim text-[0.88rem]">{p.desc}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
