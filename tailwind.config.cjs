/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-bg":           "var(--bg)",
        "theme-surface":      "var(--surface)",
        "theme-border":       "var(--border)",
        "theme-text":         "var(--text)",
        "theme-secondary":    "var(--text-secondary)",
        "theme-muted":        "var(--text-muted)",
        "theme-accent":       "var(--accent)",
        "theme-accent-text":  "var(--accent-text)",
      },
      boxShadow: {
        soft: "var(--shadow)",
      },
      keyframes: {
        floatIn: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%":       { opacity: "1" },
        },
      },
      animation: {
        floatIn: "floatIn 0.8s ease-out forwards",
        glow:    "glow 6s ease-in-out infinite",
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
