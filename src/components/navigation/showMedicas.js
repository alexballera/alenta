'use strict'
import {$app} from '../layout/app'
import {Common} from '../navigation'
import hideViews from './hideViews'

const showMedicas = () => {
  hideViews()
  Common()

  $app.find('#seccion-medicas').show('slow')
  $app.find('#li-medicas').addClass('activado')
  document.title = 'Areas Medicas'
}

module.exports = showMedicas
