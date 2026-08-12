"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/** Short, centred statement between the hero and the work. */
export default function RichText() {
  return (
    <section className="shell section-y text-center">
      <Reveal>
        <span className="eyebrow">THE POINT</span>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mx-auto max-w-[1150px] font-display text-[clamp(2.3rem,6vw,5rem)] font-bold leading-[1.06] tracking-[-0.035em]">
          I don&apos;t build websites.
          <br className="hidden sm:block" />{" "}
          <span className="grad-text">I build machines that sell.</span>
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link href="/services" className="btn btn-primary">
            Explore services <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
          <Link href="/about" className="btn btn-ghost">
            More about me
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
