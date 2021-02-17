import React from 'react'
import PropTypes from 'prop-types'
import SectionHeadingArrowLeftLight from '../../../img/section-heading-arrow-left.png'
import SectionHeadingArrowRightLight from '../../../img/section-heading-arrow-right.png'
import SectionHeadingArrowLeftDark from '../../../img/section-heading-arrow-left-dark.png'
import SectionHeadingArrowRightDark from '../../../img/section-heading-arrow-right-dark.png'

function SectionHeader (props) {
  let content = null
  let sectionHeadingArrowLeft = null
  let sectionHeadingArrowRight = null

  switch (props.theme) {
    case 'dark':
      sectionHeadingArrowLeft = SectionHeadingArrowLeftDark
      sectionHeadingArrowRight = SectionHeadingArrowRightDark
      break
    default:
      sectionHeadingArrowLeft = SectionHeadingArrowLeftLight
      sectionHeadingArrowRight = SectionHeadingArrowRightLight
      break
  }

  switch (props.orientation) {
    case 'right':
      content =
        <>
          <div id='section-header-align-right' className='section-header-align-right'>
            <h1 className='section-header-label'>{props.name.toUpperCase()}</h1>
            <img src={sectionHeadingArrowRight} id={props.id} className='section-heading-arrow'></img>
          </div>
        </>
      break
    case 'left':
      content =
        <>
          <div id='section-header-align-left' className='section-header-align-left'>
            <h1 className='section-header-label'>{props.name.toUpperCase()}</h1>
            <img src={sectionHeadingArrowLeft} id={props.id} className='section-heading-arrow'></img>
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