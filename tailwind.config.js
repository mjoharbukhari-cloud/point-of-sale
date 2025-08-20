/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e8f5e9',   // e.g., Tailwind's blue-700
        secondary: '#0964b3', // e.g., Tailwind's amber-500
      },
    },
  },
  plugins: [],
}