"use client";

import { useEffect, useState } from "react";
import { Quote, Star, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * PLACEHOLDER CONTENT — the project names and scope are real, the people and
 * their words are not. Replace every quote with something the client actually
 * said before this site goes live; published invented testimonials attributed
 * to named people on named stores are misleading.
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

function Stars({ size = 15 }) {
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

  // Auto advance. Timers keep running while the tab is throttled, unlike rAF.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % REVIEWS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const current = REVIEWS[active];

  return (
    <section
      id="testimonials"
      className={`shell ${hideHeading ? "pb-[4.5rem] md:pb-[5.5rem]" : "section-y"}`}
    >
      {!hideHeading && (
        <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2 className="h2">
            The people behind <span className="grad-text">the stores.</span>
          </h2>
          <p className="lead mt-4">
            Every quote below comes from a storefront that is live right now. Click the name to
            go and look at it.
          </p>
        </Reveal>
      )}

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mx-auto max-w-[1000px]"
      >
        {/* quote */}
        <div className="relative min-h-[340px] sm:min-h-[300px]">
          <Quote
            aria-hidden
            size={120}
            strokeWidth={1}
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-brand/[0.07]"
          />

          <div key={current.project} className="slide-in relative text-center">
            <div className="mb-7 flex justify-center">
              <Stars size={17} />
            </div>

            <blockquote className="mx-auto max-w-[880px] font-display text-[clamp(1.3rem,2.7vw,2.05rem)] font-medium leading-[1.38] tracking-[-0.025em] text-white">
              {current.quote}
            </blockquote>

            <div className="mt-9 flex flex-col items-center gap-3">
              <span
                className="grid h-14 w-14 place-items-center rounded-full bg-grad font-display text-[1rem] font-bold text-bg"
                aria-hidden
              >
                {current.initials}
              </span>
              <div>
                <strong className="block font-display text-[1.05rem] font-semibold">
                  {current.name}
                </strong>
                <span className="small">
                  {current.role} ·{" "}
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-brand transition-colors hover:text-brand-light"
                  >
                    {current.project}
                    <ArrowUpRight size={13} strokeWidth={2.2} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* project rail — doubles as the progress indicator */}
        <div
          className="mt-12 grid gap-x-2 gap-y-3 border-t pt-5 sm:grid-cols-3 lg:grid-cols-6"
          style={{ borderColor: "var(--border)" }}
        >
          {REVIEWS.map((r, i) => {
            const on = i === active;
            return (
              <button
                key={r.project}
                type="button"
                onClick={() => setActive(i)}
                aria-current={on}
                className="group relative pt-4 text-left"
              >
                {/* rail */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 top-0 h-[2px] overflow-hidden rounded-full"
                  style={{ background: "rgba(255,255,255,0.09)" }}
                >
                  <span
                    key={on ? `fill-${active}-${paused}` : "idle"}
                    className="block h-full rounded-full"
                    style={{
                      background: "linear-gradient(115deg,#a855f7,#6d28d9)",
                      width: on ? "100%" : "0%",
                      transformOrigin: "left",
                      animation: on ? `rail ${ROTATE_MS}ms linear both` : "none",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </span>

                <span
                  className={`block truncate font-display text-[0.9rem] font-semibold transition-colors ${
                    on ? "text-white" : "text-dim group-hover:text-white"
                  }`}
                >
                  {r.project}
                </span>
                <span className="small block truncate">{r.tag}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
