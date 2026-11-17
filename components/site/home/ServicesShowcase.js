/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { STORES } from "@/lib/site";
import { section, eyebrow, h2, pill, check } from "./styles";

const logoOf = (name) => STORES.find((s) => s.name === name);
const LOGO_TILES = [
  { ...logoOf("SoundSkins Global"), pad: "18%" },
  { ...logoOf("Curated Chrome"), pad: "16%" },
  { ...logoOf("KIAURA Eyewear"), pad: "18%" },
];

const MORE = [
  { num: "03", title: "Automations", desc: "Workflows that sync orders, stock, leads and alerts across your tools.", tools: "n8n · Make · Zapier" },
  { num: "04", title: "WordPress", desc: "Custom themes, WooCommerce and Elementor sites your team can maintain.", tools: "WooCommerce · Elementor" },
  { num: "05", title: "Meta ads", desc: "Campaigns built on creative testing, clean tracking and real ROAS.", tools: "Pixel · CAPI" },
  { num: "06", title: "Landing pages", desc: "One offer, one page, wired to analytics from day one.", tools: "Next.js · A/B tests" },
];

const iconBox = { width: 52, height: 52, borderRadius: 14, display: "grid", placeItems: "center" };
const bigTitle = { fontWeight: 800, fontSize: 34, letterSpacing: "-0.03em", lineHeight: 1 };

export default function ServicesShowcase() {
  return (
    <section id="services" style={section}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 24, alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={eyebrow}>Services</span>
          <h2 style={h2}>Everything your store needs, from one developer.</h2>
        </div>
        <p style={{ margin: 0, color: "var(--muted)", maxWidth: "32em" }}>
          Design, build, AI and automation under one roof, so nothing gets lost between agencies. Pick one service or stack them.
        </p>
      </div>

      {/* Two flagship services */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: 20 }}>
        <article style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 28, padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
            <span style={{ ...iconBox, background: "var(--ink)", color: "var(--bg)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></svg>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>01 · most booked</span>
          </div>
          <h3 style={bigTitle}>Shopify stores &amp; custom websites</h3>
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Custom themes, Liquid sections and Next.js builds designed to load fast, look premium and convert. 14 live Shopify stores and counting.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
            {LOGO_TILES.map((t) => (
              <img
                key={t.name}
                src={t.logo}
                alt={`${t.name} logo`}
                style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "contain", padding: t.pad, boxSizing: "border-box", background: t.logoBg, borderRadius: 12, border: "1px solid var(--line)" }}
              />
            ))}
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "8px 16px", fontSize: 15 }}>
            {["Custom theme design", "Speed & Core Web Vitals", "Product pages that convert", "Apps & integrations"].map((i) => (
              <li key={i} style={{ display: "flex", gap: 8 }}><span style={check} aria-hidden="true">✓</span>{i}</li>
            ))}
          </ul>
          <Link href="/services" style={{ marginTop: "auto", fontWeight: 600 }}>Explore web design →</Link>
        </article>

        <article style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 28, padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
            <span style={{ ...iconBox, background: "var(--night-2)", border: "1px solid var(--night-line)", color: "var(--accent)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 9h8M8 13h5" /></svg>
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--night-muted)" }}>02 · fastest growing</span>
          </div>
          <h3 style={bigTitle}>AI chatbots &amp; voice agents</h3>
          <p style={{ margin: 0, color: "var(--night-muted)" }}>
            Agents that answer customers, qualify leads and book appointments in any language, on your site, Instagram or the phone.
          </p>
          <div style={{ background: "var(--night-2)", border: "1px solid var(--night-line)", borderRadius: 16, padding: 14, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
            <span style={{ alignSelf: "flex-end", maxWidth: "80%", background: "var(--night-text)", color: "var(--night)", padding: "8px 12px", borderRadius: "12px 12px 4px 12px" }}>¿Tienen cita el jueves?</span>
            <span style={{ alignSelf: "flex-start", maxWidth: "86%", background: "var(--night)", border: "1px solid var(--night-line)", padding: "8px 12px", borderRadius: "12px 12px 12px 4px" }}>Sí, tenemos 10:30 y 15:00. ¿Cuál le reservo?</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--night-muted)" }}>Bilingual dental front desk · Botpress + Cal.com</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Botpress", "Voiceflow", "Vapi", "RAG"].map((t) => (
              <span key={t} style={pill}>{t}</span>
            ))}
          </div>
          <Link href="/services" style={{ marginTop: "auto", fontWeight: 600, color: "var(--night-text)" }}>Explore AI agents →</Link>
        </article>
      </div>

      {/* Four more services */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
        {MORE.map((s) => (
          <Link
            key={s.num}
            href="/services"
            style={{ display: "flex", flexDirection: "column", gap: 12, textDecoration: "none", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: 24 }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>{s.num}</span>
            <span className="tn-display" style={{ fontWeight: 700, fontSize: 23, letterSpacing: "-0.02em" }}>{s.title}</span>
            <span style={{ color: "var(--muted)", fontSize: 15 }}>{s.desc}</span>
            <span style={{ marginTop: "auto", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-text)" }}>{s.tools}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
