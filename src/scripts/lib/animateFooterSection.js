import $ from 'jquery'

export default function () {
  $(document).scroll(function (e) {
    document.title = $(document).scrollTop()
  })
  $('.slider__container>.footer__section').hide()
  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento > 100) {
      $('.footer__section').show('slow')
    } else {
      $('.footer__section').hide('slow')
    }
  })
}
