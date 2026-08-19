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
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          400: "rgb(var(--brand-400) / <alpha-value>)",
          300: "rgb(var(--brand-300) / <alpha-value>)",
          500: "rgb(var(--brand-500) / <alpha-value>)",
          600: "rgb(var(--brand-600) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          400: "rgb(var(--accent-400) / <alpha-value>)",
          300: "rgb(var(--accent-300) / <alpha-value>)",
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
        glow: "0 0 40px -10px var(--glow)",
        "glow-pink": "0 0 40px -10px var(--glow-accent)",
        card: "0 20px 60px -20px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "gradient-brand": "var(--gradient-brand)",
        "gradient-brand-soft": "var(--gradient-brand-soft)",
        "gradient-radial": "var(--gradient-radial)",
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