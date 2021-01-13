import React, { useState } from 'react'
import ActiveIndicator from '../../../img/icons/indicator-active.svg'
import InactiveIndicator from '../../../img/icons/indicator-inactive.svg'

function Indicator (props) {
  const [active, setActive] = useState(props.isActive)
  let content = null

  switch (active) {
    case 'true':
      content = <ActiveIndicator className={props.className} />
      break
    case 'false':
      content = <InactiveIndicator className={props.className} />
      break
    default:
      break
  }

  return (
    content
  )
}

export default Indicator