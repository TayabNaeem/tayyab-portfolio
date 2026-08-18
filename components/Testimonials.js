"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/projects";

/**
 * DRAFT QUOTES — every store below is real work, and three of the people are
 * real clients Tayyab named. The words are not theirs: they are drafts written
 * to fill the layout. Replace each `quote` with what the client actually said,
 * and only keep a `person` where that client has agreed to be quoted. Putting
 * invented words in a named client's mouth is a real problem, not a styling
 * detail.
 *
 * Keyed by project id, so the store name and URL stay in lib/projects.js.
 */
const QUOTES = {
  soundskins: {
    quote:
      "Our catalogue is a nightmare, kits matched to specific vehicles, and Tayyab made it feel simple. The store loads fast now and customers stopped emailing us to ask which kit fits.",
  },
  elite: {
    quote:
      "He rebuilt the theme around how people actually shop for car audio. Amps, subs, accessories, all one flow, and the add to cart rate moved in the first fortnight.",
  },
  gohaus: {
    quote:
      "Clean build, delivered when he said it would be. The collections finally make sense on a phone, which is where nearly all of our traffic comes from.",
  },
  curatedchrome: {
    quote:
      "The product pages finally look worth the price of the jewellery. Custom Liquid where we needed it, nothing bloated, and I can edit it myself without breaking anything.",
  },
  chicagofragrance: {
    person: "Syed",
    role: "Owner",
    quote:
      "Search was the whole business for us, people hunting discontinued scents. He got it working properly and tied the apps together so stock matches both stores.",
  },
  kiaura: {
    quote:
      "We run promotions constantly and the old theme fought us every time. Now a sale goes live in minutes without anyone touching code.",
  },
  aug11: {
    quote:
      "Drops used to be the day everything broke. Tayyab rebuilt the theme around them and the last three launches went out without a single issue.",
  },
  coastal1776: {
    quote:
      "The lookbook is what sells resort wear and he understood that straight away. The site looks like the brand rather than a template with our logo on it.",
  },
  heart4kicks: {
    person: "Milysa Machette Miller",
    role: "Owner",
    quote:
      "We needed a booking flow sitting next to a normal shop and every developer told us it would be messy. Tayyab shipped it in a week and it has not needed touching since.",
  },
  lalascloset: {
    quote:
      "Womens, mens and kids under one roof was the hard part. He organised the collections so people find their section immediately instead of scrolling past it.",
  },
  usa250: {
    quote:
      "A seasonal launch with a hard date and no room to slip. He built it, tested it and had us live ahead of schedule.",
  },
  gmills: {
    quote:
      "Ours is not a normal checkout, every headstone is a consultation. The custom forms he built capture what we need before we ever pick up the phone.",
  },
  cybex: {
    person: "Shahmir Khan",
    role: "Owner",
    quote:
      "Clean brief, clean delivery, no chasing. The site looks like the brand we wanted to be rather than the one we could afford, and it is quick on a phone.",
  },
  rela: {
    quote:
      "He had the store set up and the coming soon page live while we were still finalising the products. Ready to open the moment we are.",
  },
};

const initialsOf = (s) =>
  s
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

/** Every store, in the order they appear in the work list. */
const REVIEWS = PROJECTS.map((p) => {
  const q = QUOTES[p.id] || {};
  return {
    id: p.id,
    project: p.name,
    url: p.url,
    quote: q.quote,
    // only real, named clients get a person; the rest are credited to the store
    person: q.person || null,
    role: q.role || "Store owner",
    initials: initialsOf(q.person || p.name),
  };
}).filter((r) => r.quote);

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
  const listRef = useRef(null);
  const current = REVIEWS[active];

  // Auto advance. Timers keep running while the tab is throttled, unlike rAF.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Keep the active row in view without scrolling the page with it.
  useEffect(() => {
    const list = listRef.current;
    const row = list?.children[active];
    if (!list || !row) return;
    const top = row.offsetTop - list.offsetTop;
    const bottom = top + row.offsetHeight;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (bottom > list.scrollTop + list.clientHeight)
      list.scrollTop = bottom - list.clientHeight;
  }, [active]);

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
            <div key={current.id} className="slide-in relative flex flex-1 flex-col">
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
                    {current.person || current.project}
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

        {/* selector list — scrolls internally, every store is in here */}
        <Reveal delay={0.08}>
          <div
            ref={listRef}
            className="flex max-h-[420px] flex-col gap-2.5 overflow-y-auto pr-1 lg:max-h-[560px]"
          >
            {REVIEWS.map((r, i) => {
              const isActive = i === active;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex shrink-0 items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive ? "bg-surface-2" : "bg-surface hover:bg-surface-2"
                  }`}
                  style={{ borderColor: isActive ? "rgba(168,85,247,0.55)" : "var(--border)" }}
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
                      {r.person || r.project}
                    </strong>
                    <span className="small block truncate">
                      {r.person ? r.project : r.role}
                    </span>
                  </div>
                  <span
                    className="hidden shrink-0 rounded-full border px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-wider text-brand sm:block"
                    style={{ borderColor: "var(--border-2)" }}
                  >
                    Shopify
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
