/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'Linear gradient (active input border)': 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
        'Red (input errors)': 'hsl(0, 100%, 66%)',
        'White': 'hsl(0, 0%, 100%)',
        'Light grayish violet': 'hsl(270, 3%, 87%)',
        'Dark grayish violet': 'hsl(279, 6%, 55%)',
        'Very dark violet': 'hsl(278, 68%, 11%)',
      },
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
