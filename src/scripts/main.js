import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'

(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad() {
    headerLittle()
    smoove()
    botonScroll()
  }
})()
