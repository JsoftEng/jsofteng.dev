import React from 'react'
import PropTypes from 'prop-types'
import DownArrow from '../../../img/down-arrow.svg'

import './section.scss'

function Section (props) {
  let sectionClass = null
  let sectionID = null
  let content = null

  switch (props.name) {
    case 'Home':
      sectionClass = 'home-section'
      sectionID = 'home'
      content = <>
        <div className='avatar'>
          <h1>J</h1>
        </div>
        <a href='#about'><DownArrow className='down-arrow'/></a>
      </>
      break
    case 'About':
      sectionClass = 'about-section'
      sectionID = 'about'
      content = <></>
      break
    case 'Projects':
      sectionClass = 'projects-section'
      sectionID = 'projects'
      content = <></>
      break
    case 'Contact':
      sectionClass = 'contact-section'
      sectionID = 'contact'
      content = <></>
      break
    default:
      break
  }

  return (
    <div id={sectionID} className={sectionClass}>
      {content}
    </div>
  )
}

Section.propTypes = {
  name: PropTypes.string
}

export default Section