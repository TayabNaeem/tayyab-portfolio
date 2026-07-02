"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const SERVICES = [
  { icon: "🛍️", title: "Shopify Development", desc: "Custom themes, Liquid, headless builds & speed optimization that convert." },
  { icon: "🤖", title: "AI Chatbot Development", desc: "LLM-powered support & sales bots with RAG over your own data." },
  { icon: "⚙️", title: "AI Automation", desc: "End-to-end workflows with n8n, Make & APIs that remove manual work." },
  { icon: "🔗", title: "API Integrations", desc: "Connecting apps, stores & tools into one seamless system." },
];

export default function Services() {
  return (
    <section id="services" className="max-w-[1160px] mx-auto px-5 sm:px-8 md:px-12 py-24">
      <Reveal className="mb-11">
        <span className="eyebrow">SERVICES</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
          What I Do <span className="grad-text">Best.</span>
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.09}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group h-full rounded-[20px] border p-7 bg-surface hover:border-brand hover:shadow-soft transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="w-[54px] h-[54px] grid place-items-center text-[1.6rem] rounded-[14px] border bg-surface-2 mb-[18px] transition-colors group-hover:bg-grad"
                   style={{ borderColor: "var(--border)" }}>
                {s.icon}
              </div>
              <h3 className="text-[1.15rem] mb-2.5">{s.title}</h3>
              <p className="text-dim text-[0.9rem]">{s.desc}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
