import $ from 'jquery'
var documento = $(document)
var barra_alenta = documento.find('.barra-alenta')
var barra_localizacion = documento.find('.barra-localizacion')
var barra_proyectos = documento.find('.barra-proyectos')

export default () => {
  /*documento.scroll(function (e) {
    document.title = documento.scrollTop()
  })*/

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 600) {
      barra_alenta.hide('slow')
    } else {
      barra_alenta.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 1400) {
      barra_localizacion.hide('slow')
    } else {
      barra_localizacion.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2300) {
      barra_proyectos.hide('slow')
    } else {
      barra_proyectos.show('slow')
    }
  })
}
