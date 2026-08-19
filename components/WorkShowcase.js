"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import DeviceMockup from "./DeviceMockup";
import { PROJECTS } from "@/lib/projects";

/* ---------- one project's copy ---------- */

function Details({ p, index, total }) {
  return (
    <div className="min-w-0">
      <div className="mb-3 flex items-center gap-3 lg:mb-5">
        <span className="font-display text-[0.8rem] font-bold tracking-[0.2em] text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8" style={{ background: "var(--border-2)" }} />
        <span className="small">{String(total).padStart(2, "0")}</span>
      </div>

      <span className="small mb-2 block uppercase tracking-[0.16em] text-brand lg:mb-3">
        {p.tag}
      </span>

      <h3 className="font-display text-[clamp(1.75rem,3.4vw,2.9rem)] font-bold leading-[1.06] tracking-[-0.03em]">
        {p.name}
      </h3>

      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="small mt-2 inline-block transition-colors hover:text-brand-light"
      >
        {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
      </a>

      {/* dropped on short viewports so the pinned slide never clips */}
      {p.desc && (
        <p className="body mt-3 line-clamp-2 max-w-[440px] sm:line-clamp-none lg:mt-5 [@media(max-height:720px)]:hidden">
          {p.desc}
        </p>
      )}

      {p.tags?.length > 0 && (
        <div className="mt-4 hidden flex-wrap gap-2 sm:flex lg:mt-5 [@media(max-height:720px)]:!hidden">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg border bg-surface-2 px-2.5 py-1 text-[0.75rem] text-dim"
              style={{ borderColor: "var(--border)" }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit store <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>
        <Link href="/work" className="btn btn-ghost">
          All work
        </Link>
      </div>
    </div>
  );
}

/* ---------- progress dots ---------- */

function Dots({ items, active, onPick }) {
  return (
    <div className="flex shrink-0 flex-row justify-center gap-2.5 lg:flex-col lg:justify-start">
      {items.map((p, i) => {
        const on = i === active;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => onPick(i)}
            aria-label={p.name}
            aria-current={on}
            title={p.name}
            className="group relative grid place-items-center p-1"
          >
            {/* horizontal rail on small screens */}
            <span
              className="rounded-full transition-all duration-300 lg:hidden"
              style={{
                width: on ? "28px" : "6px",
                height: "6px",
                background: on ? "linear-gradient(115deg,#a855f7,#6d28d9)" : "rgba(255,255,255,0.25)",
              }}
            />
            {/* vertical rail from lg up */}
            <span
              className="hidden rounded-full transition-all duration-300 lg:block"
              style={{
                width: "6px",
                height: on ? "28px" : "6px",
                background: on ? "linear-gradient(115deg,#a855f7,#6d28d9)" : "rgba(255,255,255,0.25)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

/* ---------- section ---------- */

export default function WorkShowcase({ limit = 8 }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const remaining = PROJECTS.length - items.length;
  const last = items.length - 1;

  const trackRef = useRef(null);
  // One project at a time. Scrolling steps the index, and the new slide plays
  // its entrance animation because the key changes.
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      // the pinned box is shorter than the viewport, so the travel is measured
      // against the box rather than against window.innerHeight
      const pinned = el.firstElementChild?.offsetHeight || window.innerHeight;
      const span = el.offsetHeight - pinned;
      if (span <= 0) return;
      const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span));
      setActive(Math.min(last, Math.floor(progress * items.length)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [last, items.length]);

  const jumpTo = (i) => {
    setActive(i);
    const el = trackRef.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight;
    // land in the middle of that project's segment
    window.scrollTo({
      top: el.offsetTop + span * ((i + 0.5) / items.length),
      behavior: "smooth",
    });
  };

  const current = items[active];

  return (
    <section id="portfolio">
      {/* Heading sits above the pinned area so the pin never has to clip it */}
      <div className="shell pt-[3.5rem] md:pt-[4.25rem]">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <span className="eyebrow">SELECTED WORK</span>
          <h2 className="h2">
            Stores I&apos;ve <span className="grad-text">built.</span>
          </h2>
          <p className="lead mt-4">
            Live Shopify storefronts, running real traffic and real orders.
          </p>
        </Reveal>
      </div>

      {/* Pinned at every breakpoint: scrolling moves through the work */}
      <div ref={trackRef} className="relative" style={{ height: `${items.length * 100}vh` }}>
        {/* The button lives inside the pin, directly under the slide, so it
            holds one position while the projects step past it. Left outside,
            it only appeared once the track ran out, with the whole unused half
            of the viewport sitting above it. */}
        <div className="sticky top-0 flex h-screen overflow-hidden">
          {/* justify-evenly splits the leftover height into three equal parts:
              above the slide, between slide and button, and below the button.
              Centring instead piled it all above and below, leaving a wide gap
              under the heading and a cramped one over the button. */}
          <div className="shell flex h-full w-full flex-col justify-evenly">
            {/* Fixed height, because projects carry different amounts of copy
                and tags. Left to size itself the row swings by ~70px, and the
                button under it moves every time the slide changes. */}
            <div className="flex min-h-[34rem] flex-col justify-center gap-7 sm:min-h-[36rem] lg:min-h-[27.5rem] lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
              <div className="order-2 lg:order-1">
                <Dots items={items} active={active} onPick={jumpTo} />
              </div>

              {/* only the current project is mounted; the keys replay its entrance */}
              <div className="order-1 grid min-w-0 flex-1 items-center gap-7 lg:order-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                <div key={`copy-${current.id}`} className="slide-in min-w-0">
                  <Details p={current} index={active} total={items.length} />
                </div>

                <div
                  key={`device-${current.id}`}
                  className="slide-in-soft order-first min-w-0 pr-[3%] lg:order-none"
                >
                  <DeviceMockup project={current} />
                </div>
              </div>
            </div>

            {remaining > 0 && (
              <div className="flex shrink-0 justify-center">
                <Link href="/work" className="btn btn-primary">
                  View more work <ArrowUpRight size={15} strokeWidth={2.2} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
