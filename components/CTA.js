"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT_EMAIL } from "./Contact";

export default function CTA() {
  return (
    <section className="shell py-16">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[28px] border p-8 sm:p-12 lg:p-14"
          style={{
            borderColor: "var(--border-2)",
            background: "linear-gradient(150deg,#17131f 0%,#131317 55%,#111014 100%)",
          }}
        >
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.28), transparent 68%)", filter: "blur(40px)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)", filter: "blur(50px)" }}
          />
          {/* top edge highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent)" }}
          />
          {/* slow orbit ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-dashed animate-spin-slower lg:block"
            style={{ borderColor: "rgba(168,85,247,0.16)" }}
          />

          <div className="relative flex flex-col items-start gap-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[560px]">
              <span
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand"
                style={{ borderColor: "var(--border-2)", background: "rgba(168,85,247,0.08)" }}
              >
                <Sparkles size={13} strokeWidth={2.2} />
                Available for new projects
              </span>

              <h3 className="text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.1]">
                Have a project in mind?{" "}
                <span className="grad-text">Let&apos;s build it.</span>
              </h3>

              <p className="mt-4 max-w-[460px] text-[0.98rem] text-dim">
                Whether it&apos;s a Shopify store, an AI chatbot or an automation that saves your
                team hours every week — tell me what you need and I&apos;ll map out a plan.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3.5 sm:flex-row sm:items-center lg:flex-col lg:items-stretch">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="btn btn-primary w-full justify-center px-7 py-3.5">
                  Start a project <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
              </motion.div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-[0.92rem] font-medium text-dim transition-all hover:-translate-y-0.5 hover:border-brand hover:text-white"
                style={{ borderColor: "var(--border-2)" }}
              >
                <Mail size={16} strokeWidth={1.9} />
                Email me
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
