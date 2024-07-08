import React from'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Notfound from './components/Notfound';

function App(){
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/about">About</Link> 
          </li>
          <li>
            <Link to="/contact">Contact</Link> 
          </li>  
        </ul>
      </nav>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
