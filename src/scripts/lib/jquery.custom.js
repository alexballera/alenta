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
    { selector: '#barra-alenta',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options)

  var options2 = [
    { selector: '#barra-localization',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options2)

  var options3 = [
    { selector: '#barra-proyectos',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options2)

  var options4 = [
    { selector: '#barra-proyectos2',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options2)

  $(document).scroll(function (e) {
    document.title = $(document).scrollTop()
  })
})
