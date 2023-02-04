/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js', './src/components/Reservation/mainreservation.js', './src/components/Blogpage/blogpage.js', './src/components/Blogpage/tags.js', './src/components/Blogpage/recentposts.js', './src/components/Blogpage/morearticles.js', './src/components/Blogpage/recentcomments.js', 
  './src/components/Blogpage/comment.js', './src/components/Blogpage/categories.js', './src/components/Blogpage/archives.js', './src/components/Blogpage/article.js', 
  './src/components/Portfoliopage/portfoliopage.js', './src/components/Portfoliopage/dishdescription.js', './src/components/Portfoliopage/dishes.js', 
  './src/components/Portfoliopage/dish.js', './src/components/Aboutpage/aboutpage.js', './src/components/Aboutpage/employees.js', './src/components/Contactpage/contactpage.js', 
  './src/components/Menupage/menupage.js', './src/components/Menupage/menucuisines.js', './src/components/Homepage/homepage.js', './src/components/Homepage/postlisting.js', 
  './src/components/Homepage/pricelist.js', './src/components/Homepage/navigation.js', './src/components/Homepage/cuisinelisting.js',
  './src/components/footer.js', './src/components/header.js', './src/components/reservation.js', './src/components/Homepage/reviewlisting.js', 
  './src/components/Homepage/producelisting.js',  './public/index.html'],
  mode: 'jit',
  theme: {
    extend: {
      transitionDuration: {
        '3000': '3000ms',
      },
      gridTemplateColumns:{
        '450': '500px 500px',
        'full': '1fr',
        '60': '65% 30%',
      }
    },
    colors: {
      white: '#FFFFFF',
      darkwhite: '#B0B0B0',
      lightwhite: '#EBF0E4',
      darkerwhite: '#4D4D4D',
      black: '#000000',
      lightgreen: '#9CAA00',
      green: '#5E6600',
      darkgreen: '#233000',
      slate: 'rgb(241 245 249)'
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
      xr: '22px', //38px
      xxxl: '25px', //48px
      xxxxl: '32px', //66px
      xxxxxl: '35px', //68px
      xxxxxxl: '42px', //88px
      xxxxxxxl: '49px', //108px
      xxxxxxxxl: '65px', //148px
    },
    screens: {
      microPhone: '300px',      
      smartPhone: '400px',
      phone: '500px',
      minTablet: '650px',
      maxTablet: {max: '649px'},
      MaxTablet: {max: '899px'},
      tablet: '900px',
      minLaptop: '1000px',
      laptop: '1200px',
      normal: '1367px',
    },
  },
  plugins: [],
}