"use client";

import { N8nLogo } from "./BrandLogos";

/**
 * Tool logos. The PNGs are the official dark marks, trimmed to their bounding
 * box, so they get inverted to read as light on the dark background. n8n has no
 * supplied file, so its drawn SVG is used and only desaturated.
 */
const LOGOS = [
  { name: "Shopify", src: "/assets/logos/shopify.png", ratio: 3.45 },
  { name: "Botpress", src: "/assets/logos/botpress.png", ratio: 3.81 },
  { name: "Voiceflow", src: "/assets/logos/voiceflow.png", ratio: 5.49 },
  { name: "Vapi", src: "/assets/logos/vapi.png", ratio: 3.13 },
  { name: "n8n", Logo: N8nLogo },
  { name: "Make", src: "/assets/logos/make.png", ratio: 4.84 },
  { name: "Zapier", src: "/assets/logos/zapier.png", ratio: 3.67 },
  { name: "Zoho", src: "/assets/logos/zoho.png", ratio: 2.33 },
];

const H = 34; // rendered logo height in px

function Item({ item, hidden }) {
  const shared =
    "shrink-0 opacity-45 transition-opacity duration-300 hover:opacity-100";

  if (item.src) {
    return (
      <span aria-hidden={hidden} title={item.name} className={shared}>
        <img
          src={item.src}
          alt={hidden ? "" : `${item.name} logo`}
          width={Math.round(H * item.ratio)}
          height={H}
          style={{ height: H, width: "auto", filter: "grayscale(1) invert(1)" }}
        />
      </span>
    );
  }

  const { Logo } = item;
  return (
    <span
      aria-hidden={hidden}
      title={item.name}
      className={shared}
      style={{ filter: "grayscale(1) brightness(2.6)" }}
    >
      {/* BrandLogos components only accept className, so size via a class */}
      <Logo className="h-[34px] w-auto" />
    </span>
  );
}

/**
 * Full-bleed grayscale logo bar.
 *
 * The set renders twice and the track translates by -50%, with each set padded
 * to exactly half the track width, so the loop is seamless. Logo size and gap
 * keep one set wider than a typical viewport, so each logo shows only once.
 */
export default function LogoMarquee() {
  return (
    <div
      className="group relative w-full min-w-0 overflow-hidden py-2"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)",
      }}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 items-center gap-32 pr-32">
            {LOGOS.map((item) => (
              <Item key={`${set}-${item.name}`} item={item} hidden={set === 1} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
