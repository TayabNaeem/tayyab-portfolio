"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { WhatsappIcon } from "./SocialIcons";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "./Contact";

/** The three ways in, laid out like the work list so the site ends how it reads. */
const WAYS = [
  {
    no: "01",
    Icon: ArrowUpRight,
    label: "Start a project",
    value: "Brief me in three short steps",
    href: "/contact",
    internal: true,
  },
  {
    no: "02",
    Icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    no: "03",
    Icon: WhatsappIcon,
    label: "WhatsApp",
    value: CONTACT_PHONE_DISPLAY,
    href: `https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}`,
  },
];

function Row({ way }) {
  const inner = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.14), transparent 70%)" }}
      />

      <div className="relative flex items-center gap-5 py-6 sm:gap-7 sm:py-7">
        <span className="font-display text-[0.78rem] font-bold tracking-[0.2em] text-brand">
          {way.no}
        </span>

        {/* width/height rather than `size`, so the lucide icons and the inline
            WhatsApp mark both land at the same box */}
        <way.Icon
          width={20}
          height={20}
          className="hidden shrink-0 text-dim transition-colors duration-300 group-hover:text-brand sm:block"
        />

        <div className="min-w-0 flex-1">
          <span className="font-display text-[clamp(1.15rem,2.4vw,1.6rem)] font-semibold leading-tight tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1.5 inline-block">
            {way.label}
          </span>
          <span className="small block truncate">{way.value}</span>
        </div>

        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border text-brand transition-all duration-300 group-hover:bg-grad group-hover:text-bg"
          style={{ borderColor: "var(--border-2)" }}
        >
          <ArrowUpRight size={18} strokeWidth={2.2} />
        </span>
      </div>
    </>
  );

  const className = "group relative block border-b";
  const style = { borderColor: "var(--border)" };

  if (way.internal) {
    return (
      <Link href={way.href} className={className} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={way.href}
      target={way.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {inner}
    </a>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* one glow, sat behind the statement */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] max-w-[130vw] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.16), transparent 68%)",
          filter: "blur(50px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)",
        }}
      />

      <div className="shell section-y relative">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <span className="eyebrow">NEXT STEP</span>
          <h2 className="font-display text-[clamp(2.5rem,6.4vw,4.6rem)] font-bold leading-[1.03] tracking-[-0.035em]">
            Tell me what you&apos;re building.
            <br className="hidden sm:block" />{" "}
            <span className="grad-text">I&apos;ll tell you how to ship it.</span>
          </h2>
          <p className="lead mx-auto mt-6 max-w-[560px]">
            A store, a chatbot, an automation that gives your week back. Pick whichever way
            below suits you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mx-auto mt-14 max-w-[860px] border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {WAYS.map((w) => (
              <Row key={w.no} way={w} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-3 text-[0.88rem]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              <span className="font-semibold text-white">Open for work</span>
              <span className="text-dim">Replies usually the same day</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
