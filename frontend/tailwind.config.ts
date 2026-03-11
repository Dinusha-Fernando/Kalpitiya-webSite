import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe3fe",
          300: "#93d2fd",
          400: "#61b7fa",
          500: "#3b95f6",
          600: "#2677eb",
          700: "#1f5fd0",
          800: "#204fac",
          900: "#1f4488"
        },
        sand: {
          50: "#fcfaf3",
          100: "#f8f0d8",
          200: "#f1dfae",
          300: "#eacb7f",
          400: "#e2b054",
          500: "#d79537",
          600: "#bd742b",
          700: "#985526",
          800: "#7c4426",
          900: "#673a24"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
