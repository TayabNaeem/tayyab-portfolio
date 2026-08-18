"use client";

import { useEffect, useState } from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/projects";

/**
 * DRAFT QUOTES — every store is real work. Syed, Milysa Machette Miller and
 * Shahmir Khan are real clients Tayyab named; the other eleven people are
 * stand-ins, and none of the words below were said by anyone. Replace each
 * quote with what the client actually said, and each stand-in with the real
 * person, before this is put in front of anyone.
 *
 * Keyed by project id so store names and URLs stay in lib/projects.js.
 */
const QUOTES = {
  soundskins: {
    person: "Marcus Vogel",
    role: "Founder",
    quote:
      "Our catalogue is a nightmare, kits matched to specific vehicles, and Tayyab made it feel simple. The store loads fast now and customers stopped emailing us to ask which kit fits.",
  },
  elite: {
    person: "Andre Whitfield",
    role: "Ecommerce Manager",
    quote:
      "He rebuilt the theme around how people actually shop for car audio. Amps, subs, accessories, all one flow, and the add to cart rate moved in the first fortnight.",
  },
  gohaus: {
    person: "Dominic Hale",
    role: "Brand Director",
    quote:
      "Clean build, delivered when he said it would be. The collections finally make sense on a phone, which is where nearly all of our traffic comes from.",
  },
  curatedchrome: {
    person: "Nadia Fontaine",
    role: "Creative Director",
    quote:
      "The product pages finally look worth the price of the jewellery. Custom Liquid where we needed it, nothing bloated, and I can edit it myself without breaking anything.",
  },
  chicagofragrance: {
    person: "Syed",
    role: "Owner",
    real: true,
    quote:
      "Search was the whole business for us, people hunting discontinued scents. He got it working properly and tied the apps together so stock matches both stores.",
  },
  kiaura: {
    person: "Amara Lindqvist",
    role: "Founder",
    quote:
      "We run promotions constantly and the old theme fought us every time. Now a sale goes live in minutes without anyone touching code.",
  },
  aug11: {
    person: "Jesse Okafor",
    role: "Founder",
    quote:
      "Drops used to be the day everything broke. Tayyab rebuilt the theme around them and the last three launches went out without a single issue.",
  },
  coastal1776: {
    person: "Bianca Moreau",
    role: "Creative Lead",
    quote:
      "The lookbook is what sells resort wear and he understood that straight away. The site looks like the brand rather than a template with our logo on it.",
  },
  heart4kicks: {
    person: "Milysa Machette Miller",
    role: "Owner",
    real: true,
    quote:
      "We needed a booking flow sitting next to a normal shop and every developer told us it would be messy. Tayyab shipped it in a week and it has not needed touching since.",
  },
  lalascloset: {
    person: "Rosa Delgado",
    role: "Owner",
    quote:
      "Womens, mens and kids under one roof was the hard part. He organised the collections so people find their section immediately instead of scrolling past it.",
  },
  usa250: {
    person: "Grant Whitmore",
    role: "Project Lead",
    quote:
      "A seasonal launch with a hard date and no room to slip. He built it, tested it and had us live ahead of schedule.",
  },
  gmills: {
    person: "Terrence Gill",
    role: "Operations",
    quote:
      "Ours is not a normal checkout, every headstone is a consultation. The custom forms he built capture what we need before we ever pick up the phone.",
  },
  cybex: {
    person: "Shahmir Khan",
    role: "Owner",
    real: true,
    quote:
      "Clean brief, clean delivery, no chasing. The site looks like the brand we wanted to be rather than the one we could afford, and it is quick on a phone.",
  },
  rela: {
    person: "Priya Raman",
    role: "Co-founder",
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
    person: q.person,
    role: q.role,
    initials: initialsOf(q.person || p.name),
  };
}).filter((r) => r.quote);

const ROTATE_MS = 6500;
const SHIFT_MS = 620;

/* Window of the list that is on screen. The rest sit below the clip. */
const VISIBLE = 5;
const ROW_H = 76;
const ROW_GAP = 10;
const STEP = ROW_H + ROW_GAP;
const WINDOW_H = VISIBLE * ROW_H + (VISIBLE - 1) * ROW_GAP;

/* The first screenful is repeated at the end, so the wrap from the last review
   back to the first can be a silent jump between two identical frames. */
const TRACK = [...REVIEWS, ...REVIEWS.slice(0, VISIBLE)];

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
  // How far down the track the window has walked. Runs 0..REVIEWS.length,
  // then snaps back to 0 without a transition.
  const [offset, setOffset] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const active = offset % REVIEWS.length;
  const current = REVIEWS[active];

  // Auto advance. Timers keep running while the tab is throttled, unlike rAF.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setOffset((o) => o + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Once the track has walked a full lap it is showing the repeated copy of
  // the opening rows, so cutting back to the top is invisible.
  useEffect(() => {
    if (offset !== REVIEWS.length) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setOffset(0);
    }, SHIFT_MS);
    return () => clearTimeout(id);
  }, [offset]);

  // Restore the transition on the frame after the silent jump.
  useEffect(() => {
    if (animate) return;
    const id = setTimeout(() => setAnimate(true), 60);
    return () => clearTimeout(id);
  }, [animate]);

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
            className="relative flex h-full flex-col overflow-hidden rounded-[26px] border p-7 sm:p-9"
            style={{
              minHeight: WINDOW_H,
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
              <blockquote className="mb-7 font-display text-[clamp(1.18rem,2vw,1.55rem)] font-medium leading-[1.42] tracking-[-0.02em]">
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
                    {current.person}
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

        {/* six on show, the rest waiting below the clip */}
        <Reveal delay={0.08}>
          <div className="overflow-hidden" style={{ height: WINDOW_H }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ROW_GAP,
                transform: `translateY(-${offset * STEP}px)`,
                transition: animate
                  ? `transform ${SHIFT_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
                  : "none",
                willChange: "transform",
              }}
            >
              {TRACK.map((r, i) => {
                const isActive = i === offset;
                return (
                  <button
                    key={`${r.id}-${i}`}
                    type="button"
                    onClick={() => setOffset(i % REVIEWS.length)}
                    aria-pressed={isActive}
                    aria-hidden={i >= REVIEWS.length}
                    tabIndex={i >= REVIEWS.length ? -1 : 0}
                    className={`group flex shrink-0 items-center gap-3.5 rounded-2xl border px-4 text-left transition-colors duration-300 ${
                      isActive ? "bg-surface-2" : "bg-surface hover:bg-surface-2"
                    }`}
                    style={{
                      height: ROW_H,
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
                        {r.person}
                      </strong>
                      <span className="small block truncate">{r.project}</span>
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
