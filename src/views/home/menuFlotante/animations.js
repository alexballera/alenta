import '../../../scripts/externals/jquery-ui.js'

export default () => {
  const documento = $(document)
  const menuFlotanteContenedor = documento.find('#menu-flotante-contenedor')

  menuFlotanteContenedor.hide()

  documento.on('scroll', () => {
    const desplazamiento = documento.scrollTop()
    if (desplazamiento >= 2250 && desplazamiento <= 5320) {
      menuFlotanteContenedor.show('slide', {direction: 'right'}, 700)
    } else {
      menuFlotanteContenedor.hide('slide', {direction: 'right'}, 700)
    }
  })
}
