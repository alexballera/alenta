'use strict'

import WebFont from './scripts/Webfont'

(() => {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
  }
})()
