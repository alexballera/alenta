import $ from 'jquery'

export default function () {
  // Con el siguiente código vemos la posicion en el title
  // $(document).scroll(function (e) {
  //   document.title = $(document).scrollTop()
  // })

  $('.gotoalenta').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '676'}, 500)
  })

  $('.gotoconsultorio').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '7301'}, 500)
  })

  $('.gotomedicas').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '7839'}, 500)
  })

  $('.gotocirugias').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '8378'}, 500)
  })

  $('.gotohotel').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '8934'}, 500)
  })

  $('.gotocontactanos').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '9538'}, 500)
  })

  $('.gotolocalizacion').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '1319'}, 500)
  })

  $('.gotoproyectos').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '2128'}, 500)
  })

  $('.gotoetapa1').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '2853'}, 500)
  })

  $('.gotoetapa2').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '3760'}, 500)
  })

  $('.gotoetapa3').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '4650'}, 500)
  })

  $('.gotopromotores').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '5755'}, 500)
  })

  $('.gotocontacto').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '6201'}, 500)
  })

  $('.gototop').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '0'}, 1500)
  })
}
