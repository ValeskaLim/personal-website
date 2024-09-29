/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['"Oswald"', 'sans-serif']
      },
      keyframes: {
        blink: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

