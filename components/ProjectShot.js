"use client";

import { useState } from "react";
import { StoreMockup } from "./Mockups";

/**
 * Homepage preview for a project card.
 *
 * Pass `shot` with a screenshot path (e.g. "/assets/projects/cybex.jpg") to show
 * the real storefront. Without it — or if the file fails to load — a generated
 * SVG store mockup is rendered instead.
 *
 * Note: automated screenshot services (thum.io, mShots) were tried and returned
 * blank or placeholder captures, so real screenshots have to be supplied here.
 */
export default function ProjectShot({ id, name, shot, accent, accent2 }) {
  const [failed, setFailed] = useState(false);

  if (!shot || failed) {
    return <StoreMockup accent={accent} accent2={accent2} id={id} />;
  }

  return (
    <img
      src={shot}
      alt={`${name} homepage`}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-top"
    />
  );
}
