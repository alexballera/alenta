import $ from 'jquery'
var documento = $(document)

export default function () {

  // documento.scroll(function (e) {
  //   document.title = $(document).scrollTop()
  // })

  documento.on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 830) {
      $('.barra-alenta').hide('slow')
    } else {
      $('.barra-alenta').show('slow')
    }
  })

  documento.on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 1630) {
      $('.barra-localizacion').hide('slow')
    } else {
      $('.barra-localizacion').show('slow')
    }
  })

  documento.on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 2300) {
      $('.barra-proyectos').hide('slow')
    } else {
      $('.barra-proyectos').show('slow')
    }
  })
}
