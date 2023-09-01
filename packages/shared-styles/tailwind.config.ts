import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
      },
    },
  },
  plugins: [],
} satisfies Config;
