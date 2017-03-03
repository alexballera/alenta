import $ from 'jquery'
var header = $('#header')
var slider = $('#slider')
var contenido = $('#contenido')
var contacto = $('#contacto')
var footer = $('#footer')
// var loader = $('#loader')

export default () => {
  function ocultar () {
    header.hide()
    slider.hide()
    contenido.hide()
    contacto.hide()
    footer.hide()
  }
  ocultar()
}
