import React from 'react';
import './about.scss';
import Image from '../../assests/about-img.png';

const About = () => {
  return (
    <div className='about-page'>
      <div className='text-zone'>
        <div id='about'>
          <h1>About Me</h1>
        </div>
        <div id='about-para'>
          <p>
            I am a passionate learner with a keen interest in designing and frontend development.
            As a beginner in UI/UX design, I am actively exploring the field. 
            Currently, I work as a self-employed graphic designer, offering freelance services. 
            I am also an active member of several vibrant tech communities, including MLSA, Lottie, GDSC SSTC, and HackClub SSTC.
          </p>
        </div>
        <a className='flat-button' href="/NidhiDewangan_Resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div id='about-img'>
        <img 
          src={Image} 
          alt="Designed Image"
        />
      </div>
    </div>
  );
}

export default About;