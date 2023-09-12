import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				home: "url(/backgrounds/mobile-home-bg.jpg)"
			},
			colors: {
				"primary": "#0b0d17",
				"secondary": "#d0d6f9"
			},
			fontFamily: {
				sans: ['Barlow Condensed', 'sans-serif', ...defaultTheme.fontFamily.sans],
				serif: ['Bellefair', 'serif', ...defaultTheme.fontFamily.serif],
			}
		},
	},
	plugins: [],
}
