import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "482px",
        md: "991px",
        lg: "1440px",
        xl: "1920px",
      },
      colors: {
        primary: {
          DEFAULT: "#234e70",
          light: "#2c6089",
        },
        secondary: "#fbf8be",
      },
    },
  },
  plugins: [],
};
export default config;
