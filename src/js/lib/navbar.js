'use strict'

$(document).ready(function () {
  $('.dropdown-button').dropdown({
    hover: true,
    belowOrigin: true,
    alignment: 'left',
    constrainWidth: false
  })

  $('.brand-logo').html("<img src='images/alenta-medical-care.png' alt='Alenta' />")
})
