import ContactForm from "@/components/site/contact/ContactForm";
import { CONTACT, PHOTO } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Tell Tayyab Naeem about your Shopify store, website, AI chatbot or automation project. You'll get a reply within one working day and a custom quote.",
};

const mono = { fontFamily: "var(--font-mono)" };
const routeCard = {
  background: "var(--surface)",
  border: "1px solid var(--line)",
  borderRadius: 22,
  padding: 22,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  textDecoration: "none",
};
const routeLabel = { ...mono, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" };
const stepNum = { width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", fontWeight: 700 };
const tile = { background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 20, padding: 18 };
const tileNum = { display: "block", fontSize: 34, fontWeight: 800, letterSpacing: "-0.03em" };

const STEPS = [
  { title: "I read your brief", desc: "and reply within one working day." },
  { title: "Free 30-minute call", desc: "to look at your business and goals together." },
  { title: "Plan & custom quote", desc: "in writing within 2 days. You decide, no pressure." },
];

const TILES = [
  { value: "50", label: "projects delivered" },
  { value: "30", label: "happy clients" },
  { value: "1 day", label: "reply time" },
  { value: "Custom", label: "quote, agreed upfront" },
];

const FAQ = [
  { q: "Is the first call really free?", a: "Yes. 30 minutes to understand your project, with no obligation to go ahead.", open: true },
  { q: "What if I only have a rough idea?", a: "That's normal. Send what you have and we'll shape it together on the call." },
  { q: "How much will it cost?", a: "Every project is quoted individually. Send the brief and you'll get a clear, custom quote before any work starts." },
  { q: "Do you offer support after launch?", a: "Yes. Every project ends with a recorded handover, and I'm available for changes and new features after." },
];

export default function ContactPage() {
  const whatsapp = `https://wa.me/${CONTACT.phoneE164.replace("+", "")}`;

  return (
    <main className="tn" style={{ background: "var(--bg)", color: "var(--ink)" }}>
      {/* Hero */}
      <section
        className="tn-shell"
        style={{ paddingTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: 40, alignItems: "end" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 10, border: "1px solid var(--line)", background: "var(--surface)", padding: "6px 14px 6px 10px", borderRadius: 999, fontSize: 14, color: "var(--muted)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--dot)" }} />
            Replying within one working day
          </span>
          <h1 style={{ fontWeight: 800, fontSize: "clamp(52px, 7.6vw, 112px)", lineHeight: 0.9, letterSpacing: "-0.05em", textWrap: "balance" }}>
            Let&apos;s build your best-selling website.
          </h1>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 20, maxWidth: "30em" }}>
            Tell me what you sell and what&apos;s slowing you down. You&apos;ll get a straight answer, a plan and a custom quote, with no pressure to buy.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 20, background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 26, padding: "20px 24px 0", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO} alt="Tayyab Naeem" style={{ width: 150, maxWidth: "40%", height: "auto", objectFit: "contain", display: "block" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 22, minWidth: 0 }}>
            <b className="tn-display" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>You&apos;ll talk to me, Tayyab.</b>
            <span style={{ color: "var(--muted)", fontSize: 15 }}>
              No sales team, no account managers. The person on the call is the person building your project.
            </span>
          </div>
        </div>
      </section>

      {/* Contact routes */}
      <section className="tn-shell" style={{ paddingTop: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 16 }}>
          <a href={`mailto:${CONTACT.email}`} style={routeCard}>
            <span style={routeLabel}>Email</span>
            <b style={{ ...mono, fontSize: 17, fontWeight: 500, wordBreak: "break-all" }}>{CONTACT.email}</b>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>Best for detailed briefs and files.</span>
          </a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={routeCard}>
            <span style={routeLabel}>WhatsApp</span>
            <b style={{ ...mono, fontSize: 17, fontWeight: 500 }}>{CONTACT.phoneDisplay}</b>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>Quick questions and voice notes.</span>
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" style={routeCard}>
            <span style={routeLabel}>LinkedIn</span>
            <b style={{ fontSize: 17, fontWeight: 600 }}>Message me on LinkedIn ↗</b>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>See my profile and recommendations.</span>
          </a>
          <a href="#brief" style={{ ...routeCard, background: "var(--night)", color: "var(--night-text)", border: 0 }}>
            <span style={{ ...routeLabel, color: "var(--night-muted)" }}>Free call</span>
            <b style={{ fontSize: 17, fontWeight: 600 }}>30 minutes, no obligation</b>
            <span style={{ color: "var(--night-muted)", fontSize: 14 }}>Send the brief below and I&apos;ll suggest a time.</span>
          </a>
        </div>
      </section>

      {/* Form + next steps */}
      <section
        className="tn-shell"
        style={{ paddingTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 32, alignItems: "start" }}
      >
        <ContactForm />

        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          <div style={{ background: "var(--night)", color: "var(--night-text)", borderRadius: 28, padding: "clamp(22px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: 22 }}>
            <span className="tn-display" style={{ fontWeight: 800, fontSize: 28, letterSpacing: "-0.02em" }}>What happens next</span>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
              {STEPS.map((s, i) => (
                <li key={s.title} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 14 }}>
                  <span style={i === 0 ? { ...stepNum, background: "var(--accent)", color: "#0D1117" } : { ...stepNum, border: "1px solid var(--night-line)" }}>{i + 1}</span>
                  <span>
                    <b style={{ fontWeight: 600 }}>{s.title}</b>
                    <br />
                    <span style={{ color: "var(--night-muted)", fontSize: 15 }}>{s.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
            {TILES.map((t) => (
              <div key={t.label} style={tile}>
                <b className="tn-display" style={tileNum}>{t.value}</b>
                <span style={{ color: "var(--muted)", fontSize: 14 }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="tn-shell"
        style={{ paddingTop: 96, paddingBottom: 96, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 40, alignItems: "start" }}
      >
        <h2 style={{ fontWeight: 800, fontSize: "clamp(34px, 4.6vw, 58px)", lineHeight: 1, letterSpacing: "-0.035em" }}>Before you get in touch</h2>
        <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
          {FAQ.map((f) => (
            <details key={f.q} open={f.open} style={{ borderBottom: "1px solid var(--line)", padding: "18px 0" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", gap: 16, fontWeight: 600, fontSize: 18 }}>
                {f.q}
                <span style={{ color: "var(--accent-text)" }} aria-hidden="true">+</span>
              </summary>
              <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
