import inicio from './lib/inicio'
import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import flexslider from './lib/flexslider'
import downTextSlide from './lib/downTextSlide'
import navbarTop from './lib/navbarTop'
import navbarFloating from './lib/navbarFloating'
import dinamicSection from './lib/dinamicSection'
import animateBanners from './lib/animateBanners'
// import animateContent from './lib/animateContent'
import formSlide from './lib/formSlide'
import formSeccion from './lib/formSeccion'
import formAlenta from './lib/formAlenta'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    inicio()
    formSlide()
    formSeccion()
    formAlenta()
    flexslider()
    headerLittle()
    botonScroll()
    downTextSlide()
    navbarTop()
    navbarFloating()
    dinamicSection()
    smoove()
    animateBanners()
    // animateContent()
  }
})()
