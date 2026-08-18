"use client";

import Link from "next/link";
import { Mail, Send } from "lucide-react";
import Reveal from "./Reveal";
import { WhatsappIcon } from "./SocialIcons";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "./Contact";

/**
 * The closing section is a conversation, which is the thing being sold on half
 * this site anyway. The composer at the bottom is not a real input — it is the
 * link through to the brief form, dressed as the next message in the thread.
 */
const THREAD = [
  { from: "them", text: "Need a Shopify store that actually converts." },
  { from: "me", text: "Send me the brief. You get a fixed scope and a fixed price before anything starts." },
  { from: "them", text: "How fast?" },
  { from: "me", text: "Live in two weeks." },
];

function Bubble({ msg }) {
  const mine = msg.from === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[86%] rounded-2xl px-4 py-2.5 text-[0.93rem] leading-[1.5] sm:max-w-[78%] ${
          mine ? "bg-grad font-medium text-bg" : "text-[#e7e7ea]"
        }`}
        style={
          mine
            ? { borderBottomRightRadius: "6px" }
            : {
                borderBottomLeftRadius: "6px",
                background: "#1c1c21",
                border: "1px solid var(--border)",
              }
        }
      >
        {msg.text}
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[460px] w-[460px] max-w-[110vw] translate-x-1/3 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      <div className="shell section-y relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* the pitch */}
          <Reveal>
            <span className="eyebrow">NEXT STEP</span>
            <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.035em]">
              Start the <span className="grad-text">conversation.</span>
            </h2>
            <p className="lead mt-5 max-w-[440px]">
              Tell me what you are building. You will get a straight answer on scope, price and
              timeline, usually the same day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary px-7 py-3.5">
                Send a brief <Send size={15} strokeWidth={2.2} />
              </Link>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Email ${CONTACT_EMAIL}`}
                title={CONTACT_EMAIL}
                className="grid h-12 w-12 place-items-center rounded-full border text-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-white"
                style={{ borderColor: "var(--border-2)" }}
              >
                <Mail size={18} strokeWidth={1.9} />
              </a>

              <a
                href={`https://wa.me/${CONTACT_PHONE_E164.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${CONTACT_PHONE_DISPLAY}`}
                title={CONTACT_PHONE_DISPLAY}
                className="grid h-12 w-12 place-items-center rounded-full border text-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-white"
                style={{ borderColor: "var(--border-2)" }}
              >
                <WhatsappIcon width={18} height={18} />
              </a>
            </div>
          </Reveal>

          {/* the thread */}
          <Reveal delay={0.1}>
            <div
              className="overflow-hidden rounded-[24px] border shadow-soft"
              style={{ borderColor: "var(--border-2)", background: "#141418" }}
            >
              {/* header */}
              <div
                className="flex items-center gap-3 border-b px-5 py-4"
                style={{ borderColor: "var(--border)", background: "#17171c" }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-grad font-display text-[0.82rem] font-bold text-bg">
                  TN
                </span>
                <div className="min-w-0">
                  <strong className="block font-display text-[0.95rem] font-semibold">
                    Tayyab Naeem
                  </strong>
                  <span className="flex items-center gap-1.5 text-[0.8rem] text-dim">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                    </span>
                    Open for work
                  </span>
                </div>
              </div>

              {/* messages */}
              <div className="flex flex-col gap-3 px-5 py-6">
                {THREAD.map((m, i) => (
                  <Bubble key={i} msg={m} />
                ))}

                {/* typing, as if the next line is yours to write */}
                <div className="flex justify-start">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-2xl px-4 py-3"
                    style={{
                      background: "#1c1c21",
                      border: "1px solid var(--border)",
                      borderBottomLeftRadius: "6px",
                    }}
                    aria-label="typing"
                  >
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-brand"
                        style={{ animation: `typing 1.3s ${d * 0.18}s ease-in-out infinite` }}
                      />
                    ))}
                  </span>
                </div>
              </div>

              {/* composer — the whole bar is the link through to the form */}
              <Link
                href="/contact"
                className="group flex items-center gap-3 border-t px-4 py-4 transition-colors"
                style={{ borderColor: "var(--border)", background: "#17171c" }}
              >
                <span
                  className="flex-1 truncate rounded-full border px-4 py-2.5 text-[0.92rem] text-dim transition-colors group-hover:border-brand group-hover:text-white"
                  style={{ borderColor: "var(--border-2)", background: "#111114" }}
                >
                  Tell me about your project
                  <span className="cta-caret ml-0.5 inline-block w-px align-middle">|</span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-grad text-bg transition-transform duration-300 group-hover:scale-105">
                  <Send size={17} strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
