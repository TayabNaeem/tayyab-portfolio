"use client";

import { useEffect, useRef, useState } from "react";

const display = { fontFamily: "var(--font-display), 'Segoe UI', sans-serif" };
const mono = { fontFamily: "var(--font-mono)" };

/**
 * "What I've built": the heading pins on the left while the timeline scrolls.
 * A line fills as you scroll, and each step lights up as the line reaches it.
 */
export default function ScrollTimeline({ eyebrow, title, intro, items }) {
  const listRef = useRef(null);
  const [progress, setProgress] = useState(1); // full at rest, so it reads correctly without JS

  useEffect(() => {
    const el = listRef.current;
    if (!el) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55; // the point on screen the line "reaches"
      const p = (anchor - r.top) / Math.max(1, r.height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const n = items.length;

  return (
    <section
      className="tn-shell"
      style={{ paddingTop: 112, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 48, alignItems: "start" }}
    >
      <div className="tn-scroll-pin" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <span style={{ ...mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-text)" }}>{eyebrow}</span>
        <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(36px, 4.8vw, 60px)", lineHeight: 1, letterSpacing: "-0.035em", textWrap: "balance" }}>{title}</h2>
        <p style={{ margin: 0, color: "var(--muted)" }}>{intro}</p>
        <span style={{ ...mono, fontSize: 13, color: "var(--muted)", marginTop: 8 }}>
          {String(Math.max(1, Math.ceil(progress * n))).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>

      <ol ref={listRef} style={{ position: "relative", margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
        {/* track and fill */}
        <span aria-hidden="true" style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 2, background: "var(--line)" }} />
        <span
          aria-hidden="true"
          style={{ position: "absolute", left: 6, top: 8, width: 2, height: `calc((100% - 16px) * ${progress})`, background: "var(--ink)", transition: "height 0.1s linear" }}
        />
        {items.map((t, i) => {
          const on = progress >= (i + 0.35) / n || progress === 1;
          return (
            <li
              key={t.title}
              style={{
                position: "relative",
                padding: "0 0 72px 44px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                opacity: on ? 1 : 0.35,
                transform: on ? "none" : "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute", left: 0, top: 6, width: 14, height: 14, borderRadius: "50%",
                  background: on ? "var(--accent)" : "var(--surface)",
                  border: `3px solid ${on ? "var(--ink)" : "var(--line)"}`,
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
              />
              <span style={{ ...mono, fontSize: 12, color: "var(--accent-text)" }}>{t.count}</span>
              <b style={{ ...display, fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{t.title}</b>
              <span style={{ color: "var(--muted)", fontSize: 16, maxWidth: "34em" }}>{t.desc}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
