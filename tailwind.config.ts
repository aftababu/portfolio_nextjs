import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 1px',
        "inner-box":
          "inset 0 2px 4px rgba(0, 0, 0, 0.06), inset 0 -2px 4px rgba(0, 0, 0, 0.06), inset 2px 0 4px rgba(0, 0, 0, 0.06), inset -2px 0 4px rgba(0, 0, 0, 0.06)",
        "dark:inner-box":
          "inset 0 2px 4px rgba(255, 255, 255, 0.06), inset 0 -2px 4px rgba(255, 255, 255, 0.06), inset 2px 0 4px rgba(255, 255, 255, 0.06), inset -2px 0 4px rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "410px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
