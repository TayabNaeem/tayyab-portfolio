"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/** Large editorial statement between the hero and the work. */
export default function RichText() {
  return (
    <section className="shell py-24 md:py-28">
      <Reveal>
        <span className="eyebrow">WHY I BUILD</span>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="max-w-[1000px] font-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-[1.32] tracking-[-0.02em]">
          Most stores don&apos;t lose sales because of the product. They lose them to{" "}
          <span className="grad-text">slow pages</span>, a checkout that fights the customer, and
          a team buried in work software should already be doing. I build the{" "}
          <span className="grad-text">storefront</span>, the{" "}
          <span className="grad-text">assistant</span> that answers at 2am, and the{" "}
          <span className="grad-text">automations</span> that quietly run the rest — so the
          business grows without the headcount.
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
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
