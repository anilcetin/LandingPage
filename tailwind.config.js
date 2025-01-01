/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B68EE",
        secondary: "#4A4A4A",
        "primary-light": "#8A7BF7",
        "primary-dark": "#6C5CE7",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to bottom, rgba(49, 46, 129, 0.8), rgba(49, 46, 129, 0.2))",
      },
    },
  },
  plugins: [],
} 