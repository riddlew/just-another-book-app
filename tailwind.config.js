/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'theme-purple': {
					100: '#A5A8FA',
					200: '#3b3d7d',
					300: '#242549',
				},
				'theme-gray': {
					100: '#a8a8a8',
					200: '#737373',
				},
				'theme-red': {
					100: '#a90000',
				},
			},
		},
		container: {
			padding: '1rem',
		},
	},
	plugins: [],
}

