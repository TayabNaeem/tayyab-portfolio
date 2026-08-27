/**
 * The assistant's face. Drawn rather than pulled from an icon set, so the
 * launcher does not look like every other chat widget on the web — and because
 * an agent mark says more about what Tayyab builds than a speech bubble does.
 *
 * Stroke weight and cap style follow lucide's, so it sits correctly beside the
 * other icons on the site. The eyes blink on a slow cycle; `.agent-eye` carries
 * that animation, defined in globals.css and dropped under reduced motion.
 */
export default function AgentIcon({ size = 24, strokeWidth = 1.8, blink = false, ...rest }) {
  const eye = blink ? "agent-eye" : undefined;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {/* The drawing spans y 0.9-17.8 on its own, so the whole group is nudged
          down to sit centred in the 24x24 box instead of riding high. */}
      <g transform="translate(0 3.1)">
        {/* antenna */}
        <circle cx="12" cy="2.1" r="1.15" fill="currentColor" stroke="none" />
        <path d="M12 3.4v2" />

        {/* head */}
        <rect x="3.7" y="5.4" width="16.6" height="12.5" rx="4.2" />

        {/* side vents */}
        <path d="M1.7 10.6v2.4" />
        <path d="M22.3 10.6v2.4" />

        {/* eyes */}
        <circle cx="9.1" cy="11.2" r="1.2" fill="currentColor" stroke="none" className={eye} />
        <circle cx="14.9" cy="11.2" r="1.2" fill="currentColor" stroke="none" className={eye} />

        {/* mouth */}
        <path d="M9.3 14.9c1.6 1 3.8 1 5.4 0" />
      </g>
    </svg>
  );
}
