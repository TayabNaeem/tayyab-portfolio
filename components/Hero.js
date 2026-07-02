"use client";

import { motion } from "framer-motion";

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
    <section id="home" className="min-h-screen flex items-center px-5 sm:px-8 md:px-12 pt-36 pb-16">
      <div className="max-w-[1160px] w-full mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left order-2 md:order-1"
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
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#portfolio" className="btn btn-primary">
              View My Work <span className="text-[0.78rem]">➤</span>
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#contact" className="btn btn-ghost">
              Download CV <span className="text-[0.78rem]">⭳</span>
            </motion.a>
          </motion.div>
          <motion.div variants={item}>
            <span className="block text-[0.8rem] text-mute mb-3">Trusted by</span>
            <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
              {["Shopify", "OpenAI", "Claude", "n8n", "Make"].map((n) => (
                <span key={n} className="font-display font-semibold text-[1.02rem] text-mute/80 hover:text-brand-light transition-colors">
                  {n}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative grid place-items-center min-h-[360px] md:min-h-[440px] order-1 md:order-2"
        >
          <div className="relative w-[min(440px,94%)] aspect-square" style={{ perspective: "1100px" }}>
            {/* glowing disc behind the figure */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full"
              style={{
                zIndex: 0,
                background:
                  "radial-gradient(circle at 50% 42%, rgba(255,122,24,0.55), rgba(255,92,43,0.2) 45%, transparent 70%)",
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
                      "conic-gradient(from 210deg, transparent 0deg, rgba(255,122,24,0.06) 40deg, #ff7a18 150deg, #ff9d4d 215deg, rgba(255,157,77,0.15) 300deg, transparent 360deg)",
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    filter: "drop-shadow(0 0 16px rgba(255,122,24,0.6))",
                  }}
                />
                <div
                  className="absolute top-[-9px] left-[calc(50%-9px)] w-[18px] h-[18px] rounded-full bg-white"
                  style={{ boxShadow: "0 0 24px 5px #ff9d4d" }}
                />
              </div>
              {/* inner dashed ring */}
              <div
                className="absolute inset-[16%] rounded-full border border-dashed animate-spin-slower"
                style={{ borderColor: "rgba(255,157,77,0.3)" }}
              />
            </div>

            {/* Standing figure — emerging from the ring */}
            <img
              src="/assets/profile.png?v=3"
              alt="Tayyab Naeem"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[106%] w-auto max-w-none object-contain pointer-events-none select-none"
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
                      "conic-gradient(from 210deg, transparent 0deg, rgba(255,122,24,0.06) 40deg, #ff7a18 150deg, #ff9d4d 215deg, rgba(255,157,77,0.15) 300deg, transparent 360deg)",
                    WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                    filter: "drop-shadow(0 0 16px rgba(255,122,24,0.6))",
                  }}
                />
                <div
                  className="absolute top-[-9px] left-[calc(50%-9px)] w-[18px] h-[18px] rounded-full bg-white"
                  style={{ boxShadow: "0 0 24px 5px #ff9d4d" }}
                />
              </div>
            </div>
          </div>

          {/* floating decorative circles */}
          {[
            { s: 12, top: "6%", left: "7%", solid: true, d: 4.5, delay: 0, z: 5 },
            { s: 20, top: "20%", left: "-2%", ring: true, d: 6, delay: 0.4, z: 5 },
            { s: 8, bottom: "24%", right: "3%", solid: true, d: 5, delay: 0.9, z: 30 },
            { s: 28, bottom: "6%", left: "3%", ring: true, d: 7.5, delay: 0.2, z: 5 },
            { s: 6, top: "44%", right: "9%", solid: true, d: 4, delay: 1.2, z: 30 },
            { s: 10, top: "12%", right: "20%", ring: true, d: 5.5, delay: 0.6, z: 5 },
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
                background: c.solid ? "radial-gradient(circle at 30% 30%, #ff9d4d, #ff7a18)" : "transparent",
                border: c.ring ? "1.5px solid rgba(255,157,77,0.55)" : "none",
                boxShadow: c.solid ? "0 0 12px rgba(255,122,24,0.85)" : "none",
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
                background: "radial-gradient(circle, rgba(255,122,24,0.4), transparent 70%)",
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
    </section>
  );
}
