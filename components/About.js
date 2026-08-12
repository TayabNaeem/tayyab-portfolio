"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";
import ProfileImage from "./ProfileImage";

const STATS = [
  { to: 50, label: "Projects Completed" },
  { to: 30, label: "Happy Clients" },
  { to: 4, label: "Years Experience" },
  { to: 15, label: "Automations Built" },
];

export default function About() {
  return (
    <section id="about" className="shell section-y">
      <Reveal>
        <div className="grid md:grid-cols-[340px_1fr] gap-12 items-center rounded-[28px] border p-7 sm:p-10 md:p-[50px] bg-gradient-to-br from-surface-2 to-surface"
             style={{ borderColor: "var(--border)" }}>
          {/* visual */}
          <div className="relative grid place-items-center">
            <div className="w-60 h-60 rounded-full overflow-hidden relative bg-grad border-[3px] shadow-glow"
                 style={{ borderColor: "var(--border-2)" }}>
              <ProfileImage className="w-full h-full" fallbackClass="text-[4rem]" zoom={1.7} focus="50% 8%" />
            </div>
            <span className="absolute bottom-[2%] right-[12%] font-display italic text-[1.4rem] text-brand-light -rotate-[8deg]">
              Tayyab
            </span>
          </div>

          {/* body */}
          <div className="text-center md:text-left">
            <span className="eyebrow">ABOUT ME</span>
            <h2 className="h2">
              I Build Solutions,<br />That Make an <span className="grad-text">Impact.</span>
            </h2>
            <p className="text-dim my-4 md:my-5">
              I&apos;m a passionate Shopify Developer, AI Chatbot Developer &amp; AI Automation
              Engineer with a strong eye for detail and a focus on real business results — clean
              code, thoughtful UX, and automation that quietly does the heavy lifting.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[460px] mx-auto md:mx-0 mb-7">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-[2rem] font-bold text-brand">
                    <Counter to={s.to} />
                  </span>
                  <span className="text-[0.78rem] text-mute">{s.label}</span>
                </div>
              ))}
            </div>

            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="/contact" className="btn btn-primary">
              More About Me <span className="text-[0.78rem]">➤</span>
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
