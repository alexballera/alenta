import Pruebas from './scripts/lib2/prueba'
import WebFont from './scripts/Webfont'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    Pruebas()
  }
})()
