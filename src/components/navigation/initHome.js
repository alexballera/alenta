'use strict'
import {$app} from '../layout/app'
// import {showHome} from './showHome'

export default () => {
  $app.find('#navbar-top').show('slow')
  $app.find('#seccion-consultorios').show('slow')

  /* $app.find('#loader').show('slow')

  setTimeout(() => {
    showHome()
  }, 3000) */
}
