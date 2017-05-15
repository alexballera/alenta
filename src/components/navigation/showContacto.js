'use strict'
import {$app} from '../layout/app'
import {Common} from '../navigation'
import hideViews from './hideViews'

const showContacto = () => {
  hideViews()
  Common()

  $app.find('#seccion-contacto').show('slow')
  $app.find('#li-contacto').addClass('activado')
  document.title = 'Contactenos'
}

module.exports = showContacto
