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
        }

      }
    },
  },
  plugins: [],
}

