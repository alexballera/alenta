import headerLittle from './scripts/lib/headerLittle'
import smoove from './scripts//lib/smoove'
import botonScroll from './scripts//lib/botonScroll'
import flexslider from './scripts//lib/flexslider'
import downTextSlide from './scripts//lib/downTextSlide'
import navbarTop from './scripts//lib/navbarTop'
import navbarFloating from './scripts//lib/navbarFloating'
import dinamicSection from './scripts//lib/dinamicSection'
import animateBanners from './scripts//lib/animateBanners'
// import animateContent from './scripts//lib/animateContent'
import formSlide from './scripts//lib/formSlide'
import formSeccion from './scripts//lib/formSeccion'
import formAlenta from './scripts//lib/formAlenta'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
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
