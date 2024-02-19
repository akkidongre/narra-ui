/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": "#377DB8",
        "secondary": "#F2F5F8",
        "accent": "#F2F5F8",
        "primary-dark": "#1C5A8D",
        "secondary-dark": "#2C3034",
        "accent-dark": "#F9C06F",
        "error": "#D9534F",
        "success": "#5CB85C"
      }
    },
  },
  plugins: [],
}

