/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/Aboutpage/aboutpage.js', './src/components/Contactpage/contactpage.js', './src/components/Menupage/menupage.js', './src/components/Menupage/menucuisines.js', './src/components/Homepage/homepage.js', './src/components/Homepage/postlisting.js', 
  './src/components/Homepage/pricelist.js', './src/components/Homepage/navigation.js', './src/components/Homepage/cuisinelisting.js',
   './src/components/footer.js', './src/components/header.js', './src/components/reservation.js', './src/components/Homepage/reviewlisting.js', 
  './src/components/Homepage/producelisting.js',  './public/index.html'],
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
      darkgreen: '#233000',
    },
    fontFamily: {
      rufina: ['Rufina', 'serif'],
      lato: ['Lato', 'sans-serif'], 
      inter: ['Inter', 'sans-serif']
    },
    fontSize: {
      sm: '8px', //14px
      xxxsm: '10px', //18px
      xxsm: '11px', //20px
      xsm: '12px', //22px
      base: '13px', //24px
      xl: '14px', //26px
      xxl: '20px', //32px
      xxxl: '25px', //48px
      xxxxl: '32px', //66px
      xxxxxl: '35px', //68px
      xxxxxxl: '5.5rem', //88px
      xxxxxxxl: '49px', //108px
      xxxxxxxxl: '65px', //148px
    },
    screens: {
      normal: '1367px'
    }
  },
  plugins: [],
}
