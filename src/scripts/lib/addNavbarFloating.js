import $ from 'jquery'

export default function () {
  $('.menu__flotante').hide()
  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento > 600) {
      $('.menu__flotante').show('slow')
    } else {
      $('.menu__flotante').hide('slow')
    }
  })
}
