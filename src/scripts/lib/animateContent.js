import $ from 'jquery'
var documento = $(document)
var alentaLeft = documento.find('#alenta-left')
var localizacionLeft = documento.find('#localizacion-left')
var proyectoLeft = documento.find('#proyecto-left')
var etapa1Left = documento.find('#etapa1-left')
var etapa2Left = documento.find('#etapa2-left')
var etapa3Left = documento.find('#etapa3-left')

export default () => {
  /*documento.scroll(function (e) {
    document.title = documento.scrollTop()
  })*/

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 485) {
      alentaLeft.hide('slow')
    } else {
      alentaLeft.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 1237) {
      localizacionLeft.hide('slow')
    } else {
      localizacionLeft.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2228) {
      proyectoLeft.hide('slow')
    } else {
      proyectoLeft.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2963) {
      etapa1Left.hide('slow')
    } else {
      etapa1Left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 3935) {
      etapa2Left.hide('slow')
    } else {
      etapa2Left.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 4775) {
      etapa3Left.hide('slow')
    } else {
      etapa3Left.show('slow')
    }
  })
}
