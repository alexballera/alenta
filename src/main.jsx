import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    console.log('Fuera de SeTimeout')
    setTimeout(() => {
      console.log('Dentro de SeTimeout')
      ReactDOM.render(<App />, document.getElementById('app'))
    }, 3000)
  }
})()
