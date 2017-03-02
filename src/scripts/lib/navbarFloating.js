import $ from 'jquery'
import '../vendors/jquery-ui.js'

var documento = $(document)
var menuFlotanteContenedor = documento.find('#menu-flotante-contenedor')

export default () => {
  menuFlotanteContenedor.hide()
  /* documento.scroll(function (e) {
    document.title = documento.scrollTop()
  }) */

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 2250 && desplazamiento <= 5320) {
      menuFlotanteContenedor.show('slide', {direction: 'right'}, 700)
    } else {
      menuFlotanteContenedor.hide('slide', {direction: 'right'}, 700)
    }
  })
}
