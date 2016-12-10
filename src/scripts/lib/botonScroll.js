import $ from 'jquery'
var documento = $(document)
var gototop = documento.find('.gototop')
var boton__up = documento.find('#boton__up')

export default () => {
  // Con el siguiente código vemos la posicion en el title
  // $(document).scroll(function (e) {
  //   document.title = $(document).scrollTop()
  // })

  gototop.click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '0'}, 1500)
  })

  boton__up.hide()

  documento.on('scroll', () => {
    var desplazamiento = documento.scrollTop()
    if (desplazamiento >= 2800) {
      boton__up.show('slow')
    } else {
      boton__up.hide('slow')
    }
  })
}
