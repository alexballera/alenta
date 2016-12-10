import $ from 'jquery'

var slide = $('#flexslider__principal')
var consultorio = slide.find('.slide__consultorio')
var area_medica = slide.find('.slide__area-medica')
var navbar = $('#navbar')
var link_alenta = navbar.find('#dropdown__firstlevel')

export default () => {
  link_alenta.mouseover(function (event) {
    consultorio.find('.flexslider__text').animate({top: '200px'}, 700)
  })
  link_alenta.mouseleave(function (event) {
    consultorio.find('.flexslider__text').animate({top: '100px'}, 700)
  })

  link_alenta.mouseover(function (event) {
    area_medica.find('.flexslider__text').animate({top: '200px'}, 700)
  })
  link_alenta.mouseleave(function (event) {
    area_medica.find('.flexslider__text').animate({top: '100px'}, 700)
  })
}
