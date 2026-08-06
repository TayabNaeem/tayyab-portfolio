"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ServiceIcon from "./ServiceIcon";
import { SERVICES } from "@/lib/services";

function Row({ s, i }) {
  return (
    <Reveal delay={(i % 3) * 0.06}>
      <Link
        href={`/services/${s.slug}`}
        className="group relative block overflow-hidden border-b"
        style={{ borderColor: "var(--border)" }}
      >
        {/* hover wash */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(168,85,247,0.16) 0%, rgba(124,58,237,0.06) 45%, transparent 80%)",
          }}
        />
        {/* left accent bar */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-[2px] origin-center scale-y-0 bg-grad transition-transform duration-300 ease-out group-hover:scale-y-100"
        />

        <div className="relative grid items-start gap-5 px-1 py-9 sm:px-5 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:px-8">
          <span className="font-display text-[1.6rem] font-bold leading-none text-white/15 transition-colors duration-300 group-hover:text-brand md:text-[2rem]">
            {s.no}
          </span>

          <div className="min-w-0">
            <div className="mb-2.5 flex items-center gap-3.5">
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border bg-surface-2 text-brand transition-colors duration-300 group-hover:border-brand group-hover:bg-brand/10"
                style={{ borderColor: "var(--border)" }}
              >
                <ServiceIcon icon={s.icon} />
              </span>
              <h3 className="h3 transition-transform duration-300 group-hover:translate-x-1">
                {s.title}
              </h3>
            </div>

            <p className="body max-w-[620px]">{s.short}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border bg-surface-2 px-2.5 py-1 text-[0.75rem] text-mute transition-colors duration-300 group-hover:text-dim"
                  style={{ borderColor: "var(--border)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <span
            aria-hidden
            className="hidden h-12 w-12 shrink-0 -translate-x-2.5 place-items-center rounded-full bg-grad text-bg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:grid"
          >
            <ArrowUpRight size={20} strokeWidth={2.4} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Services({ hideHeading = false }) {
  return (
    <section id="services" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">SERVICES</span>
            <h2 className="h2">
              What I do <span className="grad-text">best.</span>
            </h2>
            <p className="lead mt-4 max-w-[540px]">
              Storefronts and sites that sell, assistants that talk, and systems that run
              themselves — built end to end.
            </p>
          </div>
          <Link href="/contact" className="btn btn-ghost self-start sm:self-auto">
            Start a project <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </Reveal>
      )}

      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        {SERVICES.map((s, i) => (
          <Row key={s.slug} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
