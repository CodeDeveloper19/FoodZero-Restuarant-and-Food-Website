import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/homepage'
import Menupage  from './components/Menupage/menupage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/menu' element={<Menupage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
