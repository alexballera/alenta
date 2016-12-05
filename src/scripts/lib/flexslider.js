import $ from 'jquery'
import flexslider from '../vendors/jquery.flexslider.js'

export default function () {
  $('.flexslider__principal').flexslider({
    controlNav: false,
    animation: 'slide',
    slideshowSpeed: 9000,
    animationSpeed: 800,
    prevText: '',
    nextText: ''
  })
  $('.flexslider__mini').flexslider({
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
  $('.flexslider__promotores').flexslider({
    animation: 'slide',
    itemWidth: 210,
    minItems: 3,
    maxItems: 3,
    // controlNav: false,
    directionNav: false,
    prevText: '',
    nextText: ''
  })
}
