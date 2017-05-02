'use strict'
import {$app} from '../layout/app'

export default () => {
  $app.find('#navbar-top').hide()
  $app.find('#link-seccion').hide()
  $app.find('#link-seccion-sidenav').hide()
  $app.find('#carousel').hide()
  $app.find('#home').hide()
  $app.find('#loader').hide()
  $app.find('#footer').hide()

  $app.find('#seccion-consultorios').hide()
  $app.find('#li-consultorios').removeClass('activado')

  $app.find('#seccion-medicas').hide()
  $app.find('#li-medicas').removeClass('activado')

  $app.find('#seccion-cirugias').hide()
  $app.find('#li-cirugias').removeClass('activado')

  $app.find('#seccion-hotel').hide()
  $app.find('#li-hotel').removeClass('activado')

  $app.find('#seccion-contacto').hide()
  $app.find('#li-contacto').removeClass('activado')
}
