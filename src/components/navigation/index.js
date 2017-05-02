'use strict'

import {$app} from '../layout/app'
import hideViews from './hideViews'
import initHome from './initHome'

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
}
export {Common, Navigation}
