// SVG project mockups used as portfolio card thumbnails.
// Each fills its container and uses the black / neon-purple theme palette.

const O = "#a855f7";
const O2 = "#7c3aed";
const PANEL = "#1c1c20";
const PANEL2 = "#232329";
const LINE = "rgba(255,255,255,0.10)";
const TXT = "rgba(255,255,255,0.34)";

function Frame({ children }) {
  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="180" fill="#131317" />
      {children}
    </svg>
  );
}

/* ---------- 1. Shopify storefront ---------- */
export function StoreMockup() {
  return (
    <Frame>
      <rect x="24" y="18" width="272" height="144" rx="8" fill={PANEL} stroke={LINE} />
      {/* browser bar */}
      <path d="M24 26a8 8 0 0 1 8-8h256a8 8 0 0 1 8 8v10H24z" fill={PANEL2} />
      <circle cx="36" cy="27" r="2.6" fill={O} opacity="0.8" />
      <circle cx="45" cy="27" r="2.6" fill={TXT} />
      <circle cx="54" cy="27" r="2.6" fill={TXT} />
      <rect x="66" y="23.5" width="90" height="7" rx="3.5" fill="rgba(255,255,255,0.07)" />
      {/* hero banner */}
      <rect x="34" y="46" width="252" height="42" rx="6" fill="url(#storeGrad)" />
      <rect x="44" y="56" width="74" height="7" rx="3.5" fill="rgba(0,0,0,0.45)" />
      <rect x="44" y="69" width="50" height="5" rx="2.5" fill="rgba(0,0,0,0.3)" />
      <rect x="232" y="60" width="44" height="15" rx="7.5" fill="#131317" />
      <rect x="242" y="66" width="24" height="4" rx="2" fill={O2} />
      {/* product grid */}
      {[34, 120, 206].map((x, i) => (
        <g key={i}>
          <rect x={x} y="98" width="80" height="52" rx="6" fill={PANEL2} stroke={LINE} />
          <rect x={x + 8} y="105" width="64" height="26" rx="4" fill="rgba(168,85,247,0.16)" />
          <rect x={x + 8} y="136" width="42" height="4.5" rx="2.25" fill={TXT} />
          <rect x={x + 8} y="144" width="24" height="4" rx="2" fill={O} opacity="0.75" />
        </g>
      ))}
      <defs>
        <linearGradient id="storeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={O} stopOpacity="0.85" />
          <stop offset="100%" stopColor={O2} stopOpacity="0.45" />
        </linearGradient>
      </defs>
    </Frame>
  );
}

/* ---------- 2. AI chatbot conversation ---------- */
export function ChatMockup() {
  return (
    <Frame>
      <rect x="52" y="14" width="216" height="152" rx="12" fill={PANEL} stroke={LINE} />
      {/* header */}
      <path d="M52 26a12 12 0 0 1 12-12h192a12 12 0 0 1 12 12v14H52z" fill={PANEL2} />
      <circle cx="70" cy="27" r="7" fill="url(#botGrad)" />
      <circle cx="67.6" cy="26" r="1.3" fill="#131317" />
      <circle cx="72.4" cy="26" r="1.3" fill="#131317" />
      <rect x="84" y="21" width="54" height="5.5" rx="2.75" fill="rgba(255,255,255,0.5)" />
      <rect x="84" y="30" width="32" height="4" rx="2" fill={O} opacity="0.7" />
      {/* incoming */}
      <rect x="64" y="52" width="118" height="24" rx="10" fill={PANEL2} />
      <rect x="74" y="60" width="82" height="4.5" rx="2.25" fill={TXT} />
      <rect x="74" y="68" width="54" height="4" rx="2" fill={TXT} />
      {/* outgoing */}
      <rect x="150" y="84" width="106" height="20" rx="10" fill="url(#botGrad)" />
      <rect x="160" y="91" width="70" height="4.5" rx="2.25" fill="rgba(0,0,0,0.45)" />
      {/* incoming 2 */}
      <rect x="64" y="112" width="132" height="28" rx="10" fill={PANEL2} />
      <rect x="74" y="120" width="96" height="4.5" rx="2.25" fill={TXT} />
      <rect x="74" y="128" width="70" height="4.5" rx="2.25" fill={TXT} />
      {/* typing dots */}
      <circle cx="72" cy="152" r="3" fill={O}>
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="83" cy="152" r="3" fill={O}>
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" begin="0.2s" />
      </circle>
      <circle cx="94" cy="152" r="3" fill={O}>
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" begin="0.4s" />
      </circle>
      <defs>
        <linearGradient id="botGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={O} />
          <stop offset="100%" stopColor={O2} />
        </linearGradient>
      </defs>
    </Frame>
  );
}

/* ---------- 3. Automation workflow ---------- */
export function FlowMockup() {
  const node = (x, y, w = 58, h = 30) => (
    <>
      <rect x={x} y={y} width={w} height={h} rx="7" fill={PANEL2} stroke={LINE} />
      <circle cx={x + 14} cy={y + h / 2} r="6" fill="rgba(168,85,247,0.22)" />
      <circle cx={x + 14} cy={y + h / 2} r="2.6" fill={O} />
      <rect x={x + 25} y={y + h / 2 - 5} width={w - 34} height="4" rx="2" fill={TXT} />
      <rect x={x + 25} y={y + h / 2 + 1} width={w - 44} height="3.5" rx="1.75" fill="rgba(255,255,255,0.16)" />
    </>
  );
  return (
    <Frame>
      {/* connectors */}
      <path d="M92 47h20a10 10 0 0 1 10 10v6" stroke={O} strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M92 133h20a10 10 0 0 0 10-10v-6" stroke={O} strokeWidth="1.6" fill="none" opacity="0.55" />
      <path d="M180 90h18" stroke={O} strokeWidth="1.6" fill="none" opacity="0.55" />
      <circle r="2.8" fill={O2}>
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M92 47h20a10 10 0 0 1 10 10v6" />
      </circle>
      <circle r="2.8" fill={O2}>
        <animateMotion dur="2.6s" begin="0.7s" repeatCount="indefinite" path="M92 133h20a10 10 0 0 0 10-10v-6" />
      </circle>
      {/* nodes */}
      {node(34, 32)}
      {node(34, 118)}
      {node(122, 75, 58, 30)}
      {node(198, 75, 58, 30)}
      {/* output badge */}
      <rect x="266" y="78" width="24" height="24" rx="7" fill="url(#flowGrad)" />
      <path d="M272.5 90.5l3.5 3.5 7-7" stroke="#131317" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M256 90h10" stroke={O} strokeWidth="1.6" opacity="0.55" />
      <defs>
        <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={O} />
          <stop offset="100%" stopColor={O2} />
        </linearGradient>
      </defs>
    </Frame>
  );
}

/* ---------- 4. Analytics dashboard ---------- */
export function DashMockup() {
  const bars = [26, 40, 32, 54, 46, 66, 58];
  return (
    <Frame>
      <rect x="22" y="16" width="276" height="148" rx="9" fill={PANEL} stroke={LINE} />
      {/* stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={34 + i * 90} y="28" width="80" height="36" rx="7" fill={PANEL2} stroke={LINE} />
          <rect x={44 + i * 90} y="36" width="30" height="4" rx="2" fill={TXT} />
          <rect x={44 + i * 90} y="46" width={44 - i * 8} height="8" rx="4" fill={i === 0 ? O : "rgba(255,255,255,0.28)"} />
        </g>
      ))}
      {/* chart */}
      <rect x="34" y="74" width="170" height="78" rx="7" fill={PANEL2} stroke={LINE} />
      {bars.map((h, i) => (
        <rect key={i} x={46 + i * 22} y={142 - h} width="12" height={h} rx="3"
              fill={i === bars.length - 2 ? O : "rgba(168,85,247,0.32)"} />
      ))}
      {/* trend line */}
      <path d="M46 116 L68 104 L90 110 L112 92 L134 98 L156 80 L178 88"
            stroke={O2} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      {/* side list */}
      <rect x="214" y="74" width="72" height="78" rx="7" fill={PANEL2} stroke={LINE} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="226" cy={88 + i * 18} r="4" fill={i === 0 ? O : "rgba(255,255,255,0.2)"} />
          <rect x="236" y={85.5 + i * 18} width="38" height="4" rx="2" fill={TXT} />
        </g>
      ))}
    </Frame>
  );
}
