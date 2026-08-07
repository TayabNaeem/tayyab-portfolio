"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/** Short, centred statement between the hero and the work. */
export default function RichText() {
  return (
    <section className="shell py-28 text-center md:py-36">
      <Reveal>
        <span className="eyebrow">WHAT I DO</span>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mx-auto max-w-[1100px] font-display text-[clamp(2rem,5.2vw,4.2rem)] font-semibold leading-[1.14] tracking-[-0.03em]">
          Storefronts that <span className="grad-text">sell</span>, assistants that{" "}
          <span className="grad-text">answer</span>, systems that{" "}
          <span className="grad-text">run themselves</span>.
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
