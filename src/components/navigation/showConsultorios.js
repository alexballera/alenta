'use strict'
import {$app} from '../layout/app'
import {Common} from '../navigation'
import hideViews from './hideViews'

const onClickShowConsultorios = (e) => {
  e.preventDefault()
  hideViews()
  document.title = 'Consultorios'
  Common()
  $app.find('#seccion-consultorios').show('slow')
}

module.exports = onClickShowConsultorios
