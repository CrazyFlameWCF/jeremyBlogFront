/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'jeremyPro' : "url('./pages/images/jeremyProfile.png')",
        'jeremyPer' : "url('./pages/images/jeremyPerform.png')",
        'jeremyTO' : "url('./pages/images/jeremyTO.png')",
        'jeremyCom' : "url('./pages/images/jeremyCommentate.jpg')",
        'jeremyPlays' : "url('./pages/images/jeremyPlays.jpg')",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  
}