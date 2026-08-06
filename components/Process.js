"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { SearchIcon, PenIcon, CodeIcon, RocketIcon } from "./Icons";

const STEPS = [
  {
    n: "01",
    Icon: SearchIcon,
    title: "Discover",
    desc: "We map your store, your customers and the repetitive work eating your week.",
  },
  {
    n: "02",
    Icon: PenIcon,
    title: "Design",
    desc: "I plan the storefront, the assistant's behaviour and the automation flow before writing code.",
  },
  {
    n: "03",
    Icon: CodeIcon,
    title: "Build",
    desc: "Clean, tested implementation — theme, chatbot and integrations wired end to end.",
  },
  {
    n: "04",
    Icon: RocketIcon,
    title: "Launch & Scale",
    desc: "Ship it, watch the numbers, then tune conversion and expand the automation.",
  },
];

export default function Process({ hideHeading = false }) {
  return (
    <section id="process" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-14 text-center max-w-[620px] mx-auto">
          <span className="eyebrow">HOW I WORK</span>
          <h2 className="h2">
            A simple, <span className="grad-text">proven process.</span>
          </h2>
          <p className="text-dim mt-4">
            No jargon, no surprises — just a clear path from problem to a system that runs itself.
          </p>
        </Reveal>
      )}

      <div className="relative">
        {/* connecting line (desktop) */}
        <div
          className="hidden lg:block absolute top-[27px] left-[12%] right-[12%] h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.45), rgba(168,85,247,0.45), transparent)" }}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative text-center lg:px-3">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="relative z-10 mx-auto mb-5 grid h-[54px] w-[54px] place-items-center rounded-2xl border bg-surface text-brand"
                  style={{ borderColor: "var(--border-2)" }}
                >
                  <s.Icon />
                  <span className="absolute -top-2 -right-2 grid h-[22px] w-[22px] place-items-center rounded-full bg-grad text-[0.65rem] font-bold text-bg">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="text-[1.1rem] mb-2">{s.title}</h3>
                <p className="text-dim text-[0.88rem]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
