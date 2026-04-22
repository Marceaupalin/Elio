import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        elio: {
          ink: "#1E2A42",
          "ink-soft": "#2A3754",
          "ink-deep": "#14192C",
          coral: "#D2694B",
          "coral-soft": "#E8876A",
          "coral-wash": "#FFF0E9",
          cream: "#FAF7F2",
          sand: "#F2ECE2",
          stone: "#E6DFD3",
          text: "#1E2A42",
          "text-muted": "#5A6578",
          "text-soft": "#8A93A3",
          success: "#3F8B6B",
          border: "rgba(30, 42, 66, 0.08)",
          "border-mid": "rgba(30, 42, 66, 0.14)",
        },
      },
      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(30, 42, 66, 0.04)",
        md: "0 8px 24px rgba(30, 42, 66, 0.06)",
        lg: "0 20px 60px rgba(30, 42, 66, 0.08)",
        coral: "0 12px 40px rgba(210, 105, 75, 0.18)",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
