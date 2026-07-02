"use client";

import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-[1160px] mx-auto px-5 sm:px-8 md:px-12 py-24">
      <Reveal className="mb-11">
        <span className="eyebrow">TESTIMONIALS</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
          What Clients Say <span className="grad-text">About Me.</span>
        </h2>
      </Reveal>

      <Reveal>
        <div className="max-w-[760px] mx-auto text-center rounded-[26px] border p-9 sm:p-14 bg-gradient-to-br from-surface-2 to-surface"
             style={{ borderColor: "var(--border)" }}>
          <span className="font-display text-[4.5rem] leading-[0.5] text-brand inline-block mb-5">“</span>
          <p className="text-[clamp(1.05rem,2vw,1.3rem)] mb-7">
            Tayyab understood exactly what we needed and delivered a beautiful, fast store plus an
            AI chatbot that cut our support load in half. Reliable, sharp, and a pleasure to work with.
          </p>
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-[52px] h-[52px] rounded-full grid place-items-center bg-grad text-bg font-display font-bold">JC</div>
            <div className="text-left">
              <strong className="block">James Carter</strong>
              <span className="text-mute text-[0.85rem]">CEO, TechVision</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
