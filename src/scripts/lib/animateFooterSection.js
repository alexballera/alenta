import $ from 'jquery'

export default function () {
  // $(document).scroll(function (e) {
  //   document.title = $(document).scrollTop()
  // })

  $('.barra-alenta, .barra-localizacion, .barra-proyectos').hide()

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento >= 830) {
      $('.barra-alenta').show('slow')
    } else {
      $('.barra-alenta').hide('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento >= 1630) {
      $('.barra-localizacion').show('slow')
    } else {
      $('.barra-localizacion').hide('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento >= 2300) {
      $('.barra-proyectos').show('slow')
    } else {
      $('.barra-proyectos').hide('slow')
    }
  })
}
