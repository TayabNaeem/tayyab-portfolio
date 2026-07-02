"use client";

import { useState } from "react";

/**
 * Circular avatar use of the profile cutout.
 * `zoom` + `focus` let us frame the face inside a round crop.
 */
export default function ProfileImage({
  className = "",
  fallbackClass = "text-[3rem]",
  zoom = 1,
  focus = "50% 12%",
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative grid place-items-center overflow-hidden ${className}`}>
      {!failed && (
        <img
          src="/assets/profile.png?v=3"
          alt="Tayyab Naeem"
          onError={() => setFailed(true)}
          style={{ transform: `scale(${zoom})`, transformOrigin: focus }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {failed && (
        <span className={`font-display font-bold text-bg/85 ${fallbackClass}`}>TN</span>
      )}
    </div>
  );
}
