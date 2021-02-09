import React from 'react'
import PropTypes from 'prop-types'
import SectionHeadingContainerLeft from '../../../img/section-heading-container-left.svg'
import SectionHeadingContainerRight from '../../../img/section-heading-container-right.svg'

import './section-header.scss'

function SectionHeader (props) {
  let content = null

  switch (props.orientation) {
    case 'right':
      content =
        <>
          <div id='section-header-align-right' className='section-header-align-right'>
            <h1 className='section-header-label'>{props.name.toUpperCase()}</h1>
            <SectionHeadingContainerRight id={props.id} className='section-heading-container'/>
          </div>
        </>
      break
    case 'left':
      content =
        <>
          <div id='section-header-align-left' className='section-header-align-left'>
            <h1 className='section-header-label'>{props.name.toUpperCase()}</h1>
            <SectionHeadingContainerLeft id={props.id} className='section-heading-container'/>
          </div>
        </>
      break
  }

  return (
    content
  )
}

SectionHeader.propTypes = {
  name: PropTypes.string,
  orientation: PropTypes.string
}

export default SectionHeader