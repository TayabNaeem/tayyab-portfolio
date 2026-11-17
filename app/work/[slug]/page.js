import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_PROJECTS, CATEGORY_LABELS, getProject, projectHref } from "@/lib/site";

const display = { fontFamily: "var(--font-display), 'Segoe UI', sans-serif" };
const mono = { fontFamily: "var(--font-mono)" };
const eyebrow = { ...mono, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-text)" };
const shell = (top, bottom = 0) => ({ maxWidth: 1240, margin: "0 auto", padding: `${top}px 24px ${bottom}px` });

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return { title: p.name, description: p.desc };
}

const isSite = (p) => p.cat === "shopify" || p.cat === "custom";
const domainOf = (url) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "");

/** Website projects: what was done, from the project's tags. */
const SITE_WORK = {
  "Theme customization": "Customised the theme to fit the brand, without rebuilding what already worked.",
  "Custom theme": "Designed and built a custom theme around how this store's customers shop.",
  "Custom Liquid": "Wrote custom Liquid sections the team can edit in the theme editor.",
  Speed: "Tuned images, scripts and apps so pages load fast on phones.",
  "App integration": "Set up and connected the apps the store relies on, and removed the ones it didn't need.",
  Collections: "Organised collections and navigation so products are easy to find.",
  "Product pages": "Rebuilt product pages to show the product properly and make buying easy.",
  Design: "Gave the store a clean, professional design that matches the brand.",
  Search: "Improved search so customers find the exact product they're after.",
  Promotions: "Made sales and promotions easy to launch without touching code.",
  "Product drops": "Built the store to handle limited drops and launch-day traffic.",
  Lookbook: "Added lookbook-style pages that sell the lifestyle, not just the product.",
  "Booking flow": "Added a booking flow so customers can reserve sessions online.",
  "Seasonal launch": "Prepared the store for a time-limited seasonal launch.",
  "Custom forms": "Built custom forms that capture the details needed before a sale.",
  "Theme setup": "Set up the theme and store foundations ready for launch.",
  "Pre-launch": "Built a coming-soon page that collects interest before opening.",
  "Custom build": "Designed and built the site from scratch, with no template.",
  "Booking enquiries": "Added an enquiry flow that turns visitors into booking requests.",
  SEO: "Laid the SEO foundations: structure, metadata and fast pages.",
  "Next.js": "Built on Next.js for speed and easy future changes.",
};

export default function ProjectPage({ params }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const site = isSite(p);
  const idx = ALL_PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = ALL_PROJECTS[(idx + 1) % ALL_PROJECTS.length];
  const prev = ALL_PROJECTS[(idx - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length];
  const work = site ? p.tags.map((t) => SITE_WORK[t]).filter(Boolean) : [];
  const tools = (p.tools || "").split("·").map((t) => t.trim()).filter(Boolean);
  const isCaledonia = p.cat === "custom" && p.preview;

  return (
    <main className="tn" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      {/* Hero */}
      <section style={{ ...shell(56), display: "flex", flexDirection: "column", gap: 22 }}>
        <Link href="/work" style={{ ...mono, fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>← All work</Link>
        <span style={eyebrow}>{CATEGORY_LABELS[p.cat]} · {p.client}</span>
        <h1 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(42px, 6.4vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.045em", maxWidth: "14em", textWrap: "balance" }}>{p.name}</h1>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 20, maxWidth: "36em" }}>{p.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tn-btn-primary"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 26px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
            >
              Visit {domainOf(p.url)} ↗
            </a>
          )}
          <Link
            href="/contact"
            style={{ display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 26px", borderRadius: 999, border: "1px solid var(--ink)", textDecoration: "none", fontWeight: 600 }}
          >
            Start a similar project
          </Link>
        </div>
      </section>

      {/* Media */}
      <section style={shell(48)}>
        {isCaledonia ? (
          <div style={{ position: "relative", aspectRatio: "16 / 8", maxWidth: "100%", borderRadius: 28, overflow: "hidden", background: "#0B0B0C" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.preview} alt={`${p.name} preview with full wordmark`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }} />
          </div>
        ) : site ? (
          <div style={{ display: "grid", placeItems: "center", minHeight: 260, borderRadius: 28, background: p.logoBg || "#FFFFFF", border: "1px solid var(--line)", padding: 40 }}>
            {p.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.logo} alt={`${p.name} logo`} style={{ maxWidth: "min(360px, 70%)", maxHeight: 110, width: "auto", height: "auto", objectFit: "contain" }} />
            ) : (
              <span style={{ ...display, fontWeight: 800, fontSize: 56, letterSpacing: "0.12em", color: "#0D1117" }}>{p.name}</span>
            )}
          </div>
        ) : (
          <div style={{ borderRadius: 28, background: "#1E1F22", padding: "clamp(12px, 2vw, 24px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.cover} alt={`${p.name} workflow`} style={{ display: "block", width: "100%", height: "auto", borderRadius: 16 }} />
          </div>
        )}
      </section>

      {/* Details */}
      <section style={{ ...shell(64), display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 48, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, minWidth: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={eyebrow}>{site ? "What I did" : "The result"}</span>
            {site ? (
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column" }}>
                {work.map((w) => (
                  <li key={w} style={{ display: "flex", gap: 12, padding: "14px 0", borderBottom: "1px solid var(--line)", fontSize: 17 }}>
                    <span style={{ color: "var(--accent-text)", fontWeight: 700 }} aria-hidden="true">✓</span>{w}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>{p.result}</p>
            )}
          </div>
        </div>

        <aside style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: 26, display: "flex", flexDirection: "column", gap: 18 }}>
          {[
            ["Client", p.client],
            ["Type", CATEGORY_LABELS[p.cat]],
            ["Result", p.result],
            p.url ? ["Live site", domainOf(p.url)] : null,
          ].filter(Boolean).map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
              <span style={{ ...mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{k}</span>
              <span style={{ fontWeight: 600, textAlign: "right" }}>{v}</span>
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ ...mono, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>Tools</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {tools.map((t) => (
                <span key={t} style={{ background: "var(--tint)", borderRadius: 999, padding: "4px 12px", ...mono, fontSize: 12 }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.tags.map((t) => (
              <span key={t} style={{ border: "1px solid var(--line)", borderRadius: 999, padding: "3px 10px", fontSize: 12, color: "var(--muted)" }}>{t}</span>
            ))}
          </div>
        </aside>
      </section>

      {/* How it works (AI and automation projects) */}
      {p.steps?.length > 0 && (
        <section style={{ ...shell(96), display: "flex", flexDirection: "column", gap: 32 }}>
          <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(34px, 4.6vw, 56px)", lineHeight: 1, letterSpacing: "-0.035em" }}>How it works</h2>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))", gap: 16 }}>
            {p.steps.map(([title, desc], i) => (
              <li key={title} tabIndex={0} className="tn-flip" style={{ borderRadius: 24, padding: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                <span className="tn-flip-num" style={{ ...mono, fontSize: 13 }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ ...display, margin: 0, fontWeight: 700, fontSize: 23, lineHeight: 1.15 }}>{title}</h3>
                <p className="tn-flip-muted" style={{ margin: 0, fontSize: 15 }}>{desc}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Prev / next */}
      <section style={{ ...shell(96), display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 16 }}>
        {[["← Previous", prev], ["Next →", next]].map(([label, q]) => (
          <Link key={label} href={projectHref(q)} className="tn-flip" style={{ borderRadius: 22, padding: 24, textDecoration: "none", display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="tn-flip-num" style={{ ...mono, fontSize: 12 }}>{label}</span>
            <span style={{ ...display, fontWeight: 700, fontSize: 22 }}>{q.name}</span>
            <span className="tn-flip-muted" style={{ fontSize: 14 }}>{CATEGORY_LABELS[q.cat]} · {q.client}</span>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section style={shell(96, 96)}>
        <div style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 30, padding: "clamp(28px, 5vw, 64px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <h2 style={{ ...display, margin: 0, fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 52px)", lineHeight: 1, letterSpacing: "-0.035em", maxWidth: "14em" }}>Want something like this for your business?</h2>
          <Link href="/contact" className="tn-btn-primary" style={{ display: "inline-flex", alignItems: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}>Get a quote</Link>
        </div>
      </section>
    </main>
  );
}
