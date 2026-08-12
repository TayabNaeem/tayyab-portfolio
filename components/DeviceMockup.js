"use client";

import ProjectShot from "./ProjectShot";

/**
 * Laptop with a phone overlapping its lower right corner.
 *
 * Screen source, in order:
 *   video → plays the site scrolling
 *   shot  → a tall screenshot, panned slowly to imitate scrolling
 *   else  → the generated SVG mockup, held still (nothing real to pan)
 */
function Screen({ project, phone = false }) {
  const { video, shot } = project;

  if (video) {
    return (
      <video
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
          className={phone ? "animate-site-scroll-slow w-full" : "animate-site-scroll w-full"}
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
          {/* camera notch */}
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
            {/* screen sheen */}
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
          className="relative mx-auto h-[14px] w-[112%] -translate-x-[5.3%] rounded-b-xl border border-t-0"
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
        className="absolute -bottom-6 right-[-2%] w-[23%] overflow-hidden rounded-[1.5rem] border p-1.5 shadow-soft sm:w-[21%]"
        style={{ borderColor: "rgba(255,255,255,0.16)", background: "#1a1a1f" }}
      >
        <div
          className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.1rem]"
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
