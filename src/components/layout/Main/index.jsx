import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function Main (props) {
  return (
    <main id="main" className="main">
      { props.children }
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.oneOfType(
    [
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]
  )
}

export default Main