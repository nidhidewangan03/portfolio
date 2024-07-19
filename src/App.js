import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Skill from './components/skill/skill';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';

function App() {
  return (
    <> 
      <Routes>     
        <Route path="/" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
