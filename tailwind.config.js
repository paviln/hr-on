const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        'primary': '#2A2E35',
        'secondary': '#1A1C20',
        'white': colors.white,
        'sky': '#2A5EF6'
    },
    extend: {
        fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],        
        }, 
    }
  },
  plugins: [],
}
