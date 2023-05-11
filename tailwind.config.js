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
					300: '#333333',
				},
				'theme-red': {
					50: '#ff6a92',
					100: '#a90000',
				},
				'theme-green': {
					100: '#48b053',
				}
			},
			gridTemplateColumns: {
				'modal-shortcuts': '4.0rem 1fr',
			},
		},
		container: {
			padding: '1rem',
		},
	},
	plugins: [],
}

