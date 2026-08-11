"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ChatbotIcon, AutomationIcon } from "./Icons";
import { ShopifyGlyph } from "./BrandLogos";

const GROUPS = [
  {
    Icon: ShopifyGlyph,
    title: "Shopify & Commerce",
    items: ["Shopify Liquid", "WordPress", "WooCommerce", "Shopify APIs", "Next.js", "Tailwind"],
  },
  {
    Icon: ChatbotIcon,
    title: "AI Chatbots & Voice",
    items: ["Botpress", "Voiceflow", "Vapi", "OpenAI", "Claude", "RAG"],
  },
  {
    Icon: AutomationIcon,
    title: "Automation & CRM",
    items: ["n8n", "Make.com", "Zapier", "Zoho", "Node.js", "REST & GraphQL"],
  },
];

export default function TechStack({ hideHeading = false }) {
  return (
    <section id="stack" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-12">
          <span className="eyebrow">TECH STACK</span>
          <h2 className="h2">
            Tools I <span className="grad-text">build with.</span>
          </h2>
        </Reveal>
      )}

      <div className="grid md:grid-cols-3 gap-5">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1}>
            <div
              className="h-full rounded-[20px] border bg-surface p-7 transition-colors hover:border-brand/40"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl border bg-surface-2 text-brand"
                  style={{ borderColor: "var(--border)" }}
                >
                  <g.Icon className="w-5 h-5" />
                </span>
                <h3 className="text-[1.05rem]">{g.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ y: -3 }}
                    className="cursor-default rounded-[10px] border bg-surface-2 px-3.5 py-2 text-[0.85rem] text-dim transition-colors hover:border-brand hover:text-white"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
