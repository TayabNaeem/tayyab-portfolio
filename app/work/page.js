import Link from "next/link";
import { CALEDONIA, STORES, AGENTS } from "@/lib/site";
import WorkGrid from "@/components/site/work/WorkGrid";

export const metadata = {
  title: "Work",
  description:
    "Live Shopify stores, a custom website and AI chatbots, voice agents and automations built by Tayyab Naeem.",
};

const display = { fontFamily: "var(--font-display), 'Segoe UI', sans-serif" };
const mono = { fontFamily: "var(--font-mono)" };
const TOTAL = 1 + STORES.length + AGENTS.length;

export default function WorkPage() {
  return (
    <main className="tn">
      {/* Hero (no counter block) */}
      <section className="tn-shell" style={{ paddingTop: 72, display: "flex", flexDirection: "column", gap: 20 }}>
        <span style={{ ...mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-text)" }}>
          Work · {TOTAL} projects
        </span>
        <h1 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(48px, 7vw, 100px)", lineHeight: 0.92, letterSpacing: "-0.045em", textWrap: "balance" }}>
          Proof, not promises.
        </h1>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 19, maxWidth: "30em" }}>
          Every store and site here is live, and every AI agent is running for a real business. Filter by what you need and click through to the real thing.
        </p>
      </section>

      {/* Featured project */}
      <section className="tn-shell" style={{ paddingTop: 56 }}>
        <article
          style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 30, overflow: "hidden", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))" }}
        >
          <div style={{ padding: "clamp(28px, 4vw, 52px)", display: "flex", flexDirection: "column", gap: 18, justifyContent: "center" }}>
            <span style={{ ...mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>
              Featured project · Custom website
            </span>
            <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(34px, 4vw, 54px)", lineHeight: 1, letterSpacing: "-0.035em" }}>
              {CALEDONIA.name}
            </h2>
            <span style={{ ...mono, fontSize: 13, color: "var(--night-muted)" }}>{CALEDONIA.client}</span>
            <p style={{ margin: 0, color: "var(--night-muted)" }}>{CALEDONIA.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, ...mono, fontSize: 12 }}>
              {CALEDONIA.tags.map((t) => (
                <span key={t} style={{ border: "1px solid var(--night-line)", borderRadius: 999, padding: "4px 12px" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a
                href={CALEDONIA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tn-btn-primary"
                style={{ display: "inline-flex", alignItems: "center", minHeight: 50, padding: "0 24px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
              >
                Visit the live site ↗
              </a>
              <span style={{ ...mono, fontSize: 13, color: "var(--night-muted)" }}>caledoniachauffeurgroup.com</span>
            </div>
          </div>
          <div style={{ position: "relative", minHeight: 400, background: "#0B0B0C" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CALEDONIA.preview}
              alt="Caledonia Chauffeur Group preview: full wordmark over the Edinburgh skyline"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }}
            />
          </div>
        </article>
      </section>

      {/* Filter + grouped grids */}
      <WorkGrid />

      {/* CTA */}
      <section className="tn-shell" style={{ paddingTop: 112, paddingBottom: 96 }}>
        <div
          style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 30, padding: "clamp(28px, 5vw, 64px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}
        >
          <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1, letterSpacing: "-0.035em", maxWidth: "14em" }}>
            Want your project on this page?
          </h2>
          <Link
            href="/contact"
            className="tn-btn-primary"
            style={{ display: "inline-flex", alignItems: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
          >
            Start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
