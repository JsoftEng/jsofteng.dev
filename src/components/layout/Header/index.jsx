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
            <div id='header-scrollbar-inner' className='header-scrollbar-inner'/>
          </div>
        </div>
        <nav className='header-nav'>
          <ul>
            <li>
              <a href='#home'><Indicator className='header-indicator' isActive='true' /></a>
              <a href='#home'><h2 className='header-label'>Home</h2></a>
            </li>
            <li>
              <a href='#about'><Indicator className='header-indicator' isActive='false' /></a>
              <a href='#about'><h2 className='header-label'>About</h2></a>
            </li>
            <li>
              <a href='#projects'><Indicator className='header-indicator' isActive='false' /></a>
              <a href='#projects'><h2 className='header-label'>Projects</h2></a>
            </li>
            <li>
              <a href='#contact'><Indicator className='header-indicator' isActive='false' /></a>
              <a href='#contact'><h2 className='header-label'>Contact</h2></a>
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