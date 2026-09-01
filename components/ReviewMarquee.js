"use client";

import { Star, ArrowUpRight } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

/**
 * Two rows of review cards travelling in opposite directions, full bleed.
 *
 * Each track holds its list twice, so translating by exactly -50% lands on an
 * identical frame and the loop has no seam. Direction is flipped with
 * animation-direction rather than a second keyframe.
 *
 * Both rows use the same card; the opposing directions and the differing
 * speeds are what separate the two bands.
 */

const HALF = Math.ceil(REVIEWS.length / 2);
const TOP = REVIEWS.slice(0, HALF);
const BOTTOM = REVIEWS.slice(HALF);

function Stars({ size = 13 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} strokeWidth={0} fill="currentColor" className="text-brand" />
      ))}
    </div>
  );
}

/** The card: attribution first, project link, then the quote. */
function ReviewCard({ r }) {
  return (
    <figure
      className="mr-5 flex w-[21rem] shrink-0 gap-4 rounded-[22px] border border-l-2 bg-surface p-5 sm:w-[25rem]"
      style={{ borderColor: "var(--border)", borderLeftColor: "#a855f7" }}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center self-start rounded-xl bg-surface-3 font-display text-[0.8rem] font-bold text-brand">
        {r.initials}
      </span>

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <strong className="truncate font-display text-[0.92rem] font-semibold">
            {r.person}
          </strong>
          <Stars size={12} />
        </div>

        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="small mb-2.5 inline-flex items-center gap-0.5 text-brand transition-colors hover:text-brand-light"
        >
          {r.project}
          <ArrowUpRight size={11} strokeWidth={2.2} />
        </a>

        <p className="line-clamp-3 text-[0.9rem] leading-[1.6] text-[#b9b9c0]">{r.quote}</p>
      </div>
    </figure>
  );
}

function Row({ items, direction, seconds }) {
  // Listed twice so -50% lands on an identical frame. The spacing is a right
  // margin on each card rather than a flex gap: with gap, half a gap falls
  // between the two halves and the loop jumps by that much every lap.
  const track = [...items, ...items];

  return (
    <div className="marquee-row relative overflow-hidden">
      <div
        className="marquee-track flex w-max"
        data-dir={direction}
        style={{ animationDuration: `${seconds}s` }}
      >
        {track.map((r, i) => (
          <ReviewCard key={`${r.id}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  return (
    <section className="section-y overflow-hidden" aria-label="Client reviews">
      <div className="flex flex-col gap-5">
        <Row items={TOP} direction="right" seconds={64} />
        <Row items={BOTTOM} direction="left" seconds={72} />
      </div>
    </section>
  );
}
