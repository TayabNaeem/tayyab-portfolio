"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { StoreMockup } from "./Mockups";
import { ShopifyMark } from "./BrandLogos";

// Live client stores. Descriptions reflect what each storefront actually sells.
const PROJECTS = [
  {
    id: "soundskins",
    name: "SoundSkins Global",
    url: "https://soundskinsglobal.com",
    tag: "Automotive",
    desc: "Shopify storefront for a car acoustic-insulation brand — organised by product series with vehicle-specific pre-cut kits.",
    stack: ["Shopify", "Liquid", "CRO"],
    accent: "#a855f7",
    accent2: "#6d28d9",
  },
  {
    id: "cybex",
    name: "Cybex",
    url: "https://cybex.shopping/",
    tag: "Activewear",
    desc: "Premium activewear store for men and women covering tracksuits, hoodies, leggings and training accessories.",
    stack: ["Shopify", "Custom Theme", "Speed"],
    accent: "#8b5cf6",
    accent2: "#4f46e5",
  },
  {
    id: "roohi",
    name: "ROOHI",
    url: "https://roohiapparel.com",
    tag: "Apparel",
    desc: "Culturally-inspired apparel brand selling graphic tees and embroidered two-piece sets.",
    stack: ["Shopify", "Liquid", "Branding"],
    accent: "#c084fc",
    accent2: "#7c3aed",
  },
  {
    id: "elite",
    name: "Elite Auto Gears",
    url: "https://eliteautogears.com",
    tag: "Automotive",
    desc: "Shopify storefront built for an automotive gear and accessories retailer.",
    stack: ["Shopify", "Liquid"],
    accent: "#7c3aed",
    accent2: "#a855f7",
  },
  {
    id: "rela",
    name: "RELA",
    url: "https://liverela.com",
    tag: "Pre-launch",
    desc: "Shopify build for a new brand, currently in pre-launch behind a coming-soon page.",
    stack: ["Shopify", "Theme Setup"],
    accent: "#6d28d9",
    accent2: "#8b5cf6",
  },
];

export default function Portfolio({ hideHeading = false, limit }) {
  const shown = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="portfolio" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">PORTFOLIO</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
              Shopify stores <span className="grad-text">I&apos;ve built.</span>
            </h2>
          </div>
          <Link href="/work" className="btn btn-ghost self-start sm:self-auto">
            View All Work <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </Reveal>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08}>
            <motion.a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex h-full flex-col overflow-hidden rounded-[20px] border bg-surface transition-colors hover:border-brand/50 hover:shadow-soft"
              style={{ borderColor: "var(--border)" }}
            >
              {/* preview */}
              <div className="relative h-[190px] overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                  <StoreMockup accent={p.accent} accent2={p.accent2} id={p.id} />
                </div>
                <span
                  className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-white backdrop-blur-md"
                  style={{ borderColor: "var(--border-2)", background: "#131317b3" }}
                >
                  <ShopifyMark className="h-3.5 w-3.5" />
                  {p.tag}
                </span>
                <span
                  className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full border text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
                  style={{ borderColor: "var(--border-2)", background: "#131317b3" }}
                >
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-1.5 text-[1.2rem]">{p.name}</h3>
                <span className="mb-3 text-[0.82rem] text-brand">
                  {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
                <p className="mb-5 text-[0.9rem] text-dim">{p.desc}</p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border bg-surface-2 px-2.5 py-1 text-[0.74rem] text-dim"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
