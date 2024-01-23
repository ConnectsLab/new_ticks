import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Darker Grotesque", "sans-serif"],
        body: ["Jost", "sans-serif"],
      },
      colors: {
        darkBackground: "#10132F",
        darkBackground2: "#3B3E54",
      },
    },
  },
  plugins: [],
};
export default config;
