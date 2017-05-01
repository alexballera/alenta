'use strict'
import {$app} from '../layout/app'
import {showHome} from './showHome'

export default () => {
  console.log('Estoy en initHome ')
  $app.find('#loader').show('slow')

  setTimeout(() => {
    showHome()
    console.log('SetTimeout 3 seg')
  }, 3000)
}
