import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { ToastProvider } from 'react-toast-notifications'

render(
  <ToastProvider
    autoDismiss
    autoDismissTimeout={3000}
    transitionDuration={440}
    placement='top-right'
  >
    <App/>
  </ToastProvider>,
  document.getElementById('app')
)