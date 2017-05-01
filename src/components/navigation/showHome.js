'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'

const showDefault = () => {
  hideViews()
  $app.find('#navbar-top').show('slow')
  $app.find('#carousel').show('slow')
  $app.find('#home').show('slow')
  $app.find('#footer').show('slow')
}

const onClickshowHome = (e) => {
  e.preventDefault()
  showDefault()
}

const showHome = () => {
  showDefault()
}
export {showHome, onClickshowHome}
