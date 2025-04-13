import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Couleurs de fond pour les catégories
    "bg-blue-500/10",
    "bg-purple-500/10",
    "bg-amber-500/10",
    // Couleurs de texte pour les catégories
    "text-blue-500",
    "text-purple-500",
    "text-amber-500",
    // Couleurs pour les barres de progression
    "bg-blue-500",
    "bg-purple-500",
    "bg-amber-500",
    // Variantes dark mode (si utilisées)
    "dark:bg-blue-800/30",
    "dark:bg-purple-800/30",
    "dark:bg-amber-800/30",
    "dark:border-blue-800/30",
    "dark:border-purple-800/30",
    "dark:border-amber-800/30",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".flip-card": {
          perspective: "1500px",
        },
        ".flip-card-inner": {
          transformStyle: "preserve-3d",
          transition: "transform 0.7s",
        },
        ".flip-card-front": {
          backfaceVisibility: "hidden",
        },
        ".flip-card-back": {
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        },
        ".flip-rotate": {
          transform: "rotateY(180deg)",
        },
      });
    }),
  ],
} satisfies Config;
