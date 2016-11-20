import menuMobile from './lib/menuMobile'

(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad() {
    menuMobile()
  }
})()
