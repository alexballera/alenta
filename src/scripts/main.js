import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import flexslider from './lib/flexslider'
// import addForm from './lib/addForm'
// import addFormSlide from './lib/addFormSlide'
import downTextSlide from './lib/downTextSlide'
import navbarTop from './lib/navbarTop'
import navbarFloating from './lib/navbarFloating'
import dinamicSection from './lib/dinamicSection'
import animateFooterSection from './lib/animateFooterSection'
import animateContent from './lib/animateContent'
import formSlide from './lib/formSlide'
import formSeccion from './lib/formSeccion'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    formSeccion()
    formSlide()
    flexslider()
    headerLittle()
    botonScroll()
    // addForm()
    // addFormSlide()
    downTextSlide()
    navbarTop()
    navbarFloating()
    dinamicSection()
    smoove()
    animateFooterSection()
    animateContent()
  }
})()
