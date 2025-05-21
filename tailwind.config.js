/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF4500', // Orange-red
        secondary: '#0A1128', // Dark blue background
        accent: '#3B82F6', // Blue
        'accent-pink': '#EC4899', // Pink
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 