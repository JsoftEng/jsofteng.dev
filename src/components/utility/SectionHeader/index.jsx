import React from 'react'
import PropTypes from 'prop-types'
import SectionHeadingArrowLeft from '../../../img/section-heading-arrow-left.png'
import SectionHeadingArrowRight from '../../../img/section-heading-arrow-right.png'

import './section-header.scss'

function SectionHeader (props) {
  let content = null

  switch (props.orientation) {
    case 'right':
      content =
        <>
          <div id='section-header-align-right' className='section-header-align-right'>
            <h1 className='section-header-label'>{props.name.toUpperCase()}</h1>
            <img src={SectionHeadingArrowRight} id={props.id} className='section-heading-arrow'></img>
          </div>
        </>
      break
    case 'left':
      content =
        <>
          <div id='section-header-align-left' className='section-header-align-left'>
            <h1 className='section-header-label'>{props.name.toUpperCase()}</h1>
            <img src={SectionHeadingArrowLeft} id={props.id} className='section-heading-arrow'></img>
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