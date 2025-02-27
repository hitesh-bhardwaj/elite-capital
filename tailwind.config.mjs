/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/theme");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // ✅ Include all HERO UI components
  ],
  theme: {
    extend: {
      colors: {
        golden: "#D8AF00",
        black1: "#111111",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      lineHeight: {
        1.1: "1.1",
        1.15: "1.15",
        1.2: "1.2",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(), // ✅ Add HERO UI plugin
    require("@tailwindcss/forms"), // ✅ Optional: Improves form styling
  ],
};

export default config;
