// Flat dark background. No glow blobs.
export default function Background() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-20"
      style={{
        background: "linear-gradient(180deg, #111015 0%, #0c0b0e 40%, #0a0a0b 100%)",
      }}
    />
  );
}
