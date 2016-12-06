import $ from 'jquery'

export default function () {
  $(document).scroll(function (e) {
    document.title = $(document).scrollTop()
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 465) {
      $('#alenta-right').hide('slow')
    } else {
      $('#alenta-right').show('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 1237) {
      $('#localizacion-left').hide('slow')
    } else {
      $('#localizacion-left').show('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 2228) {
      $('#proyecto-left').hide('slow')
    } else {
      $('#proyecto-left').show('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 2963) {
      $('#etapa1-left').hide('slow')
    } else {
      $('#etapa1-left').show('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 3935) {
      $('#etapa2-left').hide('slow')
    } else {
      $('#etapa2-left').show('slow')
    }
  })

  $(document).on('scroll', function () {
    var desplazamiento = $(document).scrollTop()
    if (desplazamiento <= 4775) {
      $('#etapa3-left').hide('slow')
    } else {
      $('#etapa3-left').show('slow')
    }
  })
}
