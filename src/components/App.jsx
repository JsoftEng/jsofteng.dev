import React, { useEffect, useState } from 'react'
import Main from './layout/Main'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Section from './layout/Section'
import SectionHeader from './utility/SectionHeader'

import '../styles/app.scss'

function App () {
  const initialHeaderState = {
    homeIndicator: 'true',
    aboutIndicator: 'false',
    projectsIndicator: 'false',
    contactIndicator: 'false'
  }
  const [headerState, setHeaderState] = useState(initialHeaderState)

  const handleSectionWheelOver = (e) => {
    const sectionType = e.currentTarget.id
    let newHeaderState = null

    switch (sectionType) {
      case 'home':
        newHeaderState = {
          homeIndicator: 'true',
          aboutIndicator: 'false',
          projectsIndicator: 'false',
          contactIndicator: 'false'
        }
        break
      case 'about':
        newHeaderState = {
          homeIndicator: 'false',
          aboutIndicator: 'true',
          projectsIndicator: 'false',
          contactIndicator: 'false'
        }
        break
      case 'projects':
        newHeaderState = {
          homeIndicator: 'false',
          aboutIndicator: 'false',
          projectsIndicator: 'true',
          contactIndicator: 'false'
        }
        break
      case 'contact':
        newHeaderState = {
          homeIndicator: 'false',
          aboutIndicator: 'false',
          projectsIndicator: 'false',
          contactIndicator: 'true'
        }
        break
    }

    setHeaderState(newHeaderState)
  }

  return (
    <>
      <Header headerState={headerState}/>
      <Main>
        <Section name='Home' wheelOver={handleSectionWheelOver}/>
        <SectionHeader id='about-section-header' name='About' orientation='left'/>
        <Section name='About' wheelOver={handleSectionWheelOver}/>
        <SectionHeader id='projects-section-header' name='Projects' orientation='right'/>
        <Section name='Projects' wheelOver={handleSectionWheelOver}/>
        <SectionHeader id='contact-section-header' name='Contact' orientation='left'/>
        <Section name='Contact' wheelOver={handleSectionWheelOver}/>
      </Main>
    </>
  )
}

export default App