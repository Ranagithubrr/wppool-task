/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        "mainbg": '#2042B6',
       
      },
      colors:{
         "text": "#191618",
        "heading": "#191618"
      }
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1000px",
    xl: "1280px",
    "2xl": "1636px"
  },
  plugins: [],
}

