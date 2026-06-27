import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#17201a",
          muted: "#4d594f",
          soft: "#758075"
        },
        canvas: {
          DEFAULT: "#fbfaf6",
          warm: "#f6f0e7",
          cool: "#eef5f3"
        },
        paper: {
          DEFAULT: "#ffffff",
          warm: "#fffdf8"
        },
        moss: {
          50: "#eef6f0",
          100: "#d9eadd",
          200: "#bdd8c3",
          300: "#95bd9f",
          400: "#6c9d78",
          500: "#4f7d5a",
          600: "#3f6749",
          700: "#31543b",
          800: "#273f2f",
          900: "#1f3627"
        },
        coral: {
          50: "#fff1ed",
          100: "#ffe0d7",
          300: "#f3a08e",
          500: "#d7624c",
          600: "#bd4f3d",
          700: "#9e3f2f"
        },
        gold: {
          50: "#fff9e7",
          100: "#f5e9bf",
          300: "#dfc776",
          400: "#c8a84c",
          600: "#937226"
        },
        sky: {
          50: "#eef8fb",
          100: "#d7eef4",
          300: "#91c9d7",
          500: "#4c95a8",
          700: "#2f6473"
        },
        plum: {
          50: "#f7f1f5",
          300: "#c99bb6",
          600: "#8b5170",
          800: "#573044"
        }
      },
      fontSize: {
        "eyebrow": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.16em", fontWeight: "800" }],
        "step--1": ["0.875rem", { lineHeight: "1.5rem" }],
        "step-0": ["1rem", { lineHeight: "1.75rem" }],
        "step-1": ["1.125rem", { lineHeight: "2rem" }],
        "step-2": ["1.375rem", { lineHeight: "2.125rem" }],
        "step-3": ["1.75rem", { lineHeight: "2.25rem" }],
        "step-4": ["2.25rem", { lineHeight: "2.65rem" }],
        "step-5": ["3rem", { lineHeight: "3.25rem" }],
        "step-6": ["4.25rem", { lineHeight: "4.35rem" }]
      },
      spacing: {
        "section-sm": "4rem",
        section: "6rem",
        "section-lg": "8rem"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "ui-serif", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 32, 26, 0.12)",
        lift: "0 28px 80px rgba(23, 32, 26, 0.16)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.55)"
      },
      borderRadius: {
        card: "0.5rem",
        field: "0.375rem"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.2,.7,.2,1)"
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 18% 12%, rgba(200,168,76,.18), transparent 22%), radial-gradient(circle at 82% 18%, rgba(76,149,168,.16), transparent 24%), linear-gradient(180deg, rgba(255,255,255,.7), rgba(251,250,246,.95))"
      }
    }
  },
  plugins: []
};

export default config;
