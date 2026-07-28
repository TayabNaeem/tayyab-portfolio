// Brand-accurate platform logos, drawn in each brand's real colours.
// `*Mark` = glyph only (for badges / icon slots)
// `*Logo` = glyph + wordmark (for the "Building with" row)

const WORD = { fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif", fontWeight: 700 };

/* ============ Shopify ============ */
export function ShopifyMark({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="-1 0 27 30" className={className}>
      {/* bag body */}
      <path
        fill="#95BF47"
        d="M20.5 6.2a.28.28 0 0 0-.26-.24l-2.2-.16-1.62-1.61a.4.4 0 0 0-.36-.1l-.83.26C14.76 2.9 13.9 1.5 12.4 1.5h-.13C11.85 1.03 11.32.8 10.86.8 7.3.8 5.6 5.25 5.07 7.5l-2.3.71c-.71.22-.73.25-.83.92L-.02 25.6 16.9 28.5l7.3-1.58z"
      />
      {/* darker right face */}
      <path
        fill="#5E8E3E"
        d="M20.24 5.96l-2.2-.16-1.62-1.61a.36.36 0 0 0-.2-.1L16.9 28.5l7.3-1.58L20.5 6.2a.28.28 0 0 0-.26-.24z"
      />
      {/* handle notch */}
      <path
        fill="#95BF47"
        d="M12.4 1.5c.9 0 1.66.62 2.2 1.83-.85.26-1.78.55-2.72.84 0-1.2-.16-2.1-.44-2.67zm-1.54.05c.3.6.45 1.5.45 2.72l-2.8.87c.55-2.1 1.55-3.2 2.35-3.6z"
      />
      {/* white S */}
      <path
        fill="#fff"
        d="M13.9 10.5l-.9 2.68s-.8-.43-1.77-.43c-1.42 0-1.5.9-1.5 1.12 0 1.22 3.2 1.69 3.2 4.57 0 2.27-1.44 3.73-3.38 3.73-2.33 0-3.51-1.45-3.51-1.45l.62-2.06s1.22 1.05 2.25 1.05c.67 0 .95-.53.95-.92 0-1.6-2.62-1.67-2.62-4.3 0-2.22 1.6-4.37 4.8-4.37 1.24 0 1.85.35 1.85.35z"
      />
    </svg>
  );
}

export function ShopifyLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 112 30" className={className}>
      <g transform="translate(2,0) scale(0.92)">
        <path fill="#95BF47" d="M20.5 6.2a.28.28 0 0 0-.26-.24l-2.2-.16-1.62-1.61a.4.4 0 0 0-.36-.1l-.83.26C14.76 2.9 13.9 1.5 12.4 1.5h-.13C11.85 1.03 11.32.8 10.86.8 7.3.8 5.6 5.25 5.07 7.5l-2.3.71c-.71.22-.73.25-.83.92L-.02 25.6 16.9 28.5l7.3-1.58z" />
        <path fill="#5E8E3E" d="M20.24 5.96l-2.2-.16-1.62-1.61a.36.36 0 0 0-.2-.1L16.9 28.5l7.3-1.58L20.5 6.2a.28.28 0 0 0-.26-.24z" />
        <path fill="#fff" d="M13.9 10.5l-.9 2.68s-.8-.43-1.77-.43c-1.42 0-1.5.9-1.5 1.12 0 1.22 3.2 1.69 3.2 4.57 0 2.27-1.44 3.73-3.38 3.73-2.33 0-3.51-1.45-3.51-1.45l.62-2.06s1.22 1.05 2.25 1.05c.67 0 .95-.53.95-.92 0-1.6-2.62-1.67-2.62-4.3 0-2.22 1.6-4.37 4.8-4.37 1.24 0 1.85.35 1.85.35z" />
      </g>
      <text x="32" y="21" fontSize="15" fill="#95BF47" {...WORD}>shopify</text>
    </svg>
  );
}

/* ============ n8n ============ */
const N8N = "#EA4B71";

export function N8nMark({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 30 20" className={className}>
      <g fill="none" stroke={N8N} strokeWidth="2.6">
        <path d="M6.5 10h3M15.5 10h1.8a2.6 2.6 0 0 0 2.6-2.6 2.6 2.6 0 0 1 2.6-2.6M15.5 10h1.8a2.6 2.6 0 0 1 2.6 2.6 2.6 2.6 0 0 0 2.6 2.6" />
        <circle cx="3.4" cy="10" r="3" />
        <circle cx="12.4" cy="10" r="3" />
        <circle cx="25.6" cy="4.8" r="3" />
        <circle cx="25.6" cy="15.2" r="3" />
      </g>
    </svg>
  );
}

export function N8nLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 82 22" className={className}>
      <g transform="translate(0,1)" fill="none" stroke={N8N} strokeWidth="2.4">
        <path d="M6 10h2.6M14 10h1.6a2.4 2.4 0 0 0 2.4-2.4A2.4 2.4 0 0 1 26.4 5.2M14 10h1.6a2.4 2.4 0 0 1 2.4 2.4 2.4 2.4 0 0 0 2.4 2.4" />
        <circle cx="3.2" cy="10" r="2.8" />
        <circle cx="11.2" cy="10" r="2.8" />
        <circle cx="23.2" cy="5.2" r="2.8" />
        <circle cx="23.2" cy="14.8" r="2.8" />
      </g>
      <text x="31" y="17" fontSize="14" fill={N8N} {...WORD}>n8n</text>
    </svg>
  );
}

/* ============ Botpress ============ */
function BotpressGlyph({ x = 0, y = 0, size = 22 }) {
  const s = size / 22;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <rect width="22" height="22" rx="6.5" fill="#fff" />
      <g fill="#0d0d0d">
        {/* three connected hexagon nodes */}
        <path d="M5.2 9.1l2.1-1.2 2.1 1.2v2.4l-2.1 1.2-2.1-1.2z" />
        <path d="M12.6 5.2l2.1-1.2 2.1 1.2v2.4l-2.1 1.2-2.1-1.2z" />
        <path d="M12.6 14.4l2.1-1.2 2.1 1.2v2.4l-2.1 1.2-2.1-1.2z" />
        <path d="M9.9 9.6l3.1-2.1.8 1.2-3.1 2.1zM9.9 12.4l3.1 2.1.8-1.2-3.1-2.1z" />
      </g>
    </g>
  );
}

export function BotpressMark({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 22 22" className={className}>
      <BotpressGlyph />
    </svg>
  );
}

export function BotpressLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 118 24" className={className}>
      <BotpressGlyph x={0} y={1} size={22} />
      <text x="29" y="17.5" fontSize="15" fill="#fff" {...WORD}>botpress</text>
    </svg>
  );
}

/* ============ Voiceflow ============ */
const VF = "#3D82E2";

export function VoiceflowLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 122 24" className={className}>
      <rect x="1" y="2" width="21" height="21" rx="6.5" fill={VF} />
      <path d="M6.4 7.6h2.8l2.4 7 2.4-7h2.8l-3.8 10.4h-2.8z" fill="#fff" />
      <text x="29" y="17.5" fontSize="15" fill={VF} {...WORD}>Voiceflow</text>
    </svg>
  );
}

/* ============ Vapi ============ */
export function VapiMark({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 26 22" className={className}>
      {/* flowing ribbon / wave mark */}
      <path
        fill="#fff"
        d="M2.6 3.4c0-1.4 1.3-2 2.3-1.2l6.4 5.4c.6.5 1.5.4 2-.2l3.9-4.5c.9-1 2.6-.4 2.6 1V18c0 1.4-1.3 2.1-2.3 1.2l-6.4-5.4a1.4 1.4 0 0 0-2 .2l-3.9 4.5c-.9 1-2.6.4-2.6-1z"
      />
    </svg>
  );
}

export function VapiLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 84 24" className={className}>
      <g transform="translate(0,1) scale(0.86)">
        <path
          fill="#fff"
          d="M2.6 3.4c0-1.4 1.3-2 2.3-1.2l6.4 5.4c.6.5 1.5.4 2-.2l3.9-4.5c.9-1 2.6-.4 2.6 1V18c0 1.4-1.3 2.1-2.3 1.2l-6.4-5.4a1.4 1.4 0 0 0-2 .2l-3.9 4.5c-.9 1-2.6.4-2.6-1z"
        />
      </g>
      <text x="22" y="18" fontSize="17" fill="#fff" {...WORD}>vapi</text>
    </svg>
  );
}

/* ============ Make.com ============ */
export function MakeMark({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 26 22" className={className}>
      {/* four leaning bars, magenta -> deep purple */}
      <path d="M1.4 19.4 4.9 2.6h3.9L5.3 19.4z" fill="#F213D6" />
      <path d="M9 19.4 11.2 2.6h3.9L12.9 19.4z" fill="#A322E8" />
      <path d="M16.6 19.4V2.6h3.9v16.8z" fill="#6D00CC" />
    </svg>
  );
}

export function MakeLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 92 24" className={className}>
      <g transform="translate(0,1) scale(0.9)">
        <path d="M1.4 19.4 4.9 2.6h3.9L5.3 19.4z" fill="#F213D6" />
        <path d="M9 19.4 11.2 2.6h3.9L12.9 19.4z" fill="#A322E8" />
        <path d="M16.6 19.4V2.6h3.9v16.8z" fill="#6D00CC" />
      </g>
      <text x="25" y="19" fontSize="18" fill="#fff" {...WORD}>make</text>
    </svg>
  );
}

/* ============ Zapier ============ */
const ZAP = "#FF4F00";

export function ZapierLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 92 24" className={className}>
      <g fill={ZAP} transform="translate(11.5,12)">
        <path d="M-2 -10h4v6.6l4.7-4.6 2.8 2.8-4.7 4.6H11.5v4H4.8l4.7 4.6-2.8 2.8-4.7-4.6V13h-4V6.2l-4.7 4.6-2.8-2.8L-4.8 3.4h-6.7v-4h6.7l-4.7-4.6 2.8-2.8L-2-3.4z" />
      </g>
      <text x="27" y="17.5" fontSize="15" fill={ZAP} {...WORD}>Zapier</text>
    </svg>
  );
}

/* ============ Zoho ============ */
/** Four interlocking rounded squares, alternating tilt. */
function ZohoSquares({ scale = 1 }) {
  const sq = [
    { x: 1, y: 5, c: "#E42527", r: -10 },
    { x: 11.5, y: 3.5, c: "#089949", r: 10 },
    { x: 22, y: 5, c: "#226DB4", r: -10 },
    { x: 32.5, y: 3.5, c: "#F9B21D", r: 10 },
  ];
  return (
    <g fill="none" strokeWidth={2.6} transform={`scale(${scale})`}>
      {sq.map((s, i) => (
        <rect
          key={i}
          x={s.x} y={s.y} width="13" height="13" rx="4.2"
          stroke={s.c}
          transform={`rotate(${s.r} ${s.x + 6.5} ${s.y + 6.5})`}
        />
      ))}
    </g>
  );
}

export function ZohoMark({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 47 22" className={className}>
      <ZohoSquares />
    </svg>
  );
}

export function ZohoLogo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 110 24" className={className}>
      <g transform="translate(0,1) scale(0.88)">
        <ZohoSquares />
      </g>
      <text x="49" y="18" fontSize="14" fill="#f4f4f5" letterSpacing="2.5" {...WORD}>ZOHO</text>
    </svg>
  );
}
