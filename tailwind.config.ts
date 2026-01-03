import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: "#FAF9F6",
        sand: "#E8E3D8",
        softgreen: "#D4D9C7",
        charcoal: "#2C2C2C",
        // Spiritual Gen-Z palette
        lavender: "#B4A5D8",
        sage: "#9CAF88",
        peach: "#F4C2A1",
        sky: "#A8D5E2",
        rose: "#E8B4B8",
        indigo: "#6B7FD7",
        mint: "#B8E6B8",
        coral: "#FF9F8E",
      },
    },
  },
  plugins: [],
};
export default config;
