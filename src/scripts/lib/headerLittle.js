export default function (){
  var navbar = document.getElementById('header')

  window.onscroll = () => {
    doHeaderLittle()
  }

  function doHeaderLittle () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      navbar.classList.add('header--little')
    } else {
      navbar.classList.remove('header--little')
    }
  }
}
