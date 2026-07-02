"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  const [note, setNote] = useState({ text: "", ok: false });

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      setNote({ text: "Please fill in all fields with a valid email.", ok: false });
      return;
    }
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:commerceiwp@gmail.com?subject=${subject}&body=${body}`;
    setNote({ text: "Thanks! Opening your email app to send the message…", ok: true });
    form.reset();
  };

  return (
    <section id="contact" className="max-w-[820px] mx-auto px-5 sm:px-8 md:px-12 py-24">
      <Reveal>
        <div className="rounded-[26px] border p-8 sm:p-14 text-center shadow-soft bg-gradient-to-br from-surface-2 to-surface"
             style={{ borderColor: "var(--border-2)" }}>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2 className="text-[clamp(1.8rem,4vw,2.7rem)]">
            Let&apos;s build something <span className="grad-text">that grows your business.</span>
          </h2>
          <p className="text-dim max-w-[480px] mx-auto mt-3.5 mb-8">
            Have a store to launch, a chatbot to build, or a workflow to automate? Let&apos;s talk.
          </p>

          <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="relative">
              <input id="name" name="name" type="text" placeholder=" " required className="field-input peer" />
              <label htmlFor="name" className="pointer-events-none absolute left-4 top-[15px] text-mute text-[0.95rem] transition-all peer-focus:top-1.5 peer-focus:text-[0.72rem] peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.72rem]">Your Name</label>
            </div>
            <div className="relative">
              <input id="email" name="email" type="email" placeholder=" " required className="field-input peer" />
              <label htmlFor="email" className="pointer-events-none absolute left-4 top-[15px] text-mute text-[0.95rem] transition-all peer-focus:top-1.5 peer-focus:text-[0.72rem] peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.72rem]">Your Email</label>
            </div>
            <div className="relative sm:col-span-2">
              <textarea id="message" name="message" rows={4} placeholder=" " required className="field-input peer resize-y" />
              <label htmlFor="message" className="pointer-events-none absolute left-4 top-[15px] text-mute text-[0.95rem] transition-all peer-focus:top-1.5 peer-focus:text-[0.72rem] peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.72rem]">Tell me about your project</label>
            </div>
            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-primary w-full sm:col-span-2">
              Send Message <span className="text-[0.78rem]">➤</span>
            </motion.button>
            {note.text && (
              <p className={`sm:col-span-2 text-[0.88rem] ${note.ok ? "text-green-400" : "text-brand-deep"}`}>{note.text}</p>
            )}
          </form>

          <div className="mt-7">
            <a href="mailto:commerceiwp@gmail.com" className="text-dim hover:text-brand-light transition-colors">
              ✉️ commerceiwp@gmail.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
