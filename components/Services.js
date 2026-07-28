"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ChatbotIcon, AutomationIcon, IntegrationIcon } from "./Icons";
import { ShopifyMark } from "./BrandLogos";

const SERVICES = [
  {
    no: "01",
    Icon: ShopifyMark,
    title: "Shopify Development",
    desc: "Custom themes, Liquid & headless storefronts built to load fast and convert browsers into buyers.",
    points: ["Custom & headless themes", "Speed + CRO optimization", "Checkout & app extensions"],
  },
  {
    no: "02",
    Icon: ChatbotIcon,
    title: "AI Chatbot Development",
    desc: "LLM-powered assistants that answer, qualify and sell — grounded in your real product data.",
    points: ["RAG over your catalog & docs", "Web, WhatsApp & Instagram", "Human handoff built in"],
  },
  {
    no: "03",
    Icon: AutomationIcon,
    title: "AI Automation",
    desc: "End-to-end workflows that quietly remove the manual work from your daily operations.",
    points: ["n8n / Make / Zapier builds", "Order & inventory syncing", "AI agents for ops"],
  },
  {
    no: "04",
    Icon: IntegrationIcon,
    title: "API Integrations",
    desc: "Connect your store, CRM, and tools into one clean system that talks to itself.",
    points: ["REST & GraphQL APIs", "CRM + ERP connections", "Custom webhooks"],
  },
];

export default function Services({ hideHeading = false }) {
  return (
    <section id="services" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-12">
          <span className="eyebrow">SERVICES</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
            What I Do <span className="grad-text">Best.</span>
          </h2>
          <p className="text-dim mt-4 max-w-[520px]">
            Three things I go deep on — storefronts that sell, assistants that talk, and
            systems that run themselves.
          </p>
        </Reveal>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.09}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-[20px] border p-7 bg-surface hover:border-brand hover:shadow-soft transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              {/* watermark number */}
              <span className="pointer-events-none absolute -top-3 right-3 font-display text-[4.5rem] font-bold leading-none text-white/[0.04] transition-colors group-hover:text-brand/10">
                {s.no}
              </span>

              <div
                className="relative w-[56px] h-[56px] grid place-items-center rounded-[14px] border bg-surface-2 text-brand mb-5 transition-all group-hover:border-brand group-hover:bg-brand/10"
                style={{ borderColor: "var(--border)" }}
              >
                <s.Icon />
              </div>

              <h3 className="relative text-[1.15rem] mb-2.5">{s.title}</h3>
              <p className="relative text-dim text-[0.9rem] mb-4">{s.desc}</p>

              <ul className="relative flex flex-col gap-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[0.83rem] text-mute">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mt-[3px] shrink-0 text-brand"
                         fill="none" stroke="currentColor" strokeWidth="2.6"
                         strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
