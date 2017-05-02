'use strict'
import {$app} from '../layout/app'
import {Common} from '../navigation'
import hideViews from './hideViews'

const onClickShowCirugias = (e) => {
  e.preventDefault()
  hideViews()
  Common()

  $app.find('#seccion-cirugias').show('slow')
  $app.find('#li-cirugias').addClass('activado')
  document.title = 'Salas De Cirugías'
}

module.exports = onClickShowCirugias
