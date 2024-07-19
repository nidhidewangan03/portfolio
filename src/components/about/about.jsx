import React from 'react';
import './about.scss';
import Sidebar from '../sidebar/sidebar';
import { Outlet } from 'react-router-dom';

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

      <div className='container home-page'>
        <div className='text-zone'>
          <h1>Hi, <br/>I'm</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
