"use client";

import { useState } from "react";
import Link from "next/link";
import { CALEDONIA, STORES, AGENTS, CATEGORY_LABELS, projectHref } from "@/lib/site";

const OPTIONS = [
  ["all", "All"],
  ["shopify", "Shopify"],
  ["ai", "AI chatbots & voice"],
  ["auto", "Automations"],
  ["custom", "Custom websites"],
];

const ALL = [CALEDONIA, ...STORES, ...AGENTS];
const isSite = (p) => p.cat === "shopify" || p.cat === "custom";
const domainOf = (url) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "");

const mono = { fontFamily: "var(--font-mono)" };
const display = { fontFamily: "var(--font-display), 'Segoe UI', sans-serif" };

function GroupHeading({ title, count }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, borderBottom: "1px solid var(--line)", paddingBottom: 12 }}>
      <h3 style={{ ...display, margin: 0, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>{title}</h3>
      <span style={{ ...mono, fontSize: 13, color: "var(--muted)" }}>{count} projects</span>
    </div>
  );
}

function SiteCard({ p }) {
  return (
    <article className="tn-card" style={{ display: "flex", flexDirection: "column", gap: 14, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 20, padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span
          style={{ display: "grid", placeItems: "center", height: 58, minWidth: 120, maxWidth: 170, padding: "10px 16px", boxSizing: "border-box", borderRadius: 14, border: "1px solid var(--line)", background: p.logoBg || "#FFFFFF" }}
        >
          {p.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.logo} alt={`${p.name} logo`} style={{ display: "block", maxWidth: "100%", maxHeight: 34, width: "auto", height: "auto", objectFit: "contain" }} />
          ) : (
            <span style={{ ...display, fontWeight: 800, fontSize: 20, letterSpacing: "0.12em", color: "#0D1117" }}>{p.name}</span>
          )}
        </span>
        <span style={{ border: "1px solid var(--line)", borderRadius: 999, padding: "3px 10px", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>
          {CATEGORY_LABELS[p.cat]}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <h4 style={{ ...display, margin: 0, fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          <Link href={projectHref(p)} className="tn-stretch">{p.name}</Link>
        </h4>
        <span style={{ ...mono, fontSize: 12, color: "var(--muted)" }}>{p.client}</span>
      </div>
      <p style={{ margin: 0, color: "var(--muted)", fontSize: 14, lineHeight: 1.55 }}>{p.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {p.tags.map((t) => (
          <span key={t} style={{ background: "var(--bg)", borderRadius: 999, padding: "3px 10px", fontSize: 12, color: "var(--muted)" }}>{t}</span>
        ))}
      </div>
      <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px dashed var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
        <span style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap" }}>View project →</span>
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="tn-above" style={{ ...mono, fontSize: 12, color: "var(--muted)", whiteSpace: "nowrap" }}>Visit live ↗</a>
      </div>
    </article>
  );
}

function AgentCard({ p }) {
  return (
    <article className="tn-card" style={{ display: "flex", flexDirection: "column", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, overflow: "hidden" }}>
      <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", background: "#1E1F22" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.cover} alt={`${p.name} workflow`} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <span style={{ position: "absolute", left: 14, top: 14, background: "var(--surface)", color: "var(--ink)", borderRadius: 999, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>
          {CATEGORY_LABELS[p.cat]}
        </span>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <span style={{ ...mono, fontSize: 12, color: "var(--muted)" }}>{p.client}</span>
        <h4 style={{ ...display, margin: 0, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
          <Link href={projectHref(p)} className="tn-stretch">{p.name}</Link>
        </h4>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 15 }}>{p.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 4 }}>
          {p.tags.map((t) => (
            <span key={t} style={{ border: "1px solid var(--line)", borderRadius: 999, padding: "3px 10px", fontSize: 12, color: "var(--muted)" }}>{t}</span>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px dashed var(--line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <span style={{ ...mono, fontSize: 12, color: "var(--accent-text)" }}>{p.result}</span>
          <span style={{ fontWeight: 600, fontSize: 14 }}>View project →</span>
        </div>
      </div>
    </article>
  );
}

export default function WorkGrid() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? ALL : ALL.filter((p) => p.cat === filter);
  const sites = visible.filter(isSite);
  const agents = visible.filter((p) => !isSite(p));

  return (
    <section className="tn-shell" style={{ paddingTop: 64, display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(30px, 3.6vw, 44px)", letterSpacing: "-0.03em" }}>All projects</h2>
        <div role="group" aria-label="Filter projects by type" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {OPTIONS.map(([key, label]) => {
            const on = key === filter;
            const count = key === "all" ? ALL.length : ALL.filter((p) => p.cat === key).length;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(key)}
                style={{
                  minHeight: 44, padding: "0 16px", borderRadius: 999, font: "inherit", fontSize: 14, fontWeight: 500, cursor: "pointer",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: on ? "var(--ink)" : "var(--surface)",
                  color: on ? "var(--bg)" : "var(--ink)",
                  border: `1px solid ${on ? "var(--ink)" : "var(--line)"}`,
                }}
              >
                {label} <span style={{ ...mono, opacity: 0.6, fontSize: 12 }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {sites.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <GroupHeading title="Websites & Shopify stores" count={sites.length} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
            {sites.map((p) => <SiteCard key={p.name} p={p} />)}
          </div>
        </div>
      )}

      {agents.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <GroupHeading title="AI agents & automations" count={agents.length} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: 20 }}>
            {agents.map((p) => <AgentCard key={p.name} p={p} />)}
          </div>
        </div>
      )}
    </section>
  );
}
