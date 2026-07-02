/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0b",
        "bg-soft": "#0f0f11",
        surface: "#151517",
        "surface-2": "#1c1c20",
        "surface-3": "#232329",
        brand: {
          DEFAULT: "#ff7a18",
          light: "#ff9d4d",
          deep: "#ff5c2b",
        },
        dim: "#a6a6ad",
        mute: "#6e6e77",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px -24px rgba(0,0,0,0.8)",
        glow: "0 10px 40px -8px rgba(255,122,24,0.45)",
        "glow-lg": "0 30px 80px -24px rgba(255,122,24,0.5)",
      },
      backgroundImage: {
        grad: "linear-gradient(115deg, #ff7a18 0%, #ff9d4d 100%)",
        "grad-h": "linear-gradient(115deg, #ff6a00 0%, #ff8a3c 60%, #ff5c2b 100%)",
      },
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
