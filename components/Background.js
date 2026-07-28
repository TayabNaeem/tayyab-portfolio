// Flat dark background with a single soft glow in the top-right corner.
export default function Background() {
  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 -z-20"
        style={{
          background: "linear-gradient(180deg, #111015 0%, #0c0b0e 40%, #0a0a0b 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -z-10"
        style={{
          top: -260,
          right: -180,
          width: 760,
          height: 760,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.30) 0%, rgba(124,58,237,0.12) 45%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </>
  );
}
