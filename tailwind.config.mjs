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
  			golden: '#D8AF00',
  			black1: '#111111',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			// ring: 'hsl(var(--ring))',
  			// chart: {
  			// 	'1': 'hsl(var(--chart-1))',
  			// 	'2': 'hsl(var(--chart-2))',
  			// 	'3': 'hsl(var(--chart-3))',
  			// 	'4': 'hsl(var(--chart-4))',
  			// 	'5': 'hsl(var(--chart-5))'
  			// }
  		},
  		fontFamily: {
  			display: [
  				'var(--font-display)',
  				'sans-serif'
  			],
  			body: [
  				'var(--font-body)',
  				'sans-serif'
  			]
  		},
  		lineHeight: {
  			'1.1': '1.1',
  			'1.15': '1.15',
  			'1.2': '1.2'
  		},
  		container: {
  			center: true,
  			padding: '1rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [
    heroui(), // ✅ Add HERO UI plugin
    require("@tailwindcss/forms"), // ✅ Optional: Improves form styling
      require("tailwindcss-animate")
],
};

export default config;
