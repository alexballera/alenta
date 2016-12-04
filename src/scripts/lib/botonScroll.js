import $ from 'jquery'

export default function () {
  // Con el siguiente código vemos la posicion en el title
  // $(document).scroll(function (e) {
  //   document.title = $(document).scrollTop()
  // })

  $('.gototop').click(function (e) {
    e.preventDefault()
    $('body,html').animate({scrollTop: '0'}, 1500)
  })
}
