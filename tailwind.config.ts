import colors from "./src/constant/color";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...colors,
      },
    },
  },
  plugins: [],
} satisfies Config;
