'use strict'

import WebFont from './scripts/Webfont'
import createNavbar from './components/layout/createNavbar'
import createMain from './components/layout/createMain'
import createFooter from './components/layout/createFooter'
import topNavbar from './components/topNavbar'
import Home from './views/home'
import Footer from './components/footer'
import Navigation from './components/navigation'
(() => {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    createNavbar()
    createMain()
    createFooter()
    topNavbar()
    Home()
    Footer()
    Navigation()
  }
})()
