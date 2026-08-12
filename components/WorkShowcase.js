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

function Dots({ items, pos, onPick }) {
  return (
    <div className="flex shrink-0 flex-row justify-center gap-2.5 lg:flex-col lg:justify-start">
      {items.map((p, i) => {
        // nearness drives the size, so the rail moves with the scroll rather
        // than snapping between states
        const near = Math.max(0, 1 - Math.abs(pos - i));
        const on = Math.round(pos) === i;
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
              className="rounded-full lg:hidden"
              style={{
                width: `${6 + near * 22}px`,
                height: "6px",
                background:
                  near > 0.05 ? "linear-gradient(115deg,#a855f7,#6d28d9)" : "rgba(255,255,255,0.25)",
              }}
            />
            {/* vertical rail from lg up */}
            <span
              className="hidden rounded-full lg:block"
              style={{
                width: "6px",
                height: `${6 + near * 22}px`,
                background:
                  near > 0.05 ? "linear-gradient(115deg,#a855f7,#6d28d9)" : "rgba(255,255,255,0.25)",
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
  // Fractional position through the list, so slides cross-fade rather than snap
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const span = el.offsetHeight - window.innerHeight;
      if (span <= 0) return;
      const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span));
      setPos(progress * last);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [last]);

  const jumpTo = (i) => {
    setPos(i);
    const el = trackRef.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + span * (i / last), behavior: "smooth" });
  };

  const activeIndex = Math.round(pos);

  return (
    <section id="portfolio">
      {/* Heading sits above the pinned area so the pin never has to clip it */}
      <div className="shell pt-[4.5rem] md:pt-[5.5rem]">
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
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="shell w-full">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
              <div className="order-2 lg:order-1">
                <Dots items={items} pos={pos} onPick={jumpTo} />
              </div>

              {/* every slide occupies the same cell and cross-fades by distance */}
              <div className="order-1 grid min-w-0 flex-1 lg:order-2">
                {items.map((p, i) => {
                  const t = pos - i;
                  const away = Math.abs(t);
                  if (away > 1) return null;

                  // Hold each slide still and solid for most of its segment,
                  // then cross-fade quickly. A long overlap made two slides
                  // readable at once at different offsets, which looked like
                  // the section was juddering.
                  const HOLD = 0.7;
                  const fade = away <= HOLD ? 0 : (away - HOLD) / (1 - HOLD);
                  const dir = t === 0 ? 0 : Math.sign(t);

                  return (
                    <div
                      key={p.id}
                      aria-hidden={i !== activeIndex}
                      style={{
                        gridArea: "1 / 1",
                        opacity: 1 - fade,
                        transform: `translateY(${-dir * fade * 16}px) scale(${1 - fade * 0.02})`,
                        pointerEvents: fade === 0 ? "auto" : "none",
                        willChange: "opacity, transform",
                      }}
                      className="grid min-w-0 items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
                    >
                      <Details p={p} index={i} total={items.length} />

                      <div className="order-first min-w-0 pr-[3%] lg:order-none">
                        <DeviceMockup project={p} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {remaining > 0 && (
        <div className="shell pb-[4.5rem] md:pb-[5.5rem]">
          <Reveal>
            <div className="flex justify-center">
              <Link href="/work" className="btn btn-primary">
                View more work <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
