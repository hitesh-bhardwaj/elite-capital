/** @type {import('tailwindcss').Config} */

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: {
				max: '540px'
			},
			tablet: {
				min: '541px',
				max: '1024px'
			},
			imac:{
				min:"1920px",
				max:"2224px"
			}
		},
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
				input: 'hsl(var(--input))'
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
				'1.2': '1.2',
				'1.5': '1.5',
			},
			container: {
				center: true,
				padding: '1rem'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.5s ease-out',
				'accordion-up': 'accordion-up 0.5s ease-out'
			}
		}
	},
	darkMode: ["class", "class"],
	plugins: [
		require("@tailwindcss/forms"), 
		require("tailwindcss-animate")
	],
};

export default config;
