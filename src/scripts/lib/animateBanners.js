import $ from 'jquery'
var documento = $(document)
var barraAlenta = documento.find('.barra-alenta')
var barraLocalizacion = documento.find('.barra-localizacion')
var bannerProyectos = documento.find('.proyecto-header > img:nth-child(2)')
var barraProyectos = documento.find('.barra-proyectos > img')
var bannerContacto = documento.find('.contacto-banner > img')

export default () => {
  /* documento.scroll(function (e) {
    document.title = documento.scrollTop()
  }) */

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
    if (desplazamiento <= 2190) {
      bannerProyectos.hide('slow')
    } else {
      bannerProyectos.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 3070) {
      barraProyectos.hide('slow')
    } else {
      barraProyectos.show('slow')
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento <= 6300) {
      bannerContacto.hide('slow')
    } else {
      bannerContacto.show('slow')
    }
  })
}
