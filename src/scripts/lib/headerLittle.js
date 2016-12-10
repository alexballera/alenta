var navbar = document.getElementById('header')
var mediaQuery = window.matchMedia('screen and (min-width: 1024px)')

export default () => {
  var responsive = () => {
    if (mediaQuery.matches) {
      window.onscroll = () => {
        doHeaderLittle()
      }
    }
  }
  mediaQuery.addListener(responsive)

  var doHeaderLittle = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('header--little')
    } else {
      navbar.classList.remove('header--little')
    }
  }
}
