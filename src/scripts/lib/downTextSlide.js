import $ from 'jquery'

var slide = $('#flexslider__principal')
var consultorio = slide.find('.slide__consultorio')
var area_medica = slide.find('.slide__area-medica')
var navbar = $('#navbar')
var link_alenta = navbar.find('.gotoalenta')

export default function () {
	link_alenta.mouseover(function (event) {
		consultorio.find('.flexslider__text').animate({top: '200px'}, 700)
	})
	link_alenta.mouseleave(function (event) {
		consultorio.find('.flexslider__text').animate({top: '35px'}, 700)
	})
	link_alenta.mousedown(function (event) {
		consultorio.find('.flexslider__text').animate({top: '35px'}, 3000)
	})

	link_alenta.mouseover(function (event) {
		area_medica.find('.flexslider__text').animate({top: '200px'}, 700)
	})
	link_alenta.mouseleave(function (event) {
		area_medica.find('.flexslider__text').animate({top: '35px'}, 700)
	})
	link_alenta.mousedown(function (event) {
		area_medica.find('.flexslider__text').animate({top: '35px'}, 3000)
	})
}
