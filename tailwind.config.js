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
        'jeremyMain' : "url('./pages/images/jeremy/main.jpg')",
        'jeremyGame1' : "url('./pages/images/game/commentate.jpg')",
        'jeremyMusic' : "url('./pages/images/jeremy/behind.jpg')",
        'jeremyMusic2' : "url('./pages/images/music/blue.png')",
        'jeremyMusic3' : "url('./pages/images/jeremy/BW.jpg')",
        'jeremyContact' : "url('./pages/images/jeremy/backOut1.jpg')",
      },
      fontFamily: {
        'Roboto': ['"Roboto", "sans-serif"'],
        'Berkshire': ['"Berkshire Swash", "cursive"']
      },
      maxHeight: {
        '85': '85vh',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  
}