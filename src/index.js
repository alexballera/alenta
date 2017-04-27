'use strict'

import WebFont from './scripts/Webfont'
import createNavbar from './components/layout/navbar'
import createMain from './components/layout/main'
import createFooter from './components/layout/footer'
import topNavbar from './components/topNavbar'

(() => {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    createNavbar()
    createMain()
    createFooter()
    topNavbar()
  }
})()
