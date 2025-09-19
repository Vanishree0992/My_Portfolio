/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      nude: "#F5E6DA",
      honey: "#E8B86D",
      wood: "#A47C48",
      coffee: "#5C4033"
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
      fancy: ["Playfair Display", "serif"],
    },
  },
},
}
