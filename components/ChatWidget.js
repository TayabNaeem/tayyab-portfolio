"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, ChevronLeft } from "lucide-react";
import { answer, ESCALATING, SUGGESTIONS } from "@/lib/chatbot";

const SERVICES = [
  "Shopify Development",
  "WordPress Development",
  "AI Chatbot & Voice Agents",
  "Automations",
  "Meta Ads",
  "Landing Pages",
  "Something else",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const REPLY_MS = 700;

/** Sends to the lead route. Never throws: a failed notification must not break the chat. */
async function notify(payload) {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch {
    return { ok: false, delivered: false };
  }
}

function Bubble({ from, text }) {
  const bot = from === "bot";
  return (
    <div className={`flex ${bot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[0.9rem] leading-[1.55] ${
          bot ? "text-[#e7e7ea]" : "bg-grad font-medium text-bg"
        }`}
        style={
          bot
            ? { background: "#1c1c21", border: "1px solid var(--border)", borderBottomLeftRadius: 6 }
            : { borderBottomRightRadius: 6 }
        }
      >
        {text}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState("form"); // form | chat
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICES[0],
    details: "",
  });
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);

  const threadRef = useRef(null);
  const inputRef = useRef(null);
  const timers = useRef([]);

  // clear any pending reply timers on unmount
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // keep the newest message in view
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, stage]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const set = (k) => (e) => {
    setLead((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const next = {};
    if (!lead.name.trim()) next.name = "Your name, please.";
    if (!EMAIL_RE.test(lead.email.trim())) next.email = "That email does not look right.";
    if (!lead.details.trim()) next.details = "A line or two about the project.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    await notify({ kind: "lead", lead });
    setSending(false);

    setStage("chat");
    setMessages([
      {
        from: "bot",
        text: `Thanks ${lead.name.trim().split(/\s+/)[0]}. Tayyab has your details and will come back to you personally.\n\nIn the meantime, ask me anything about the services, how a project runs, or the work behind this site.`,
      },
    ]);
    setTimeout(() => inputRef.current?.focus(), 80);
  };

  const send = (raw) => {
    const text = String(raw || "").trim();
    if (!text || typing) return;

    const history = [...messages, { from: "user", text }];
    setMessages(history);
    setDraft("");
    setTyping(true);

    const { id, reply } = answer(text);

    // a beat before replying, so it does not feel like a lookup table
    const t = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: reply }]);

      // pricing and "put me through" both get emailed to Tayyab
      if (ESCALATING.has(id)) {
        notify({ kind: id, lead, question: text, transcript: history });
      }
    }, REPLY_MS);
    timers.current.push(t);
  };

  return (
    <>
      {/* launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Chat with the assistant"}
        className="fixed bottom-5 right-5 z-[9998] grid h-14 w-14 place-items-center rounded-full bg-grad text-bg shadow-glow transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
      >
        {open ? <X size={22} strokeWidth={2.2} /> : <MessageSquare size={22} strokeWidth={2} />}
        {!open && (
          <span
            aria-hidden
            className="absolute right-0 top-0 flex h-3 w-3"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-80" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-light" />
          </span>
        )}
      </button>

      {/* panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Tayyab's assistant"
          className="slide-in fixed bottom-[5.5rem] right-3 z-[9997] flex w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[22px] border shadow-soft sm:bottom-[6.5rem] sm:right-7"
          style={{
            borderColor: "var(--border-2)",
            background: "#141418",
            maxHeight: "min(34rem, calc(100vh - 8rem))",
          }}
        >
          {/* header */}
          <div
            className="flex shrink-0 items-center gap-3 border-b px-4 py-3.5"
            style={{ borderColor: "var(--border)", background: "#17171c" }}
          >
            {stage === "chat" && (
              <button
                type="button"
                onClick={() => setStage("form")}
                aria-label="Back to the form"
                className="grid h-7 w-7 place-items-center rounded-full text-dim transition-colors hover:text-white"
              >
                <ChevronLeft size={17} strokeWidth={2.2} />
              </button>
            )}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-grad font-display text-[0.78rem] font-bold text-bg">
              TN
            </span>
            <div className="min-w-0 flex-1">
              <strong className="block truncate font-display text-[0.92rem] font-semibold">
                Tayyab&apos;s assistant
              </strong>
              <span className="flex items-center gap-1.5 text-[0.76rem] text-dim">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                Replies in a few seconds
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-7 w-7 place-items-center rounded-full text-dim transition-colors hover:text-white"
            >
              <X size={16} strokeWidth={2.2} />
            </button>
          </div>

          {stage === "form" ? (
            /* lead capture */
            <form onSubmit={submitForm} className="flex min-h-0 flex-1 flex-col overflow-y-auto p-4">
              <p className="body mb-4 text-[0.9rem]">
                Leave your details and Tayyab will get back to you. Then I can answer whatever you
                want to know in the meantime.
              </p>

              <div className="flex flex-col gap-2.5">
                <div>
                  <input
                    value={lead.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    aria-label="Your name"
                    autoComplete="name"
                    className="field-input !py-2.5 !text-[0.9rem]"
                  />
                  {errors.name && <span className="mt-1 block text-[0.76rem] text-red-400">{errors.name}</span>}
                </div>

                <div>
                  <input
                    value={lead.email}
                    onChange={set("email")}
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    autoComplete="email"
                    className="field-input !py-2.5 !text-[0.9rem]"
                  />
                  {errors.email && <span className="mt-1 block text-[0.76rem] text-red-400">{errors.email}</span>}
                </div>

                <input
                  value={lead.phone}
                  onChange={set("phone")}
                  type="tel"
                  placeholder="Phone (optional)"
                  aria-label="Phone"
                  autoComplete="tel"
                  className="field-input !py-2.5 !text-[0.9rem]"
                />

                <select
                  value={lead.service}
                  onChange={set("service")}
                  aria-label="What you need"
                  className="field-input !py-2.5 !text-[0.9rem]"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s} style={{ background: "#17171c" }}>
                      {s}
                    </option>
                  ))}
                </select>

                <div>
                  <textarea
                    value={lead.details}
                    onChange={set("details")}
                    rows={3}
                    placeholder="What are you building?"
                    aria-label="Project details"
                    className="field-input !py-2.5 !text-[0.9rem] resize-none"
                  />
                  {errors.details && (
                    <span className="mt-1 block text-[0.76rem] text-red-400">{errors.details}</span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn btn-primary mt-4 w-full disabled:opacity-70"
              >
                {sending ? "Sending…" : "Start the chat"}
                {!sending && <Send size={15} strokeWidth={2.2} />}
              </button>

              <p className="small mt-3 text-center text-[0.74rem]">
                Your details go to Tayyab only.
              </p>
            </form>
          ) : (
            /* conversation */
            <>
              <div ref={threadRef} className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto p-4">
                {messages.map((m, i) => (
                  <Bubble key={i} from={m.from} text={m.text} />
                ))}

                {typing && (
                  <div className="flex justify-start">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-2xl px-3.5 py-3"
                      style={{ background: "#1c1c21", border: "1px solid var(--border)", borderBottomLeftRadius: 6 }}
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
                )}

                {messages.length === 1 && !typing && (
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="rounded-full border px-3 py-1.5 text-[0.78rem] text-dim transition-colors hover:border-brand hover:text-white"
                        style={{ borderColor: "var(--border-2)" }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* composer */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(draft);
                }}
                className="flex shrink-0 items-center gap-2 border-t p-3"
                style={{ borderColor: "var(--border)", background: "#17171c" }}
              >
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Ask me anything"
                  aria-label="Your message"
                  className="field-input !py-2.5 !text-[0.9rem]"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || typing}
                  aria-label="Send"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-grad text-bg transition-transform duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                >
                  <Send size={16} strokeWidth={2.2} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
