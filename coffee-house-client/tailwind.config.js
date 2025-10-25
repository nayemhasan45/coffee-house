/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#331a15",
        secondary: "#1b1a1a",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#331a15",
          secondary: "#1b1a1a",
          "base-200": "#eceae3",
          "base-300": "#f5f4f1",
          "base-400": "#f4f3f0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}