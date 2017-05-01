import $ from 'jquery'

export default () => {
  const documento = $(document)
  const barraAlenta = documento.find('#barra-alenta')
  const barraLocalizacion = documento.find('#barra-localization')
  const bannerProyectos = documento.find('.proyecto-header > img:nth-child(2)')
  const barraProyectos = documento.find('.barra-proyectos > img')

/*  documento.scroll(function (e) {
    document.title = documento.scrollTop()
  }) */

  documento.on('scroll', () => {
    const desplazamiento = documento.scrollTop()
    if (desplazamiento <= 580) {
      barraAlenta.hide('slow')
    } else {
      barraAlenta.show('slow')
    }
  })

  documento.on('scroll', () => {
    const desplazamiento = documento.scrollTop()
    if (desplazamiento <= 1600) {
      barraLocalizacion.hide('slow')
    } else {
      barraLocalizacion.show('slow')
    }
  })

  documento.on('scroll', () => {
    const desplazamiento = documento.scrollTop()
    if (desplazamiento <= 2190) {
      bannerProyectos.hide('slow')
    } else {
      bannerProyectos.show('slow')
    }
  })

  documento.on('scroll', () => {
    const desplazamiento = documento.scrollTop()
    if (desplazamiento <= 3070) {
      barraProyectos.hide('slow')
    } else {
      barraProyectos.show('slow')
    }
  })
}
