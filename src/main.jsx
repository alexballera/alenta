import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    )
  }
})()
