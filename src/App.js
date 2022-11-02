import React, { useState, createContext} from 'react';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/homepage'
import Menupage  from './components/Menupage/menupage';
import Contactpage from './components/Contactpage/contactpage';
import Aboutpage from './components/Aboutpage/aboutpage';

function App() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <>
    <NavigationContext.Provider value={[[showNavigation, setShowNavigation]]}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/menu' element={<Menupage/>}/>
          <Route exact path='/contact' element={<Contactpage/>}/>
          <Route exact path='/about' element={<Aboutpage/>}/>
        </Routes>
      </Router>
    </NavigationContext.Provider>
    </>
  );
}

export const NavigationContext = createContext();
export default App;
