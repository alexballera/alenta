import $ from 'jquery'
var documento = $(document)

export default function () {
  $('.menu__flotante').hide()
  documento.on('scroll', function () {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 600) {
      $('.menu__flotante').show('slow')
    } else {
      $('.menu__flotante').hide('slow')
    }
  })
}
