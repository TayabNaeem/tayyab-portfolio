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
    // Plain element, not motion: a keyed motion node left the outgoing copy
    // behind in the DOM. The entrance replays via CSS on remount instead.
    <div className="slide-in min-w-0">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-display text-[0.8rem] font-bold tracking-[0.2em] text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8" style={{ background: "var(--border-2)" }} />
        <span className="small">{String(total).padStart(2, "0")}</span>
      </div>

      <span className="small mb-3 block uppercase tracking-[0.16em] text-brand">{p.tag}</span>

      <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.9rem)] font-bold leading-[1.06] tracking-[-0.03em]">
        {p.name}
      </h3>

      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="small mt-2.5 inline-block transition-colors hover:text-brand-light"
      >
        {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
      </a>

      {p.desc && <p className="body mt-5 max-w-[440px]">{p.desc}</p>}

      {p.tags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
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

      <div className="mt-8 flex flex-wrap gap-3">
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
    <div className="flex shrink-0 flex-row gap-2.5 lg:flex-col">
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
            <span
              className={`w-1.5 rounded-full transition-all duration-300 ${
                on ? "h-7 bg-grad" : "h-1.5 bg-white/25 group-hover:bg-white/50"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

/* ---------- section ---------- */

function Heading() {
  return (
    <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
      <span className="eyebrow">SELECTED WORK</span>
      <h2 className="h2">
        Stores I&apos;ve <span className="grad-text">built.</span>
      </h2>
      <p className="lead mt-4">
        Live Shopify storefronts, running real traffic and real orders. Take a look at any of
        them side by side on desktop and mobile.
      </p>
    </Reveal>
  );
}

export default function WorkShowcase({ limit = 8 }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const remaining = PROJECTS.length - items.length;

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  // The track is N screens tall; how far through it we are picks the project.
  // Driven by the scroll event rather than rAF, so it stays in step even when
  // the tab is throttled.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const span = el.offsetHeight - window.innerHeight;
      if (span <= 0) return;
      const progress = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span));
      setActive(Math.min(items.length - 1, Math.floor(progress * items.length)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  // Show the picked project straight away, then bring the scroll position in
  // line with it. The scroll handler re-derives the index once it settles.
  const jumpTo = (i) => {
    setActive(i);
    const el = trackRef.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: el.offsetTop + span * ((i + 0.5) / items.length),
      behavior: "smooth",
    });
  };

  const current = items[active];

  return (
    <section id="portfolio">
      {/* ---------- desktop: pinned, scroll drives the project ---------- */}
      <div
        ref={trackRef}
        className="relative hidden lg:block"
        style={{ height: `${items.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden py-24">
          <div className="shell w-full">
            <Heading />

            <div className="flex items-center gap-8 xl:gap-10">
              <Dots items={items} active={active} onPick={jumpTo} />

              <div className="grid min-w-0 flex-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-14">
                {/* Distinct key prefixes: sibling keys must not collide, or
                    React cannot tell the two apart and leaves stale nodes. */}
                <Details
                  key={`copy-${current.id}`}
                  p={current}
                  index={active}
                  total={PROJECTS.length}
                />

                <div key={`device-${current.id}`} className="slide-in-soft min-w-0 pr-[3%]">
                  <DeviceMockup project={current} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- mobile: plain stacked list, no scroll hijack ---------- */}
      <div className="shell py-24 lg:hidden">
        <Heading />

        <div className="space-y-16">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.06}>
              <div>
                <div className="pr-[3%]">
                  <DeviceMockup project={p} />
                </div>
                <div className="mt-12">
                  <span className="small mb-2 block uppercase tracking-[0.16em] text-brand">
                    {p.tag}
                  </span>
                  <h3 className="h3 mb-1.5">{p.name}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small inline-flex items-center gap-1 transition-colors hover:text-brand-light"
                  >
                    {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    <ArrowUpRight size={13} strokeWidth={2.2} />
                  </a>
                  {p.desc && <p className="body mt-4">{p.desc}</p>}
                  {p.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ---------- after the pin releases ---------- */}
      {remaining > 0 && (
        <div className="shell pb-24">
          <Reveal>
            <div className="flex justify-center">
              <Link href="/work" className="btn btn-primary">
                View more work
                <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-[0.75rem]">
                  +{remaining}
                </span>
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
