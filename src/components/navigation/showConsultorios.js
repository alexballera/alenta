'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'

const onClickShowConsultorios = (e) => {
  e.preventDefault()
  hideViews()
  $app.find('#navbar-top').show('slow')
  $app.find('#seccion-consultorios').show('slow')
}

module.exports = onClickShowConsultorios
