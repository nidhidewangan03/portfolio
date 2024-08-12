import React from 'react';
import './about.scss';
import Image from '../../assests/hi.png'

const About = () => {
  return (
    <div className ='container about-page'>
      <div className='text-zone'>
        <div id='about'>
          <h1>About Me</h1>
        </div>
        {/* <div className='image-about' id='img-about'>
          <img src = {Image}></img>
        </div> */}
        <div  id='para-about'>
          <p> 
          I am a passionate learner with a keen interest in designing and frontend development.
          As a beginner in UI/UX design, I am actively exploring the field. 
          Currently, I work as a self-employed graphic designer, offering freelance services. 
          I am also an active member of several vibrant tech communities, including MLSA, Lottie, GDSC SSTC, and HackClub SSTC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
