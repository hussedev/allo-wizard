import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "text-color": "#333333",
        "gray-1": "#f9fafb",
        "gray-2": "#eff1f3",
        "gray-3": "#d8dbe2",
        "gray-4": "#818998",
        "gray-5": "#575c66",
        "gray-6": "#2c374b",
        "blue-1": "#f5f6ff",
        "blue-2": "#4e5de4",
        "blue-3": "#343f9d",
        "yellow-1": "#fffaeb",
        "yellow-2": "#ffcc33",
        "yellow-3": "#b27700",
        "red-1": "#feecec",
        "red-2": "#f53d3d",
        "red-3": "#aa0909",
        "solidity-blue-1": "#51d4ff",
        "solidity-blue-2": "#4e5de4",
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
      spacing: {
        "size-1": "0.25rem",
        "size-2": "0.5rem",
        "size-3": "0.75rem",
        "size-4": "1rem",
        "size-8": "2rem",
        "size-64": "16rem",
      },
      fontSize: {
        "text-small": "0.875rem",
      },
      boxShadow: {
        custom: "0 2px 3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        monospace: [
          "ui-monospace",
          "Cascadia Code",
          "Source Code Pro",
          "Menlo",
          "Consolas",
          "DejaVu Sans Mono",
          "monospace",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
