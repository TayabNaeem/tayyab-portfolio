import Link from "next/link";
import CountUp from "@/components/site/CountUp";
import { CONTACT, PHOTO, STATS } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Tayyab Naeem is a digital marketing expert who builds: Shopify stores, custom websites, AI chat and voice agents, ad campaigns and the automations that tie them together.",
};

const TRACK = [
  { count: "14 live stores", title: "Shopify stores", desc: "Custom themes and Liquid for brands like SoundSkins, Curated Chrome and Cybex." },
  { count: "1 flagship site", title: "Custom websites", desc: "Caledonia Chauffeur Group: a premium, custom-built site with a booking enquiry flow." },
  { count: "6 agents live", title: "AI chat & voice agents", desc: "Instagram sales agents, bilingual booking assistants and a voice coach." },
  { count: "15 automations", title: "Workflow automation", desc: "n8n systems for leads, bookings, hiring and outreach that run without anyone pressing a button." },
  { count: "Ongoing", title: "Meta ads & growth", desc: "Campaigns with clean tracking that feed the stores and funnels above." },
];

const TOOLS = [
  { group: "Websites", items: ["Shopify", "Liquid", "Next.js", "WordPress", "WooCommerce", "Elementor"] },
  { group: "AI agents", items: ["Botpress", "Voiceflow", "Vapi", "OpenAI", "Mistral", "RAG"] },
  { group: "Automation", items: ["n8n", "Make.com", "Zapier", "APIs", "Google Sheets", "Notion"] },
  { group: "Marketing", items: ["Meta Ads", "Pixel & CAPI", "A/B testing", "Analytics"] },
];

const HOW = [
  { n: "01", title: "You talk to me directly", desc: "No account managers or hand-offs. The person on the call writes the code.", dark: true },
  { n: "02", title: "Marketing first, then code", desc: "Every page and bot is designed around what makes your customers buy, not just how it looks." },
  { n: "03", title: "Built for your team", desc: "Editable sections and a recorded handover, so you can change things without calling me." },
];

const mono = { fontFamily: "var(--font-mono)" };
const display = { fontFamily: "var(--font-display), 'Segoe UI', sans-serif" };
const eyebrow = { ...mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-text)" };
const h2 = { ...display, margin: 0, fontWeight: 800, fontSize: "clamp(36px, 4.8vw, 60px)", lineHeight: 1, letterSpacing: "-0.035em" };
const section = (top, bottom = 0) => ({ maxWidth: 1240, margin: "0 auto", padding: `${top}px 24px ${bottom}px` });

export default function AboutPage() {
  return (
    <main className="tn" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      {/* Hero: photo on a neutral panel */}
      <section
        style={{ ...section(72), display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 56, alignItems: "center" }}
      >
        <div
          style={{ position: "relative", aspectRatio: "4 / 5", maxWidth: "100%", borderRadius: 30, overflow: "hidden", background: "var(--tint)", border: "1px solid var(--line)" }}
        >
          <div
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)", backgroundSize: "48px 48px", opacity: 0.55 }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTO}
            alt="Tayyab Naeem in a dark suit and glasses"
            style={{ position: "absolute", left: 0, right: 0, bottom: 0, margin: "0 auto", height: "94%", width: "auto", maxWidth: "100%", objectFit: "contain", objectPosition: "50% 100%" }}
          />
          <span
            style={{ ...mono, position: "absolute", left: 18, bottom: 18, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 999, padding: "8px 14px", fontSize: 12 }}
          >
            Tayyab Naeem · Digital marketing expert
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          <span style={eyebrow}>About · Digital marketing expert · Shopify, AI &amp; automation</span>
          <h1
            style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(44px, 6.4vw, 92px)", lineHeight: 0.93, letterSpacing: "-0.045em", textWrap: "balance" }}
          >
            I&apos;m Tayyab. I make websites that sell and systems that run themselves.
          </h1>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 19, maxWidth: "32em" }}>
            I&apos;m a digital marketing expert who builds. Over four years I&apos;ve shipped Shopify stores, custom websites, AI chat and voice agents, ad campaigns and the automations that tie them together, for brands from car audio to law firms.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/contact"
              className="tn-btn-primary"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 26px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
            >
              Work with me
            </Link>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 26px", borderRadius: 999, border: "1px solid var(--ink)", textDecoration: "none", fontWeight: 600 }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Stats: count up when scrolled into view */}
      <section style={section(80)}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 26, overflow: "hidden" }}
        >
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: 28, borderRight: i < STATS.length - 1 ? "1px solid var(--line)" : "none" }}>
              <b style={{ ...display, display: "block", fontSize: 60, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
                <CountUp to={s.value} />
              </b>
              <span style={{ color: "var(--muted)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section
        style={{ ...section(112), display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 48, alignItems: "start" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={eyebrow}>What I&apos;ve built</span>
          <h2 style={{ ...h2, textWrap: "balance" }}>From storefronts to AI that answers the phone.</h2>
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Each step added a skill clients kept asking for. Today they all work together on one project.
          </p>
        </div>
        <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", borderLeft: "2px solid var(--line)" }}>
          {TRACK.map((t) => (
            <li key={t.title} style={{ position: "relative", padding: "0 0 32px 32px", display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: -8, top: 6, width: 14, height: 14, borderRadius: "50%", background: "var(--surface)", border: "3px solid var(--ink)" }}
              />
              <span style={{ ...mono, fontSize: 12, color: "var(--accent-text)" }}>{t.count}</span>
              <b style={{ ...display, fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{t.title}</b>
              <span style={{ color: "var(--muted)", fontSize: 15 }}>{t.desc}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* How I work */}
      <section style={{ ...section(112), display: "flex", flexDirection: "column", gap: 36 }}>
        <h2 style={h2}>How I work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
          {HOW.map((h) => (
            <div
              key={h.n}
              style={
                h.dark
                  ? { background: "var(--night)", color: "var(--night-text)", borderRadius: 24, padding: 30, display: "flex", flexDirection: "column", gap: 10 }
                  : { background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 24, padding: 30, display: "flex", flexDirection: "column", gap: 10 }
              }
            >
              <span style={{ ...mono, fontSize: 12, color: h.dark ? "var(--accent)" : "var(--accent-text)" }}>{h.n}</span>
              <h3 style={{ ...display, margin: 0, fontWeight: 700, fontSize: 26, lineHeight: 1.1 }}>{h.title}</h3>
              <p style={{ margin: 0, color: h.dark ? "var(--night-muted)" : "var(--muted)", fontSize: 15 }}>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toolkit */}
      <section style={{ ...section(112), display: "flex", flexDirection: "column", gap: 32 }}>
        <h2 style={h2}>The toolkit</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
          {TOOLS.map((g) => (
            <div
              key={g.group}
              style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: 22, display: "flex", flexDirection: "column", gap: 12 }}
            >
              <span style={eyebrow}>{g.group}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.items.map((t) => (
                  <span key={t} style={{ background: "var(--tint)", borderRadius: 999, padding: "5px 12px", fontSize: 14 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={section(112, 96)}>
        <div
          style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 30, padding: "clamp(28px, 5vw, 64px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}
        >
          <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1, letterSpacing: "-0.035em", maxWidth: "14em" }}>
            Let&apos;s see what your business needs.
          </h2>
          <Link
            href="/contact"
            className="tn-btn-primary"
            style={{ display: "inline-flex", alignItems: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
          >
            Book a free call
          </Link>
        </div>
      </section>
    </main>
  );
}
