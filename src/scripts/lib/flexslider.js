import $ from 'jquery'
import flexslider from '../vendors/jquery.flexslider.js'

export default function () {
  $('.flexslider__principal').flexslider({
    controlNav: false,
    directionNav: true,
    maxItems: 6,
    prevText: '',
    nextText: ''
  })
}
