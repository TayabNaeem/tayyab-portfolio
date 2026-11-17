import Link from "next/link";
import CountUp from "@/components/site/CountUp";
import ServiceList from "@/components/site/services/ServiceList";
import { SERVICES, STATS, PROCESS, FAQ } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Shopify development, custom websites, AI chatbots and voice agents, workflow automation, WordPress and Meta ads by Tayyab Naeem. A custom quote for every project.",
};

const SHORT_LABELS = ["projects", "clients", "automations", "years"];

const h2 = {
  margin: 0,
  fontWeight: 800,
  fontSize: "clamp(34px, 4.6vw, 58px)",
  lineHeight: 1,
  letterSpacing: "-0.035em",
};

const kicker = { fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" };

export default function ServicesPage() {
  return (
    <main className="tn" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      {/* Hero */}
      <section
        className="tn-shell"
        style={{
          paddingTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          gap: 48,
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          <span className="tn-mono" style={{ ...kicker, color: "var(--accent-text)" }}>
            Services · 06 ways to work together
          </span>
          <h1
            style={{
              margin: 0,
              fontWeight: 800,
              fontSize: "clamp(48px, 7vw, 100px)",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              textWrap: "balance",
            }}
          >
            Websites that sell, and the AI that keeps them selling.
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 19, maxWidth: "30em" }}>
            One developer, and a custom quote for every project. Most clients start with a store or site, then add an
            AI agent or automation once it&apos;s selling.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              borderTop: "1px solid var(--ink)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            {STATS.map((s, i) => (
              <span
                key={s.label}
                style={{
                  padding: i === 0 ? "14px 12px 14px 0" : "14px 12px",
                  display: "flex",
                  flexDirection: "column",
                  borderLeft: i === 0 ? "none" : "1px solid var(--line)",
                }}
              >
                <b
                  className="tn-display"
                  style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}
                >
                  <CountUp to={s.value} />
                </b>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{SHORT_LABELS[i] ?? s.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable service list */}
      <section className="tn-shell" style={{ paddingTop: 88 }}>
        <div
          className="tn-mono"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 16,
            paddingBottom: 14,
            ...kicker,
            letterSpacing: "0.12em",
            color: "var(--muted)",
          }}
        >
          <span>Service</span>
          <span>Tap a row to see the work</span>
        </div>
        <ServiceList services={SERVICES} />
      </section>

      {/* Process */}
      <section className="tn-shell" style={{ paddingTop: 112, display: "flex", flexDirection: "column", gap: 36 }}>
        <h2 style={h2}>How every project runs</h2>
        <ol
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
            gap: 28,
          }}
        >
          {PROCESS.map((p) => (
            <li
              key={p.title}
              style={{ borderTop: "3px solid var(--ink)", paddingTop: 18, display: "flex", flexDirection: "column", gap: 8 }}
            >
              <span className="tn-mono" style={{ fontSize: 13, color: "var(--accent-text)" }}>
                {p.step}
              </span>
              <h3 style={{ margin: 0, fontWeight: 700, fontSize: 22, lineHeight: 1.15 }}>{p.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 15 }}>{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section
        className="tn-shell"
        style={{
          paddingTop: 112,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: 40,
          alignItems: "start",
        }}
      >
        <h2 style={h2}>Questions clients ask</h2>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
          {FAQ.map((q) => (
            <details key={q.q} style={{ borderBottom: "1px solid var(--line)", padding: "18px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", gap: 16, fontWeight: 600, fontSize: 18 }}>
                {q.q}
                <span aria-hidden="true" style={{ color: "var(--accent-text)" }}>
                  +
                </span>
              </summary>
              <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>{q.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tn-shell" style={{ paddingTop: 112, paddingBottom: 96 }}>
        <div
          style={{
            background: "var(--night)",
            color: "var(--night-text)",
            borderRadius: 30,
            padding: "clamp(28px, 5vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <h2 style={{ ...h2, fontSize: "clamp(32px, 4.4vw, 56px)", maxWidth: "14em" }}>
            Not sure which service you need?
          </h2>
          <Link
            href="/contact"
            className="tn-btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 56,
              padding: "0 30px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#0D1117",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Ask me on a free call
          </Link>
        </div>
      </section>
    </main>
  );
}
