import $ from 'jquery'
import flexslider from '../vendors/jquery.flexslider.js'

export default function () {
  $('.flexslider__principal').flexslider({
    controlNav: false,
    animation: 'slide',
    pauseOnHover: true,
    maxItems: 6,
    prevText: '',
    nextText: ''
  })
  $('.flexslider__mini').flexslider({
    animation: 'slide',
    // animationLoop: false,
    itemWidth: 210,
    // itemMargin: 3,
    minItems: 3,
    maxItems: 3,
    controlNav: false,
    directionNav: false,
    prevText: '',
    nextText: ''
  })
}
