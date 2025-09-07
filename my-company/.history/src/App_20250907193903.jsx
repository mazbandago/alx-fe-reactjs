import React from 'react'
import Navbar from './assets/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Service from './assets/pages/Service';
// import './index.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "About" element ={<About />}/>
        <Route path = "Contact" element ={<Contact />}/>
        <Route path = "Service" element ={<Service />}/>
      </Routes>
    </main>
    </BrowserRouter>
    
  )
}
export default App;