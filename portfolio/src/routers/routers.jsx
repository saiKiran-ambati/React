import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default Routers;
