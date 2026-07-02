export default function Background() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 50% 0%, #000 0%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 0%, #000 0%, transparent 78%)",
        }}
      />
      <div aria-hidden className="fixed -z-10 rounded-full pointer-events-none"
           style={{ width: 520, height: 520, top: -200, right: -120, background: "#ff7a18", filter: "blur(130px)", opacity: 0.28 }} />
      <div aria-hidden className="fixed -z-10 rounded-full pointer-events-none"
           style={{ width: 460, height: 460, top: "45%", left: -180, background: "#ff5c2b", filter: "blur(130px)", opacity: 0.16 }} />
    </>
  );
}
