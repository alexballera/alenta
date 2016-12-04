export default function () {
  var navbar = document.getElementById('header')
  var secondMenu = document.getElementById('dropdown__secondlevel')

  window.onscroll = () => {
    doHeaderLittle()
  }

  function doHeaderLittle () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('header--little')
      // secondMenu.style.marginTop = 0
    } else {
      navbar.classList.remove('header--little')
      // secondMenu.style.marginTop = '42px'
    }
  }
}
