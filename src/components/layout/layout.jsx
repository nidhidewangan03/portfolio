import React, { useRef, useEffect, useState } from 'react';
import './layout.scss';
import Sidebar from '../sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import Home from '../home/home';
import Video from '../../assests/background.mp4';
import Image from '../../assests/bgImage.png';

function Layout() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        {isSmallScreen ? (
          <img src={Image} alt="Responsive Content" className="responsive-image" />
        ) : (
          <>
            <video autoPlay muted id='video'>
              <source src={Video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </>
        )}
            <Outlet /> {/* Render nested routes if using react-router */}
            <Home /> {/* Display Home component */}
      </div>
    </div>
  );
}

export default Layout;
