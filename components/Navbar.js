"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import { SERVICES } from "@/lib/services";

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

/* ---------- services mega menu ---------- */

function ServicesMenu({ onNavigate }) {
  return (
    <div
      // Revealed by hover or keyboard focus on the parent group. Kept in CSS
      // rather than state so it works without pointer tracking and is reachable
      // by tab.
      className="invisible absolute left-1/2 top-full w-[min(92vw,880px)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
    >
      <div
        className="overflow-hidden rounded-[24px] border shadow-soft backdrop-blur-2xl"
        style={{
          borderColor: "var(--border-2)",
          background: "linear-gradient(160deg, rgba(28,28,32,0.97), rgba(15,15,17,0.97))",
        }}
      >
        {/* top edge highlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-10 top-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.7), transparent)",
          }}
        />

        <div className="grid gap-1.5 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              onClick={onNavigate}
              className="group/item relative flex gap-3.5 rounded-2xl p-3.5 transition-colors hover:bg-white/[0.06]"
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border bg-surface-2 text-brand transition-colors duration-200 group-hover/item:border-brand group-hover/item:bg-brand/10"
                style={{ borderColor: "var(--border)" }}
              >
                <ServiceIcon icon={s.icon} className="h-[18px] w-[18px]" />
              </span>

              <span className="min-w-0">
                <span className="mb-0.5 flex items-center gap-1.5">
                  <span className="font-display text-[0.94rem] font-semibold leading-tight text-white">
                    {s.title}
                  </span>
                  <ArrowUpRight
                    size={13}
                    strokeWidth={2.2}
                    className="shrink-0 text-brand opacity-0 transition-opacity group-hover/item:opacity-100"
                  />
                </span>
                <span className="block text-[0.78rem] leading-snug text-mute">
                  {s.tags.slice(0, 3).join(" · ")}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* footer strip */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 border-t px-6 py-4"
          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.02)" }}
        >
          <span className="text-[0.82rem] text-dim">
            Not sure which one fits? Tell me the problem and I&apos;ll point you at it.
          </span>
          <Link href="/contact" onClick={onNavigate} className="btn btn-primary px-5 py-2 text-[0.85rem]">
            Start a project <ArrowUpRight size={14} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------- navbar ---------- */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on route change
  useEffect(() => {
    setOpen(false);
    setMobileServices(false);
  }, [pathname]);

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
        className={`shell relative flex items-center justify-between gap-5 rounded-full border py-2.5 pl-5 pr-3 backdrop-blur-lg transition-colors ${
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
          {LINKS.map((l) =>
            l.mega ? (
              <div key={l.href} className="group relative">
                <Link
                  href={l.href}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
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
                  <ChevronDown
                    size={14}
                    strokeWidth={2.2}
                    className="relative transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                </Link>

                <ServicesMenu />
              </div>
            ) : (
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
            )
          )}
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
        className="fixed bottom-0 right-0 top-0 z-[90] flex w-[min(86vw,360px)] flex-col gap-1.5 overflow-y-auto border-l bg-bg-soft px-6 pb-8 pt-28 lg:hidden"
        style={{ borderColor: "var(--border)" }}
      >
        {LINKS.map((l) =>
          l.mega ? (
            <div key={l.href}>
              <div className="flex items-center">
                <Link
                  href={l.href}
                  className={`flex-1 rounded-xl px-4 py-3.5 text-[1.05rem] transition-colors ${
                    isActive(l.href) ? "bg-surface-2 text-brand" : "text-dim hover:bg-surface-2 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
                <button
                  type="button"
                  aria-label="Toggle services"
                  aria-expanded={mobileServices}
                  onClick={() => setMobileServices((v) => !v)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-dim transition-colors hover:bg-surface-2 hover:text-white"
                >
                  <ChevronDown
                    size={18}
                    strokeWidth={2.2}
                    className={`transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: mobileServices ? "1fr" : "0fr",
                  opacity: mobileServices ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l pl-3" style={{ borderColor: "var(--border)" }}>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.9rem] text-dim transition-colors hover:bg-surface-2 hover:text-white"
                      >
                        <span className="text-brand">
                          <ServiceIcon icon={s.icon} className="h-4 w-4" />
                        </span>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl px-4 py-3.5 text-[1.05rem] transition-colors ${
                isActive(l.href) ? "bg-surface-2 text-brand" : "text-dim hover:bg-surface-2 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          )
        )}

        <Link href="/contact" className="btn btn-primary mt-4">
          Let&apos;s Talk <span className="text-[0.78rem]">➤</span>
        </Link>
      </motion.nav>
    </motion.header>
  );
}
