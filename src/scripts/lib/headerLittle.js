export default function () {
  var navbar = document.getElementById('header')

  window.onscroll = () => {
    doHeaderLittle()
  }

  function doHeaderLittle () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('header--little')
    } else {
      navbar.classList.remove('header--little')
    }
  }
}
