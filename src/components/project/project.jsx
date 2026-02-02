import React from 'react'
import './project.scss'
import DesignImage from '../../assests/hi.png'
import DevelopmentImage from '../../assests/hi.png'

const Project = () => {
  return (
    <div className='project-page'>
      <div className='text-zone'>
        <div id='project'>
          <h1>My Work</h1>
        </div>
        
        <div id='project-para'>
          <p>
            I am currently working on several exciting projects that showcase my skills and creativity. 
            Stay tuned for updates as I continue to develop and refine these projects!
          </p>
          <p>
            From innovative web applications to creative design solutions, each project represents 
            my dedication to quality and attention to detail.
          </p>
        </div>
      </div>
      
      <div id='projects-container'>
        <div className='design-projects'>
          {/* <img src={DesignImage} alt="Designed Image"/> */}
          <h1>Design Projects</h1>
        </div>

        <div className='development-projects'>
          {/* <img src={DevelopmentImage} alt="Developed Image"/> */}
          <h1>Development Projects</h1>
        </div>
      </div>
    </div>
  )
}
export default Project
