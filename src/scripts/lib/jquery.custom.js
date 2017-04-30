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

  // Scrollspy
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  })

  // ScrollFire
  var options = [
    { selector: '.barra-banner',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options)

  $(document).scroll(function (e) {
    document.title = $(document).scrollTop()
  })
})
