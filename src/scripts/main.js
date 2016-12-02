import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import addMenuAlenta from './lib/addMenuAlenta'
import addFooter from './lib/addFooter'
import addForm from './lib/addForm'
import flexslider from './lib/flexslider'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    headerLittle()
    smoove()
    botonScroll()
    addMenuAlenta()
    addFooter()
    addForm()
    flexslider()
  }
})()
