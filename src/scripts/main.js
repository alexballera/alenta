import headerLittle from './lib/headerLittle'
import smoove from './lib/smoove'
import botonScroll from './lib/botonScroll'
import flexslider from './lib/flexslider'
import downTextSlide from './lib/downTextSlide'
import navbarTop from './lib/navbarTop'
import navbarFloating from './lib/navbarFloating'
import dinamicSection from './lib/dinamicSection'
import animateFooterSection from './lib/animateFooterSection'
import animateContent from './lib/animateContent'
import formSlide from './lib/formSlide'
import formSeccion from './lib/formSeccion'
import addForm from './lib/addForm'


(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    formSlide()
    formSeccion()
    addForm()
    flexslider()
    headerLittle()
    botonScroll()
    downTextSlide()
    navbarTop()
    navbarFloating()
    dinamicSection()
    smoove()
    animateFooterSection()
    animateContent()
  }
})()
