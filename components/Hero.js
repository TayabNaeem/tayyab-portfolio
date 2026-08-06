"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShopifyMark, BotpressMark } from "./BrandLogos";
import LogoMarquee from "./LogoMarquee";

// Floating platform logos that orbit the portrait — logo only, large
const BADGES = [
  { Mark: ShopifyMark, label: "Shopify", pos: { top: "3%", left: "-7%" }, z: 30, d: 5 },
  { Mark: BotpressMark, label: "Botpress", pos: { bottom: "30%", right: "-9%" }, z: 30, d: 6.2 },
  { src: "/assets/logos/n8n-mark.png", label: "n8n", pos: { bottom: "1%", left: "-5%" }, z: 30, d: 7 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-36 pb-10">
      <div className="shell w-full grid md:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="min-w-0 text-center md:text-left order-2 md:order-1"
        >
          <motion.span variants={item} className="inline-block text-[0.85rem] font-semibold tracking-[0.3em] text-brand mb-4">
            HELLO, I&apos;M
          </motion.span>
          <motion.h1 variants={item} className="text-[clamp(2.8rem,6.5vw,5rem)] font-bold mb-2.5">
            Tayyab <span className="grad-text">Naeem</span>
          </motion.h1>
          <motion.p variants={item} className="text-[clamp(1.15rem,2.4vw,1.6rem)] font-semibold mb-5">
            Shopify &amp; AI Automation Developer
          </motion.p>
          <motion.p variants={item} className="text-dim text-[clamp(1rem,1.6vw,1.1rem)] max-w-[480px] mx-auto md:mx-0 mb-8">
            I build fast, beautiful Shopify stores and intelligent AI chatbots &amp; automations
            that help brands sell more and work less.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3.5 justify-center md:justify-start mb-11">
            <Link href="/work" className="btn btn-primary">
              View My Work <span className="text-[0.78rem]">➤</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Let&apos;s Talk <span className="text-[0.78rem]">➤</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative grid place-items-center min-h-[440px] md:min-h-[580px] lg:min-h-[640px] order-1 md:order-2"
        >
          <div className="relative w-[290px] sm:w-[380px] md:w-[440px] lg:w-[520px] aspect-square" style={{ perspective: "1400px" }}>
            {/* glowing disc behind the figure */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full"
              style={{
                zIndex: 0,
                background:
                  "radial-gradient(circle at 50% 42%, rgba(168,85,247,0.55), rgba(124,58,237,0.2) 45%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />

            {/* BACK of the ring — sits BEHIND the figure (top/far arc) */}
            <div className="absolute inset-0" style={{ zIndex: 1, transform: "rotateX(55deg) rotateZ(28deg)" }}>
              <div className="absolute inset-0 animate-spin-slow">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 210deg, transparent 0deg, rgba(168,85,247,0.06) 40deg, #a855f7 150deg, #7c3aed 215deg, rgba(124,58,237,0.15) 300deg, transparent 360deg)",
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    filter: "drop-shadow(0 0 16px rgba(168,85,247,0.6))",
                  }}
                />
                <div
                  className="absolute top-[-9px] left-[calc(50%-9px)] w-[18px] h-[18px] rounded-full bg-white"
                  style={{ boxShadow: "0 0 24px 5px #7c3aed" }}
                />
              </div>
              {/* inner dashed ring */}
              <div
                className="absolute inset-[16%] rounded-full border border-dashed animate-spin-slower"
                style={{ borderColor: "rgba(124,58,237,0.3)" }}
              />
            </div>

            {/* Standing figure — emerging from the ring */}
            <img
              src="/assets/profile.png?v=3"
              alt="Tayyab Naeem"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[118%] w-auto max-w-none object-contain pointer-events-none select-none"
              style={{
                filter: "drop-shadow(0 22px 40px rgba(0,0,0,0.5))",
                WebkitMaskImage: "linear-gradient(to bottom, #000 66%, transparent 78%)",
                maskImage: "linear-gradient(to bottom, #000 66%, transparent 78%)",
              }}
            />

            {/* FRONT of the ring — same ring, clipped to its near arc, drawn OVER the figure */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 20,
                transform: "rotateX(55deg) rotateZ(28deg)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0 50%, #000 57% 100%)",
                maskImage: "linear-gradient(to bottom, transparent 0 50%, #000 57% 100%)",
              }}
            >
              <div className="absolute inset-0 animate-spin-slow">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 210deg, transparent 0deg, rgba(168,85,247,0.06) 40deg, #a855f7 150deg, #7c3aed 215deg, rgba(124,58,237,0.15) 300deg, transparent 360deg)",
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    filter: "drop-shadow(0 0 16px rgba(168,85,247,0.6))",
                  }}
                />
                <div
                  className="absolute top-[-9px] left-[calc(50%-9px)] w-[18px] h-[18px] rounded-full bg-white"
                  style={{ boxShadow: "0 0 24px 5px #7c3aed" }}
                />
              </div>
            </div>
          </div>

          {/* floating capability badges (Shopify / chatbot / automation) */}
          {BADGES.map((b, i) => (
            <motion.div
              key={b.label}
              className="absolute grid place-items-center rounded-2xl border p-3.5 backdrop-blur-md"
              style={{
                ...b.pos,
                zIndex: b.z,
                borderColor: "var(--border-2)",
                background: "rgba(21,21,23,0.82)",
                boxShadow: "0 12px 34px -12px rgba(0,0,0,0.8)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 0.8 + i * 0.15, duration: 0.5 },
                scale: { delay: 0.8 + i * 0.15, duration: 0.5 },
                y: { duration: b.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
              }}
            >
              {b.src ? (
                <img src={b.src} alt="" className="h-9 w-auto" />
              ) : (
                <b.Mark className="h-9 w-9" />
              )}
              <span className="sr-only">{b.label}</span>
            </motion.div>
          ))}

          {/* floating decorative circles */}
          {[
            { s: 10, top: "18%", right: "4%", solid: true, d: 4.5, delay: 0, z: 5 },
            { s: 20, top: "34%", left: "-4%", ring: true, d: 6, delay: 0.4, z: 5 },
            { s: 6, top: "48%", right: "12%", solid: true, d: 4, delay: 1.2, z: 5 },
            { s: 14, top: "8%", right: "26%", ring: true, d: 5.5, delay: 0.6, z: 5 },
          ].map((c, i) => (
            <motion.span
              key={`c${i}`}
              aria-hidden
              className="absolute rounded-full pointer-events-none"
              style={{
                width: c.s,
                height: c.s,
                top: c.top,
                bottom: c.bottom,
                left: c.left,
                right: c.right,
                zIndex: c.z,
                background: c.solid ? "radial-gradient(circle at 30% 30%, #7c3aed, #a855f7)" : "transparent",
                border: c.ring ? "1.5px solid rgba(124,58,237,0.55)" : "none",
                boxShadow: c.solid ? "0 0 12px rgba(168,85,247,0.85)" : "none",
              }}
              animate={{ y: [0, -14, 0], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: c.d, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* soft blurred bokeh orbs */}
          {[
            { s: 64, top: "3%", right: "14%", d: 9 },
            { s: 46, bottom: "14%", left: "-5%", d: 11 },
          ].map((c, i) => (
            <motion.span
              key={`b${i}`}
              aria-hidden
              className="absolute rounded-full pointer-events-none"
              style={{
                width: c.s,
                height: c.s,
                top: c.top,
                bottom: c.bottom,
                left: c.left,
                right: c.right,
                zIndex: 0,
                background: "radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)",
                filter: "blur(6px)",
              }}
              animate={{ y: [0, 12, 0], opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: c.d, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* experience badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute right-[2%] top-[14%] z-[4] flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-soft backdrop-blur-md bg-[#151517d9]"
            style={{ borderColor: "var(--border-2)" }}
          >
            <strong className="font-display text-[1.9rem] leading-none text-brand">3+</strong>
            <span className="text-[0.78rem] text-dim leading-tight">
              Years of<br />Experience
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* full-bleed tool marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-12 w-full md:mt-16"
      >
        <LogoMarquee />
      </motion.div>
    </section>
  );
}
