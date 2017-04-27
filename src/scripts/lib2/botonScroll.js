import $ from 'jquery'
var documento = $(document)
var gototop = documento.find('.gototop')
var botonUp = documento.find('#boton__up')

export default () => {
  // Con el siguiente código vemos la posicion en el title
  // $(document).scroll(function (e) {
  //   document.title = $(document).scrollTop()
  // })

  gototop.click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '0'}, 1500)
  })

  botonUp.hide()

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 2800) {
      botonUp.show('slow')
    } else {
      botonUp.hide('slow')
    }
  })
}
