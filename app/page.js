/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AGENTS, PHOTO } from "@/lib/site";
import { REVIEWS } from "@/lib/reviews";
import Hero from "@/components/site/home/Hero";
import FeaturedWork from "@/components/site/home/FeaturedWork";
import ServicesShowcase from "@/components/site/home/ServicesShowcase";
import { section, eyebrow, h2 } from "@/components/site/home/styles";

const CLIENTS = ["Caledonia", "SoundSkins", "Elite Auto Gear", "Haus", "Curated Chrome", "Chicago Fragrance", "KIAURA", "Cybex"];

const WORKFLOWS = [
  ["Campervan booking concierge", "Campervan booking concierge"],
  ["LinkedIn reply agent", "LinkedIn reply agent"],
  ["Voice coach for boundary practice", "Voice coach agent"],
].map(([name, title]) => ({ ...AGENTS.find((a) => a.name === name), title }));

const STEPS = [
  { step: "01 · 30 min", title: "Free discovery call", desc: "Your store, tools and where sales or time are leaking." },
  { step: "02 · 2 days", title: "Plan & quote", desc: "Scope, timeline and your quote, in writing." },
  { step: "03 · 1–4 weeks", title: "Design & build", desc: "Weekly previews on staging you can click through." },
  { step: "04 · launch", title: "Go live & support", desc: "Recorded handover so your team can edit it." },
];

// The live site's reviews (lib/reviews.js), first six in work-list order.
// Real named clients first, then the rest, six in total.
const HOME_REVIEWS = [...REVIEWS].sort((a, b) => Number(b.real) - Number(a.real)).slice(0, 6);

export default function Home() {
  return (
    <main className="tn">
      <Hero />

      {/* Client strip */}
      <div style={{ borderBlock: "1px solid var(--line)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "22px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 34px" }}>
          <span style={{ ...eyebrow, color: "var(--muted)" }}>Trusted by</span>
          {CLIENTS.map((c) => (
            <span key={c} className="tn-display" style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em", color: "var(--muted)" }}>{c}</span>
          ))}
        </div>
      </div>

      <FeaturedWork />
      <ServicesShowcase />

      {/* AI spotlight */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 24px 0" }}>
        <div style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 32, padding: "clamp(28px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: 36 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 24, alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ ...eyebrow, color: "var(--accent)" }}>Under the hood</span>
              <h2 style={{ ...h2, fontSize: "clamp(34px, 4.6vw, 58px)" }}>Real workflows, running for real clients.</h2>
            </div>
            <p style={{ margin: 0, color: "var(--night-muted)" }}>
              These are the actual n8n and Botpress builds behind my AI projects: lead capture, bookings, hiring and outreach, all running without anyone pressing a button.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 18 }}>
            {WORKFLOWS.map((w) => (
              <Link
                key={w.title}
                href="/work"
                style={{ display: "flex", flexDirection: "column", textDecoration: "none", background: "var(--night-2)", border: "1px solid var(--night-line)", borderRadius: 20, overflow: "hidden", color: "var(--night-text)" }}
              >
                <img src={w.cover} alt={`${w.title} workflow`} style={{ width: "100%", aspectRatio: "2.3 / 1", objectFit: "cover", display: "block", borderBottom: "1px solid var(--night-line)" }} />
                <span style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="tn-display" style={{ fontWeight: 700, fontSize: 21, letterSpacing: "-0.01em" }}>{w.title}</span>
                  <span style={{ fontSize: 14, color: "var(--night-muted)" }}>{w.client}</span>
                  <span className="tn-display" style={{ marginTop: 6, fontWeight: 800, fontSize: 22, color: "var(--accent)" }}>{w.result}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={section}>
        <h2 style={{ ...h2, fontSize: "clamp(36px, 5vw, 60px)" }}>From first call to launch.</h2>
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 28 }}>
          {STEPS.map((s) => (
            <li key={s.step} style={{ borderTop: "3px solid var(--ink)", paddingTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent-text)" }}>{s.step}</span>
              <h3 style={{ fontWeight: 700, fontSize: 22, lineHeight: 1.15 }}>{s.title}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 15 }}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section id="reviews" style={section}>
        <h2 style={{ ...h2, fontSize: "clamp(36px, 5vw, 60px)" }}>Store owners on working together.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20 }}>
          {HOME_REVIEWS.map((r) => (
            <figure
              key={r.id}
              style={{ margin: 0, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: 30, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24 }}
            >
              <span style={{ color: "var(--accent-text)", letterSpacing: 3 }} aria-label="5 stars">★★★★★</span>
              <blockquote className="tn-display" style={{ margin: 0, fontWeight: 500, fontSize: 19, lineHeight: 1.4, color: "var(--ink)" }}>
                “{r.quote}”
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ width: 44, height: 44, flex: "none", borderRadius: "50%", background: "var(--tint)", display: "grid", placeItems: "center", fontWeight: 700 }}>{r.initials}</span>
                <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.35 }}>
                  <span style={{ fontWeight: 600 }}>{r.person}</span>
                  <span style={{ color: "var(--muted)", fontSize: 14 }}>{r.role}, {r.project}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 24px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 56, alignItems: "center" }}>
        <div style={{ position: "relative", aspectRatio: "4 / 5", maxWidth: "100%", borderRadius: 28, overflow: "hidden", background: "var(--tint)", border: "1px solid var(--line)" }}>
          <img
            src={PHOTO}
            alt="Tayyab Naeem"
            style={{ position: "absolute", left: 0, right: 0, bottom: 0, margin: "0 auto", height: "94%", width: "auto", maxWidth: "100%", objectFit: "contain", objectPosition: "50% 100%" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, minWidth: 0 }}>
          <span style={eyebrow}>About</span>
          <h2 style={{ ...h2, fontSize: "clamp(36px, 5vw, 60px)" }}>One developer. Design, code and AI.</h2>
          <p style={{ margin: 0, color: "var(--muted)", maxWidth: "34em" }}>
            For four years I&apos;ve built the parts that make or lose store owners money: themes that load fast, product pages that sell, and AI that answers customers at 3am. You talk to me directly, from first call to launch.
          </p>
          <Link
            href="/about"
            className="tn-btn-dark"
            style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: 52, padding: "0 26px", borderRadius: 999, background: "var(--ink)", color: "var(--bg)", textDecoration: "none", fontWeight: 600 }}
          >
            More about me
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "112px 24px 96px" }}>
        <div style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 32, padding: "clamp(32px, 6vw, 80px)", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <h2 style={{ ...h2, fontSize: "clamp(40px, 6.4vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.045em", maxWidth: "12em" }}>
            Your next website could be your best salesperson.
          </h2>
          <p style={{ margin: 0, color: "var(--night-muted)", fontSize: 19 }}>Free 30-minute call. A clear quote in 2 days.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              href="/contact"
              className="tn-btn-primary"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, background: "var(--accent)", color: "#0D1117", textDecoration: "none", fontWeight: 600 }}
            >
              Book a free call
            </Link>
            <Link
              href="/work"
              style={{ display: "inline-flex", alignItems: "center", minHeight: 56, padding: "0 30px", borderRadius: 999, border: "1px solid var(--night-line)", color: "var(--night-text)", textDecoration: "none", fontWeight: 600 }}
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
