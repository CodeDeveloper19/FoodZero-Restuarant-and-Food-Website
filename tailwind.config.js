/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/Homepage/homepage.js', './src/components/Homepage/pricelist.js', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      darkwhite: '#B0B0B0',
      lightwhite: '#EBF0E4',
      darkerwhite: '#4D4D4D',
      black: '#000000',
      lightgreen: '#9CAA00',
      green: '#5E6600',
      darkgreen: '#233000'
    },
    fontFamily: {
      rufina: ['Rufina', 'serif'],
      lato: ['Lato', 'sans-serif'], 
      inter: ['Inter', 'sans-serif']
    },
    fontSize: {
      sm: '0.875rem', //14px
      xxxsm: '1.125rem', //18px
      xxsm: '1.25rem', //20px
      xsm: '1.375rem', //22px
      base: '11px', //24px
      xl: '1.625rem', //26px
      xxl: '2rem', //32px
      xxxl: '20px', //48px
      xxxxl: '4.125rem', //66px
      xxxxxl: '30px', //68px
      xxxxxxl: '5.5rem', //88px
      xxxxxxxl: '47px', //108px
      xxxxxxxxl: '65px', //148px
    }
  },
  plugins: [],
}
