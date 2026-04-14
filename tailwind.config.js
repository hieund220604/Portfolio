/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: { 900: '#08080d', 800: '#12121a', 700: '#1a1a26', 600: '#222233' },
        neon: { cyan: '#00f0ff', purple: '#a855f7', pink: '#ec4899', blue: '#3b82f6' }
      }
    }
  },
  plugins: [],
}
