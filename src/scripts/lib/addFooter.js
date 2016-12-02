import $ from 'jquery'

export default function () {
  var template = `
  <picture class="picture-left"><img src="images/logo.png" alt=""></picture>
  <picture class="picture-rigth"><img src="images/alenta-medical-care.png" alt=""></picture>`
  $('.add_footer').append(template)
}
