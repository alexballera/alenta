'use strict'

export default () => {
  // Scrollspy
  $('.scrollspy').scrollSpy({
    scrollOffset: 0
  })

  // ScrollFire
  var options = [
    { selector: '#barra-alenta',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options)

  var options2 = [
    { selector: '#barra-localization',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options2)

  var options3 = [
    { selector: '#barra-proyectos',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options3)

  var options4 = [
    { selector: '#barra-proyectos2',
      offset: 0,
      callback: function (el) {
        Materialize.fadeInImage($(el))
      }
    }
  ]
  Materialize.scrollFire(options4)
}
