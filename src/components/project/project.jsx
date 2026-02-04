import React from 'react'
import './project.scss'

const Project = () => {
  return (
    <div className='project-page'>
      <div className='content-wrapper'>
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
            <div className="project-card">
              <div className="project-content">
                <div className="title-arrow-container">
                  <h2>Design Projects</h2>
                  <div className="project-arrow">→</div>
                </div>
              </div>
            </div>
          </div>

          <div className='development-projects'>
            <div className="project-card">
              <div className="project-content">
                <div className="title-arrow-container">
                  <h2>Development Projects</h2>
                  <div className="project-arrow">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project