import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Project from './components/project/project';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Layout from './components/layout/layout';
import Home from './components/home/home';

function App() {
  return (
    <> 
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default component when no sub-route is specified */}
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
