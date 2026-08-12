"use client";

import { useRef } from "react";
import ProjectShot from "./ProjectShot";

/**
 * Laptop with a phone overlapping its lower right corner.
 *
 * Screen source, in order:
 *   video → plays the site scrolling
 *   shot  → a tall screenshot, panned slowly to imitate scrolling
 *   else  → the generated SVG mockup, held still (nothing real to pan)
 *
 * Hovering a screen freezes whatever is playing on it, so a visitor can stop
 * and read.
 */
function Screen({ project, phone = false }) {
  const { video, shot } = project;
  const videoRef = useRef(null);

  if (video) {
    return (
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        onMouseEnter={() => videoRef.current?.pause()}
        onMouseLeave={() => videoRef.current?.play()}
        className="h-full w-full cursor-pointer object-cover object-top"
      />
    );
  }

  if (shot) {
    return (
      <div className="group/screen h-full w-full overflow-hidden">
        <img
          src={shot}
          alt={`${project.name} site`}
          className={`w-full ${
            phone ? "animate-site-scroll-slow" : "animate-site-scroll"
          } group-hover/screen:[animation-play-state:paused]`}
          style={{ display: "block" }}
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

export default function DeviceMockup({ project }) {
  return (
    <div className="relative w-full">
      {/* glow behind the devices */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.28), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

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
          <div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg"
            style={{ background: "#131317" }}
          >
            <Screen project={project} />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.10) 0%, transparent 38%, transparent 100%)",
              }}
            />
          </div>
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
        <div
          className="relative aspect-[9/19] w-full overflow-hidden rounded-[1rem]"
          style={{ background: "#131317" }}
        >
          <Screen project={project} phone />
          <span
            aria-hidden
            className="absolute left-1/2 top-1.5 h-1 w-1/3 -translate-x-1/2 rounded-full"
            style={{ background: "rgba(255,255,255,0.22)" }}
          />
        </div>
      </div>
    </div>
  );
}
