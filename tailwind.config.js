/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(rgba(0, 0, 0, 0) 1.5px, #fff 1px)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}
