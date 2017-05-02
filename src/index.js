'use strict'

import WebFont from './scripts/Webfont'
import createNavbar from './components/layout/createNavbar'
import createMain from './components/layout/createMain'
import createFooter from './components/layout/createFooter'
import topNavbar from './components/topNavbar'
import Carousel from './components/carousel'
import formSlide from './components/carousel/forms'
import Home from './views/home'
import Consultorios from './views/consultorios'
import Medicas from './views/medicas'
import Cirugias from './views/cirugias'
import Hotel from './views/hotel'
import Contacto from './views/contactenos'
import Dialog from './components/dialog'
import Footer from './components/footer'
import {Navigation} from './components/navigation'
(() => {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    createNavbar()
    topNavbar()
    Carousel()
    Dialog()
    formSlide()
    createMain()
    Home()
    Consultorios()
    Medicas()
    Cirugias()
    Hotel()
    Contacto()
    createFooter()
    Footer()
    Navigation()
  }
})()
