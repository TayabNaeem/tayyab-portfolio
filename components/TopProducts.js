"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Star } from "lucide-react";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";

/**
 * The three ways most engagements start. Icons use the line-art `store` key so
 * they sit consistently beside the lucide icons in this section.
 */
const PRODUCTS = [
  {
    icon: "store",
    slug: "shopify-development",
    name: "Shopify Store Build",
    tagline: "A storefront that looks built for your brand — and loads like it.",
    points: [
      "Theme customization & custom Liquid",
      "Professional design across every template",
      "Speed optimization pass",
      "App integration & handover",
    ],
    timeline: "2 weeks",
  },
  {
    icon: "bot",
    slug: "ai-chatbot-voice-agents",
    name: "AI Assistant Setup",
    tagline: "A chatbot or voice agent that answers from your real data, day and night.",
    points: [
      "Grounded on your catalog & docs",
      "Web, WhatsApp or voice channel",
      "Human handoff rules",
      "Tuning after launch",
    ],
    timeline: "1–2 weeks",
    featured: true,
  },
  {
    icon: "workflow",
    slug: "automations",
    name: "Automation Sprint",
    tagline: "The repetitive work between your tools, running without you.",
    points: [
      "Process mapped before building",
      "n8n / Make / Zapier workflows",
      "Order, data & alert syncing",
      "Error handling and monitoring",
    ],
    timeline: "1 week",
  },
];

export default function TopProducts() {
  return (
    <section id="products" className="shell py-24">
      <Reveal className="mx-auto mb-12 max-w-[620px] text-center">
        <span className="eyebrow">START HERE</span>
        <h2 className="h2">
          Three ways to <span className="grad-text">work together.</span>
        </h2>
        <p className="lead mt-4">
          Where most projects begin. Each one is scoped up front, so you know exactly what
          you are getting before we start.
        </p>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <div
              className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
                p.featured ? "shadow-glow" : ""
              }`}
              style={{
                borderColor: p.featured ? "rgba(168,85,247,0.5)" : "var(--border)",
                background: p.featured
                  ? "linear-gradient(165deg, rgba(168,85,247,0.12), #151517 55%)"
                  : "#151517",
              }}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-grad px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-bg">
                  <Star size={11} strokeWidth={3} fill="currentColor" />
                  Popular
                </span>
              )}

              <span
                className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border bg-surface-2 text-brand"
                style={{ borderColor: "var(--border)" }}
              >
                <ServiceIcon icon={p.icon} className="h-7 w-7" />
              </span>

              <h3 className="h3 mb-2">{p.name}</h3>
              <p className="body mb-6">{p.tagline}</p>

              <ul className="mb-7 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <span className="mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/20 text-brand">
                      <Check size={10} strokeWidth={3.5} />
                    </span>
                    <span className="text-[0.88rem] text-dim">{pt}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-auto flex items-center justify-between border-t pt-5"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <div className="small">Typical timeline</div>
                  <div className="font-display text-[1.15rem] font-semibold text-white">
                    {p.timeline}
                  </div>
                </div>
                <Link
                  href={`/services/${p.slug}`}
                  className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} px-5`}
                >
                  Details <ArrowUpRight size={15} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
