"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-[100] px-4 sm:px-6 md:px-10 pt-4"
    >
      <div
        className={`shell flex items-center justify-between gap-5 rounded-full border py-2.5 pl-5 pr-3 backdrop-blur-lg transition-colors ${
          scrolled ? "bg-[#0f0f11e6]" : "bg-[#15151799]"
        }`}
        style={{ borderColor: scrolled ? "var(--border-2)" : "var(--border)" }}
      >
        <Link href="/" className="flex items-center gap-2.5 font-display text-[1.15rem] font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-grad text-[0.85rem] text-bg shadow-glow">
            ◆
          </span>
          <span>Tayyab<span className="text-brand">.</span></span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
                isActive(l.href) ? "text-white" : "text-dim hover:text-white"
              }`}
            >
              {isActive(l.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-surface-3"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-primary hidden lg:inline-flex">
          Let&apos;s Talk <span className="text-[0.78rem]">➤</span>
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-[95] flex flex-col gap-[5px] p-2 lg:hidden"
        >
          <span className={`h-0.5 w-[22px] rounded bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-[22px] rounded bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-[22px] rounded bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <motion.nav
        initial={false}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed bottom-0 right-0 top-0 z-[90] flex w-[min(82vw,340px)] flex-col gap-1.5 border-l bg-bg-soft px-6 pt-28 lg:hidden"
        style={{ borderColor: "var(--border)" }}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`rounded-xl px-4 py-3.5 text-[1.05rem] transition-colors ${
              isActive(l.href) ? "bg-surface-2 text-brand" : "text-dim hover:bg-surface-2 hover:text-white"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary mt-4">
          Let&apos;s Talk <span className="text-[0.78rem]">➤</span>
        </Link>
      </motion.nav>
    </motion.header>
  );
}
