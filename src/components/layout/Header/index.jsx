import React from 'react'
import TwitterIcon from '../../../img/icons/twitter.svg'
import GithubIcon from '../../../img/icons/github.svg'
import LinkedInIcon from '../../../img/icons/linkedin.svg'
import Indicator from '../../utility/Indicator'

import './header.scss'

function Header (props) {
  return (
    <div className='header-container'>
      <div className='header-nav-container'>
        <div className='header-scroll'>
          <div className='header-scrollbar-outer'>
            <div className='header-scrollbar-inner'/>
          </div>
        </div>
        <nav className='header-nav'>
          <ul>
            <li>
              <Indicator className='header-indicator' isActive='true' />
              <h2 className='header-label'>Home</h2>
            </li>
            <li>
              <Indicator className='header-indicator' isActive='false' />
              <h2 className='header-label'>About</h2>
            </li>
            <li>
              <Indicator className='header-indicator' isActive='false' />
              <h2 className='header-label'>Projects</h2>
            </li>
            <li>
              <Indicator className='header-indicator' isActive='false' />
              <h2 className='header-label'>Contact</h2>
            </li>
          </ul>
        </nav>
      </div>
      <div className='header-social'>
        <a href='https://twitter.com/jsofteng' target='_blank' className='header-social-icon' rel='noreferrer'><TwitterIcon /></a>
        <a href='https://github.com/JsoftEng' target='_blank' className='header-social-icon' rel='noreferrer'><GithubIcon /></a>
        <a href='https://linkedin.com/in/jsofteng/' target='_blank' className='header-social-icon' rel='noreferrer'><LinkedInIcon /></a>
      </div>
    </div>
  )
}

export default Header