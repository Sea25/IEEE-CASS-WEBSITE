/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'cass-green': '#008752',
        'cass-dark': '#1a1a1a',
        'cass-gray': '#4a4a4a',
        'cass-light': '#f5f5f5',
      },
    },
  },
  plugins: [],
}