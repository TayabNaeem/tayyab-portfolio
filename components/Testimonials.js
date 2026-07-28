"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "Tayyab rebuilt our storefront and it finally feels fast. Conversions jumped in the first month and the code was clean enough for our team to keep extending.",
    name: "James Carter",
    role: "CEO, TechVision",
    initials: "JC",
    tag: "Shopify",
  },
  {
    quote:
      "The chatbot he built handles most of our support now. It actually knows our catalog — customers get real answers instead of canned replies.",
    name: "Sara Ahmed",
    role: "Founder, Lumière",
    initials: "SA",
    tag: "AI Chatbot",
  },
  {
    quote:
      "Our order process used to eat a full day every week. Tayyab automated the whole pipeline and it has run without a hiccup since.",
    name: "Daniel Weiss",
    role: "Ops Lead, NorthGoods",
    initials: "DW",
    tag: "Automation",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-brand" fill="currentColor">
          <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ hideHeading = false }) {
  return (
    <section id="testimonials" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-12">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
            What Clients Say <span className="grad-text">About Me.</span>
          </h2>
        </Reveal>
      )}

      <div className="grid md:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.1}>
            <motion.figure
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-full flex flex-col rounded-[20px] border p-7 bg-gradient-to-br from-surface-2 to-surface hover:border-brand/40 transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="pointer-events-none absolute top-4 right-6 font-display text-[3.5rem] leading-none text-brand/15">
                &ldquo;
              </span>

              <Stars />
              <blockquote className="relative text-[0.95rem] text-dim mb-6">{r.quote}</blockquote>

              <figcaption className="mt-auto flex items-center gap-3.5 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-grad font-display text-[0.85rem] font-bold text-bg">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <strong className="block text-[0.92rem] truncate">{r.name}</strong>
                  <span className="text-mute text-[0.8rem] truncate">{r.role}</span>
                </div>
                <span className="ml-auto shrink-0 rounded-full border px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-wider text-brand"
                      style={{ borderColor: "var(--border-2)" }}>
                  {r.tag}
                </span>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
