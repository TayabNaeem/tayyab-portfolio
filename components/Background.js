// Plain background: deep black with soft ambient light. No grid / block pattern.
export default function Background() {
  return (
    <>
      {/* base wash */}
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, #17110c 0%, #0c0b0d 45%, #0a0a0b 100%)",
        }}
      />
      {/* ambient glows */}
      <div
        aria-hidden
        className="fixed -z-10 rounded-full pointer-events-none"
        style={{
          width: 700, height: 700, top: -320, right: -220,
          background: "#a855f7", filter: "blur(180px)", opacity: 0.2,
        }}
      />
      <div
        aria-hidden
        className="fixed -z-10 rounded-full pointer-events-none"
        style={{
          width: 620, height: 620, top: "55%", left: -280,
          background: "#7c3aed", filter: "blur(190px)", opacity: 0.12,
        }}
      />
      {/* subtle vignette to keep edges dark */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(100% 70% at 50% 40%, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
      />
    </>
  );
}
