/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#D8AF00',
        black1: '#111111',
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      lineHeight: {
        1.1: '1.1',
        1.15: '1.15',
        1.2: '1.2',
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
};

export default config;
