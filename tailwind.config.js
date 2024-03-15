/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Istok Web'],
      },
      colors: {
        greenColor: ['#046E1B'],
        yellowColor: ['#F79F1A'],
        grayColor: ['#7F7D7D'],
      },
    },
  },
  daisyui: {
    themes: ['cupcake', 'cmyk'],
  },
  plugins: [require('daisyui')],
};
