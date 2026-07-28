"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Large futuristic header used at the top of every routed page.
 */
export default function PageHeader({ eyebrow, title, accent, subtitle }) {
  return (
    <header className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-20">
      {/* decorative arcs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <div
          className="absolute rounded-full border animate-spin-slower"
          style={{ width: 620, height: 620, borderColor: "rgba(168,85,247,0.10)" }}
        />
        <div
          className="absolute rounded-full border border-dashed animate-spin-slow"
          style={{ width: 430, height: 430, borderColor: "rgba(124,58,237,0.10)" }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 420, height: 260,
            background: "radial-gradient(ellipse at center, rgba(168,85,247,0.20), transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="shell relative">
        {/* breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-[0.82rem] text-mute"
        >
          <Link href="/" className="transition-colors hover:text-brand">Home</Link>
          <span className="text-brand/50">/</span>
          <span className="text-dim">{title}</span>
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand backdrop-blur-md"
          style={{ borderColor: "var(--border-2)", background: "rgba(21,21,23,0.55)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[1.02]"
        >
          {title} {accent && <span className="grad-text">{accent}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[620px] text-[clamp(1rem,1.6vw,1.15rem)] text-dim"
          >
            {subtitle}
          </motion.p>
        )}

        {/* underline flourish */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px origin-left"
          style={{ background: "linear-gradient(90deg, #a855f7, rgba(168,85,247,0.15), transparent)" }}
        />
      </div>
    </header>
  );
}
