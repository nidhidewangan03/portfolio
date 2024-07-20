import React from 'react';
import './about.scss';
import Sidebar from '../sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import Home from '../home/home';

const About = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet></Outlet>
        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br/>
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
      <Home></Home>
    </div>
  );
}

export default About;
