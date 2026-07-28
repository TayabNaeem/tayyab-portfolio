"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="shell py-5">
      <Reveal>
        <div className="relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left rounded-[26px] p-7 sm:p-11 bg-grad-h text-[#0b0616]">
          <div>
            <span className="text-[1.4rem]">✦</span>
            <h3 className="text-[clamp(1.4rem,3vw,2rem)] my-1.5 text-[#0b0616]">Have a project in mind?</h3>
            <p className="font-medium text-[#2a1250]">Let&apos;s work together and build something great!</p>
          </div>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="btn px-8 py-[15px] text-base bg-[#0b0616] text-white hover:bg-black shadow-lg"
          >
            Let&apos;s Talk <span className="text-[0.78rem]">➤</span>
          </motion.a>
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 80% 120%, rgba(255,255,255,0.25), transparent 50%)" }} />
        </div>
      </Reveal>
    </section>
  );
}
