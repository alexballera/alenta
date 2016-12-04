import $ from 'jquery'
import flexslider from '../vendors/jquery.flexslider.js'

export default function () {
  $('.flexslider__principal').flexslider({
    controlNav: false,
    animation: 'slide',
    // pauseOnHover: true,
    maxItems: 6,
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
}
