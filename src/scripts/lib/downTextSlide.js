import $ from 'jquery'

var slide = $('#flexslider__principal')
var consultorio = slide.find('.slide__consultorio')
var areaMedica = slide.find('.slide__area-medica')
var navbar = $('#navbar')
var linkAlenta = navbar.find('#dropdown__firstlevel')

export default () => {
  linkAlenta.mouseover(function (event) {
    consultorio.find('.flexslider__text').animate({top: '200px'}, 700)
  })
  linkAlenta.mouseleave(function (event) {
    consultorio.find('.flexslider__text').animate({top: '100px'}, 700)
  })

  linkAlenta.mouseover(function (event) {
    areaMedica.find('.flexslider__text').animate({top: '200px'}, 700)
  })
  linkAlenta.mouseleave(function (event) {
    areaMedica.find('.flexslider__text').animate({top: '100px'}, 700)
  })
}
