import $ from 'jquery'

var header = $('#header')
var boton_show = header.find('.fa-bars')
var boton_hide = header.find('.fa-window-close-o')
var top__navbar = header.find('#top__navbar')
var navbar = top__navbar.find('#navbar')
var second__level = navbar.find('.second__level')
var third__level = navbar.find('.third__level')
var mediaQuery = window.matchMedia('screen and (min-width: 768px)')

export default function () {
  // top__navbar.hide()
  boton_hide.hide()
  second__level.hide()
  third__level.hide()

  var responsive = function () {
    if (mediaQuery.matches) {
      top__navbar.show()
    } else {
      top__navbar.hide()
    }
  }
  mediaQuery.addListener(responsive)

  boton_show.click(function (e) {
    e.preventDefault()
    top__navbar.toggle('slide', {direction: 'up'}, 1000)
    boton_hide.show()
    boton_show.hide()
  })

  boton_hide.click(function (e) {
    e.preventDefault()
    top__navbar.toggle('slide', {direction: 'up'}, 1000)
    boton_hide.hide()
    boton_show.show()
  })

  navbar.find('#dropdown__firstlevel').on({
    'mouseover': function () {
      second__level.show('400')
    },
    'mouseleave': function () {
      second__level.hide('400')
    }
  })

  navbar.find('#item__dropdown').on({
    'mouseover': function () {
      third__level.show('400')
    },
    'mouseleave': function () {
      third__level.hide('400')
    }
  })
}
