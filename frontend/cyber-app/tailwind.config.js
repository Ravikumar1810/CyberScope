/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ REQUIRED!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0f172a",
        primary: "#6366f1",
        accent: "#10b981",
        card: "#1e293b",
        border: "#334155",
        textMain: "#e2e8f0",
      },
    },
  },
  plugins: [],
}
