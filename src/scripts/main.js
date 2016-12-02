import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import addMenu from './lib/addMenu'
import addFooter from './lib/addFooter'
import addForm from './lib/addForm'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    headerLittle()
    smoove()
    botonScroll()
    addMenu()
    addFooter()
    addForm()
  }
})()
