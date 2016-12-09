import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import addFooter from './lib/addFooter'
import addForm from './lib/addForm'
import flexslider from './lib/flexslider'
import addFormSlide from './lib/addFormSlide'
import downTextSlide from './lib/downTextSlide'
import navbarTop from './lib/navbarTop'
import navbarFloating from './lib/navbarFloating'
import dinamicSection from './lib/dinamicSection'
import animateFooterSection from './lib/animateFooterSection'
import animateContent from './lib/animateContent'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    flexslider()
    headerLittle()
    botonScroll()
    addFooter()
    addForm()
    addFormSlide()
    downTextSlide()
    navbarTop()
    navbarFloating()
    dinamicSection()
    smoove()
    animateFooterSection()
    animateContent()
  }
})()
