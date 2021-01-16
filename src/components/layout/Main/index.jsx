import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './main.scss'

function Main (props) {
  return (
    <div id="main" className="main">
      { props.children }
    </div>
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