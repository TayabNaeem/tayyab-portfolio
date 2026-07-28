// Custom line-art icon set. All icons inherit `currentColor`.
// Brand/platform logos live in ./BrandLogos.js

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* ---------------- Service icons ---------------- */

export function StoreIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 8.5h17l-1 11a1.5 1.5 0 0 1-1.5 1.4H6a1.5 1.5 0 0 1-1.5-1.4z" />
      <path d="M8.5 11V6.8a3.5 3.5 0 0 1 7 0V11" />
      <path d="M3.5 8.5 5 4.6a1.4 1.4 0 0 1 1.3-.9h11.4A1.4 1.4 0 0 1 19 4.6l1.5 3.9" />
    </svg>
  );
}

export function ChatbotIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="3.2" />
      <path d="M12 4.2v3.3M8.8 3.4h6.4" />
      <circle cx="9" cy="13" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1.15" fill="currentColor" stroke="none" />
      <path d="M9.6 16.4h4.8" />
      <path d="M1.8 12v3M22.2 12v3" />
    </svg>
  );
}

export function AutomationIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="2.4" y="3.2" width="6" height="5" rx="1.6" />
      <rect x="15.6" y="3.2" width="6" height="5" rx="1.6" />
      <rect x="9" y="15.8" width="6" height="5" rx="1.6" />
      <path d="M5.4 8.2v3a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2v-3" />
      <path d="M12 13.2v2.6" />
      <path d="M10.6 17.6l1 1 1.8-1.8" />
    </svg>
  );
}

export function IntegrationIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9.4 14.6 6.9 17a3.6 3.6 0 0 1-5.1-5.1l2.6-2.5" />
      <path d="M14.6 9.4 17.1 7a3.6 3.6 0 0 1 5.1 5.1l-2.6 2.5" />
      <path d="M9.2 14.8l5.6-5.6" />
    </svg>
  );
}

export function SpeedIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.6 17.5a9.5 9.5 0 1 1 16.8 0" />
      <path d="M12 13.6 16.2 9" />
      <circle cx="12" cy="14.4" r="1.5" />
    </svg>
  );
}

export function BrainIcon({ className = "w-7 h-7" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 5.2a2.7 2.7 0 0 0-5 1.3 2.6 2.6 0 0 0-1.4 4.5A2.7 2.7 0 0 0 7 15.9a2.6 2.6 0 0 0 5 .9z" />
      <path d="M12 5.2a2.7 2.7 0 0 1 5 1.3 2.6 2.6 0 0 1 1.4 4.5A2.7 2.7 0 0 1 17 15.9a2.6 2.6 0 0 1-5 .9z" />
      <path d="M12 5.2v11.6" />
    </svg>
  );
}

/* ---------------- Process icons ---------------- */

export function SearchIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="10.8" cy="10.8" r="6.4" />
      <path d="M15.5 15.5 20.5 20.5" />
    </svg>
  );
}

export function PenIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M15.4 4.6a2.1 2.1 0 0 1 3 3L9 17l-4 1 1-4z" />
      <path d="M14 6l3 3" />
    </svg>
  );
}

export function CodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M8.5 8 4.5 12l4 4" />
      <path d="M15.5 8l4 4-4 4" />
      <path d="M13.3 5.5 10.7 18.5" />
    </svg>
  );
}

export function RocketIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M13.6 3.9c3.6 1.4 5.9 4.9 6 8.8l-3.4 2.6-5.8-5.8 2.5-3.4a8.7 8.7 0 0 1 .7-2.2z" />
      <path d="M10.4 9.5 6.9 10a1.4 1.4 0 0 0-.9 2.3l1.6 1.7" />
      <path d="M14.5 13.6l-.5 3.5a1.4 1.4 0 0 1-2.3.9l-1.7-1.6" />
      <path d="M7.2 16.8 4.5 19.5" />
    </svg>
  );
}
