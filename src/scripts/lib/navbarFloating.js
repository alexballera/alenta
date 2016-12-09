import $ from 'jquery'
import queryUi from '../vendors/jquery-ui.js'

var documento = $(document)
var menu_flotante = documento.find('.menu__flotante')
var menu_flotante_contenedor = documento.find('.menu__flotante__contenedor')
var show_menu = menu_flotante.find('#menu_flotante_show')
var hide_menu = menu_flotante.find('#menu_flotante_hide')

export default () => {
  var hideMenu = () => {
    menu_flotante_contenedor.hide('slide', {direction: 'left'}, 1000)
    hide_menu.hide('slide', {direction: 'left'}, 1000)
    show_menu.show('slide', {direction: 'left'}, 1000)
  }

  var showMenu = () => {
    menu_flotante_contenedor.show('slide', {direction: 'left'}, 1000)
    hide_menu.show('slide', {direction: 'left'}, 1000)
    show_menu.hide('slide', {direction: 'left'}, 1000)
  }

  menu_flotante_contenedor.hide()
  hide_menu.hide()

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 600 && desplazamiento <= 2000) {
      showMenu()
    } else {
      hideMenu()
    }
  })

  hide_menu.click(function (e) {
    e.preventDefault()
    hideMenu()
  })

  show_menu.click(function (e) {
    e.preventDefault()
    showMenu()
  })
}
