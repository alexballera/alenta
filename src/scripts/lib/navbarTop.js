import $ from 'jquery'

var header = $('#header')
var botonShow = header.find('.fa-bars')
var botonHide = header.find('.fa-window-close-o')
var topNavbar = header.find('#top__navbar')
var navbar = topNavbar.find('#navbar')
var secondLevel = navbar.find('.second__level')
var thirdLevel = navbar.find('.third__level')
var mediaQuery = window.matchMedia('screen and (min-width: 768px)')

export default () => {
  botonHide.hide()
  secondLevel.hide()
  thirdLevel.hide()

  var responsive = () => {
    if (mediaQuery.matches) {
      topNavbar.show()
    } else {
      topNavbar.hide()
    }
  }
  mediaQuery.addListener(responsive)

  botonShow.click(function (e) {
    e.preventDefault()
    topNavbar.show('slide', {direction: 'up'}, 1000)
    botonHide.show()
    botonShow.hide()
  })

  botonHide.click(function (e) {
    e.preventDefault()
    topNavbar.hide('slide', {direction: 'up'}, 1000)
    botonHide.hide()
    botonShow.show()
  })

  navbar.find('#dropdown__firstlevel').on({
    'mouseover': () => {
      secondLevel.show('400')
    },
    'mouseleave': () => {
      secondLevel.hide('400')
    }
  })

  navbar.find('#item__dropdown').on({
    'mouseover': () => {
      thirdLevel.show('400')
    },
    'mouseleave': () => {
      thirdLevel.hide('400')
    }
  })
}
