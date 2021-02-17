import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TwitterIcon from '../../../img/icons/twitter.svg'
import GithubIcon from '../../../img/icons/github.svg'
import LinkedInIcon from '../../../img/icons/linkedin.svg'
import Indicator from '../../utility/Indicator'
import Toggle from 'react-toggle'

function Header (props) {
  const initialIndicatorState = props.headerState
  const [indicatorState, setIndicatorState] = useState(initialIndicatorState)

  const handleIndicatorClick = (e) => {
    const indicatorType = e.currentTarget.id
    let newIndicatorState = null

    switch (indicatorType) {
      case 'home-header-indicator' || 'home-header-label':
        newIndicatorState = {
          homeIndicator: 'true',
          aboutIndicator: 'false',
          projectsIndicator: 'false',
          contactIndicator: 'false'
        }
        break
      case 'about-header-indicator' || 'about-header-label':
        newIndicatorState = {
          homeIndicator: 'false',
          aboutIndicator: 'true',
          projectsIndicator: 'false',
          contactIndicator: 'false'
        }
        break
      case 'projects-header-indicator' || 'projects-header-label':
        newIndicatorState = {
          homeIndicator: 'false',
          aboutIndicator: 'false',
          projectsIndicator: 'true',
          contactIndicator: 'false'
        }
        break
      case 'contact-header-indicator' || 'contact-header-label':
        newIndicatorState = {
          homeIndicator: 'false',
          aboutIndicator: 'false',
          projectsIndicator: 'false',
          contactIndicator: 'true'
        }
        break
    }

    setIndicatorState(newIndicatorState)
  }

  const handleLabelClick = (e) => {
    const indicatorType = e.currentTarget.id
    let newIndicatorState = null

    switch (indicatorType) {
      case 'home-header-label':
        newIndicatorState = {
          homeIndicator: 'true',
          aboutIndicator: 'false',
          projectsIndicator: 'false',
          contactIndicator: 'false'
        }
        break
      case 'about-header-label':
        newIndicatorState = {
          homeIndicator: 'false',
          aboutIndicator: 'true',
          projectsIndicator: 'false',
          contactIndicator: 'false'
        }
        break
      case 'projects-header-label':
        newIndicatorState = {
          homeIndicator: 'false',
          aboutIndicator: 'false',
          projectsIndicator: 'true',
          contactIndicator: 'false'
        }
        break
      case 'contact-header-label':
        newIndicatorState = {
          homeIndicator: 'false',
          aboutIndicator: 'false',
          projectsIndicator: 'false',
          contactIndicator: 'true'
        }
        break
    }

    setIndicatorState(newIndicatorState)
  }

  const handleDownArrowClick = () => {
    setIndicatorState(
      {
        homeIndicator: 'false',
        aboutIndicator: 'true',
        projectsIndicator: 'false',
        contactIndicator: 'false'
      }
    )
  }

  useEffect(() => {
    setIndicatorState(props.headerState)
  }, [props.headerState])

  useEffect(() => {
    const downArrow = document.getElementById('down-arrow')

    downArrow.addEventListener('click', handleDownArrowClick)

    return () => {
      window.removeEventListener('keydown', handleDownArrowClick)
    }
  }, [])

  return (
    <div className='header-container'>
      <div className='header-top-container'>
        <a href='/'>
          <div className='header-icon'>
            <h1>J</h1>
          </div>
        </a>
        <Toggle defaultChecked={true} onChange={props.toggleTheme} icons={false}/>
      </div>
      <div className='header-nav-container'>
        <nav className='header-nav'>
          <ul>
            <li>
              <a id='home-header-indicator' href='#home' onClick={handleIndicatorClick}>
                <Indicator className='header-indicator' isActive={indicatorState.homeIndicator}/>
              </a>
              <a id='home-header-label' href='#home' onClick={handleLabelClick}>
                <h2 className='header-label'>Home</h2>
              </a>
            </li>
            <li>
              <a id='about-header-indicator' href='#about-section-header' onClick={handleIndicatorClick}>
                <Indicator className='header-indicator' isActive={indicatorState.aboutIndicator}/>
              </a>
              <a id='about-header-label' href='#about-section-header' onClick={handleLabelClick}>
                <h2 className='header-label'>About</h2>
              </a>
            </li>
            <li>
              <a id='projects-header-indicator' href='#projects-section-header' onClick={handleIndicatorClick}>
                <Indicator className='header-indicator' isActive={indicatorState.projectsIndicator}/>
              </a>
              <a id='projects-header-label' href='#projects-section-header' onClick={handleLabelClick}>
                <h2 className='header-label'>Projects</h2>
              </a>
            </li>
            <li>
              <a id='contact-header-indicator' href='#contact-section-header' onClick={handleIndicatorClick}>
                <Indicator className='header-indicator' isActive={indicatorState.contactIndicator}/>
              </a>
              <a id='contact-header-label' href='#contact-section-header' onClick={handleLabelClick}>
                <h2 className='header-label'>Contact</h2>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='header-social'>
        <a href='https://twitter.com/jsofteng' target='_blank' rel='noreferrer'><TwitterIcon className='header-social-icon'/></a>
        <a href='https://github.com/JsoftEng' target='_blank' rel='noreferrer'><GithubIcon className='header-social-icon'/></a>
        <a href='https://linkedin.com/in/jsofteng/' target='_blank' rel='noreferrer'><LinkedInIcon className='header-social-icon'/></a>
      </div>
    </div>
  )
}

Header.propTypes = {
  headerState: PropTypes.object,
  toggleTheme: PropTypes.func
}

export default Header