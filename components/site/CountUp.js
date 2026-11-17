"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `to` when the number scrolls into view. The final value is
 * what the server renders, so the page reads correctly without JavaScript, and
 * people who prefer reduced motion simply see the final number.
 */
export default function CountUp({ to, suffix = "", duration = 1600 }) {
  const [value, setValue] = useState(to);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

    let raf = 0;
    let started = false;
    setValue(0);

    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const step = (t) => {
        const x = Math.min(1, (t - t0) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - x, 3))));
        if (x < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
      {suffix}
    </span>
  );
}
