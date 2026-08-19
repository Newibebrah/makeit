import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
          600: "#242424",
          500: "#333333",
        },
        brand: {
          DEFAULT: "#6C2BD9",
          400: "#8B5CF6",
          300: "#A78BFA",
          500: "#5B21B6",
          600: "#4C1D95",
        },
        accent: {
          DEFAULT: "#FF2D78",
          400: "#F472B6",
          300: "#F9A8D4",
        },
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(108, 43, 217, 0.45)",
        "glow-pink": "0 0 40px -10px rgba(255, 45, 120, 0.35)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #6C2BD9 0%, #8B5CF6 50%, #FF2D78 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(108, 43, 217, 0.15) 0%, rgba(255, 45, 120, 0.1) 100%)",
        "gradient-radial":
          "radial-gradient(ellipse at center, rgba(108, 43, 217, 0.25) 0%, transparent 70%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;