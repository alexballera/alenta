import $ from 'jquery'

var header = $('#header')
var boton_show = header.find('.fa-bars')
var boton_hide = header.find('.fa-window-close-o')
var top__navbar = header.find('#top__navbar')
var navbar = top__navbar.find('#navbar')
var second__level = navbar.find('.second__level')
var third__level = navbar.find('.third__level')
var mediaQuery = window.matchMedia('screen and (min-width: 768px)')

export default () => {
  boton_hide.hide()
  second__level.hide()
  third__level.hide()

  var responsive = () => {
    if (mediaQuery.matches) {
      top__navbar.show()
    } else {
      top__navbar.hide()
    }
  }
  mediaQuery.addListener(responsive)

  boton_show.click(function (e) {
    e.preventDefault()
    top__navbar.show('slide', {direction: 'up'}, 1000)
    boton_hide.show()
    boton_show.hide()
  })

  boton_hide.click(function (e) {
    e.preventDefault()
    top__navbar.hide('slide', {direction: 'up'}, 1000)
    boton_hide.hide()
    boton_show.show()
  })

  navbar.find('#dropdown__firstlevel').on({
    'mouseover': () => {
      second__level.show('400')
    },
    'mouseleave': () => {
      second__level.hide('400')
    }
  })

  navbar.find('#item__dropdown').on({
    'mouseover': () => {
      third__level.show('400')
    },
    'mouseleave': () => {
      third__level.hide('400')
    }
  })
}
