import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import addFooter from './lib/addFooter'
import addFooterSection from './lib/addFooterSection'
import addForm from './lib/addForm'
import flexslider from './lib/flexslider'
import addFormSlide from './lib/addFormSlide'
import menu from './lib/menu'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    headerLittle()
    smoove()
    botonScroll()
    addFooter()
    addFooterSection()
    addForm()
    flexslider()
    addFormSlide()
    menu()
  }
})()
