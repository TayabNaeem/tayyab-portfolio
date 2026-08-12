"use client";

import { useEffect, useRef, useState } from "react";
import { Pause } from "lucide-react";
import ProjectShot from "./ProjectShot";

/**
 * Custom cursor shown while pointing at a device screen: a rotating dashed
 * ring around a glass disc, with a mono caption. Replaces the arrow so the
 * screen reads as a live surface rather than a picture.
 */
function ScreenCursor({ x, y, small }) {
  const ring = small ? 34 : 52;
  const disc = small ? 24 : 38;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-30"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <div className="relative grid place-items-center">
        <span
          className="absolute rounded-full border border-dashed animate-spin-cursor"
          style={{ width: ring, height: ring, borderColor: "rgba(168,85,247,0.85)" }}
        />
        <span
          className="grid place-items-center rounded-full border text-white backdrop-blur-md"
          style={{
            width: disc,
            height: disc,
            borderColor: "rgba(255,255,255,0.28)",
            background: "rgba(168,85,247,0.35)",
          }}
        >
          <Pause size={small ? 10 : 14} strokeWidth={0} fill="currentColor" />
        </span>
      </div>
      {!small && (
        <span
          className="mt-2 block whitespace-nowrap text-center text-[0.58rem] uppercase tracking-[0.2em] text-white/85"
          style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
        >
          paused
        </span>
      )}
    </div>
  );
}

/**
 * Screen source, in order:
 *   video → plays the site scrolling
 *   shot  → a tall screenshot, panned slowly to imitate scrolling
 *   else  → the generated SVG mockup, held still (nothing real to pan)
 */
function Screen({ project, phone, paused }) {
  const { video, shot } = project;
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) v.pause();
    else v.play().catch(() => {});
  }, [paused]);

  if (video) {
    return (
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover object-top"
      />
    );
  }

  if (shot) {
    return (
      <div className="h-full w-full overflow-hidden">
        <img
          src={shot}
          alt={`${project.name} site`}
          className={`w-full ${phone ? "animate-site-scroll-slow" : "animate-site-scroll"}`}
          style={{ display: "block", animationPlayState: paused ? "paused" : "running" }}
        />
      </div>
    );
  }

  return (
    <ProjectShot
      id={project.id}
      name={project.name}
      accent={project.accent}
      accent2={project.accent2}
    />
  );
}

/** Screen area that tracks the pointer, swaps the cursor and freezes playback. */
function ScreenFrame({ project, phone = false, className, style, children }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setXY({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={onMove}
      className={`relative cursor-none overflow-hidden ${className}`}
      style={style}
    >
      <Screen project={project} phone={phone} paused={hover} />
      {children}
      {hover && <ScreenCursor x={xy.x} y={xy.y} small={phone} />}
    </div>
  );
}

export default function DeviceMockup({ project }) {
  return (
    <div className="relative w-full">
      {/* laptop */}
      <div className="relative">
        <div
          className="relative overflow-hidden rounded-t-2xl border border-b-0 p-2.5 pb-0 shadow-soft"
          style={{ borderColor: "rgba(255,255,255,0.14)", background: "#1a1a1f" }}
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-[5px] h-1 w-1 -translate-x-1/2 rounded-full"
            style={{ background: "rgba(255,255,255,0.25)" }}
          />
          <ScreenFrame
            project={project}
            className="aspect-[16/10] w-full rounded-t-lg"
            style={{ background: "#131317" }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 38%, transparent 100%)",
              }}
            />
          </ScreenFrame>
        </div>

        {/* laptop base */}
        <div
          className="relative mx-auto h-[14px] w-[110%] -translate-x-[4.6%] rounded-b-xl border border-t-0"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            background: "linear-gradient(180deg,#26262c,#141418)",
          }}
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-0 h-[3px] w-[16%] -translate-x-1/2 rounded-b-full"
            style={{ background: "rgba(255,255,255,0.14)" }}
          />
        </div>
      </div>

      {/* phone */}
      <div
        className="absolute -bottom-5 right-[2%] w-[20%] overflow-hidden rounded-[1.4rem] border p-1.5 shadow-soft"
        style={{ borderColor: "rgba(255,255,255,0.16)", background: "#1a1a1f" }}
      >
        <ScreenFrame
          project={project}
          phone
          className="aspect-[9/19] w-full rounded-[1rem]"
          style={{ background: "#131317" }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1.5 h-1 w-1/3 -translate-x-1/2 rounded-full"
            style={{ background: "rgba(255,255,255,0.22)" }}
          />
        </ScreenFrame>
      </div>
    </div>
  );
}
