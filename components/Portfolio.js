"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import ProjectShot from "./ProjectShot";

// Live client stores. Descriptions reflect what each storefront actually sells.
const PROJECTS = [
  {
    id: "soundskins",
    shot: "/portfolio/shots/soundskins.jpg",
    name: "SoundSkins Global",
    url: "https://soundskinsglobal.com",
    tag: "Automotive",
    year: "Shopify",
    accent: "#a855f7",
    accent2: "#6d28d9",
  },
  {
    id: "cybex",
    shot: "/portfolio/shots/cybex.jpg",
    name: "Cybex",
    url: "https://cybex.shopping/",
    tag: "Activewear",
    year: "Shopify",
    accent: "#8b5cf6",
    accent2: "#4f46e5",
  },
  {
    id: "elite",
    shot: "/portfolio/shots/elite.jpg",
    name: "Elite Auto Gear",
    url: "https://eliteautogear.com/",
    tag: "Car Audio",
    year: "Shopify",
    accent: "#7c3aed",
    accent2: "#a855f7",
  },
  {
    id: "rela",
    shot: "/portfolio/shots/rela.jpg",
    name: "RELA",
    url: "https://liverela.com",
    tag: "Pet Care",
    year: "Shopify",
    accent: "#6d28d9",
    accent2: "#8b5cf6",
  },
];

export default function Portfolio({ hideHeading = false, limit }) {
  const shown = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const [hovered, setHovered] = useState(null);
  const wrapRef = useRef(null);

  // preview follows the cursor with a little lag
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 28, mass: 0.5 });

  const onMove = (e) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section id="portfolio" className={`shell ${hideHeading ? "pb-24" : "py-24"}`}>
      {!hideHeading && (
        <Reveal className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2 className="h2">
              Stores I&apos;ve <span className="grad-text">built.</span>
            </h2>
            <p className="lead mt-4 max-w-[520px]">
              Live Shopify storefronts — hover to preview, click to visit the real thing.
            </p>
          </div>
          <Link href="/work" className="btn btn-ghost self-start sm:self-auto">
            View all work <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
        </Reveal>
      )}

      <div
        ref={wrapRef}
        onMouseMove={onMove}
        onMouseLeave={() => setHovered(null)}
        className="relative border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {/* cursor-following preview (desktop only) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        >
          <motion.div
            animate={{
              opacity: hovered !== null ? 1 : 0,
              scale: hovered !== null ? 1 : 0.86,
            }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="h-[230px] w-[400px] overflow-hidden rounded-2xl border shadow-soft"
            style={{ borderColor: "var(--border-2)", background: "#131317" }}
          >
            {hovered !== null && (
              <ProjectShot
                id={shown[hovered].id}
                name={shown[hovered].name}
                shot={shown[hovered].shot}
                accent={shown[hovered].accent}
                accent2={shown[hovered].accent2}
              />
            )}
          </motion.div>
        </motion.div>

        {shown.map((p, i) => (
          <Reveal key={p.id} delay={(i % 4) * 0.05}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              className="group relative block border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {/* hover wash */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168,85,247,0.14) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex items-center gap-6 px-1 py-7 sm:px-5 md:px-8 lg:py-9">
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex flex-wrap items-center gap-3">
                    <span className="small uppercase tracking-[0.14em] text-brand">{p.tag}</span>
                    <span className="small">·</span>
                    <span className="small">{p.year}</span>
                  </div>

                  <h3 className="font-display text-[clamp(1.5rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.025em] transition-all duration-300 group-hover:translate-x-2 group-hover:text-brand-light">
                    {p.name}
                  </h3>

                  <span className="small mt-1.5 block">
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </span>

                  {/* inline preview for touch / small screens */}
                  <div
                    className="mt-5 h-[180px] w-full overflow-hidden rounded-xl border sm:h-[220px] lg:hidden"
                    style={{ borderColor: "var(--border)", background: "#131317" }}
                  >
                    <ProjectShot
                      id={p.id}
                      name={p.name}
                      shot={p.shot}
                      accent={p.accent}
                      accent2={p.accent2}
                    />
                  </div>
                </div>

                <span
                  aria-hidden
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full border text-brand transition-all duration-300 group-hover:bg-grad group-hover:text-bg"
                  style={{ borderColor: "var(--border-2)" }}
                >
                  <ArrowUpRight size={20} strokeWidth={2.2} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
