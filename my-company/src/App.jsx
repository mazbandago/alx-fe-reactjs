import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './assets/pages/About';
import Services from './assets/pages/Service';
import Contact from './assets/pages/Contact';
import Navbar from './src/components/Navbar';
import Home from './assets/pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
