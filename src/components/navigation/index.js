'use strict'

import {$app} from '../layout/app'
import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showConsultorios from './showConsultorios'
import showMedicas from './showMedicas'
import page from 'page'

const Common = () => {
  $app.find('#navbar-top').show('slow')
  $app.find('#link-home').hide()
  $app.find('#link-alenta').hide()
  $app.find('#link-seccion').show()
  $app.find('#link-seccion-sidenav').show()
}

const Navigation = () => {
  hideViews()
  initHome()
  page('/', showHome)
  page('/consultorios', showConsultorios)
  page('/areas-medicas', showMedicas)
  page()
}
export {Common, Navigation}
