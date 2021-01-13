import React from 'react'
import Main from './layout/Main'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Section from './layout/Section'

import '../styles/app.scss'

function App () {
  return (
    <>
      <Header/>
      <Main>
        <Section name='Home'/>
        <Section name='About'/>
        <Section name='Projects'/>
        <Section name='Contact'/>
      </Main>
    </>
  )
}

export default App