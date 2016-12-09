import $ from 'jquery'

export default () => {
  var template = `
  <picture class=""><img src="images/logo.png" alt=""></picture>
  <picture class=""><img src="images/alenta-medical-care.png" alt=""></picture>`
  $('.add_footer').append(template)
}
