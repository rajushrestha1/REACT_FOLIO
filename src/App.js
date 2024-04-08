import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/HomeScreen';
import Navbar from './pages/Home/Navbar';
import AboutMe from './pages/Home/AboutMe';
import MyPortfolio from './pages/Home/MyPortfolio';
 import  Testimonial from './pages/Home/Testimonial';
import Contactme from './pages/Home/Contactme';
function App() {
  return (
    <div className="App">
      
     <>
     <Navbar />
     <div>
      <Routes>
        <Route path='/' element={< Home />}>Home</Route>
        <Route path='/aboutme' element={< AboutMe />}>About me</Route>
        <Route path='/portfolio' element={< MyPortfolio />}>Portfolio</Route>
        <Route path='/testimonial' element={< Testimonial />}>Testimonial</Route>
        <Route path='/contactme' element={< Contactme />}>Contact me</Route> 
        
      </Routes>
     </div>
     </>
    

    </div>
  );
}

export default App;
