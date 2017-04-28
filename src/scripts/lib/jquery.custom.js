'use strict'
if (typeof (jQuery) === 'undefined') {
  var jQuery
  // Check if require is a defined function.
  if (typeof (require) === 'function') {
    jQuery = $ = require('jquery')
  // Else use the dollar sign alias.
  } else {
    jQuery = $
  }
}

// Dropdown
$(function () {
  $('.dropdown-button').dropdown(
    {
      hover: true,
      belowOrigin: true,
      constrainWidth: false
    }
  )
  $('.button-collapse').sideNav()

  // Carousel
  $('.carousel.carousel-slider').carousel({fullWidth: true})

  autoplay()
  function autoplay () {
    $('.carousel').carousel('next')
    setTimeout(autoplay, 4500)
  }
})
