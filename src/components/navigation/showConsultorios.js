'use strict'
import {$app} from '../layout/app'
import {Common} from '../navigation'
import hideViews from './hideViews'

const onClickShowConsultorios = (e) => {
  e.preventDefault()
  hideViews()
  Common()

  $app.find('#seccion-consultorios').show('slow')
  $app.find('#li-consultorios').addClass('activado')
  document.title = 'Consultorios'
}

module.exports = onClickShowConsultorios
