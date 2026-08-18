"use client";

import { useEffect, useState } from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * PLACEHOLDER CONTENT — the stores and the scope of work are real, the people
 * and their words are not. Replace every quote with something the client
 * actually said before this site goes live; published invented testimonials
 * attributed to named people on named stores are misleading.
 */
const REVIEWS = [
  {
    project: "SoundSkins Global",
    url: "https://soundskinsglobal.com",
    quote:
      "Our catalogue is a nightmare, kits matched to specific vehicles, and Tayyab made it feel simple. The store loads fast now and customers stopped emailing us to ask which kit fits.",
    name: "Marcus Vogel",
    role: "Founder",
    initials: "MV",
    tag: "Shopify",
  },
  {
    project: "Elite Auto Gear",
    url: "https://eliteautogear.com/",
    quote:
      "He rebuilt the theme around how people actually shop for car audio. Amps, subs, accessories, all one flow. Our add to cart rate moved in the first fortnight and stayed there.",
    name: "Andre Whitfield",
    role: "Ecommerce Manager",
    initials: "AW",
    tag: "Shopify",
  },
  {
    project: "Curated Chrome",
    url: "https://curatedchrome.com/",
    quote:
      "The product pages finally look worth the price of the jewellery. Custom Liquid where we needed it, nothing bloated, and I can edit the whole thing myself without breaking it.",
    name: "Nadia Fontaine",
    role: "Creative Director",
    initials: "NF",
    tag: "Shopify",
  },
  {
    project: "Heart4Kicks",
    url: "https://heart4kicks.com/",
    quote:
      "We needed a booking flow sitting next to a normal shop and every developer told us it would be messy. Tayyab shipped it in a week and it has not needed touching since.",
    name: "Trey Alderman",
    role: "Founder",
    initials: "TA",
    tag: "Custom build",
  },
  {
    project: "Chicago Fragrance",
    url: "https://chicagofragrance.com/",
    quote:
      "Search was the whole business for us, people hunting discontinued scents. He got it working properly and tied the apps together so stock matches both physical stores.",
    name: "Elliot Reyes",
    role: "Store Owner",
    initials: "ER",
    tag: "Shopify",
  },
  {
    project: "Cybex",
    url: "https://cybex.shopping/",
    quote:
      "Clean brief, clean delivery, no chasing. The site looks like the brand we wanted to be rather than the one we could afford, and it is quick on a phone, which was the point.",
    name: "Hana Sorensen",
    role: "Brand Lead",
    initials: "HS",
    tag: "Shopify",
  },
];

const ROTATE_MS = 6500;

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
  const [paused, setPaused] = useState(false);
  const current = REVIEWS[active];

  // Auto advance. Timers keep running while the tab is throttled, unlike rAF.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="testimonials"
      className={`shell ${hideHeading ? "pb-[4.5rem] md:pb-[5.5rem]" : "section-y"}`}
    >
      {!hideHeading && (
        <Reveal className="mb-12 max-w-[620px]">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2 className="h2">
            What clients <span className="grad-text">say.</span>
          </h2>
        </Reveal>
      )}

      {/* pointing anywhere in here holds the current quote */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:gap-8"
      >
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

            {/* keyed, so each quote fades in as it comes round */}
            <div key={current.project} className="slide-in relative flex flex-1 flex-col">
              <blockquote className="mb-8 font-display text-[clamp(1.25rem,2.3vw,1.75rem)] font-medium leading-[1.4] tracking-[-0.02em]">
                {current.quote}
              </blockquote>

              <figcaption
                className="mt-auto flex items-center gap-4 border-t pt-6"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-grad font-display text-[1rem] font-bold text-bg">
                  {current.initials}
                </div>
                <div className="min-w-0">
                  <strong className="block truncate font-display text-[1rem] font-semibold">
                    {current.name}
                  </strong>
                  <span className="small block truncate">
                    {current.role} ·{" "}
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-brand transition-colors hover:text-brand-light"
                    >
                      {current.project}
                      <ArrowUpRight size={12} strokeWidth={2.2} />
                    </a>
                  </span>
                </div>
                <div className="ml-auto hidden sm:block">
                  <Stars size={16} />
                </div>
              </figcaption>
            </div>
          </figure>
        </Reveal>

        {/* selector list — the active row fills across as its quote runs */}
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col gap-2.5">
            {REVIEWS.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative flex flex-1 items-center gap-3.5 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive ? "bg-surface-2" : "bg-surface hover:bg-surface-2"
                  }`}
                  style={{ borderColor: isActive ? "rgba(168,85,247,0.55)" : "var(--border)" }}
                >
                  {/* countdown rail, keyed so it restarts on every change */}
                  <span
                    key={isActive ? `rail-${active}` : "idle"}
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
                    style={{
                      background: "linear-gradient(115deg,#a855f7,#6d28d9)",
                      transform: isActive ? undefined : "scaleX(0)",
                      animation: isActive ? `rail ${ROTATE_MS}ms linear both` : "none",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />

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
                    <span className="small block truncate">{r.project}</span>
                  </div>
                  <span
                    className="hidden shrink-0 rounded-full border px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-wider text-brand sm:block"
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
