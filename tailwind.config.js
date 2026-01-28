/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#111827', // Gray 900 - Professional dark
          red: '#dc2626',  // Red 600 - Standard automotive red
          blue: '#1e3a8a', // Blue 900 - Trustworthy deep blue
          grey: '#4b5563', // Gray 600 - Neutral grey
        }
      }
    },
  },
  plugins: [],
}
