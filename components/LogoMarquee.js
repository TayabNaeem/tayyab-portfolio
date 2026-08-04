"use client";

import {
  ShopifyLogo, BotpressLogo, VoiceflowLogo, VapiLogo,
  N8nLogo, MakeLogo, ZapierLogo, ZohoLogo,
} from "./BrandLogos";

const LOGOS = [
  { Logo: ShopifyLogo, name: "Shopify" },
  { Logo: BotpressLogo, name: "Botpress" },
  { Logo: VoiceflowLogo, name: "Voiceflow" },
  { Logo: VapiLogo, name: "Vapi" },
  { Logo: N8nLogo, name: "n8n" },
  { Logo: MakeLogo, name: "Make" },
  { Logo: ZapierLogo, name: "Zapier" },
  { Logo: ZohoLogo, name: "Zoho" },
];

/**
 * Full-bleed grayscale logo bar.
 *
 * The set is rendered twice and the track translates by -50%, so the loop is
 * seamless. Logo size and gap are large enough that a single set is wider than
 * a typical viewport, which keeps each logo on screen only once at a time.
 * Colour returns on hover.
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
      {/* two identical sets, each exactly half the track, so -50% loops cleanly */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 items-center gap-32 pr-32">
            {LOGOS.map(({ Logo, name }) => (
              <span
                key={`${set}-${name}`}
                aria-hidden={set === 1}
                title={name}
                className="shrink-0 grayscale brightness-[1.7] opacity-40 transition duration-300 hover:grayscale-0 hover:brightness-100 hover:opacity-100"
              >
                <Logo className="h-11 w-auto" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
