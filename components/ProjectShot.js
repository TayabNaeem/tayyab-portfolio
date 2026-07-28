"use client";

import { useState } from "react";
import { StoreMockup } from "./Mockups";

/**
 * Homepage preview for a project card.
 *
 * Pass `shot` to use your own screenshot (e.g. "/assets/projects/cybex.jpg").
 * Otherwise the live site is rendered on demand by thum.io.
 * If either fails to load, the generated SVG store mockup is shown.
 */
export default function ProjectShot({ id, url, name, shot, accent, accent2 }) {
  const [failed, setFailed] = useState(false);

  if (failed) return <StoreMockup accent={accent} accent2={accent2} id={id} />;

  const src = shot || `https://image.thum.io/get/width/1200/crop/750/${url}`;

  return (
    <img
      src={src}
      alt={`${name} homepage`}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top"
    />
  );
}
