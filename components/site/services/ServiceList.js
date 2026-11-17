"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const imgBase = {
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: 14,
  border: "1px solid var(--night-line)",
  boxSizing: "border-box",
  display: "block",
};

function exampleImgStyle(ex) {
  return ex.logoBg
    ? { ...imgBase, objectFit: "contain", padding: "10% 22%", background: ex.logoBg }
    : { ...imgBase, objectFit: "cover", background: "var(--night-2)" };
}

export default function ServiceList({ services }) {
  const [open, setOpen] = useState(services[0]?.id ?? "");

  // Deep links like /services#ai open that row on load and on hash change.
  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (id && services.some((s) => s.id === id)) {
        setOpen(id);
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [services]);

  return (
    <div style={{ borderTop: "2px solid var(--ink)" }}>
      {services.map((s) => {
        const isOpen = s.id === open;
        const panelId = `panel-${s.id}`;
        return (
          <div key={s.id} id={s.id} style={{ borderBottom: "1px solid var(--line)", scrollMarginTop: 24 }}>
            <button
              type="button"
              className="row-btn"
              onClick={() => setOpen(isOpen ? "" : s.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                gap: "12px 32px",
                alignItems: "center",
                padding: "30px 0",
                background: "none",
                border: 0,
                color: "inherit",
                font: "inherit",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span style={{ display: "flex", alignItems: "baseline", gap: "clamp(16px, 3vw, 36px)", minWidth: 0 }}>
                <span
                  className="tn-mono"
                  style={{
                    fontSize: "clamp(28px, 4vw, 52px)",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: isOpen ? "var(--accent-text)" : "var(--muted)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {s.num}
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
                  <span
                    className="tn-mono"
                    style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-text)" }}
                  >
                    {s.kicker}
                  </span>
                  <span
                    className="row-title tn-display"
                    style={{
                      fontWeight: 800,
                      fontSize: "clamp(30px, 4.2vw, 58px)",
                      lineHeight: 0.98,
                      letterSpacing: "-0.035em",
                      textWrap: "balance",
                    }}
                  >
                    {s.title}
                  </span>
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, minWidth: 0 }}>
                <span style={{ color: "var(--muted)", fontSize: 16, maxWidth: "30em" }}>{s.short}</span>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 26,
                    lineHeight: 1,
                    fontWeight: 300,
                    ...(isOpen
                      ? { background: "var(--ink)", color: "var(--bg)", border: "1px solid var(--ink)" }
                      : { background: "var(--surface)", color: "var(--ink)", border: "1px solid var(--line)" }),
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
                  gap: 32,
                  padding: "4px 0 40px",
                }}
              >
                <figure
                  style={{
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    background: "var(--night)",
                    color: "var(--night-text)",
                    borderRadius: 24,
                    padding: 18,
                    minWidth: 0,
                  }}
                >
                  <span
                    className="tn-mono"
                    style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--night-muted)" }}
                  >
                    Real example
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.example.image} alt={s.example.alt} loading="lazy" style={exampleImgStyle(s.example)} />
                  <figcaption
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: 12,
                      padding: "0 4px 4px",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                      <b className="tn-display" style={{ fontSize: 22, fontWeight: 700 }}>
                        {s.example.name}
                      </b>
                      <span style={{ fontSize: 14, color: "var(--night-muted)" }}>{s.example.client}</span>
                    </span>
                    <span className="tn-display" style={{ fontWeight: 800, fontSize: 20, color: "var(--accent)" }}>
                      {s.example.result}
                    </span>
                  </figcaption>
                </figure>

                <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <span
                      className="tn-mono"
                      style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}
                    >
                      What&apos;s included
                    </span>
                    <ul
                      style={{
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                        gap: "0 24px",
                      }}
                    >
                      {s.includes.map((i) => (
                        <li
                          key={i}
                          style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: "1px solid var(--line)", fontSize: 15 }}
                        >
                          <span aria-hidden="true" style={{ color: "var(--accent-text)", fontWeight: 700 }}>
                            ✓
                          </span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="tn-mono"
                        style={{ background: "var(--tint)", borderRadius: 999, padding: "4px 12px", fontSize: 12 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 14,
                      paddingTop: 18,
                      borderTop: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "var(--muted)" }}>
                      Typical timeline <b style={{ color: "var(--ink)", fontWeight: 600 }}>{s.timeline}</b>
                    </span>
                    <Link
                      href="/contact"
                      className="tn-btn-primary"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: 48,
                        padding: "0 24px",
                        borderRadius: 999,
                        background: "var(--accent)",
                        color: "#0D1117",
                        textDecoration: "none",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
