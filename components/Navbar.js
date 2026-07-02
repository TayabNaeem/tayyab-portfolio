"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const Logo = (
    <a href="#home" className="flex items-center gap-2.5 text-[1.15rem] font-bold font-display">
      <span className="grid place-items-center w-8 h-8 rounded-[9px] bg-grad text-bg text-[0.85rem] shadow-glow">
        ◆
      </span>
      <span>
        Tayyab<span className="text-brand">.</span>
      </span>
    </a>
  );

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-[100] px-4 sm:px-6 md:px-10 pt-4"
    >
      <div
        className={`max-w-[1160px] mx-auto flex items-center justify-between gap-5 rounded-full border py-2.5 pl-5 pr-3 backdrop-blur-lg transition-colors ${
          scrolled ? "bg-[#0f0f11e6]" : "bg-[#15151799]"
        }`}
        style={{ borderColor: scrolled ? "var(--border-2)" : "var(--border)" }}
      >
        {Logo}

        {/* Desktop links */}
        <nav className="hidden md:flex gap-1.5">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-4 py-2 rounded-full text-[0.92rem] font-medium transition-colors ${
                active === l.id ? "text-white bg-surface-3" : "text-dim hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary hidden md:inline-flex">
          Let&apos;s Talk <span className="text-[0.78rem]">➤</span>
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden relative z-[95] flex flex-col gap-[5px] p-2"
        >
          <span className={`w-[22px] h-0.5 bg-white rounded transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`w-[22px] h-0.5 bg-white rounded transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-[22px] h-0.5 bg-white rounded transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <motion.nav
        initial={false}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="md:hidden fixed top-0 right-0 bottom-0 w-[min(80vw,320px)] flex flex-col gap-1.5 px-6 pt-24 bg-bg-soft border-l z-[90]"
        style={{ borderColor: "var(--border)" }}
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-lg text-[1.05rem] text-dim hover:text-white hover:bg-surface-2 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </motion.nav>
    </motion.header>
  );
}
