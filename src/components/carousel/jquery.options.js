'use strict'

export default () => {
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
  // Formulario
  $('#textarea1').trigger('autoresize')
}
