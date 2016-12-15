import $ from 'jquery'
import flexslider from '../vendors/jquery.flexslider.js'

var slider = {
    principal: $('.flexslider__principal'),
    mini: $('.flexslider__mini'),
    promotores: $('.flexslider__promotores')
}

export default function () {
  slider.principal.flexslider({
    controlNav: false,
    animation: 'slide',
    slideshowSpeed: 9000,
    animationSpeed: 900,
    pauseOnHover: true,
    prevText: '',
    nextText: ''
  })
  slider.mini.flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    animationSpeed: 700,
    itemWidth: 210,
    minItems: 3,
    maxItems: 3,
    controlNav: false,
    directionNav: false,
    prevText: '',
    nextText: ''
  })
  slider.promotores.flexslider({
    animation: 'slide',
    itemWidth: 210,
    minItems: 3,
    maxItems: 3,
    itemMargin: 5,
    directionNav: false,
    prevText: '',
    nextText: ''
  })
}
