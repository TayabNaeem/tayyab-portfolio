/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { CALEDONIA, STORES, AGENTS } from "@/lib/site";
import { section, eyebrow, h2, pill } from "./styles";

// Six stores on the home page, with shorter one-line descriptions than /work.
const HOME_STORES = [
  ["SoundSkins Global", "Car acoustic kits matched to each vehicle"],
  ["Elite Auto Gear", "Car audio, amps and install accessories"],
  ["Curated Chrome", "Statement chrome and silver jewellery"],
  ["Chicago Fragrance", "Designer, niche and rare scents"],
  ["Haus", "Performance and lifestyle menswear"],
  ["KIAURA Eyewear", "Vintage and designer frames"],
].map(([name, desc]) => ({ ...STORES.find((s) => s.name === name), desc }));

const HOME_AGENTS = [
  ["DM Closer: Instagram sales agent", "AI chatbot", "Human-paced DM replies for a car dealership, with qualified leads sent straight to the CRM."],
  ["Bilingual dental front desk", "AI chatbot", "English and Spanish assistant that books appointments into the clinic calendar."],
  ["AI interview & candidate scoring", "Automation", "Chat interviews, resume parsing and 100-point scoring, filed straight into Notion."],
].map(([name, cat, desc]) => ({ ...AGENTS.find((a) => a.name === name), cat, desc }));

const groupHead = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: 12,
  borderBottom: "1px solid var(--line)",
  paddingBottom: 12,
};
const groupTitle = { fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" };

export default function FeaturedWork() {
  return (
    <section id="work" style={section}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 700 }}>
          <span style={eyebrow}>Selected work · 23 projects</span>
          <h2 style={h2}>Stores, sites and AI agents that are live and earning.</h2>
        </div>
        <Link
          href="/work"
          style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, border: "1px solid var(--ink)", textDecoration: "none", fontWeight: 600 }}
        >
          All projects →
        </Link>
      </div>

      {/* Featured: Caledonia */}
      <article
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", background: "var(--night)", color: "var(--night-text)", borderRadius: 28, overflow: "hidden" }}
      >
        <div style={{ position: "relative", minHeight: 420, background: "#0B0B0C" }}>
          <img
            src={CALEDONIA.preview}
            alt="Caledonia Chauffeur Group preview: full wordmark over the Edinburgh skyline"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }}
          />
        </div>
        <div style={{ padding: "clamp(28px, 4vw, 52px)", display: "flex", flexDirection: "column", gap: 18, justifyContent: "center" }}>
          <span style={{ ...eyebrow, color: "var(--accent)" }}>Featured · Custom website</span>
          <h3 style={{ fontWeight: 800, fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1, letterSpacing: "-0.03em" }}>{CALEDONIA.name}</h3>
          <p style={{ margin: 0, color: "var(--night-muted)" }}>{CALEDONIA.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Custom build", "Booking enquiries", "SEO"].map((t) => (
              <span key={t} style={pill}>{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <a
              href={CALEDONIA.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tn-btn-primary"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 22px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
            >
              Visit the live site ↗
            </a>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--night-muted)" }}>{CALEDONIA.tools}</span>
          </div>
        </div>
      </article>

      {/* Stores: compact logo cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={groupHead}>
          <h3 style={groupTitle}>Shopify stores</h3>
          <Link href="/work" style={{ fontWeight: 600, fontSize: 14 }}>See all 14 →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 16 }}>
          {HOME_STORES.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: 16 }}
            >
              <span
                style={{ display: "grid", placeItems: "center", flex: "none", width: 112, height: 56, padding: "8px 12px", boxSizing: "border-box", borderRadius: 12, border: "1px solid var(--line)", background: s.logoBg }}
              >
                <img src={s.logo} alt={`${s.name} logo`} style={{ display: "block", maxWidth: "100%", maxHeight: 30, width: "auto", height: "auto", objectFit: "contain" }} />
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0, flex: 1 }}>
                <span className="tn-display" style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em" }}>{s.name}</span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{s.desc}</span>
              </span>
              <span style={{ fontSize: 16, color: "var(--muted)" }} aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* AI agents: image cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={groupHead}>
          <h3 style={groupTitle}>AI agents &amp; automations</h3>
          <Link href="/work" style={{ fontWeight: 600, fontSize: 14 }}>See all 8 →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20 }}>
          {HOME_AGENTS.map((a) => (
            <Link
              key={a.name}
              href="/work"
              style={{ display: "flex", flexDirection: "column", textDecoration: "none", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, overflow: "hidden" }}
            >
              <span style={{ position: "relative", display: "block", aspectRatio: "16 / 9", overflow: "hidden", background: "#1E1F22" }}>
                <img src={a.cover} alt={`${a.name} workflow`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <span style={{ position: "absolute", left: 14, top: 14, background: "var(--surface)", color: "var(--ink)", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>{a.cat}</span>
              </span>
              <span style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <span className="tn-display" style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{a.name}</span>
                <span style={{ color: "var(--muted)", fontSize: 15 }}>{a.desc}</span>
                <span style={{ marginTop: "auto", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, borderTop: "1px dashed var(--line)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-text)" }}>{a.result}</span>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>Case study →</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
