'use strict'
if (typeof (jQuery) === 'undefined') {
  var jQuery
  // Check if require is a defined function.
  if (typeof (require) === 'function') {
    jQuery = $ = require('jquery')
  // Else use the dollar sign alias.
  } else {
    jQuery = $
  }
}

$(function () {
  $('.dropdown-button').dropdown({
    hover: true,
    belowOrigin: true
  }
  )
})
