'use strict'

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
  $('.carousel.carousel-slider').carousel(
    {
      fullWidth: true,
      duration: 500
    }
  )

  autoplay()
  function autoplay () {
    $('.carousel').carousel('next')
    setTimeout(autoplay, 10500)
  }
  $('#textarea1').trigger('autoresize')
})
