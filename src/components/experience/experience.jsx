import React from 'react'
import './experience.scss'

const Experience = () => {
  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js', 'Redux', 'SASS/SCSS'];
  // const backendSkills = ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL', 'Python'];
  const toolsSkills = ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma', 'Webpack', 'Jest'];

  return (
    <div className='skills-experience-page'>
      <div className='content-wrapper'>
        <div className='text-zone'>
          <div id='skills'>
            <h1>Tech Stack I'm familiar with</h1>
          </div>
          
          <div id='project-para'>
            <p>
              Primarily focused on the Javascript ecosystem, but always eager to explore and learn new technologies.
            </p>
          </div>
        </div>
        
        <div className='tech-stack-container'>
          <div className='tech-category'>
            <h3 className='category-title'>Frontend</h3>
            <div className='skills-list'>
              {frontendSkills.map((skill, index) => (
                <div key={index} className='skill-item'>{skill}</div>
              ))}
            </div>
          </div>

          {/* <div className='tech-category'>
            <h3 className='category-title'>Backend</h3>
            <div className='skills-list'>
              {backendSkills.map((skill, index) => (
                <div key={index} className='skill-item'>{skill}</div>
              ))}
            </div>
          </div> */}

          <div className='tech-category'>
            <h3 className='category-title'>Tools & Others</h3>
            <div className='skills-list'>
              {toolsSkills.map((skill, index) => (
                <div key={index} className='skill-item'>{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience