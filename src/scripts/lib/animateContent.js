import $ from 'jquery'
var documento = $(document)
var alenta_left = documento.find('#alenta-left')
var localizacion_left = documento.find('#localizacion-left')
var proyecto_left = documento.find('#proyecto-left')
var etapa1_left = documento.find('#etapa1-left')
var etapa2_left = documento.find('#etapa2-left')
var etapa3_left = documento.find('#etapa3-left')

export default () => {
  /*documento.scroll(function (e) {
    document.title = documento.scrollTop()
  })*/

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 485) {
      alenta_left.hide('slow')
    } else {
      alenta_left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 1237) {
      localizacion_left.hide('slow')
    } else {
      localizacion_left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2228) {
      proyecto_left.hide('slow')
    } else {
      proyecto_left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2963) {
      etapa1_left.hide('slow')
    } else {
      etapa1_left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 3935) {
      etapa2_left.hide('slow')
    } else {
      etapa2_left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 4775) {
      etapa3_left.hide('slow')
    } else {
      etapa3_left.show('slow')
    }
  })
}
