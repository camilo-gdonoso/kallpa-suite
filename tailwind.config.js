/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kallpa: {
          blue: '#2563eb',
          dark: '#0f172a',
          accent: '#3b82f6',
        }
      }
    },
  },
  plugins: [],
}
