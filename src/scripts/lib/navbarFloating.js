import $ from 'jquery'
import queryUi from '../vendors/jquery-ui.js'

var documento = $(document)
var menu_flotante = documento.find('.menu__flotante')
var menu_flotante_contenedor = documento.find('.menu__flotante__contenedor')
var show_menu = menu_flotante.find('#menu_flotante_show')
var hide_menu = menu_flotante.find('#menu_flotante_hide')

export default () => {
  var hideMenu = () => {
    menu_flotante_contenedor.hide('slide', {direction: 'left'}, 700)
    hide_menu.hide('slide', {direction: 'left'}, 700)
  }

  var showMenu = () => {
    menu_flotante_contenedor.show('slide', {direction: 'left'}, 700)
    hide_menu.show('slide', {direction: 'left'}, 700)
  }

  menu_flotante_contenedor.hide()
  hide_menu.hide()
  show_menu.hide()

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 600 && desplazamiento <= 2400) {
      showMenu()
    } else {
      hideMenu()
    }
  })

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento > 2400) {
      show_menu.show()
    } else {
      show_menu.hide()
    }
  })

  hide_menu.click(function (e) {
    e.preventDefault()
    hideMenu()
    show_menu.show('slide', {direction: 'left'}, 700)
  })

  show_menu.click(function (e) {
    e.preventDefault()
    showMenu()
    show_menu.hide('slide', {direction: 'left'}, 700)
  })
}
