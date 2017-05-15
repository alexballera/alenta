'use strict'
import {$app} from '../layout/app'
import {Common} from '../navigation'
import hideViews from './hideViews'

const showHotel = () => {
  hideViews()
  Common()

  $app.find('#seccion-hotel').show('slow')
  $app.find('#li-hotel').addClass('activado')
  document.title = 'Hotel'
}

module.exports = showHotel
