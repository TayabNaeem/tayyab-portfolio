"use client";

import { useState } from "react";
import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";

/**
 * PLACEHOLDER CONTENT — replace with real client quotes before this goes live.
 * Publishing invented testimonials attributed to named people is misleading.
 */
const REVIEWS = [
  {
    quote:
      "Tayyab rebuilt our storefront and it finally feels fast. Conversions jumped in the first month and the code was clean enough for our team to keep extending without calling him back.",
    name: "James Carter",
    role: "CEO, TechVision",
    initials: "JC",
    tag: "Shopify",
  },
  {
    quote:
      "The chatbot he built handles most of our support now. It actually knows our catalog, so customers get real answers instead of canned replies.",
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

function Stars({ size = 14 }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} strokeWidth={0} fill="currentColor" className="text-brand" />
      ))}
    </div>
  );
}

export default function Testimonials({ hideHeading = false }) {
  const [active, setActive] = useState(0);
  const current = REVIEWS[active];

  return (
    <section id="testimonials" className={`shell ${hideHeading ? "pb-[4.5rem] md:pb-[5.5rem]" : "section-y"}`}>
      {!hideHeading && (
        <Reveal className="mb-12 max-w-[620px]">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2 className="h2">
            What clients <span className="grad-text">say.</span>
          </h2>
        </Reveal>
      )}

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
        {/* featured quote */}
        <Reveal>
          <figure
            className="relative flex h-full flex-col overflow-hidden rounded-[26px] border p-8 sm:p-11"
            style={{
              borderColor: "var(--border-2)",
              background: "linear-gradient(160deg, rgba(168,85,247,0.10), #151517 60%)",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
                filter: "blur(34px)",
              }}
            />

            <Quote size={44} strokeWidth={1.4} className="relative mb-6 text-brand/50" />

            <blockquote className="relative mb-8 font-display text-[clamp(1.25rem,2.3vw,1.75rem)] font-medium leading-[1.4] tracking-[-0.02em]">
              {current.quote}
            </blockquote>

            <figcaption
              className="relative mt-auto flex items-center gap-4 border-t pt-6"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-grad font-display text-[1rem] font-bold text-bg">
                {current.initials}
              </div>
              <div className="min-w-0">
                <strong className="block truncate font-display text-[1rem] font-semibold">
                  {current.name}
                </strong>
                <span className="small block truncate">{current.role}</span>
              </div>
              <div className="ml-auto hidden sm:block">
                <Stars size={16} />
              </div>
            </figcaption>
          </figure>
        </Reveal>

        {/* selector list */}
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col gap-3">
            {REVIEWS.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex flex-1 items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive ? "bg-surface-2" : "bg-surface hover:bg-surface-2"
                  }`}
                  style={{
                    borderColor: isActive ? "rgba(168,85,247,0.55)" : "var(--border)",
                  }}
                >
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-[0.85rem] font-bold transition-colors ${
                      isActive ? "bg-grad text-bg" : "bg-surface-3 text-dim"
                    }`}
                  >
                    {r.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <strong
                      className={`block truncate font-display text-[0.95rem] font-semibold transition-colors ${
                        isActive ? "text-white" : "text-dim group-hover:text-white"
                      }`}
                    >
                      {r.name}
                    </strong>
                    <span className="small block truncate">{r.role}</span>
                  </div>
                  <span
                    className="shrink-0 rounded-full border px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-wider text-brand"
                    style={{ borderColor: "var(--border-2)" }}
                  >
                    {r.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
