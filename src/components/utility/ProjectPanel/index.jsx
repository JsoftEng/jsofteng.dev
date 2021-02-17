import React from 'react'
import PortfolioThumbnail from '../../../img/project-thumbnails/portfolio-thumbnail.webp'

function ProjectPanel (props) {
  let projectURL = null
  let projectTitle = null
  let projectThumbnail = null
  let projectThumbnailAltText = null
  let projectDescription = null
  let projectTech = null
  let techList = null

  switch (props.name) {
    case 'portfolio-project':
      projectTitle = 'Portfolio'
      projectURL = 'https://jsofteng.dev'
      projectThumbnail = PortfolioThumbnail
      projectThumbnailAltText = 'Portfolio Thumbnail'
      projectDescription = 'My personal portfolio site. I wanted to take a shot at the neumorphic aesthetic, so I decided that my portfolio was as good a project as any!'
      projectTech = [
        {
          id: '1',
          name: 'HTML',
          url: 'https://html.spec.whatwg.org/'
        },
        {
          id: '2',
          name: 'SASS',
          url: 'https://sass-lang.com/'
        },
        {
          id: '3',
          name: 'Javascript',
          url: null
        },
        {
          id: '4',
          name: 'React',
          url: 'https://reactjs.org/'
        },
        {
          id: '5',
          name: 'Babel',
          url: 'https://babeljs.io/'
        },
        {
          id: '6',
          name: 'Webpack',
          url: 'https://webpack.js.org/'
        },
        {
          id: '7',
          name: 'Netlify',
          url: 'https://www.netlify.com/'
        }
      ]
      break
  }

  techList = projectTech.map((tech) => {
    return (
      <a key={tech.id} href={tech.url} target='_blank' rel='noreferrer' className='project-tech'>
        <h2>{tech.name}</h2>
      </a>
    )
  })

  const content =
    <>
      <div id='project-panel' className='project-panel'>
        <div id='project-panel-main' className='project-panel-main'>
          <a href={projectURL}>
            <div id='project-thumbnail' className='project-thumbnail'>
              <img src={projectThumbnail} alt={projectThumbnailAltText}/>
            </div>
          </a>
          <h2>{projectTitle}</h2>
        </div>
        <div id='project-panel-info' className='project-panel-info'>
          <p id='project-description' className='project-description'>
            {projectDescription}
          </p>
          <div id='project-tech-container' className='project-tech-container'>{techList}</div>
        </div>
      </div>
    </>
  return (
    content
  )
}

export default ProjectPanel