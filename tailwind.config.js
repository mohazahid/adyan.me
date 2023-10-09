/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['"Inter"', 'monospace'],
      'league': ['"LeagueSpartan-Bold"', 'Bold'],
      'kenyanRg': ['"KenyanCoffeeRg-Regular"', 'Regular'],
      'kenyanRgIt': ['"KenyanCoffeeRg-Italic"', 'Italic'],
      'kenyanBd': ['"KenyanCoffeeBd-Bold"', 'Bold'],
      'kenyanBdIt': ['"KenyanCoffeeBd-BoldItalic"', 'BoldItalic'],
      'steelbg': ['"steelfish-bg-regular"', 'Bold'],
      'sfth-rg' : ['"sf-theramin-regular"', 'Regular'],
    },

  },
  plugins: [],
}

