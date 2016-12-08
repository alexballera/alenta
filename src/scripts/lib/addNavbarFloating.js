import $ from 'jquery'
var documento = $(document)
var menu_flotante = documento.find('.menu__flotante')
var menu_flotante_contenedor = documento.find('.menu__flotante__contenedor')
var show_menu = menu_flotante.find('#menu_flotante_show')
var hide_menu = menu_flotante.find('#menu_flotante_hide')

export default function () {
  var hideMenu = function () {
    menu_flotante_contenedor.hide('slow')
    hide_menu.hide('slow')
    show_menu.show('slow')
  }

  var showMenu = function () {
    menu_flotante_contenedor.show('slow')
    hide_menu.show('slow')
    show_menu.hide('slow')
  }

  menu_flotante_contenedor.hide('slow')
  hide_menu.hide('slow')

  documento.on('scroll', function () {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 600 && desplazamiento <= 1600) {
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
