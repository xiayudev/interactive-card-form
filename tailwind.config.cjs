/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'linear-gradient': 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
        'input-errors': 'hsl(0, 100%, 66%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif']
      },
      screens: {
        'desktop': '1440px'
      },
      backgroundImage: {
        'main-desktop': "url('/imgs/bg-main-desktop.png')",
        'main-mobile': "url('/imgs/bg-main-mobile.png')",
        'card-back': "url('/imgs/bg-card-back.png')",
        'card-front': "url('/imgs/bg-card-front.png')"
      }

    },
  },
  plugins: [],
}
