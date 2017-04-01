'use strict'

$(document).ready(function () {
  setTimeout(function () {
    console.log('Ejecutando JQuery')
    var navbar = $('.navbar-top')
    navbar.find('.dropdown-button').dropdown({
      hover: true,
      belowOrigin: true,
      alignment: 'left',
      constrainWidth: false
    })

    navbar.find('.navbar-top-item  > a').addClass('waves-effect waves-green')

    navbar.find('.navbar-top-item  > a:first').removeClass('waves-effect waves-green')

    $('#nav-mobile').find('.navbar-top-item  > a:first').removeClass('waves-effect waves-green')

    navbar.find('.brand-logo').html("<img src='images/alenta-medical-care.png' alt='Alenta' />")
  }, 3100)
})
