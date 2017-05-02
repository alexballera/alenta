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
}
