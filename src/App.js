import React, { useState, useEffect, createContext} from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/homepage'
import Menupage  from './components/Menupage/menupage';
import Contactpage from './components/Contactpage/contactpage';
import Aboutpage from './components/Aboutpage/aboutpage';
import Portfoliopage from './components/Portfoliopage/portfoliopage';
import Blogpage from './components/Blogpage/blogpage';
import Dishdescription from './components/Portfoliopage/dishdescription';
import Article from './components/Blogpage/article';

const getWindowSize = () => {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

function App() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowSize(getWindowSize());
      }
    
      window.addEventListener('resize', handleWindowResize); 

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
  }, [])

  return (
    <>
    <NavigationContext.Provider value={[[showNavigation, setShowNavigation], [windowSize]]}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/menu' element={<Menupage/>}/>
          <Route exact path='/contact' element={<Contactpage/>}/>
          <Route exact path='/about' element={<Aboutpage/>}/>
          <Route exact path='/about/portfolio' element={<Portfoliopage/>}/>
          <Route path='/about/portfolio/:dishname' element={<Dishdescription/>}/>
          <Route exact path='/blog' element={<Blogpage/>}/>
          <Route path='/blog/:articletitle' element={<Article/>}/>
        </Routes>
      </Router>
    </NavigationContext.Provider>
    </>
  );
}

export const NavigationContext = createContext();
export default App;
