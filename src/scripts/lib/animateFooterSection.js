import $ from 'jquery'
var documento = $(document)
var barraAlenta = documento.find('.barra-alenta')
var barraLocalizacion = documento.find('.barra-localizacion')
var barraProyectos = documento.find('.barra-proyectos')

export default () => {
  documento.scroll(function (e) {
    document.title = documento.scrollTop()
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 580) {
      barraAlenta.hide('slow')
    } else {
      barraAlenta.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 1410) {
      barraLocalizacion.hide('slow')
    } else {
      barraLocalizacion.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2300) {
      barraProyectos.hide('slow')
    } else {
      barraProyectos.show('slow')
    }
  })
}
