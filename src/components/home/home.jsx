import React from 'react'
import './home.scss'; 
import { ReactTyped } from "react-typed";
// import file from '../../assests/NidhiDewangan_Resume.pdf'

const Home = () => {
  
  return (   
      <div className='home-page'>
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
