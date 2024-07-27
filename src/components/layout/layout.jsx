import React, { useRef, useEffect } from 'react';
import './layout.scss';
import Sidebar from '../sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import Home from '../home/home';
import Video from '../../assests/background.mp4';

function Layout() {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const handleTimeUpdate = () => {
  //     if (videoElement.currentTime >= videoElement.duration - 12) {
  //       videoElement.pause();
  //     }
  //   };

  //   const handleEnded = () => {
  //     videoElement.pause();
  //   };

  //   videoElement.addEventListener('timeupdate', handleTimeUpdate);
  //   videoElement.addEventListener('ended', handleEnded);

  //   return () => {
  //     videoElement.removeEventListener('timeupdate', handleTimeUpdate);
  //     videoElement.removeEventListener('ended', handleEnded);
  //   };
  // }, []);

  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <video autoPlay muted id='video'>
          <source src={Video} type='video/mp4' />
        </video>
        {/* <span className='tags top-tags'>&lt;body&gt;</span> */}
        <Outlet />
        {/* <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span> */}
      <Home />
      </div>
    </div>
  );
}

export default Layout;
