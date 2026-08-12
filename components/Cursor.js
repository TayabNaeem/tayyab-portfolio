"use client";

import { useEffect, useRef } from "react";

/**
 * Site wide cursor: a small solid dot that tracks the pointer exactly, and a
 * ring that trails it via a CSS transition (no rAF, so it keeps up even when
 * the tab is throttled).
 *
 * Elements can ask for a different state with data-cursor:
 *   data-cursor="pause"  → ring grows and shows a pause glyph
 *   data-cursor="hide"   → cursor hidden entirely
 *
 * Skipped on coarse pointers, where there is nothing to replace.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let visible = false;

    const place = (x, y) => {
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e) => {
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      place(e.clientX, e.clientY);

      const t = e.target instanceof Element ? e.target : null;
      const cursorEl = t?.closest("[data-cursor]");
      const mode = cursorEl?.getAttribute("data-cursor");
      const interactive = t?.closest(
        'a, button, [role="button"], input, textarea, select, label'
      );

      ring.dataset.mode = mode || (interactive ? "link" : "default");
      dot.dataset.mode = mode || (interactive ? "link" : "default");
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden className="cursor-ring">
        <svg viewBox="0 0 24 24" className="cursor-glyph" fill="currentColor">
          <rect x="7" y="5" width="3.4" height="14" rx="1.2" />
          <rect x="13.6" y="5" width="3.4" height="14" rx="1.2" />
        </svg>
      </div>
      <div ref={dotRef} aria-hidden className="cursor-dot" />
    </>
  );
}
