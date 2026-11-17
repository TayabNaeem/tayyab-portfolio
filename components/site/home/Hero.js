import Link from "next/link";
import CountUp from "@/components/site/CountUp";
import { ROLE } from "@/lib/site";
import HeroDevices from "./HeroDevices";
import { btnPrimary, btnOutline } from "./styles";

const statNum = {
  fontFamily: "var(--font-display), sans-serif",
  fontSize: 36,
  fontWeight: 800,
  letterSpacing: "-0.03em",
};
const statLabel = { fontSize: 14, color: "var(--muted)" };
const statCell = { padding: "14px 12px 0", display: "flex", flexDirection: "column", lineHeight: 1.15, borderLeft: "1px solid var(--line)" };

export default function Hero() {
  return (
    <section
      style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 24px 88px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 56, alignItems: "center" }}
    >
      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: 26, minWidth: 0 }}>
        <span
          style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, border: "1px solid var(--line)", background: "var(--surface)", padding: "6px 14px 6px 10px", borderRadius: 999, fontSize: 14, color: "var(--muted)" }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--dot)" }} />
          Available for new projects
        </span>
        <h1 style={{ fontWeight: 800, fontSize: "clamp(46px, 6.4vw, 92px)", lineHeight: 0.93, letterSpacing: "-0.045em", textWrap: "balance" }}>
          Websites that sell. <span style={{ color: "var(--muted)" }}>AI that works the night shift.</span>
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-text)" }}>
          {ROLE}
        </span>
        <p style={{ margin: 0, maxWidth: "32em", fontSize: 19, color: "var(--muted)" }}>
          I&apos;m Tayyab. I design and build high-converting Shopify stores and custom websites, then add AI chatbots, voice agents and automations so your business keeps selling while you sleep.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Link href="/work" className="tn-btn-primary" style={btnPrimary}>
            See 23 live projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <Link href="/contact" style={btnOutline}>Book a free call</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", maxWidth: 480, borderTop: "1px solid var(--line)" }}>
          <span style={{ ...statCell, padding: "14px 12px 0 0", borderLeft: "none" }}>
            <b style={statNum}><CountUp to={50} /></b>
            <span style={statLabel}>projects shipped</span>
          </span>
          <span style={statCell}>
            <b style={statNum}><CountUp to={30} /></b>
            <span style={statLabel}>happy clients</span>
          </span>
          <span style={statCell}>
            <b style={statNum}><CountUp to={4} suffix=" yrs" /></b>
            <span style={statLabel}>experience</span>
          </span>
        </div>
      </div>

      <HeroDevices />
    </section>
  );
}
