'use strict'
import {$app} from '../layout/app'

export default () => {
  $app.find('#navbar-top').hide()
  $app.find('#carousel').hide()
  $app.find('#home').hide()
  $app.find('#loader').hide()
  $app.find('#footer').hide()
}
