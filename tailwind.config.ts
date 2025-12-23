import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        surface: "#f9f9f9",
        accent: {
          DEFAULT: "#d94e36",
          soft: "#e86a54",
        },
        textPrimary: "#111111",
        textSecondary: "#555555",
        textMuted: "#888888",
        border: "#e5e5e5",
        foreground: "#111111",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111111",
        },
        primary: {
          DEFAULT: "#d94e36",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f9f9f9",
          foreground: "#111111",
        },
        muted: {
          DEFAULT: "#f9f9f9",
          foreground: "#555555",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "title": ["1.75rem", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        "content": "680px",
        "wide": "1100px",
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      boxShadow: {
        "subtle": "0 1px 3px rgba(0,0,0,0.04)",
        "card": "0 4px 20px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
