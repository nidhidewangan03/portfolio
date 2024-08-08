import React , { useRef, useEffect, useState } from 'react'
import './home.scss'; 
import { ReactTyped } from "react-typed";
import Video from '../../assests/background.mp4';

const Home = () => {
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
      <div className='home-page'>
        {isSmallScreen ? (
            <video autoPlay muted className="responsive-image">
                <source src={Video} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
          ) : (
            <>
              <video autoPlay muted id='video'>
                <source src={Video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </>
          )}

        <div className='text-zone'>
        <h3 className='typewriting'><ReactTyped
          strings={["Namaste ", "Hello ", "Bonjour "]}
          typeSpeed={100}
          loop
          backSpeed={30}
          cursorChar="|"
          showCursor={true}
        /></h3>
        {/* <h2>Hello</h2> */}
        <h1>I'm Nidhi Dewangan <br/></h1>
        <h2>Designer and Developer</h2>
        <h3>Frontend Developer | UI/UX Designer</h3>
        <a className='flat-button' href="/NidhiDewangan_Resume.pdf" download>Download Resume</a>
        </div>
      </div>
  )
}

export default Home
