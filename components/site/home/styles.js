/** Shared inline-style snippets for the home page sections. */

export const section = {
  maxWidth: 1240,
  margin: "0 auto",
  padding: "112px 24px 0",
  display: "flex",
  flexDirection: "column",
  gap: 40,
};

export const eyebrow = {
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--accent-text)",
};

export const h2 = {
  margin: 0,
  fontFamily: "var(--font-display), sans-serif",
  fontWeight: 800,
  fontSize: "clamp(36px, 5vw, 64px)",
  lineHeight: 1,
  letterSpacing: "-0.035em",
  textWrap: "balance",
};

export const pill = {
  border: "1px solid var(--night-line)",
  borderRadius: 999,
  padding: "4px 12px",
  fontSize: 13,
};

export const btnPrimary = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  minHeight: 54,
  padding: "0 28px",
  borderRadius: 999,
  background: "var(--accent)",
  color: "#0D1117",
  textDecoration: "none",
  fontWeight: 600,
};

export const btnOutline = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: 54,
  padding: "0 28px",
  borderRadius: 999,
  border: "1px solid var(--ink)",
  textDecoration: "none",
  fontWeight: 600,
};

export const check = { color: "var(--accent-text)", fontWeight: 700 };
