import React from 'react'
import PropTypes from 'prop-types'
import DownArrow from '../../../img/down-arrow.svg'
import portrait from '../../../img/portrait.webp'
import ProjectPanel from '../../utility/ProjectPanel'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import './section.scss'

function Section (props) {
  let sectionClass = null
  let sectionID = null
  let content = null
  let validate = null

  switch (props.name) {
    case 'Home':
      sectionClass = 'home-section'
      sectionID = 'home'
      content =
        <>
          <div className='avatar'>
            <h1>J</h1>
          </div>
          <a id='down-arrow' href='#about-section-header'><DownArrow className='down-arrow'/></a>
        </>
      break
    case 'About':
      sectionClass = 'about-section'
      sectionID = 'about'
      content =
        <>
          <div className='portrait'>
            <img src={ portrait } alt='Portrait'></img>
          </div>
          <div className='about-section-text'>
            <h2>Who Am I?</h2>
            <hr/>
            <p>
              Hi, I&apos;m John, a full-stack software engineer with a passion for front-end development.
              I&apos;ve been a professional software developer for a little over 4 years now. In that time I&apos;ve had the luxury
              of being exposed to a number of tech stacks ranging from ASP.Net/Angular to React on Rails. I&apos;m no stranger to agility!
            </p>
            <p>
              When I&apos;m not knee deep in code I&apos;m usually spending time with my dog Kaiser, gaming, watching anime or on some wild
              adventure with a couple of friends.
            </p>
          </div>
        </>
      break
    case 'Projects':
      sectionClass = 'projects-section'
      sectionID = 'projects'
      content =
        <>
          <ProjectPanel id='portfolio-project' name='portfolio-project'/>
        </>
      break
    case 'Contact':
      sectionClass = 'contact-section'
      sectionID = 'contact'
      validate = values => {
        const errors = {}

        if (!values.name) {
          errors.name = 'Required'
        }

        if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid Email Address'
        }

        if (!values.message) {
          errors.message = 'Required'
        }

        return errors
      }
      content =
        <>
          <Formik
            initialValues= {{
              name: '',
              email: '',
              message: ''
            }}
            validate={validate}
            onSubmit= {(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false)
              }, 400)
            }}
          >
            <Form netlify className='contact-form'>
              <div id='form-name-container' className='form-name-container'>
                <label htmlFor='name'>Name</label>
                <Field name='name' type='text'/>
                <ErrorMessage name='name'>
                  {msg => <div id='form-name-error' className='form-error'>{msg}</div>}
                </ErrorMessage>
              </div>
              <div id='form-email-container' className='form-email-container'>
                <label htmlFor='email'>Email</label>
                <Field name='email' type='text'/>
                <ErrorMessage name='email'>
                  {msg => <div id='form-email-error' className='form-error'>{msg}</div>}
                </ErrorMessage>
              </div>
              <div id='form-message-container' className='form-message-container'>
                <label htmlFor='message'>Message</label>
                <Field name='message' as='textarea' type='text'/>
                <ErrorMessage name='message'>
                  {msg => <div id='form-message-error' className='form-error'>{msg}</div>}
                </ErrorMessage>
              </div>
              <button className='form-submit' type='submit'>Submit</button>
            </Form>
          </Formik>
        </>
      break
    default:
      break
  }

  return (
    <div id={sectionID} className={sectionClass} onWheel={props.wheelOver} onTouchStart={props.wheelOver}>
      {content}
    </div>
  )
}

Section.propTypes = {
  name: PropTypes.string,
  wheelOver: PropTypes.func
}

export default Section